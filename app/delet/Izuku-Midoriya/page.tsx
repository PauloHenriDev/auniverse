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
          {/* Side Info Div*/}
          <div className="border-[3px] border-[#82888A] rounded-t-[24px] rounded-b-[10px]">
            {/* Title Div */}
            <div className="flex bg-[#82888A] h-[40px] justify-center items-center rounded-t-[20px] border-b border-black">
              <p className="text-[25px]">Izuku Midoriya</p>
            </div>
            {/* Image Div */}
            <div className="flex h-[250px] justify-center items-center">
              <Image src={PoseidonImage} alt="" className="object-cover w-full h-full" />
            </div>
            {/* Side Info Data */}
            <div className="flex flex-col gap-[8px] bg-[#1B1A21]">
              <p className="flex bg-[#34343B] h-[35px] justify-center items-center text-white border-t border-black">Identidade</p>
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

          {/* Content Block */}
          <div className="flex flex-col rounded-[10px] bg-[#979B9E] w-[80%] p-[20px] gap-[40px]">
            {/* Header Content */}
            <div className="flex flex-col gap-[20px]">
              <h1 className="text-[40px]">Izuku Midoriya</h1>
              <div className="flex gap-[10px] border-b-[1px] border-[#3E526E]">
                {["Visão Geral", "Aparência", "Personalidade", "Habilidades", "História", "Relacionamentos", "Curiosidades"].map((label, index) => (
                  <button
                    key={index}
                    className="relative px-4 py-2 text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#3E526E] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Citação Div */}
            <div className="flex flex-col w-[60%] p-[20px] bg-[#3E526E] border-l-[5px] border-[#EBD6FB] gap-[10px] italic text-white">
              <div>
                <p>"Não estou aqui para fazer amigos. Estou aqui para mudar o mundo, mesmo que tenha que queimá-lo primeiro."</p>
              </div>
              <div className="flex justify-end">
                <p>— Tyler, Temporada 2, Episódio 7</p>
              </div>
            </div>
            
            {/* Visão Geral Div */}
            <div className="flex flex-col border-b-[1px] border-[#3E526E] pb-[40px]">
              <div className="h-[6px] w-[40px] bg-[#3E526E] mb-[5px]"></div>
              <h2 className="text-[25px] w-fit">Visão Geral</h2>
              <div>
                <p>
                  Tyler é um dos protagonistas principais da série, conhecido por sua personalidade rebelde e habilidades de combate excepcionais. Originário das terras baixas de Nova Elysium, ele cresceu em meio à pobreza e opressão do regime autoritário que governa o mundo.<br /><br />
                  Com uma infância marcada por tragédias e perdas, Tyler desenvolveu um forte senso de justiça e uma determinação inabalável para mudar o sistema. Sua jornada começa quando ele se junta à Resistência após testemunhar a execução de sua família por forças do governo.
                </p>
              </div>
            </div>

            {/* Aparência Div */}
            <div className="flex flex-col border-b-[1px] border-[#3E526E] pb-[40px]">
              <div className="h-[6px] w-[40px] bg-[#3E526E] mb-[5px]"></div>
              <h2 className="text-[25px] w-fit">Aparência</h2>
              <div>
                <p>
                  Tyler é um homem de 27 anos, com altura acima da média e físico atlético. Possui cabelos loiros desgrenhados que frequentemente caem sobre seus olhos azuis intensos. Uma cicatriz proeminente corta sua sobrancelha direita, resultado de seu primeiro confronto com as forças de segurança de Elysium.<br /><br />
                  Seu visual característico inclui uma jaqueta azul desgastada com o símbolo da Resistência discretamente costurado na manga. Raramente é visto sem suas luvas de combate personalizadas e botas reforçadas, sempre pronto para entrar em ação.
                </p>
              </div>
            </div>

            {/* Personalidade Div */}
            <div className="flex flex-col border-b-[1px] border-[#3E526E] pb-[40px]">
              <div className="h-[6px] w-[40px] bg-[#3E526E] mb-[5px]"></div>
              <h2 className="text-[25px] w-fit">Personalidade</h2>
              <div>
                <p>
                  Tyler é conhecido por seu temperamento explosivo e tendência a agir antes de pensar. Apesar disso, demonstra uma lealdade feroz aos seus aliados e uma compaixão surpreendente pelos inocentes. Sua natureza contraditória o torna imprevisível, mas também extremamente adaptável em situações de crise.<br /><br />
                  Possui um senso de humor sarcástico que frequentemente serve como mecanismo de defesa para lidar com o trauma de seu passado. Embora relutante em assumir posições de liderança, seus companheiros naturalmente o seguem devido ao seu carisma natural e coragem inabalável.<br /><br />
                  Tyler luta constantemente contra seus próprios demônios internos, questionando se seus métodos violentos o tornam diferente dos opressores que combate.
                </p>
              </div>
            </div>

            {/* Habilidades Div */}
            <div className="flex flex-col border-b-[1px] border-[#3E526E] pb-[40px]">
              <div className="h-[6px] w-[40px] bg-[#3E526E] mb-[5px]"></div>
              <h2 className="text-[25px] w-fit">Habilidades</h2>
              <div>
                <p>
                  texto
                </p>
                <ul className="list-disc pl-[20px] flex flex-col gap-[20px]">
                  <li>poder 1: Explicação Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quis nam soluta porro numquam sunt possimus perspiciatis amet obcaecati nisi magnam earum nobis, pariatur consequatur ex aliquid. Impedit, quas. Aperiam!
                  Dignissimos veritatis adipisci praesentium quibusdam ea, soluta recusandae neque sed magni odio error consequuntur asperiores aliquid, quasi, voluptates eum distinctio! Minus atque fugiat dolorem odit impedit dolores, culpa voluptatum perferendis.
                  Maxime cum ducimus commodi in, dignissimos ipsam architecto? Laborum debitis quo ab asperiores assumenda dolor hic inventore dignissimos, voluptatibus eos eum quod nam, iusto unde facilis modi minus explicabo consectetur?
                  Iste expedita dicta exercitationem fuga veritatis culpa dolores aliquid nostrum corporis, numquam natus temporibus doloribus, non inventore. Non minus error, architecto culpa placeat ad animi dolorem harum id! Natus, quam.</li>
                  <li>poder 2: Explicação</li>
                  <li>poder 3: Explicação</li>
                </ul>
              </div>
            </div>

            {/* Relacionamentos Div */}
            <div className="flex flex-col border-b-[1px] border-[#3E526E] pb-[40px]">
              <div className="h-[6px] w-[40px] bg-[#3E526E] mb-[5px]"></div>
              <h2 className="text-[25px] w-fit">Relacionamentos</h2>
              <div className="flex flex-col gap-[20px]">
                <div>
                  <h3 className="text-[20px]">Nome da Pessoa</h3>
                  <div>
                    <p>
                      descrição
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-[20px]">Nome da Pessoa</h3>
                  <div>
                    <p>
                      descrição
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-[20px]">Nome da Pessoa</h3>
                  <div>
                    <p>
                      descrição
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-[20px]">Nome da Pessoa</h3>
                  <div>
                    <p>
                      descrição
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Curiosidades Div */}
            <div className="flex flex-col border-b-[1px] border-[#3E526E] pb-[40px]">
              <div className="h-[6px] w-[40px] bg-[#3E526E] mb-[5px]"></div>
              <h2 className="text-[25px] w-fit">Curiosidades</h2>
              <div>
                <ul className="list-disc pl-[20px] flex flex-col gap-[20px]">
                  <li>Curiosidades 1: Explicação Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab quis nam soluta porro numquam sunt possimus perspiciatis amet obcaecati nisi magnam earum nobis, pariatur consequatur ex aliquid. Impedit, quas. Aperiam!
                  Dignissimos veritatis adipisci praesentium quibusdam ea, soluta recusandae neque sed magni odio error consequuntur asperiores aliquid, quasi, voluptates eum distinctio! Minus atque fugiat dolorem odit impedit dolores, culpa voluptatum perferendis.
                  Maxime cum ducimus commodi in, dignissimos ipsam architecto? Laborum debitis quo ab asperiores assumenda dolor hic inventore dignissimos, voluptatibus eos eum quod nam, iusto unde facilis modi minus explicabo consectetur?
                  Iste expedita dicta exercitationem fuga veritatis culpa dolores aliquid nostrum corporis, numquam natus temporibus doloribus, non inventore. Non minus error, architecto culpa placeat ad animi dolorem harum id! Natus, quam.</li>
                  <li>Curiosidades 2: Explicação</li>
                  <li>Curiosidades 3: Explicação</li>
                </ul>
              </div>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
}
