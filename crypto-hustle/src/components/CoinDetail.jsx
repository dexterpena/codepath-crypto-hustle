import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const API_KEY = import.meta.env.VITE_APP_API_KEY


function CoinDetail() {

    const { symbol } = useParams()
    const [fullDetails, setFullDetails] = useState(null)


    useEffect(() => {
        const getCoinDetail = async () => {
            const details = await fetch(
                `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD&api_key=${API_KEY}`
            )
            const description = await fetch(
                `https://min-api.cryptocompare.com/data/all/coinlist?fsym=${symbol}&api_key=${API_KEY}`
            )

            const detailsJson = await details.json()
            const descripJson = await description.json()

            setFullDetails({
                numbers: detailsJson.DISPLAY,
                textData: descripJson.Data
            })
        }

        getCoinDetail().catch(console.error)
    }, [symbol])

    if (!fullDetails) return <div>Loading...</div>


    return (
        <div>
            <h1>{fullDetails.textData[symbol].FullName}</h1>
            <img
            className="images"
            src={`https://www.cryptocompare.com${
                fullDetails.textData[symbol].ImageUrl
            }`}
            alt={`Small icon for ${symbol} crypto coin`}
            />
            <div>{fullDetails.textData[symbol].Description}</div>
            <br />
            <div>
                This coin was built with the algorithm{" "}
                {fullDetails.textData[symbol].Algorithm}{" "}
            </div>
        </div>
    )
}

export default CoinDetail
