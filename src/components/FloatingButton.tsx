import { MessageCircle } from "lucide-react";

export default function FloatingButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center text-white"
      style={{
        background: "linear-gradient(135deg,#ff1744,#7c4dff)"
      }}
    >
      <MessageCircle />
    </a>
  );
}