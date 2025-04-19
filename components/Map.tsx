import { GoogleMapsEmbed } from "@next/third-parties/google";

const Map = () => {
    return (
        <GoogleMapsEmbed
            apiKey={String(process.env.GOOGLE_MAP_API_KEY)}
            height={500}
            width={500}
            mode="place"
            q="Betty+Spears+Child+Care+Centre,Tempe,Australia"
        />
    )
}

export default Map;