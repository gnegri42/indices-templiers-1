//import briquet from "../../images/BRIQUET.wepb"
import briquet from "../../images/BRIQUET.png"
import roue from "../../images/ROUE_transp.png"
import portefeuille from "../../images/PORTEFEUILLE.png"
import cles from "../../images/CLES.png"
import sac from "../../images/SAC.png"
import coffre from "../../images/COFFRE.png"
import livre from "../../images/LIVRE.png"
import carnet from "../../images/CARNET.png"
import boite from "../../images/BOITE.png"
import appareil from "../../images/PHOTO.png"
import carte from "../../images/CARTE.png"
import lettre from "../../images/LETTRE_TEMP.png"
import cryptex from "../../images/CRYPTEX.png"
import croix from "../../images/CROIX.png"
import cartes from "../../images/CARTES.png"
import poeme from "../../images/POEME.png"
import pierre from "../../images/PIERRE.png"

const indicesData = [
    {
        name: 'Briquet',
        className: 'briquet',
        indice1: "Avez-vous bien scruté l’objet ?",
        indice2: "Ouvrez le briquet et regardez bien",
        indice3: "Vous n’avez pas vu ce code inscrit dans le couvercle ?",
        reponse: "9226",
        url: `${briquet}`,
        enigme: 1
    }, 
    {
        name: 'Portefeuille',
        className: 'portefeuille',
        indice1: "Tous ces documents semblent retracer la chronologie de sa mission...",
        indice2: "Peut-être faudrait-il déjà ouvrir ce sac...",
        url: `${portefeuille}`,
        enigme: 1
    },
    {
        name: 'Clés',
        className: 'cle',
        indice1: "Certainement des clés de maison",
        url: `${cles}`,
        enigme: 1
    },
    {
        name: 'Sac',
        className: 'sac',
        indice1: "Cherchez un moyen de l’ouvrir, peut-être grâce aux effets personnels de J.Wright",
        indice2: "Regardez ! Une flamme sur un cadenas !",
        indice3: "Vous devriez peut être regarder ce briquet de plus près",
        url: `${sac}`,
        enigme: 1
    },
    {
        name: 'Coffre',
        className: 'coffre',
        indice1: "Un coffre ancien...",
        url: `${coffre}`,
        enigme: 1
    },

    //Etape 2
    {
        name: 'Livre',
        className: 'livre',
        indice1: "Tellement de codes sont inscrits à l’intérieur… Il doit y avoir un moyen de savoir lequel est le bon",
        indice2: "N’avez vous pas trouvé une fiche d'emprunt de ce livre à la bibliothèque ?",
        indice3: "La date d’emprunt est très étrange, ça ne ressemble pas du tout à une date…",
        indice4: "P=page",
        reponse: "8754",
        url: `${livre}`,
        enigme: 2
    }, 
    {
        name: 'Roue de décodage',
        className: 'roue',
        indice1: "Cet objet ne semble pas utile pour le moment",
        url: `${roue}`,
        enigme: 2
    },
    {
        name: 'Carnet',
        className: 'carnet',
        indice1: "Ce carnet comporte beaucoup d’informations. Cela doit nous être utile avec d’autres objets…",
        url: `${carnet}`,
        enigme: 2
    },
    {
        name: 'Boite en bois',
        className: 'boite-bois',
        indice1: "Un des codes inscrits dans ce livre doit pouvoir l’ouvrir, mais lequel ?",
        indice2: "Un indice doit forcément nous indiquer une page, un endroit, quelque chose !",
        url: `${boite}`,
        enigme: 2
    },
    {
        name: 'Appareil photo',
        className: 'photo',
        indice1: "Cet objet ne semble pas utile pour le moment",
        url: `${appareil}`,
        enigme: 2
    },
    {
        name: 'Portefeuille',
        className: 'portefeuille',
        indice1: "Cet objet ne semble pas utile pour le moment",
        url: `${portefeuille}`,
        enigme: 2
    },
    {
        name: 'Coffre',
        className: 'coffre',
        indice1: "Un coffre ancien...",
        url: `${coffre}`,
        enigme: 2
    },
    {
        name: 'Portefeuille',
        className: 'portefeuille',
        indice1: "Un coffre ancien...",
        url: `${portefeuille}`,
        enigme: 3
    },
    {
        name: 'Roue de décodage',
        className: 'roue',
        indice1: "Cet objet ne semble pas utile pour le moment",
        url: `${roue}`,
        enigme: 3
    },
    {
        name: 'Carnet',
        className: 'carnet',
        indice1: "Ce carnet comporte beaucoup d’informations. Cela doit nous être utile avec d’autres objets…",
        url: `${carnet}`,
        enigme: 3
    },
    {
        name: 'Coffre',
        className: 'coffre',
        indice1: "Sur les côtés, le coffre semble attendre 2 blasons",
        indice2: "combinez vos indices : Portefeuille, Carte, Appareil photo",
        reponse: "Les blasons de Temple-sur-lot et Montsaunès",
        url: `${coffre}`,
        enigme: 3
    },
    {
        name: 'Appareil photo',
        className: 'photo',
        indice1: "Avez-vous trouvé la carte mémoire de cet appareil ?",
        indice2: "Les photos ont été prises à des dates bien précises",
        indice3: "2 photos devraient attirer votre attention",
        indice4: "Le symbole présent sur le coffre apparait sur deux photos",
        reponse: "Les blasons de Temple-sur-lot et Montsaunès",
        url: `${appareil}`,
        enigme: 3
    },
    {
        name: 'Carte',
        className: 'carte',
        indice1: "Ces villes correspondent aux éléments présents dans le portefeuille.",
        indice2: "La carte permet de mettre un nom sur chacun des blasons",
        url: `${carte}`,
        enigme: 3
    },
    {
        name: 'Lettre templière',
        className: 'lettre',
        indice1: "Ce texte templier, même décodé semble écrit en latin, il ne sera pas utile de le déchiffrer intégralement",
        indice2: "Grâce à la croix et à la roue de décryptage, vous devriez pouvoir trouver 7 lettres",
        indice3: "La croix comporte les mêmes triangles que ceux présents en haut et en bas du texte",
        indice4: "Elle s’encastre très bien dans les décorations autour du texte",
        url: `${lettre}`,
        enigme: 4
    },
    {
        name: 'Roue de décodage',
        className: 'roue',
        indice1: "JPR nous donne une indication dans son carnet de recherches pour savoir comment positionner la roue",
        url: `${roue}`,
        enigme: 4
    },
    {
        name: 'Carnet',
        className: 'carnet',
        indice1: "Ce carnet comporte beaucoup d’informations. Cela doit nous être utile avec d’autres objets…",
        url: `${carnet}`,
        enigme: 4
    },
    {
        name: 'Cryptex',
        className: 'cryptex',
        indice1: "7 Lettres, 7 trous dans la croix",
        indice2: "Par superposition on obtient 7 caractères templiers",
        indice3: "Grâce à la roue de décryptage, on peut traduire ces 7 symboles",
        indice4: "F . . . . . .",
        reponse: "FLAMEL",
        url: `${cryptex}`,
        enigme: 4
    },
    {
        name: 'Croix',
        className: 'croix',
        indice1: "7 trous dans la croix",
        url: `${croix}`,
        enigme: 4
    },
    {
        name: 'Cartes de tarot',
        className: 'cartes',
        indice1: "Il doit y avoir un lien entre ces cartes et le poême",
        indice2: "Des animaux sont dessinés sur certaines cartes",
        indice3: "Un chat est caché entre un crabe et un cygne",
        indice4: "Les 3 autres animaux cités dans le poême sont moins bien cachés",
        reponse: "204",
        url: `${cartes}`,
        enigme: 5
    },
    {
        name: 'Carnet',
        className: 'carnet',
        indice1: "Ce carnet comporte beaucoup d’informations. Cela doit nous être utile avec d’autres objets…",
        url: `${carnet}`,
        enigme: 5
    },
    {
        name: 'Poème',
        className: 'poeme',
        indice1: "Il doit y avoir un lien entre ce poème et les cartes",
        indice2: "Plusieurs animaux sont évoqués",
        indice3: "Un chat… un alligator…",
        indice4: "Un éléphant....",
        reponse: "4 animaux, 4 cartes, 4 chiffres",
        url: `${poeme}`,
        enigme: 5
    },
    {
        name: 'Pierre',
        className: 'pierre',
        indice1: "Cette pierre doit avoir un lien avec ces symboles d’alchimie",
        indice2: "Les 5 indices avec des potions de la moins remplie à la plus remplie doivent donner un ordre",
        indice3: "Peut-être qu'en passant la pierre sur les bons symboles, dans le bon ordre...",
        url: `${pierre}`,
        enigme: 6
    },
    {
        name: 'Carnet',
        className: 'carnet',
        indice1: "Une page parle du fait que la pierre doit passer sur 5 éléments.",
        url: `${carnet}`,
        enigme: 6
    },
]

export default indicesData;