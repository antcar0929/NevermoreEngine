"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10155],{33618:e=>{e.exports=JSON.parse('{"functions":[{"name":"ClearRedoStack","desc":"Clears the redo stack manually. This may be required if you do an action but\\ncan\'t push an undo.","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":48,"path":"src/undostack/src/Shared/UndoStack.lua"}},{"name":"IsActionExecuting","desc":"Returns true if an action is executing","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":57,"path":"src/undostack/src/Shared/UndoStack.lua"}},{"name":"ObserveHasUndoEntries","desc":"Observes whether the stack has undo entries","params":[],"returns":[{"desc":"","lua_type":"Observable<boolean>"}],"function_type":"method","source":{"line":65,"path":"src/undostack/src/Shared/UndoStack.lua"}},{"name":"ObserveHasRedoEntries","desc":"Observes whether the stack has redo entries","params":[],"returns":[{"desc":"","lua_type":"Observable<boolean>"}],"function_type":"method","source":{"line":73,"path":"src/undostack/src/Shared/UndoStack.lua"}},{"name":"HasUndoEntries","desc":"Returns true if there are undo entries on the stack","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":81,"path":"src/undostack/src/Shared/UndoStack.lua"}},{"name":"HasRedoEntries","desc":"Returns true if there are redo entries on the stack","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":89,"path":"src/undostack/src/Shared/UndoStack.lua"}},{"name":"Push","desc":"Pushes an action to be undone.\\n\\n```lua\\nlocal entry = UndoStackEntry.new()\\nentry:SetPromiseUndo(function()\\n\\treturn buildService:PromiseSellItem(item)\\nend)\\nentry:SetPromiseRedo(function()\\n\\treturn buildService:PromisePlaceItem(item)\\nend)\\n\\nmaid:GiveTask(undoStack:Push(entry))\\n```","params":[{"name":"undoStackEntry","desc":"","lua_type":"UndoStackEntry"}],"returns":[{"desc":"Callback that removes the action","lua_type":"function"}],"function_type":"method","source":{"line":111,"path":"src/undostack/src/Shared/UndoStack.lua"}},{"name":"Remove","desc":"Removes the action specified from the stack entirely. If the action was queued to run,\\nit may still run.","params":[{"name":"undoStackEntry","desc":"","lua_type":"The undo stack entry to remove"}],"returns":[],"function_type":"method","source":{"line":135,"path":"src/undostack/src/Shared/UndoStack.lua"}},{"name":"PromiseUndo","desc":"Undoes from the stack. If a current action is going on, it will finish running.","params":[],"returns":[{"desc":"","lua_type":"Promise"}],"function_type":"method","source":{"line":157,"path":"src/undostack/src/Shared/UndoStack.lua"}},{"name":"PromiseRedo","desc":"Redoes the from the stack. If a current action is going on, it will be queued.","params":[],"returns":[{"desc":"","lua_type":"Promise"}],"function_type":"method","source":{"line":183,"path":"src/undostack/src/Shared/UndoStack.lua"}}],"properties":[],"types":[],"name":"UndoStack","desc":"","source":{"line":4,"path":"src/undostack/src/Shared/UndoStack.lua"}}')}}]);