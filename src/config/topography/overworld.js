var biomesToRemove = Java.to(
	[
		"minecraft:eroded_badlands",
		"byg:canyons",
		"byg:crag_gardens",
		"byg:shattered_glacier",
		"byg:dunes",
	],
	"java.lang.String[]"
);
var biomeTypesToRemove = Java.to(
	[
		BiomeDictionary.Type.WATER,
		BiomeDictionary.Type.BEACH,
		BiomeDictionary.Type.VOID,
		BiomeDictionary.Type.OCEAN,
	],
	"net.minecraftforge.common.BiomeDictionary$Type[]"
);
var biomes = BiomeHelper.withoutBiomes(
	BiomeHelper.withoutTypes(BiomeHelper.forOverworld(), biomeTypesToRemove),
	biomesToRemove
);

var AIR = BlockHelper.getState("minecraft:air");

function buildChunkGenerator(seed, biomeRegistry) {
	return new ChunkGeneratorBlobs(
		biomes,
		biomeRegistry,
		function () {
			return new DimensionSettings(
				new DimensionStructuresSettings(false),
				new NoiseSettings(
					256,
					new ScalingSettings(
						0.9999999814507745,
						0.9999999814507745,
						80.0,
						160.0
					),
					new SlideSettings(-10, 3, 0),
					new SlideSettings(-30, 0, 0),
					1,
					2,
					1.0,
					-0.46875,
					true,
					true,
					false,
					false
				),
				AIR,
				AIR,
				-10,
				0,
				63,
				false
			);
		},
		seed
	);
}
