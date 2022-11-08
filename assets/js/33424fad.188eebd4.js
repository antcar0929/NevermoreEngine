"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59955],{67036:e=>{e.exports=JSON.parse('{"functions":[{"name":"playFromId","desc":"Plays back a template given asset id.\\n\\n```lua\\nSoundUtils.playFromId(\\"rbxassetid://4255432837\\") -- Plays a wooshing sound\\n```\\n\\n:::tip\\nThe sound will be automatically cleaned up after the sound is played.\\n:::","params":[{"name":"id","desc":"","lua_type":"string | number"}],"returns":[{"desc":"","lua_type":"Sound"}],"function_type":"static","source":{"line":34,"path":"src/sounds/src/Shared/SoundUtils.lua"}},{"name":"createSoundFromId","desc":"Creates a new sound object from the given id","params":[{"name":"id","desc":"","lua_type":"string | number"}],"returns":[{"desc":"","lua_type":"Sound\\n"}],"function_type":"static","source":{"line":54,"path":"src/sounds/src/Shared/SoundUtils.lua"}},{"name":"playFromIdInParent","desc":"Plays back a template given asset id in the parent","params":[{"name":"id","desc":"","lua_type":"string | number"},{"name":"parent","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Sound\\n"}],"function_type":"static","source":{"line":70,"path":"src/sounds/src/Shared/SoundUtils.lua"}},{"name":"removeAfterTimeLength","desc":"Loads the sound and then cleans up the sound after load.","params":[{"name":"sound","desc":"","lua_type":"Sound"}],"returns":[],"function_type":"static","source":{"line":92,"path":"src/sounds/src/Shared/SoundUtils.lua"}},{"name":"playTemplate","desc":"Plays back a template given the templateName.\\n\\n:::tip\\nThe sound will be automatically cleaned up after the sound is played.\\n:::","params":[{"name":"templates","desc":"","lua_type":"TemplateProvider"},{"name":"templateName","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"Sound"}],"function_type":"static","source":{"line":114,"path":"src/sounds/src/Shared/SoundUtils.lua"}},{"name":"toRbxAssetId","desc":"Converts a string or number to a string for playback.","params":[{"name":"id","desc":"","lua_type":"string? | number"}],"returns":[{"desc":"","lua_type":"string?"}],"function_type":"static","source":{"line":133,"path":"src/sounds/src/Shared/SoundUtils.lua"}},{"name":"playTemplateInParent","desc":"Plays back a sound template in a specific parent.\\n\\n:::tip\\nThe sound will be automatically cleaned up after the sound is played.\\n:::","params":[{"name":"templates","desc":"","lua_type":"TemplateProvider"},{"name":"templateName","desc":"","lua_type":"string"},{"name":"parent","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Sound"}],"function_type":"static","source":{"line":153,"path":"src/sounds/src/Shared/SoundUtils.lua"}}],"properties":[],"types":[],"name":"SoundUtils","desc":"Helps plays back sounds in the Roblox engine.\\n\\n```lua\\nSoundUtils.playFromId(\\"rbxassetid://4255432837\\") -- Plays a wooshing sound\\n```","source":{"line":10,"path":"src/sounds/src/Shared/SoundUtils.lua"}}')}}]);