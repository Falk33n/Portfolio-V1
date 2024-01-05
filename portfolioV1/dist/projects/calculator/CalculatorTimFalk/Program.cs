using System.Globalization;

namespace Miniräknare_Tim_Falk
{
    class Program
    {   // VARIABLER
        static string menyVal;
        static string matematiskOperation;
        static float tal1 = 0;
        static float tal2 = 0;
        static float resultat = 0;
        static int antalUträkningar = 0;
        static bool fortsättProgrammet = true;
        static List<string> historik = new List<string>();
        static CultureInfo punktEllerKomma = new CultureInfo("en-US");

        static void Main()
        {   // NÄR PROGRAMMET STARTAS SÅ KALLAR VI PÅ FUNKTIONER SOM SKA STARTAS
            Console.BackgroundColor = ConsoleColor.Black;
            Console.ForegroundColor = ConsoleColor.Green;

            StartaProgrammet();
            FörstaValet();
            MenyVald();
        }

        static void MenyVald() 
        {   // OLIKA VAL GENOM SWITCH
            do
            {
                switch (menyVal)
                {   
                    case "1": 
                        MenyValEtt();
                        break;

                    case "2": 
                        MenyValTvå();
                        break;

                    case "3":
                        MenyValTre();
                        break;   

                    default: 
                        MenyValDefualt();
                        break;
                }
            } while (fortsättProgrammet);
        }

        static void Uträkning() 
        {   // OLIKA VAL AV MATEMATISK OPERATION GENOM SWITCH
            switch (matematiskOperation)
            {   
                case "+": 
                    MatematiskAdditation();
                    break;

                case "-": 
                    MatematiskSubtraktion();
                    break;

                case "/":
                    MatematiskDivision();
                    break;

                case "*":
                    MatematiskMultiplikation();
                    break;

                default: 
                    MatematiskDefault();
                    break;
            }
        }

        static void StartaProgrammet()
        {   // STARTA PROGRAMMET GENOM ATT VÄLKOMNA ANVÄNDAREN
            Console.Write("[+] Startar programmet ");

            PunktAnimation();

            Console.Clear();
            Console.WriteLine("[+] Välkommen till Tim Falks miniräknare!");
        }

        static void FörstaValet()
        {   // TEXTEN FÖR DET FÖRSTA VALET SOM ANVÄNDAREN FÅR GÖRA NÄR PROGRAMMET STARTAS
            Console.WriteLine("[+] Skriv in något av dem tre alternativen nedan:");
            Console.WriteLine("[+]");
            Console.WriteLine("[+] 1. Gör en uträkning");
            Console.WriteLine("[+] 2. Se tidigare uträkningar");
            Console.WriteLine("[+] 3. Avsluta programmet");
            Console.WriteLine("[+]");
            Console.Write("[+] ");
            menyVal = Console.ReadLine();
            Console.Clear();
        }

        static void PunktAnimation()
        {   // ANIMATION FÖR NÄR OLIKA VAL GÖRS SÅ ATT DET SER UT SOM ATT DET LADDAR 
            Thread.Sleep(800);

            for (int currentIndex = 0; currentIndex < 3; currentIndex++)
            {
                Console.Write(". ");
                Thread.Sleep(800);
            }
        }

        static void MenyValEtt()
        {   // FÖR NÄR ANVÄNDAREN MATAR IN 1 I FÖRSTA VALET
            Console.Write("[+] Aktiverar miniräknaren ");
            
            PunktAnimation();

            Console.WriteLine();

            SkrivTal();
            antalUträkningar++;
            Uträkning();
        }

        static void MenyValTvå()
        {   // FÖR NÄR ANVÄNDAREN MATAR IN 2 I FÖRSTA VALET
            if (antalUträkningar == 0)
            {   // OM INGA UTRÄKNINGAR HAR GJORTS SKA DETTA VISAS
                Console.WriteLine("[+] För närvarande finns det inga tidigare uträkningar, försök igen");
                Console.WriteLine("[+]");

                FörstaValet();
            }
            else 
            {   // ANNARS VISAR MAN UPP DEM TIDIGARE UTRÄKNINGARNA
                Console.Write("[+] Hämtar tidigare uträkningar ");
                
                PunktAnimation();

                Console.WriteLine();
                Console.WriteLine("[+]");
                Console.WriteLine("[+] Här är listan på tidigare uträkningar:");
                Console.WriteLine("[+]");

                for (int currentIndex = 0; currentIndex < antalUträkningar; currentIndex++) 
                {
                    Console.WriteLine($"[+] {currentIndex + 1}. {historik[currentIndex]}");
                }

                NyttVal();
            }
        }

        static void MenyValTre()
        {   // FÖR NÄR ANVÄNDAREN MATAR IN 3 I FÖRSTA VALET
            Console.Write("[+] Avslutar programmet ");
            
            PunktAnimation();

            fortsättProgrammet = false;
        }

        static void MenyValDefualt()
        {   // FÖR NÄR ANVÄNDAREN MATAR IN NÅGOT ANNAT ÄN 1, 2 ELLER 3
            Console.WriteLine("[+] Fel inmatning, försök igen");
            Console.WriteLine("[+]");

            FörstaValet();
        }

        static void SkrivTal() 
        {   // BER ANVÄNDAREN ATT MATA IN VILKEN UTRÄKNING DEN VILL HA SVAR PÅ
            Console.WriteLine("[+]");
            Console.WriteLine("[+] Skriv in det första talet nedan (endast heltal eller decimaltal):");
            Console.WriteLine("[+]");
            Console.Write("[+] ");

            if (float.TryParse(Console.ReadLine(), punktEllerKomma, out tal1))
            {   // MATA IN EN SIFFRA
                Console.WriteLine("[+]");
                Console.WriteLine("[+] Skriv in den matematiska operationen nedan (+ - / *):");
                Console.WriteLine("[+]");
                Console.Write("[+] ");
                matematiskOperation = Console.ReadLine();   // MATA IN I EN MATEMATISK OPERATION

                if (matematiskOperation == "+" || matematiskOperation == "-" || matematiskOperation == "/" || matematiskOperation == "*")
                {   // MATA IN YTTERLIGARE EN SIFFRA
                    Console.WriteLine("[+]");
                    Console.WriteLine("[+] Skriv in det andra talet nedan (endast heltal eller decimaltal):");
                    Console.WriteLine("[+]");
                    Console.Write("[+] ");

                    if (float.TryParse(Console.ReadLine(), punktEllerKomma, out tal2))
                    {
                        Console.Clear();
                    }
                    else
                    {   // IFALL ANVÄNDAREN INTE ANGIVIT ETT TAL
                        Console.Clear();
                        Console.WriteLine("[+] Felaktig inmatning (endast heltal eller decimaltal), försök igen");
                        SkrivTal();
                    }
                }
                else
                {   // IFALL ANVÄNDAREN INTE ANGIVIT EN MATEMATISK OPERATION
                    Console.Clear();
                    Console.WriteLine("[+] Felaktig inmatning (endast + - / *), försök igen");
                    SkrivTal();
                }
            }
            else
            {   // IFALL ANVÄNDAREN INTE ANGIVIT ETT TAL
                Console.Clear();
                Console.WriteLine("[+] Felaktig inmatning (endast heltal eller decimaltal), försök igen");
                SkrivTal();
            }
        }

        static void MatematiskAdditation()
        {   // IFALL ANVÄNDAREN VALDE +
            resultat = tal1 + tal2;
            historik.Add($"{tal1} + {tal2} = {resultat}");  // HÄR LÄGGER VI TILL UTRÄKNINGEN I EN LISTA

            Console.Write("[+] Hämtar resultatet ");
            
            PunktAnimation();

            Console.WriteLine();
            Console.WriteLine("[+]");
            Console.WriteLine($"[+] Resultatet för {tal1} + {tal2} är = {resultat}");

            NyttVal();
        }

        static void MatematiskSubtraktion()
        {   // IFALL ANVÄNDAREN VALDE -
            resultat = tal1 - tal2;
            historik.Add($"{tal1} - {tal2} = {resultat}");
            
            Console.Write("[+] Hämtar resultatet ");
            
            PunktAnimation();

            Console.WriteLine();
            Console.WriteLine("[+]");
            Console.WriteLine($"[+] Resultatet för {tal1} - {tal2} är = {resultat}");

            NyttVal();
        }

        static void MatematiskDivision()
        {   // IFALL ANVÄNDAREN VALDE /
            if ((tal1 == 0 && matematiskOperation == "/") || (tal2 == 0 && matematiskOperation == "/")) 
            {   // OM ANVÄNDAREN FÖRSÖKER DELA MED 0 SÅ ÄR DETTA EJ MÖJLIGT
                Console.WriteLine("[+] Fel inmatning, det går inte att dela med noll, försök igen");
                Console.WriteLine("[+]");

                MenyVald();
            }
            else 
            {   // ANNARS RÄKNA UT SOM VANLIGT
                resultat = tal1 / tal2;
                historik.Add($"{tal1} / {tal2} = {resultat}");
                
                Console.Write("[+] Hämtar resultatet ");
                
                PunktAnimation();

                Console.WriteLine();
                Console.WriteLine("[+]");
                Console.WriteLine($"[+] Resultatet för {tal1} / {tal2} är = {resultat}");

                NyttVal();
            }
        }

        static void MatematiskMultiplikation()
        {   // IFALL ANVÄNDAREN VALDE *
            resultat = tal1 * tal2;
            historik.Add($"{tal1} * {tal2} = {resultat}");
            
            Console.Write("[+] Hämtar resultatet ");
            
            PunktAnimation();

            Console.WriteLine();
            Console.WriteLine("[+]");
            Console.WriteLine($"[+] Resultatet för {tal1} * {tal2} är = {resultat}");

            NyttVal();
        }

        static void MatematiskDefault()
        {   // IFALL ANVÄNDAREN INTE VALDE NÅGOT AV +, -, / ELLER *
            Console.WriteLine("[+] Fel inmatning, försök igen");

            MenyVald();
        }

        static void NyttVal() 
        {   // DETTA KOMMER UPP ALLTID EFTER ATT DET FÖRSTA VALET HAR GJORTS NÄR MAN KOMMER TILLBAKA TILL DEFAULT FRÅGAN
            Console.WriteLine("[+]");
            Console.WriteLine("[+] Vad vill du göra härnäst? Skriv in något av dem tre alternativen nedan:");
            Console.WriteLine("[+]");
            Console.WriteLine("[+] 1. Gör en ny uträkning");
            Console.WriteLine("[+] 2. Se tidigare uträkningar");
            Console.WriteLine("[+] 3. Avsluta programmet");
            Console.WriteLine("[+]");
            Console.Write("[+] ");
            menyVal = Console.ReadLine();
            Console.Clear();
        }
    }
}