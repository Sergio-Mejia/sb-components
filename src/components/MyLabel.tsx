import "./MyLabel.css";

interface Props {
  /**
   * Text to display
   */
  label: string;

  /**
   * Label Size
   */
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * Capitalized label
   */
  allCaps?: boolean;

  /**
   * Label color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";

  /**
   * Font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
}: Props) => {
  return (
    <span style={{ color: fontColor }} className={`${size} ${color} label`}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
