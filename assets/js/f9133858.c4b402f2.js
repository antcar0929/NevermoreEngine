"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[71776],{40348:e=>{e.exports=JSON.parse('{"functions":[{"name":"GetImplementations","desc":"Gets all valid interfaces for this adornee","params":[{"name":"adornee","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"{ TieInterface }"}],"function_type":"method","source":{"line":67,"path":"src/tie/src/Shared/Definition/TieDefinition.lua"}},{"name":"FindFirstImplementation","desc":"Finds the first valid interfaces for this adornee","params":[{"name":"adornee","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"TieInterface"}],"function_type":"method","source":{"line":89,"path":"src/tie/src/Shared/Definition/TieDefinition.lua"}},{"name":"HasImplementation","desc":"Returns true if the adornee implements the interface, and false otherwise.","params":[{"name":"adornee","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":109,"path":"src/tie/src/Shared/Definition/TieDefinition.lua"}},{"name":"ObserveIsImplemented","desc":"Observes whether the adornee implements the interface.","params":[{"name":"adornee","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Observable<boolean>>"}],"function_type":"method","source":{"line":125,"path":"src/tie/src/Shared/Definition/TieDefinition.lua"}},{"name":"ObserveIsImplementation","desc":"Observes whether the folder is a valid implementation","params":[{"name":"folder","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Observable<boolean>>"}],"function_type":"method","source":{"line":144,"path":"src/tie/src/Shared/Definition/TieDefinition.lua"}},{"name":"ObserveIsImplementedOn","desc":"Observes whether the folder is a valid implementation on the given adornee","params":[{"name":"folder","desc":"","lua_type":"Instance"},{"name":"adornee","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Observable<boolean>>"}],"function_type":"method","source":{"line":162,"path":"src/tie/src/Shared/Definition/TieDefinition.lua"}},{"name":"ObserveLastImplementationBrio","desc":"Observes a valid implementation wrapped in a brio if it exists.","params":[{"name":"adornee","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Observable<Brio<TieImplementation<T>>>"}],"function_type":"method","source":{"line":186,"path":"src/tie/src/Shared/Definition/TieDefinition.lua"}},{"name":"ObserveImplementationsBrio","desc":"Observes valid implementations wrapped in a brio if it exists.","params":[{"name":"adornee","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"Observable<Brio<TieImplementation<T>>>"}],"function_type":"method","source":{"line":203,"path":"src/tie/src/Shared/Definition/TieDefinition.lua"}},{"name":"Implement","desc":"Ensures implementation of the object, binding table values and Lua OOP objects\\nto Roblox objects that can be invoked generally.\\n\\n```lua\\n\\n```","params":[{"name":"adornee","desc":"Adornee to implement interface on","lua_type":"Instance"},{"name":"implementer","desc":"Table with all interface values or nil","lua_type":"table?"}],"returns":[{"desc":"","lua_type":"TieImplementation<T>"}],"function_type":"method","source":{"line":281,"path":"src/tie/src/Shared/Definition/TieDefinition.lua"}},{"name":"Get","desc":"Gets an interface to the tie definition. Not this can be done\\non any Roblox instance. If the instance does not implement the interface,\\ninvoking interface methods, or querying the interface will result\\nin errors.","params":[{"name":"adornee","desc":"Adornee to get interface on","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"TieInterface<T>"}],"function_type":"method","source":{"line":297,"path":"src/tie/src/Shared/Definition/TieDefinition.lua"}},{"name":"GetName","desc":"Gets the name of the definition","params":[],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":307,"path":"src/tie/src/Shared/Definition/TieDefinition.lua"}}],"properties":[],"types":[],"name":"TieDefinition","desc":"","source":{"line":4,"path":"src/tie/src/Shared/Definition/TieDefinition.lua"}}')}}]);