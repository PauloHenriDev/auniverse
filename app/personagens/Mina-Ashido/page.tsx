import Header from "../../components/Header/page";
import CharacterProfile from "../../components/CharacterProfile/page";

import PoseidonImage from "../../../public/poseidonImage1.webp";
import IzukuMidoriyaImage from "../../../public/izukuMidoriyaImage1.jpg";

export default function MinaAshido() {
  return (
    <div>
        <Header />
        <CharacterProfile
            name="Mina Ashido"
            alias="Pinky"
            age={16}
            birthday="16 de Junho"
            gender="Feminino"
            species="Mutante"
            status="Vivo"
            affiliation="E.N.A"
            appearance={{ skinTone: "Branca", eyeColor: "Verdes" }}
            image={IzukuMidoriyaImage}
            quote="Se você tem medo de mim… é porque ainda não dançou comigo."
            quoteSource="Mina Ashido"
            sections={[
                // da para por mais, o último não precisa de virgula
                // Visão Geral
                {
                id: "visao-geral",
                title: "Visão Geral",
                content: <p className="mt-[5px]">Mina é uma das mutantes mais visivelmente distintas de sua geração. Com pele rosa, olhos negros com pupilas amarelas, e chifres curvos, ela é impossível de passar despercebida — e, infelizmente, isso sempre a tornou um alvo fácil para preconceito. Enquanto muitos mutantes tentam esconder sua aparência, Mina escolheu o caminho contrário: abraçou quem é com cor, estilo e movimento.<br /><br />
                Estudante do Colégio Horizonte, Mina é uma das líderes do animado e popular Clube de Dança, onde expressa sua identidade, combate o estigma contra mutantes e inspira outros jovens a se aceitarem. Sua dança é mais que arte — é resistência.</p>,
                },
                // Personalidade
                {
                    id: "personalidade",
                    title: "Personalidade",
                    content: <p className="mt-[5px]">Mina é alegre, extrovertida, vibrante e extremamente sociável. Está sempre cercada de amigos e dificilmente é vista sem um sorriso. Ama festas, encontros e agitação, e fica profundamente chateada quando é deixada de fora — ela precisa de conexão social como precisa de ar.<br /><br />
                    Apesar da aparência descontraída e comportamento brincalhão, Mina tem um lado perfeccionista e intenso, especialmente no Clube de Dança. Quando está ensinando ou coreografando, adota uma postura séria e exigente, surpreendendo até os colegas mais próximos. Usa a dança como forma de expressão emocional e também como ferramenta de reconciliação: já foi capaz de unir colegas brigados apenas com um treino de coreografia.<br /><br />
                    Por baixo da energia alegre, Mina carrega marcas emocionais do preconceito que sempre enfrentou — desde crianças rindo de seus chifres até adultos a evitando em locais públicos. Ela lida com isso com bom humor... mas não sem dor.</p>,
                },
                // Aparência
                {
                id: "aparencia",
                title: "Aparência",
                content: <p className="mt-[5px]">Mina é alegre, extrovertida, vibrante e extremamente sociável. Está sempre cercada de amigos e dificilmente é vista sem um sorriso. Ama festas, encontros e agitação, e fica profundamente chateada quando é deixada de fora — ela precisa de conexão social como precisa de ar.<br /><br />
                Apesar da aparência descontraída e comportamento brincalhão, Mina tem um lado perfeccionista e intenso, especialmente no Clube de Dança. Quando está ensinando ou coreografando, adota uma postura séria e exigente, surpreendendo até os colegas mais próximos. Usa a dança como forma de expressão emocional e também como ferramenta de reconciliação: já foi capaz de unir colegas brigados apenas com um treino de coreografia.<br /><br />
                Por baixo da energia alegre, Mina carrega marcas emocionais do preconceito que sempre enfrentou — desde crianças rindo de seus chifres até adultos a evitando em locais públicos. Ela lida com isso com bom humor... mas não sem dor.</p>,
                },
                // Habilidades
                {
                    id: "habilidades",
                    title: "Habilidades",
                    content: <>
                        <p className="mb-[5px] mt-[5px]">Mina Ashido Possui uma podera de fodase quirk emissor repecetor aqui estão as habilidades</p>
                        <ul className="flex flex-col list-disc pl-[20px] gap-[10px]">
                            <li>
                                <p><strong>Ácido Corporal:</strong> Mina pode secretar um fluido corrosivo por sua pele, principalmente nas mãos e pés.</p>
                            </li>
                            <li>
                                <p><strong>Controle de Viscosidade e Intensidade:</strong> consegue variar o ácido de acordo com a situação — pode derreter metal ou simplesmente tornar o chão escorregadio.</p>
                            </li>
                            <li>
                                <p><strong>Resistência Natural:</strong> seu corpo é imune ao próprio ácido e a agentes químicos semelhantes.</p>
                            </li>
                        </ul>
                    </>,
                },
                // Equipamentos
                {
                    id: "equipamentos",
                    title: "Equipamentos",
                    content: <ul className="mt-[5px] flex flex-col list-disc pl-[20px] gap-[10px]">
                        <li><p>Tênis antiderrapantes especiais para dançar mesmo usando ácido</p></li>
                        <li><p>Toalhas e garrafinhas com compostos neutralizantes (em caso de vazamento ácido)</p></li>
                        <li><p>texto</p></li>
                    </ul>,
                },
                // História
                {
                    id: "historia",
                    title: "História",
                    content: <p className="mt-[5px]">Construção</p>,
                },
                // Relacionamentos
                {
                    id: "relacionamentos",
                    title: "Relacionamentos",
                    content: <p className="mt-[5px]">Construção</p>,
                },
                // Curiosidades
                {
                    id: "curiosidades",
                    title: "Curiosidades",
                    content: <ul className="mt-[5px] flex flex-col list-disc pl-[20px] gap-[10px]">
                        <li><p>Sabe mais sobre relacionamentos dos colegas do que deveria (adora ships)</p></li>
                        <li><p>Vive tentando ensinar Izuku a dançar — sem muito sucesso até agora.</p></li>
                        <li><p>Tirou nota vermelha em matemática, mas passou fazendo um vídeo educativo em forma de coreografia.</p></li>
                        <li><p>texto</p></li>
                    </ul>,
                }
            ]}
        />

    </div>
  )
}