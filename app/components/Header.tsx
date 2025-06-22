type HeaderProps = {
  toggleTheme: () => void
}

export default function Header({ toggleTheme }: HeaderProps) {
  return (
    <header className="flex bg-[#dbe0e6] dark:bg-[#3E526E] w-full px-8 py-4 justify-between items-center border-b border-black">
      <p className="text-[40px]">Auniverse</p>
      <nav className="flex gap-6 text-[20px] items-center">
        <p>Início</p>
        <p>Personagens</p>
        <p>Universo</p>
        <p>Comunidade</p>
      </nav>
      <div className="flex gap-4 items-center">
        <p>search bar</p>
        <button
          onClick={toggleTheme}
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
        >
          🌓
        </button>
      </div>
    </header>
  )
}
