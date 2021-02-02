
registerPreset("overworld", "Enter 2020", "background2", "Time to go!")
.registerDimension("overworld", "overworld")
//Adds EventHandler for the BiomeLoadingEvent. This runs for every biome.
.registerEventHandler("BiomeLoadingEvent", Java.extend(Consumer, {
    accept: function(event) {
        
        //Clears the ore which has already been registered
        OreHelper.clearOre(event);

        //event, structure resource location
        //FeatureHelper.removeStructure(event, "buried_treasure");
        //FeatureHelper.removeStructure(event, "desert_pyramid");
        //FeatureHelper.removeStructure(event, "endcity");
        //FeatureHelper.removeStructure(event, "fortress");
        //FeatureHelper.removeStructure(event, "fossil");
        //FeatureHelper.removeStructure(event, "igloo");
        //FeatureHelper.removeStructure(event, "jungle_pyramid");
        //FeatureHelper.removeStructure(event, "mansion");
        FeatureHelper.removeStructure(event, "mineshaft");
        FeatureHelper.removeStructure(event, "monument");
        //FeatureHelper.removeStructure(event, "nether_fossil");
        FeatureHelper.removeStructure(event, "ocean_ruin");
        //FeatureHelper.removeStructure(event, "pillager_outpost");
        //FeatureHelper.removeStructure(event, "ruined_portal");
        //FeatureHelper.removeStructure(event, "shipwreck");
        //FeatureHelper.removeStructure(event, "stronghold");
        //FeatureHelper.removeStructure(event, "swamp_hut");
        FeatureHelper.removeStructure(event, "underwater_ruin");
        //FeatureHelper.removeStructure(event, "village");
        //FeatureHelper.removeStructure(event, "woodland_mansion");
        FeatureHelper.removeFeature(event, "void_start_platform");



        ////           
        ////
        //Vanilla Ore
        ////
        ////
        //Coal Ore
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("minecraft:coal_ore"), OreHelper.BASE_STONE_OVERWORLD, 20, 14, 64, 192, true, 2);
        });          
        //Iron Ore
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("minecraft:iron_ore"), OreHelper.BASE_STONE_OVERWORLD, 20, 12, 64, 192, true, 2);
        });                      
        //Gold Ore
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("minecraft:gold_ore"), OreHelper.BASE_STONE_OVERWORLD, 15, 5, 64, 120, true, 4);
        });
        //Lapis Ore
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("minecraft:lapis_ore"), OreHelper.BASE_STONE_OVERWORLD, 20, 5, 64, 192, true, 4);
        });
        //Diamond Ore
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("minecraft:diamond_ore"), OreHelper.BASE_STONE_OVERWORLD, 14, 3, 32, 120, true, 4);
        });
        //Redstone Ore
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("minecraft:redstone_ore"), OreHelper.BASE_STONE_OVERWORLD, 14, 6, 32, 160, true, 3);
        });
        //Toilet Paper / Emerald Ore
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("minecraft:emerald_ore"), OreHelper.BASE_STONE_OVERWORLD, 12, 3, 32, 130, true, 4);
        });            
        ////
        ////
        //Thermal Ores
        ////
        ////
        //thermal:apatite_ore Ore
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:apatite_ore"), OreHelper.BASE_STONE_OVERWORLD, 22, 8, 32, 192, true, 4);
        });
        //thermal:cinnabar_ore Ore
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:cinnabar_ore"), OreHelper.BASE_STONE_OVERWORLD, 18, 8, 32, 192, true, 4);
        });
        //thermal:niter_ore Ore
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:niter_ore"), OreHelper.BASE_STONE_OVERWORLD, 15, 8, 20, 120, true, 4);
        });
        //thermal:sulfur_ore Ore
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:sulfur_ore"), OreHelper.BASE_STONE_OVERWORLD, 15, 8, 20, 120, true, 4);
        });
        //thermal:copper_ore Ore
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:copper_ore"), OreHelper.BASE_STONE_OVERWORLD, 22, 10, 120, 192, true, 2);
        });
        //thermal:tin_ore Ore
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:tin_ore"), OreHelper.BASE_STONE_OVERWORLD, 16, 9, 70, 130, true, 2);
        });
        //thermal:lead_ore Ore
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:lead_ore"), OreHelper.BASE_STONE_OVERWORLD, 14, 8, 30, 120, true, 3);
        });
        //thermal:silver_ore Ore
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:silver_ore"), OreHelper.BASE_STONE_OVERWORLD, 14, 5, 50, 120, true, 4);
        });
        //thermal:nickel_ore Ore
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("thermal:nickel_ore"), OreHelper.BASE_STONE_OVERWORLD, 20, 10, 64, 192, true, 3);
        });


        //Dire's Goo
        OreHelper.addOre(event, function() {
            //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
            return OreHelper.buildVerticalOre(BlockHelper.getState("diregoo:gooblockterrain"), OreHelper.BASE_STONE_OVERWORLD, 2, 2, 10, 192, true, 14);
        });

        //block, ruleTest, clusterSize, clusterCount, minHeight, maxHeight, square, chance
        //return OreHelper.buildOre(BlockHelper.getState("minecraft:granite"), OreHelper.BASE_STONE_OVERWORLD, 42, 50, 10, 192, true, 0);

        //Stoneses 
        //granite
        OreHelper.addOre(event, function() {
            //block, clusterSize, clusterCount, minHeight, maxHeight, square
            return OreHelper.buildOre(BlockHelper.getState("minecraft:granite"), OreHelper.BASE_STONE_OVERWORLD, 16, 22, 10, 192, true, 0);
        }); 
        //diorite           
        OreHelper.addOre(event, function() {
            //block, clusterSize, clusterCount, minHeight, maxHeight, square
            return OreHelper.buildOre(BlockHelper.getState("minecraft:andesite"), OreHelper.BASE_STONE_OVERWORLD, 16, 22, 10, 192, true, 0);
        });
        //andesite
        OreHelper.addOre(event, function() {
            //block, clusterSize, clusterCount, minHeight, maxHeight, square
            return OreHelper.buildOre(BlockHelper.getState("minecraft:diorite"), OreHelper.BASE_STONE_OVERWORLD, 16, 22, 10, 192, true, 0);
        });
        //Gravel
        OreHelper.addOre(event, function() {
            //block, clusterSize, clusterCount, minHeight, maxHeight, square
            return OreHelper.buildOre(BlockHelper.getState("minecraft:gravel"), OreHelper.BASE_STONE_OVERWORLD, 22, 24, 10, 192, true, 0);
        });
        //clay
        OreHelper.addOre(event, function() {
            //block, clusterSize, clusterCount, minHeight, maxHeight, square
            return OreHelper.buildOre(BlockHelper.getState("minecraft:clay"), OreHelper.BASE_STONE_OVERWORLD, 16, 30, 10, 192, true, 0);
        });   

        if (BiomeHelper.test(event.getName(), BiomeDictionary.Type.OVERWORLD) && event.getName() != null && event.getName().func_110624_b().equals("minecraft")) {
          var BlockStateFeatureConfig = Java.type("net.minecraft.world.gen.feature.BlockStateFeatureConfig");
          var ChanceConfig = Java.type("net.minecraft.world.gen.placement.ChanceConfig");
        
          FeatureHelper.addFeature(event, GenerationStage.Decoration.LAKES, function() {
            var feature = FeatureHelper.buildConfiguredFeature("minecraft:lake", new BlockStateFeatureConfig(BlockHelper.getState("minecraft:water")));
            feature = FeatureHelper.placement(feature, "water_lake", new ChanceConfig(1));
            feature = FeatureHelper.count(feature, 10, 10);
            return feature;
          });
        }

    }
}).class);