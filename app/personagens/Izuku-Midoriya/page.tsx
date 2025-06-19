import Image from "next/image";
import Header from "../../components/Header/page";

import RebeccaImage from "../../../public/rebeccaImage1.jpg"

export default function IzukuMidoriya() {
  return (
    <div>
      <Header />
      <main className="flex flex-col sm:flex-row flex-wrap w-full border-4 border-red-600 h-auto">
        {/* Bloco 1 */}
        <div className="w-full sm:w-1/2 lg:w-1/5 bg-red-300 p-4">
          <div className="border rounded-t-[20px] rounded-b-[10px]">
            <div className="flex bg-red-500 h-[40px] justify-center items-center rounded-t-[20px]">
              <p>Izuku Midoriya</p>
            </div>
            <div className="flex bg-blue-500 h-[250px] justify-center items-center">
              {/* <Image src={RebeccaImage} alt="" className="object-cover w-full h-full" /> */}
            </div>
            <div className="">
              <p className="flex bg-red-500 h-[35px] justify-center items-center">Identidade</p>

              <div className="flex w-[100%]">
                <div className="flex w-[50%] justify-center">
                  <p>Nome Completo:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Izuku Midoriya</p>
                </div>
              </div>

              <div className="flex w-[100%]">
                <div className="flex w-[50%] justify-center">
                  <p>Alias:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Deku</p>
                </div>
              </div>

              <div className="flex w-[100%]">
                <div className="flex w-[50%] justify-center">
                  <p>Idade:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>16</p>
                </div>
              </div>

              <div className="flex w-[100%]">
                <div className="flex w-[50%] justify-center">
                  <p>Data de Nascimento:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>16 de Junho</p>
                </div>
              </div>

              <div className="flex w-[100%]">
                <div className="flex w-[50%] justify-center">
                  <p>Genêro</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Masculino</p>
                </div>
              </div>

              <div className="flex w-[100%]">
                <div className="flex w-[50%] justify-center">
                  <p>Espécie</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Mutante</p>
                </div>
              </div>

              <div className="flex w-[100%]">
                <div className="flex w-[50%] justify-center">
                  <p>Status Atual:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Vivo</p>
                </div>
              </div>

              <div className="flex w-[100%]">
                <div className="flex w-[50%] justify-center">
                  <p>Afiliação:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>E.N.A</p>
                </div>
              </div>

              <p className="flex bg-red-500 h-[35px] justify-center items-center">Aparência</p>

              <div className="flex w-[100%]">
                <div className="flex w-[50%] justify-center">
                  <p>Tom de Pele:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Branca</p>
                </div>
              </div>

              <div className="flex w-[100%]">
                <div className="flex w-[50%] justify-center">
                  <p>Cor dos Olhos:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Verdes</p>
                </div>
              </div>

              <div className="flex w-[100%]">
                <div className="flex w-[50%] justify-center">
                  <p>Tom de Pele:</p>
                </div>
                <div className="flex w-[50%] justify-center">
                  <p>Branca</p>
                </div>
              </div>

              <p className="flex bg-red-500 h-[35px] justify-center items-center">Relacionados</p>

              <div className="flex w-[100%]">
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
        <div className="flex w-full sm:w-1/2 lg:w-4/5 bg-blue-300 p-4 justify-center">
          <div className="bg-white w-[80%]">
            <p>textp</p>
          </div>
        </div>
      </main>
    </div>
  );
}
