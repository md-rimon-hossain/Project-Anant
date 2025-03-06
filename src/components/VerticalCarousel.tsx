import { useEffect, useRef, useState } from "react";

interface VerticalCarouselProps {
  images: string[];
  autoplaySpeed?: number;
  height?: string;
  direction?: "top" | "bottom";
  className?: string;
}

const createGroups = (images: string[], groupSize: number): string[][] => {
  const groups: string[][] = [];
  for (let i = 0; i < images.length; i += groupSize) {
    let group = images.slice(i, i + groupSize);
    if (group.length < groupSize) {
      const needed = groupSize - group.length;
      group = group.concat(images.slice(0, needed));
    }
    groups.push(group);
  }
  return groups;
};

export default function VerticalCarousel({
  images,
  autoplaySpeed = 5000,
  height = "100vh",
  direction = "top",
  className = "",
}: VerticalCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const startTimeRef = useRef<number>(Date.now());
  const containerHeightRef = useRef<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(isHovered);
  const isInitialMount = useRef(true);

  const groupSize = 4;
  const groups = createGroups(images, groupSize);
  const trackGroups = groups.length > 0 ? [...groups, ...groups] : [];
  const totalOriginalGroups = groups.length;

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    startTimeRef.current = Date.now();
  }, [direction]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const now = Date.now();
    const elapsed = now - startTimeRef.current;
    const previousIsHovered = !isHovered;
    const previousSpeed = previousIsHovered ? autoplaySpeed * 2 : autoplaySpeed;
    const newSpeed = isHovered ? autoplaySpeed * 2 : autoplaySpeed;
    const newEffectiveElapsed = (elapsed * newSpeed) / previousSpeed;

    startTimeRef.current = now - newEffectiveElapsed;
  }, [isHovered, autoplaySpeed]);

  useEffect(() => {
    if (images.length === 0) return;

    const container = containerRef.current;
    if (!container) return;

    const updateHeight = () => {
      containerHeightRef.current = container.clientHeight;
      if (trackRef.current) {
        trackRef.current.style.height = `${trackGroups.length * 100}%`;
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(container);

    const animate = () => {
      if (!containerHeightRef.current) return;

      const currentSpeed = isHoveredRef.current
        ? autoplaySpeed * 2
        : autoplaySpeed;
      const elapsedTime = Date.now() - startTimeRef.current;
      const scrollDistance =
        (elapsedTime / currentSpeed) * containerHeightRef.current;
      const totalHeight = totalOriginalGroups * containerHeightRef.current;

      let translateY;
      if (direction === "top") {
        translateY = -scrollDistance % totalHeight;
      } else {
        translateY = -totalHeight + (scrollDistance % totalHeight);
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateY(${translateY}px)`;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      resizeObserver.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [images, autoplaySpeed, trackGroups.length, totalOriginalGroups, direction]);

  if (images.length === 0) {
    return null;
  }

  return (
    <div 
      ref={containerRef}
      className={`vertical-carousel-container ${className}`}
      style={{ 
        height: height,
        overflow: "hidden",
        position: "relative",
        width: "30%"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={trackRef}
        className="carousel-track"
        style={{
          display: "flex",
          flexDirection: "column",
          willChange: "transform",
        }}
      >
        {trackGroups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="flex-shrink-0 py-6 flex flex-col gap-3"
            style={{
              height: `${100 / trackGroups.length}%`,
              width: "100%",
              flexShrink: 0,
            }}
          >
            {group.map((src, imgIndex) => (
              <img
                key={`${groupIndex}-${imgIndex}`}
                className="rounded-lg"
                src={src}
                alt={`Slide ${groupIndex + 1} - Image ${imgIndex + 1}`}
                style={{
                  width: "100%",
                  height: `${100 / groupSize}%`,
                  objectFit: "cover",
                  display: "block",
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}