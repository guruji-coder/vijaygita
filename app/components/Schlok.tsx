import { Tiro_Devanagari_Sanskrit } from "next/font/google";

const tiroDevanagari = Tiro_Devanagari_Sanskrit({
  weight: "400",
  subsets: ["devanagari"],
});

interface SchlokProps {
  SanskritSchlock: string;
  EnglishSchlock: string;
  meaning: string;
}
export default function Schlok({
  SanskritSchlock,
  EnglishSchlock,
  meaning,
}: SchlokProps) {
  return (
    <div className="my-10">
      <h3
        className={`${tiroDevanagari.className} text-2xl my-2 text-yellow-500`}
      >
        {SanskritSchlock}
      </h3>
      <h2 className="text-md ">{EnglishSchlock}</h2>
      <p className="text-grey-200">{meaning}</p>
    </div>
  );
}
