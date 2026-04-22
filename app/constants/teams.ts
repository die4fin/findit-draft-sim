// constants/teams.ts

export interface Team {
  id: string;
  name: string;
  logo: string;
  region: string;
}

export const TOURNAMENT_MODES = [
  // 🌍 Global
  { id: "INTL", label: "M-Series", flagCode: "un" }, 
  
  // 🌏 SEA (Southeast Asia)
  { id: "ID", label: "MPL Indonesia S17", flagCode: "id" },
  { id: "PH", label: "MPL Philippines S17", flagCode: "ph" },
  { id: "MY", label: "MPL Malaysia S17", flagCode: "my" },
  { id: "KH", label: "MPL Cambodia S9", flagCode: "kh" },
  { id: "MM", label: "MSL Myanmar S3", flagCode: "mm" },
  { id: "TH", label: "MSL Thailand S1", flagCode: "th" },
  
  // 🌍 MENA, Europe & Others
  { id: "MENA", label: "MPL MENA S9", flagCode: "sa" }, 
  { id: "TR", label: "MTC Turkiye S7", flagCode: "tr" },
  { id: "CIS", label: "MCC CIS S7", flagCode: "ru" },  
  { id: "CN", label: "MCM China S2", flagCode: "cn" },
];

export const ALL_TEAMS: Team[] = [
  // --- INDONESIA ---
  { id: "ae", name: "ALTER EGO", logo: "/teams/ae.png", region: "ID"},
  { id: "btr", name: "BIGETRON BY VITALITY", logo: "/teams/btr.png", region: "ID"},
  { id: "dewa", name: "DEWA UNITED", logo: "/teams/dewa.png", region: "ID"},
  { id: "evos", name: "EVOS", logo: "/teams/evos.png", region: "ID"},
  { id: "geek", name: "GEEK FAM", logo: "/teams/geek.png", region: "ID"},
  { id: "navi", name: "NAVI", logo: "/teams/navi.png", region: "ID"},
  { id: "onic", name: "ONIC", logo: "/teams/onic.png", region: "ID"},
  { id: "rrq", name: "RRQ", logo: "/teams/rrq.png", region: "ID"},
  { id: "tlid", name: "TEAM LIQUID ID", logo: "/teams/tlid.png", region: "ID"},

  // --- PHILIPPINES ---
  { id: "auroraph", name: "AURORA GAMING PH", logo: "/teams/aurora.png", region: "PH"},
  { id: "bren", name: "AP.BREN", logo: "/teams/bren.png", region: "PH"},
  { id: "onicph", name: "ONIC PHILIPPINES", logo: "/teams/onic.png", region: "PH"},
  { id: "tlph", name: "TEAM LIQUID PH", logo: "/teams/tlid.png", region: "PH"},
  { id: "falconsph", name: "TEAM FALCONS PH", logo: "/teams/falcons.png", region: "PH"},
  { id: "twistedph", name: "TWISTED MINDS PH", logo: "/teams/twisted.png", region: "PH"},
  { id: "tnc", name: "TNC PRO TEAM", logo: "/teams/tnc.png", region: "PH"},
  { id: "omega", name: "OMEGA ESPORTS", logo: "/teams/omega.png", region: "PH"},

  // --- MALAYSIA ---
  { id: "srg", name: "SELANGOR RED GIANTS", logo: "/teams/srg.png", region: "MY"},
  { id: "rrqmy", name: "RRQ TORA", logo: "/teams/rrq.png", region: "MY"},
  { id: "inv", name: "INVICTUS GAMING", logo: "/teams/inv.png", region: "MY"},
  { id: "vamos", name: "TEAM VAMOS", logo: "/teams/vamos.png", region: "MY"},
  { id: "rey", name: "TEAM REY", logo: "/teams/rey.png", region: "MY"},
  { id: "aces", name: "AC ESPORTS", logo: "/teams/aces.png", region: "MY"},
  { id: "btrmy", name: "BIGTERON MY BY VITALITY", logo: "/teams/btr.png", region: "MY"},
  { id: "flashmy", name: "TEAM FLASH", logo: "/teams/flash.png", region: "MY"},

  // --- MENA ---
  { id: "axe", name: "AXE OKAMI", logo: "/teams/axe.png", region: "MENA"},
  { id: "gamax", name: "GAMAX ESPORTS", logo: "/teams/gamax.png", region: "MENA"},
  { id: "gs", name: "GS TEAM", logo: "/teams/gs.png", region: "MENA"},
  { id: "geekay", name: "GEEKAY ESPORTS", logo: "/teams/geekay.png", region: "MENA"},
  { id: "falcons", name: "TEAM FALCONS", logo: "/teams/falcons.png", region: "MENA"},
  { id: "twisted", name: "TWISTED MINDS", logo: "/teams/twisted.png", region: "MENA"},
  { id: "occupy", name: "TEAM OCCUPY", logo: "/teams/occupy.png", region: "MENA"},
  { id: "xprojekt", name: "XPROJEKT ESPORTS", logo: "/teams/xprojekt.png", region: "MENA"},

  // --- CAMBODIA ---
  { id: "cfu", name: "CFU GAMING", logo: "/teams/cfu.png", region: "KH"},
  { id: "duckrice", name: "DUCK RICE ESPORTS", logo: "/teams/duckrice.png", region: "KH"},
  { id: "evileye", name: "EVIL EYE ESPORTS", logo: "/teams/evileye.png", region: "KH"},
  { id: "phoenix", name: "GALAXY PHOENIX", logo: "/teams/galaxy.png", region: "KH"},
  { id: "legends", name: "GALAXY LEGENDS", logo: "/teams/galaxy.png", region: "KH"},
  { id: "pro", name: "PRO ESPORTS", logo: "/teams/pro.png", region: "KH"},
  { id: "flash", name: "TEAM FLASH KH", logo: "/teams/flash.png", region: "KH"},
  { id: "see", name: "SEE YOU SOON", logo: "/teams/see.png", region: "KH"},
  { id: "valhala", name: "VALHALA", logo: "/teams/valhala.png", region: "KH"},
  { id: "vigor", name: "VIGOR APEX", logo: "/teams/vigor.png", region: "KH"},

  // --- MYANMAR ---
  { id: "yangon", name: "YANGON GALACTICOS", logo: "/teams/yangon.png", region: "MM"},
  { id: "team7", name: "TEAM 7", logo: "/teams/team7.png", region: "MM"},
  { id: "paladins", name: "PALADINS", logo: "/teams/paladins.png", region: "MM"},
  { id: "blackthorn", name: "BLACKTHORN", logo: "/teams/blackthorn.png", region: "MM"},
  { id: "falconse", name: "FALCONS ESPORTS", logo: "/teams/falconse.png", region: "MM"},
  { id: "ai", name: "AI ESPORTS", logo: "/teams/ai.png", region: "MM"},
  { id: "mythic", name: "MYTHIC SEAL", logo: "/teams/mythic.png", region: "MM"},
  { id: "wyverns", name: "WYVERNS ESPORTS", logo: "/teams/wyverns.png", region: "MM"},
  { id: "utitans", name: "U TITANS", logo: "/teams/utitans.png", region: "MM"},
  { id: "rising", name: "RISING STARS", logo: "/teams/rising.png", region: "MM"},

  // --- THAILAND ---
  { id: "aec", name: "ACT ESPORTS CLUB", logo: "/teams/aec.png", region: "TH" },
  { id: "vte", name: "VALEE THAI ESPORTS", logo: "/teams/vte.png", region: "TH" },
  { id: "buriram", name: "BURIRAM UNITED ESPORTS", logo: "/teams/buriram.png", region: "TH" },
  { id: "kgc", name: "KING OF GAMERS CLUB", logo: "/teams/kgc.png", region: "TH" },
  { id: "bt", name: "BACON TIME", logo: "/teams/bt.png", region: "TH" },
  { id: "tct", name: "TENACITY", logo: "/teams/tct.png", region: "TH" },
  { id: "earena", name: "EARENA", logo: "/teams/earena.png", region: "TH" },
  { id: "fs", name: "FULL SENSE", logo: "/teams/fs.png", region: "TH" },
  { id: "hydra", name: "HYDRA ESPORTS", logo: "/teams/hydra.png", region: "TH" },
  { id: "solyx", name: "SOLYX", logo: "/teams/solyx.png", region: "TH" },

  // --- TURKEY ---
  { id: "aurora", name: "AURORA GAMING", logo: "/teams/aurora.png", region: "TR" },
  { id: "fut", name: "FUT ESPORTS", logo: "/teams/fut.png", region: "TR" },
  { id: "eternal", name: "ETERNAL FIRE", logo: "/teams/eternal.png", region: "TR" },
  { id: "bushido", name: "BUSHIDO WILDCATS", logo: "/teams/bushido.png", region: "TR" },
  { id: "besiktas", name: "BEŞIKTAŞ ESPORTS", logo: "/teams/besiktas.png", region: "TR" },
  { id: "misa", name: "MISA ESPORTS", logo: "/teams/misa.png", region: "TR" },
  { id: "pcific", name: "PCFIC ESPORTS", logo: "/teams/pcific.png", region: "TR" },
  { id: "regnum", name: "REGNUM CARYA ESPORTS", logo: "/teams/regnum.png", region: "TR" },

  // --- CIS ---
  { id: "ts", name: "TEAM SPIRIT", logo: "/teams/ts.png", region: "CIS" },
  { id: "vt", name: "VERSO TIME", logo: "/teams/vt.png", region: "CIS" },
  { id: "ty", name: "TEAM YANDEX", logo: "/teams/ty.png", region: "CIS" },
  { id: "fe", name: "FORZE ESPORTS", logo: "/teams/fe.png", region: "CIS" },
  { id: "vp", name: "VIRTUS.PRO", logo: "/teams/vp.png", region: "CIS" },
  { id: "magic", name: "MAGIC", logo: "/teams/magic.png", region: "CIS" },
  { id: "ch", name: "CYBERHERO", logo: "/teams/ch.png", region: "CIS" },
  { id: "af", name: "AURA FARMERS", logo: "/teams/af.png", region: "CIS" },

  // --- CHINA ---
  { id: "gg", name: "GUANGZHOU GAMING", logo: "/teams/gg.png", region: "CN" },
  { id: "dfyg", name: "DIANFENGYAOGUAI", logo: "/teams/dfyg.png", region: "CN" },
  { id: "yb", name: "YBINGAME", logo: "/teams/yb.png", region: "CN" },
  { id: "yjn", name: "YING JING NAN", logo: "/teams/yjn.png", region: "CN" },
  { id: "yjg", name: "YAO JING GAMING", logo: "/teams/yjg.png", region: "CN" },
  { id: "kbg", name: "KEEPBEST GAMING", logo: "/teams/kbg.png", region: "CN" },
  { id: "osg", name: "OSG", logo: "/teams/osg.png", region: "CN" },
  { id: "tkg", name: "THE KEEPER GAMING", logo: "/teams/tkg.png", region: "CN" }

];