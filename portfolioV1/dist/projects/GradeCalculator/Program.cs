namespace GradeCalculator 
{
    class Program 
    {
        static void Main() 
        {
            Console.BackgroundColor = ConsoleColor.Black;
            Console.ForegroundColor = ConsoleColor.Green;

            bool fortsättProgrammet = true;

            do 
            {
                Console.WriteLine("Ange elevens poäng (Ett heltal mellan \"0\" - \"100\")");
                Console.WriteLine();

                if (int.TryParse(Console.ReadLine(), out int poäng)) 
                {
                    Console.Clear();

                    if (poäng >= 90 && poäng <= 100) 
                    {
                        Console.WriteLine("Eleven får betyget: A");
                    } 
                    else if (poäng >= 80 && poäng <= 89) 
                    {
                        Console.WriteLine("Eleven får betyget: B");
                    } 
                    else if (poäng >= 70 && poäng <= 79) 
                    {
                        Console.WriteLine("Eleven får betyget: C");
                    } 
                    else if (poäng >= 60 && poäng <= 69) 
                    {
                        Console.WriteLine("Eleven får betyget: D");
                    } 
                    else if (poäng >= 50 && poäng <= 59) 
                    {
                        Console.WriteLine("Eleven får betyget: E");
                    } 
                    else if (poäng >= 0 && poäng <= 49) 
                    {
                        Console.WriteLine("Eleven får betyget: F");
                    } 
                    else 
                    {
                        Console.WriteLine("Felaktig inmatning, vänligen ange ett heltal mellan \"0\" - \"100\"");
                        Console.WriteLine();

                        continue;
                    }
                } 
                else 
                {
                    Console.Clear();
                    Console.WriteLine("Felaktig inmatning, vänligen ange ett heltal mellan \"0\" - \"100\"");
                    Console.WriteLine();

                    continue;
                }

                bool förändratProgrammet = false;

                do 
                {
                    Console.WriteLine();
                    Console.WriteLine("Vill du ange en ny elevs poäng? (\"Ja\" / \"Nej\")");
                    Console.WriteLine();

                    string programHanterare = Console.ReadLine().ToLower();

                    if (programHanterare == "ja") 
                    {
                        Console.Clear();
                        förändratProgrammet = true;
                    } 
                    else if (programHanterare == "nej") 
                    {
                        Console.Clear();
                        Console.Write("Avslutar programmet");
                        Thread.Sleep(333);

                        for (int i = 0; i < 4; i++) {
                            Console.Write("  .");
                            Thread.Sleep(600);
                        }

                        förändratProgrammet = true;
                        fortsättProgrammet = false;
                    } 
                    else 
                    {
                        Console.Clear();
                        Console.WriteLine("Felaktig inmatning, vänligen ange: \"Ja\" / \"Nej\"");
                    }
                } 
                while (!förändratProgrammet);
            } 
            while (fortsättProgrammet);
        }
    }
}