import CommandManager from "#CommandManager";
import Env, { VariableTypes } from "#Env";

await CommandManager.LoadCommands();
Env.RegisterVariable("ADMINISTRATOR_IDS", VariableTypes.Array, { Default: [] })
    .RegisterVariable("EMBED_EXPIRY_DURATION", VariableTypes.Number, { Default: 15 })
    .RegisterVariable("SOURCE", VariableTypes.String, { Default: "https://github.com/chara-dreemurr-67/claires-bot-template" })
    .RegisterVariable("DISCORD_TOKEN")
    .RegisterVariable("CLIENT_ID")
;