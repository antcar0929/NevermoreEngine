--[=[
	@class LipsumIconUtils
]=]

local require = require(script.Parent.loader).load(script)

local RandomUtils = require("RandomUtils")

local ICONS = {
	"rbxassetid://6022668885";
	"rbxassetid://6022668897";
	"rbxassetid://6022852108";
	"rbxassetid://6023426938";
	"rbxassetid://6023426974";
	"rbxassetid://6023565892";
	"rbxassetid://6026568215";
	"rbxassetid://6026568247";
	"rbxassetid://6026647902";
	"rbxassetid://6026660074";
	"rbxassetid://6026660078";
	"rbxassetid://6031075939";
	"rbxassetid://6031091006";
	"rbxassetid://6031154875";
	"rbxassetid://6031225809";
	"rbxassetid://6031225819";
	"rbxassetid://6031229347";
	"rbxassetid://6031302918";
	"rbxassetid://6031302921";
	"rbxassetid://6031302932";
	"rbxassetid://6031471489";
	"rbxassetid://6031488938";
	"rbxassetid://6031625146";
	"rbxassetid://6031754538";
	"rbxassetid://6031763426";
	"rbxassetid://6031771012";
	"rbxassetid://6034227061";
	"rbxassetid://6034227072";
	"rbxassetid://6034230640";
	"rbxassetid://6034230652";
	"rbxassetid://6034275726";
	"rbxassetid://6034275731";
	"rbxassetid://6034281948";
	"rbxassetid://6034295702";
	"rbxassetid://6034295710";
	"rbxassetid://6034304908";
	"rbxassetid://6034308946";
	"rbxassetid://6034323695";
	"rbxassetid://6034333271";
	"rbxassetid://6034407069";
	"rbxassetid://6034452645";
	"rbxassetid://6034461626";
	"rbxassetid://6034509984";
	"rbxassetid://6034509994";
	"rbxassetid://6034684949";
	"rbxassetid://6034684956";
	"rbxassetid://6034687951";
	"rbxassetid://6034767621";
	"rbxassetid://6034767623";
	"rbxassetid://6034837802";
	"rbxassetid://6034934025";
	"rbxassetid://6034941700";
	"rbxassetid://6034973076";
	"rbxassetid://6034973081";
	"rbxassetid://6034973084";
	"rbxassetid://6034983854";
	"rbxassetid://6035030077";
	"rbxassetid://6035030083";
	"rbxassetid://6035047382";
	"rbxassetid://6035053275";
	"rbxassetid://6035056477";
	"rbxassetid://6035056487";
	"rbxassetid://6035067844";
	"rbxassetid://6035078894";
	"rbxassetid://6035121939";
	"rbxassetid://6035173859";
	"rbxassetid://6035181858";
}

local OUTLINE_ICONS = {
	"rbxassetid://6022668962";
	"rbxassetid://6022860339";
	"rbxassetid://6023426910";
	"rbxassetid://6023426914";
	"rbxassetid://6023565882";
	"rbxassetid://6026568199";
	"rbxassetid://6026568254";
	"rbxassetid://6026663726";
	"rbxassetid://6026663771";
	"rbxassetid://6031302934";
	"rbxassetid://6031339048";
	"rbxassetid://6031625150";
	"rbxassetid://6031630208";
	"rbxassetid://6034230637";
	"rbxassetid://6034268008";
	"rbxassetid://6034281910";
	"rbxassetid://6034295706";
	"rbxassetid://6034308947";
	"rbxassetid://6034407078";
	"rbxassetid://6034457070";
	"rbxassetid://6035047409";
	"rbxassetid://6035053278";
	"rbxassetid://6035053285";
	"rbxassetid://6035190844";
}

local LipsumIconUtils = {}

--[=[
	Gets a random icon
	@param random Random
	@return string
]=]
function LipsumIconUtils.icon(random)
	return RandomUtils.choice(ICONS, random)
end

--[=[
	Gets a random outline icon
	@param random Random
	@return string
]=]
function LipsumIconUtils.outlineIcon(random)
	return RandomUtils.choice(OUTLINE_ICONS, random)
end

return LipsumIconUtils