import { Footer } from "flowbite-react";

export default function FooterContainer() {
  return (
    <>
      <Footer className="mt-5 p-9 shadow-lg border" container={false}>
        <Footer.Copyright
          href="#"
          by="Copyright @ 2022 Colab. All Rights Reserved."
        />
        <Footer.LinkGroup className="gap-4">
          <Footer.Link className="hover:text-blue-700" href="#">
            Termos de Uso
          </Footer.Link>
          <Footer.Link className="hover:text-blue-700" href="#">
            Política de Privacidade e Uso
          </Footer.Link>
        </Footer.LinkGroup>
      </Footer>
    </>
  );
}
