import CommandManager from "#CommandManager";
import Env, { VariableTypes } from "#Env";

await CommandManager.LoadCommands();
Env.RegisterVariable("ADMINISTRATOR_IDS", VariableTypes.Array, { Default: [] })
    .RegisterVariable("EMBED_EXPIRY_DURATION", VariableTypes.Number, { Default: 15 })
    .RegisterVariable("DISCORD_TOKEN")
    .RegisterVariable("CLIENT_ID")
;

