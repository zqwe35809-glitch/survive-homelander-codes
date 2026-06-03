import { unstable_cache } from "next/cache";

export interface Code {
  id: string;
  code: string;
  reward: string;
  rewardAmount: number; // 用于计算总 Credits（可选展示）
  status: "active" | "expired" | "unverified";
  isNew: boolean; // 近7天新增为 true
  addedDate: string; // ISO 日期字符串 (YYYY-MM-DD)
  expiredDate?: string;
  source: string; // "Official Discord" | "Pro Game Guides" 等
  note?: string;
}

export const ACTIVE_CODES: Code[] = [
  {
    id: "qolfixes",
    code: "QOLFIXES",
    reward: "250 Credits",
    rewardAmount: 250,
    status: "active",
    isNew: true,
    addedDate: "2026-06-02",
    source: "Pro Game Guides",
    note: "QOL Update",
  },
  {
    id: "bigupdatenextweek",
    code: "BIGUPDATENEXTWEEK",
    reward: "100 Credits",
    rewardAmount: 100,
    status: "active",
    isNew: true,
    addedDate: "2026-06-01",
    source: "Twinfinite",
    note: "Big update teaser",
  },
  {
    id: "atrain",
    code: "ATRAIN",
    reward: "200 Credits",
    rewardAmount: 200,
    status: "active",
    isNew: false,
    addedDate: "2026-05-20",
    source: "Official Discord",
    note: "A-Train character launch",
  },
  {
    id: "sorryforthebugs",
    code: "SORRYFORTHEBUGS",
    reward: "75 Credits",
    rewardAmount: 75,
    status: "active",
    isNew: false,
    addedDate: "2026-05-28",
    source: "MrGuider",
    note: "Bug fix compensation",
  },
  {
    id: "hth",
    code: "HTH",
    reward: "75 Credits",
    rewardAmount: 75,
    status: "active",
    isNew: false,
    addedDate: "2026-05-15",
    source: "Official Discord",
  },
  {
    id: "likethegame",
    code: "LIKETHEGAME",
    reward: "125 Credits",
    rewardAmount: 125,
    status: "active",
    isNew: false,
    addedDate: "2026-05-10",
    source: "Official Discord",
  },
];

export const EXPIRED_CODES: Code[] = [
  {
    id: "supebrawl",
    code: "SUPEBRAWL",
    reward: "150 Credits",
    rewardAmount: 150,
    status: "expired",
    isNew: false,
    addedDate: "2026-04-20",
    expiredDate: "2026-05-01",
    source: "Official Discord",
  },
  {
    id: "voughttower",
    code: "VOUGHTTOWER",
    reward: "100 Credits",
    rewardAmount: 100,
    status: "expired",
    isNew: false,
    addedDate: "2026-04-05",
    expiredDate: "2026-04-30",
    source: "Official Discord",
  },
  {
    id: "compoundv",
    code: "COMPOUNDV",
    reward: "200 Credits",
    rewardAmount: 200,
    status: "expired",
    isNew: false,
    addedDate: "2026-03-15",
    expiredDate: "2026-04-10",
    source: "Twinfinite",
  },
];

// ISR cache configured to revalidate every 6 hours (21600 seconds)
export const getCodes = unstable_cache(
  async () => {
    return {
      activeCodes: ACTIVE_CODES,
      expiredCodes: EXPIRED_CODES,
    };
  },
  ["codes-data"],
  {
    revalidate: 21600,
    tags: ["codes"],
  }
);
