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
}

export const MyLabel = ({ label, size = "normal" }: Props) => {
  return <span className={`${size}`}>{label}</span>;
};
