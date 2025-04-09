<div align="center">

<img src="./docs/images/icon.png" alt="" align="center" height="96" />

# Grumpy Senior Developer as MCP server

[![Open project in GitHub Codespaces](https://img.shields.io/badge/Codespaces-Open-blue?style=flat-square&logo=github)](https://codespaces.new/sinedied/grumpydev-mcp?hide_repo_select=true&ref=main&quickstart=true)
[![Join Azure AI Community Discord](https://img.shields.io/badge/Discord-Azure_AI_Community-blue?style=flat-square&logo=discord&color=5865f2&logoColor=fff)](https://discord.gg/kzRShWzttr)
[![Watch to learn more about GenAI with JS on YouTube](https://img.shields.io/badge/YouTube-GenAI_with_JS-d95652.svg?style=flat-square&logo=youtube)](https://www.youtube.com/playlist?list=PLlrxD0HtieHi5ZpsHULPLxm839IrhmeDk)
[![NPM version](https://img.shields.io/npm/v/grumpydev-mcp.svg?style=flat-square)](https://www.npmjs.com/package/grumpydev-mcp)
![Node version](https://img.shields.io/badge/Node.js->=20-3c873a?style=flat-square)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

⭐ If you like this project, star it on GitHub!

[Usage](#usage) • [Model configuration](#model-configuration) • [About](#about)

</div>

Are you a senior dev, tired of reviewing and fixing the mess made by these vibe-coded PRs? Or maybe a you're a vibe coder, tired of being told to fix your code? This is the perfect MCP tool for both of you! 🫵

This MCP server is designed to provide the same perspective as the (grumpy) senior dev of your team. It will review your code, tell you what needs to be fixed and what's wrong with it. All with the sarcastic and cynical tone you've come to expect.


<details>
<summary><b>Example review</b></summary>

Code to review:
```js
console.log(`Hello world`)
```

Result:
```md
Oh great, a one-liner. How inspiring. Let’s dive into this "masterpiece."

1. **Template Literal Abuse:**  
   Really? A template literal for a static string? Back in my day, we didn't waste resources on unnecessary string interpolation when a plain `'Hello world'` would have done just fine. This reeks of laziness.

2. **Semicolon Missing:**  
   No semicolon at the end of the line? What is this, JavaScript anarchy? Sure, JavaScript allows it, but don’t come crying to me when you run headfirst into an ASI (Automatic Semicolon Insertion) gotcha.

3. **Unnecessary Backticks:**  
   Did I mention how pointless those backticks are? Use them when you actually need variable interpolation or multiline strings, not just to show off that you’re following "modern" syntax trends.

4. **Lack of Context:**  
   What is this accomplishing, exactly? A `"Hello world"` with zero context or an explanation of why it exists? Is this a debugging tool? A placeholder? A cry for help? Back in the old days, we wrote comments. Try it sometime.

5. **Console.log Overkill:**  
   Oh sure, `console.log` is fine **now**, but don't pretend this is production-grade. Professionals use proper logging systems, not this poor man’s debugging trick.

**Verdict:**  
Well, it works, I guess. Next time—if there is a next time—try writing something that doesn’t immediately make me regret my choice of career.
```

</details>

> [!NOTE]
> **What's MCP?**<br>[Model Context Protocol (MCP)](https://github.com/rajyraman/genai-mcp/tree/main#:~:text=MCP%20specification%2C%20defines-,Model%20Context%20Protocol,-MCP%20is%20an) is an open protocol that standardizes how applications provide context to LLMs. Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories, MCP provides a standardized way to connect AI models to different data sources and tools.

## Usage

This tool requires [Node.js 20+](https://nodejs.org/en/download/) to be installed on your system.

### Use with GitHub Copilot

> [!IMPORTANT]
> MCP support in VS Code and GitHub Copilot currently requires you [to enable Agent mode](https://code.visualstudio.com/blogs/2025/04/07/agentMode#_available-to-all-users) or use the latest version of [VS Code Insiders](https://code.visualstudio.com/insiders/) or later. You can install the Insiders version alongside your regular version of VS Code.

You can install the MCP server using the following links:

<!--
// Generate using?:
const config = JSON.stringify({ name: 'playwright', command: 'npx', args: ["-y", "@playwright/mcp@latest"] });
const urlForWebsites = `vscode:mcp/install?${encodeURIComponent(config)}`;
// Github markdown does not allow linking to `vscode:` directly, so you can use our redirect:
const urlForGithub = `https://insiders.vscode.dev/redirect?url=${encodeURIComponent(urlForWebsites)}`;
-->

[![Install in VS Code](https://img.shields.io/badge/VS_Code-VS_Code?style=flat-square&label=Install%20MCP%20Server&color=0098FF)](https://insiders.vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522grumpydev%2522%252C%2522command%2522%253A%2522npx%2522%252C%2522args%2522%253A%255B%2522-y%2522%252C%2522grumpydev-mcp%2540latest%2522%255D%257D)

[![Install in VS Code Insiders](https://img.shields.io/badge/VS_Code_Insiders-VS_Code_Insiders?style=flat-square&label=Install%20MCP%20Server&color=24bfa5)](https://insiders.vscode.dev/redirect?url=vscode-insiders%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522grumpydev%2522%252C%2522command%2522%253A%2522npx%2522%252C%2522args%2522%253A%255B%2522-y%2522%252C%2522grumpydev-mcp%2540latest%2522%255D%257D)

Or by using the command line:

```bash
# For VS Code
code --add-mcp '{"name":"grumpydev","command":"npx","args":["-y","grumpydev-mcp"]}'
```

```bash
# For VS Code Insiders
code-insiders --add-mcp '{"name":"grumpydev","command":"npx","args":["-y","grumpydev-mcp"]}'
```

Or adding it manually in the `.vscode/mcp.json` file in your workspace:

```jsonc
{
  "servers": {
    "grumpydev-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "grumpydev-mcp",
      ],
      // Optional, if you want to configure the model
      // "envFile": "${workspaceFolder}/.env"
    }
  }
}
```

### Use with Claude desktop

Add this to your `claude_desktop_config.json`:

```jsonc
{
  "mcpServers": {
    "grumpydev-mcp": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "-y",
        "grumpydev-mcp",
      ],
      // Optional, if you want to configure the model
      // "env": {
      //   "GENAISCRIPT_DEFAULT_MODEL": "<your_model_config>",
      // }
    }
  }
}
```

## Model configuration

You can configure the model used by this MCP server by setting the `GENAISCRIPT_DEFAULT_MODEL` environment variable. This variable should contain the provider and name of the model you want to use, such as `github:gpt-4o`. By default, it uses [GitHub Models](https://github.com/marketplace/models) with GPT-4o model.

You can use any provider/model supported by [GenAIScript](https://microsoft.github.io/genaiscript/getting-started/configuration/), see the [model configuration](https://microsoft.github.io/genaiscript/getting-started/configuration/) section for more details. Some models may require additional configuration as environment variables, such as API keys or other credentials.

## About

This MCP tool was built using [GenAIScript](https://microsoft.github.io/genaiscript/).
