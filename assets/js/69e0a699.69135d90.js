"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65476],{33906:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new JSONTranslator from the given args.\\n\\n```lua\\nlocal translator = JSONTranslator.new(\\"MyTranslator\\", en\\", {\\n\\tactions = {\\n\\t\\trespawn = \\"Respawn {playerName}\\";\\n\\t};\\n})\\n\\nprint(translator:FormatByKey(\\"actions.respawn\\"), { playerName = \\"Quenty\\"}) --\x3e Respawn Quenty\\n```\\n\\n```lua\\nlocal translator = JSONTranslator.new(script)\\n-- assume there is an `en.json` underneath the script with valid JSON.\\n```","params":[{"name":"translatorName","desc":"Name of the translator. Used for source.","lua_type":"string"},{"name":"...","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"JSONTranslator"}],"function_type":"static","source":{"line":58,"path":"src/clienttranslator/src/Client/JSONTranslator.lua"}},{"name":"ObserveLocaleId","desc":"Observes the current locale id for this translator.","params":[],"returns":[{"desc":"","lua_type":"Observable<string>"}],"function_type":"method","source":{"line":87,"path":"src/clienttranslator/src/Client/JSONTranslator.lua"}},{"name":"GetLocaleId","desc":"Gets the current localeId of the translator if it\'s initialized, or a default if it is not.","params":[],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":100,"path":"src/clienttranslator/src/Client/JSONTranslator.lua"}},{"name":"GetLocalizationTable","desc":"Gets the localization table the translation is using.","params":[],"returns":[{"desc":"","lua_type":"LocalizaitonTable"}],"function_type":"method","source":{"line":115,"path":"src/clienttranslator/src/Client/JSONTranslator.lua"}},{"name":"PromiseLoaded","desc":"Returns a promise that will resolve once the translator is loaded from the cloud.","params":[],"returns":[{"desc":"","lua_type":"Promise"}],"function_type":"method","source":{"line":123,"path":"src/clienttranslator/src/Client/JSONTranslator.lua"}},{"name":"FallbackTo","desc":"Makes the translator fall back to another translator if an entry cannot be found.\\n\\nMostly just used for testing.","params":[{"name":"translator","desc":"","lua_type":"JSONTranslator | Translator"}],"returns":[],"function_type":"method","source":{"line":134,"path":"src/clienttranslator/src/Client/JSONTranslator.lua"}},{"name":"PromiseFormatByKey","desc":"Formats the resulting entry by args.\\n\\n:::tip\\nYou should use [JSONTranslator.ObserveFormatByKey] instead of this to respond\\nto locale changing.\\n:::","params":[{"name":"key","desc":"","lua_type":"string"},{"name":"args","desc":"","lua_type":"table?"}],"returns":[{"desc":"","lua_type":"Promise<string>"}],"function_type":"method","source":{"line":153,"path":"src/clienttranslator/src/Client/JSONTranslator.lua"}},{"name":"ObserveFormatByKey","desc":"Observes the translated value","params":[{"name":"key","desc":"","lua_type":"string"},{"name":"argData","desc":"May have observables (or convertable to observables) in it.","lua_type":"table?"}],"returns":[{"desc":"","lua_type":"Observable<string>"}],"function_type":"method","source":{"line":168,"path":"src/clienttranslator/src/Client/JSONTranslator.lua"}},{"name":"FormatByKey","desc":"Formats or errors if the cloud translations are not loaded.\\n\\n:::tip\\nYou should use [JSONTranslator.ObserveFormatByKey] instead of this to respond\\nto locale changing.\\n:::","params":[{"name":"key","desc":"","lua_type":"string"},{"name":"args","desc":"","lua_type":"table?"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":213,"path":"src/clienttranslator/src/Client/JSONTranslator.lua"}},{"name":"Destroy","desc":"Cleans up the translator and deletes the localization table if it exists.","params":[],"returns":[],"function_type":"method","source":{"line":295,"path":"src/clienttranslator/src/Client/JSONTranslator.lua"}}],"properties":[],"types":[],"name":"JSONTranslator","desc":"Utility function that loads a translator from a folder or a table.\\n\\nTo get translations uploaded.\\n\\n1. Run the game\\n2. On the client, check LocalizationService.GeneratedJSONTable\\n3. Right click > Save as CSV\\n4. Stop the game\\n5. In Studio, go to plugins > \\"Localization Tools\\"\\n6. Upload the CSV (update)","source":{"line":15,"path":"src/clienttranslator/src/Client/JSONTranslator.lua"}}')}}]);