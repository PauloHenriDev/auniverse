"use client";

import Image from "next/image";
import React from "react";
import '../globals.css';

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
  appearance: {
    skinTone: string;
    eyeColor: string;
  };
  image: string;
  quote: string;
  quoteSource: string;
  sections: {
    id: string;
    title: string;
    content: string;
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
      <p className="flex info-title text-sidebar h-[35px] justify-center items-center">
        {title}
      </p>
      {data.map((pair, i) => (
        <div key={i} className="flex w-full text-sidebar">
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
    <main className="flex flex-col sm:flex-row flex-wrap w-full bg-main transition-colors duration-300">
      {/* Sidebar */}
      <div className="w-full sm:w-1/2 lg:w-1/5 p-[20px]">
        <div className="border-[3px] sidebar-title-border rounded-t-[24px] rounded-b-[10px]">
          <div className="flex sidebar-title h-[40px] justify-center items-center rounded-t-[20px] border-b border-black">
            <p className="text-[25px]">{name}</p>
          </div>
          <div className="flex h-[250px] justify-center items-center overflow-hidden">
            <Image
              src={image}
              alt={`Imagem de ${name}`}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-[8px] info-content">
            {infoBlock("Identidade", [
              { label: "Nome Completo:", value: name },
              { label: "Alias:", value: alias },
              { label: "Idade:", value: `${age}` },
              { label: "Nascimento:", value: birthday },
              { label: "Gênero:", value: gender },
              { label: "Espécie:", value: species },
              { label: "Status:", value: status },
              { label: "Afiliação:", value: affiliation },
            ])}

            {infoBlock("Aparência", [
              { label: "Tom de Pele:", value: appearance.skinTone },
              { label: "Cor dos Olhos:", value: appearance.eyeColor },
            ])}
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex w-full sm:w-1/2 lg:w-4/5 p-[20px] justify-center">
        <div className="flex flex-col rounded-[10px] bg-content w-[80%] p-[20px] gap-[40px]">
          {/* Cabeçalho e Navegação */}
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

          {/* Citação */}
          {quote && (
            <div className="flex flex-col w-full md:w-[60%] p-[20px] quote-bg border-l-[5px] quote-border gap-[10px] italic quote-text">
              <p>"{quote}"</p>
              <div className="flex justify-end">
                <p>— {quoteSource}</p>
              </div>
            </div>
          )}

          {/* Seções */}
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="flex flex-col border-b-[1px] border-[#3E526E] pb-[40px] scroll-mt-[100px]"
            >
              <div className="h-[6px] w-[40px] bg-[#3E526E] mb-[5px]"></div>
              <h2 className="text-[25px] w-fit">{section.title}</h2>
              <div className="whitespace-pre-line">{section.content}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CharacterProfile;
