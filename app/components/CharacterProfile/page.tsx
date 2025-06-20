/*
  Componente reutilizável para ficha de personagem
  - Permite ancoragem via botões (scroll para seções)
  - Responsivo
  - Tailwind para estilização
*/

"use client";

import Image from "next/image";
import React from "react";

type InfoPair = { label: string; value: string };

interface CharacterProfileProps {
  name: string;
  alias: string;
  age: number;
  birthday: string;
  gender: string;
  species: string;
  status: string;
  affiliation: string;
  appearance: { skinTone: string; eyeColor: string };
  image: any;
  quote: string;
  quoteSource: string;
  sections: {
    id: string;
    title: string;
    content: React.ReactNode;
  }[];
}

const CharacterProfile: React.FC<CharacterProfileProps> = ({
  name,
  alias,
  age,
  birthday,
  gender,
  species,
  status,
  affiliation,
  appearance,
  image,
  quote,
  quoteSource,
  sections,
}) => {
  const infoBlock = (title: string, data: InfoPair[]) => (
    <>
      <p className="flex bg-[#34343B] text-white h-[35px] justify-center items-center">
        {title}
      </p>
      {data.map((pair, i) => (
        <div key={i} className="flex w-full text-white">
          <div className="w-1/2 text-center">
            <p>{pair.label}</p>
          </div>
          <div className="w-1/2 text-center">
            <p>{pair.value}</p>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <main className="flex flex-col sm:flex-row flex-wrap w-full bg-[#1B1A21]">
      {/* Sidebar */}
      <div className="w-full sm:w-1/2 lg:w-1/5 p-[20px]">
        <div className="border-[3px] border-[#82888A] rounded-t-[24px] rounded-b-[10px]">
          <div className="flex bg-[#82888A] h-[40px] justify-center items-center rounded-t-[20px] border-b border-black">
            <p className="text-[25px]">{name}</p>
          </div>
          <div className="flex h-[250px] justify-center items-center">
            <Image src={image} alt="Imagem do personagem" className="object-cover w-full h-full" />
          </div>
          <div className="flex flex-col gap-[8px] bg-[#1B1A21]">
            {infoBlock("Identidade", [
              { label: "Nome Completo:", value: name },
              { label: "Alias:", value: alias },
              { label: "Idade:", value: `${age}` },
              { label: "Data de Nascimento:", value: birthday },
              { label: "Genêro", value: gender },
              { label: "Espécie", value: species },
              { label: "Status Atual:", value: status },
              { label: "Afiliação:", value: affiliation },
            ])}

            {infoBlock("Aparência", [
              { label: "Tom de Pele:", value: appearance.skinTone },
              { label: "Cor dos Olhos:", value: appearance.eyeColor },
            ])}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex w-full sm:w-1/2 lg:w-4/5 p-[20px] justify-center">
        <div className="flex flex-col rounded-[10px] bg-[#979B9E] w-[80%] p-[20px] gap-[40px]">
          {/* Header */}
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-[40px]">{name}</h1>
            <div className="flex gap-[10px] border-b-[1px] border-[#3E526E] flex-wrap">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="relative px-4 py-2 text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#3E526E] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="flex flex-col w-full md:w-[60%] p-[20px] bg-[#3E526E] border-l-[5px] border-[#EBD6FB] gap-[10px] italic text-white break-words">
            <p>"{quote}"</p>
            <div className="flex justify-end">
              <p className="break-words whitespace-normal text-right max-w-full">— {quoteSource}</p>
            </div>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="flex flex-col border-b-[1px] border-[#3E526E] pb-[40px] scroll-mt-[100px]">
              <div className="h-[6px] w-[40px] bg-[#3E526E] mb-[5px]"></div>
              <h2 className="text-[25px] w-fit">{section.title}</h2>
              <div>{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CharacterProfile;
