"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[25165],{19899:t=>{t.exports=JSON.parse('{"functions":[{"name":"createSlottedTouchButton","desc":"Touch buttons should always show up in the same position\\nWe use the SlotId to determine which slot we should put\\nthese buttons in.","params":[{"name":"slotId","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"SlottedTouchButton"}],"function_type":"static","source":{"line":38,"path":"src/inputkeymaputils/src/Shared/Types/SlottedTouchButtonUtils.lua"}},{"name":"isSlottedTouchButton","desc":"Returns whether an inputType is a SlottedTouchButton type","params":[{"name":"inputType","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":60,"path":"src/inputkeymaputils/src/Shared/Types/SlottedTouchButtonUtils.lua"}},{"name":"createTouchButtonData","desc":"Gets slotted touch button data for an inputKeyMapList","params":[{"name":"slotId","desc":"","lua_type":"string"},{"name":"inputModeType","desc":"","lua_type":"InputModeType"}],"returns":[{"desc":"","lua_type":"SlottedTouchButtonData"}],"function_type":"static","source":{"line":71,"path":"src/inputkeymaputils/src/Shared/Types/SlottedTouchButtonUtils.lua"}},{"name":"getSlottedTouchButtonData","desc":"Gets slotted touch button data for an inputKeyMapList","params":[{"name":"inputKeyMapList","desc":"","lua_type":"InputKeyMapList"}],"returns":[{"desc":"","lua_type":"{ SlottedTouchButtonData }"}],"function_type":"static","source":{"line":84,"path":"src/inputkeymaputils/src/Shared/Types/SlottedTouchButtonUtils.lua"}}],"properties":[],"types":[{"name":"SlottedTouchButtonData","desc":"Internal data representing a slotted touch button","fields":[{"name":"slotId","lua_type":"string","desc":""},{"name":"inputModeType","lua_type":"InputModeType","desc":""}],"source":{"line":18,"path":"src/inputkeymaputils/src/Shared/Types/SlottedTouchButtonUtils.lua"}},{"name":"SlottedTouchButton","desc":"A touch button that goes into a specific slot. This ensures\\nconsistent slot positions.","fields":[{"name":"type","lua_type":"\\"SlottedTouchButton\\"","desc":""},{"name":"slotId","lua_type":"string","desc":""}],"source":{"line":29,"path":"src/inputkeymaputils/src/Shared/Types/SlottedTouchButtonUtils.lua"}}],"name":"SlottedTouchButtonUtils","desc":"","source":{"line":4,"path":"src/inputkeymaputils/src/Shared/Types/SlottedTouchButtonUtils.lua"}}')}}]);