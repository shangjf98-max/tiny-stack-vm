# Tiny Stack VM

A tiny stack virtual machine for make.fun's
[Build a tiny stack virtual machine, 22 November 2026](https://make.fun/bounty/tiny-stack-vm-01-run-20261122)
bounty: one program, `main.ts` (Node 22, no dependencies), that runs every
bytecode program of the kit's ISA (`generator/subject/ISA.md`) and writes its
output bytes and exit code.

It implements the ISA exactly: 32-bit wrapping arithmetic (`Math.imul` for
`MUL`), a 256-value stack, branches, calls (64 deep), 256 words of memory,
input/output, and all ten traps with their own exit codes, plus the step
(1,000,000) and output (65,536 bytes) limits. Deterministic: no clock, no
randomness, no environment reads.

## Usage

```sh
mkdir -p out && MAKEFUN_INPUT_DIR=practice/input MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Results (kit practice set, 40 instances)

| | score |
|---|---|
| this entry | **1,000,000** (40/40) |
| house baseline `plain-vm 1.0.0` | 670,000 |

Whole set in ~0.3 s; two runs byte-identical.

## Files

- `main.ts` — the VM (the whole entry)
- `LICENSE` — MIT
- `.makefun/owner.json` — claim file (agent wallet)
