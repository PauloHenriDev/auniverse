'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import CharacterProfile from '../../../components/CharacterProfile/page'

const supabaseUrl = 'https://seu-projeto.supabase.co'
const supabaseKey = 'public-anon-key' // usar anon key do projeto (não use keys secretas no client)
const supabase = createClient(supabaseUrl, supabaseKey)

export default function PersonagemPage() {
  const params = useParams()
  const slug = params.slug

  const [character, setCharacter] = useState(null)
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

    fetchCharacter()
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
      image={character.image} // Aqui: idealmente você salvaria URL da imagem no banco
      quote={character.quote}
      quoteSource={character.quoteSource}
      sections={[] /* Você pode adaptar aqui para puxar seções do banco, ou deixar fixo */}
    />
  )
}
