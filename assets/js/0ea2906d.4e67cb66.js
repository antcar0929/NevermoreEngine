"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33655],{92533:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new Replicator which will do the syncing.","params":[{"name":"references","desc":"","lua_type":"ReplicatorReferences"}],"returns":[{"desc":"","lua_type":"Replicator"}],"function_type":"static","source":{"line":43,"path":"src/loader/src2/Replication/Replicator.lua"}},{"name":"ReplicateFrom","desc":"Replicates children from the given root","params":[{"name":"root","desc":"","lua_type":"Instance"}],"returns":[],"function_type":"method","source":{"line":78,"path":"src/loader/src2/Replication/Replicator.lua"}},{"name":"isReplicator","desc":"Returns true if the argument is a replicator","params":[{"name":"replicator","desc":"","lua_type":"any?"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":101,"path":"src/loader/src2/Replication/Replicator.lua"}},{"name":"GetReplicatedDescendantCountValue","desc":"Returns the replicated descendant count value.","params":[],"returns":[{"desc":"","lua_type":"IntValue"}],"function_type":"method","source":{"line":110,"path":"src/loader/src2/Replication/Replicator.lua"}},{"name":"SetReplicationType","desc":"Sets the replication type for this replicator","params":[{"name":"replicationType","desc":"","lua_type":"ReplicationType"}],"returns":[],"function_type":"method","source":{"line":119,"path":"src/loader/src2/Replication/Replicator.lua"}},{"name":"SetTarget","desc":"Sets the target for the replicator where the results will be parented.","params":[{"name":"target","desc":"","lua_type":"Instance?"}],"returns":[],"function_type":"method","source":{"line":130,"path":"src/loader/src2/Replication/Replicator.lua"}},{"name":"GetTarget","desc":"Gets the current target for the replicator.","params":[],"returns":[{"desc":"","lua_type":"Instance?"}],"function_type":"method","source":{"line":141,"path":"src/loader/src2/Replication/Replicator.lua"}},{"name":"GetHasReplicatedChildrenValue","desc":"Gets a value representing if there\'s any replicated children. Used to\\navoid leaking more server-side information than needed for the user.","params":[],"returns":[{"desc":"","lua_type":"BoolValue"}],"function_type":"method","source":{"line":151,"path":"src/loader/src2/Replication/Replicator.lua"}},{"name":"Destroy","desc":"Cleans up the replicator disconnecting all events and cleaning up\\ncreated instances.","params":[],"returns":[],"function_type":"method","source":{"line":544,"path":"src/loader/src2/Replication/Replicator.lua"}}],"properties":[],"types":[],"name":"Replicator","desc":"Monitors dependencies primarily for replication. Handles the following scenarios.\\n\\nThis system dynamically replicates whatever state exists in the tree except we\\nfilter out server-specific assets while any client-side assets are still replicated\\neven if deeper in the tree.\\n\\nBy separating out the replication component of the loader from the loading logic\\nwe can more easily support hot reloading and future loading scenarios.\\n\\nRepliation rules:\\n1. Replicate the whole tree, including any changes\\n2. Module scripts named Server are replaced with a folder\\n3. Module scripts that are in server mode won\'t replicate unless a client dependency is needed or found.\\n4. Once we hit a \\"Template\\" object we stop trying to be smart since Mesh parts are not API accessible.\\n5. References are preserved for ObjectValues.\\n\\nThis system is designed to minimize changes such that hot reloading can be easily\\nimplemented.\\n\\nRight now it fails to be performance friendly with module scripts under another\\nmodule script.","source":{"line":26,"path":"src/loader/src2/Replication/Replicator.lua"}}')}}]);