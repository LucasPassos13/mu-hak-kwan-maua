const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Academia Mu Hak Kwan</h3>
          <p className="text-secondary-foreground/70 mb-6">
            Kiosanin Joel - Hapkido tradicional em Mauá
          </p>
          <div className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Mu Hak Kwan. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;