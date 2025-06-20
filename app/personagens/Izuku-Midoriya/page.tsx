import Image from "next/image";
import Header from "../../components/Header/page";

import RebeccaImage from "../../../public/rebeccaImage1.jpg"
import ZeusImage from "../../../public/zeusImage1.webp"
import PoseidonImage from "../../../public/poseidonImage1.webp"

export default function IzukuMidoriya() {
  return (
    <div>
      <Header />
      <main className="flex flex-col sm:flex-row flex-wrap w-full bg-[#1B1A21]">
        {/* Bloco 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/5 p-[20px]">
          {/* Side Info */}
          <div className="border-[12px]-[#1B1A21] rounded-t-[20px] rounded-b-[10px]">
            <div className="flex bg-[#82888A] h-[40px] justify-center items-center rounded-t-[20px] border-b border-black">
              <p className="text-[25px]">Izuku Midoriya</p>
            </div>
            <div className="flex h-[250px] justify-center items-center">
              <Image src={PoseidonImage} alt="" className="object-cover w-full h-full" />
            </div>
            <div className="bg-[#1B1A21]">
              <p className="flex bg-[#34343B] h-[35px] justify-center items-center text-white">Identidade</p>

              <div className="flex w-[100%] text-white">
                <div className="flex w-[50%] justify-center">
                  <p>Nome Completo:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Izuku Midoriya</p>
                </div>
              </div>

              <div className="flex w-[100%] text-white">
                <div className="flex w-[50%] justify-center">
                  <p>Alias:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Deku</p>
                </div>
              </div>

              <div className="flex w-[100%] text-white">
                <div className="flex w-[50%] justify-center">
                  <p>Idade:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>16</p>
                </div>
              </div>

              <div className="flex w-[100%] text-white">
                <div className="flex w-[50%] justify-center">
                  <p>Data de Nascimento:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>16 de Junho</p>
                </div>
              </div>

              <div className="flex w-[100%] text-white">
                <div className="flex w-[50%] justify-center">
                  <p>Genêro</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Masculino</p>
                </div>
              </div>

              <div className="flex w-[100%] text-white">
                <div className="flex w-[50%] justify-center">
                  <p>Espécie</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Mutante</p>
                </div>
              </div>

              <div className="flex w-[100%] text-white">
                <div className="flex w-[50%] justify-center">
                  <p>Status Atual:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Vivo</p>
                </div>
              </div>

              <div className="flex w-[100%] text-white">
                <div className="flex w-[50%] justify-center">
                  <p>Afiliação:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>E.N.A</p>
                </div>
              </div>

              <p className="flex bg-[#34343B] text-white h-[35px] justify-center items-center">Aparência</p>

              <div className="flex w-[100%] text-white">
                <div className="flex w-[50%] justify-center">
                  <p>Tom de Pele:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Branca</p>
                </div>
              </div>

              <div className="flex w-[100%] text-white">
                <div className="flex w-[50%] justify-center">
                  <p>Cor dos Olhos:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Verdes</p>
                </div>
              </div>

              <div className="flex w-[100%] text-white">
                <div className="flex w-[50%] justify-center">
                  <p>Tom de Pele:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Branca</p>
                </div>
              </div>

              <p className="flex bg-[#34343B] text-white h-[35px] justify-center items-center">Relacionados</p>

              <div className="flex w-[100%] text-white">
                <div className="flex w-[50%] justify-center">
                  <p>Tom de Pele:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Branca</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bloco 2 */}
        <div className="flex w-full sm:w-1/2 lg:w-4/5 p-[20px] justify-center">
          <div className="flex flex-col rounded-[10px] bg-[#979B9E] w-[80%] p-[20px] gap-[40px]">
            <div className="flex flex-col gap-[20px]">
              <h1 className="text-[40px]">Izuku Midoriya</h1>
              <div className="flex gap-[10px] border-b-[4px] border-[#3E526E]">
                {["Visão geral", "Galeria", "Relacionamentos", "Aparição"].map((label, index) => (
                  <button
                    key={index}
                    className="relative px-4 py-2 text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#3E526E] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-[60%] p-[20px] bg-[#3E526E] border-l-[5px] border-[#EBD6FB] gap-[10px] italic text-white">
              <div>
                <p>"Não estou aqui para fazer amigos. Estou aqui para mudar o mundo, mesmo que tenha que queimá-lo primeiro."</p>
              </div>
              <div className="flex justify-end">
                <p>— Tyler, Temporada 2, Episódio 7</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
