import { MessageStructure, MAGIC } from "../../src";

type MessageStructureData = {
  hex: string;
  raw: MessageStructure<string>;
};
export const datas: MessageStructureData[] = [
  {
    hex: "f9beb4d970696e6700000000000000000800000007fb26b6ed9801961797a5f1",
    raw: {
      magic: MAGIC.Mainnet,
      command: "ping",
      length: 8,
      checksum: "07fb26b6",
      payload: "ed9801961797a5f1",
    },
  },
  {
    hex: "f9beb4d9706f6e670000000000000000080000007264244815569dfaed442652",
    raw: {
      magic: MAGIC.Mainnet,
      command: "pong",
      length: 8,
      checksum: "72642448",
      payload: "15569dfaed442652",
    },
  },
  {
    hex: "f9beb4d976657273696f6e000000000066000000df7d29e6",
    raw: {
      magic: MAGIC.Mainnet,
      command: "version",
      length: 102,
      checksum: "df7d29e6",
      payload: "",
    },
  },
  {
    hex: "f9beb4d976657273696f6e00000000006600000097302af5801101000904000000000000e577646100000000000000000000000000000000000000000000ffff1fdf0364085e090400000000000000000000000000000000000000000000000072036dbc6d407f7f102f5361746f7368693a32322e302e302f26c00a0001",
    raw: {
      magic: MAGIC.Mainnet,
      command: "version",
      length: 102,
      checksum: "97302af5",
      payload:
        "801101000904000000000000e577646100000000000000000000000000000000000000000000ffff1fdf0364085e090400000000000000000000000000000000000000000000000072036dbc6d407f7f102f5361746f7368693a32322e302e302f26c00a0001",
    },
  },
  {
    hex: "f9beb4d976657261636b000000000000000000005df6e0e2",
    raw: {
      magic: MAGIC.Mainnet,
      command: "verack",
      length: 0,
      checksum: "5df6e0e2",
      payload: "",
    },
  },
  {
    hex: "f9beb4d9616c65727400000000000000a80000001bf9aaea60010000000000000000000000ffffff7f00000000ffffff7ffeffff7f01ffffff7f00000000ffffff7f00ffffff7f002f555247454e543a20416c657274206b657920636f6d70726f6d697365642c2075706772616465207265717569726564004630440220653febd6410f470f6bae11cad19c48413becb1ac2c17f908fd0fd53bdc3abd5202206d0e9c96fe88d4a0f01ed9dedae2b6f9e00da94cad0fecaae66ecf689bf71b50",
    raw: {
      magic: MAGIC.Mainnet,
      command: "alert",
      length: 168,
      checksum: "1bf9aaea",
      payload:
        "60010000000000000000000000ffffff7f00000000ffffff7ffeffff7f01ffffff7f00000000ffffff7f00ffffff7f002f555247454e543a20416c657274206b657920636f6d70726f6d697365642c2075706772616465207265717569726564004630440220653febd6410f470f6bae11cad19c48413becb1ac2c17f908fd0fd53bdc3abd5202206d0e9c96fe88d4a0f01ed9dedae2b6f9e00da94cad0fecaae66ecf689bf71b50",
    },
  },
  {
    hex: "f9beb4d96164647200000000000000001f0000000c30bcb501597a6461090400000000000000000000000000000000ffff9eb572c4208d",
    raw: {
      magic: MAGIC.Mainnet,
      command: "addr",
      length: 31,
      checksum: "0c30bcb5",
      payload: "01597a6461090400000000000000000000000000000000ffff9eb572c4208d",
    },
  },
  {
    hex: "f9beb4d973656e646865616465727300000000005df6e0e2",
    raw: {
      magic: MAGIC.Mainnet,
      command: "sendheaders",
      length: 0,
      checksum: "5df6e0e2",
      payload: "",
    },
  },
  {
    hex: "f9beb4d9686561646572730000000000450100003d3370e50404e0ff2f7b8d134d1e1445a2df1c681374839e87dbf32658de570400000000000000000011ef2eb8d6c4b963eaeb8c1039eb946ab86c39649a9877662d6538fe70c93a2ff875656132260e1715bf98b60004006020b4ebbea3b7cef7c2f6fe3842d7187e8031168ccfde110e00000000000000000063a392ce675dd436b12b26724b3c31e6e1eeec1f663d9dfb732c713f4c71ab667f79656132260e175d60c5330004002020995f1bbecf662e4232b5da02922f35832a7492b357d101000000000000000000ad5032b9f680aedc1956e08be86381824011e2ed5aa459b992c7062be4cc354eca79656132260e1760a4663c0004000020de4d609e6ea7c76f7be83352e2e0cb3faae5bd3f819500000000000000000000007284c255c17e276aa2d1e7f42caddf89a197b8cb94e59a6bf1ebb0d129ea34b97a656132260e170d446a3200f9beb4d9706f6e670000000000000000080000007dbd9c4439a9f19317217623",
    raw: {
      magic: MAGIC.Mainnet,
      command: "headers",
      length: 325,
      checksum: "3d3370e5",
      payload:
        "0404e0ff2f7b8d134d1e1445a2df1c681374839e87dbf32658de570400000000000000000011ef2eb8d6c4b963eaeb8c1039eb946ab86c39649a9877662d6538fe70c93a2ff875656132260e1715bf98b60004006020b4ebbea3b7cef7c2f6fe3842d7187e8031168ccfde110e00000000000000000063a392ce675dd436b12b26724b3c31e6e1eeec1f663d9dfb732c713f4c71ab667f79656132260e175d60c5330004002020995f1bbecf662e4232b5da02922f35832a7492b357d101000000000000000000ad5032b9f680aedc1956e08be86381824011e2ed5aa459b992c7062be4cc354eca79656132260e1760a4663c0004000020de4d609e6ea7c76f7be83352e2e0cb3faae5bd3f819500000000000000000000007284c255c17e276aa2d1e7f42caddf89a197b8cb94e59a6bf1ebb0d129ea34b97a656132260e170d446a3200f9beb4d9706f6e670000000000000000080000007dbd9c4439a9f19317217623",
    },
  },
];