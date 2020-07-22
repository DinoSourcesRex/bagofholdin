// tslint:disable-next-line:max-line-length
import { Plant } from './models';

export class PlantsData {
  static get plants(): Plant[] {
    return [
      {
        name: 'Aadarna',
        description:
          "A tough plant that grows on the edges of swamps, the stem grows symmetrical pairs of stiff oval leaves. During warmer months the plant blossoms into violet flowers. The large roots of the plant can be ground into a powder and is the main ingredient in a potion that allows other people to see into other realms, often referred to as Sight Beyond. For the next hour after drinking, the vision of the character shifts to the Astral Realm. They may perceive what happens from a posi'tion that corresponds to their location in the Material Realm. During that time, they are blind to everything that happens in the Material Realm, including combat.",
        locations: [
          {
            location: 'Swamps',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Abyssal Blackgrass',
        description:
          'Thick black weed native to the Underdark that propagates via tiny seeds. On the surface it appears as 1-foot diameter clumps, but its roots extend in a 50 ft diameter just beneath the surface. Natural healing is prevented when standing above its roots, and magical healing only heals half the normal HP. If the clump is pulled out, the plant survives and regrows the clump in 1d4 days. Only digging up the whole root system or the use of a Blight-type spell can truly kill it. Has taint-mechanic boosting effects.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Adamant Algae',
        description:
          'Rare algae that grows in water gathered around adamantine. Produces dark red liquid that doubles natural healing rate for 24 hours (requires 1 ounce per 100 lb of body weight). Typical pool contains 32 ounces of the liquid, which becomes useless 30 minutes after removal from the pool unless stored in an adamantine vial (200 gp), which makes it last for 1 month.',
        locations: [
          {
            location: 'Oceans',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: "Adder's Tongue",
        description:
          "The herb has one leaf which grows from a stalk about three inches from the ground. It's appearance gives it its name. The leaf must be boiled in olive oil and set in the sun for three days. At the end of that time the infusion can be used as a balm for wounds. In the event that the wound is infected the balm will draw out the infection within one day. However for that one day the damage caused by the infection will be twice as severe. If the wound is not infected the balm will increase the rate of healing by 1 hp for that day.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Adgana',
        description:
          "The leaves of this plant must be dried. They may then be crushed and eaten. It's effects diminish with constant use. The first time and second time Adgana is used it adds 2 to the user's Strength, Dexterity and Constitution for 2d4+4 minutes. The third time it is used it adds 1 to Strength and Dexterity for the same amount of time, the 4th time +1 is added to Strength only, and after that no benefit is ever gained. In addition to this, the herb is also highly addictive.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Agrimony',
        description:
          'Agrimony reaches a height of 1 to 2 feet. It has leaves up to seven inches long, which are serrated, green on top and white underneath. It has yellow flowers with five petals which are arranged in a spike on top of the stem. A successful application will cure sprains and bruises in half the normal time. Agrimony was also believed to produce very heavy sleep if placed beneath a persons head, so deep that the person could not be woken until it was removed.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Air Plant',
        description:
          'A sponge-like pond-surface plant that produces and stores air. A fist-sized piece can be held in the mouth to provide a medium creature with 5 minutes of air before dying.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Aldaka',
        description:
          'The roots of this low ground-cover plant must be brewed over a low fire for one week, and the resulting distillation drunk. If used successfully, sight will be restored to the recipient provided the eye remains.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Alether',
        description:
          'Eating a handful of these orange berries will add +1 to both a characters chance to hit, and to their damage rolls for 2d6 minutes. The berries can be brewed in white wine to produce a drink that will add +2 to the recipients chance to hit, and temporarily give them 2d4 hp. This effect lasts for 2d12 minutes, and ends with the characters total collapse for 1d3 days unless they successfully save against poison (DC 15 Cons.). This brew will only be useful for one month after manufacture and then loses its potency.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Common',
          },
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Alfengrape',
        description:
          'A glowing grape-vine magically created by elves that produces grapes all year around that all count as a meal for a day and can be made into very potent wine. Mature plants sells for 100 gp and can live up to 700 years.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Alil',
        description:
          "A succulent desert plant that sprouts small pink flowers with a center filled with large black seeds. Alil can be chewed or smoked, and induces a brief cataleptic trance wherein strange visions may be experienced. In addition to these recreational effects, alil has a tendency to awaken latent psionic ability, which leads to it having a certain degree of popularity among adventurers. Any player character experiencing the alil trance must make an Intelligence check on 1d20. A roll of under or equal to the character's Intelligence indicates that the drug has activated a previously unknown part of the character's mind, and he gains a random psionic ability until the next long rest.",
        rolls: [
          'Roll 1d10:',
          '1. Temporary intelligence bonus of 1.',
          '2. Precision Mind: you become skilled at reading your foes. With this capability, you can call upon your gift to strike with increased accuracy. You add your Intelligence modifier (minimum 1) to an attack roll, after the roll, but before the announcement of the result. You can use this feature a number of times equal to your Intelligence modifier (minimum of 1).',
          '3. Immunity to psychic damage.',
          '4. You cannot be charmed or frightened for the duration.',
          '5. You may take two actions during each of your turns for the duration.',
          '6. You may add 1d6 psychic damage to any attack you make of 5 or less damage.',
          '7. You project a field of improbability around yourself, creating a fleeting protective shell, gaining  +4 temporary bonus to AC.',
          '8. You may, as a bonus action once per combat, instantly deliver a massive assault on the thought pathways of any one creature, dealing 1d10 points of damage to it.',
          '9. You heal another creature’s wounds, transferring some of its damage to yourself. When you manifest this power, you can heal as much as 2d10 points of damage to an ally by taking half of this damage to yourself.',
          '10. You may gain proficiency in one extra skill until the long rest or proficiency with one tool or instrument permanently.',
        ],
        locations: [
          {
            location: 'Deserts',
            rarity: 'Very Rare',
          },
        ],
        uses: ['alchemy'],
      },
      {
        name: 'Alkanet',
        description:
          'This plant has a thick red root, narrow hairy leaves, and small red or blue flowers. The root can be eaten directly upon being drawn out of the ground but will only keep for a week or so. The herb allows a +1 bonus to any saving throw vs ingested poisons for 1d8 hours after eating.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'All-Heale',
        description:
          'When all-heale is mixed in a pint of olive oil and applied to a wound, (one application per day), the recipient will heal even if still working as normal. With rest, the recipient will heal at three times the normal rate.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Allathorne',
        description:
          'Growing in the cold north, this scraggly and thorny bush endures extreme hardships, and only blossoms for a few short weeks during the year. The sparse leaves of the plant are large and waxy, and point upward toward the sun. While some of the bush remains above ground, the majority of the plant is an extensive root system that spreads far and deep beneath the earth. Brewing the dried berries into a strong and bitter tea creates a drink that staves off the cold, and is a much sought-after drink in Neverwinter. Brewing the dried berries of the Allathorne bush into a strong and bitter tea creates a drink that staves off the cold. Those that drink the tea are granted a +1 bonus on saving throws against the cold, or cold based damage, for the next hour.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Alligator Teeth',
        description:
          "A rough bush that primarily inhabits rocky regions, and grows to about the height of a man and similar in diameter. The stalk of the plant is covered in sharp white thorns, providing the plant's namesake. Villagers often cultivate rows of the plant as a measure of safety. Spiders also seem overly attracted to the bush. It is rare to see such a bush without the glimmer of webbing in between the thorny branches.",
        locations: [
          {
            location: 'Mountains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Aloe',
        description:
          'The leaf of Aloe applied to a wound, will double the natural healing rate of burns and minor cuts.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Very Common',
          },
          {
            location: 'Cities',
            rarity: 'Very Common',
          },
          {
            location: 'Coastal',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Amanita',
        description:
          'This small, red and white mushroom can be cut finely and mashed and then added into any poisons to render the poison incapable of actual killing, instead only incapacitating the target when 0 hit points are reached.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Amrans',
        description:
          'The lilac flowers can be prepared into a potion that rapidly cures wounds 3d6 if properly prepared, 1d4 if poorly.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Angakara Tree',
        description:
          'A broad oak that sprouts many branches and is often covered by a multitude of light green leaves. In previous ages, the tree was favored for the construction of bows. However, due to increasing rarity, the nation has sought other sources of wood. The tree once thrived in the area now occupied by the Dragonwall. However, many of the trees were felled during the construction of the Great Wall, and have never grown back. Those few trees that lay on the side of the Horse Plains have withered and perished, leaving behind ancient reminders of what once was.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: "Angel's Cactus",
        description:
          "This barrel shaped cactus sprouts a pair of symmetrical branches that are broad and flattened, giving an appearance much like 'wings'. The cactus is covered by tapered yellow thorns, often giving the cactus an appearance of having a golden aura. In the cooler months, the cactus sprouts clusters of small white flowers. Tapping the water contained within the cactus and distilling it over a period of months creates an interesting tasting wine. Those drinking it say that it tastes fruity, but with a touch of something they can't quite place. This wine is often called 'Angel Wine', and is sold by Shaarmid merchants throughout Faerun.",
        locations: [
          {
            location: 'Deserts',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: "Angel's Stammerwort",
        description:
          "A small, woody-stemmed plant with no leaves, but a single stalk. This stalk is commonly stripped away to get at the Stammerwort's inner meat, which can be chewed for several hours, tastes like sweetmint, and cures headaches.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Angelica',
        description:
          "Angelica's root should be boiled in water for an hour and then drunk in order to relieve coughs. The plant can grow to a height of eight feet. It has a hollow stem and has large, broad pointed leaves at the base of the stem. It has a cluster of white or pink flowers at the top of the stem. The herbs does not in any way act as a cure for any disease causing a cough, it merely reduces the amount of coughing.",
        locations: [
          {
            location: 'Mountains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Anise',
        description:
          'Anise grows to height of about two feet, and is distinguished by its unusual leaf formation. At its base, the leaves are heart shaped and toothed, but as we progress up the stalk they are small and feathery. It has delicate white flowers which ripen in summer to produce small ridged seeds. These seeds should be crushed and left to stew for ten minutes in boiling water. The resultant mixture should then be strained and drunk as desired. A successful application will relieve hiccups.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Anserke',
        description:
          'The root must be applied to a bleeding wound. Within three rounds it will have stopped the bleeding. The recipient must not move for one turn or risk the wound reopening.',
        locations: [
          {
            location: 'Coastal',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Arcasa',
        description:
          "A drown-leaved dwarf tree that produces waxy white-beige nuts about the size of a bear's eye. These nuts will restore 1d4hp when eaten, and 2d8 nuts can be harvested from a single plant.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Archangelica',
        description:
          'This white flowering plant has black seeds and roots with a sharp taste. The root, when brewed, makes a hot, peppery decoction that helps alleviate common colds, flu and congestions (doubles recovery time, adds +2 to Constitution rolls to prevent colds in bad weather).',
        locations: [
          {
            location: 'Coastal',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Arctic Creeper',
        description:
          'A low, grey-stemmed creeping plant that grows around rocks in high, cold climates. These leaves can be dried and ground, and added as an ingredient to many common poisons to change the poison damage to cold or necrotic damage.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Common',
          },
          {
            location: 'Mountains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Ardulan',
        description:
          "An 8-inch tall, pale-grey flower that grows on a single, hard, woody stem. The flower's 8 petals can be harvested and placed into a solution of salt water and honey to create a potion that heals for 10 hit points.",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Uncommon',
          },
          {
            location: 'Mountains',
            rarity: 'Uncommon',
          },
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Arfandas',
        description:
          'If the stem of Arfandas is bound up in the dressing of a fracture, it will double the rate of healing for that fracture.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Arkas Grass',
        description:
          'Type of Grass used as Horsefeed, fillies raised on Arkas Grass grow up to have a 70 ft landspeed and +2 Dex & Con, grant a +2 on Handle Animal against them and can be trained in half the normal time. Used as feed for other pets and familiars, grants 5 temporary hit points until the next long rest.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Arkasu',
        description:
          'When the sap of the Arkasu plant is applied to wounds, it doubles the rate of healing. The effect is not cumulative.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Arlan',
        description:
          'The leaf of Arlan when applied to a wound will heal 1 hp of damage if it is used within 5 rounds. Arlan will also grant advantage on constitution saves against respiratory poisons.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Arnica',
        description:
          'This plant grows to a height of 1 to 2 feet. It has a hairy stem on which its leaves are arranged in pairs. It has orange flowers. These flowers should be plucked and dried, and then boiled in a litre of beer. This should be applied to a compress which is wrapped around a bruise. A successful application will cause the bruise to fade within one day. The pollen of the flowers if inhaled will cause uncontrollable sneezing. A phial of arnica carried in a persons pocket is also reputed to help a person quit smoking.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Arnuminas',
        description:
          'The leaf of this plant should be applied to the site of ligament, cartilage, or muscle damage. If used successfully, it will double the speed of healing of such damage.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Arpusar',
        description:
          'The stalks of this plant must be brewed for one week in fresh water at the end of which time it may be drunk. If it is successful, it will heal any damage to a persons muscles that are capable of healing naturally within one day.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Arrowroot',
        description:
          'An unusual, woody-stemmed plant dappled brown and white. The roots are very shallow in soil and extend upwards at straight angles to form a teepee like structure at the base of the plant. The stem can be dried and ground and then mixed with oil to create a frothy polishing oil that can add a +1 to weapons damage without the use of magic of craftwork.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Asarabacca',
        description:
          'Asarabacca is a creeping vine with many small leaves each on their own small stalk. It also has small purple flowers. These flowers must be brewed up on a fire and left to stand. When administered successfully to someone, they must save vs poison or be rendered docile, and incapable of violence for 3d8 hours. The brew has a distinctive purple colour, and bitter taste, so to be given secretly in food, the food must be able to hide these attributes.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Ash',
        description:
          'The bark of the ash tree must be stripped from its branches and boiled in clear water for one day. It should then be drunk as a cure for fevers, especially those caused by diseases such as malaria. It does not cure the cause of the fever but merely brings it under control within 2d6 hours. The ash tree is sacred to worshipers of Thor, who use its wood to make spears. The wood of the ash tree could possibly be used as an essential item in the manufacture of magical spears. Ash leaves should be boiled in water and drunk as a cure for poison. The ash tree has ash grey bark, and black buds. Its flowers have no petals. Ash trees are also by tradition used to make stakes for the purposes of killing vampires. This belief stems from Roman times, when Pliny the Elder wrote that all evil things feared Ashwood.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Ash Willow',
        description:
          'Dark red tree that can grow to 120 ft tall. It thrives of heat, often growing from pools of lava. They continuously rain ash around them, producing 1 lb per day per 10 ft of its height. It extends runner roots that spawn 1d3 new tree each month. They create areas of large trees with naturally burning leaves.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Ashline',
        description:
          'Ashline is a small red flower, with very pale green leaves. The entire plant must be mashed and boiled in fine red wine for one week and the resultant mixture mixed with olive oil. When this liquid is poured over a petrified person it will, on a successful roll, restore them to their normal state.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Ashvein',
        description:
          'Standing between 6 and 8 feet high, with glossy leaves and twisting, contorted branches, the Ashvein Tree is most notable for its thin papery bark. New growth on an Ashvein begins as a light blue-grey that slowly darkens into a rich charcoal, giving the trees a distinctive pattern. After the bark reaches a certain age it begins to crack and peel away from the trunk. If the dark grey bark is boiled in water for three hours, then dried and crushed, it creates a powder that completely neutralizes the flavor and odor of anything blended with the bark as it is crushed. Wood from the Ashvein is exceptionally light weight and releases large amounts of acrid smoke when burned.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Astir',
        description:
          'A medium-size white flower with 7 petals atop a thin, green, but slightly woody stem. When fed to horses, allows them to run at +15 movement speed for 48 hours straight. After that the horse must rest for double the amount of time. If not rested, make a DC 15 Constitution Save every hour to see if the horse dies of exhaustion.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Athas',
        description:
          'A simple, woody-stemmed plant that can be ground with mortar and pestle to yield a pale-yellow dust. This dust, when applied to the proper material, will fully corrode non-magical metal in 1d4-1 days.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Athelas (Kingsfoil)',
        description:
          'It appears as a vine with dark green leaves divided into four parts. According to legend, the leaves of Athelas when crushed by the hands of a King over the afflicted person are capable of curing anything, including death.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Legendary',
          },
          {
            location: 'Swamps',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Atigax',
        description:
          'The roots of this plant must be brewed over a low fire for one day, and the resulting distillation drunk. If used successfully, sight will be protected from glare or blinding light for a period of nine hours. This herb can thus be used to limit the ill effects suffered by subterranean creatures (such as drow) in full sunlight.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Atramen',
        description:
          'A flat, disk-shaped fruit that grows in the shoals of most major waterways. It can be cold-pressed into an oil that, when thrown as a splash weapon or used as a poison to coat weapons, imposes a -4 penalty on Constitution saves for 1 minute.',
        locations: [
          {
            location: 'Coastal',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Attanar',
        description:
          'Attanar is a moss, which when applied to the forehead of a stricken person, will cure fevers. It takes effect 2d6 hours after it is successfully administered.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Avataer',
        description:
          'A faded-red bloom that sprouts from mosses fed by snowmelt throughout the year. The flowers can be eaten whole by any good-aligned character to receive a +3 bonus to attack rolls against fiends and aberrations and advantage on Wisdom saves against fear for 2d8 hours. A non-good-aligned character that consumes the flower instead takes a -1 penalty to attack rolls against fiends and aberrations and disadvantage on Wisdom saves against fear.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Azure Leaves',
        description:
          "These tenacious vines grow in the darkest parts of deep forests, winding and wrapping their way around tree trunks and branches. While the vines are a deep shade of green, the leaves are an odd shade of blue. Drying the leaves and then smoking them provides the smoker a sense of euphoria and calmness that lasts for 1d4+4 minutes. However, smoking the leaves is often addict'ing, and requires a DC 10 Wisdom saving throw each t'ime to avoid becoming addicted to the feeling of euphoria that the leaves bring.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Balm',
        description:
          "Balm is a plant about 2 to 3 feet tall with squarish stems. It has oval, serrated leaves. It has small flowers which can be any shade from white to blue, which form small clusters at the base of the leaves. It reputedly has properties of bestowing longevity and uses as a aphrodisiac, and so could be used as an ingredient in 'Potions of Longevity' as well as love potions.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: "Balon's Plant",
        description:
          "Growing close to the ground in areas with minimal water, the plant only sprouts a trio of wide leaves which spread outward to absorb as much moisture as possible. Below the sand the root system delves deep to find hidden reservoirs of water that are not evident on the surface. Also known as 'bread of the desert', this plant develops large spherical fruits nearly the size of a man's head. These fruits have a tough and leathery exterior, but when cut open, the fruit has the consistency of fluffy bread or cake. The seeds of the fruit are quite small. Each fruit contains enough nutrients to sustain four people for a day. Unfortunately, farming the plant seems to be near impossible. The seeds must be within a medium-size creature when it dies, at which point the release of certain gasses causes the seeds to mature and greedily absorb as much moisture and nutrients from the corpse as possible. This rich bounty allows the plant to develop a strong root system.",
        locations: [
          {
            location: 'Deserts',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Barberry',
        description:
          'The Barberry plant has sharp thorns on its twigs. It can obtain a height in excess of eight feet. It has roughly oval shaped leaves, which are smooth with toothed edges. It has pale yellow flowers which produce oval red berries, with a small black dot at their tip. Barberries should be ground up in cold water and be left to stand in cold water, and then boiled quickly. This mixture should be drunk as a cure for liver disorders such as jaundice. If successfully administered the cure should take effect within two weeks. However three failed applications mean that there is never any hope of cure by this method.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Barisc',
        description:
          'An extremely prickly bulb plant that, even when ground into a fine paste, retains some of its thorny nature. When this thorny paste is applied to any weapon it will add 4 damage to the next attack.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
          {
            location: 'Mountains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Barrelstalk',
        description:
          'Large cask-shaped fungus that grows to 5 x 8 ft. Outside is hard as woody, inner flesh is edible, center contains 20 to 50 gallons of water. After 10 years of growth, it begins spore production and the flesh grows black and poisonous.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Uncommon',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Base Mullein',
        description:
          'Base Mullein is very easily found due to the fact that its flower stalks often obtain a height of 8 feet or more. Its clear yellow flowers cover about 3 feet of the top of the stalk, and form a long funnel about an inch or two in diameter. If the leaves of this herb are applied to a burn within one hour, it will reduce the damage taken from the burn, by half.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Basil',
        description:
          'Basil leaves should be applied to the bite of a venomous creature, and it will then have the effect of drawing out the poison. It will give a bonus of +4 to the saving throw vs poison, or if the save has already been made and failed, it will allow a second saving throw at normal values. Any damage already sustained will remain. The herb has one upright stalk, and small white flowers.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
          {
            location: 'Cities',
            rarity: 'Very Common',
          },
          {
            location: 'Mountains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Basilisk Breath',
        description:
          'A smallish, evergreen bush resembling a small holly, but grows pale grey berries instead of the typical bright red holly berries. These berries can be juiced and applied to a weapon to create a strong paralytic poison. Target must make a DC (5 + Nature skill of the person who prepared the poison) Cons. Save at the end of each turn for 4 turns. For these 4 turns, the target is slowed as if by the spell Slow. On a failed save, the target is paralyzed for 4 rounds. Application on weapon only lasts for one successful hit.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Rare',
          },
          {
            location: 'Mountains',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Bastit',
        description:
          'A small succulent that, when crushed, tends to repel parasitic insects, including mosquitoes and the like (-2 to Rolls for Initiative for Insectoids). It has a pungent but not unpleasant odour. (Lasts 1d6 hours but can be washed or sweated off. Easily noticed by tracking animals.)',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Belan',
        description:
          'The small brown nuts, produced from a desert scrub bush can be eaten to stop bleeding (including internal bleeding). Within two hours it will have stopped the bleeding. The recipient must not move for one additional hour or risk the bleeding restarting.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Belramba',
        description:
          'Belramba is a lichen. It must be brewed in water, and then drunk three days later. If used successfully, all nerve damage capable of healing naturally will be healed, at three times the normal rate.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Bija Tree',
        description:
          "A leafy evergreen tree, the trunks grow about as round as a man can reach, and their boughs are often fashioned into brooms by the common people. The seeds hold another use, and is often ground into a fine powder called Green Sleeping Dust. The dust is primarily used by ninja in service to the Soretyo family of Foo Nakar and as a drug in higher society. When this powder is inhaled, it forces a target to make a DC 19 Const'itut'ion saving throw or fall unconscious for 2d6 minutes.",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Rare',
          },
          {
            location: 'Forests',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Bilberry',
        description:
          'Bilberries are small black berries. They must be mixed with pure alcohol and left to stand for fifteen days, at the end of which time they must be drunk. A successful application will give a human the truesight ability for 2d6 days, but a failed application may lead to the death of the person who drinks it, as if they had drunk a potent poison (DC 17 Cons. Save, or take -25 hit points over 1d4 minutes).',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Birthnot',
        description:
          'Birthnot is a dark-leaved, flowerless vine. The dried leaves can be used to create a contraceptive tea effective on most humans, demihumans and humanoids, male or female. Must be ingested between 1 hour - 30 minutes before properties invoked. (70% effective; causes mild impotence in males 15% of the time.)',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Common',
          },
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: "Bishop's Weed",
        description:
          "Bishop's weed is a small plant with pale blue flowers, and small pale green leaves. This herb will protect people from plague (+5 to Constitution Saves against disease). It is drunk in wine, and is effective for one week. In plague years, its price increases rapidly.",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Uncommon',
          },
          {
            location: 'Mountains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Bison-Gourd',
        description:
          "A vine that grows along the ground, the plant has irregular shaped leaves, and during warmer months the plant produces large yellow flowers shaped like trumpets. The flowers later turn into yellow and orange fruit with a slightly salty taste. The plant's seeds could be harvested to extract the oil that works well as an insect repellant. The odor from the oil is almost imperceptible to people, but is effective at repelling bothersome insects. (-5 to Rolls for Initiative for Insectoids)",
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Bittergar Bush',
        description:
          'A small thistle-like shrub that grows in most low-lying areas in Faerun, the leaves are the source of the herb called drace. While raw drace is horribly bitter, once cooked it provides a delightful seasoning which enhances the other flavors of other food.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Bittermourn',
        description:
          'A rare, colorless lichen that grows on rocks beneath year-round ice. When crushed and strained, it creates a clear gel at freezing temperatures that melts into liquid when warmer. Imbibing a pint slows the aging process and grants a lifespan of twice normal length. If imbibed by someone during near-death or immediately after death, will place the person into a deep magical coma or reduce the cost of a resurrection spell.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Blackberry',
        description:
          'The leaves of these small black berries should be crushed and applied to small wounds, where they can stop minor bleeding very quickly (within one round).',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
          {
            location: 'Mountains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Blackcorn',
        description:
          "Resembling actual corn, but in far miniature, the plants generally grow on the edges of swamps and other humid areas. Unlike corn, it is overly difficult to cultivate and farm, which attributes to the rarity of the plant. Upon ripening, small ears of violet and coal colored corn stand upon the tips of the plant stalks. Eating the kernels provides a bitter taste to those willing to try it. However, the vegetable is prized not for eating, but for making a sweet alcohol called Blackcorn Whiskey that has a strong flavor of plums. Due to the heavy alcohol content, it is often mixed with fruit juices. A more potent version of the brew is often dist'illed by dwarves, however, such a process takes considerably longer, and is worth 30 gold per bottle.",
        locations: [
          {
            location: 'Swamps',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Blackroot',
        description:
          "A thin vine that has small dark leaves, the vine predominantly grows underground near lakes and pools. The vine generally grows in places where a small bit of light occurs, sometimes thriving off of the glow provided by phosphorescent moss. Blackroot's roots can be applied to fresh wounds in order to promote quick healing (applied immediately, gives 1d4 back to character at once) while the leaves can be crushed into the powder known as blackroot poison. Those injured by a blade coated in the poison must succeed at a DC 13 Const'itut'ion saving throw or suffer 16 (4d6) poison damage and be poisoned for 1 hour. Addit'ionally, if the target fails the saving throw by 5 or more, they are Paralyzed for 1d6 minutes.",
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Black Rose',
        description:
          "This rare rose is easily identified by its black, velvety flower and long white thorns. The thorns are hollow and absorb liquids at a rate of a pint every 5 minutes. The liquid is stored in the plant's fibrous roots. The black rose's roots are often used to draw poison from wounds or, placed under the tongue, to absorb alcohol and prevent intoxication. Sometimes victims are tied down and pierced with the thorns to cause prolonged and painful exsanguination.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Mountains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Bloodgrass',
        description:
          "A wide-bladed grass that grows in small bunches with a red-tinted central vein running the length of the blade. Bloodgrass can be ground into a green and red paste that can be added and mixed into most potions and drinks to become adequate food equivalent to a day's rations. Cannot be altered by other ingredients.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Bloodkeep',
        description:
          "Tall stalks with jagged leaves and purple-red flowers, bloodkeep's fresh leaves can be bound to a wound to stop bleeding at once and quicken coagulation (apply within 2 rounds of injury to stop bleeding; character regains 20% - rounded down - of lost hit points at once).",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Common',
          },
          {
            location: 'Mountains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Bloodpurge',
        description:
          'Floating on the surface of marshes, the plant consists of a cluster of broad, waxy leaves, and a single root that trails down into the water. The leaves are a bright green with red capillaries. During the warmer months a bright red flower sprouts from the top. Drying the plant causes it to turn into a flaky powder, which is often used in a distilled tincture to neutralize minor poisons. A single dose of Bloodpurge powder costs about 15 gold pieces, making the plant quite valuable.',
        locations: [
          {
            location: 'Swamps',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Bloodroot',
        description:
          "A short plant that grows deep in the jungle, the stalks are covered with long pointed leaves. The plant also blossoms red flowers that appear to be similar to roses. Unearthing the plant reveals a massive crimson root that has a faint coppery scent. Many people seek out the plant for the root, which is said to ensure robust fortitude in those that consume it. Upon consuming the bloodroot, a living person must make a DC 15 Cons'titu'tion saving throw or be Paralyzed for 1 minute. Immediately afterward the creature gains a +2 bonus to their Cons'titut'ion saving throws for 1d4 hours. Although the initial rush of blood throughout the body causes people to become momentarily stunned, it is often still complimented for the other effects, which some say causes increased virility. What few know is that the root is also sought after by vampires, as it causes increased effects to their undead physiology. Many such creatures take steps to covertly acquire the plant. A vampire consuming the bloodroot immediately gains Advantage on Charisma based skill checks for the next 1d4 hours, and the herb causes them to immediately Rage (as per the Barbarian class feature) if they smell blood.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Bloodspine',
        description:
          "A succulent plant growing in rocky soil, a cluster of thick leaves reach upward toward the sky, their edges covered in sharp thorns and the tips bearing a single crimson spine. Interestingly, the plant secretes a slight poison from these spines which may cause paralysis in small animals or the infirm. Those with hardier constitutions seek out the poison, as it provides a slight euphoric effect in addition to the paralysis. The poison requires only a DC 5 Const'itu'tion save, or the injured will suffer complete paralysis for 1d4 hours. Those that succeed at the saving throw not'ice a slight euphoric effect for the same amount of t'ime.",
        locations: [
          {
            location: 'Deserts',
            rarity: 'Common',
          },
          {
            location: 'Mountains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Bloodstaunch',
        description:
          'A small, leafy herb that is often found in gullies and ravines in arid regions and foothills. The herb has bright green leaves, and smells faintly like honey crossed with fresh rainfall. Grinding up the plant creates a powder that can be used on open wounds to quickly cause bleeding to slow or stop. Applying the herb to a bleeding wound grants the recipient a single hit point, and grants another saving throw to any bleeding effects.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Common',
          },
          {
            location: 'Mountains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Bluecap',
        description:
          'Common underdark crop mushroom, dark blue with pale grey spots and a pale grey stalk. The fugus itself is inedible, but spores can be made into flour. Grows with or without natural light.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Blueleaf',
        description:
          "Known for the gleaming blue color of the leaves, the tree often grows in thick copses throughout the north. The thin trunks of the trees are remarkably durable, despite high winds and heavy snowfall, and one use of the tree is the wood, which is often used by the Volodni craftsmen to create weapons and armor. Magically treating the wood, which is called 'bluewood', causes it to become as hard as steel, although only weighing half as much (crafting with bluewood requires special training from a masterwork craftsperson). High priced entertainers often burn small pieces of the wood, which creates leaping blue flames. The leaves and sap are often ground in the creation of a vivid blue dye that is used to dye clothes in the North, and often in the creation of inks for tattoos. One pirate fleet that has plagued the Sword Coast in recent years is notorious for their crews bearing frightening looking blue tattoos covering their faces.",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Bocraugh',
        description:
          'Bocraugh is a colossal truffle-like fungus that can be distilled down to a sticky black paste (one large truffle to produce 1 fl. Oz. of paste) causing any type of seed to grow to full maturity within 1d4 minutes. This applies to trees, herbs, plant creatures, and even plants that take hundreds of years to bloom.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Legendary',
          },
          {
            location: 'Mountains',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Bone Fungus',
        description:
          'Bulbous ivory-colored fungus that releases a 10 ft cloud of spores, in the presence of motion, that work as an inhaled poison (DC Constitution 15, 1d8-1 poison damage). If damage is taken, bone density is reduced, resulting in extra damage from bludgeoning in the form of an extra space for criticals against you (19 or 20 counts as a crit). The fungi are immune to acid and thunder, destroyed by cold or radiant damage, fire and electricity also destroy but release spores.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Boomshroom',
        description:
          'Typically found in swamps and marshes growing in a radius of up to 300 ft. A successful Sleight of Hand check allows you to pick one, but it renders them inert. If unsuccessfully picked, explodes as if from an Arcane Explosion spell. Always regrow in the same spot 10 days after triggering or any other attempt to purge them.',
        locations: [
          {
            location: 'Swamps',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Borage',
        description:
          'This plant has hollow, hairy cylindrical stalks which grow to a height of 1 to 2 feet. It has drooping flowers, red or blue in color, which are shaped as a five-pointed star at the top of the stem. The dried herb should be boiled in water and the infusion drunk. It is used to cure minor fevers such as those caused by chills, and influenza. It will relieve the fever in 1d4 hours.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Borneas',
        description:
          'A leafy, ground-cover plant found in forests all over the realm. Slightly resembles sage or salvia. When lit, the smoke will aid in sustaining meditation and trances for religious ceremonies, granting a +3 to religion checks made by Clerics or Paladins for 1d8 minutes after inhalation of the smoke.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
          {
            location: 'Forests',
            rarity: 'Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Brandac',
        description:
          'A bright orange mushroom that grows only on mountains that were once or still are volcanically active. The mushroom can be dried and crushed into a highly volatile dust. The dust will ignite if it comes into contact with any other substance then glass, crystal or ceramic materials. It will ignite any flammable materials in a 2-meter radius and does 3d6 points of damage at the center and 2d6 damage in the rest. Small amounts can be used to start campfires and light torches',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Brelidar',
        description:
          'This flower, when eaten, alters the way a person judges distance for a period of one hour. While under the influence of the flower, a person can add a bonus of +2 to ranged combat attacks, while subtracting -2 from melee attacks.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Bronzewood',
        description:
          "Hard wood native to extremely old-growth forests that is as durable as steel/iron but 10% lighter, although it can't be used for chain weapons. Advantage on stealth checks in a woodlands environment while wearing bronzewood armor. Crafting of armor requires training from at least a moderate level craftsman.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Bull-Rush',
        description:
          "Bull-rushes are tall straight stemmed plants with many small flowers at the top of the stalk. These flowers must be ground into an ointment which is applied to a person's eyes or tongue. This herb will put someone to sleep for 3d12 hours. A roll of 1 on the ability check will put the person into a coma.",
        locations: [
          {
            location: 'Swamps',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Burdock',
        description:
          'This plant grows to about 3 feet tall. It has huge leaves with a whitish underside, and purple flours. Its root must be boiled in water and then the root eaten and the water drunk as a cure for venereal disease. The person will be cured within a week.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Bursthelas',
        description:
          'Bursthelas must be brewed for one week in fine red wine before it can be used. It must then be drunk within one month or spoil. A successful draft will heal any surface level scars or deformities in a period of 6 hours.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Butterspice Weed',
        description:
          "A short leafy plant, the top sprouts large yellow flowers upon reaching maturity. The plant is quite hardy and can grow in a surprising wide variety of places. The most renown quality of the plant is that the leaves can be harvested and cured, becoming crumbly, brown flakes, which can be smoked. It is quite well known among halflings, which often grow it in small patches along with other crops. Those that smoke the weed claim that it has a smooth spicy flavor. Upon smoking spice weed, a wave of euphoria slowly washes over the smoker, last'ing for 2d6+10 minutes. During that time, the smoker suffers a -2 penalty to Dexterity saving throws. Halflings are affected for double the durat'ion.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Caffar',
        description:
          "A small, brown nut that grows from short, green, leafy understory plants in tropical forests, typically ground into powder and brewed into a dark, sweet-smelling beverage, traditionally with a goat's milk base. The drink is renowned by shaman and psionics for its boon to their all-seeing abilities. (+1 to all wisdom checks until the next long rest. If more than three cups are imbibed, causes a -2 to rolls to hit as the imbiber is too jumpy and caffeinated to focus.)",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Cachuga Pepper',
        description:
          'Cachuga Peppers can only be found on Hot Springs Island. Vaguely pyramidal shaped woody bushes with profuse foliage bear clusters of small, fragrant yellow blooms which eventually give way to fiery peppers of a marbled red-orange. The bushes bloom continually in the tropical climes of the Swordfish Islands causing Cachuga bushes to produce large numbers of these fire peppers. The peppers themselves are 2-4 inches long and hang from the bushes by thick, green, vein-like structures. Cachuga Peppers are exceptionally spicy and flavorful, and the skin of these peppers is leathery and can be mashed into a paste, then shaped and dried into chips or a flavorful yet non-spicy paper-like wrapping, pairing nicely with raw fish. The peppers dry well, retaining their fire and flavor for exceptional periods of time, and their seeds can be ground into a powder that causes *severe* eye and skin irritation (DC 16 Cons. Save or blindness for 2d10 minutes).',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Calacaza Bush',
        description:
          "A fragrant bush that grows in the dense jungle and sparse desert, the veined leaves and branches are a pale green, and the plant appears to strive to reach upward toward the canopy above. At the end of each branch are clusters of small white flowers or berries, depending on the time of year. The small white berries that the plant produces are actually quite poisonous (Those that ingest the berries must make a DC 17 Const'itut'ion saving throw or suffer 32 (8d6) poison damage and be poisoned for 1d6 hours. If the target makes the saving throw, they only suffer half damage with no poisoning). Local tribes avoid the berries unless they are using them to coat their arrowheads and blowgun darts (Adds +2 poison damage to successful attacks made using a blowgun).",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
          {
            location: 'Deserts',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Calamus',
        description:
          'This reed grows in small grassy clumps. It can grow from about 2 to 6 feet in height and has very small yellow green flowers that jut out from the stem. The leaves are long, thin and light green in color and smells faintly sweet. The root is white with a red brown peel. The root must be peeled and boiled in fresh water within a day of being picked, and should then be drunk by the recipient. Provided no permanent physical damage has been done to the person hearing organs, the herb may restore some small measure of hearing to a totally deaf person, perhaps 10% of normal hearing, and granting +1 to perception checks involving sound. In addition the herb has been reported to have aphrodisiac qualities (GMs discretion) and was used by certain ancient peoples to make their dogs fierce.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Common',
          },
          {
            location: 'Coastal',
            rarity: 'Common',
          },
          {
            location: 'Rivers',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Calcena Mushroom',
        description:
          "Anyone who breathes in the spores of one of these small, pink mushrooms incurs a -3 penalty on all Wisdom saves vs illusions for 2d12 hours. The mushroom may be brewed into a potion by brewing tea and leaving the mushroom to stand in the tea for 2 weeks. The resultant concoction when drunk is a powerful hallucinogen. Anyone under the influence of it will see whatever the GM wants them to see. This effect lasts for 1d4 hours in which the player enters a trance and responds lazily to interaction with other characters or NPC's.",
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Calithil',
        description:
          'A twisted and tough vine that grows in rocky crags high in the mountains, the waxy leaves of the plant are small and grow in clumps. Small white flowers grow on the vines, which turn into light blue berries which are quite tart. Dwarves send their children out to pick the berries, so that they may be harvested into a specialty wine and jams. Those drinking the wine often have an unfounded feeling of invincibility, while those consuming the jam often feel satiated and satisfied with their meal.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Callin',
        description:
          'A dark nut that grows on the Callin tree in tropical jungles. When the husk is dried, ground and ingested, it thins the blood and strengthens internal organs, helping to prevent heart attacks, and has the side effect of reducing anxiety and panic.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Caravara',
        description:
          'A button sized, arid-environment fungi that produces spores that resemble black sand. If inhaled or ingested, these spores will allow the recipient to take an additional action in the place of a bonus action once per combat for 1d8 hours.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Cassil',
        description:
          'Mustard-like shrub, whose seeds can be made into a powder that suppresses male fertility for 3d4 days (1 hour to take effect). DC 15 Medicine or Nature check can detect its effects, while a DC 20 check can reverse them.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: "Cat's Tail",
        description:
          "Cat's tail is a small plant with long thin spear shaped leaves rising from its base, and a single long, thin, soft flower at the top of the stalk. This herb when made into a salve, will heal all damage to a person's feet.",
        locations: [
          {
            location: 'Coastal',
            rarity: 'Very Common',
          },
          {
            location: 'Rivers',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Cave Moss',
        description:
          'A dark dependent moss, wilting in lighting brighter than Dim, that is grazed upon by giant vermin and cave creatures.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Cave Star',
        description:
          "Glowing yellow lichen found on chill cave roofs, but can't stand warm places. It can be made into Lantern Stars, which a fist-sized balls of glass containing a mixture of Cave Star and reagents that give light as a torch for 4 hours.",
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Cephalophage',
        description:
          "A pale, fleshy fungus with a tough, rubbery consistency that is commonly found growing near carnivorous plants. The fungus grows upon corpses, absorbing the cadaver's life memories and personality; up to 10 different minds have been found absorbed by one cephalophage mushroom. Eating cephalophage will transfer those memories and personality quirks to the eater. (Effects last 1d4 hours and while they last the eater can access all of the dead person's mind. After the effects wear off, the eater may still succumb on occasion to 'flashbacks' or personality instability; save vs. Intelligence when under intense stress or in a situation liable to cause such flashbacks.) This plant is condemned by some religions as unholy, believed to prevent a soul/spirit from attaining the afterlife and possibly in creating undead.",
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Ceran',
        description:
          'A short, hardy, tea-like shrub that grows in the cold climates of the Dalelands and Northern mountains. Drinking this herbal brew will result in a warm tingling feeling inside, all the effects of being in extreme cold conditions will be negated for 2d4 hours.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Chamomile',
        description:
          'This plant can grow up to 2 feet tall, and has a branched stem. It has few leaves, and these are finely divided. The flower heads have yellow centres which are domed in shape with a hollow at their very centre. The petals of this plant bend backwards towards the stem. The flowers from a single plant must be immersed in boiling water and the resultant drink consumed. This drink is very bitter and is normally mixed with honey but this is unnecessary. The drink will last for approximately 2 months after manufacture, while the leaves can be dried, and will then keep for up to three years. A successful use of this herb will have a calming effect on the consumer.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Chervil',
        description:
          'Chervil is used to dissolve blood clots, which can help to prevent complications caused by injury. The clots are dissolved within 1d4 turns. Since they dissolve clots, improper use of this herb leads to +1 bleeding damage for the next 1d8 hours in every successful attack against the consumer.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Choke Mold',
        description:
          'Bright yellow mold native to caves and swamps, commonly found in patches that devour air, creating localized vacuums (can cause air-tight space to collapse inwards). Creatures within 5 ft of a patch begin to suffocate.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
          {
            location: 'Swamps',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Choking Cinder Fungus',
        description:
          "Growing on rotting wood in more moist climates, this black fungus is generally avoided by those gathering firewood. While the fungus is highly flammable, it emits poisonous fumes that burn the lungs. Once ignited, the cloud of fumes lingers in a 10-ft-radius centered on the burning fungus, and disperses in one minute in a calm wind (or a few seconds in a s'tiff breeze). Those within the cloud must make a DC 11 Const'itut'ion saving throw or suffer 4 (1d6) poison damage and be poisoned. Each round those that are within the cloud must make the saving throw, or suffer the damage.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
          {
            location: 'Swamps',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Chromus Slime',
        description:
          'A yellow-orange slime mold found growing in dark, humid places, near a supply of constant water. The slime mold is capable of filtering out the salt in salt water and can therefore live in fresh water or by the ocean. When combined with high-grade alcohol and added to a potion, Chromus Slime has the ability to reverse the effects of the potion and create the opposite effects to what the potion or poison would typically do.',
        locations: [
          {
            location: 'Coastal',
            rarity: 'Very Rare',
          },
          {
            location: 'Swamps',
            rarity: 'Very Rare',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Cinquefort',
        description:
          'This plant creeps along the ground on long slender stringlike stalks. It has five or seven-part leaves, and small yellow flowers. The stalks must be boiled in white wine or vinegar and then drunk. The herb will then act as an aphrodisiac, and increases the recipients Charisma by 1 for 1d4 hours.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Cline Cactus',
        description:
          "A small, round cactus with very few large needles. The round body of the cactus holds a large amount of a viscous green liquid. This liquid acts as a stealthy poison, doing 1d4+1 poison damage (on a failed DC 15 Cons. Save) per round unbeknownst to the poison's target. After 5 rounds, the target begins to feel a burning pain internally and damage is fully done.",
        locations: [
          {
            location: 'Deserts',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Coldwood',
        description:
          'A Fey-created variety of Hickory that reaches maturity in 2 decades and has properties identical to steel, except the Fey/Druid-aversion part. Items are always masterwork, making the raw material quite valuable.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Common',
          },
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Colewort',
        description:
          'Colewort is a small plant with a single large glossy leaf, and small white flowers with four petals. Anyone who chews on the flowers before drinking will remain sober for the entire evening. Its effects protect only against alcohol, and not against any other drug or toxin.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Coltsfoot',
        description:
          'The plant has a single golden yellow flower borne at the top of a six-inch-tall stem with long, pinkish woolly scales. These flowers are crushed and mixed with honey, and applied as a poultice to infected wounds in an effort to draw out the infection. It does not cure any damage.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Comfrey',
        description:
          'Comfrey grows to a height of up to 3 feet. It has stiff, angular and hollow stalks which are covered with rough hairs. It has pink, mauve, white, or cream flowers. Its thick black root is the portion used in herbalism. It should be boiled and wrapped in a poultice which is then wrapped around a broken limb and increases the speed of healing by fifty percent. It can also be used in a bath by women in order to give the impression that they are virgins on their wedding nights.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Common Coneflower',
        description:
          "A small flower (roughly 18' or less) that blooms in the late sping or early summer and resembles a small, pink, sunflower. The coneflower is known for its ability to attract butterflies and honeybees, and if possessed/worn, will cause insect swarms to attack the person who is wearing the flower more frequently.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Constrictor Vine',
        description:
          "Instead of growing up to seek light, the Constrictor Vine spreads out across the ground as a thick mat of small, glossy leaves. The plant blooms occasionally with unremarkable clusters of small green flowers that give way to oblong yellow berries favored by birds and small animals. While the leaf mat of the Constrictor Vine rarely reaches more than 10' in diameter its root system can stretch as far as 50'. The fibrous roots of a Constrictor Vine resemble the pale hair of a drowned woman, are incredibly strong, and retain much of this strength even after being harvested and dried. As the roots grow, they wrap themselves around rocks, root systems, and anything else in their path. When the roots reach ~30' to ~50' they begin to slowly, yet inexorably constrict back towards the core of the plant. This constriction has been known to topple whole trees and move many ton boulders. Since the process is so slow, it poses no real danger to living creatures.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Cornus',
        description:
          'Cornus is an alien looking, bulbous fungus that grows into silver balls the size of small melons. These bulbs are full of a silvery, almost metallic liquid that, when injected into the body, will kill any and all hazardous parasites within the body with no negative side-effects.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Corpsebomb',
        description:
          'The fungus begins life as a tiny spore that floats along until inhaled by a creature, and lodges itself in the moist tissue of the lungs. The spore then begins to grow, causing irritation, pain, and finally death once the fungus has reached a sizable mass. Once the host creature has perished, the fungus increases growth rapidly until it pushes a hollow tendril forth from the flesh. At the exposed end of the tendril the fungus begins growing a thin membrane, which is inflated by the gasses produced by the rotting body. When the membrane ruptures and disperses the spores, every breathing creature within a 40-foot radius sphere must make a DC 10 Constitution saving throw or have spores inhaled. If they fail, each hour afterward, the creature must make a Constitution saving throw with a -1 cumulative penalty to the roll. Each hour the creature suffers a cumulative 1d6 piercing damage (2d6 on the second failure, 3d6 on the third, etc.) as the fungus spreads throughout the internal organs. A single success stops the process and renders the fungus inert. If the fungus catches fire and explodes, everyone within a 20-foot radius sphere suffers 3d6 damage on a failed Dexterity saving throw, DC 15, or half as much on a successful save. All spores are incinerated in this process.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
          {
            location: 'Swamps',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Cosmos Glond',
        description:
          'This hard-to-find four-leafed plant spends most of its lifecycle underground, reaching only above the surface to complete the mature stage of its life before dying shortly after. The leaves are a dark blue with small white specks, resembling the night sky, complete with constellations and astral bodies as they would be on the date the plant reaches above the surface. When used in ceremonies by clerics and paladins, the leaves grant a greater success of communicating and reaching a god or goddess, +4 on religion checks or greater success with using spells similar to Commune.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Cotsbalm',
        description:
          'Fleshy-leafed plant with small yellow flowers that grows 1 ft tall. It is hardy and found in temperate and sub-tropical regions. Its syrupy sap can be applied to an injury or contact poison victim to grant a +8 bonus on the secondary Constitution save against a poison.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Covadish',
        description:
          'Plant originally native to Aerenal, and later transplanted to the cold, harsh arctic climate, whose leaves, when consumed by spellcasters, grant boons to any spells cast in the school of necromancy, decided by the DM, until the next short rest.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Cow Parsnip',
        description:
          'Cow parsnip has small leaves covered with tiny hairs. These hairs must be made into a salve. Cow parsnip will cure madness for a short period (a few hours). Repeated application over a two week period may (DMs discretion) cure insanity altogether.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Cow-Wheat',
        description:
          'Cow wheat is a small straight stemmed yellow-green plant. Its pale-yellow flowers produce a white powder when crushed, between two hands. If this powder is placed into food or drink it will cause a person to act as if drunk. Each dose of this herb successfully administered will increase the level of drunkenness by one step.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Creeping Mangrove',
        description:
          'Growing along the edge of the swamps, their gnarled roots reaching down into the brackish water, and their spindly branches reach into the sky. The branches are covered with small oval shaped leaves. During warmer seasons the trees bud small hard fruits that drop off to float along the slight currents of a swamp. This species of mangroves has flourished in areas where others have perished, simply for their ability to slowly pull up roots and move to areas with more moisture. The species is also relatively destructive, as the mangroves also have been known to uproot small trees and brush, or simply walk over them and smashing them down. Wood from these trees burns easily, even when sopping wet.',
        locations: [
          {
            location: 'Swamps',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Crimson Ladies',
        description:
          "This creeping vine is found on the sides of ruins and growing along the branches of trees. The vine itself is an odd shade of purple, and has wide green leaves. In the summer, the vine sprouts red flowers that resemble a woman wearing a large dress. The flowers that blossom on the vine can be steeped in hot water to make a poisonous tea called Crimson Tears. When Crimson Tears is ingested, the drinker must make a DC 15 Const'itu'tion saving throw or be blinded for 1d4+2 hours. During this 'time blood weeps from their eyes, and instead of seeing the world, they see horrific visions of things to come. After recovering from the visions, the character gains Advantage on a single skill roll ut'ilized within the next day, as the visions gave them a brief glimpse of the outcome.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Culkas',
        description:
          'Each application of Culkas will cure one square foot of sunburn.',
        locations: [
          {
            location: 'Coastal',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Dagmather',
        description:
          "The spine of this plant must be brewed for one week in fresh water at the end of which time it may be drunk. If it is successful, it will heal any damage to a person'ss cartilage that are capable of healing naturally.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Dahkra',
        description:
          'A reedy hollow grass that smells like sweet hay and corn, found growing near rivers in mild climates. Dahkra must be added to water and boiled over a flame for a few minutes. Can be fed to beasts, it will put them to sleep for 3d4 hours.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Dainaberry (Sleepberry)',
        description:
          'The Dainabush is a creeping, thorny vine, much like a bramble. Vines are about 5 mm thick, with 2 mm long thorns and are reddish brown, darkening to black, with leaves dark green in colour. The vines flower in early summer, with light blue, bell shaped flowers. In autumn, it carries dark blue or purple berries, which are fleshy, almost crunchy rather than juicy. The berries are slightly sweet and quite tasty, but have a strong effect on mammals: those who eat them fall asleep. The berries have this effect on mammals only, but a single berry is enough to bring down any man sized or smaller mammal, and given enough berries, even the greatest mammal will fall asleep. There is no saving throw, although the sleep caused is quite normal, and a sleeping creature can simply be awakened. Although the berries can simply be eaten to cause the effect, it is also possible to dry them carefully, and grind them into powder. This powder is weaker (save vs poison to avoid), but will keep a long time. The powder can be added to any food or drink, but has a very sweet taste.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Darkanda Bush',
        description:
          "This small bush grows in desolate places, often in rocky soil high upon a cliff face. The branches are covered in small thorns and are gnarled and spindly, while the leaves are ragged and dark green. The bush produces small red flowers and bitter orange berries. When ground up and distilled, the leaves can be used to create an interesting alchemical acid called Dragon Sand that can be used as a poison or to corrode organic items. The substance appears to be a fine green powder, and has two peculiar proper'ties. The first is that it acts like an acid to any organic substance. If it comes into contact with flesh or wood it slowly dissolves, dealing 3 (1d4) acid damage per round for 2 minutes per ounce contact'ing the organic substance, and leaving an acrid smell in the air. The second property is that it can be burned for an extended period. If set on fire it burns with leaping green flames, and takes twice as long to burn as an equal amount of wood.",
        locations: [
          {
            location: 'Mountains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Darkberry',
        description:
          'Short bushes with spindly branches and fluffy green leaves, the plant is known for the unusual berries that only a few of the bushes produce. The small purple berries contain essence from the Plane of Shadow, and the bushes are said to only grow where the Shadow Weave is strongest. When a Darkberry is split or crushed, it releases shadowstuff, creating a circle of darkness with a 5ft-radius. This darkness lasts for 1d6 rounds.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Darkhorn',
        description:
          'Small tapered tendrils standing upward, the mushroom is quite rigid, and the black exterior makes it difficult to see in the winding caverns of the Underdark. The mushrooms have a slight musky aroma that seems vaguely familiar but is difficult to determine. Several races seed Blackthorn mushrooms at the bottom of pits, turning them into a lethal surprise for anyone falling down upon them. Add 1d4 piercing damage to any falling damage incurred when a character falls down a hole that has Blackhorn growing at the bottom.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Darkroot',
        description:
          'Large black twisted root that grows to 10 ft; found by waterfalls and similar damp areas. It tastes vile, so chewing/swallowing it induces vomiting. It can be made into Titan Gum, a strong and fast-setting glue that bonds in one round and requires a DC 20 Strength check to remove.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Darkshine',
        description:
          'Crystallizing glossy-black fungus that grows sharp 6-ft long shards. Areas with Darkshine in it function as caltrops that deal 1d10 damage, and damaged creature cannot be magically healed for 1 minute. A patch has 20 hit points and takes half damage from piercing and slashing weapons, but it takes 1 point of damage each hour it is exposed to any light-source stronger than a candle.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
          {
            location: 'Swamps',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Darkwood',
        description:
          "Wood items made from this tree's magical wood are half-weight and masterwork, with shields having +3 AC. Crafting using Darkwood requires a DC 25 Nature check or training from a master craftsman.",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Rare',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Darmanzar Stalk',
        description:
          'Growing as a singular stalk with pairs of leaves sprouting every few inches, the Darmanzar is covered in small thorns. Touching the plant without gloves causes small cuts which grow swollen and irritated, and remain that way for several hours. The top of the plant sprouts a large bushy bud which is a light gold color. The bud emits a curious sugary fragrance which seems to irritate and deter undead and attract the living. Living characters must make DC 8 Wisdom throw to avoid suffering 1d4 piercing damage and some very itchy swelling. Undead that wish to approach closer than 30 feet from the bud must make a DC 8 Wisdom saving throw.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Darnell',
        description:
          'These tiny yellow flowers will, if eaten, cause dimness of the sight for several hours. This dimness means that in full light the character will see as if on a moonlit night. This herb does not effect those with truesight. Darkvision effects are reduced.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Darsurion',
        description:
          'The leaves of Darsurion when applied to a wound will heal 1 hit point of damage if used within 3 rounds. The effect is not cumulative.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Dathlil',
        description:
          'A small white flower that grows close to the ground, and can be found across much of Faerun. The flower is often picked in spring and used for decoration among more rural folk. The petals are often used to combat poison (make another saving throw against the poison if already under its affects).',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Deserts',
            rarity: 'Very Common',
          },
          {
            location: 'Mountains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Deadly Nightshade',
        description:
          'This plant can grow up to five feet tall. It has soft green spreading leaves, and purple flowers and berries. The berries must be left to stand in water for a week and the distillation drunk. On a failed save (DC 16 Cons. Save) deadly nightshade will put someone to sleep for 4d8 hours. They cannot be woken. A roll of 1 will kill them, a roll of 20 will render them insane.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Deadroot',
        description:
          'A black, woody shrub that grows in deep-forest environments, far from civilization. The branches of the shrub can be broken off and chewed to make the character invisible to undead of CR 4 or lower for 1d4 hours.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Deep Imaskari Waterplant',
        description:
          "These magical plants are found in every deep imaskari household or the households of those who don't normally reside in the underdark. 2-inch diameter balls of water grow from them every day and can be carried like oranges, until they are pierced and drank from.",
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Degiik',
        description:
          'Degiik leaves must be given to someone at the point of death (in the process of making death saving throws). The consumption of Degiik will count as two successes in the death save process.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Delrean',
        description:
          'The bark of Delrean should be boiled into a paste and then smeared on the skin. It will then repel any insect from coming near the recipient (disadvantage on rolls for initiative from Insectoids), but the foul stench will reduce their Charisma by 1d2. It is effective for 5d6 hours.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Densewood',
        description:
          'Hard and sturdy tree native to tropical locales that, with a nature check of 20+, can be added into wooden weapons (ie quarterstaves and the like) to up the tier of dice that the weapon uses for damage.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: "Deva's Tears",
        description:
          "A light blue flower that grows on a long rigid stalk covered in small leaves, the plant is often found in small clearings in wooded areas. From the flowers a thick sparkling sap is exuded once the plant reaches sexual maturity. Bees are often attracted to the sap, which contains miniscule seeds. Many people seek out the sap of the plant, as it provides some minor restorative aid (Heals for 1d4+1 hit points if consumed within 3 rounds of injury). A person may gain the benefit of drinking Tears a single t'ime per day, and any addit'ional ingest'ion requires the drinker to make a Const'itut'ion save or fall unconscious for 2d4+1 hours. This save is a DC 5, and increases by 1 each time the drinker has imbibed Deva Tears over the course of a day.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Devarencia',
        description:
          'Growing singularly and rarely on tropical mountaintops, Devarencia is an exceedingly fragile and picky plant in terms of water, humidity, temperature, and sunlight, meaning that many plants do not see maturity. This plant can be mixed into any potion and will prevent different potions from interacting. You can mix up to four potions into one vial. The potions all have their normal effect and no penalties are given.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: "Devil's Crown",
        description:
          'Resembling a cluster of sharp spines that curve upward, the insidious looking plant grows in rocky, inhospitable climates that have very little other life. The roots of such plants dig downward through cracks in stone, and some say that the roots of some of the older plants reach down into Hell itself. Lore about the plant states that it was once native to the infernal planes, but a few hardy seeds were transplanted into some long-forgotten wasteland on Toril, and from there the plant has spread. The plant is quite resilient and tough, with the spines holding moisture in the form of a thick red sap that causes nausea and vomiting if ingested. It is rumored that coating a blade with the sap makes wounds especially painful for celestial creatures (If applied to weapons, +3 damage against celestials. Additionally, any celestials that take this damage must make a DC 13 Cons. Save or be Poisoned for 1d4 minutes).',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: "Devil's Bloodflower",
        description:
          'Only a few recorded instances of this red and yellow flower exist. This large and bold red leaf can be going back in history to the dawn of humankind. It was once a popular decoration around homes and gardens, but has become one of the rarest plants in the world. When the petals are consumed, they grant all boons of a Potion of Vitality (removes any exhaustion you are suffering, cures any disease or poison affecting you, and for the next 24 hours, you regain the maximum number of hit points for any hit die you expend). In addition, healing magic and potions heal you for +5 additional hit points for the same period of 24 hours.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Legendary',
          },
          {
            location: 'Swamps',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Devilweed (Wyssin)',
        description:
          'Tobacco-like smoked drug, -1 to Intelligence checks and +2 to Strength checks for the next 1d6 hours.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Dittany',
        description:
          'This herb grows six or eight inches high with square stalks and sort round leaves. The leaves must be dried for two weeks and then be boiled in ale or wine. It is then applied as a lotion. Dittany can be used to draw splinter and bone fragments from a wound. It is also an effective antiseptic for cleaning wounds, and can therefore prevent infections caused by dirty water etc. (+3 hit points if applied within 2 rounds of an injury)',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Djin Blossom',
        description:
          'Fern native to the harsh conditions of the desert and commonly found in alchemy and herbalist shops. Wearing one of its petals grants a +2 bonus on saves against inhaled poisons and gas-based effects, and a DC 20 nature check allows one to make it into a perfume that grants a +2 bonus on all charisma-based skill checks for 24 hours.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Dog Rose',
        description:
          'The dog rose grows to about ten-feet in height and has very sharp thorns. In spring and early Summer it has pale pink flowers which turn into vivid orange seed pods at the end of summer. These pods must be dried and then eaten at the rate of one per three days to avoid scurvy in environments where this disease is common (ie, on long ocean voyages.) Certain ancient and medieval cultures believed that placing a dog rose in a coffin would prevent the body within from rising as undead.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Draaf',
        description:
          'The leaves of Draaf can be eaten in order to restore 1d4 hit points, as long as they are eaten within 10 minutes of the damage being inflicted.',
        locations: [
          {
            location: 'Coastal',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: "Dragon's Breath",
        description:
          "A stout stalk nearly bare from leaves except near the base, the plant is covered in fine red hairs that are painful to the touch, as each hair contains a minute amount of poison. The Red Wizards have managed to cultivate small amounts of the plant, but predominantly their supply is harvested from the Hill of Lost Souls. Commonly used as a tea for victims of frostbite and hypothermia. The hairs can be collected individually to ferment and increase the poison's effectiveness. Those unfortunate enough to come into contact with the poison must succeed at a Const'itut'ion saving throw, DC 13, or suffer 10 (3d6) poison damage and be poisoned for 2d6 minutes. If the target succeeds at the saving throw, they only suffer half damage.",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Common',
          },
          {
            location: 'Mountains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Dragons-Eye Oak',
        description:
          'Oak native to forests habituated by wood nyphms, whose acorns, when in the possession of a spellcaster, has a 10% chance of increasing the damage of evocation spells.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Dragonspine',
        description:
          'A large-area spreading succulent that produces small red flowers every 6 months. These flowers can be dried and ground into a fine powder which, when applied to weapons, will immolate a target upon a successful hit for 1d6 rounds, dealing 1d6 fire damage per round.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Uncommon',
          },
          {
            location: 'Mountains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Dragontears',
        description:
          'This rare, small, translucent succulent grows primarily in the low desert. When crushed, it exudes a sweet, milky white substance with numbing properties. Properly prepared, dragontears promotes rapid healing and prevents scarring from wounds. Drinking dragontears can be fatal, as its numbing properties can cause choking or heart failure when used incorrectly, but not when used properly (healing check of 17+, cures 1d8 hit points, always prevents scarring.)',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Dragontongue Mushrooms',
        description:
          "The stout stalk of the mushroom is a pale yellow, which transitions to a dark brown at the top before it splits into six black protrusions that appear to be spines, but are soft to the touch. While the mushroom itself isn't overly poisonous, it can cause hallucinations if brewed into a tea. Members of the Cult of the Dragon delve into the Underdark in order to pick the mushroom, so that they may partake of the hallucinogenic properties. Many of the cultists that hallucinate claim to hear a gravelly dead voice telling them where to find the bones of old dragons.",
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Dragonwort',
        description:
          'This plant has a gnarled, erect and cylindrical stem. It has wavy leaves, dark green on top, bluish green underneath. It has pink flowers that cluster in a spike at the top of the stem. The root of this herb should be boiled over a low heat for three days, and the infusion drunk by people with the plague in order cure some symptoms or the plague as a whole (60% chance to cure completely). The value of this herb increases greatly in times of plague.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Dramas',
        description:
          'Found on a creeping vine with spiky leaves tinged in red, these legumes produce a small, dry nut. When this nut is consumed, it will allow the recipient to feign a state of death for an hour.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Dripping Tree',
        description:
          "The Dripping Tree has dark brown bark, large leathery leaves, and grows as tall as 30'. Its branches only grow from the very top of the trunk and spread out almost horizontally, much like the cap of a mushroom, to shade an area 10' to 20' in diameter. The roots of a Dripping Tree spread and twist through the ground almost as far as the branches above. Numerous cream-colored spheres, 10' in diameter, that cling to the branches are the source of the tree's name. Special nodules on the roots of this tree detect movement, warmth and pressure causing the globes directly above the triggered area to fall. The globes are filled with a viscous, sticky mucus and burst on contact, causing creatures hit with them to stick to the Dripping Tree's root clusters (DC 18 Dexterity or Strength Save to avoid grapple). When pressure is constantly applied to an area of roots, the branches above it begin to slowly drip a sticky, acidic, digestive mucus onto the area below (1d6-1 acid damage per hour). This mucus melts through flesh and bones like butter. Smaller creatures, such as lemurs and tabibari can be dissolved in as little as a day, while larger creatures and humanoids may take up to 72 hours to be broken down into nutrients.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
          {
            location: 'Swamps',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Dungeon Fungus (Dungus)',
        description:
          "Dungeon Fungus is a bio-luminescent giant mushroom. The largest specimens stand taller than a man, with caps broad enough for three to lay comfortably upon it. It only ever grows in locations that are frequented by oozes, and have bodies to feed upon. Ingestion of the fungus will cause the recipient to make a DC 14 Cons. Save vs poison or be violently ill for 3d10 rounds (no actions but 1/4 movement speed, -4 penalty to AC). Burning the fungus will produce an intoxicating effect on all those who breathe the fumes. Anyone under the effects of the fungus' smoke will be much more likely to regard others as a friend (+2 to rolls to persuade while under the fumes' influence), unless they do something particularly harsh. After 1d4 hours the drug will cause anyone under its influence to fall into a deep sleep.",
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Duskwood',
        description:
          "Black-barked tree that grows 60-ft tall in tightly spaces groves, featuring small branches and smoky grey wood that's strong as iron but half the weight. Items crafted from duskwood require master-craftwork of a nature check of 25+.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Dwarf Hops',
        description:
          "Similar to regular hops used in the production of ale, Dwarf Hops are much hardier in terms of cold and grow slightly shorter while producing the same number of hops throughout the Spring, Summer, and Fall. If harvested and preserved correctly, the hops can be worth quite a bit to someone who's trained in making Dwarven Ale.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
          {
            location: 'Cities',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Dwarf Mallow',
        description:
          'This small plant has a single primary stem from which other, shorter stems ending either with leaves or with small pick flowers. These flowers when crushed and mixed with honey and salt into a poultice will relieve the pain of bee stings on a successful application. In addition, the crushed flower may be mixed with oil and smothered onto the body in which case, no bees will approach for 1d10+2 hours. At the DMs discretion, this effect may extend to other small insects.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
          {
            location: 'Mountains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Dwarven Oak',
        description:
          "Stunted, gnarled tree found on the slopes of temperate mountains that looks like a sitting Dwarf from a distance. Its bark can be made into a brown, milky fluid that can be added to poisons up to 1 hour before the poison is used to increase the poison's DC by 2.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
          {
            location: 'Mountains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Ebur',
        description:
          'The flowers of Ebur must be eaten each day. If the treatment is successful, the rate of healing for a sprain will be doubled for that day. In addition, successful application will increase movement speed by 5 for the day.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Ecru',
        description:
          "Small, red-leaved drooping palm trees that grow no more than 5-feet tall. The trees produce a small, red, glass-looking growth, as a result of build-up of the Ecru's internal resins, called Ecru Crystal, that can be dissolved in water or alcohol and consumed to induce a state of blissful relaxation for 1d10 minutes. In addition, during this time, there is a 25% chance that a spellcaster who consumes Ecru Crystal will receive a boost of 1d4-1 points to either Wisdom, Charisma, or Intelligence for a period of 24 hours. In addition, during this 24 hour period, the consumer's Dexterity is halved.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
          {
            location: 'Coastal',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Edram',
        description:
          'Edram is a moss which when eaten will the consumer to heal at one and a half times their normal rate (+half the value of recovery dice used during a short rest).',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Elandir',
        description:
          'A pale white stalk plant that grows under rocky overhangs or deep within caves. The plant has a remarkably short lifecycle, sprouting, growing to maturity, and wilting within only one week following the Winter solstice. When broken open, the plant will ooze a black ichor that when injected into the bloodstream brings back characters from unconsciousness, catatonic and even comatose conditions. There is a 1% chance for each day over a week, that the recipient will slip back into their original state and that this plant will not work on them again.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Very Rare',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Elausa',
        description:
          'A short, purple weed that grows in small patches of spiky grass among patches of wildflowers or in farm fields as an invasive. When consumed raw or in a tea, causes the character to lose its voice for 2d10 minutes.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Eldaas',
        description:
          'This tall, blue-flowered plant with spike-shaped leaves is the base for medicines against nausea, usually taken in the form of a bitter-smelling and -tasting herbal tea. Eldaas is used to counteract the nausea associated with hangovers, motion sickness, morning sickness, and more common illnesses. (Adds + 2 to saves versus Constitution against poisons or other things that would cause nausea. Lasts 1d6 hours.)',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Elecampane',
        description:
          'This plant has a thick root, with leaves that are white on the bottom and green on top, as well as showy yellow flowers. The root may be eaten in which case it will cause the recipient to vomit. This effect, while useful in removing ingested poisons from the system, will leave the recipient weak (- 1d4 to Constitution for 2d6 hours). For this reason it may be used as a mildly debilitating poison.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Eldritch Whorlwood',
        description:
          'Tree with a twisted and gnarled grain pattern, and wands made from the wood retain this property. The wood becomes straight if a wand or other charged magic item made of Eldritch Whorlwood expends all its charges (1d4 charges to begin with, regains 1d4-1charges every day at dawn, contains a built-in cantrip of the spell Darkness).',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Elora',
        description:
          'A tiny black slime mold that slowly migrates through cave systems searching out additional moisture. When Elora is dried up and ground, it can be sprinkled over the ground and illuminates all footsteps that have traced over this area in the past 24 hours with a black glow.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Elven Willow',
        description:
          'Small tree (up to 5 ft tall) with golden-sheen bark that produces golden buds in the spring. Grows on riverbanks in temperate areas. Its sap can be made into a Elf Hazel, which fades scars if applied over the course of a week.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Elvish Galingale',
        description:
          'Elvish Galingale grows to about four feet in height. It has a triangular stem on which grows a tuft of grass like flowers. The roots are boiled and left to stand for a week and the resulting decoction is then drunk. This herb increases the flow of blood. This is very useful when a person is cold. However, if a person is bleeding, either internally or externally, or is wounded it will double the speed of loss of blood. Its effect lasts 1d6+1 hours.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Ember Root',
        description:
          "A shriveled, coconut-looking plant native to the elemental plane of fire that grows on solid stone in areas of extremely sunny or hot conditions in the overworld. The flesh is poisonous, but the core contains drinkable liquid that never grows hotter than 70 degrees and one ounce of which equates to one day's worth of water. A typical ember-root contains 1d4 ounces of liquid.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Jungles',
            rarity: 'Common',
          },
          {
            location: 'Mountains',
            rarity: 'Common',
          },
          {
            location: 'Rivers',
            rarity: 'Common',
          },
          {
            location: 'Coastal',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Entriste',
        description:
          "A small-leafed ivy that hugs the ground. Entriste's leaves absorb liquid and, when crushed, may be used to draw poison from a wound. (1 leaf absorbs a quarter-pint of liquid. Causes 1d4 damage but draws 100% of poison from a wound if applied within 5 rounds of insinuative poisoning, -25% for each round thereafter. Does not work against gases or 'instant-death' poisons. Most poison effects are weakened if the poison is at least partially removed.)",
        locations: [
          {
            location: 'Deserts',
            rarity: 'Uncommon',
          },
          {
            location: 'Mountains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Entangle Weed',
        description:
          'Nigh-invisible (DC 20 spot check to notice from within 10 ft) seaweed native to large bodies of salt water that forms patches of about 600 ft diameter. Entering a square with it forces a DC 20 Dexterity save against becoming entangled (Str check to escape DC 15 +1 per failed attempt). Each failed attempt to escape deal 1d6 nonlethal damage and causes fatigue, and taking 60 points of damage from it causes exhaustion. Instantly wilts when out of water.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Rare',
          },
          {
            location: 'Oceans',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Ephedra',
        description:
          'This small succulent sedum produces small offshoots which hold between 8 and 16 small leaves. These leaves can then be dried and ground into a powder to mix with a poultice or potion to increase the tier of a healing die by 1, turning a d6 into a d8, etc.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Rare',
          },
          {
            location: 'Mountains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Fairy Bells',
        description:
          'A leafy green plant that springs up in clusters, the majority of the plant is rather uninteresting, save for the violet flowers that seem to bloom almost year-round. When the wind blows through the flowers, their seeds rattle around inside and create a curious ringing sound, much like tiny bells. Many rural children enjoy picking them and weaving the flowers into their garments, which then jingle as the run and twirl. There is also a legend that the sound of the flowers ward away evil spirits, a legend that is partially true. Any fiend must make a DC 15 Constitution save in order to approach within 10 feet of the fairy bells or anyone wearing them.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Falsifal',
        description:
          'A wide-leafed plant with large pink flowers and thick roots containing a slimy gel. When the root is pulped, mixed with water and used as a poultice, it is effective against fresh burns, aiding rapid healing. The root-gel can also be thinned and drunk as a thick tea to counter the effects of blood loss. (Regains 1d8 hit points of fire damage if administered within 4 rounds of taking fire damage. If used to counter blood-loss, target can add 1d4 to the health regained from a short rest.)',
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Faranir',
        description:
          'This strange looking, crescent-shaped nut grows from 30-ft leafy trees in tropical climates from long, thin filaments of near-invisible silk. While the silk is sought after for use as fine embroidery thread, the nut can be boiled and reduced to a sticky, white paste. When applied to any item, this paste protected the item from acid, corrosion, and rust for 3d4 days.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Febfendu',
        description:
          'The roots of this plant must be brewed over a low fire for one week, and the resulting distillation drunk. If used successfully, hearing will be restored to the recipient, even if the ears and internal parts have been fully destroyed. Effect lasts for 2d6 days.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Felmather',
        description:
          'The leaves of this plant should be placed under the tongue of a person in a coma. Roll 1d20 upon a successful application, the person will awake in as many hours. If a roll of 20 is made, the persons mind will be permanently destroyed and wracked with insanity.',
        locations: [
          {
            location: 'Coastal',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Felsul',
        description:
          'A deciduous tree with a flaky brown reddish bark, the trunk and limbs often grow to be gnarled and twisted. After peeling away the bark, the trees have a soft wood, which is harvested fresh to decrease nausea, and to numb the mouth. Orc shaman often harvest the wood to feed to expectant mothers. The small yellow, purple, and red flowers which bloom in the spring are crushed to make a heady, spicy perfume which many claim to be an aphrodisiac. The perfume grants a +1 bonus on Charisma (Persuasion) skill checks against men. A sack of the flowers can fetch anywhere from 5 to 30 gold pieces.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Fennel',
        description:
          'Fennel has thick stems, and bright green, lacy leaves and routinely grows to about five feet in height. (There is a rare form which has a bronze stem. In terms of its use, it is identical to the common fennel). In summer it has golden, yellow flowers. These flowers turn to seed in early Autumn. The seed heads must be harvested and left until the seeds separate from them. The seeds may then be mixed with boiling water to make a tea. This tea has the effect of relieving hunger in the recipient for 2d8 hours, However, it does not in any way act as a substitute for food, and any damage or exhaustion due to starvation will still occur. Any negative effects of exhaustion already being felt will evaporate for 1d8 hours.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Fennel Silk',
        description:
          'A tall, long-stalked plant resembling fennel that can be stripped to its fibers, and then these fibers can be stewed and boiled for several hours. Adding the resultant broth to any potion will stabilize body heat to resist cold weather or wet conditions for one hour.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Common',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Fetherfew',
        description:
          'This herb grows to about 18 inches in height. It has many small white flowers. The flowers must be dried and then boiled in white wine. The resulting mixture must be drunk. This herb will remove the effects of vertigo from a person for up to twelve hours. It does this by stabilizing the persons inner ear. As a side-effect of stabilizing the inner ear, the herb also calms the fear centers of the brain, allowing for the recipient to overcome extreme fear for 2d6 hours.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Fey Cherry',
        description:
          'Unbelievably massive cherry trees that can live forever. Area under its canopy is mystically protected, i.e. always temperate and windspeeds are dampened by 20 mph. It blossoms annually but only creates cherries every 10 years, and eating a cherry picked less than a day ago (gentle repose applies) grants a Protection from Good and Evil effect for 1d10 hours.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Fieldcress',
        description:
          "A low, ground-cover leafy green that is commonly used for salads and sandwiches in the spring and summer all around the realm. Combining fieldcress with a day's rations will grant advantage on the exhaustion save after a Forced March on the next day.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: "Fiend's Ivy",
        description:
          'A highly invasive and virulent strain of poison ivy that seems to have some sort of sentient quality about them, often shifting slightly to trip up and ensnare unaware passersby. The small thorns on the ivy inject a small amount of poison many times into any creature unlucky enough to fall into the ivy. DC 15 Cons. Save or 3d6 poison damage.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Firmanon',
        description:
          'A small, red-brown grass that grows in singular sprigs in open fields. Throwing this into a fire, causes a short but very strong ignition of the fire. The flames double in size and you can hear the air rushing towards the fire working as fuel for the ignition.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Fire Flower',
        description:
          'It is suggested that this herb be found in one location on an entire world, ideally in a Mountain range in a tropical or subtropical region. This is a small bush which has one pale golden flower and small red berries with the appearance of a live coal. The flowers of the bush must be taken and crushed into a diamond vial, and left to cure for ten years. This is also the amount of time needed for a single flower to bloom. A single drop of this elixir will heal any illness or injury, but will not allow limbs or other appendages to grow back, and is said to return the dead to a state of undeath. This is an incredibly powerful herb, and is likely to only exist in the hands of powerful lords and kings.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Legendary',
          },
          {
            location: 'Mountains',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Fire Lichen',
        description:
          'Orange white lichen that growths in warm underground areas. Can be made into a spicy paste or fiercely hot dwarven whiskey.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Firethorn',
        description:
          "Often called the Sea Rose, this flower exists almost entirely on the Island of the Firethorns in the northern Sorlorn Sea. The flower grows in such numbers that it gives the lower areas of the island a reddish hue. At night the island faintly glows from a distance due to a natural property of the flowers, and many that transverse the Great Sea know of the island's distant glow. The island is generally uninhabited because the Firethorns are poisonous (DC 15 Cons. Save while standing within 45 feet of the flowers and their pollen, on a failed save take 4d8 poison damage and be poisoned for 1d6 hours), with the exception of the fishing village of Safe Cove, and the city of Hawa. Inhabitants of both settlements are well aware of the toxicity of the flowers, and often give them a wide berth.",
        locations: [
          {
            location: 'Coastal',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: "Fjor'da",
        description:
          "Growing only in very wet soil, this small, ivy-like ground vine will produce white flowers in the springtime that produce a fine pollen that causes the inhabitants of nearby towns to cover their faces for a week after the Spring Equinox. When inhaled, the character will forget everything he has experienced during the last 24 hours. There is a 10% chance he will remember everything when confronted with facts about those 24 hours. After three days the amnesia becomes permanent and there is no hope of recovery, and this day will be forever lost in the person's mind.",
        locations: [
          {
            location: 'Rivers',
            rarity: 'Uncommon',
          },
          {
            location: 'Swamps',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Flame Clove',
        description:
          "Garlic with essence of the elemental plane of fire. Mild poison (DC 13 Constitution Save). If boiled in salt water, crushed and added to food it keep s the food hot for 1d4 days without drying it out. Adding it to alchemist's fire doubles the fire damage and doubles the duration. It matures in 5 weeks and is viable for 3 week following.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Flame Petal',
        description:
          'This large flower blooms in the height of summer, unfurling large red petals, and yellow-tipped orange tendrils which sway in the faintest of winds to give the illusion that the flower is on fire. As they often grow in large clumps, at first glance one might even believe that the ground was on fire. Such flowers are sought to decorate during Summer Solstice and Midsummer celebrations in the Dalelands. Young women will wear them in their hair, and they are said to bring a bountiful crop to any that would plant them near their front doors (+3 to Nature Checks while wearing the flower in this manner).',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Fleshshiver',
        description:
          'Ten-colored mushroom that grows in the soil between the roots of tropical fruit trees. It can be mixed with mud and then added to a compress that, when applied to the head of a diseased creature, grants a +2 bonus to Constitution saves against disease for 1 day.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Fleshwort',
        description:
          'A short plant with grey stalks and olive color fluffy leaves, the Fleshwort thrives in areas where corpses lay. Often the plant will be seen on the site of battlefields, or where the dead were quickly buried. Some healers use the fibrous body of the Fleshwort to speed the healing process (During a short rest, a character may add 1d6 to the total amount of hit points recovered.)',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Flintmoss',
        description:
          "A dark grey moss, dotted with small flecks of rust-brown, Flint Moss is commonly found in area of thermal activity or bright and constant sunlight. The moss requires fire to spread its seeds, and will ignite from even the smallest sparks. A 3' cube of Flint Moss will burn for 3 to 4 hours and put off flame comparable to a normal sized camp fire. The moss growing on piles of rubble or loose rock is the most dangerous as friction from shifting stones can cause the rust-colored flecks to produce sparks, turning what was once a moss-covered mound of debris into a raging inferno. Application of Flintmoss to a bludgeoning weapon will add +3 fire damage to any successful attacks made with the weapon for 1d6 hours after application.",
        locations: [
          {
            location: 'Rivers',
            rarity: 'Rare',
          },
          {
            location: 'Mountains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Floure-du-luce (Blue Flag)',
        description:
          'It has broad and flat leaves shaped rather like a sword. The flowers are purplish blue and the roots which tend to stretch themselves along the surface of the ground are reddish brown on the outside. The root must be mashed and boiled in water and left to stand for at least twenty days before drinking. This herb removes bruises and other external blemishes from a body very quickly (within 1d4 hours).',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Footleaf',
        description:
          'This 30-cm high plant has 3 thick, fleshy leaves, dark green and covered with soft hairs. The leaves form a rosette, lying on the ground, and form the actual plant. The light green blades that account for its height are actually sheathes from which flower stalks grow during the summer. From each of the sheathes (there can be as many as 30 to a plant), a single flower stalk grows with tiny purple flowers. The thick leaves, which can become as large as 20 cm across, can be torn loose and put inside your boots (One leaf to a boot), enabling you to walk all day without tiring or even getting footsore, as well as adding 5 to your movement speed until the next long rest, at which point, the flower must be replaced.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Uncommon',
          },
          {
            location: 'Mountains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Fordamna',
        description:
          'Found in only one place, a small fungus/plant hybrid bush sprouted after a Lich poisoned the earth which necrotic magic. This abomination of nature is immune to most types of physical damage and seems to grow back in the same place 17 years after its destruction. Whenever the fordammar grows back in this manner, it begins to fruit a medium-sized, hard black berry with a spiky outer shell. When these berries are consumed, it will cause instantaneous, incredibly painful and irreversible death. Nothing can be done to resurrect a character that dies in this manner.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Fumitore',
        description:
          "The stems of fumitore are angular and branching, and grow to a height of about 1 foot. It has grey-green divided leaves, and small pinkish-white flowers with purple tips. This herb prevents hair growing on a character's eyelids, as is the effect of Mountain Setwall.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
          {
            location: 'Mountains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Furyax',
        description:
          "Furyax is a large, purple flower that grows from a round-fronded leafy plant in the middle of Jungles that used to house now-dead civilizations, possibly originating from sacrificial uses of this plant within those civilizations. The flowers can be dried and turns into powder which is then mixed with a strong alcohol made only from oranges. Drinking this potion causes massive hallucinations based on the character's conscience. Good-aligned characters will see beautiful and wondrous thing, while evil characters see the most foul and darkest abominations. The hallucinations last 2d4 days. Good-aligned characters must make a DC 16 Wisdom save or become addicted after their first consumption will evil-aligned characters must make a DC 18 Wisdom save vs. fear or become slightly insane from these horrific visions.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Legendary',
          },
          {
            location: 'Mountains',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Galda',
        description:
          'A yellowish tree that produces a salty fruit tasting of salt-pork. The fruit can heal for 1d4-1 hit points.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Gallowbrush',
        description:
          'This briar is red in colour with bright crimson thorns. Any mammal pricked with these thorns must make a save vs poison with a +1 bonus or fall asleep for 1d4+2 x 10 minutes. Even if they save the victim still feels drowsy. The thorns can also be brewed into a drink when mixed with water. Anyone drinking this must make a Cons. Save vs. poison with a -4 penalty or fall asleep for 1d6 hours.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Garadar',
        description:
          'A 5 to 8-foot shrub with waxy, hard leaves resembling those of a succulent. When this leaf is soaked in water, it will release a very pungent scent that will attract male ogres in a one-mile radius. The scent resembles that of a female ogre. The smell lingers for1d4 hours.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Gardenflax',
        description:
          "The brown seeds of this herb (which has deep blue flowers) if chewed remove all pain from a character's wounds. It will also prevent a character from feeling anything. He could walk through a fire and feel no pain. There is a 50% chance per hour that a character moving normally will suffer 1d4 damage, while under the influence of this herb. This occurs because the character does not notice minor bruises or scratches. It was widely believed in medieval times that if the seeds of this plant were strewn across a vampire's path the vampire would be unable to proceed further, until it had counted every seed. At the DM's discretion this may be a use for this herb in campaigns.",
        locations: [
          {
            location: 'Cities',
            rarity: 'Very Rare',
          },
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
          {
            location: 'Plains',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Gariig',
        description:
          'Gariig is a small cactus. It will restore all hit points to a wounded person if eaten within two days of being harvested.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Gefnul',
        description:
          "Gefnul will totally cure and heal the recipient if eaten within one week of harvesting. However, a 1d20 penalty roll must be made. A roll of over the recipient' intelligence will automatically KO, putting the consumer into a death save scenario, a roll of twenty will kill the recipient outright.",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Legendary',
          },
          {
            location: 'Mountains',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Giant Grass',
        description:
          "This grass is 4-8 feet tall, and there's a 4 in 6 chance that surrounding wild beasts are giant sized. Adventurers will find chewed grass in piles and clumps near beast lairs. When ingested as a paste, treat user as if under the enlarging effects of an Enlarge/Reduce spell for 1 minute. After this time, the recipient falls into a deep sleep for 2d6 hours.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Ginyak Weed',
        description: 'A',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Cities',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Glaredak',
        description:
          'A coin-sized yellow-orange flower that grows along a climbing jungle vine. These flowers can be boiled in oil to create a potion that will protect a character from blinding effects for 8 hours.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Glowvine',
        description:
          'A morning glory derivative that gives off light as a torch at night. It grows 1 ft. every 2 weeks. Flowers can be harvested and provide to same light as a candle for 1d12 hours.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: "Goat's Rue",
        description:
          "This herb will cure poison if ingested within one hour of the poisoning. Any damage already taken, including death, remains. Goat's Rue grows to about 3 feet tall. It has hollow branches and pale whitish blue flowers that hang down in spikes. The flowers must be dried before use.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Goblin Rogue',
        description:
          'Medium-sized bush with yellow-orange berries in autumn found in temperate regions. It can be made into Goblin Ink, which is waterproof.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Goblin-Trap',
        description:
          'Often found in clusters, these plants resemble brown leathery vases sitting on the ground with ragged leaves splayed out around the base where thick roots grasp the earth. The tops are open, and if one should peer inside the glint of their golden seeds can be seen in the interior. However, these plants are traps, and many explorer has come across the remains of smaller humanoids, their hands still clutching the golden seed pods. If someone is unwise enough to stick their hand within the pod, they must make a DC 15 Dexterity save or suffer 1d4 damage from the internal spines of the plant, and are then grappled. Their leathery surface has an Armor Class of 11, and to free a trapped arm 10 points of damage must be inflicted upon the plant. Ripping the plant out of the ground requires a Strength check, DC 20, and inflicts another 1d4 damage upon the trapped victim.',
        locations: [
          {
            location: 'Swamps',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Goblinberry Bush',
        description:
          "Growing in a near desolate area, the small bushes have dark green leaves that are nearly black, with silver undersides. The bushes sporadically sprout reddish-purple berries that have a strong sharp smell that often causes people to gag. Mixing the juice of the berries with a significant quantity of water and honey makes an interesting drink that is served sporadically in Evereska and Baldur's Gate. The juice can also be used as an astringent, if the patient can handle the smell.",
        locations: [
          {
            location: 'Mountains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Golden Coin Cactus',
        description:
          'This hardy plant is a large yellow disk standing on end, slightly bulging in the center, and covered with small red spines. Several ragged leaves grow from the base of the plant, and the root system of the cactus reaches deep beneath the rocky soil. The red spines contain a mild toxin which kills smaller vermin, but provides a mild anesthetic to small creatures or larger. The nomads of the Shaarmid steep the spines in hot water to make a tea to sooth sore throats and pacify infants.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Very Common',
          },
          {
            location: 'Mountains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Golden Crown',
        description:
          'The golden flowers of this small yellow-green plant may be made into a poultice that is used to stop bleeding. One successful application will normally stop minor bleeding, or staunch the flow of major bleeding until it only minor (a second application will stop the bleeding altogether). This herb is often used by midwives to staunch the flow of bleeding after birth.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Golden Desert Tree',
        description:
          'A rare desert tree, whose sap is a vital ingredient in expensive perfumes and incense. When used by a spellcaster in casting a summoning spell with a 1 round casting time, it reduces the casting time to a standard action.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Golden Lungwort',
        description:
          'Golden lungwort has large oval leaves, covered with small hairs, and small pale blotches. It grows to a height of about 1 foot, and has small bell-shaped flowers with five petals which change color from pink, to mauve to blue. Flowers of different colors are often found on the same plant. This herb heals the user of all aches and pains at the cost of -1 to all Intelligence checks for the next 1d10 hours.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Goldencup',
        description:
          'Oily yellow moss found where water collects near the bottom of rocks in the tundra. Can be chewed to induce mild euphoria, granting a +2 bonus on Wisdom saves vs fear for 30 minutes. However, upon entering combat while under the effects of goldencup, a creature must make a DC 10 Constitution save or be affected by a Frightened effect for the remaining duration.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Goldenweb',
        description:
          "A quick growing fungus that is often found spread between tree branches, it appears as a strange lattice similar to spiderwebs. Light shining through the strands causes them to subtly glow the color of gold, and the fungus has also been called 'Goblin's Greed'. While the strands of the fungus are slightly stronger than spiderwebs, they lack the stickiness that would cause them to impede or entangle creatures. The fungus works surprisingly well as an anticoagulant, and is quite absorbent. Healers often seek the fungus out when attempting to remedy injected toxins, and use of the fungus grants a +1 bonus to Wisdom (Medicine) skill checks when used in such a manner.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Grammax Creeper',
        description:
          'A flesh colored slime mold, the Grammax slowly spreads through the Underdark, digesting any organic material in its path. The mold moves slowly enough that even sleepers have no fear of being overwhelmed, although corpses that lay in the same place for days will be overcome. The Grammax also floats on water, often spreading across the surface of underground puddles and stagnant lakes, hiding the actual depths. The Grammax reacts rapidly to the presence of flame or high heat, quickly shrinking away while expelling any trapped gas. This action of the escaping gas makes an odd shrieking sound that is akin to the sound a screaming child makes. While it is a barely palatable prospect, the mold can actually be consumed as a source of food for those lost and desperate enough (at the cost of a point of exhaustion). Oddly, goblins seem to enjoy the taste of the mold, and often scrape it up to feed to their tribe.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Gravefist',
        description:
          'A pale white mushroom with five knobby protrusions, the mushroom often resembles a skeletal hand reaching upward. When the mushroom grows in clusters, it appears as if numerous corpses are attempting to reach out of the soil. The fungus predominantly grows in the Underdark, however, it has also been seen in dark basements and root cellars. Several tales of superstition follow the fungus, many believing that if it appears in rooms below your house, someone will soon die in the building. This may be partially due to the fact that the mushrooms release toxic spores that slowly inflict 4d8 poison damage over 2d8 days to people afflicted by the poison effect.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Green-Air Bramble',
        description:
          'Fast-growing creping vine that sprouts green berries. Can grow in most inhospitable climates and only needs to be in moist soil for 6 hours per week. Exposure to poison quickly kills the plant, wrinkling leaves and berries. Carrying 3 ft vine grants +2 bonus to Constitution saves against inhaled poisons, airborne diseases and nauseating effects like stinking cloud.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Grendar',
        description:
          "A small, hardy, ground-creeping vine, spreading in several dozen tendrils of no more than 18' in the harsh conditions of the tundra. Cures skin irritations and rashes in one day, itching will be subdued.",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Grim Flowers',
        description:
          "These dark violet flowers are often found at the edges of graveyards and sites of massive battles. Those that tend gravesites often call them 'Death Trumpets' for their shape, and they emit a smell similar to that of a corpse. Thus, when such flowers are noticed, they are often pulled up by the root, to remove such an unpleasant odor. However, despite their terrible odor, it is believed by followers of Kelemvor and Bane that should you die with the seeds of this plant in your possession, your spirit will find an easier path to the afterlife. Thus, many keep the seeds of such a flower in a cloth bag close to their chest. Unfortunately for others, this means that the flowers often sprout from the corpse several days after the death of such individuals.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Cities',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Guardseye',
        description:
          'This 40-cm high perennial has smooth, dark blue leaves and a woody stem. It has white, cuplike flowers, with purple flecks on the inside. In autumn, the plant dies except for a thick root than can be up to 50 cm long, but even dead, it does not shed its leaves. When cooked in water, the resulting tea will grant the drinker the ability to detect all life forms within 500 m. This includes hidden, invisible, phased, ethereal and similarly affected creatures. The effect last for fully 6 hours.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Guklulla',
        description:
          "Growing in the swamps, the plant appears to be little more than a pair of large, broad leaves floating on the surface of the stagnant water. During warmer months, a large yellow flower blossoms in the midst of the two leaves. Hidden beneath the surface, the plant has an extensive root system that reaches far down into the muck, a massive tangle that catches other debris that is carried along by the slow current. Various species of fish and snakes lay their eggs in the tangle of roots. Various orc tribes harvest the Guklulla for the roots, pulling the plants out of the muck, cutting off sections of the roots and throwing them back into the swamp to be harvested again in the future. Grinding the root into a paste and applying it to wounds provides not only accelerated healing (+4 when using hit dice during a short rest. If the recipient of the healing is an orc or half-orc, they receive an addit'ional 1d4 hit points.), but also numbs the affected area.",
        locations: [
          {
            location: 'Swamps',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Gulthias Tree',
        description:
          "A severely evil tree that came to be when a vampire was staked to the ground with a stake that was still green and took root. Undead typically flock to the singular tree located somewhere in a dark corner of the largest forest of Faerun, and seem to gain some form of power from it. (Can be used as a storypoint or worldbuilder for DM's).",
        locations: [
          {
            location: 'Forests',
            rarity: 'Legendary',
          },
          {
            location: 'Jungles',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Gylvir',
        description:
          'This is an algae. When eaten it allows a person to breathe underwater (and only underwater) for a period of four hours.',
        locations: [
          {
            location: 'Oceans',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Gyumin Beans',
        description:
          'A small plant that grows close to the ground, the stalks are a mottled green color, and the soft oval leaves grow in small clumps. During harvest time, the plants are laden with several long pods filled with up to a dozen light brown beans. Farmers often grow the beans alongside rows of corn, as the plants seem to complement one another. The beans are often either eaten cooked, or ground into a fine paste and eaten with bread. Several restaurants and taverns across Faerun are known for their particular methods of preparing Gyumin Paste.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Haella',
        description:
          'Growing in clumps, these tall purple flowers are often planted in tranquil gardens and are commonly seen on gently rolling fields. The stalks bear symmetrical pairs of long tapered leaves with purple veins. Farmers dislike the plants because they tend to choke out food crops, such as corn. The flowers emit a subtle and sweet fragrance which not only smells nice, but also is a repellant to certain predatory insects, such as mosquitoes and dragonflies. Those that can afford to pay for it often rub Haella Fragrance on their unprotected skin during warmer months to repel such vermin (-5 to rolls for initiative for Insectoids).',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
          {
            location: 'Cities',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Halcyon Crocus',
        description:
          'In the highland meadows of the Dalelands grows a pale white-silver crocus. By starlight, nectar can be harvested from its simple bloom and dried into snuff that engulfs the user in bittersweet recollections of yore. With each dose of the Halcyon Snuff the user remembers a spell forgotten, effectively allowing him or her to cast it again without expending a spell slot. However, other memories linger uninvited to forever haunt and burden the user of this drug. Each dose inflicts 2d8 psychic damage after the initial effect.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Halfling Thistle',
        description:
          'Small hardy thistle with a violet flower that grows in all temperature areas, especially highlands. It can be made into Shinewater, which removes all rust and corrosion from metal objects left to soak in it overnight. One dose de-rusts a medium-sized metal weapon.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
          {
            location: 'Forests',
            rarity: 'Rare',
          },
          {
            location: 'Mountains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Hands of Laretha',
        description:
          "Stems of bright green hold jagged leaves that grow in clusters of three. The plant grows delicate yellow flowers that smell pleasant, with the smell often drift'ing in the breeze on warm summer nights. The golden flowers that blossom from the plant grow to resemble a pair of hands pressed together. A common belief is that the flower resembled the hands of Laretha, a young cleric of Tymora, while she prayed to the gods to save her from misfortune at the hands of a horde of bandits. Her prayers were answered by the arrival of a group of adventurers. Afterward the flowers appeared near her shrine, a sign that the goddess was looking over her. Commonly used by paladins and clerics, the flowers grant a +3 to any religion checks when worn as a crown or behind the ear.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
          {
            location: 'Plains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Hangman Tree',
        description:
          'A deciduous tree named for the noose-like ropy appendages that hang down from the branches, the trees are known to entrap the unwary. Their shallow roots and sparse leaves require the tree to seek nutrit­ion through being carnivorous. The main body of the trunk has a hollow tube containing a digest­ive acid. The ropy appendages drag trapped prey upward and drops them inside the opening. The opening is surrounded by a number of downward facing spines which make escape difficult. Due to the shallow roots, the trees may move at a glacial pace, allowing most prey to easily outrun them. However, the trees rely upon a perfume their leaves emit that causes hallucinat­ions to lure poten­tial vict­ims closer. Upon an encounter, PC’s must make a DC 14 Wisdom Save or be lured in to the tree’s appendages. The character must then make a DC 15 Strength or Dexterity save to avoid taking 8d6 acid damage. The tree can be attacked as well.',
        statblock:
          'AC: 12 \nHit Points: 172 (15d12+80) \nSpeed: 1 ft. \nSTR: 20 DEX: 6 CON: 20 INT: 3 WIS: 6 CHA: 4 \nDamage Resistance: Bludgeoning, piercing \nDamage Vulnerabilities: Fire \nCondition Immunities: Blinded, deafened, frightened, exhaustion \nSenses: Blindsight 90 ft., passive  8 \nCR: 8 \nActions: \n\tMultiattack: The hangman tree may make three constrict attacks per turn. \n\tConstrict: Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 11 (1d4+5) bludgeoning damage, and a Large or smaller target is grappled (escape DC 16).',
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: ['creature', 'alchemy'],
      },
      {
        name: "Hara'dan",
        description:
          'Insectoids must make a DC 12 Cons. Save to get any closer than 15 feet to the recipient of the green paste.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: "Hara'den",
        description:
          'A feathery, drought-resistant shrub that produces small yellow flowers after rainfall. Grinding or mashing the leaves into a paste releases a very pungent smell that attracts insects for 2d4 hours. Insectoids gain advantage on rolls to hit against the target.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: "Hare's Ear",
        description:
          'A small, leafy plant growing to approximately 1 foot or shorter, with large lobed leaves resembling the erect ears of a hare. This herb cures skin diseases.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Harfy',
        description:
          'A small brown, woody reed with symmetrical pairs of small ivy shaped leaves along the bottom of the reed. The resin of this herb must be applied to a bleeding wound. It will immediately stop any bleeding.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Very Common',
          },
          {
            location: 'Coastal',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: "Harlequin's Harp",
        description:
          "A multi-colored flower ranging between yellow and purple and everywhere in between with several strands of fiber attached to the petals across the empty space in the center of the flower. A few decades ago, an herbalist found that strumming the fibers would hold a tune, and since then, the flowers have become a common gift for friends and loved ones. Some talented herbalists have learned to breed the Harlequin's Harps in a way that the fibers can be tuned to specific notes for personalized gifts.",
        locations: [
          {
            location: 'Coastal',
            rarity: 'Very Common',
          },
          {
            location: 'Cities',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Harpy Nest',
        description:
          "The mottled trunk of these trees are often seen growing in rocky soil. The upper limbs of the tree curve inward upon the trunk, and become a large tangled mass. Various flying creatures, predominantly harpies, often cult'ivate the top of the tree, tearing away enough limbs in the center to form a protect'ive nest. From the ground it is difficult to not'ice any creatures dwelling among the tangles, allowing cunning creatures to dive down and ambush their prey. The massive roots of the tree, while edible, are tough and require several hours of soaking in boiling water. Once prepared properly, the taste is said to be similar to salted potatoes.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: "Harrada Leaf (Barbarian's Boon)",
        description:
          "A green, leafy plant whose leaves are tinger with a deep purple. The leaves are commonly dried and smoked or cultivated and harvested for this purpose by criminal organizations. Although highly addictive, Harrada Leaf is used to grant a huge boon to a person's physical strength at the cost of intelligence and common sense. After consumption, Harrada Leaf will grant a +4 bonus to the Strength skill at the cost of -3 to both Wisdom and Intelligence for a period of 1d4-1 hours. After this period is up (with the exception of rolling a 1-1) the user will have to make a DC 18 Cons. Save or be poisoned by the drug's after-effects, which will instill a -3 penalty to strength and a -1 penalty to both Wisdom and Intelligence.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: "Hart's Crown",
        description:
          'This odd bush grows in deep forests, where men often fear to tread because of dark and wild fey creatures. The bush grows strong curved branches that resemble the antlers of a deer, and in their center, they grow a single purple flower. Legend has it that the plant was originally created to help combat the Unseelie fey, ages ago. However, through trickery and guile, the dark fey managed to destroy many of the plants not in their possession, or not hidden deep within their realms. The flower can be consumed for two main purposes: often sought out by those undertaking a vow of celibacy, consumption of the flower reduces libido for 2d6 days. In addition, the consumption of the flower hides the recipient from being tracked by fey for the same period of time.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Hate Gartlet',
        description:
          "A bright, crimson-red flower atop an impossibly thin green stalk. Typically blooming in late spring, or early summer, the flower then begins to change color with the day's progress, going from red to midnight blue as it becomes night. Preparation of the flower as a tea will allow the recipient to stay awake for 3 days at a time, being able to function normally and accomplish minor tasks during a long rest. After these three days, the recipient will then fall into a magical sleep resembling the spell Feign Death. The target will wake up after 8 hours, but for all intents and purposes will look dead.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Hathil',
        description:
          'A dark green and red-veined leafy, floating plant native to the Shadow Marsh, which when used as a consumed by a spellcaster, has a 40% chance of increasing the DC of a cast spell by 1.',
        locations: [
          {
            location: 'Swamps',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Hawkweed',
        description:
          'This herb increases a character eyesight for 1d4 hours. They can see twice as far, granting +3 on perception checks involving sight, and when in ballistic combat, all ranges are treated as if 20 feet less. Hawkweed has oval leaves, covered with small hairs on the underside, and green on the top. These leaves surround the plant at the base of the stem, and small yellow flowers tinged with red at the tips.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Healing Apple Tree',
        description:
          'A magically bred medium-sized apple tree that bears red fruits that heal like Goodberries (eating an apple restores 1 hit point and counts as a full meal). A tree produces 100 apples per season.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Healwell',
        description:
          'A common enough herb to make it into most gardens, healwell is a small flowering plant with bright yellow flowers. Its pale green leaves secrete an oil that can be rubbed on small injuries (can be used to heal for injuries that have caused small amounts of damage, less than 3 hit points at a time).',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Cities',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Helmthorne',
        description:
          'A vine-like shrub, often growing in remote and desolate locations, the shrub has dark green leaves, and sprouts indigo colored berries. The shrub is named due to long black thorns that protect the plant from various foraging animals. The berries are often harvested to be eaten, or can be fermented to make Helmthorn Wine. On occasion a plant will produce red berries, which are seen as a symbol of good luck, and make a slightly sweeter vintage of wine. The wine is considered sacred to many practicing clerics (capable of restoring an expended spell slot for a cleric that consumes the wine) and the berries can be affected by the spell Goodberry, and will instead restore 2 hit points per berry and last for an additional day.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Henbane',
        description:
          'This herb will reduce the effects of poison weapons and consumed poison, but only if taken before the weapon strikes or the poison is consumed. In the case of non-fatal poisons, the effect is completely nullified, but in the case of fatal poisons, the only benefit is a +3 to Saving Throws. Henbane has large, thick, soft woolly leaves, and thick stalks about 2 to 3 feet tall. It has hollow pale-yellow flowers at the top of the stalk. Either the seed or the flowers must be dried and then eaten. The effect last 1d8 hours.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Hidden Hibiscus',
        description:
          "A large, woody, flowering shrub, the hidden hibiscus grows from 6' to 8' high, and as much as 10' wide. The blooms of the hibiscus are large (easily the size of a human hand), plentiful, and many colored. Bloom colors are typically red with yellow ribs, or pink with dark red ribs, but some sages claim there are thousands of different color combinations and variations. If a Hidden Hibiscus is threatened, or detects rapid movement nearby, any blooms on the bush immediately change their color to drab greens and browns, and the entire plant appears to wilt and wither. Skilled alchemists use the roots of the Hidden Hibiscus to amplify their creations that aid in natural camouflage (adding wilted hidden hibiscus to armor will negate any stealth penalties that the armor normally has), but the blooms of the hibiscus are its true prize as they can be used to dramatically increase both physical and mental speed for short periods of time (+2 bonus to Dexterity and Intelligence stats for 1d4+1 hours). Only brightly colored blooms can be used in these speed-increasing concoctions, and once a Hidden Hibiscus changes the color of one of its blooms, they never change back.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Hiexel',
        description:
          "This tree has silvery-green bark covering a sparse collec'tion of branches which curve upward to support vibrantly green leaves which turn dark red in autumn. The wood is an odd hue of green, and unfortunately not dense enough to be useful in construc'tion. However, burning the wood creates a large quant'ity of smoke, which is often used to smoke meat or to create signal fires (or to create clouds of smoke that can be used for escape and distraction). The bark is useful after rendering it down to create a thick green paste which is often sought after to seal buildings against the cold winds of winter.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Hiljirat Pepper',
        description:
          "A small plant that has many branches, each which end in a single triangular leaf, the peppers that also grow on the plant are much sought after for their spice. The peppers are either dried or ground into powder after being picked, allowing them to be shipped afar with little chance of spoilage. The wealthy of the cit'ies of the Sword Coast enjoy the taste of the peppers, and several sailing merchants pay exorbitant amounts to have the peppers harvested and shipped.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Hoggle Beans',
        description:
          "A single leafy stalk with a tough exterior that grows in gentle rolling fields of the Dalelands, the plant produces numerous pods upon reaching maturity. Within each pod are small pink beans, each one almost perfectly spherical. Most large herbivores, such as cattle and goats, avoid the plant, as it has a detrimental effect. Herbalists and healers often seek the plant out because the beans are a strong laxat'ive, requiring a DC 15 Cons'itut'ion saving throw after being ingested to avoid the unpleasant effects.",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Horehound',
        description:
          "This plant has angular greyish stems and grows to a height of three feet. It has oval shaped tooth edged, ash green leaves. It has small creamy white flowers which group at the base of the leaves. This herb will cause the recipient to vomit up any poison in their system. It is effective only against ingested poisons. The person will be incapacitated by nausea for 1-3 days. In the case of an `instant death' poison, the person can be saved if the herb is successfully administered within one round, but they will be incapacitated for the full three-day period.",
        locations: [
          {
            location: 'Rivers',
            rarity: 'Very Common',
          },
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Horseweed',
        description:
          'This 25-cm high plant has many broad, double sawed leaves growing in a rosette. It grows large, yellow composite flowers, which will quickly grow hairy seeds that will fly far on the wind. The plant often has flowers and seed simultaneously. If a generous amount of the leaves is fed to a horse or similar creature, it will be able to travel all day without tiring, even if moving at a gallop.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Hydrathistle',
        description:
          'named for its appearance, this three-pronged blue and black flower is often found in bright environments with sandy soil. When used alone, the thistle has no real beneficial effects, but when soaked in flower nectar, the flower can be eaten to allow the user to breathe above and below water for up to 2 hours.',
        locations: [
          {
            location: 'Coastal',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Hyperia',
        description:
          'A small, purple, button fungus that when consumed in any form, acts as a strong aphrodisiac. As soon as the fungus is swallowed, the recipient will fall in love with the first person they see (make a DC 18 Wisdom Save or fall in love).',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Rare',
          },
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Iazutl',
        description:
          "Growing in clusters, the flower has a long stalk, which has a single oval leaf at the very top of the plant. The leaf points toward the rising sun, and blows in anything more than a light breeze. During warmer months, the plant blossoms numerous small crimson flowers. Those that venerate Kiltzi speak tales of the Iazutl flower. One tale speaks of the plant growing singularly, and without flowers, and when Kiltzi not'iced the plant was all alone, she wept. Her tears caused several similar plants to grow in the area, and as an expression of their love for her, they sprouted an abundance of flowers. Lovers often gift the flowers to one another, as a sign of their affect'ion. The flowers are also typically presented to the bride by the groom on the night before the wedding in Sword Coast wedding ceremonies.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Ice Lotus',
        description:
          'Solitary, translucent blue-white flower found in cold environments that can be made into Icewalker tincture, which is a blue liquid that grants the Ice Walking ability (slippery and rough terrain like ice or deep snow will be treated as regular terrain) for 1d4 hours.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Iceflower',
        description:
          "A short plant, the stalk bears a number of feathery leaves, and a single flower blooms, bearing shades of blue. The plant is only seen in areas of abundant snow, and oddly seems to thrive where other plants would perish. The plant is only seen during the summer months, when there is considerable sunlight, and in winter months it withers and dies. Beneath the surface of the snow, the iceflower has an extensive root system that quickly grows. The roots are durable enough that some of the northern tribes will dig up the roots to serve as a founda'tion for a roof over small circular huts. In addition, some nomadic tribes of the Dalelands have found that by placing iceflower roots under the armor, they will be immune to overheating and gain +1 AC.",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Inari',
        description:
          "A green and brown speckled succulent that bears a striking resemblance to an octopus stranded in a desert. Can be mashed and combined with water or alcohol to create a potion that cures fevers and headaches and treats some symptoms of other illnesses (like nausea or sneezing, up to DM's discretion).",
        locations: [
          {
            location: 'Deserts',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Ipt (Roanwood)',
        description:
          'Trees, commonly used in wand and magestaff construction, that grow upwards of 100 feet tall.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Iraster',
        description:
          'This ground plant grows in neat, almost perfectly cubic shrubs about 2 ft. by 2 ft. wide. Commonly used as a recreational drug by bored goblins, the small white-blue berries this shrub produces will cause a surge of natural magical energy to enter the recipient. Roll 1d100 on the Wild Magic Surge table.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Ironhard',
        description:
          'This 2-foot-high plant has dark blue leaves with a thick white hair growth on the underside. It grows all summer and the first half of autumn, and has many small yellow 6 leaved flowers. The plant has a milky white sap, which can be rubbed onto the skin, hardening it and granting a +1 AC bonus for one hour.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Ironvine',
        description:
          'A type of Underdark vine that is as hard as iron. Always found interwoven into a thick curtain that blocks passage in underground caves and passageways.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Jabberweed',
        description:
          'Tenacious and ugly root-plant native to jungle environs that looks like a pocked, multi-digit skeletal hand with lots of holes in it that cause a low missing sound audible to 100 ft (DC 15 listen to notice sound and direction) that imposes a -4 penalty to other listen checks (for the party and against the party). If kept wrapped in moist cloth it survives for 1 week, but DC 18 Nature check can keep it alive for another week.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Jaffray',
        description:
          'A clove-like herb that is normally ground up and sprinkled into other dishes or drinks as flavoring, Jaffray acts as a mild aphrodisiac, increasing sexual interest and general sensitivity to the surroundings. Face flushes, pupils dilate, breathing quickens, and skin becomes preternaturally sensitive. The herb has a mildly cinnamon-like flavor and its potency is not affected by being cooked. The herb is also sometimes used to counteract suspected poisoning, since it increases resistance to poison yet is so common as to be inoffensive if added to a meal. (-2 to Wisdom checks, +2 to Constitution Saves, +1 to Persuasion checks, causes mild, pleasant sense of intoxication. Effects last 1d4 hours.)',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Jungles',
            rarity: 'Common',
          },
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Jalap',
        description:
          "A light violet vine that grows around trees, and can often be found amidst ruins. The vine produces large, heart shaped petals, and purple flowers with five petals. Young women often pick the flowers to wear in their hair, and several religious ceremonies require a carpet of jalap flowers. Shaman often use a poult'ice made of ground jalap to draw the venom out of venomous snake bites. Applica'tion of the poult'ice grants an addit'ional saving throw against the effects of snake venom.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Jelly Moss (Ogre Snot)',
        description:
          "It is said that when a representative of the Martel Company brought the first samples of Jelly Moss back to Banuvo's College of Mysteries, it nearly caused a riot among the academics. The resident sages were unable to conclusively determine if this clump of grayish-purple tube-like structures, smelling a bit like rotten pears was a plant or a fungus. It was known that Jelly Moss, when crushed, becomes very messy and sticky, but until an unlucky professor sat a small sample of Jelly Moss that'd been left on his chair, no one had realized this goo would create an almost instant, permanent, bond of incredible strength with wood. The battle of classification rapidly transformed into a full-blown war between the Blacksmith's Guild and the Carpenters over the future of nails.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Jungles',
            rarity: 'Common',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Jinab',
        description:
          'The dark chocolate-brown bark of this small fast-growing tree, may be eaten in order to allow a person to remain awake for one whole week, without the need for sleep. At the end of this period, they will collapse, absolutely exhausted for four days, and will capable of only half movement for a further week after that.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Jojopojo',
        description:
          'The leaf of this pale blue-green, fuzzy herb is commonly applied to frostbite. If applied within 3 turns of taking frost damage, proper application of the herb will cure 2d6 points of frost damage.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Juniper',
        description:
          "The Juniper tree can grow up to ten feet in height. It is an evergreen, which has prickly stiff foliage. The berries appear in early summer, but take three years to ripen to the stage where they are useful. Unripe berries are green, ripe ones are bluish-black in colour. Because of this rather long period of ripening, it is wise to never denude a tree of berries. A normal sized tree will have between 100 and 200 ripe berries. 15 of these berries should be crushed and mixed with boiling water. When the liquid has cooled, the infusion should then be drunk in order to relieve status effects temporarily (3d4 hours). This liquid will only keep for a month under normal conditions, but can be mixed with an alcoholic spirit to increase its lifespan indefinitely. According to some gipsy traditions, a sprig of juniper kept in a house would protect the inhabitants from vampire attacks. This may actually work at the DM's discretion.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Cities',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Juxi Root',
        description:
          'A lumpy, tuber like root, that some swear grows to resemble a pig, Juxi Root is prized by the culinarily conscious. Eaten raw, this tuber has a crisp, sweet flavor but chefs the world over dry it and grind it into a fine powder used to spice and flavor foods, much like cinnamon. Juxi Root grows bright red, trumpet shaped flowers, and can be found in abundance throughout the Swordfish Islands.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Juzam',
        description:
          'A hardy desert cactus that can grow to heights of up to 15 feet. Around the base of the cactus, a ring of pink flowers grows year-round, with flowers only growing back after a full year without rain. These flowers turn into a small, hard, pink fruit that can be harvested (only 1 harvested from a single plant) and juiced to yield a potion that heals for 3d6+3 hit points.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: "Kae'la",
        description:
          'A 2-foot tall ground plant with a woody stem and large, waxy leaves. The leaves can be ground and turned into a water-soluble powder that allows user to remain awake and alert for 24 hours without sleep. Repeated usage after 2 days will increase the chances of collapse into a coma by 20%. After collapsing, the character must sleep for at least 2 days per day of sleeplessness.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
          {
            location: 'Forests',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: "Kaitlin's Weed",
        description:
          "A short leafy stalk that grows fine red hairs along the prominent bud, it is often mistaken for the taller Dragon's Breath. Those well versed in herbalism also know that the weed can be used to create a balm which soothes sunburn, and helps alleviate the pain from other burns (if applied within 2 turns of taking fire damage, capable of healing 2d4 fire damage). Many seeking to traverse the desert of Netheril often procure quan'it'ies of the balm before sett'ing out on their journeys, and the Bedine tribes often make use of the soothing qualit'ies of the weed.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Kanishta',
        description:
          "A short plant that grows in tendrils across the ground sprout'ing broad fluffy leaves, the Kanishta thrives in the cold environment. Growing beneath the ground is a thick, dark-colored root. Although it is extremely bitter tas'ting, chewing on the root provides temporary relief from the cold weather. Those that chew it express a feeling of warmth passing through their body, and a sense of renewed strength (resistance to cold/frost damage, and + to Str. Checks for the next 1d6 hours).",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Karat',
        description:
          "A flowering bramble bush that produces large red blooms with large amounts of a sweet, fragrant nectar and large black seeds inside, attached to long strands of silk that get entangled in the feathers or fur of the plant's pollinators. Swallowing these seeds will prevent sea sickness for one week.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
          {
            location: 'Coastal',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Karcatta Brambles',
        description:
          "Growing in deep ravines and shadowy places of the desert, the brambles grow along the ground, rarely achieving waist height. The stems are covered in long, spiny thorns, and the plant grows wide leaves close to the ground. In the cooler months the plant blossoms with flowers of various colors. The leaves, once dried, are often smoked by nomadic tribes during religious rituals. The dried leaves are rolled together and lit, or used as incense. Those that inhale the smoke have auditory hallucina'tions, often of imperceptible whispers, although some are capable of discerning what is being said and declare that it is the voice of the divine giving them direct'ions.",
        locations: [
          {
            location: 'Deserts',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Kathkusa',
        description:
          "This plant is found only in the most inhospitable regions. When a leaf of the plant is eaten, it will (if used successfully) raise a person's strength +2 (or 20 percentage points in the case of exceptional strength) for 1d10 rounds. However, if the nature check is failed by more than three, the plant was prepared incorrectly, and the person will collapse into unconsciousness for one hour.",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Rare',
          },
          {
            location: 'Mountains',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Kelventari',
        description:
          'If the crushed Kelventari berries are applied to a burn within one turn on its infliction it will heal 1d4 quarters of all damage caused by the burn, no matter how much damage was taken.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Kieros',
        description:
          'A small, purple, ground-cover herb native to the understory of forests that are fully blocked from the light, whose leaves can be used as a basis for necromancy school magic, and has a 40% chance of increasing the DC of a spell by +2.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Kilmakur',
        description:
          'The roots of this plant must be brewed over a low fire for one week, and the resulting distillation drunk. If used successfully, the recipient will gain a bonus of +2 to all saving throws versus fire based attacks for 1d10 hours.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Kingsfruit',
        description:
          'The bark of this tree is smooth, and a rich brown in color while the soft leaves are oval shaped and grow in small clusters. During the warmer months, small violet flowers grow from the tree. During the autumn months, the tree produces a dark brown fruit with a tough exterior. The fruit has an extremely hard rind, and require a blow from a hammer to open. Striking either end of the fruit causes the rind to cleanly split into six equal parts. The inside of the fruit is a shade of golden yellow, and is quite sweet. Eating the fruit restores hit points equal to two of your hit dice and restores any expended hit dice from short rests.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Kinuka Tree',
        description:
          "The twist'ing trunk spawns many long branches that reach out to provide a canopy. During most of the year the tree bears a multitude of feathery red leaves that turn purple in the fall. In the spring the tree is punctuated by small clusters of white flowers. The flowers are said to carry luck with them, and many young women hoping to become brides wear them in their hair.",
        locations: [
          {
            location: 'Swamps',
            rarity: 'Very Common',
          },
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Kiss of Discord (Lusiri Blossom)',
        description:
          'Herb with dull red leaves that resemble lips. Ingestion causes 1d4 hours of hallucinations and the feeling that you must now go on a spirit quest. You feel pulled toward a far-off destination.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Klagul',
        description:
          'Resembling a small tree, growing no more than 2 feet tall, the springtime buds of this plant must be boiled for a day and then eaten. After boiling they will keep for six weeks. When eaten, they will if successful give the recipient truesight for six hours.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Korogg',
        description:
          "Korogg is a rare underdark fungus that typically grows on the corpses of dead miners and dwarves who aren't properly buried. Black, bulbous bodies with fine black mycelia produce a fungal fruit called Korogg Pods, which can then be reduced to their juice and distilled. This rich liquor is sought after for its taste and smell. When a character encounters Korogg Liquor, they must make a DC 14 Wisdom save or imbibe the liquid. The liquor quells freethinking: no person who drinks it need make an Investigation check while under its influence for the duration of a day, as the result will incur a -8 penalty since they can't think of anything their investigation might mean, and the consumer takes a -1d6 penalty to wisdom checks after consumption until the next long rest.",
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Krakaem Pods',
        description:
          "Growing off of tree branches, at first inspect'ion this fungus appears to be the cocoon of an insect. The fungus is intrusive, sending tendrils into the tree branches and stealing water reserves. Sporadically another pod will emerge from the tree branch, swell to the size of a human fist, and then burst, sending a cloud of black spores floa'ting on the wind. The spores are a severe irritant and may even cause temporary blindness if a large mass of spores get into the eyes of a creature (DC 12 Constitution Save if within 15 feet of the tree). The pods are also sought after for food, as frying them in oil and serving them with fish is a delicacy served in Waterdeep.",
        locations: [
          {
            location: 'Swamps',
            rarity: 'Common',
          },
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Kylathar (Changeberry)',
        description:
          'Anyone who eats the yellow, soft, plum sized fruits instantly has two random stats exchanged; Strength with Constitution, Wisdom with Dexterity; anything is possible (the DM should determine which statistics are exchanged). There is no saving throw, and no cure (no easy one anyway; if you as DM want one, make it up). Eating more of the berries will simply cause more stats to be randomly exchanged. Short of magical storage, the fruits will spoil and rot within 2 days after plucking. The bush itself grows about 2 meters high, with long, dusty green leaves, which are slightly sawed. The flowers grow in groups of 4 to 8, and are yellowish white with orange edges. The flowers grow in late spring, the fruits are ripe in autumn.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Laishaberries (Fruit of Silence)',
        description:
          'Laishaberries grow on dark green, knee-high bushes. The leaves of the bushes are hard and waxy, and stay on long into autumn, sometimes even into winter. Concealed under the leaves, the red, cherry sized berries grow. In spring and early summer, the bush grows small, fragrant, wax blue flowers. The berries, which are equally fragrant, begin as hard white fruits, turning soft, red, and juicy as they ripen. The berries taste quite bland themselves, although they can be used to add a special taste to all kinds of jellies. When ripe, the berries can be eaten raw, and will each heal 2 hp of damage, or speed the recovery from most diseases. However, they will also render the eater mute for 20 minutes for each berry eaten. Also, if more than 5 or 6 berries are eaten at a time, a saving throw vs poison is required to avoid severe stomach cramps. A jelly made from the berries themselves loses both the healing and silencing powers (and the danger of cramps) of the fresh berries, but the curative effects for most diseases is doubled; fresh berries reduce the recovery time by one day for each berry eaten, the jelly halves the time.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Lakeleaf',
        description:
          'Parsley like herb descended from plants growing on the shores of large rivers and oceans. If crushed and rubbed onto meat, that meat never dries out regardless of how overcooked. If used as a component for casting Gentle Repose, it doubles the duration (does not stack with extend spell). Matures in 14 weeks and remains viable for 5 weeks after.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Uncommon',
          },
          {
            location: 'Coastal',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Land Caltrops',
        description:
          "If applied to a venomous bite within one turn, it will draw out the poison. Some very venomous snakes give bites that are incurable by this method, and so the herb has no effect against `instant death' poisons. It may (at the GMs discretion) provide protection against other, non- fatal animal poisons.)",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Larnurma',
        description:
          "This tree has round purple fruit, which are about the size and consistency of plums. When eaten this fruit will heal 2 hp per fruit. These fruits cannot be dried and will rot within two weeks of picking. However, the juice of three fruits can be mixed with olive (or other vegetable) oil, and left to stand for a week. This oil has an almost unlimited life. Rubbing this oil into the recipient's skin will ease muscle pains, and also restore 1d4 hit points.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Lashar',
        description:
          'A grey, slightly slimy lichen that grows on rocks in the middle of streams. When ground up into a slurry and consumed, it will slow the effects of poison for 2 hours. After that the poison will resolve normally, unless another potion is drunk. The potion is very repulsive, and a DC 14 Constitution saving throw is needed to see if the imbiber can hold it down.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Laspar',
        description:
          "A squat evergreen tree with dusty green bark, and olive-green needles that grow in clusters, most people avoided burning the wood of the tree. Sett'ing the wood ablaze resulted in a large number of sparks, which potent'ially could set houses ablaze, due to the high amount of pitch contained within the wood. The needles, which grow in 'shags' at the end of each branch, are often used in torches. The needles are also often burned simply for the deep piney aroma they provide.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Latimer Orchid',
        description:
          "A yellow-orange orchid flower commonly farmed and sold illegally. The pollen of the flower can be turns into a sticky, rich-smelling powder that can be applied to the gums and tongue. When consumed, it brings about a mild hallucinatory state, wherein the recipient's capacity for visualization and imagination are increased. The powder is used recreationally by many, including by those of an artistic bent, but it is members of the Illusion school who benefit most from its effects.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Laumspur',
        description:
          "This is a green plant with small red flower, which are renowned for their healing properties. These flowers can be eaten fresh or dried for later use. If not dried they will become useless within 1 week. The flowers can also be brewed over a very low heat in fresh water to produce a `potion', which can be drunk for its healing effect. When consumed, the herb will, on a successful herbalism check, heals 6 damage with fresh leaves, 4 hit points using dry leaves, and 6 - 8 hit points using the brew.",
        locations: [
          {
            location: 'Mountains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Lavender Ragweed',
        description:
          'A bushy, purple plant that blooms throughout spring and summer. A magical cross between lavender and ragweed, the plant is used commonly as a room freshener, but is also highly allegenic to many people.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: "Leopard's Bane",
        description:
          'This is a poison that kills animals (but not monsters) that eat it, but has no effect on humanoids, demi-humans or humans.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Lesser Centaury',
        description:
          'This plant has rosy-pink flowers, which are splayed out like a five-pointed star. These flowers if eaten within one day of being picked will cause the recipient to vomit up any ingested poison within their body. The person will remain very weak for 1d3 days, can only move with great difficulty and is totally unable to perform any useful actions.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Lichbriar',
        description:
          'Bougainvillea-looking pants that clings to any surface and grows up to 50-ft in ideal conditions. It has poisonous thorns (DC 14 Constitution Save or take -1 to Str. and -1 to Dex. until cured) and subsists by growing roots into living creatures and slowly draining their hit points and experience until they die (If a character were to fall unconscious by any means within 5 feet of Lichbriar, they must then make a DC 14 Str. Save to get out of the rapidly growing briars after they awaken. -5 hit points for every hour unconscious).',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Light of Mystra',
        description:
          "Small mushrooms with thick heads, the skin is a pale blue color, and the head is often covered in small off-color bumps. In the darkness, the mushrooms glow, attract'ing creatures to consume the fungus. Within the bumps of the cap, the mushroom holds a dense collect'ion of spores. After digest'ing and passing the mushroom, the spores begin to sprout. The glow of the mushrooms is slightly magical, and cas'ting Detect Magic reveals a pale aura of illusion magic, illusion that causes people to believe that they're much tastier than they actually are. Some say that the mushroom was blessed by Mystra, to help her followers find their way out of the Underdark.",
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Lish',
        description:
          "Small tree, which grows dozens of small nuts in the spring in temperate forests. A handful of the nuts sustains a medium creature for a day. Eating a Lish Nut as a full-round action provides limited protection from vermin, which must succeed a DC 11 Constitution save or becoming sickened for 2d4 rounds after touching/attacking the creature exuding the nut's odor.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Livewood',
        description:
          'Highly magical green-colored tree native to Elven Forests of Faerun whose wood remains alive when felled. Items made from it are affected by Plant Growth, sprouting small branches and leaves, while Speak with Plants allows one to communicate with them and Blight damages them as if they were plant creatures. Livewood items can also be used for Tree Stride, Animate Plants can animate a Livewood object, and Dryads can live in Livewood objects. As a living object, a Livewood items are immune to the Disintegrate spell. Crafting items made from Livewood requires special training from a druid or dryad, and a successful nature check.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Lizard Eaters',
        description:
          "A hardy vine that seems to grow in the nooks and crannies of stones, and can often be found in older ci'ties or in ruins. The vine rapidly grows along the crevasses provided by mortar, and every few feet a small yellow flower sprouts from the vine, surrounded by a handful of apparently errant tendrils.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Cities',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Lizuara',
        description:
          'Found only growing underwater in freshwater at least 30 feet deep, Lizuara is a translucent green grass that seems to curl and uncurl on its own. This water plant, when combined with Stygian Pumpkin, can be turned into an ointment that, when applied to the forehead of a recently dead creature, will bring the character back from the dead up to 7 days from its death. If the resurrection ritual is completed improperly, the character becomes an undead.',
        rolls: [
          'After successful application of the ointment, the character being treated must make 3 death saving throws unbeknownst to the rest of the party.',
          '3 successes or 2 successes and 1 failure will return to character to full health, fully living.',
          '2 failures and 1 success will return the character to conscious undeath, returning the player as a revenant.',
          '3 failures will return the character as a full undead, with the helpful intervention of an evil deity of death, returning the character as a Death Knight with no control over their actions. The Death Knight will attempt to fight, but can also be turned back to the ally as a revenant state if the ointment is applied once more and the Death Knight fails a DC 16 Cons. Save.',
        ],
        locations: [
          {
            location: 'Rivers',
            rarity: 'Legendary',
          },
        ],
        uses: ['healing', 'necromancy', 'alchemy'],
      },
      {
        name: 'Locust Needle',
        description:
          "A short stubby tree covered in long thorns, the bark is a light brown, and the leaves are a vibrant green 'tinged with gold. The leaves of the plant are quite edible and known to help prevent scurvy. Some pirate crews use the trunks of the tree to make crude morning-stars, while others harvest the thorns to use as improvised tattoo needles.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
          {
            location: 'Coastal',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Lordinberry',
        description:
          'Found only in forests where some trees exceed 300 years of age. The small shrub yields a limited number of yellow, plum sized berries (1d3 berries harvested from a single bush) that can be mashed into the hand of a druid. If the druid then touches the tree with this hand he or she is able drain a portion of life force from a tree. Each tree has 3d4hp for each 50 years it has lived. The drained life force will then be added to his own. Do not drain more than 50% of life force from a tree, it will kill the tree, and this will anger the fey of the forest.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Luhix',
        description:
          'Wound-powder drug, made from stalks of Abyssal plants. Initial 1 point bonus to all ability scores along with intense pain for 1d8 minutes. Second use grants a +2 bonus to all ability scores and excruciating pain that causes disadvantage on checks and saves of all kinds for 2d8 minutes. Third use causes the possibility of addiction (DC 20 Constitution Save) and a -3 to all ability scores and pain that renders the user incapable of doing anything and lowers movement speed to 1 foot for 3d8 hours. As long as the user is addicted and does not have access to more Luhix, they will take a -5 penalty to all checks and movement speed will be halved as they are too lethargic to do anything of importance.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Lungwort',
        description:
          'This plant has broad leaves covered with dark spots, resembling diseased lungs. It is used in the treatment of diseased lungs, by boiling the leaves and drinking the infusion. The effect of a successful treatment is to render breathing easier and to clear fluids from the lungs caused by a whole array of diseases - pneumonia and tuberculosis to name but two. It does not actually cure the disease, but merely relieves the symptoms. With some diseases that alone can be the difference between life and death.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Lumina Cap',
        description:
          'A yellow, glowing mushroom that takes a few months to grow to maturity, begins to spread spore powder, and then dies after a week to start the process over. Many Herbalists keep the glowing mushrooms themselves in dark cellars in order to harvest this dust every chance they can, as this powder can be used to concoct a Potion of Heroism.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Rare',
          },
          {
            location: 'Cities',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Luurden (Bloodfruit)',
        description:
          'A magic-dependent pale, gnarled tree that looks dead except for a short period every 3 to 4 years where it produces bitter red fruit that can be made into the wine. The fruit, called bloodfruit, is a deep scarlet red and bleeds a sweet citrusy juice when cut into. The wine can be used in combination with bloodkeep to create a tincture that heals for 2d4 + the nature modifier of the character who creates the potion.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: "Maiden's Hair (Earthsilk)",
        description:
          "An odd mushroom cultivated by dwarves for the silken tendrils that hang from it and collect moisture. These tendrils are tough and time-consuming to harvest, but they can be made into yarn that can create a very tough silk that can then be made into tough rope and shirts or woven into existing armor that then grants extra resistance to bludgeoning and slashing, although the fabric can be torn by a piercing damage critical hit, at which point it loses its properties until repaired. Crafting with Maiden's Hair requires a DC Nature Check of 25+ or consultation with a Dwarven master craftsman.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Makebate',
        description:
          'This herb will counteract the poison of scorpions if taken within 2 turns of the sting. Any damage, including death, already taken will remain.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Mallow',
        description:
          "A tall plant with many star shaped leaves sprou'ting from the main stalk, the mallow plant is notable for the large five petal white flowers. Several tribes use the flowers for decorat'ion, especially during fer'tility ceremonies. The Azuposi people brew a tea from the plant, said to ward away any 'evil spirits' (Those that drink the tea gain Advantage on any saving throw meant to resist mind control or possession un'til the next short rest.).",
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Mandrake',
        description:
          "The root of this herb sends the recipient to sleep. The sleep will last 15 hours, during which time the person cannot be woken except by a Protection from Poison spell or potion. The root is said to bear a resemblance to the naked male form, hence its name. The plant has several dark green leaves which are about 1-foot long. The purple flowers of the plant are bell shaped. The root of the plant must be boiled on the night of a full moon and left to sit for an entire month before use. According to Ancient Egyptian legend, the sun god, Ra, sent Mathor to earth to punish mankind. Mathor's slaughter was so intense, that Ra took pity on man, and forced Mathor to drink the blood of his victims mixed with Mandrake root. He fell asleep and when he awoke was unable to remember why he had come to earth, and so the slaughter was ended.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: "Mar'kerlan",
        description:
          "This woody herb's bark can be stripped and chewed as a gum. For 1d4 hours, eyesight is incredibly enhanced, doubling ranged attack range and granting a +2 bonus to attack rolls for ranged attacks.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Maracan',
        description:
          'Resembling a dead wood shrub, maraca subsists off of magical energy found within the earth and therefore does not grow leaves, and the slightest amount of water will drown it. Branches of maraca can be snapped off, dried, and grated under the light of a full moon into a fine powder that faintly glows. When a dose of the dust is thrown on a target, it will negate the saving throws for the next spell on him. An attack roll must be made against unwilling targets that know that the caster is up to something. Also known as magedust.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Maraga Flowers',
        description:
          "Growing as a small bush with broad, heart shaped leaves, the plant also grows vibrant red and violet flowers. The bush also emits an ent'icing scent that almost overpowers the smell of the plant's decaying prey. The insides of the flowers are lined with a number of sharp thorns, and each flower is capable of spraying a paralyt'ic poison at potent'ial prey (DC 15 Cons. Save if within 5 feet of the plant or suffer 3d6 poison damage. If the target creature fails the saving throw by 5 or more, they are Paralyzed for 1d4 hours). Once the prey falls to the ground, the bush is capable of slowly moving due to having shallow roots, and entangling the paralyzed creature. The root system slowly crushes the prey, and the bush feeds upon the nutrients as the body decays.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Marigold',
        description:
          'Marigold can grow to a height of two feet and has rows of flat orange and yellow petals around a central disc. These flowers must be dried and then mixed with olive or other vegetable oil to produce a soothing balm which will soothe and clean small wounds, in order to prevent infection. As a side effect, the marigold has a slightly musky scent that attracts beasts, and grants a +2 to Animal Handling checks for 1d8 hours.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Marisia',
        description:
          "A small, gnarled tree found in temperate plain environments with bright pink leaves, the leaves are commonly ground into a drug well-known amongst spellcasters called Memory Dust. Taken as a snuff, the dust gives a magic-user the ability to memorize and cast a single spell of the level above his normal maximum (for example, a 1st level magic-user could memorize and gain a slot for a single 2nd level spell) until the next long rest. The dust is highly addictive. After every session in which a magic-user has made use of the dust, he must make a Wis. check on 1d20. If the roll results in a number higher than his Wis. score, the character will do everything he can to use the dust again in the next session, paying sometimes exorbitant prices. A roll of 20 indicates that the character's tolerance for the dust has increased, and from now on he must consume twice the quantity to achieve the same effect.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Marjoram',
        description:
          'This herb removes the color from the skin of a person who has had yellow jaundice. The herb has angular stems which grow to a height of 1 to 2 feet, which are reddish in color and are covered in small hairs. It has ovate shaped leaves which surround the stem and grow smaller and smaller towards the top of the plant. It is topped by pale pink flowers. The herb prevents the spread of some disease as well.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Cities',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Marsh Maw',
        description:
          'Lurking beneath the stagnant water, waits a plant made of veiny tendrils looking to fill a spine filled maw. When unsuspect­ing prey wanders nearby, the tendrils snake around flailing limbs, dragging it into the maw. The plant slowly submerges back beneath the surface, crushing the prey caught within its grasp. The Marsh Maw is a danger that dwells within shallow swamps, using the brackish water as camouflage. The plant has a deep root system that goes deep, holding the monstrosity in place. The Maw often lurks at the edges of the swamp, near where herd animals come to drink. More than a few unlucky shepherds have lost members of their flock to the danger that lurks just beneath the surface.',
        statblock:
          'Armor Class: 14 \nHit Points: 112 (14d10+28) \nSpeed: 20 ft., swim 20 ft. \nSTR: 16 DEX: 12 CON: 14 INT: 4 WIS: 10 CHA: 6 \nDamage Resistances: Bludgeoning \nCondition Immunities: Blinded, deafened, frightened, prone \nSenses: blindsight 60 ft. (blind beyond this radius), Passive Perception 10 \nCR: 4 \nActions: \n\tMultiattack: The marsh maw can make two constrict attacks and a bite attack. \n\tConstrict: Melee Weapon Attack: +5 to hit, reach 10ft., one target. Hit: 11 (2d6+3) bludgeoning damage, and a Large or smaller target is grappled (escape DC 14). Until this grapple ends, the target is restrained, and the marsh maw cannot constrict another target. \n\tBite: Melee Weapon Attack: +5 to hit, reach 5ft., one Medium or smaller target. Hit: 11 (2d6+3) piercing damage, and a target is blinded, restrained, and unable to breathe. The target must succeed on a DC 14 Cons. Save at the start of each of the marsh maw’s turns or take 11 (2d8+3) bludgeoning damage. If the marsh maw moves, the engulfed target moves with it. The marsh maw is unable to use the bite attack until it releases the held creature.',
        locations: [
          {
            location: 'Swamps',
            rarity: 'Rare',
          },
        ],
        uses: ['creature'],
      },
      {
        name: 'Marshmallow',
        description:
          'This plant has a green fleshy stem and broad egg-shaped leaves, both of which are covered with downy hairs. It has five petalled, pale pink flowers which sit at the base of the leaves. The root must be boiled, and the resultant distillation applied to burns. If used successfully the herb will double the rate of healing for the burn.',
        locations: [
          {
            location: 'Swamps',
            rarity: 'Very Common',
          },
          {
            location: 'Rivers',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Maruera',
        description:
          "In appearance this tree looks much like any other. It can be identified by its vivid green leaves. These leaves when chewed produce large amounts of oxygen from the carbon dioxide already in the persons breath. One leaf may chewed for up to ten minutes, before its properties are exhausted. The leaves are often boiled and the resultant infusion added to other substances to produce a gum. A piece of this gum will allow the recipient to survive without oxygen for 2d4 x 10 minutes, provided they are conscious and able to chew. The herbs main use is in allowing the recipient to survive in oxygen poor or free environments such as underground. When a tree is found it will normally have 3d100 leaves. Taking too many leaves can harm the tree. The tree has a chance of dying equal to the percentage of the leaves taken. For example if 30% of the leaves are taken the tree has a 30% chance of dying, if 50% are taken it has a 50% chance of dying. The leaves are also said to have a calming effect when chewed (DM's discretion).",
        locations: [
          {
            location: 'Rivers',
            rarity: 'Rare',
          },
          {
            location: 'Forests',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Masterwort',
        description:
          'Masterwort grows to be about three feet tall and bears several overlapping layers of white flowers. It has winged dark green leaves like those of a maple tree. The leaves must be boiled and left to stand for at least twenty days before use. This herb is used as a protection from plague, giving a +2 bonus to any constitution saves against disease.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Masthin',
        description:
          "Plant native to Q'barra jungle that produces natural intoxicants when young that attract wild animals. If its shoots are used as a component for any enchantment spell targeting animals or magical beasts, they have a 40% chance of doubling spell duration.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Meadow Giant',
        description:
          'Tenacious, large green-stemmed weed that can spring up over-night in temperate grasslands, plains and farmlands. It easily threatens crops, and its powdered stem can be made into an anti-coagulant called White Sanguine, which when added to an injury poison, causes the victim to bleed for 1 point of damage each round for one minute, if it fails a save against the poison. Magical healing or a DC 15 Medicine check stops the bleeding.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Megillos',
        description:
          "The leaves of this dandelion-esque herb increases a character's eyesight for 1 minute. They can see twice as far, and when in missile combat, all ranges are treated as if 5 feet less.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Cities',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Melander',
        description:
          'Melander is a moss that must be brewed in clear water. The resultant distillation must then be drunk. Tasting slightly of ale, it will then add +1 to all Constitution saving throws vs disease for a period of 1d10 days.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
          {
            location: 'Rivers',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Milkworte',
        description:
          'This herb protects from (for 1d4 days) and treats cholera (cures cholera in 1d4 days).',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Mimetry Sprigs',
        description:
          'A small, green shoot family of plants whose fibers have the ability to take on the hue of whatever is around it. The fibers are the basis for camouflaging armor.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Mirenna',
        description:
          'The berries of Mirenna will heal 1d4-1 hit points when eaten. A typical bush will yield 3d10 berries.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Mokodo Bush',
        description:
          "This full body bush grows a plent'iful amount of waxy green leaves, that turn pink in the fall. During warmer months the bush sprouts flowers of yellow and orange, which turn into sweet little berries. The leaves of the bush can be harvested and rendered down to create a waxy resin that is often used to seal the hulls of seagoing boats, replacing pitch. The prac'tice is far from common, as the process to create the resin is far more expensive than using the tradi'tional methods. Some seamstresses also coat their threads in the resin, which allows for the creat'ion of finer garments. These garments represent armored fine clothing, the appearance of fine clothes with the protection of light armor (AC 11+Dexterity Mod).",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Rare',
          },
          {
            location: 'Cities',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Moonstern',
        description:
          'A glowing silver mushroom that can be found in caves at least 500 feet below ground-level. The mushroom can be ground and combined with pure alcohol to create a magically enchanted secret ink. Two doses are needed for a full vial of ink. This ink is only readable in unobstructed moonlight. During day time, the ink reads as magically shifting silver runes.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Mordayn',
        description:
          "Inhaled steam drug made from this rare herb found in deep jungle environments. Initial hallucinations as Bestow Curse spell for d20 + 10 minutes. After this amount of time, a DC 14 Constitution Save must be made. On a failed save, the recipient becomes addicted, and the addict loses -1 to Wisdom and Constitution as long as they're addicted.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Mothflowers',
        description:
          "A strange plant that grows in the Underdark, the stalk of the plant is a shade of grey similar to ashes. The few leaves that sprout from the stalk are a lighter shade of grey with dark veins running through them. Every few hours the flowers of the plant open, and appear very similar to white moths. When the flowers are open, the plant emits a strange smell which causes goblinoids to retch. Any goblinoid (including half-orcs) approaching within 20 feet of the plant must make a DC 12 Cons'titut'ion saving throw or become nauseous. Flowers that have been picked do not confer the same effect.",
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Mountain Garlic',
        description:
          'A strain of garlic that only grows on coastal mountainsides, said to repel evil spirits. The garlic, when worn around the neck, wards off undead and aberrations for 1d8 hours. -3 to rolls for initiative from these types of creature during that time.',
        locations: [
          {
            location: 'Coastal',
            rarity: 'Common',
          },
          {
            location: 'Mountains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Mountain Setwall',
        description:
          "Handling or ingesting this herb causes hair to grow on a character's eyelids and palms.",
        locations: [
          {
            location: 'Mountains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Mugwort',
        description:
          'Mugwort can grow to be taller than a man. It has a stiff and angular stem, reddish brown in color. It has deeply incised smooth leaves which are dark green on top and silvery white underneath. It has small, yellow-green or yellow-red flowers arranged in long spikes at the top of the stem. The effects of this herb last for two hours, the leaves are harvested and then smoked. During this time the character can function at up to -20 hit points, or beyond the point of exhaustion. If used more than one time, the user must make a DC 25 Constitution Save or become addicted. While addicted, the consumer loses 5 hit points per hour and had disadvantage on all checks and saves.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Mule Pollen',
        description:
          'A daisy-type yellow flower. Inhaling the pollen grants +2 Str and imposes a -2 penalty to Int and Wis for 1d4 x 10 minutes. DC 12 Wisdom Save to avoid addiction, wherein addiction causes constant fatigue of exhaustion level 4 while not under the influence of the pollen. Protection from Poison cures addiction.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Musk Muddle',
        description:
          'Stinky, brown, dead-looking plant with wide leaves found in swamps and marshes. Can be made into Burn Salve, which when applied within 2 rounds after taking fire damage, heals 1d6 points of the damage done by fire.',
        locations: [
          {
            location: 'Swamps',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Myrthis',
        description:
          'Myrthis berries grow on short, roughly 2-foot bushes resembling blueberry bushes that produce berries that also resemble blueberries. The only visual difference between the two is a slight color variation (the fading from blue to black on the bottom of the berry). Consumption of Myrthis Berries causes disorientation and loss of depth perception, -2 to melee and -4 to ranged attack rolls.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Nahre Lotus',
        description:
          "A waterlily native to large bodies of fresh water. Harvesting the plant and putting it in a vial works as a splash weapon against enemies, works as a minor form of the spell Tsunami (wall of water up to 10 feet long, 10 feet high, and 3 feet thick. On a failed save, damage is 2d10 ' 2 Bludgeoning damage).",
        locations: [
          {
            location: 'Rivers',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Napweed',
        description:
          "This plant has a single main stem with small fern like leaves, and small pink flowers growing from it. These flowers must be dried, powdered, and mixed into wine and then drunk to counter the effect of injected poisons. A successful application means that only half normal damage is taken from the poison. In addition to this use, the flower is often counted as a symbol of faith between lovers and is used to decorate and garnish foods at weddings. According to Greek mythology, this plant was used by the centaur, who wounded by Hercules with an arrow poisoned with the Hydra's blood, treated himself with it.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Nararoot',
        description:
          "A tuber found throughout Faerun, the green and purple leaves of the plant grow close to the ground, and a single thin stalk sprouts upward to reveal a flower with two wide petals. The root is often cut into shavings and either eaten directly, or brewed into a tea. Although terribly bitter, it primarily serves as a form of birth control, as inges'ting it renders a person infert'ile for several weeks.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Navew',
        description:
          'The seeds of Navew dropped in a drink or on to food before it is eaten acts as counteragent to ingested poisons. It prevents the death of a person poisoned in that meal, though they may still be very ill.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
          {
            location: 'Cities',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Nightcall',
        description:
          "A blue-grey herb smelling faintly of nutmeg that heightens the user's senses. Over-dosage or prolonged usage causes photosensitivity, distraction and nervousness; on the other hand, prolonged usage can also make the effects permanent. Nightcall gradually dyes the long-term user's hair, teeth, nails, horns, or scales midnight blue. (The minimum dose of 1 tsp gives the eater +100' sight range, +10% hearing, and +1 to Wisdom and Dexterity scores for up to 1d8 hours. Up to 4 doses will stack, but after the second dose, the user will make a DC 14 Wisdom Save. This DC increases by one after every dosage. If failed, the user becomes addicted and loses -100' sight range (down to 3'), -10% hearing, and -1 to Wisdom and Dexterity scores until next dosage.)",
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Nordra',
        description:
          'An aloe-like cactus that when cut releases a sticky yellow sap that smells like urine. This sap can then be applied to wounds, healing for 1 hit point, which stops up further bleeding.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Obaddis Leaf',
        description:
          'Rare holly variety that can retain some magic if used as Druid divine focus. As component for plant-targeting spells it doubles both area and duration.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Oede',
        description:
          'One of the most valuable and prized of all plants, this bush has leaves that are almost golden in color. These leaves can be dried, but if they are not will last only two weeks. This means the drying process must be begun within an hour of the leaves being picked. These leaves can according to legend cure any disease. Whether or not the leaves have this power is up to the individual DM.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Oliosse',
        description:
          'This exceedingly rare herb will restore an Elf to life if given within seven days of death. This effect also works on Half-Elves up to 3 days.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: "Old Man's Friend",
        description:
          'Sticky, leafy herb that grows to 2 inches in large (up to 10 by 10 ft) beds that acts like catnip for dogs. Can be made into a thick grey substance called gash glue, which can stabilize a dying creature without making a medicine check.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Olus Veritis',
        description:
          'Olus Veritis is pale green in color and grows right on the edge of rivers. The leaves are rough in texture, and have tiny thorns all along their edges. A leaf should be baked in an oven for one hour and then dragged across the skin of the recipient, cutting their flesh very slightly. The recipient, must make a DC 17 Constitution save vs poison or be compelled to answer all questions, absolutely truthfully for the next 1d6 x 10 minutes. Up to three uses of the herb can be made in a 24 hour period. If any more than this are made the recipient will die within 3 hours of the third dose, or instantly if five or more doses are administered.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Olvar',
        description:
          'The flower of the Olvar bush must be given to a person on the point of death (at 0 hit points but not at the threat of losing any more). It will then keep them alive and stabilized for 2d10 days or until healed.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Orach',
        description:
          'Orach grows to about 3 or 4 feet in height. It has a whitish stalk, pale green leaves and greenish-white flowers. The seeds must be gathered, bruised and left to stand in pure alcohol for six weeks. The mixture must then be drunk, one spoonful a day for a week. This tincture will cause extreme intoxication but also cure almost any disease. It leaves a yellow color in the skin.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Ordul',
        description:
          'Ordul is a floating water flower, deep blue with purple tinges on the outer edge of the petals. The flowers can be harvested and are highly sought after for their anti-toxic effects. Upon ingestion, delays all effects of any type of poison for 24 hours. Must be administered within 1 round of poisoning.',
        locations: [
          {
            location: 'Swamps',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Orevine',
        description:
          'A vine-grape looking plant native to lowlands between mountains and rivers that draws metal from the surrounding soil into bulbous, grape-shaped sacks. Depending on what type of metal it is keyed to, the plant can be harvested alive and sold for 2000 gp & 10000 gp, producing between 300 gp & 2000 gp worth of the metal per month.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
          {
            location: 'Rivers',
            rarity: 'Rare',
          },
          {
            location: 'Mountains',
            rarity: 'Rare',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Orticusp',
        description:
          "Extremely rare flower with a root that looks like a pale white fist, found in temperate forests with trees of at least 150 years of age. Fey within 20 yards can smell its earthy aroma and find it easily. If the root is pulped it can be made into Night Venom, which when added to a poison, adds an additional saving throw (at the poisons' normal DC) to the initial save against the poison. Failure causes the creature to fall asleep until the secondary effect of the poison kicks in.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Ortona',
        description:
          'Ortona Trees can grow to 40 feet and produce large amounts of a pale, white fruit, which are commonly turned into a chunky, white paste smelling of walnuts. Applying this thick, white paste to a weapon will allow it to cleave through any non-magical metal. The paste is consumed after use. (1d8 fruit can be harvested from a single tree.)',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Oruighen',
        description:
          "A rare cactus native to alkaline salts that can be made into an inhaled powder drug granting +1 to rolls for Performance, DC 14 Constitution save that, if failed, causes blindness for 2d4 minutes and extreme nostril and nose pain that cause -2 penalty to attacks, skill checks and saves for 2d4 hours. Highly addictive, DC 14 Constitution save after second use, if failed, the user becomes addicted, and suffers all negative penalties while not under the drug's control.",
        locations: [
          {
            location: 'Deserts',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Osira',
        description:
          'Osira is a tiny, parasitic cactus found growing on surface roots of oak trees. Can be juiced or mashed to yield a slightly sweet syrup. Mixing this syrup with any alcoholic beverage neutralizes the alcohol in the beverage.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Pallast',
        description:
          'Pallast is a compound made of the pale, papery bark from willows and the roots of marshmallows. When ground together and imbibed, Pallast cures minor aches and pains, especially headaches and pain from abscessed teeth, sore muscles, and so forth. Pallast itself is a very bitter pale powder, and is usually served in a heavily sweetened tea. (Relieves minor pains but does not restore lost hit points.)',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
          {
            location: 'Swamps',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Palma Eldath',
        description:
          'This herb keeps a person warm for one night or one day, and prevents them suffering from exposure. This can mean the difference between life and death.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Rivers',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Panaeolo',
        description:
          'Magical herb whose leaves tastes like leather and function as an ingested drug with no initial effect. Secondary effect after 1d4 hours is to increase all arcane spell save DCs by 2 for 1d4 hours and 1d8 psychic damage. A second dose within an hour of the first improves the effect to a +3 to save DCs and deals 2d8 psychic damage. Further doses only cause more and increasing psychic damage.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Pattran',
        description:
          'The root of a small, shrub-like plant with dark green, shiny leaves and thorns, Pattran is used to relax the muscles and encourage sleep. In mild dosages, Pattran causes a general feeling of relaxation, eases sore, strained or sprained muscles, and similar aches. In larger doses, Pattran causes sleepiness. Pattran tastes like a combination of mint and rich soil. (For sleep dosages, user may voluntarily choose to sleep well or, if resisting, make a DC 12 Constitution Save. Effects last 2d4 hours; if asleep, the user will sleep and awaken normally.)',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Pennyroyal',
        description:
          "Pennyroyal is a low creeping herb with a squarish stem and small dark green leaves which grow in pairs. The flowers grow in round clusters which are mauve in hue. The leaves should be plucked and while fresh be thrown into a person's bath water. They may then have an aphrodisiac effect on anyone the recipient attempts to influence in the next 1d4 days (+1 to persuasion checks made within that period). In addition, if dried, the leaves may be sprinkled among books, and will then act as an insect repellent. These make the leaves highly prized among mages and sages who will normally pay 12 gp for small amounts of the dried leaves.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
          {
            location: 'Rivers',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Peony',
        description:
          'This plant with its delicate pink flowers may be boiled into a powerful healing draught, capable of stopping all bleeding, internal and external immediately. However, a roll of 1 on the nature check by the herbalist, will kill the recipient in 1d4 minutes, as they suffer a massive heart attack. The herb can be deliberately used as a poison by using five times the normal dosage.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Cities',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Periwinkle',
        description:
          'The plant is a creeping vine with dark, green shiny leaves and pale blue flowers. The flowers must be crushed into a powder and administered orally. If used successfully the herb will stop all bleeding, both internal and external in one turn (+6 hit points recovered if administered within one turn of taking damage).',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Cities',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Petiveria',
        description:
          'This plant has a single stem with dark green, shiny leaves growing from it. It is topped by very thin, yellow flowers. The petals of these flowers should be mixed into a poultice, where they will, on a successful application, act to bring down swelling and bruise over the course of a one-day period. Commonly used across the realm as a cold compress for black-eyes.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Phandar',
        description:
          'A knobby deciduous tree with mottled bark, the branches often grow away from the prevailing wind, often giving a copse of the trees the appearance of being almost blown over by strong winds. The branches support a surprising amount of small triangular leaves, and are the natural home for a species of moth that resemble the leaves.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Pixie Table',
        description:
          'Rare 1-foot tall and 1-foot diameter mushroom with a dark lavender cap that can be found in any woodland but is most common in temperate forests housing Fey. If boiled with cloth, it dyes it Lavender. It is the main ingredient for a red liquid called memorybind, which allows a prepared caster to prepare an extra 1st level spell in exchange for reducing all save DCs by 2.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Poison Apple',
        description:
          'A magically bred medium-sized apple tree that bears red fruits that taste good but function as a strong sleeping poison (DC 18 Constitution Save or the recipient falls into a deep magical sleep for 2d6 days). The sleep can be cured by a Protection from Poison spell.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Pomow',
        description:
          'A magically created dark-purple spheroid fruit-plant that grows to 1-2 feet across, serves as a hardy crop viable in a range of climates. Meat, root and seeds are edible and high in protein, core of the plant is filled with juice, the fibers are similar to cotton, and the rind can be used as a sharpening strap for fine blades. A new fruit starts growing as soon as the old one is plucked.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Pondstone Tree',
        description:
          "A towering willow relative that grows in tropical and near-tropical swamps, pondstone wood is often used for its flexibility while freshly cut to construct simple boats and canoes. In addition, the reduction of the wood over a low flame will cause a collection of sap on the ends of the wood. This sap can then be collected, further distilled, and consumed as a tincture that induces mild hallucinogenic effects, including the capability to see one's own body from a third person point of view. It is argued among enthusiasts about whether you truly do see yourself in third person or whether the hallucinations are just a reconstruction of your surroundings using artificially heightened senses. There are no known negative side effects to pondstone sap consumption, and the recreational use of pondstone sap is referred to as Sap Goggling.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
          {
            location: 'Swamps',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: "Poznan's Chain",
        description:
          "Poznan's Chain is a soft-wooded clinging vine armed with white, pearlescent spines, 2' to 3' in length that alternate the entire length of the vine with leathery leaves. These vines are typically only found growing on sheer cliff faces or the most opulent ruined buildings. While a single chain will usually run for 20' to 50' and spread to cover an area of about 200 square feet, some vines are purported to reach 100' or more and cover thousands of square feet with their leaves and thorns. The thorns of Poznan's Chain secrete a virulent poison that causes internal organs to violently rupture and hemorrhage (DC 18 Cons. Save to avoid taking 4d8 poison damage), leading to a bloody death in as little as 20 to 30 seconds. Curiously, if this poison is collected and taken more than 5' from the vine it immediately becomes water. Some claim that Poznan's Chain can produce large, silvery, metallic, star-like blooms, but these reports have never been verified.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
          {
            location: 'Mountains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: "Powdered Desert Milk (Wolves' Milk)",
        description:
          'Distilled liquid drug that stains lips blue, first causes -1 penalty to Wisdom and then bolsters pain immunity, grants a sense of euphoria and a -2 penalty to Initiative for 1d4 hours. Overdose if second dose taken during duration causing Petrified for 2d4 hours.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Prickly Tea',
        description:
          'Thorny bush about 3-ft in height with grey-green leaves. Can be made into a mild stimulant tea, or with the training as an herbalist, a substance called Sen-sess, which tastes terrible but grants a +1 bonus to Perception checks for 1 hour.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: "Prince's Feather",
        description:
          'This herb has red-green leaves and long pink flowers. The flowers must be beaten into powder and eaten by the recipient. If successful, the herb will halve the rate of internal bleeding within 1 turn, decreasing the damage taken in the next turn.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Purple Pipeweed',
        description:
          'A short, purple weed that was originally a farm-field pest before it started being farmed itself can be dried and smoked, and is in fact very commonly smoked by spellcasters that focus on illusory magic. For one hours after smoking a quantity of pipeweed, the consumer is elevated to a higher state of imagination. This unfortunately gives them an increased chance of being surprised (enemies in combat will always will a surprise round against the pipeweed smoker while he or she is under its effects) but also increases the spell save DC of any illusion magic cast by the pipeweed user by +2.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
          {
            location: 'Cities',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Pygmy King Flower',
        description:
          "The Pygmy King Flower produces a conical, flower-like structure from a base of 8-10 fat, fluid filled leaves that resemble a broken rib cage. The flower is usually 1' in diameter, 2' tall, and always brightly colored. While the color can vary greatly, solid orange and blue with yellow spots are the most common colors in tropical locales. Nectar fills at least half of each basin shaped flower and when exposed to sunlight this liquid releases a sweet, sugary fragrance. Small creatures and large insects are attracted to this smell but upon entering the flower they are trapped by its slippery walls and slowly digested. When a Pygmy King Flower finishes digesting a meal, or becomes over filled (such as after a heavy rain) the flower will tilt and dump its contents onto the jungle floor before slowly righting itself once more. The succulent, rib shaped leaves at the base of this plant can be mashed into a salve that is an excellent treatment for major burns and minor lacerations (successful application of this salve can cure up to 2d8 fire damage if applied within 3 rounds of taking that damage).",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
          {
            location: 'Swamps',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Quare',
        description:
          'A small purple flower found alongside paths and roads that wind through temperate forests. The petals can be ground and combined with water or pure alcohol to yield a simple pesticide. Kills rodents and small animals when consumed by them, has no effect on larger animals and humanoids.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: "Queen's Ambrosia",
        description:
          "A low, waxy-leafed shrub plant with large yellow flowers pointed upward. These flowers collect water and the flowers' natural nectar and pollen then sweeten the water and add some essence that makes the liquid inside slightly intoxicating. A common tradition in some parts of the realm is to have a picnic the day after a rainstorm next to a Queen's Ambrosia bush so that the flowers may serve as refreshment for the old and for the young to sneak sips from.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Quicksilver Lichen',
        description:
          'A slimy, glittering silver lichen that can be ground into a soluble, flavorless powder that can be added to food or drink to grant damage weakness to poison for 2d6 hours.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Quickweed',
        description:
          'Quickweed grows as a series of short, flat, silvery leaf blades along a single root runner, and is so named because it completes its entire life cycle in a single week. A living/growing end and a decaying/dying end is clearly visible on each root runner, and with patient observation it is possible to watch the root grow and die in real time. The grass always grows in a single direction along its root causing entire fields of Quickweed to appear to migrate around islands, like a wave, as time goes by. Alchemists prize Quickweed as it amplifies concoctions related to time, speed and travel.',
        locations: [
          {
            location: 'Coastal',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Quivar',
        description:
          'A low-lying, ground-cover leafy plant that grows through a layer of snow, never seeing sunlight, but absorbing and using the cold as food. Nomadic tribes of the far north have been known to seek out the plant, dry it, and smoke the leaves to gain an additional +50% movement speed for 8 hours.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Rainbowpetal',
        description:
          "Rainbowpetal grows as a stout, relatively straight stem with triangular green leaves, and reaches a height of 4' to 8'. Many four-petaled flowers appear at the top of this stem forming a terminal spike of 12' to 16'. The flowers of the rainbowpetal can appear as any color, including shades of blue and green, and individual petals will even grow in different colors on the same flower. The petals of these flowers are thick, fleshy, and surprisingly nutritious. They are frequently boiled into a thick and flavorful porridge or dried and used in place of bread crumbs or cornmeal on fried food. If eaten raw, a single spike of rainbowpetal can sustain a normal sized human for a full day.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Rampalt',
        description:
          'This dark-colored root grows on a plant distinguished by its waxy dark green leaves. When the root is boiled down, it turns into a thick, strong-smelling greyish liquid that cures congestion when boiled in water and inhaled. (Relieves stuffy head, opens sinuses, for as long as the steam is breathed + 2d6x10 rounds. Grants resistance to diseases in the form of advantage when rolling for Constitution Saves against disease.)',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Rare-Blue',
        description:
          'A rare, pale blue mushroom that grows only in westward facing cave mouths. Can be turned into an inhaled powder drug.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Rasira',
        description:
          'Rasira is a 3 to 4-foot tall flower commonly fed upon by butterflies in summer months. The pollen contained within the flower can be combined with or sprinkled onto soap in order to create a detergent capable of removing almost any stains.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Ratavasa Flowers',
        description:
          "A short purple flower that grows close to the ground, the plant is generally little more than a few floppy leaves sit'ting above the soil. However, during the warmer months, the plant sprouts a cluster of small purple flowers that smell faintly of cinnamon. The petals of the flower are often steeped in hot water to create a tea that prevents concep'tion. Any female drinking the tea is unable to become pregnant within the next two days.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Rattlestalks',
        description:
          "These tall stalks that grow out of stagnant water end in a thick bulb with a hard shell. In the colder months, the stalk withers, and the bulb falls off, to float around unt'il the bulb softens and falls away to disperse the seeds within. The seeds sit freely in the shell, and when shaken make a slight rattle noise, which is unnerving when the wind rushes through a cluster of rattlestalks. Tribes that live in the swamps will often use the unnerving aspect of the rattlestalks to create fear inducing noisemakers. When rattled, those that have no knowledge of the rattlestalks must make a DC 8 Wisdom saving throw, or be Frightened for 1d4 minutes.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
          {
            location: 'Swamps',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Razorvine',
        description:
          "Twinning climber native to the open plain-lands that is nigh impossible to get rid of as it grows at least 1 ft per day even if cut down to a stub. Dried Razorvine provides excellent fire kindle. Light contact deals 1d6 points of damage, while e.g. falling into it deals up to 3d6 points of damage; but this damage is reduced by a creature's natural armor bonus.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Reath',
        description:
          'Parasitic vine that grows on Eldeen Reach trees, whose leaves when used as a component for a plant or plant-creature targeting spell has a 50% chance of increasing the DC by 2.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Redflower',
        description:
          'Tiny red-bog flower that can be made into a crushed leaf drug, no initial effect, secondary effect for 10 minutes that grants the ability to use an action to gain +4 on the roll to attack a single creature. Overdose if second dose taken during duration causes 1d4 x 10 minutes nauseated.',
        locations: [
          {
            location: 'Swamps',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: "Redgold's Feather",
        description:
          "Redgold's Feathers grow as small, tight clusters of burnished, coppery colored, feather shaped fronds near areas of thermal activity. The plant is impervious to heat, and some claim to have even seen it undergo instantaneous growth when exposed to direct flame. If the leaves of this plant are broken or crushed they give off an acerbic odor potent enough to wake a person from unconsciousness (even magical) or immediately recover from being dazed or disoriented. If the feathers are crushed and combined with sulfur and the essence of a naturally fiery creature, an alchemist can create a non-toxic liquid that will glow a bright orange for 36-48 hours (even after being consumed and digested).",
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
          {
            location: 'Mountains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Redroot',
        description:
          "The plant is a tangled mass of leafy shoots that grow close to the ground. While it does grow wild in a large swath of the Realms, it is also somet'imes intent'ionally planted on farms. Pulling a ripened root from the ground reveals a large crimson colored tuber. The tuber is often turned into a cura'tive paste which can be applied to wounds to soothe the pain and speed healing (+5 to any hit dice expended during a short rest). Ingest'ing the root often causes nausea and vomit'ing (DC 16 Constitution Save to avoid vomiting and nausea for the next 1d4 hours).",
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
          {
            location: 'Cities',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Redstar Flowers',
        description:
          "A strange plant with a translucent pink stem, numerous small branches fork off of the main stem, each of them ending in a small red flower with five petals. Each flower has a small opening which leads down the branch to a small pool of sap. The sap has a sickeningly sweet aroma which draws in small insects, which then become disoriented and perish in the sap and are dissolved. The plant is often harvested for the sweet sap, which is sifted to remove the remains of insects. Next the sap is heated, and used to coat confect'ions and pastries, which then hardens to become a glaze. Bakers in small cities will pay a large price for the raw sap.",
        locations: [
          {
            location: 'Mountains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Rewk',
        description:
          'The nodules of the stem of Rewk must be brewed in clear water for one whole day before drinking. It will then cure 1d8 points of damage.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Ribwort Plantain',
        description:
          'This plant has a cluster of dark green leaves, with marked parallel veins at its base, a single stem topped by a cluster of tiny, pale orange flowers. The chopped leaves are applied to the flesh to reduce bruising. A successful application will remove slight bruises altogether within an hour, more severe bruises will take 1d4 days.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Ripplebark',
        description:
          'Shelf-like fungus that looks like rooting flesh but is perfectly edible, although it tastes better if cooked properly. Restores 1d4+1 hit points if eaten raw and 2d4+2 hit points if properly prepared.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Ripplewood',
        description:
          "Dark-green vine up to 400 ft long with no roots or leaves native to the elemental planes of air but transplanted to the material plane. Forms massive twisted nests of at least 4 vines that choose their 'down' to be in the center between them to support from the bottom or from the top to hang from a cave ceiling or large tree. Often used by giant eagles and such to make nests. A cluster can support 500 lb per 5 ft square.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Rosecork',
        description:
          "A short tree that sprouts many diverging thick branches, the leaves are rather small and plent'iful. The bark is a light shade of red, and darkens during winter months. Due to the considerable amount of moisture that the trees retain, it is seen as a poor choice for burning. Rosecork wood will often take several hours of being exposed to hot flames before enough of the moisture has burned away before it catches fire. It is for this reason that it is occasionally used in construc'tion in areas surrounding volcanoes or in the construction of boats.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Rose Campion',
        description:
          "This herb will protect against scorpion stings for three days. It will protect against only one sting and also protects against `instant death' poison or one hit kills.",
        locations: [
          {
            location: 'Deserts',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Rose of Forgetfulness',
        description:
          "This unusual rose, often ident'ified by the mul'ticolored petals, are only found rarely in the wild, as their scent causes lingering problems. Their tangled vines are covered in sharp red thorns, and the smooth green leaves are t'inged in orange. Those that smell the mesmerizing fragrance of the roses must make a DC 15 Wisdom saving throw or forget the past 2d4 minutes. Failing the saving throw by 5 or more causes the vict'im to forget the past 1d6 hours, and a spellcaster to forget 1d6 spells occupying the highest spell slots first. Those that fail the saving throw by 10 or more forget the past 1d6 days, and spellcasters forget 2d6 spells occupying the highest spell slots first. Rolling a 1 on the saving throw causes the inhaler to suffer from complete amnesia, and can only be cured by a Wish, Heal, or Greater Restorat'ion spell to restore their forgotten iden'tity.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Legendary',
          },
          {
            location: 'Jungles',
            rarity: 'Legendary',
          },
          {
            location: 'Forests',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Rouddan',
        description:
          "A root vegetable, the leaves of the Rouddan are broad and soft. Known as the 'red turnip of Proskur' it is a staple food of nearby peasants. Due to necessity, a large variety of different methods of preparat'ion have arisen, including a thick stew of Rouddan, and as a base for slop mashes. The root keeps well when kept in a cool and dry climate, and resists decomposit'ion well. While they can be eaten raw, they are best soaked in broth or spiced water (heals for 1d4 hit points if eaten raw or 1d8 hit points if eaten in soup; the creation of soup can also split a single Rouddan into 8 servings).",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Ruby Apple',
        description:
          "A legendary tree allegedly created by a by a female elf most severely gifted in the cultivation of magically grown plants in her final moments of life. It's an apple tree that grows rubies instead of apples. Similar trees grow in Mottlegrasp's Orchard in Bytopia. The trees are scattered around far-remove areas of forest and if one is stumbled across, can be harvested for 2d4 fist sized rubies that each sell for 300 gp.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Ruby Blushrose',
        description:
          "The long stems of the rose are oddly free of thorns that grace other similar flowers, while the rose itself is abundantly large and red. The rose tends to grow in clumps with others of the same species. Smelling the rose has a curious effect, as the pleasing aroma causes people to blush. Extended exposure to the aroma causes exhaust'ion and light-headedness. Those that spend more than a few moments within 10 feet of a blushrose must make a DC 15 Const'itut'ion saving throw or suffer Disadvantage on Const'itut'ion and Wisdom saving throws for as long as they remain within proximity and 2d6 minutes afterward. Some romant'ics declare that the blushrose brings the euphoric and lightheaded feelings of being in love to the forefront.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Rue',
        description:
          'Rue is a small rounded bush which grows to about three feet in height. It has yellow, scoop-like flowers. The leaves are shaped like spades, and are blue-grey in color. It has seedpods which resemble a small lime. The seedpods should be consumed as an antidote to ingested poisons. Provided it is taken within 10 minutes, of the poison being ingested, and the poison has not already had its effect, it will neutralize the poison in 1d4 minutes, on a successful nature check.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Sabito',
        description:
          'This plant has leaves which are bluish in tinge, and is found growing in the sands of coastal dunes. The root is dark blue in color and small, pill-like growths sprout from these roots. Consuming one of these pills will allow the recipient to breathe underwater for 10 minutes, by allowing them to absorb the oxygen in the water directly into their skin through osmosis. Their skin has a translucent appearance for these ten minutes.',
        locations: [
          {
            location: 'Coastal',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Sable Fir',
        description:
          "A hardy tree that spreads runners from one original 'mother' tree, sometimes creating entire forests from one tree. The Sable Fir allegedly makes for excellent arrow-shafts and turns a deep lustrous black if lumbered mid-winter and rubbed with hot oils.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Saddilia',
        description:
          "This rare tree can grow up to 20-m tall, and can become quite old. It has dark red wood, and equally dark blue leaves. The flowers, which grow in small bunches, are startling white, almost radiant. Its nuts have a very special property; each nut raises the Intelligence or Wisdom (determine randomly) of the eater by 0.1 point (20 max). The effect lasts for a whole week, after which it fades again, although there is a 1% chance the effect is permanent. Around the tree there are often animals (squirrels, salmon) who eat the nuts on a regular basis, and are therefore quite intelligent, often possessing speech or even (DM's discretion) spellcasting abilities. The number of nuts available varies greatly, depending on the age of the tree, the number of creatures aware of its existence, etc., and mainly of course on the DM's wishes. Basically, the DM should determine how many of the players you wish to profit from it, multiply by ten, and make up an explanation as to why there are no more nuts.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Saffron',
        description:
          'The plant has a tuberous root, and large purplish flowers with yellow-red centers. The pistils of the flower must be pounded into a paste which is left to dry for a week. The resulting powder is taken as snuff. This herb raises all attribute scores by one for one hour. After consumption the first time, the user must make a DC 18 Constitution Save or become addicted. After the initial hour of stat raises, stats will lower from the base value by 1 every day until the next consumption.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Salamander Orchids',
        description:
          "Orchid that's constantly on fire, propagated by a talented spellcaster from the City of Brass. Allows any non-trained craftsman to turn a weapon into a flaming weapon with the appropriate nature check. Handling the orchid without proper tools deals 1d6 points of damage per minute.",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Rare',
          },
          {
            location: 'Cities',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Sand Vine',
        description:
          'Relatively rare rope-like seaweed found along temperate or warmer coasts. Grows both above and below water, commonly rooted to a small rock. Can be dried and used as rope. With alchemy, its juices can be made into Vine Oil, which is a topical aesthetic that allows a creature to fight until -5 hit points. Lasts for 1 hour, has the side-effect that within 24 hours of use, a creature cannot stabilize on its own (so even with successful death saves, the creature or person must be assisted). Regular use gives a signature salt and slight rotten fish smell.',
        locations: [
          {
            location: 'Coastal',
            rarity: 'Uncommon',
          },
          {
            location: 'Oceans',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Sandberry Bush',
        description:
          'Small bushes with waxy green leaves, the plant grows in the remote Battle of Bones. The bush has small yellow berries that have a bitter taste, but can be brewed to make a soothing tea. The few nomadic tribes that pass through the Battle of Bones pick the berries as a remedy for insomnia. Acts as a sleeping helper, so if the consumer is willing, induces a 6-hour sleep cycle with no negative side-effects.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Sanicle',
        description:
          'Sanicle leaves should be crushed and left in white wine, the strained through a cloth and drunk. It has the effect of binding wounds so that they are not reopened by action. It is a small plant with glossy green leaves, with long leaf stalks which are divided into three or five lobes. It has small white or pink flowers which sit at the top of a slender stalk. (+4 to rolls made with hit dice expended during a short rest.)',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: "Saracen's Compound",
        description: 'This herb cures fevers within 1d4-1 hours.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Sarasar',
        description:
          'A short, woody bush with very few leaves, commonly found near gullies and ravines, so the plants can collect as much water as possible. When the wood is burnt, it creates a long-lasting thick fog that will stay for about as long as it is burning after that it will vaporize in one hour. The smoke fills a cubic volume of 10 ft. by 10 ft. by 10 ft.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Sasami Tree',
        description:
          "This dwarf tree is favored among nobility of the southern provinces, as it is easy to cult'ivate and grows quickly. The sparse leaves it produces are diamond shaped and light green with a 'tinge of pink on the edges. The exercise in restraint is one lesson that the Sasami Tree teaches children of the wealthy patience and restraint. Cut'ting off too many branches causes the tree to sicken and perish, while allowing the tree to grow wild often causes the tree to turn into an unruly mess. The leaves are often exchanged as a decorative gift between servants and distant relatives.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
          {
            location: 'Cities',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Scarlet Heart Mushrooms',
        description:
          "Large black mushrooms covered in heart-shaped red spots, those trekking through swamps have a potent'ial of encountering the dangerous fungus. Sensing the heat of a living creature, when they come near the red spots burst, creat'ing a cloud of spores within a 5-ft radius. Anyone within the affected area must make a DC 13 Const'itut'ion saving throw or be blinded for 2d4 hours.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
          {
            location: 'Swamps',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Scented Mayweed',
        description:
          'Scented mayweed grows to a height of about 2 feet. It has erect and branching stems. It has small leaves, white flowers with a yellow center. The flowers must be crushed, emitting a pungent odor and should then be applied to the eyes in order to heal damage to them caused by acid or poison. If used within a day of the injury, they can prevent blindness.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: "Scholar's Dream",
        description:
          'Ivy that grows on the graves of sages and wise-men. If used as a component for abjuration domain spells it doubles range and duration.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
          {
            location: 'Cities',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: "Serapia's Turbith",
        description:
          "This herb will place the recipient into a deep sleep for one day. The recipient CANNOT be woken. At the end of the day, all wounds will be healed. It does not, of course, resurrect a dead person, but the plant's magically induced coma will regenerate lost limbs.",
        locations: [
          {
            location: 'Mountains',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Serpent Sweat',
        description:
          "The fungus appears to be a cluster of small yellow beads, often growing on decomposing matter. Small black stems hold them aloft, and their surface is shiny enough to reflect torchlight. While the fungus may appear like berries, they are quite poisonous. Underdark denizens will often collect the fungus wearing leather gloves to prevent touching it with their skin. When the fungi are touched with bare hands must make a DC 17 Const'itut'ion saving throw or be Paralyzed for 1d4 hours and begin to sweat profusely. Those that fail the saving throw by 5 or more suffer 32 (8d6) poison damage.",
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Serren Wood',
        description:
          "Tall, hardy trees transplanted from Arborea's top layer Arvandor, and a vessel for nature spirits. Bow, Arrow, or Crossbow bolt made from this wood adds 1d4+1 radiant damage to any successful attack.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Sessali',
        description:
          "A rugged thorny plant found by the sea. The leaves must be boiled for two hours in salt water, and the resultant mix sweetened with honey. This mixture will act as a cure for certain types of long-term, typically incurable ingested poisons (DM's discretion, as to which ones). The recipient must be made to drink one dose immediately the mixture is ready, and then some furthers dose every twelve hours for three days (7 doses in all). If the number of successful applications is four or more, the patient will recover.",
        locations: [
          {
            location: 'Coastal',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Sezarad',
        description:
          'Broad vivid flower with a short brittle root, which when chewed functions as a drug. The initial and secondary effects are 1d8 temporary hit points that overlap with each other that last for 10 minutes after initial ingestion. -1 to Wisdom checks for 20 minutes after ingestion.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Shadbush',
        description:
          'A red, waxy-leafed bush that produces small, burgundy colored berries that can be eaten in small amounts to ward off scurvy and nutrition-related illness.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Shadowrose',
        description:
          'A perfectly black rose bush, with black roots, stems, leaves, and buds, that grows only in deep caves and wilts in the presence of any light, magic or non-magic, brighter than a candle. When the petals of this rose are consumed, it will grant a regeneration rate of 3 hit points per round for 2d10 rounds. After that, the recipient will be unable to perform any action, including movement, for 2 rounds.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Shadowtop',
        description:
          "A rather tall and quickly growing tree that can be found throughout Faerun. The leaves only grow at the very top of the tree, and appear dark green above and have a copper hue from beneath. These leaves are also highly flammable, and are often gathered to be used as t'inder. The wood of the tree is quite fibrous, but not dense enough to be worthwhile building material. Instead the strands are often broken down and woven into thick rope. The wood burns fairly hot and long and without an abundance of smoke, thus making it ideal for use in hearth fires and torches.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Shaggy Ink Mushrooms',
        description:
          'A small, button mushroom that can be milked or squeezed out to harvest a shiny black liquid. This liquid, if consumed or absorbed through the skin, will cause the recipient to mope about vocally, and loudly question their choices in life. Affected creatures just want to lean against the wall and cry. A save is allowed for every instance they are slapped by another person, DC 16 Wisdom Save, with a cumulative +1 bonus per slap.',
        locations: [
          {
            location: 'Swamps',
            rarity: 'Rare',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: "Shepherd's Purse",
        description:
          'This herb rarely grows to a height of more than one and a half feet. It has small greyish green leaves, growing smaller towards the summit of the plant. It has small four petalled dirty-white flowers at its peak. If applied as a compress within 4 turns of taking poison damage, it will undo up to 3d4 of that damage.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Silver Hibiscus',
        description:
          'This silver-grey plant looks as though it represents madness itself. It often has random patterns and unplanned shapes, but always has a black web-like pattern on it. If touched bare-handed, the target must make a DC 14 Wisdom Save or take 2d6 Psychic damage. When prepared correctly, the leaf can take on the special qualities of the elements and grant a talentaed herbalist 3 uses of an elemental breath weapon, randomly chosen from Lightning, Poison, Fire, or Acid.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Legendary',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Silverleaf',
        description:
          "Only blooming by the light of a full moon, the plant appears to be largely nondescript un'til seen at night in full bloom. The ent'ire plant is basked in a silvery glow, and the flower is large and luminescent white. At the end of the night the flower falls off of the plant and quickly wilts in the morning sun. However, before the flower wilts, it can be ground into a fine powder, the mere smell of which repels lycanthropes, who take a -8 penalty to initiative when in the presence of the fresh flower.",
        locations: [
          {
            location: 'Mountains',
            rarity: 'Rare',
          },
          {
            location: 'Plains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Silverthorn (Aelebera)',
        description:
          'Silverthorn is a small thorny plant, white in color with red berries and silver thorns. This herb can function either as a poison or as an antidote to itself. It is found only by one lake located high in the mountains. For use as a poison the thorns must be crushed and boiled in oil over the course of a night, at which point, the resultant mixture may be smeared on the end of a weapon. When the weapon pierces its target, the poison will take effect killing the victim within 2d6 hours. There is no save and no cure, except for the antidote outlined below. Not even the most powerful magic can cure this poison. The only cure for this poison, is also made from the Silverthorn plant. The berries must be boiled in absolutely pure water, contained in a pure silver vessel, and the resultant mixture stored in a vial of absolutely pure glass until use. The liquid must be placed on the dying victims lips, where within 1d20 minutes, they will recover from the poisoning.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Silverwood',
        description:
          'A type of tree nurtured by sylvan elves to grow into unique forms, be free of disease and produce delicious sap that is made into famous elven mead. The sap is clear and slightly sticky, and provides a +2 bonus on Constitution saves VS poison for 1 hour.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Sinquoi',
        description:
          "The red leaves of this unusually twisted tree should be burned and the smoke inhaled. This will have the effect of `dilating' time (making it appear to pass slower.) For every minute experienced outside the influence of the herb, only thirty seconds will pass. A single dose is effective for 1d6 hours. Normally used by torturers to prolong agony, the leaves may also be used by people who must think quickly. It does not increase the speed at which a person moves but you may be able to see an opponent telegraph their movements more easily. (DC 20 Dexterity Save when a melee attack is targeted toward you, on a successful save, your AC increases by 2 for the period of that attack.) However, Sinquoi also causes side-effects in the form of halved movement speed for 1d6 hours after the initial dosage wears off.",
        locations: [
          {
            location: 'Deserts',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Sky Lotus',
        description:
          'White stemless flower native to high altitudes that can be found floating lazily through the air between 4 and 15 feet off the ground. Provides 1 day of nutrition if eaten, but contain trace amounts of arsenic that can affect creatures that eat a lot of them (DC 5 Constitution save that increases by 1 on each consecutive flower eaten, 1d8 poison damage on a failed save). If oil is collected from 10 sky lotuses, it produces a natural potion of levitation that is also a full dose of poison (DC 15 Constitution save,1d12 poison damage on a failed save).',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Sleeping Ivy',
        description:
          "This woody, vine with golden, spade shaped leaves growing in fan shaped clusters of three or five is a true climber, often reaching 30' to 40'. The blooms of Sleeping Ivy are blue-violet colored tufts, or puffballs, which become covered in an extremely fine yellowish powder. A rash of tiny, fluid filled blisters will form on any skin 1-4 hours after contact. Despite its 'angry' appearance, the inflamed area is not painful and does not itch, but instead will tingle numbly. After becoming exposed to Sleeping Ivy a victim will become more lethargic and harder to wake from sleep. At first the lethargy brought on by exposure may be so slight as to be unnoticeable, but it will increase in intensity each day it goes untreated. On the seventh day of untreated exposure the victim will fall asleep (quite peacefully) and never wake again. To treat Sleeping Ivy, the inflamed area must be bathed in alcohol. The higher the proof, the more rapid the recovery.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Coastal',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Sleepweed',
        description:
          'This plant appears similar to milkweed, and its pods contain sleep-inducing spores. If pods can be thrown as a ranged attack (range 5-ft), a struck target must make a DC 15 Constitution save or fall asleep for 1 minute.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Slimmerane',
        description:
          'A tropical, creeping ground vine that has small serrated leaves resembling the leaves of blackberry bushes. Instead of producing blackberries, however, this vine produces small pink berries that can be mashed into a pulp and consumed. Although exceedingly sour, this mixture will grant advantage on the saving throw for the next spell that is cast upon you. Lasts until this spell is cast or 24 hours if no such spell is cast.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
          {
            location: 'Plains',
            rarity: 'Rare',
          },
          {
            location: 'Mountains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Slumberweed',
        description:
          "Dried and powdered leaves of this plant, if inhaled or ingested, can cause a 'sleeplike state resembling death' for 8 hours (Constitution Save DC 13 negates). Can be delivered via blowgun (no Constitution save required to place the victim into sleep if delivered this way).",
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Snakespike',
        description:
          'A thin stalk covered with yellow-green flowers. The leaves can be steeped in water to make a tea that, when imbibed 3 times a day, reduces inflammation and restores strength; when made into an ointment, snakespike soothes and promotes rapid healing. (Tea gives 1d4 hp/day; ointment restores 1 hit point immediately per application but can only be administered to the same character once a day.)',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Snapping Grass',
        description:
          "Snapping Grass grows as a clump, or tuft of dark green, dagger shaped leaves, 4' to 6' tall. Six to twelve stalks, each 8' to 10' high grow from the center of this cluster. A pair of hinged, shovel shaped, bright fuchsia leaves, rimmed in spikes sit at the top of each stalk. These stalks sway constantly, as if moved by a gentle breeze. It is unclear how exactly Snapping Grass hunts, but the moving stalks are able to bend, lunge and snap up small creatures with exceptional accuracy. While this plant subsists almost entirely on a diet of small vermin and birds, some adventurers have reported that some clumps of Snapping Grass will lunge and shiny or sparkling objects like rings and gems.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Snowflake Lichen',
        description:
          'Magical plant that looks like snow and grows on rocks in cold climates. It leeches heat, DC 12 Constitution save, on a failed save deals 1d6 cold damage to creatures within 10 ft. Touching causes 1d12 cold damage on a failed Constitution save of 15.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Snowwood',
        description:
          "A pale tree that grows in the north, and has a slightly bluish cast to the mottled bark. The trunks of the trees are often thin and dense, with spindly limbs and dark green leaves. The mottled colorat'ion of the bark often forms into shapes that vaguely resemble faces, and a few tribes hold a belief that the trees hold the spirits of ancestors that watch over them. The trees are quite remarkable as they can survive in some of the coldest climates, and have even been seen as far north as the High Ice and the Reghed Glacier. The roots of the tree often stretch deep, anchoring the tree in places where other vegeta'tion would find difficult purchase.",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Soarwood',
        description:
          'Rare wood native to Aerenal that possesses magical buoyancy. Water-vessels made from Soarwood cost quadruple price to construct and move at double speed. Soarwood is 75% lighter than regular wood. It is a necessary component for the construction of Eberron-style airships, and when worked into an airship, it becomes naturally lighter than air.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Sparish Nut',
        description:
          'This herb is a powerful aphrodisiac. If successfully administered I would suggest that the DM or player roleplays the recipient accordingly. However, if a method of using dice to simulate its effect is wanted, anyone who attempts to seduce the recipient should have a bonus of +5 to their Persuasion checks for a period of 2d10 minutes.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Sparkleberry',
        description:
          'A single stalk bearing a number of curled leaves, the sweet berries of the plant are known throughout Faerun, and they sparkle radiantly in direct sunlight. Villagers often know of nearby patches of wild sparkle berries, and pick them in mid-summer. The berries have a variety of methods by which they are eaten. Fresh berries are often served with cheese, and many are processed into jams and jellies to be preserved for later. Consumption of the raw berries grants resistance to Radiant damage for 10 minutes while consumption of the jam or jelly grants resistance for 5 minutes.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Spectreflower',
        description:
          "This highly unusual plant grows in the deepest parts of dark forests, far from the eyes of civiliza'tion. The stalk is a blue-green color, and several pale leaves grow along the length. During nights of the full moon the plant buds a flower, which appears wispy and translucent. Attemp'ing to touch the flower reveals that it is incorporeal, and has the substance of smoke. Come morning the flower disperses on the wind, sending the seeds of the flower on their path. The roots of the flower can be used to make an oil that allows blades to strike incorporeal creatures, called Ghostbane Oil. Using the roots of the Specterflower, alchemists are capable of distilling an oil, that when applied to weapons, allows the weapon to inflict full damage upon incorporeal creatures as if they were physical creatures. The benefit lasts only for a few swings, up to the DM's discretion.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Spellbane',
        description:
          "A small but tenacious plant that grows in shadowed areas, clinging to rocks. The wide ragged leaves of the plant are filled with vibrant blue veins, and at night in the spring it produces small delicate blue flowers which crumble with the slightest touch. Surprisingly, the plant has an interes'ting effect upon magic users and magical creatures. Those that ingest parts of the plant lose the ability to cast spells and gain an increased resistance to magic for 3d4 days.",
        locations: [
          {
            location: 'Mountains',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Spiderbush',
        description:
          "Spiderbush is a small shrub, rarely growing larger than 2' in diameter, with waxy, light green leaves and an exposed woody root system. Tiny blue and white flowers develop on the tips of its branches, blooming year-round. If a Spiderbush does not receive sunlight for a 24-hour period it will use its root system to waddle, or shuffle, across the ground in search of light. Having stubby, makeshift legs when combined with frequently uneven jungle ground, Spiderbushes tend to lose their balance and tumble through the jungle. Due to their ambulatory nature and need for direct sunlight, Spiderbushes naturally cluster together in clearings or along the tree line near the shore of an island. Periods of extended rainfall have been known to trigger sizable migrations of hundreds, even thousands of Spiderbushes shuffling and tumbling through the jungle in search of the sun.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Spiderwort',
        description:
          'This herb will cure spider poison if applied within 2 rounds. The successful application will negate the poisoned effect and heal the amount of poison damage dealt. However, long-term effects, including death, remain. This plant may be found anywhere in temperate regions where there is chalky soil.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Spirit Moss',
        description:
          "A pale white moss that often grows on dead trees in marsh environments. Those familiar with the moss know to avoid it, as it attacks the living. Those that approach within 10 feet cause the moss to violently thrash about, forcing those within the area to make Dexterity saving throws, DC 13, or be grappled by the moss. Escaping the grasp of the moss requires a Strength saving throw, DC 11. The moss then implants spores that burrow into the skin of the trapped creature, inflict'ing 1d6+1 damage per round. After the creature is implanted, they suffer Disadvantage to all attribute and skill checks, as a terrible malaise washes over them. Once the creature dies, the body sprouts a new mass of spirit moss. The implanted spores can be destroyed by the applicat'ion of heat to the affected area on the round after implantat'ion, or with a Lesser Restoration or similar magic after that point.",
        locations: [
          {
            location: 'Swamps',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Spotty Dragonfire',
        description:
          'Wildflower with red, yellow, and orange petals that grows to 1-ft high and stretches 6 inches in diameter. The flower only blooms at night. It can be found in tropical to temperate regions and grows in single plants, except near red dragon lairs, where it glows plentifully. It can be made into Dragongrew, which grants a +1 bonus to all Constitution saves for 1 hour.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Spring Adonis',
        description:
          "This plant has small green leaves, and wide round yellow flowers. These flowers may be dried, and then eaten. They will then reduce the chance of a heart attack by half each day they are eaten. They may (at the DM's discretion) also help to strengthen the heart of a person, who through age, injury, or other cause, has a weak heart. Eaten ten or more of these flowers at a time will temporarily raise the Constitution and Strength scores of a person by 1 for 2d12 hours, while reducing their Dexterity by 2 for the same period. In addition to this reduction, the recipient also has a chance of suffering a fatal heart attack 3d12 hours after taking such a massive dose (DC 14 Constitution Save). Certain tribes of barbarians in the mountain regions where this herb is found use the herb in order to help them go berserk in battle. These tribes, due to constant dosing from birth have only a small chance of suffering the heart attack (DC 8 Cons. Save). According to legend, the Greek goddess Aphrodite changed her beloved Adonis, the son of King Cinyras, into this flower, just before he died after being wounded by a wild boar.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Mountains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Stirge Traps',
        description:
          "These short plants grow several wide leaves covered in fine hairs, and a single large bell-shaped flower. The flower exudes a s'icky sap that is deep red in hue, nearly the color of fresh blood, which also has a coppery aroma. The smell and colora'tion of the sap is intended to attract predators that prey on blood, such as st'irge and mosquitos. While smaller insects are trapped by the s'icky sap, the leaves are also covered in fine hairs, and when they are touched they curl up, trapping larger prey. Some farmers plant the flowers around the edges of their livestock pens, to keep st'irge predat'ion to a minimum, and in more urban areas pots of the sap are left out to trap mosquitos and other airborne pests. The plants are too small to effect people in the same manner.",
        locations: [
          {
            location: 'Swamps',
            rarity: 'Very Common',
          },
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Stoneshroom',
        description:
          'Chalky, rock-looking fungus native to the Underdark that is both edible (1 stoneshroom =1 meal) and produces spores in the form of breathable air. Also, for 24 hours after eating a stoneshroom, a creature can hold its breath twice as long as normal. Stoneshroom subsists on minerals in the rock and remains edible for 1 day after picking. With the proper nature check, smaller stoneshroom can be inserted into the nostrils to sustain breathing underwater or through poisonous gas.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Stonestream',
        description:
          'Given the name by gnomes, stonestream is a small lichen that produces a clear syrupy liquid that then drizzles down the sides of rocks that the lichen lives on. Collecting this syrup and heating into a tea for consumption will turn the user into stone for 2d4 hours. During this time, any poison or toxins, and most diseases, will be purged from the system into the stone surroundings. While turned to stone, the user takes one hit point of damage per hour.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Stonewort',
        description:
          "A leafy plant with small pink flowers that grows in bunches in open fields. The plant is rather unremarkable, except for its tenacity and resilience. Farmers will often complain that it chokes out other crops, unless it is pulled up by the root and no remnants of the plant remains, and livestock often refuse to eat it. The true worth of the plant is when it is ground into a powder and turned into a paste. Spreading it on exposed flesh causes the skin to become hardened and s'tiff, resilient enough to resist slashes and stabs. Grants a +1 bonus to Armor Class for 2d6 minutes. However, more than a single applicat'ion per day of the paste inflicts a -1 penalty on Dexterity based skill and saving throw rolls when applied, as the skin begins to st'iffen and become numb.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Strawberry',
        description:
          "These small red berries grow on very small bushes with pale green rounded leaves. Five berries should be bound into a bandage, which should then be applied to a lepers sores. If the application is successful, that sore will deteriorate no further. They're also just really tasty.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
          {
            location: 'Cities',
            rarity: 'Very Common',
          },
          {
            location: 'Mountains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Stygian Pumpkin',
        description:
          "A sulfur-scented, dead-looking variety of pumpkin that can grow in any temperate region and is cultivated by goblins as food. It grows rapidly over large areas, rendering the soil poisonous to other plants. It can be made into Devil's Soap, which is a stinking black paste that grants resistance to fire damage for 1 hour.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Suaeysit',
        description:
          "A dark black mushroom with greyish markings along the undersides, this fungus grows in shadowed forests in cool to cold climes. Suaeysit mushrooms can be eaten directly or dried and ground into tinctures or otherwise prepared. The mushrooms give the imbiber a rush of energy, clearing the mind and raising the spirits. However, they are highly addictive, and care must be taken when preparing and prescribing dosages. Often used to counteract shock in emergency situations. (Temporarily adds +1 to all stats ' no top limit to natural statistics, but it does not add to magically enhanced statistics ' and saving throws, and relieves effects of fatigue. This effect lasts for 1d4 hours, after which the user operates at -1 to all statistics and saving throws, and feels even more fatigued for 2d6 hours. The negative effects of 'coming down' can, of course, be counteracted by taking more the drug, with resultant addictive effects of gut-wrenching pain and 5 poison damage per day.)",
        locations: [
          {
            location: 'Forests',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Sunberry Bush',
        description:
          'A large bush with light green oval leaves, the branches are studded with small thorns. During the spring months the bush is covered with small golden flowers. The golden berries of the bush grow with small protrusions, giving them the appearance of a small flaming sun. While the freshly cut berries are sour, leaving them to sit in the sun for a day or two after being picked turns them remarkably sweet. The berries are often picked for Sunberry Wine. This wine is remarkably popular with Rangers, increasing the effective range of their weapons by 10 feet and granting them immunity to environmental cold, as well as flushed cheeks.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Sunflower of Pelor',
        description:
          "Large sunflower commonly found where undead were destroyed by a cleric's Destroy Undead. If petals are treated with various oils and solvents, the petals can be consumed to bolstering spells relating to the creation of light, doubling spell area.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Surane',
        description:
          "A tall, hardy reed capable of growing up to 10' tall, found mostly along salt and brackish water in colder climates. When mixed with oil and left to sit for a period of three days, the resulting mixture can be applied to the neck and will allow the character to breather underwater (and only underwater) for 2d4 hours.",
        locations: [
          {
            location: 'Coastal',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Sussur (Deeproot)',
        description:
          'A rare, magical, magic-dependent tree with long gnarled branches and banyan-like aerial roots found in the largest Underdark caverns. Grows to 60 ft of height, has very few leaves, and absorbs magic, creating massive (1d20 x 100 ft.) anti-magic fields.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Suth',
        description:
          "A tree with dark grey bark, and branches which sprout almost horizontally from the trunk for some distance before abruptly changing angles. The branches of mul'tiple trees growing close together often grow together, becoming a tangled mass, and sometimes creat'ing natural walls. The olive-green leaves were long and fluffy, but sport'ing a spike at the end which often made attempt'ing to push through the interlaced branches a painful task. The wood of the tree is renowned for being hard and durable, making cutt'ing them down very difficult. Thus, in some areas where lumbering has cleared away large swaths of trees, there are large copses of tangled Suth trees left untouched. When the trees have been cut down, however, it was found that they work wonderfully as shield-wood, especially since soaking it in water before battle keeps it from catching fire.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
          {
            location: 'Plains',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Swampwalker',
        description:
          "A curious plant that has caused more than a few strange tales from the rural villagers, the Swampwalker seems to stand out of the water, supported by a mass of tendrils, and sprout'ing a clump of pink flowers that attract various insects. Each tendril is the thickness of a finger, and due to slow currents in the swamp, the tendrils often clump together or break off ent'irely, causing the plant to look like a looming figure standing on the surface of the brackish water. One legend has it that the plants come alive during the darkest of nights. They stalk nearby villages hoping to catch the unwary and drag them back to watery graves. Whether this is true or not is completely unknown.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
          {
            location: 'Swamps',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Sweet Arcane',
        description:
          'A short river grass found alongside rivers and other bodies of water in humid, tropical environments. When this grass is ground into a cud with honey, the resulting decoction is a syrupy sweet treat that will allow spellcasters to memorize and prepare one extra spell per day. The level of the spell is determined by the number of grass used (12 stalks per level), and can only be of a level for which the caster has slots. Last 1d4 days.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Very Rare',
          },
          {
            location: 'Swamps',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Sweet Trefoile',
        description:
          'This feathery, slightly invasive waterplant will halve falling damage for 1d6 minutes after consumption.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Swordstalks',
        description:
          "A succulent plant with a cluster of three broad and thick leaves that grow from the ground, and sprout'ing a single small blue flower on the t'ips of each leaf each spring. The swordstalk often grows in tropical places, and often in the sandy soil near beaches and deserts. The broad and heavy leaves of the plant are often severed and dried, and the result is a fairly resilient weapon with a jagged edge on either side, capable of cutt'ing through flesh almost as easily as a steel sword. The result'ing weapon func'tions as either a short sword or a longsword, perfect for the discerning druid. However, on any critical fail on a roll to hit with the swordstalk, that the weapon is broken and rendered useless.",
        locations: [
          {
            location: 'Deserts',
            rarity: 'Very Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Tahtoalethi (Wishfern)',
        description:
          'Mystical plant that grants a wish every 1d100 years on the night of the winter solstice. Seed sells for 25000 gp, devilishly hard to cultivate.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Legendary',
          },
          {
            location: 'Jungles',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Tai-Gi',
        description:
          "The ground and powdered root of this small, almost flat plant will, if eaten, increase the efficiency of all a person's five senses by 5 times for a period of 2d6 hours. They will be able to see five times as far, and things five times as small, track by scent alone, hear the smallest sounds, and even taste many poisons on their tongues. A side effect is that they are also five times as susceptible to pain. (For each hit point of damage, the person must roll under their constitution minus damage taken. For example, if someone with a Constitution of 15 was hit for 6 points of damage, they would have to roll under 9 on a d20. If the person ever takes more damage than their Constitution score while under the influence of this herb, they have a 80% chance of instant death, just from the pain.)",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Takara Bulb',
        description:
          "A large bulbous mass that grows a half-dozen shoots that each end in a single leaf. The bulb is dark brown or even red in colorat'ion, while the leaves are a light green with red veins. During the spring a single large red flower forms at the center of the bulb. The bulb can be harvested and eaten raw, although it often tastes better after having been cooked. Many small mountain villages cultivate the bulb, as the plant grows well in rocky soil. (Heals for 1d4-1 hit points if eaten raw or 1d6+1 hit points if cooked).",
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
          {
            location: 'Mountains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Tamarind',
        description:
          "This low-hanging tree fruit will quench the thirst. However, it does not replace the water in their system. A person can still die of thirst, they just won't feel thirsty. Because of this fact, its use can be dangerous.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Tamariske (Blacktear)',
        description:
          'This herb will cleanse the body through the wounds, removing all disease in the form of black ooze that will drip from an open wound. If no wounds are open at the time, it will ooze from the tear ducts, giving the Tamariske its nickname. It does not cure lost hit points.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Tangara Kelp',
        description:
          "Growing out of the seabed, this dark green ropy kelp grows in shallow waters, and is both a blessing and a bane to sailors. The kelp often tangles oars, fishing nets, crab traps, and rudders. However, more than a few sailors stuck in the doldrums near a desolate island have survived off of little more than the purified water contained within the kelp's stalks and barrel-like fruit, as well as the schools of fish that dwell among the fronds.",
        locations: [
          {
            location: 'Oceans',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Tangled Waybread',
        description:
          'A soft, flowing, amber grain on a flexible stalk that grows in large patches in the middle of open fields. The grain often blows violently even in a low breeze, and will tangle up in itself , creating giant mats of grain that then slowly dies due to cramping and underwatering. The grain can be ground and turned into a meal that can be mixed with water and dried to form a simple but filling bread.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: "Taran'ka",
        description:
          'A small desert plant that mostly grows underground in the form of a tuber. A singular leaf sticks out from the sand and typically resembles a dead plant. However, if the tuber is harvested and cut into pieces, a single coin sized piece will cure any non-magical disease in 1d8 hours.',
        locations: [
          {
            location: 'Deserts',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Tateesha',
        description:
          "The tateen bush is a low-lying shrub with long thin leaves and small brown nuts. These nuts may be chewed to provide a short-lived feeling of euphoria, and are mildly addictive. They have the side effect of staining the teeth, making it easy to find a tateesha addict. The flowers, called silks, bloom only in spring, and if gathered and dried for one week form a powerful narcotic which may be smoked. For 2d10 minutes after smoking the persons insight is increased by +2, but for 1d4 hours after this, a state of distortion ensues, and the recipient's Intelligence and Wisdom drop by -2 from their normal levels. Prolonged use causes the user to collapse into an almost dreamlike trance. The drug is highly addictive, and after only two uses, the user must make a DC 16 Cons. Save or become addicted. Addicts lapse into the dreamlike trance stated above until their next exposure to the drug or until cured of addiction.",
        locations: [
          {
            location: 'Deserts',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Tekkil',
        description:
          'A succulent swamp plant with fat red leaves, which when chewed, function as an analgesic drug. Initially no effect, but after a few minutes, the user becomes almost entirely fearless, gaining +5 to Wisdom and Intelligence Saves against fear, and becoming immune to the Frightened effect for the next 1d20+10 minutes. Drug also grants a -5 penalty to all Dexerity saves for the next 1d4 hours. Overdose occurs with second dose during the original duration and causes halved movement speed for 2d4 hours as well as the negative Dexterity side-effect.',
        locations: [
          {
            location: 'Swamps',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Tempin',
        description:
          'A bushy climbing vine with tubular yellow flowers, the leaves and flowers of tempin can be boiled and made into a poultice that will draw out poisons from bites and stings and allow the wound to heal cleanly and without complications. (When poultice is applied promptly, gives an additional +2 to Cons. Saves vs. poison, once on any particular poison attack. Also gives back 1 extra hit point for every short rest for the first 2 days after poultice is applied.)',
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Tephrosia',
        description:
          'Tephrosia consists of a small woody stem, with fern like leaves along its length, and the plant is topped by several small flowers (or in summer, seedpods). Either the flowers or the seeds may be boiled in water and then drunk to calm the recipient. This is very useful when a person is delirious, or otherwise insane. It also has a mild pain relieving effect and may be given to the wounded or injured. The seedpods are more effective than the flowers and may also be dried. This herb is mildly addictive and should be used with care (DC 11 Cons. Save, addiction causes mild insomnia, turning long rests into short rests).',
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Terbas',
        description:
          'The leaf of this plant must be applied to the site of nerve damage or consumed to fix brain damage. If successful, the rate of healing for such damage will be doubled on each day of use.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Tereeka Root',
        description:
          'Slimy white tuber with a bitter taste, native to shaded, sandy ground in temperate climates. After chewing it for one minute a creature to can fight until they reach -5 hit points and can then only regain health while resting as if under the care of a healer for the next 12 hours.',
        locations: [
          {
            location: 'Rivers',
            rarity: 'Rare',
          },
          {
            location: 'Coastal',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Thalsen Weed',
        description:
          "A tough yellowish stalk that grows s'tiff triangle shaped leaves, the weed is despised throughout the Dalelands and Cormyr. Some believe the weed to have been magically created, as it grows from seed to mature adult in a matter of days, often seeming to appear instantaneously. Once the weed reaches maturity, it produces a small cluster of white flowers. The petals of the flowers are coated with a dusty powder that causes a slight rash if it comes into contact with the skin. These petals are some'times picked to create Itching Powder (When coming into contact with bare flesh, the victim must make a Cons'titut'ion saving throw, DC 13, or begin itching for the next 2d4 hours, or un'til the powder is washed off.). The rapidly growing weed is said to overcome crops nearly overnight, choking out carefully planted fields, and destroying months of work. Most livestock also refuse to eat the weed, with the except'ion of goats. Thus, many farmers that live in areas where Thalsen Weed thrives also keep a small number of goats that they let wander in the outer edges of their lands.",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Thanalayla',
        description:
          "A long stalk covered in small thorns and ending in a thick bulb, the plant hangs down from the branches of other trees. The thanalalya is a predatory plant, the stalks have their roots embedded in branches of trees, yet they cause no harm to their host tree. The plant instead secretes a s'icky resin that smells musky and attracts insects and small birds. Smaller insects are trapped in the resin, while the stalk curls around birds that would be capable of breaking free of the resin, gripping and impaling them with the thorns. The resin slowly dissolves the prey, providing nutrients to the thanalalya. The thanalayla, according to wives' tales, also wards off lesser fey. This may be the case because pixies are rumored to hate thanalayla because they can also get caught in its sticky resin.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Thelmallow Flower',
        description:
          "A floa'ting plant that inhabits marshes and swamps, the plant produces wide, waxy leaves that arc minutely out of the water, which are often the haven for mosquitos. The plant also buds large pale flowers with ragged petals that attract swamp flies. Grinding up the flower creates a paste which is used to create Spellslayer wine. Although the wine is quite refreshing, tasty, and light, it also reduces the magical ability of spellcasters, causing a permanent decrease to the amount of spell slots available at a given level (at the DM's discretion).",
        locations: [
          {
            location: 'Swamps',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Thir',
        description:
          'A grey-white lichen that grows off-shoots that resemble a short, spiky grass. The grass can be used in a compress or bandage to heal up to 4 damage if applied within 5 rounds of taking damage.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Thimbleweed',
        description:
          'A spiky, medium-length grass that grows in patches in areas of direct sunlight. As summer turns into fall, the tips of the grass begin to swell and turn into white, thimble shaped flowers. These flowers are a common cure for fevers and involved in a remedy that allows for a delay in the onset of illness or its symptoms.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Thistledown',
        description:
          'A very tall strain of thistle, growing often to 8 feet tall or more, can be harvested for the fibers within the central stalk. These fibers can be turned into a silken fabric by elves that can be worked into armor to make it easier to move in, increasing AC by 1 and increasing movement speed by 5 feet. Crafting with thistledown requires master leveling training from an elven craftsperson or a nature check of 25+.',
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Rare',
          },
          {
            location: 'Plains',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Thornapple',
        description:
          'This is a small ground hugging plant. Its seeds are about a quarter of an inch in diameter, and are covered in small thorns. A single seed is very effective as a minor pain reliever. It will ease small pains, such as headaches or minor muscular pains for 3d4 hours. The pain relief is almost instantaneous.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Throw-Waxe',
        description:
          'This herb will heal any scars in as little as a month if applied on a weekly basis.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Thurl',
        description:
          'The clove of Thurl must be brewed for one whole day. When the mixture is drunk it will restore 1 hit point and grant the user 5 points of free damage from fire and cold damage.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Thyme',
        description:
          'Thyme can grow up to a foot in height. It has tiny dark green leaves, and is an evergreen. In spring it has many sweet scented mauve flowers. The smell is so strong that the herb is often smelt before it is seen. These flowers must be dried and then mixed with fresh, clear water to produce an antiseptic lotion. This lotion can then be applied to infected wounds.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Cities',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Tickleweed',
        description:
          "Although Tickleweed grows as a thick, grass-like carpet of cylindrical dark green leaf-blades, 3'-4' in length, unlike normal grasses, Tickleweed prefers to grow on nearly vertical surfaces and will even thrive in dark places, assuming there is ample moisture. The cylindrical leaf-blades are highly sensitive to even the subtlest shifts in ambient temperature, so they move and shift continually. Tickleweed stretches towards increases in temperature and away from decreases. Each leaf moves independently causing the plants to appear to ripple and shiver with waves. Even the simple act of walking past a patch of Tickleweed will trigger a flurry of movement. Tickleweed bloom very rarely with circular flowers of red or white with a central black 'eye'. The flowers are prized by alchemists as they amplify concoctions related to detection, reaction, and rapid, fluid movement (up to DM's discretion).",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Torchstalk',
        description:
          'Non-magical mushroom that can serve as a torch. Takes 1d4-1 minutes to ignite, but burns for 24 hours shedding bright illumination in 10 ft radius. Has a sub-species that explodes into chocking spores after 30 seconds of burning, requiring anyone within 20 ft to make a DC 15 Constitution save to negate 1d10 poison damage. DC 18 Nature allows differentiation between the two types.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
          {
            location: 'Underdark/Caves',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Torment Toadstool',
        description:
          "Large blue mushrooms found in swamps all over Faerun, most people are careful not to step on the toadstools. Some villagers go out to harvest the mushrooms in order to make a part'icularly earthy tas'ting ale. Those that step on the toadstool causes it to rupture and release a cloud of spores within a 5-ft radius. Those that inhale the spores must make a DC 11 Const'itu'tion saving throw or become incapacitated while vomit'ing for the next minute.",
        locations: [
          {
            location: 'Swamps',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Trathua',
        description:
          'A thick black vine that grows along the floors of caves and caverns and subsists on the nutrients leftover from the meals of Giant Spiders. Cutting open a Tarthua Vine and drinking the liquid inside will make the character impervious to spider venoms for 2d6 hours. However, the liquid inside the vines clings to the mouth like cobwebs.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Troll Poppy',
        description:
          'A bright blue poppy flower commonly used to bribe trolls for safe passage through a monster-filled area. Trolls go wild for these flowers and will eat them as soon as they lay eyes on them. Usually found in large patches in open fields, 2d8 flowers can be harvested per 5 foot by 5 foot area. In addition to their use with trolls, the petals of troll poppies can be dried, crumbled, and smoked. When smoked, user will not be able to rest or sleep for the next 6d4 hours. During this time, the user can never lose consciousness unless dead, not from exhaustion, magical sleep, or poisons.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Trueroot',
        description:
          "A legendary sapling that is said to have been accidentally created during a series of experiments involving the repeated grafting of various magically enhanced roots onto treants, from which seeds were planted to create saplings that were then grafted with each other and so on. The trueroot saplings are said to have pulled magical energy from an unknown place, and this magical energy could be channeled into other plants to accelerate their growth to be 10 times faster, or be channeled by spellcasters to give perfect health and 'almost limitless spellcasting'. The trueroot died after small cutting were taken to propagate it and there have been no known successes in recreating it.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Twilight Birch',
        description:
          "The bark of this tree is a pale white, and quite smooth. The leaves of the tree are small, waxy and dark, and spend the day curled tightly, only to open at night. During colder months the tree sprouts small purple flowers that blossom at night. Legend says that the trees first erupted from the ground during a fight between an avatar of Shar, and an avatar of Selune. During the fight the avatar of Shar was wounded, and where her drops of her blood fell upon several saplings, they were forever changed. It has been noted that the trees were once found more commonly in places where the Shadow Weave was most prominent. The wood is soft and flexible when first cut, but hardens over the course of several days, allowing craftsmen to work easily on freshly cut wood to easily create ornate pieces. Once hardened, the wood retains the shape it was crafted into. The wood is often used to create furniture such as elaborately carved chairs, tables, and desks. Addit'ionally, the wood is used to crat intricately detailed scepters, wands, and staves, and a wooden weapon made of Twilight Birch is said to do extra damage to celestials (+3 force damage to successful against celestials). In addition, when a magical item is crafted using Twilight Birch, and used to cast a Death or Trickery Domain spell (even if used by non-Clerics), it allows the spell to be cast one level higher without using a higher-level spell slot. This ability can be used once per long rest, and only at night.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Twilight Green',
        description:
          'Distant belladonna relative, DC 16 Cons. Save to negate 2d8 poison damage if ingested. If used by a spellcaster during a spell that causes life drain, it increases damage by 1 point per spell level.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: "Tyrant's Sword",
        description:
          "Coarse grass with broad sharp leaves with silver edges that grows to 2-ft in height. Sporadically found in tundra and temperate plains, it grows slowly and doesn't compete well against other grasses. It can be made into Frost Lotion, Medicine Check of 12+, to heal 2d4 points of cold damage.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Umanhunan',
        description:
          "A tall tree that grows branches high off of the ground, the bushy leaves are dark green on the underside, and a very pale shade on top. The bark of the tree is rough and mottled between dark red and light brown. Locals often burn boughs of the tree to Azul, in hopes of bringing rainfall. Breathing in the fumes of burning Umanhunan leaves causes mild hallucina'tions and euphoria.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Umozokai Flower',
        description:
          'This hardy plant grows on the seaward side of many cliffs, looking out over the ocean. The vine clings to the rocks, and the broad fluffy leaves gather moisture from the wind. During the warmer months, the plant ‑lowers, producing long, sharp yellow petals tinged with crimson on the edges. Tea made from the flower petals is highly sought after, as it includes a wide variety of medicinal uses. Some nobles believe that drinking a single cup of Umozokai Tea a day ensures longevity.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Very Common',
          },
          {
            location: 'Coastal',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Ur',
        description:
          "The leafy, verdant Ur can be used as a substitute for one day's food. It cannot be used for more than three days or a character will begin to suffer -2 to all statistics. When any statistic is less than 3 the character become comatose, when any statistic reaches 0 they die. A character will regain 1 statistic point per day with food and medical care, but will remain incapacitated until all statistics reach normal levels.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Valerian',
        description:
          'Valerian grows to a height of about 3 feet, and has one hollow furrowed stem. It has large, pale green, serrated leaves along the length of this stalk which slits into flowers stems with small pink flowers at its top. The root is the useful part of this plant and should be grated into boiling water and the resulting infusion drunk in order to ease the spasms of somebody who is subject to fits. A successful application will stop all fits for 1d12 hours. The scent of the bruised or cut root also can be used to attract rats. According to some versions of the legend, the Pied Piper of Hamlin used this herb to lead the rats from the town.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Varenia',
        description:
          'A tall, woody-stemmed flower that grows during spring and summer months. The blooms are almost a foot across and a bright crimson red. The inside is filled with a large quantity of nectar, making the flower very popular among a large variety of birds. During the fall, as the plant starts to die in cooler temperatures, the nectar begins to spoil and take in bits and pieces of disintegrating plant matter which turns the nectar into a thicker, foul-smelling salve that can be applied to regenerate a lost limb or body part. The regeneration cycle takes 3 full days. There is a 10% chance the limb will be mutated.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Vaundyr Vine',
        description:
          "A thorny, thin vine that grows in wetter areas such as swamps and jungles. The waxy leaves are ground to create Alarvaun, a component for Spellslayer wine along with Thelmallow Flower. Although the wine is quite refreshing, tasty, and light, it also reduces the magical ability of spellcasters, causing a permanent decrease to the amount of spell slots available at a given level (at the DM's discretion).",
        locations: [
          {
            location: 'Swamps',
            rarity: 'Very Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Verdant Goeleth',
        description:
          "A large, pink vine fruit about the size of a small watermelon. Commonly pressed and fermented to create a dwarvish wine called Woebegetter Wine. This wine has the strange side-effect of allowing the drinker to hear the thoughts of anyone in a 5-mile radius of themselves that has been drinking Woebegetter Wine in the past 6 hours. This can be really useful if you're trying to coordinate a silent attack, and it can be dreadful if the people you're attacking are also drinking Woebegetter Wine, but keeping their thoughts mute so that you don't know that they know what you're doing. The effects last for 1d20 minutes per cup.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Rare',
          },
          {
            location: 'Cities',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Vinuk',
        description:
          'If this herb is given to an unconscious person, it will immediately awaken the person. It will only wake up a person who is unconscious due to alcohol or fainting etc., not that caused by physical damage. And just because the person is conscious does not mean that they are coherent.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Uncommon',
          },
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Violet Slime',
        description:
          "Lurking on the surface of stagnant pools of water deep in the marshes, this slime is deadly to those that are caught unaware. Not'icing the shimmer of violet indica'ting the slime lingering on the surface requires a DC 15 Wisdom (Percep'tion) skill check. While entering the pool the slime remains inert, but once the vict'im emerges from the pool, the slime clings to them. The slime becomes highly corrosive when removed from the pool and inflicts 2d6 acid damage per round unt'il it is washed off with water or exposed to bright light or fire. The corrosion only damages organic material, thus ignoring metal armor.",
        locations: [
          {
            location: 'Swamps',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Vipervine',
        description:
          'A hanging, invasive vine that grows through the upper canopies of swamps and tropical jungles that sprout thing, curly leaves, slightly resembling a hanging snake. Commonly used as a smoked herb, Viper Weed is slightly poisonous and causes auditory hallucinations if too much is smoked, and will also cause a person to get sick, identical illness to food poisoning. Some have said that the hallucinations tell secrets about the company you keep, but others have thrown that away as untrue.',
        locations: [
          {
            location: 'Swamps',
            rarity: 'Common',
          },
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Visma',
        description:
          'Tropical bush with dark broad leaves, which when made into a paste can soothe burns, i.e. heal 1d4 points of damage sustained from fire or burns. It also grants a +2 bonus on the next save of any stat made against fire.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Vodare',
        description:
          'Powder drug made from a tiny purple flower that grows on graves of Rallaster worshippers, Initial +2 bonus to Intimidate and Cons. Saves against fear for 1d4 hours. Secondary effect of -4 penalty to Persuasion and Deception for 2d4 hours. Overdose if additional dose within 4 hours of the first ingestion DC 15 Constitution Save or Petrified.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
          {
            location: 'Cities',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Vortax',
        description:
          "A secret guarded closely by ancient sects of druids around the realm, vortax is a green powder made from a plant of the same name. This powder must be held in the hand of a druid and burned, causing 3d8 fire damage to the druid, making druids that constantly use vortax easy to pick out. After the vortax is burned away, the druid's hands will start to glow a faint green. The druid can, as an action, conjure up a powerful thunderstorm within a mile radius area, and command any target to be struck by 5d20 lightning damage with no saving throws. This effect lasts for 1d4 minutes.",
        locations: [
          {
            location: 'Unknown',
            rarity: 'Unknown',
          },
        ],
        uses: [],
      },
      {
        name: 'Waredan',
        description:
          "A surprisingly hardy dwarf tree that grows about 5' or slightly less. The hard, waxy leaves of this tree can be combined sugar water in a boiling process to yield a concoction that, when injected into the bloodstream of a lycanthrope, will cause the lycanthrope to be unable to change form for 12 hours, even in the presence of magic that would cause this change instantaneously, like the spell Moonbeam.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Watercress',
        description:
          "A very small, leafy green that is commonly eaten in salads or as an added green in many meals. Eating this green in combination with a day's rations will replenish one hit die if consumed separately from a long rest.",
        locations: [
          {
            location: 'Rivers',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Waterorb',
        description:
          'Bulbous aquatic fungus that grows in boulder-like patches in some seaside areas and tidal pools. Can be used a source of fresh drinking water near the ocean.',
        locations: [
          {
            location: 'Coastal',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Waxtree',
        description:
          'Waxtrees have large, fuzzy, almost white leaves that grow in bunches at the ends of twisted, dark brown, woody branches that are 1-3 inches thick. While most commonly growing to a height of 2-3 feet, some Wax Trees have been known to grow as large as 8 feet tall. A shallow and spreading root system robs nearby plants of food and moisture causing these trees to be found with few neighbors, even in areas of otherwise dense vegetation. The branches, if broken, ooze a translucent purple, viscous fluid that smells vaguely of citrus. The wax burns cleanly and evenly making it a good alternative to beeswax, and alchemists often seek it out as a foundation for magical glues and thickeners. Exceptionally skilled alchemists are able to use this wax to create a putty that can *permanently* change the shape and structure of facial features. The would-be master of disguise should be cautious however as minor, even accidental, tweaks to this formula will create a putty that causes organic matter (like faces) to dissolve and melt away in a matter of seconds.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Waxworm',
        description:
          "A strange and small plant that is often found growing on rot'ting logs and animal droppings, the plant lacks much of a root system. The leaves are small and curled around the flowering part of the plant. Once the plant reaches maturity, the leaves fall away to reveal t'ightly curled pale flowers that appear to be large maggots to the untrained eye. Birds often eat the ‑lowers, thus spreading the seeds far and wide. Grinding the flowers into paste and boiling them produces a waxy substance which woodworkers can use to seal their work from moisture. Painters also seek out the substance, as it causes the colors to resist fading over the years.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Weeping Tree',
        description:
          "A species of deciduous tree that closely resembles oak, the weeping trees are often left alone while other nearby trees are cut down to use as t'imber, as strong supers'titions surround the tree. One tale speaks of a nature demigoddess long since forgotten being banished to inhabit the trees after losing a battle with Mielikki. Another speaks of a powerful druid sacrificing herself to save the forest, and her ghost lives on within the branches of the weeping trees. During autumn the trees begin losing their leaves and dropping their seeds, which is what creates the sound the trees are known for. Each seed has a small petal, which is shaped in such a way that when it falls it creates a sound similar to a person softly crying. As the trees often grow in clusters and they drop several thousand seeds each, over the course of a few weeks in autumn it sounds as if the trees are constantly weeping.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Weirwood',
        description:
          'Rare oak-like tree with leaves that are a silver-sheen brown on top and velvet black on the underside, often protected by Dryads and Treants. Can grow huge and many-branched, will not burn from non-magical fire, and imparts a warm clear tone to musical instruments made from it. It can replace oak or holly in any spell, and living Weirwood has quadruple fire resistance (no means to preserve this quality after harvesting is known). Weirwood within the illumination radius of a magical light source emits light as a candle for 1d4+1 rounds after leaving the area.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Werasa',
        description:
          'A short, leafy bush that produces small lilac flowers on the spring solstice. 2d8 flowers can be harvested from a single bush, and the petals of these flowers can be crushed and sprinkled over food to preserve the food for 1 week. There will be a faint trace of generic flower in the taste.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Cities',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'White Byrony',
        description:
          'This climbing vine has greenish white star shaped flowers, each bearing five petals, and has green berries which turn red when ripe. It has a root, something like a huge turnip, and this root should be ground up and boiled in water and drunk as a cure for pneumonia.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Whitecandle',
        description:
          'A tall, flowered plant with silvery-green leaves. When the flowers are mixed with water or wine and applied directly to a wound, they act as a painkiller. (Restores 1d4 immediately, but these points are lost as the effect wears off in 2 hours Further applications before the previous one has worn off are ineffective.)',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Whistling Cactus',
        description:
          "Growing on the edges of the desert are these pale green cact'i with long yellow spines. The cactus grows as a single cylindrical body, and when moisture is abundant the cactus will sprout several purple flowers near the top. After the flowers wither and fall off, they leave deep holes in the surface of the cactus. When the desert winds pass over these holes, they resonate at an unusual frequency that creates an eerie sound that can be heard for over a mile. Many nomadic tribes will avoid areas near the cactus, believing the plants to hold the souls of the damned that howl for eternity.",
        locations: [
          {
            location: 'Deserts',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Wild Fireclover',
        description:
          'Brilliant orange-red summer-flower found in temperate plains and farmland. Crushed petals give of a lovely smell for 1 week. The stem can be made into a substance called Mindfire, which when added to an ingested poison, imposes a -2 penalty to Cons. Saves to those who fail a save against the poison, and forces casters to make concentration checks (DC 15 + spell level) to cast spells.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Wildwood (Saelas)',
        description:
          'A flexible wood that can be worked into armor (counts as masterwork, +1 AC, Dex +1, negates stealth disadvantage on heavy armor styles). Wildwood heals a point of damage over 24 hours if exposed to sunlight for at least 1 hour, or, heals 5 points if also left to soak in water for 8 hours. Cost is double that of ordinary masterwork equivalent, but crating time is unaffected, and crafting requires craft (woodworking).',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Willow-Herb',
        description:
          'The plant grows to about three feet in height. It has long hairy leaves and large purplish-pink flowers. The smoke of this herb will keep away snakes and other minor vermin. One dose burns for about five minutes.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Swamps',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Winclamit',
        description:
          'Each Winclamit tree bears but one fruit per year. When this fruit is eaten it will restore 1d100 hit points to the recipient. The fruit can be stored for up to 2 months in a dry sealed container.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: 'Windwhip Tree',
        description:
          "Growing in small clumps in vast open plains, the tree grows straight up un'til it splits into thousands of willowy branches. Each of these branches are thin and whip-like, and are covered in small clumps of light green leaves and small red thorns. The bark of the tree is dark brown with lighter brown spots around the base of the tree. When the wind blows across the plains, the flexible branches and trunk bend far over. When the wind suddenly abates, the trunk abruptly snaps back into place, and the flexible branches make a popping noise not unlike the crack of a whip. This also causes the tree to fling their seeds far and wide. While the springiness of the wood makes it unacceptable to use for most construc'tion, it has been known to be used in ballistae.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Wispstalks',
        description:
          'This incredibly rare fungi has become something of a fable among herbalists. It is reported to have a large, translucent-blue bulbous cap growing atop a thin stem, and to normally form in small clusters deep within damp cave environments and forests. When consumed, the recipient first takes 1d6 poison damage and must make a DC 15. Cons. Save to keep it down. On a successful save, the recipient will gain the secondary effect of the wispstalk, becoming invisible for 1d8 minutes; on a failed save, nothing happens.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Very Rare',
          },
          {
            location: 'Forests',
            rarity: 'Very Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Witchweed',
        description:
          'A plant whose leaves and stalks can be refined into a paste, which is then rolled into a smoke-stick of sorts that creates 10 ft cube of light smoke (no concealment) that forces casters to make a concentration check as if casting defensively or lose the spell. The smoke is effective for 30 seconds.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Common',
          },
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Witchweave Palm',
        description:
          "A single Witchweave Palm Tree is comprised of three to five trunks, 10' to 12' in diameter, that grow in tight clusters and can reach 25' to 50' in height. The fronds of a mature Witchweave are approximately 3' long before splitting into 7 to 10 pale green leaves with drooping, fibrous tips that grow for another 2' to 3'. It is the numerous white fibers, resembling hair, appearing in the splits of the leaf tips that give the Witchweave its name. These leaves are prized by the Lizardfolk natives of the Swordfish Islands who harvest, dry and process them into rope and rough cloth. The Witchweave blooms with small yellow flowers that give way to oblong, reddish fruit about the size of a human thumb. If the fruits are dried, wrapped in fresh green Witchweave leaves and burned, a thick, deep blue smoke with a sweet, musky odor is produced. This smoke acts as a potent anesthetic to exposed flesh, and the Lizardfolk are known to fill tents and lodges with it for both medical and spiritual reasons. It is rumored that some of the Lizardfolk's powerful shaman are able to refine the fruit of the Witchweave even further to create potent healing salves and unguents, but if true, these secrets are highly guarded.",
        locations: [
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Wittlewort',
        description:
          'Herb with green gossamer-like fronds which, due to its rapid growth cycle, is found only in the spring in temperate, subtropical or tropical areas. Deters slugs and other pests. If powdered, it can be made into Wittlewort brew, which grants those under Charm effects another saving throw (if the effect allowed one).',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Wizard Hats',
        description:
          "A small conical mushroom that grows in the Underdark. The stem of the mushroom is pale white, and the cap is generally light orange to dark ochre in color, and some'times covered in spots. Drow often collect the mushroom, as even though it is bitter while it is st'ill fresh, cooking the fungus over an open flame causes it to shrink and take on a surprisingly meaty flavor. Some dark elf matrons send out foraging par'ties to harvest the mushroom so that it can be prepared for feasts.",
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Wolfsbane',
        description:
          'This small (15-cm) plant has black green leaves, sawed deeply several times, and three flower stalks with tiny white flowers and brown seed pods. The flowers can be crushed into dust and carried in the pocket to have the effect of granting a +2 on a Constitution saving throw vs poison to avoid lycanthropy. The protection lasts for 2d4 x 10 minutes and makes tracking from lycanthropes harder. In addition, the seeds can be consumed (DC 20 Cons. Save) to fully avoid the repercussions of lycanthropy.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Wolfweed',
        description:
          'Similar in appearance to Wolfsbane, this plant can be made into a substance called Journeyman Serum, which provides a +2 bonus on constitution checks to avoid damage from a forces march',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Woodrose',
        description:
          'If drunk in wine, this herb cause people to become very merry. Anyone who wishes to resist its effect can do so, if they make a DC 19 Cons. Save vs poison.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Rare',
          },
          {
            location: 'Forests',
            rarity: 'Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Wood Sorrel',
        description:
          "This is a small plant with leaves in three parts, like a shamrock. The flowers are bell shaped and are white with a dash of blue. The leaves must be crushed and dried for two weeks before use. This herb keeps people cool. It is obviously invaluable in desert regions. It doubles the person's ability to endure heat effects, but does not counteract dehydration, etc.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Common',
          },
          {
            location: 'Forests',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Wormwood',
        description:
          'The effects of this herb last for two hours. During this time the character can function at -10 hit points, or beyond the point of exhaustion. Wormwood normally grows to about four feet in height. It has a stiff and angular stem, reddish brown in color. It has deeply incised smooth leaves which are silvery white with a slight tinge of green. It has small, yellow-green flowers arranged in long spikes at the top of the stem. The herb is also a rather effective insect repellent and is often left with clothing to keep fleas away. It also makes a very effective antiseptic when mixed with rue (Intelligence check to remove all infection from a wound within 5d6 hours, healing an additional 2d6 during the next short rest to whoever the antiseptic is applied to). In addition to its above effects wormwood is also a prime ingredient in a very dangerous, very addictive drink called Absinthe which is milky green in color.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
          {
            location: 'Jungles',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Xitluchi',
        description:
          "A twisted bramble of branches, growing small clusters of stiff pale leaves, and covered in sharp thorns, the bush grows deep within jungles and forests. The roots of the bush are often exposed to the air, and are a favored nest'ing place for snakes and small vermin. Legend has it that the goddess Wa'il was once walking through the forest, draped in a fine robe made of dreams and sewn with threads of silver. Passing along, the robe was caught by a par'ticular bush, tearing the robe and causing it to spill dreams into the wind. Becoming angered by the act'ion, and the loss of dreams, Wa'il cursed the bush, causing it to transform into a twisted mockery of what it once was, and to be covered in thorns. However, the dream-related magic surrounding the plant remains. Consumption of the leaves in a pale tea leads to vivid and guiding dreams for 1d4 days afterward.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Uncommon',
          },
          {
            location: 'Jungles',
            rarity: 'Uncommon',
          },
        ],
        uses: [],
      },
      {
        name: 'Yagdav Bush',
        description:
          "A rather robust bush covered with waxy s'tiff leaves, the Yagdav is prominent in the north, and somet'imes used as topiary decorat'ion. During the warmer months the bush grows small yellow flowers. The flower petals are often dried and ground to make a tea that promotes fert'ility to couples that are having difficulty conceiving. The female is instructed to drink the tea every morning upon first awakening.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Yaran',
        description:
          "The pollen of this flower must be inhaled. A successful roll means that a person's sense of smell and of taste are doubled for one hour (advantage on perception checks for this period of time). The herb must still be growing or have been cut in the last 10 minutes.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
          {
            location: 'Plains',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Yarpick (Daggerthorn)',
        description:
          'A type of tree that grows small fruit whose seeds are nourishing both whole and as ground meal. The fruit are protected by long, thin, razor-sharp thorns approximately 3 inches long. These thorns have use as sewing needles, blow-darts, and as tiny daggers.',
        locations: [
          {
            location: 'Forests',
            rarity: 'Common',
          },
          {
            location: 'Jungles',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Yarrow',
        description:
          'The small white flowers of this herb, which cluster at the top of its one to two feet tall straight stem, should be crushed and applied to wounds. If successfully used it will stop minor bleeding, and reduce major bleeding to the minor level. A second application can then be used to stop the minor bleeding. According to legend Achilles used yarrow to treat wounded Greek troops during the Trojan War. The successful application of Yarrow grants an additional +4 to hit points regained during a short rest.',
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Yavethalion',
        description:
          'A small, groundcover shrub that sprouts tiny yellow flowers in spring which then turn to tiny yellow berries during summer months. 2d20 berries can be harvested from one plant. When the fruit is eaten, it will restore 1d4-1 hit points to the recipient. Yavethalion keeps for only two weeks.',
        locations: [
          {
            location: 'Mountains',
            rarity: 'Common',
          },
          {
            location: 'Plains',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Yazur',
        description:
          'Resembling a wild grape in tropical climates, yazur is a small purple berry that can be eaten outright, by anyone but a spellcaster, and tastes like sour apples. If a spellcaster eats yazur berries, the caster will lose a slot of the highest level spell they have until the next long rest. Yazur can also be mashed into a paste with sugar. Applying this paste to any magic object will drain any magic abilities from it, and reverting the object to a normal, non-magical item in the process. If the paste is then eaten after absorbing this magic, it will heal the character to full hit points. In addition, the yazur plant can also be used against spellcasters in a tactical attack. When a spellcaster is directly injected with juice from the berries, all spells that the caster has memorized and prepared for the day will be obliterated from their memory.',
        locations: [
          {
            location: 'Jungles',
            rarity: 'Legendary',
          },
        ],
        uses: [],
      },
      {
        name: "Young Lad's Love",
        description:
          "Young lad's love is a 3 to 5-foot-tall shrub with many branches that resemble small trees. It has small yellow-white flowers, and green feathery leaves, which smell of lemon. These leaves turn a rich orange-brown in late autumn. The flowers should be crushed and placed into a poultice, to be used. A successful application will cure one small area of frostbite, such as a foot or hand, in 2d4 hours.",
        locations: [
          {
            location: 'Plains',
            rarity: 'Very Common',
          },
          {
            location: 'Forests',
            rarity: 'Very Common',
          },
        ],
        uses: [],
      },
      {
        name: 'Ylam Tree',
        description:
          "Found in many deserts, the Ylam Tree is a short, stout evergreen that survives on very little amounts of water and maintains its internal moisture using a thick red sap. Imbibing a sufficient quantity of this so-called 'Ylam blood' or 'blood of glory' induces a frenzy of aggressive emotions which are especially strong in the heat of battle, leading to a berserk rage. Combatants under the influence of the blood of glory gain a +1 to hit and +2 to damage, but suffer a -3 penalty to armor class, due to the reckless abandon induced by the fluid for 2d6 hours after consumption.",
        locations: [
          {
            location: 'Deserts',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Zalanthar',
        description:
          "Also called blackwood or darkwood in the North, the bark of the tree ranges from the color of pitch to a dark ash. The tree itself actually is comprised of an extensive root system, from which a number of trunks sprout to the heavens. While the trunk and branches are extremely dark, the leaves of the tree are pale grey and white, often giving the branches an appearance of glowing in the moonlight. The trees are often harvested for their precious darkwood, which has the sturdiness of other hard woods, but is favored because it only weighs half as much. Darkwood weapons and shields are often very light and worked only by the most skilled of craftsmen, both propert'ies that cause such goods to be quite expensive. Wizards of the South favor darkwood when construct'ing rods, wands, and staves (shields made of darkwood grant +2 AC and +1 to stealth checks made while holding the shield). Since zalanthar requires masterwork, it requires training or high knowledge of nature in order to work with.",
        locations: [
          {
            location: 'Forests',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Zulsendra',
        description:
          "When this mushroom is eaten, it doubles a person's rate of movement, and rate of attack for three rounds, imposing advantage on rolls to hit. At the end of that time the person must make a DC 16 Cons. Save versus poison or collapse in exhaustion for 1d6 turns.",
        locations: [
          {
            location: 'Arctic',
            rarity: 'Very Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Zur',
        description:
          "This fungus must be brewed for six hours. A successful roll means that a person's senses of smell and of hearing are doubled for one hour. (Advantage on perception rolls based on smell or hearing.)",
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Rare',
          },
        ],
        uses: [],
      },
      {
        name: 'Zurkhwood',
        description:
          'Giant 30-40 ft high mushroom. Has large spores that can be eaten as bread if baked properly, and its hardy stalks serve as an Underdark substitute for wood.',
        locations: [
          {
            location: 'Underdark/Caves',
            rarity: 'Common',
          },
        ],
        uses: [],
      },
    ];
  }
}
