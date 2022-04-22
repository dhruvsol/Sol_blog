import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolBlog } from "../target/types/sol_blog";

describe("sol_blog", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.SolBlog as Program<SolBlog>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
