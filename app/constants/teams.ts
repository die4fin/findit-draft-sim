// constants/teams.ts

export interface Team {
  id: string;
  name: string;
  logo: string;
}

export const MPL_TEAMS: Team[] = [
    { id: "ae", name: "ALTER EGO", logo: "/teams/ae.png"},
    { id: "btr", name: "BIGETRON BY VITALITY", logo: "/teams/btr.png"},
    { id: "dewa", name: "DEWA UNITED", logo: "/teams/dewa.png"},
    { id: "evos", name: "EVOS", logo: "/teams/evos.png"},
    { id: "geek", name: "GEEK FAM", logo: "/teams/geek.png"},
    { id: "navi", name: "NAVI", logo: "/teams/navi.png"},
    { id: "onic", name: "ONIC", logo: "/teams/onic.png"},
    { id: "rrq", name: "RRQ", logo: "/teams/rrq.png"},
    { id: "tlid", name: "TEAM LIQUID ID", logo: "/teams/tlid.png"}
];