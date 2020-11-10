function registerPresets() {
    Config.registerPreset("overworld", "Overworld", "", "Example Description")
    .registerDimension("overworld", "overworld")
    //Adds EventHandler for the BiomeLoadingEvent. This runs for every biome.
    .registerEventHandler("BiomeLoadingEvent", Java.extend(Consumer, {
        accept: function(event) {
            
            //Clears the ore which has already been registered
            OreHelper.clearOre(event);
 
            ////           
            ////
            //Vanilla Ore
            ////
            ////
            //Coal Ore
            OreHelper.addOre(event, function() {
                //block, clusterSize, minHeight, maxHeight, square
                return OreHelper.buildOreForOverworldStone(BlockHelper.getState("minecraft:coal_ore"), 20, 14, 64, 192, true);
            });          
            //Iron Ore
            OreHelper.addOre(event, function() {
                //block, clusterSize, minHeight, maxHeight, square
                return OreHelper.buildOreForOverworldStone(BlockHelper.getState("minecraft:iron_ore"), 20, 12, 64, 192, true);
            });                      
            //Gold Ore
            OreHelper.addOre(event, function() {
                //block, clusterSize, minHeight, maxHeight, square
                return OreHelper.buildOreForOverworldStone(BlockHelper.getState("minecraft:gold_ore"), 15, 5, 64, 120, true);
            });
            //Lapis Ore
            OreHelper.addOre(event, function() {
                //block, clusterSize, minHeight, maxHeight, square
                return OreHelper.buildOreForOverworldStone(BlockHelper.getState("minecraft:lapis_ore"), 20, 5, 64, 192, true);
            });
            //Diamond Ore
            OreHelper.addOre(event, function() {
                //block, clusterSize, minHeight, maxHeight, square
                return OreHelper.buildOreForOverworldStone(BlockHelper.getState("minecraft:diamond_ore"), 14, 2, 32, 100, true);
            });
            //Toilet Paper / Emerald Ore
            OreHelper.addOre(event, function() {
                //block, clusterSize, minHeight, maxHeight, square
                return OreHelper.buildOreForOverworldStone(BlockHelper.getState("minecraft:redstone_ore"), 14, 2, 32, 100, true);
            });
            //Redstone Ore
            OreHelper.addOre(event, function() {
                //block, clusterSize, minHeight, maxHeight, square
                return OreHelper.buildOreForOverworldStone(BlockHelper.getState("minecraft:emerald_ore"), 12, 2, 32, 160, true);
            });            
            ////
            ////
            //Thermal Ores
            ////
            ////
            //thermal:apatite_ore Ore
            OreHelper.addOre(event, function() {
                //block, clusterSize, minHeight, maxHeight, square
                return OreHelper.buildOreForOverworldStone(BlockHelper.getState("thermal:apatite_ore"), 22, 8, 32, 192, true);
            });
            //thermal:cinnabar_ore Ore
            OreHelper.addOre(event, function() {
                //block, clusterSize, minHeight, maxHeight, square
                return OreHelper.buildOreForOverworldStone(BlockHelper.getState("thermal:cinnabar_ore"), 18, 8, 32, 192, true);
            });
            //thermal:niter_ore Ore
            OreHelper.addOre(event, function() {
                //block, clusterSize, minHeight, maxHeight, square
                return OreHelper.buildOreForOverworldStone(BlockHelper.getState("thermal:niter_ore"), 15, 6, 20, 100, true);
            });
            //thermal:sulfur_ore Ore
            OreHelper.addOre(event, function() {
                //block, clusterSize, minHeight, maxHeight, square
                return OreHelper.buildOreForOverworldStone(BlockHelper.getState("thermal:sulfur_ore"), 15, 6, 20, 100, true);
            });
            //thermal:copper_ore Ore
            OreHelper.addOre(event, function() {
                //block, clusterSize, minHeight, maxHeight, square
                return OreHelper.buildOreForOverworldStone(BlockHelper.getState("thermal:copper_ore"), 22, 10, 100, 192, true);
            });
            //thermal:tin_ore Ore
            OreHelper.addOre(event, function() {
                //block, clusterSize, minHeight, maxHeight, square
                return OreHelper.buildOreForOverworldStone(BlockHelper.getState("thermal:tin_ore"), 16, 9, 70, 120, true);
            });
            //thermal:lead_ore Ore
            OreHelper.addOre(event, function() {
                //block, clusterSize, minHeight, maxHeight, square
                return OreHelper.buildOreForOverworldStone(BlockHelper.getState("thermal:lead_ore"), 14, 8, 30, 90, true);
            });
            //thermal:silver_ore Ore
            OreHelper.addOre(event, function() {
                //block, clusterSize, minHeight, maxHeight, square
                return OreHelper.buildOreForOverworldStone(BlockHelper.getState("thermal:silver_ore"), 14, 5, 50, 90, true);
            });
            //thermal:nickel_ore Ore
            OreHelper.addOre(event, function() {
                //block, clusterSize, minHeight, maxHeight, square
                return OreHelper.buildOreForOverworldStone(BlockHelper.getState("thermal:nickel_ore"), 20, 10, 64, 192, true);
            });
        }
    }).class);
}




