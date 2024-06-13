import ButtonText from "./ButtonText"

// eslint-disable-next-line react/prop-types
const CardArticles = ({ Image, Title, Date, Text }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 bg-pWhite w-fit p-6">
        <picture className="block w-[240px] h-[224px] overflow-hidden">
            <img src={Image} alt="/" className="w-full h-full object-cover"/>
        </picture>
        <article className="flex flex-col justify-between">
            <h1 className="text-2xl font-bold w-full">{Title}</h1>
            <p className="text-base font-light text-pGray">{Date}</p>
            <p className="text-lg w-full max-w-[488px] leading-tight">{Text}</p>
            <ButtonText/>
        </article>
    </div>
  )
}

export default CardArticles