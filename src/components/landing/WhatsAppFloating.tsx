import whatsappIcon from "@/assets/whatsapp-icon.svg";

const WhatsAppFloating = () => {
  return (
    <a
      href="https://wa.me/573001244665?text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n%20del%20mini%20compresor%20portatil"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      style={{
        position: "fixed",
        bottom: "86px",
        left: "20px",
        width: "80px",
        height: "80px",
        backgroundColor: "#25D366",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 9999,
        cursor: "pointer",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10" />
    </a>
  );
};

export default WhatsAppFloating;
