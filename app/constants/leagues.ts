export type TeamStanding = {
  rank: number;
  name: string;
  logo: string; 
  matchW: number;
  matchL: number;
  gameW: number;
  gameL: number;
  diff: number;
};

export type League = {
  id: string;
  name: string;
  flag: string; // Sekarang isinya URL gambar
  standings: TeamStanding[];
};

export const LEAGUES: League[] = [
  {
    id: "mpl-id", name: "MPL ID S17", flag: "https://flagcdn.com/w40/id.png",
    standings: [
      { rank: 1, name: "ONIC", logo: "/teams/onic.png", matchW: 6, matchL: 1, gameW: 13, gameL: 3, diff: 10 },
      { rank: 2, name: "BIGETRON BY VITALITY", logo: "/teams/btr.png", matchW: 5, matchL: 3, gameW: 11, gameL: 11, diff: 0 },
      { rank: 3, name: "EVOS", logo: "/teams/evos.png", matchW: 4, matchL: 3, gameW: 10, gameL: 6, diff: 4 },
      { rank: 4, name: "DEWA UNITED", logo: "/teams/dewa.png", matchW: 4, matchL: 3, gameW: 10, gameL: 6, diff: 4 },
      { rank: 5, name: "TEAM LIQUID ID", logo: "/teams/tlid.png", matchW: 4, matchL: 3, gameW: 9, gameL: 8, diff: 1 },
      { rank: 6, name: "ALTER EGO", logo: "/teams/ae.png", matchW: 4, matchL: 3, gameW: 9, gameL: 10, diff: -1 },
      { rank: 7, name: "GEEK FAM", logo: "/teams/geek.png", matchW: 3, matchL: 4, gameW: 7, gameL: 9, diff: -2 },
      { rank: 8, name: "NAVI", logo: "/teams/navi.png", matchW: 2, matchL: 5, gameW: 6, gameL: 11, diff: -5 },
      { rank: 9, name: "RRQ", logo: "/teams/rrq.png", matchW: 0, matchL: 7, gameW: 3, gameL: 14, diff: -11 }
    ]
  },
  {
    id: "mpl-ph", name: "MPL PH S17", flag: "https://flagcdn.com/w40/ph.png",
    standings: [
      { rank: 1, name: "TEAM LIQUID PH", logo: "/teams/tlid.png", matchW: 7, matchL: 0, gameW: 14, gameL: 3, diff: 11 },
      { rank: 2, name: "TEAM FALCONS PH", logo: "/teams/falcons.png", matchW: 6, matchL: 1, gameW: 13, gameL: 4, diff: 9 },
      { rank: 3, name: "ONIC PHILIPPINES", logo: "/teams/onic.png", matchW: 4, matchL: 3, gameW: 9, gameL: 7, diff: 2 },
      { rank: 4, name: "AURORA GAMING PH", logo: "/teams/aurora.png", matchW: 3, matchL: 4, gameW: 9, gameL: 8, diff: 1 },
      { rank: 5, name: "TWISTED MINDS PH", logo: "/teams/twisted.png", matchW: 3, matchL: 4, gameW: 7, gameL: 10, diff: -3 },
      { rank: 6, name: "AP.BREN", logo: "/teams/bren.png", matchW: 2, matchL: 5, gameW: 5, gameL: 11, diff: -6 },
      { rank: 7, name: "OMEGA ESPORTS PH", logo: "/teams/omega.png", matchW: 2, matchL: 5, gameW: 5, gameL: 11, diff: -6 },
      { rank: 8, name: "TNC PRO TEAM", logo: "/teams/tnc.png", matchW: 1, matchL: 6, gameW: 4, gameL: 12, diff: -8 }
    ]
  },
  {
    id: "mpl-my", name: "MPL MY S17", flag: "https://flagcdn.com/w40/my.png",
    standings: [
    { rank: 1, name: "SELANGOR RED GIANTS", logo: "/teams/srg.png", matchW: 5, matchL: 0, gameW: 10, gameL: 1, diff: 9 },
    { rank: 2, name: "RRQ TORA", logo: "/teams/rrq.png", matchW: 4, matchL: 2, gameW: 8, gameL: 6, diff: 2 },
    { rank: 3, name: "INVICTUS GAMING", logo: "/teams/inv.png", matchW: 3, matchL: 2, gameW: 8, gameL: 5, diff: 3 },
    { rank: 4, name: "TEAM VAMOS", logo: "/teams/vamos.png", matchW: 3, matchL: 2, gameW: 7, gameL: 4, diff: 3 },
    { rank: 5, name: "TEAM REY", logo: "/teams/rey.png", matchW: 3, matchL: 2, gameW: 7, gameL: 6, diff: 1 },
    { rank: 6, name: "AC ESPORTS", logo: "/teams/aces.png", matchW: 1, matchL: 4, gameW: 4, gameL: 9, diff: -5 },
    { rank: 7, name: "BIGTERON MY BY VITALITY", logo: "/teams/btr.png", matchW: 1, matchL: 4, gameW: 3, gameL: 9, diff: -6 },
    { rank: 8, name: "TEAM FLASH", logo: "/teams/flash.png", matchW: 1, matchL: 5, gameW: 4, gameL: 11, diff: -7 },
    ] 
  },
  { id: "mpl-mena", name: "MPL MENA S9", flag: "https://flagcdn.com/w40/sa.png", 
    standings: [
    { rank: 1, name: "AXE OKAMI" , logo: "/teams/axe.png", matchW: 3, matchL: 1, gameW: 7, gameL: 3, diff: 4 },
    { rank: 2, name: "GAMAX ESPORTS", logo: "/teams/gamax.png", matchW: 3, matchL: 1, gameW: 6, gameL: 3, diff: 3 },
    { rank: 3, name: "GS TEAM", logo: "/teams/gs.png", matchW: 2, matchL: 1, gameW: 4, gameL: 3, diff: 1 },
    { rank: 4, name: "TEAM FALCONS", logo: "/teams/falcons.png", matchW: 1, matchL: 2, gameW: 4, gameL: 5, diff: -1 },
    { rank: 5, name: "XPROJEKT ESPORTS", logo: "/teams/xprojekt.png", matchW: 1, matchL: 2, gameW: 3, gameL: 4, diff: -1 },
    { rank: 6, name: "GEEKAY ESPORTS", logo: "/teams/geekay.png", matchW: 1, matchL: 1, gameW: 3, gameL: 3, diff: 0 },
    { rank: 7, name: "TEAM OCCUPY", logo: "/teams/occupy.png", matchW: 1, matchL: 2, gameW: 3, gameL: 5, diff: -2 },    
    { rank: 8, name: "TWISTED MINDS", logo: "/teams/twisted.png", matchW: 0, matchL: 2, gameW: 0, gameL: 4, diff: -4 }
    ] 
},
  { id: "mpl-kh", name: "MPL KH S9", flag: "https://flagcdn.com/w40/kh.png", 
    standings: [
    { rank: 1, name: "PRO ESPORTS", logo: "/teams/pro.png", matchW: 4, matchL: 0, gameW: 8, gameL: 1, diff: 7 },
    { rank: 2, name: "VALHALA", logo: "/teams/valhala.png", matchW: 3, matchL: 1, gameW: 7, gameL: 2, diff: 5 },
    { rank: 3, name: "GALAXY LEGENDS", logo: "/teams/galaxy.png", matchW: 3, matchL: 1, gameW:6, gameL: 3, diff: 3 },
    { rank: 4, name: "VIGOR APEX", logo: "/teams/vigor.png", matchW: 3, matchL: 1, gameW: 6, gameL: 4, diff: 2 },
    { rank: 5, name: "CFU GAMING", logo: "/teams/cfu.png", matchW: 2, matchL: 2, gameW: 5, gameL: 5, diff: 0 },
    { rank: 6, name: "EVIL EYE ESPORTS", logo: "/teams/evileye.png", matchW: 1, matchL: 2, gameW: 3, gameL: 4, diff: -1 },
    { rank: 7, name: "TEAM FLASH KH", logo: "/teams/flash.png", matchW: 1, matchL: 2, gameW: 3, gameL: 4, diff: -1 },
    { rank: 8, name: "DUCK RICE ESPOTRS", logo: "/teams/duckrice.png", matchW: 1, matchL: 2, gameW: 3, gameL: 4, diff: -1 },
    { rank: 9, name: "SEE YOU SOON", logo: "/teams/see.png", matchW: 0, matchL: 3, gameW: 0, gameL: 6, diff: -6 },
    { rank: 10, name: "GALAXY PHOENIX", logo: "/teams/galaxy.png", matchW: 0, matchL: 4, gameW: 0, gameL: 8, diff: -8 }
]
 },
  { id: "msl-mm", name: "MSL MM S3", flag: "https://flagcdn.com/w40/mm.png", 
    standings: [
    { rank: 1, name: "YANGON GALACTICOS", logo: "/teams/yangon.png", matchW: 6, matchL: 0, gameW: 12, gameL: 1, diff: 11 },
    { rank: 2, name: "TEAM 7", logo: "/teams/team7.png", matchW: 5, matchL: 1, gameW: 11, gameL: 5, diff: 6 },
    { rank: 3, name: "PALADINS", logo: "/teams/paladins.png", matchW: 3, matchL: 3, gameW: 7, gameL: 7, diff: 0 },
    { rank: 4, name: "BLACKTHORN", logo: "/teams/blackthorn.png", matchW: 3, matchL: 2, gameW: 6, gameL: 6, diff: 0 },
    { rank: 5, name: "FALCONS ESPORTS", logo: "/teams/falconse.png", matchW: 2, matchL: 3, gameW: 6, gameL: 6, diff: 0 },
    { rank: 6, name: "AI ESPORTS", logo: "/teams/ai.png", matchW: 2, matchL: 3, gameW: 5, gameL: 6, diff: -1 },
    { rank: 7, name: "MYTHIC SEAL", logo: "/teams/mythic.png", matchW: 2, matchL: 3, gameW: 5, gameL: 6, diff: -1 },
    { rank: 8, name: "WYVERNS ESPORTS", logo: "/teams/wyverns.png", matchW: 2, matchL: 3, gameW: 6, gameL: 7, diff: -1 },
    { rank: 9, name: "U TITANS", logo: "/teams/utitans.png", matchW: 1, matchL: 4, gameW: 2, gameL: 8, diff: -6 },
    { rank: 10, name: "RISING STARS", logo: "/teams/rising.png", matchW: 1, matchL: 5, gameW: 2, gameL: 10, diff: -8 }
] 
},
  { id: "msl-th", name: "MSL TH S1", flag: "https://flagcdn.com/w40/th.png", 
    standings: [
    { rank: 1, name: "ACT ESPORTS CLUB", logo: "/teams/aec.png", matchW: 2, matchL: 0, gameW: 4, gameL: 0, diff: 4 },
    { rank: 2, name: "VALEE THAI ESPORTS", logo: "/teams/vte.png", matchW: 2, matchL: 0, gameW: 4, gameL: 0, diff: 4 },
    { rank: 3, name: "BURIRAM UNITED ESPORTS", logo: "/teams/buriram.png", matchW: 1, matchL: 0, gameW: 2, gameL: 0, diff: 2 },
    { rank: 4, name: "KING OF GAMERS CLUB", logo: "/teams/kgc.png", matchW: 1, matchL: 0, gameW: 2, gameL: 0, diff: 2 },
    { rank: 5, name: "BACON TIME", logo: "/teams/bt.png", matchW: 1, matchL: 0, gameW: 2, gameL: 1, diff: 1 },
    { rank: 6, name: "TENACITY", logo: "/teams/tct.png", matchW: 1, matchL: 1, gameW: 2, gameL: 2, diff: 0 },
    { rank: 7, name: "EARENA", logo: "/teams/earena.png", matchW: 0, matchL: 1, gameW: 0, gameL: 2, diff: -2 },
    { rank: 8, name: "FULL SENSE", logo: "/teams/fs.png", matchW: 0, matchL: 2, gameW: 0, gameL: 4, diff: -4 },
    { rank: 9, name: "HYDRA ESPORTS", logo: "/teams/hydra.png", matchW: 0, matchL: 2, gameW: 0, gameL: 4, diff: -4 },
    { rank: 10, name: "SOLYX", logo: "/teams/solyx.png", matchW: 0, matchL: 2, gameW: 0, gameL: 4, diff: -4 }
] 
},
  { id: "mtc-tr", name: "MTC TR S7", flag: "https://flagcdn.com/w40/tr.png", 
    standings: [
    { rank: 1, name: "AURORA GAMING", logo: "/teams/aurora.png", matchW: 4, matchL: 1, gameW: 9, gameL: 1, diff: 8 },
    { rank: 2, name: "FUT ESPORTS", logo: "/teams/fut.png", matchW: 4, matchL: 1, gameW: 9, gameL: 1, diff: 8 },
    { rank: 3, name: "ETERNAL FIRE", logo: "/teams/eternal.png", matchW: 3, matchL: 1, gameW: 7, gameL: 3, diff: 4 },
    { rank: 4, name: "BUSHIDO WILDCATS", logo: "/teams/bushido.png", matchW: 2, matchL: 2, gameW: 5, gameL: 5, diff: 0 },
    { rank: 5, name: "BEŞIKTAŞ ESPORTS", logo: "/teams/besiktas.png", matchW: 1, matchL: 3, gameW: 3, gameL: 7, diff: -4 },
    { rank: 6, name: "MISA ESPORTS", logo: "/teams/misa.png", matchW: 1, matchL: 3, gameW: 3, gameL: 7, diff: -4 },
    { rank: 7, name: "PCFIC ESPORTS", logo: "/teams/pcific.png", matchW: 1, matchL: 3, gameW: 3, gameL: 7, diff: -4 },
    { rank: 8, name: "REGNUM CARYA ESPORTS", logo: "/teams/regnum.png", matchW: 0, matchL: 4, gameW: 1, gameL: 9, diff: -8 },
] 
},
  { id: "mcc-cis", name: "MCC CIS S7", flag: "https://flagcdn.com/w40/kz.png", 
    standings: [
    { rank: 1, name: "TEAM SPIRIT", logo: "/teams/ts.png", matchW: 5, matchL: 0, gameW: 10, gameL: 1, diff: 9 },
    { rank: 2, name: "VERSO TIME", logo: "/teams/vt.png", matchW: 4, matchL: 1, gameW: 8, gameL: 3, diff: 5 },
    { rank: 3, name: "TEAM YANDEX", logo: "/teams/ty.png", matchW: 4, matchL: 1, gameW: 8, gameL: 4, diff: 4 },
    { rank: 4, name: "FORZE ESPORTS", logo: "/teams/fe.png", matchW: 3, matchL: 2, gameW: 7, gameL: 5, diff: 2 },
    { rank: 5, name: "VIRTUS.PRO", logo: "/teams/vp.png", matchW: 2, matchL: 3, gameW: 5, gameL: 7, diff: -2 },
    { rank: 6, name: "MAGIC", logo: "/teams/magic.png", matchW: 1, matchL: 4, gameW: 5, gameL: 8, diff: -3 },
    { rank: 7, name: "CYBERHERO", logo: "/teams/ch.png", matchW: 1, matchL: 4, gameW: 3, gameL: 9, diff: -6 },
    { rank: 8, name: "AURA FARMERS", logo: "/teams/af.png", matchW: 0, matchL: 5, gameW: 1, gameL: 10, diff: -9 },
]
 },
  { id: "mcm-cn", name: "MCM CN S2", flag: "https://flagcdn.com/w40/cn.png", 
    standings: [
    { rank: 1, name: "GUANGZHOU GAMING", logo: "/teams/gg.png", matchW: 6, matchL: 1, gameW: 13, gameL: 3, diff: 10 },
    { rank: 2, name: "DIANFENGYAOGUAI", logo: "/teams/dfyg.png", matchW: 6, matchL: 1, gameW: 12, gameL: 3, diff: 9 },
    { rank: 3, name: "YBINGAME", logo: "/teams/yb.png", matchW: 5, matchL: 2, gameW: 12, gameL: 5, diff: 7 },
    { rank: 4, name: "YING JING NAN", logo: "/teams/yjn.png", matchW: 5, matchL: 2, gameW: 11, gameL: 5, diff: 6 },
    { rank: 5, name: "YAO JING GAMING", logo: "/teams/yjg.png", matchW: 3, matchL: 4, gameW: 6, gameL: 9, diff: -3 },
    { rank: 6, name: "KEEPBEST GAMING", logo: "/teams/kbg.png", matchW: 2, matchL: 5, gameW: 5, gameL: 10, diff: -5 },
    { rank: 7, name: "OSG", logo: "/teams/osg.png", matchW: 1, matchL: 6, gameW: 2, gameL: 12, diff: -10 },
    { rank: 8, name: "THE KEEPER GAMING", logo: "/teams/tkg.png", matchW: 0, matchL: 7, gameW: 1, gameL: 14, diff: -14 }
]
 },
];

export const NEWS_UPDATES = [
  {
    id: 1,
    title: "ONIC Claims Mid-Season Champion",
    date: "19 April 2026",
    category: "Championship Leader",
    image: "/teams/news/1.jpeg",
    excerpt: "ONIC Esports officially secured the MPL ID S17 Mid-Season Championship title after a dominant performance throughout the first half. Their impeccable synergy and innovative meta strategies left competitors struggling to keep up, cementing their position as the undisputed favorites for the upcoming playoffs trophy.",
  },
  {
    id: 2,
    title: "EVOS vs RRQ: The Intense El Clasico Showdown",
    date: "18 April 2026",
    category: "High Stakes Rivalry",
    image: "/teams/news/2.png",
    excerpt: "The legendary El Clásico rivalry flared up once again. EVOS Esports secured a resounding 2-0 victory over their eternal rivals, RRQ Hoshi. Their rock-solid performance left RRQ’s coordination in tatters. This defeat further complicates RRQ’s position as they continue to struggle to climb out of the bottom of the table.",
  },
  {
    id: 3,
    title: "R7’s Emergency Support for RRQ HOSHI",
    date: "20 April 2026",
    category: "Emergency Coaching",
    image: "/teams/news/3.png",
    excerpt: "Legendary former captain R7 returned to provide emergency coaching support during their most difficult week. Despite his veteran guidance and strategic adjustments, the team still struggled to secure much-needed victories, leaving fans concerned as the Kings failed to deliver the expected results during this critical period.",
  },
];