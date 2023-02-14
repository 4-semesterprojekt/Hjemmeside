const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({ 
        "book": "Ruths bog",
        "verses" : [
            "På den tid hvor dommerne virkede var der hungersnød i landet, og en mand fra Betlehem i Juda rejste til Moabs land for at slå sig ned der sammen med sin hustru og deres to sønner.", 
            "Manden hed Elimelek, hans hustru No\'omi, og de to sønner hed Maklon og Kiljon. De var efratiter fra Betlehem i Juda, og de kom til Moab og blev der. ", 
            "Elimelek, No\'omis mand, døde, og hun sad tilbage med sine to sønner. ", 
            "De giftede sig med moabitiske kvinder, den ene hed Orpa, og den anden hed Ruth. De boede der i omkring ti år. ",
            "Så døde også både Maklon og Kiljon. Kvinden havde nu mistet begge sine sønner og sin mand.",
            "Da besluttede hun og hendes svigerdøtre sig for at vende tilbage fra Moabs land. For i Moab havde hun hørt at HERREN havde besøgt sit folk og givet dem brød.",
            "Hun tog af sted derfra, og begge hendes svigerdøtre fulgte med hende på vejen tilbage til Judas land. ",
            "Da sagde No\'omi til sine to svigerdøtre: »Gå I hjem hver til jeres mors hus. Må HERREN være trofast mod jer, ligesom I har været det mod de afdøde og mod mig! ",
            "Må HERREN lade jer finde hvile hver i sin mands hus!« Hun kyssede dem, og de græd højlydt. ",
            "De sagde til hende: »Vi vil følges med dig til dit folk.« ",
            "Men No\'omi sagde: »Gå tilbage, mine døtre! Hvorfor skulle I tage med mig? Mon der fra min livmoder kan komme flere sønner som kunne blive jeres mænd? ",
            "Gå tilbage, mine døtre! Gå, for jeg er for gammel til at få en mand. Selv hvis jeg sagde: Der er endnu håb for mig, ja, selv hvis jeg havde en mand i nat og endnu fødte sønner, ",
            "skulle I så vente på dem til de blev voksne? Skulle I holde jer tilbage og ikke få mænd? Nej, mine døtre! Det er mere trist for mig end for jer at HERRENS hånd greb ud efter mig.« ",
            "Da græd de endnu mere, og Orpa kyssede sin svigermor farvel, men Ruth klyngede sig til hende. ",
            "Da sagde hun: »Se, din svigerinde er vendt tilbage til sit folk og til sin gud. Følg efter din svigerinde og vend tilbage!« ",
            "Og Ruth sagde: »Tving mig ikke til at forlade dig og gå fra dig, for hvor du går hen, der vil jeg gå hen, og hvor du overnatter, der vil jeg overnatte. Dit folk er mit folk, og din Gud er min Gud. ",
            "Hvor du dør, der vil jeg dø, og der vil jeg begraves. Må HERREN handle med mig sådan og føje mere til hvis andet end døden skiller os ad.« ",
            "Da hun så at hun var fast besluttet på at gå med hende, holdt hun op med at tale hende fra det.",
            "De gik begge til Betlehem. Da de kom til Betlehem, blev der opstandelse i hele byen, og de sagde: »Er det ikke No\'omi?« ",
            "Hun sagde til dem: »Kald mig ikke No\'omi. Kald mig Mara, for den Almægtige har gjort det bittert for mig. ",
            "Jeg drog af sted med fulde hænder, men HERREN har ført mig hjem med tomme hænder. Hvorfor skulle I kalde mig No\'omi, når HERREN har vidnet imod mig, og den Almægtige har behandlet mig dårligt?« ",
            "Sådan kom No\'omi tilbage, og Ruth, hendes moabitiske svigerdatter, var med hende da hun kom tilbage fra Moab, og de ankom sammen til Betlehem ved begyndelsen af byghøsten."
        ],
        "titles" : [
            {
                "text": "Hungersnød får Elimelek til at drage med sin hustru og to sønner fra Betlehem til landet Moab hvor han dør; hans sønner gifter sig og dør også.",
                "verse": "1"
            },
            {
                "text": "Hustruen, No\'omi, vil drage tilbage til Betlehem; hendes ene svigerdatter tager tilbage til sin familie, men den anden, nemlig Ruth, vil ikke forlade hende.",
                "verse": "6"
            },
            {
                "text": "No\'omi og Ruth kommer til Betlehem under byghøsten.",
                "verse": "19"
            }
        ]
    });
});

app.listen(5000, () => {
    console.log("Sever started on port 5000");
});