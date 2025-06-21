'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import CharacterProfile from '../../components/CharacterProfile/page' // ajuste o caminho conforme seu projeto

const supabaseUrl = 'https://aalqjfhxboweuoxgwmiz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhbHFqZmh4Ym93ZXVveGd3bWl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0NzY5NDUsImV4cCI6MjA2NjA1Mjk0NX0.ZcYPIPXfhO0ROGEvEqHY4INR5BKnKomxuhalxBoEWcc'
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
    // console.log("Slug recebido:", slug); 
    async function fetchCharacter() {
      const { data, error } = await supabase
        .from('Character')
        .select('*')
        .eq('slug', slug)
        .single()

        // console.log({ data, error });

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
