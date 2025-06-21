'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import CharacterProfile from '../../components/CharacterProfile/page' // ajuste o caminho conforme seu projeto

const supabaseUrl = 'https://seu-projeto.supabase.co'
const supabaseKey = 'public-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)

interface Character {
  name: string
  alias: string
  age: number
  birthday: string
  gender: string
  species: string
  status: string
  affiliation: string
  skinTone: string
  eyeColor: string
  image: string
  quote: string
  quoteSource: string
}

export default function PersonagemPage() {
  const params = useParams()
  const slug = params.slug as string

  const [character, setCharacter] = useState<Character | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchCharacter() {
      const { data, error } = await supabase
        .from('Character')
        .select('*')
        .eq('slug', slug)
        .single()

      if (error) {
        console.error(error)
      } else {
        setCharacter(data)
      }
      setLoading(false)
    }

    if (slug) fetchCharacter()
  }, [slug])

  if (loading) return <p>Carregando...</p>
  if (!character) return <p>Personagem não encontrado.</p>

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
      sections={[]} 
    />
  )
}
