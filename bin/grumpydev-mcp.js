#!/usr/bin/env node
import path from 'node:path';
import { execSync } from 'node:child_process';

execSync('npx -y genaiscript mcp --groups mcp', {
  stdio: 'inherit',
  cwd: path.join(import.meta.dirname, '..'),
});
