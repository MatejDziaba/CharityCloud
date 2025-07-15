Popis projektu:
    BackEnd -> Node.js (routing)
    Databaza -> MongoD (ip adresa je verejna 0.0.0.0/0)
    FrontEnd -> (Multipage)
        FrontEnd(folder v projekte je klientska cast) 
            -> Next.js(typescript)
            -> volania API cez axios
        FE_admin(folder v projekte je admin cast)
            -> Next.js (bez autentifikacie, autentifikacia nebola pozadovana v zadani(ziadny LOG IN/SIGN UP))

Navod na spustenie: 
    Krok 1 -> stiahnutie suboru charity z GitHub
    Krok 2 -> predpoklada sa naistalovany Visual Studio Code, otvorenie folder charity v VSCODE
    Krok 3 -> vytvorenie dvoch terminalov 
    Krok 4 -> zadanie prikazov pre spustenie BackEnd a databazy
        Krok 4.1. -> Krok 4.1.1. -> Zadanie prikazu:
                                        PS C:\Users\matej\OneDrive\Desktop\charity> cd .\BackEnd\
                                    Vykonanie prikazu:
                                        PS C:\Users\matej\OneDrive\Desktop\charity\BackEnd> 

                     Krok 4.1.2. -> Zadanie prikazu:
                                        PS C:\Users\matej\OneDrive\Desktop\charity\BackEnd> node server.js  
                                    Vykonanie prikazu:
                                        PS C:\Users\matej\OneDrive\Desktop\charity\BackEnd> node server.js
                                        [dotenv@17.2.0] injecting env (2) from .env (tip: ⚙️  load multiple .env files with { path: ['.envv.local', '.env'] })
                                        🚀 Server running on http://localhost:4000
                                        ✅ MongoDB connected

    KIENT CAST Krok 5 -> zadanie prikazov pre spustenie FrontEnd -> KIENT CAST
        Krok 5.1. -> Krok 5.1.1. -> Zadanie prikazu:
                                        PS C:\Users\matej\OneDrive\Desktop\charity> cd .\FrontEnd\
                                    Vykonanie prikazu:
                                        PS C:\Users\matej\OneDrive\Desktop\charity\FrontEnd>

                     Krok 5.1.2. -> Zadanie prikazu:
                                        PS C:\Users\matej\OneDrive\Desktop\charity\FrontEnd> cd .\charity-app\
                                    Vykonanie prikazu:
                                        PS C:\Users\matej\OneDrive\Desktop\charity\FrontEnd\charity-app>  

                     Krok 5.1.3. -> Zadanie prikazu:
                                        PS C:\Users\matej\OneDrive\Desktop\charity\FrontEnd\charity-app> npm run dev
                                    Vykonanie prikazu:
                                        > charity-app@0.1.0 dev
                                        > next dev --turbopack

                                        ▲ Next.js 15.3.5 (Turbopack)
                                        - Local:        http://localhost:3000
                                        - Network:      http://192.168.56.1:3000

                                        ✓ Starting...
                                        ✓ Ready in 1014ms

    ADMIN CAST Krok 5 -> zadanie prikazov pre spustenie FrontEnd -> ADMIN CAST
        Krok 5.1. -> Krok 5.1.1. -> Zadanie prikazu:
                                        PS C:\Users\matej\OneDrive\Desktop\charity> cd .\FE_admin\
                                    Vykonanie prikazu:
                                        PS C:\Users\matej\OneDrive\Desktop\charity\.\FE_admin\>

                     Krok 5.1.2. -> Zadanie prikazu:
                                        PS C:\Users\matej\OneDrive\Desktop\charity\FE_admin\> cd .\charity-app\
                                    Vykonanie prikazu:
                                        PS C:\Users\matej\OneDrive\Desktop\charity\FE_admin\charity-app>  

                     Krok 5.1.3. -> Zadanie prikazu:
                                        PS C:\Users\matej\OneDrive\Desktop\charity\FE_admin\charity-app> npm run dev
                                    Vykonanie prikazu:
                                        > charity-app@0.1.0 dev
                                        > next dev --turbopack

                                        ▲ Next.js 15.3.5 (Turbopack)
                                        - Local:        http://localhost:3000
                                        - Network:      http://192.168.56.1:3000

                                        ✓ Starting...
                                        ✓ Ready in 1056ms
                                        ○ Compiling /Pages/Zbierka ...
                                        ✓ Compiled /Pages/Zbierka in 2.3s
                                        GET /Pages/Zbierka 200 in 2700ms
                                        ✓ Compiled /favicon.ico in 380ms
                                        GET /favicon.ico?favicon.c6c82793.ico 200 in 666ms
