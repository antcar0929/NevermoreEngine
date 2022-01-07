"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[21701],{95577:function(e){e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new value object","params":[{"name":"baseValue","desc":"","lua_type":"T"}],"returns":[{"desc":"","lua_type":"ValueObject"}],"function_type":"static","source":{"line":21,"path":"src/valueobject/src/Shared/ValueObject.lua"}},{"name":"isValueObject","desc":"Returns whether the object is a ValueObject class","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":44,"path":"src/valueobject/src/Shared/ValueObject.lua"}},{"name":"Observe","desc":"Observes the current value of the ValueObject","params":[],"returns":[{"desc":"","lua_type":"Observable<T>"}],"function_type":"method","source":{"line":52,"path":"src/valueobject/src/Shared/ValueObject.lua"}},{"name":"Destroy","desc":"Forces the value to be nil on cleanup, cleans up the Maid\\n\\nDoes not fire the event since 3.5.0","params":[],"returns":[],"function_type":"method","source":{"line":113,"path":"src/valueobject/src/Shared/ValueObject.lua"}}],"properties":[{"name":"Changed","desc":"Event fires when the value\'s object value change","lua_type":"Signal<T> -- fires with oldValue, newValue","source":{"line":33,"path":"src/valueobject/src/Shared/ValueObject.lua"}},{"name":"Value","desc":"The value of the ValueObject","lua_type":"T","source":{"line":79,"path":"src/valueobject/src/Shared/ValueObject.lua"}}],"types":[],"name":"ValueObject","desc":"To work like value objects in Roblox and track a single item,\\nwith `.Changed` events","source":{"line":6,"path":"src/valueobject/src/Shared/ValueObject.lua"}}')}}]);