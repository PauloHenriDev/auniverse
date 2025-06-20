export default function Header() {
  return (
    <div>
        <header className="flex bg-[#3E526E] w-[100%] pl-[30px] pr-[30px] justify-between border-b border-black">
            <p className="text-[50px]">Auniverse</p>
            <div className="flex gap-[20px] text-[20px] items-center">
                <p>Inicio</p>
                <p>Personagnees</p>
                <p>Universo</p>
                <p>Comunidade</p>
            </div>
            <div>
                <p>serarch bar</p>
            </div>
        </header>
    </div>
  )
}