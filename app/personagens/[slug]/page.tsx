'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import CharacterProfile from '../../components/CharacterProfile'; // ajuste o caminho se necessário

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

interface Character {
  name: string;
  alias: string;
  age: number;
  birthday: string;
  gender: string;
  species: string;
  status: string;
  affiliation: string;
  skinTone: string;
  eyeColor: string;
  image: string;
  quote: string;
  quoteSource: string;
  overview?: string;
  appearance?: string;
  personality?: string;
  abilities?: string;
  relationships?: string;
  trivia?: string;
}

export default function PersonagemPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacter() {
      const { data, error } = await supabase
        .from('Character')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        console.error(error);
      } else {
        setCharacter(data);
      }
      setLoading(false);
    }

    if (slug) fetchCharacter();
  }, [slug]);

  if (loading) return <p>Carregando...</p>;
  if (!character) return <p>Personagem não encontrado.</p>;

  const sections = [
    { id: 'overview', title: 'Visão Geral', content: character.overview ?? 'Sem informação disponível.' },
    { id: 'appearance', title: 'Aparência', content: character.appearance ?? 'Sem informação disponível.' },
    { id: 'personality', title: 'Personalidade', content: character.personality ?? 'Sem informação disponível.' },
    { id: 'abilities', title: 'Habilidades', content: character.abilities ?? 'Sem informação disponível.' },
    { id: 'relationships', title: 'Relacionamentos', content: character.relationships ?? 'Sem informação disponível.' },
    { id: 'trivia', title: 'Curiosidades', content: character.trivia ?? 'Sem informação disponível.' },
  ];

  return (
    <CharacterProfile
      name={character.name}
      alias={character.alias}
      age={character.age}
      birthday={character.birthday}
      gender={character.gender}
      species={character.species}
      status={character.status}
      affiliation={character.affiliation}
      appearance={{ skinTone: character.skinTone, eyeColor: character.eyeColor }}
      image={character.image}
      quote={character.quote}
      quoteSource={character.quoteSource}
      sections={sections}
    />
  );
}
