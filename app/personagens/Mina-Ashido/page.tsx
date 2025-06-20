import Header from "../../components/Header/page";
import CharacterProfile from "../../components/CharacterProfile/page";

import PoseidonImage from "../../../public/poseidonImage1.webp";

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
            image={PoseidonImage}
            quote="texto"
            quoteSource="Mina Ashido"
            sections={[
                {
                id: "visao-geral",
                title: "Visão Geral",
                content: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem quos quis debitis ipsum, enim odio officiis, optio laudantium nostrum vel in expedita quidem a provident error quae consequatur cumque.
                Cumque nulla, ut obcaecati repellat vel cupiditate quam eaque ipsa esse cum ex autem. Veritatis necessitatibus illum aspernatur quisquam natus suscipit, eveniet ullam neque, sequi laudantium sed quas deserunt dignissimos?
                Adipisci omnis deleniti velit molestias! Vitae commodi inventore voluptas, illo tempore iusto fugiat minima nisi, fuga aliquid quisquam provident perspiciatis tempora veritatis ratione mollitia repudiandae cum consequatur illum perferendis corporis!
                Reiciendis corporis nostrum itaque ut, possimus quam dignissimos eveniet consectetur accusamus, quod culpa. Officia iste adipisci est rem illum doloribus ex aperiam esse. Repellendus debitis ut, numquam tempore asperiores ipsam?</p>,
                },
                {
                id: "aparencia",
                title: "Aparência",
                content: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nostrum maiores, quam assumenda alias expedita cumque labore quibusdam quod. Asperiores repellendus voluptatibus odio laborum dolorum culpa nam quisquam perspiciatis explicabo.
                Doloremque, suscipit? Qui repellat, beatae, voluptas nostrum iure ab ut temporibus aspernatur placeat libero tempora iusto laborum architecto? Porro deleniti consectetur sint commodi laboriosam quam cupiditate cum pariatur ab rerum?
                Repellendus rem ad, adipisci corporis unde neque dicta quae quibusdam nihil. Nemo omnis modi adipisci numquam nam neque a rem mollitia blanditiis provident autem laboriosam, libero cumque velit quo recusandae!
                Sed incidunt commodi sit exercitationem sint assumenda aliquam odit dolorem asperiores recusandae tempora dicta, reiciendis dignissimos officia facere corporis aut, quibusdam illo. Quam, accusantium ad adipisci et doloremque placeat eos!</p>,
                },
                // Adicione mais seções conforme necessário, o último não precisa de virgula
                {
                    id: "personalidade",
                    title: "Personalidade",
                    content: <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio et accusantium sint assumenda maxime, architecto quasi ratione veniam nemo inventore illo suscipit temporibus totam quod molestias dicta, repellat laboriosam pariatur?
                    Quibusdam vitae dolorum commodi placeat, veniam ea odio maiores voluptatem tempora odit repudiandae, omnis quis eius quam enim est nesciunt illo rerum sed laboriosam aspernatur sunt. Eaque nemo assumenda in.
                    Minus enim, vel dolore facilis ea modi ducimus eligendi maiores similique facere quidem tempore repudiandae esse id nesciunt, necessitatibus possimus, incidunt nisi. Minus minima quo consequuntur repellendus veniam quae dignissimos!
                    Quo deserunt, dolore nulla vel consequuntur cupiditate facere voluptatum iure repellendus libero optio impedit consequatur, provident sit. Dolor aspernatur blanditiis harum libero, possimus neque esse obcaecati quisquam? In, tenetur inventore.</p>,
                },
                {
                    id: "habilidades",
                    title: "Habilidades",
                    content: <p>Divertida</p>,
                },
                {
                    id: "historia",
                    title: "História",
                    content: <p>Divertida</p>,
                }
            ]}
        />

    </div>
  )
}