import { createRoute, z } from '@hono/zod-openapi'

const Error400Schema = z
  .object({
    details: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A more in-depth description of the issue, including parameters and/or error text when available.',
        example: 'Provided month filter jonuary was not recognized as a valid month.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A brief title describing the error.',
        example: 'Failed to identify the provided month filter.',
      }),
  })
  .openapi({ description: 'Bad request (often an invalid input).', required: [] })
  .openapi('Error400')

const Error401Schema = z
  .object({
    details: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A more in-depth description of the issue, including parameters and/or error text when available.',
        example: 'UUID is either missing or invalid; or, unspecified server occured.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A brief title describing the error.',
        example: 'Failed to validate UUID.',
      }),
  })
  .openapi({ description: 'Unauthorized.', required: [] })
  .openapi('Error401')

const Error404Schema = z
  .object({
    details: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A more in-depth description of the issue, including parameters and/or error text when available.',
        example: 'MediaWiki Cargo request succeeded by nothing was returned for the parameters: {}',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A brief title describing the error.',
        example: 'No data was found for the given query.',
      }),
  })
  .openapi({ description: 'Not found.', required: [] })
  .openapi('Error404')

const Error500Schema = z
  .object({
    details: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A more in-depth description of the issue, including parameters and/or error text when available.',
        example: 'Details unknown.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A brief title describing the error.',
        example: 'API experienced a fatal error.',
      }),
  })
  .openapi({ description: 'Internal server error.', required: [] })
  .openapi('Error500')

const NHArtworkSchema = z
  .object({
    art_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the real-life analog to the artwork.',
        example: 'Vitruvian Man',
      }),
    art_style: z
      .string()
      .exactOptional()
      .openapi({ description: 'The art style of the artwork.', example: 'Pen and ink on paper' }),
    authenticity: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the difference between real and fake, if there is one',
        example:
          'If there is a coffee stain in the top right corner, it is fake. If there is no stain, it is genuine. The forgery has a key taped to the back of the canvas.',
      }),
    author: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The author of the real-life analog to the artwork.',
        example: 'Leonardo da Vinci',
      }),
    availability: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The availability of the artwork.',
        example: "Jolly Redd's Treasure Trawler",
      }),
    buy: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of Bells the artwork may be purchased for.',
        example: 4980,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the artwork.',
        example:
          'This drawing is based on the &quot;ideal&quot; human-body ratio, as stated in &quot;De architectura.&quot; &quot;De architectura&quot; was a treatise by Vitruvius, an architect from the early 1st century BCE.',
      }),
    fake_image_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Image of the fake artwork, if it exists.',
        example: 'https://dodo.ac/np/images/1/13/Academic_Painting_%28Forgery%29_NH_Icon.png',
      }),
    has_fake: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the artwork has a fake or not.', example: true }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "Image of the real artwork. dodo.ac is Nookipedia's CDN server.",
        example: 'https://dodo.ac/np/images/e/e8/Academic_Painting_NH_Icon.png',
      }),
    length: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The length of the artwork.', example: 1 }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the artwork.', example: 'Academic Painting' }),
    sell: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "The number of Bells the artwork can be sold to Nook's store for, when it is genuine.",
        example: 1245,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the respective Nookipedia article.',
        example: 'https://nookipedia.com/wiki/Academic_Painting',
      }),
    width: z
      .float32()
      .exactOptional()
      .openapi({ description: 'The width of the artwork.', example: 1 }),
    year: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The year that the real-life analog was made.',
        example: 'circa 1487',
      }),
  })
  .openapi({ required: [] })
  .openapi('NHArtwork')

const NHBugSchema = z
  .object({
    catchphrases: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An array of possible catchphrases the player says after catching the bug. Most critters have just one, but some can have multiple.',
        example: ["I caught a grasshopper! They're a grass act!"],
      }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "Image of the bug. dodo.ac is Nookipedia's CDN server.",
        example: 'https://dodo.ac/np/images/3/37/Grasshopper_NH_Icon.png',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Short descriptor of where the bug can be found.',
        example: 'On the ground',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the bug.', example: 'Grasshopper' }),
    north: z
      .object({
        availability_array: z
          .array(
            z
              .object({ months: z.string().exactOptional(), time: z.string().exactOptional() })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              'An array of objects, each object holding a months string and the time the critter is availabile during the specified month(s) in the northern hemisphere. Most critters will have just one object. A small number of critters have variable time availability in which case this array will have multiple objects.',
            example: [{ months: 'Jul – Sep', time: '8 AM – 5 PM' }],
          }),
        months: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The months the bug is available for in the Northern hemisphere. If all year, value will be `"All year"`.',
            example: 'Jul – Sep',
          }),
        months_array: z
          .array(z.int())
          .exactOptional()
          .openapi({
            description:
              'An array of integers representing the months the bug is available in the Northern hemisphere.',
            example: [7, 8, 9],
          }),
        times_by_month: z
          .object({
            '1': z.string().exactOptional(),
            '2': z.string().exactOptional(),
            '3': z.string().exactOptional(),
            '4': z.string().exactOptional(),
            '5': z.string().exactOptional(),
            '6': z.string().exactOptional(),
            '7': z.string().exactOptional(),
            '8': z.string().exactOptional(),
            '9': z.string().exactOptional(),
            '10': z.string().exactOptional(),
            '11': z.string().exactOptional(),
            '12': z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({
            description:
              'An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.',
            example: {
              '1': 'NA',
              '2': 'NA',
              '3': 'NA',
              '4': 'NA',
              '5': 'NA',
              '6': 'NA',
              '7': '8 AM – 5 PM',
              '8': '8 AM – 5 PM',
              '9': '8 AM – 5 PM',
              '10': 'NA',
              '11': 'NA',
              '12': 'NA',
            },
            required: [],
          }),
      })
      .exactOptional()
      .openapi({
        description: 'When you can catch the bug in the Northern hemisphere.',
        required: [],
      }),
    number: z
      .int()
      .exactOptional()
      .openapi({
        description: 'In-game bug number, marking position in the Critterpedia.',
        example: 19,
      }),
    rarity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'How rare the bug is. Note that this field is currently empty for most bugs as we do not yet know how exactly bug rarities are calculated in the game code.',
        example: 'Uncommon',
      }),
    render_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "Render of the bug. dodo.ac is Nookipedia's CDN server.",
        example: 'https://dodo.ac/np/images/1/1d/Grasshopper_NH.png',
      }),
    sell_flick: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of Bells the bug can be sold to Flick for. This value is always 1.5x that of `sell_nook`.',
        example: 240,
      }),
    sell_nook: z
      .int()
      .exactOptional()
      .openapi({
        description: "The number of Bells the bug can be sold to Nook's store for.",
        example: 160,
      }),
    south: z
      .object({
        availability_array: z
          .array(
            z
              .object({ months: z.string().exactOptional(), time: z.string().exactOptional() })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              'An array of objects, each object holding a months string and the time the critter is availabile during the specified month(s) in the southern hemisphere. Most critters will have just one object. A small number of critters have variable time availability in which case this array will have multiple objects.',
            example: [{ months: 'Jan – Mar', time: '8 AM – 5 PM' }],
          }),
        months: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The months the bug is available for in the Southern hemisphere. If all year, value will be `"All year"`.',
            example: 'Jan – Mar',
          }),
        months_array: z
          .array(z.int())
          .exactOptional()
          .openapi({
            description:
              'An array of integers representing the months the bug is available in the Southern hemisphere.',
            example: [1, 2, 3],
          }),
        times_by_month: z
          .object({
            '1': z.string().exactOptional(),
            '2': z.string().exactOptional(),
            '3': z.string().exactOptional(),
            '4': z.string().exactOptional(),
            '5': z.string().exactOptional(),
            '6': z.string().exactOptional(),
            '7': z.string().exactOptional(),
            '8': z.string().exactOptional(),
            '9': z.string().exactOptional(),
            '10': z.string().exactOptional(),
            '11': z.string().exactOptional(),
            '12': z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({
            description:
              'An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.',
            example: {
              '1': '8 AM – 5 PM',
              '2': '8 AM – 5 PM',
              '3': '8 AM – 5 PM',
              '4': 'NA',
              '5': 'NA',
              '6': 'NA',
              '7': 'NA',
              '8': 'NA',
              '9': 'NA',
              '10': 'NA',
              '11': 'NA',
              '12': 'NA',
            },
            required: [],
          }),
      })
      .exactOptional()
      .openapi({
        description: 'When you can catch the bug in the Southern hemisphere.',
        required: [],
      }),
    tank_length: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The length of the tank when the bug is placed as a furniture item.',
        example: 1,
      }),
    tank_width: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The width of the tank when the bug is placed as a furniture item.',
        example: 1,
      }),
    total_catch: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The total number of bug the player has to have caught before this bug will start spawning.',
        example: 0,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the respective Nookipedia article.',
        example: 'https://nookipedia.com/wiki/Grasshopper',
      }),
  })
  .openapi({ required: [] })
  .openapi('NHBug')

const NHClothingSchema = z
  .object({
    availability: z
      .array(
        z
          .object({ from: z.string().exactOptional(), note: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Where the clothing may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.',
        example: [{ from: 'Able Sisters', note: '' }],
      }),
    buy: z
      .array(
        z
          .object({ currency: z.string().exactOptional(), price: z.int().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of prices, for when the item may be purchased with Bells, Nook Miles, etc..',
        example: [{ currency: 'Bells', price: 490 }],
      }),
    category: z
      .enum([
        'Tops',
        'Bottoms',
        'Dress-up',
        'Headwear',
        'Accessories',
        'Socks',
        'Shoes',
        'Bags',
        'Umbrellas',
      ])
      .exactOptional()
      .openapi({
        description: "The category of item as shown in the player's inventory.",
        example: 'Accessories',
      }),
    label_themes: z
      .array(
        z.enum([
          'Comfy',
          'Everyday',
          'Fairy tale',
          'Formal',
          'Goth',
          'Outdoorsy',
          'Party',
          'Sporty',
          'Theatrical',
          'Vacation',
          'Work',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          "The clothing's Label theme(s). This is used for completing the requested outfit theme for [Label](https://nookipedia.com/wiki/Label) when she visits the player's island.",
        example: ['Party'],
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the clothing.', example: '3D Glasses' }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Any additional miscellaneous information about the clothing, such as a name change from a past update.',
        example: '',
      }),
    seasonality: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time of the year that the clothing is available.',
        example: 'All year',
      }),
    sell: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of Bells the clothing can be sold to the store for.',
        example: 122,
      }),
    styles: z
      .array(z.enum(['Active', 'Cool', 'Cute', 'Elegant', 'Gorgeous', 'Simple']))
      .exactOptional()
      .openapi({
        description: "The clothing's style(s). Styles are used for gifting villagers.",
        example: ['Active'],
      }),
    unlocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether the item is available through legitimate gameplay. Some items are added to the game files in an update, but aren't actually made available until a subsequent update unlocks them.",
        example: true,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the respective Nookipedia article.',
        example: 'https://nookipedia.com/wiki/Item:3D_Glasses_(New_Horizons)',
      }),
    variation_total: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
        z.literal(8),
      ])
      .exactOptional()
      .openapi({
        description: 'The total number of variations the clothing has, between 0 and 8.',
        example: 2,
      }),
    variations: z
      .array(
        z
          .object({
            colors: z
              .array(
                z.enum([
                  'Aqua',
                  'Beige',
                  'Black',
                  'Blue',
                  'Brown',
                  'Colorful',
                  'Gray',
                  'Green',
                  'Orange',
                  'Pink',
                  'Purple',
                  'Red',
                  'White',
                  'Yellow',
                ]),
              )
              .exactOptional(),
            image_url: z.string().exactOptional(),
            variation: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of objects, each object representing a variation of the clothing. Clothing that has no variations (only one version) will have a single variation object with the image URL and colors, but the `variation` field will be empty. Clothing with multiple variations will have the `variation` fields defined with the name of each variation.',
        example: [
          {
            colors: ['White', 'Colorful'],
            image_url: 'https://dodo.ac/np/images/1/15/3D_Glasses_%28White%29_NH_Icon.png',
            variation: 'White',
          },
          {
            colors: ['Colorful', 'Black'],
            image_url: 'https://dodo.ac/np/images/2/28/3D_Glasses_%28Black%29_NH_Icon.png',
            variation: 'Black',
          },
        ],
      }),
    version_added: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of *New Horizons* that the item was added. Items that were included at the game\'s launch have version "1.0.0".',
        example: '1.0.0',
      }),
    vill_equip: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether villagers may equip this item.', example: true }),
  })
  .openapi({ required: [] })
  .openapi('NHClothing')

const NHEventSchema = z
  .object({
    date: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date of the event in YYYY-MM-DD format.',
        example: '2021-05-01',
      }),
    event: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the event.', example: 'May Day event begins' }),
    type: z
      .enum(['Event', 'Nook Shopping', 'Recipes', 'Birthday'])
      .exactOptional()
      .openapi({
        description:
          'The type of event. "Event" is a festivity the player can take part in. "Nook Shopping" refers to the [seasonal events](https://nookipedia.com/wiki/Nook_Shopping_seasonal_event) in which exclusive item(s) are available via []Nook Shopping](https://nookipedia.com/wiki/Nook_Shopping). "Recipes" refers to the start or end of certain recipes being available. "Birthday" refers to the birthday of a villager or special character.',
        example: 'Event',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the respective Nookipedia article for the event.',
        example: 'https://nookipedia.com/wiki/May_Day',
      }),
  })
  .openapi({ required: [] })
  .openapi('NHEvent')

const NHFishSchema = z
  .object({
    catchphrases: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An array of possible catchphrases the player says after catching the fish. Most critters have just one, but some can have multiple.',
        example: ["I caught a cherry salmon! It's the perfect topper for a marlin sundae!"],
      }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "Image of the fish. dodo.ac is Nookipedia's CDN server.",
        example: 'https://dodo.ac/np/images/d/db/Cherry_Salmon_NH_Icon.png',
      }),
    location: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Short descriptor of where the fish can be found.',
        example: 'River (clifftop)',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the fish.', example: 'Cherry Salmon' }),
    north: z
      .object({
        availability_array: z
          .array(
            z
              .object({ months: z.string().exactOptional(), time: z.string().exactOptional() })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              'An array of objects, each object holding a months string and the time the critter is availabile during the specified month(s) in the northern hemisphere. Most critters will have just one object. A small number of critters have variable time availability in which case this array will have multiple objects.',
            example: [
              { months: 'Mar – Jun', time: '4 PM – 9 AM' },
              { months: 'Sep – Nov', time: 'All day' },
            ],
          }),
        months: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The months the fish is available for in the Northern hemisphere. If all year, value will be `"All year"`.',
            example: 'Mar – Jun; Sep – Nov',
          }),
        months_array: z
          .array(z.int())
          .exactOptional()
          .openapi({
            description:
              'An array of integers representing the months the fish is available in the Northern hemisphere.',
            example: [3, 4, 5, 6, 9, 10, 11],
          }),
        times_by_month: z
          .object({
            '1': z.string().exactOptional(),
            '2': z.string().exactOptional(),
            '3': z.string().exactOptional(),
            '4': z.string().exactOptional(),
            '5': z.string().exactOptional(),
            '6': z.string().exactOptional(),
            '7': z.string().exactOptional(),
            '8': z.string().exactOptional(),
            '9': z.string().exactOptional(),
            '10': z.string().exactOptional(),
            '11': z.string().exactOptional(),
            '12': z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({
            description:
              'An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.',
            example: {
              '1': 'NA',
              '2': 'NA',
              '3': '4 PM – 9 AM',
              '4': '4 PM – 9 AM',
              '5': '4 PM – 9 AM',
              '6': '4 PM – 9 AM',
              '7': 'NA',
              '8': 'NA',
              '9': 'All day',
              '10': 'All day',
              '11': 'All day',
              '12': 'NA',
            },
            required: [],
          }),
      })
      .exactOptional()
      .openapi({
        description: 'When you can catch the fish in the Northern hemisphere.',
        required: [],
      }),
    number: z
      .int()
      .exactOptional()
      .openapi({
        description: 'In-game fish number, marking position in the Critterpedia.',
        example: 27,
      }),
    rarity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'How rare the fish is. Note that this field is currently empty for most fish as we do not yet know how exactly fish rarities are calculated in the game code.',
        example: 'Uncommon',
      }),
    render_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "Render of the fish. dodo.ac is Nookipedia's CDN server.",
        example: 'https://dodo.ac/np/images/c/c0/Cherry_Salmon_NH.png',
      }),
    sell_cj: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of Bells the fish can be sold to C.J. for. This value is always 1.5x that of `sell_nook`.',
        example: 1500,
      }),
    sell_nook: z
      .int()
      .exactOptional()
      .openapi({
        description: "The number of Bells the fish can be sold to Nook's store for.",
        example: 1000,
      }),
    shadow_size: z
      .enum([
        'X-Small',
        'Small',
        'Medium',
        'Medium w/Fin',
        'Large',
        'Large w/Fin',
        'X-Large',
        'XX-Large',
        'Long',
      ])
      .exactOptional()
      .openapi({ description: "The size of the fish's shadow.", example: 'Small' }),
    south: z
      .object({
        availability_array: z
          .array(
            z
              .object({ months: z.string().exactOptional(), time: z.string().exactOptional() })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              'An array of objects, each object holding a months string and the time the critter is availabile during the specified month(s) in the southern hemisphere. Most critters will have just one object. A small number of critters have variable time availability in which case this array will have multiple objects.',
            example: [
              { months: 'Sep – Dec', time: '4 PM – 9 AM' },
              { months: 'Mar – May', time: 'All day' },
            ],
          }),
        months: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The months the fish is available for in the Southern hemisphere. If all year, value will be `"All year"`.',
            example: 'Mar – May; Sep – Dec',
          }),
        months_array: z
          .array(z.int())
          .exactOptional()
          .openapi({
            description:
              'An array of integers representing the months the fish is available in the Southern hemisphere.',
            example: [3, 4, 5, 9, 10, 11, 12],
          }),
        times_by_month: z
          .object({
            '1': z.string().exactOptional(),
            '4': z.string().exactOptional(),
            '5': z.string().exactOptional(),
            '6': z.string().exactOptional(),
            '7': z.string().exactOptional(),
            '8': z.string().exactOptional(),
            '9': z.string().exactOptional(),
            '10': z.string().exactOptional(),
            '11': z.string().exactOptional(),
            '12': z.string().exactOptional(),
            "2'": z.string().exactOptional(),
            "3'": z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({
            description:
              'An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.',
            example: {
              '1': 'NA',
              '2': 'NA',
              '3': '4 PM – 9 AM',
              '4': '4 PM – 9 AM',
              '5': '4 PM – 9 AM',
              '6': '4 PM – 9 AM',
              '7': 'NA',
              '8': 'NA',
              '9': 'All day',
              '10': 'All day',
              '11': 'All day',
              '12': 'NA',
            },
            required: [],
          }),
      })
      .exactOptional()
      .openapi({
        description: 'When you can catch the fish in the Southern hemisphere.',
        required: [],
      }),
    tank_length: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The length of the tank when the fish is placed as a furniture item.',
        example: 1,
      }),
    tank_width: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The width of the tank when the fish is placed as a furniture item.',
        example: 1,
      }),
    total_catch: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The total number of fish the player has to have caught before this fish will start spawning.',
        example: 100,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the respective Nookipedia article.',
        example: 'https://nookipedia.com/wiki/Cherry Salmon',
      }),
  })
  .openapi({ required: [] })
  .openapi('NHFish')

const NHFossilGroupSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description of the fossil group.',
        example:
          'Ahem. Yes. The Spinosaurus was a very large, carnivorous dinosaur, roughly the size of a T. Rex. Unlike its more famous cousin, however, Spinosaurus seems to have spent a great deal of time in water. Similar to modern crocodiles, this creature lived on a diet of fish AND land-dwelling animals. Personally, I am simply relieved that it did not seek FLYING prey.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the fossil group.', example: 'Spinosaurus' }),
    room: z
      .int()
      .exactOptional()
      .openapi({
        description: "The room where the fossil group can be found in the museum's fossil section.",
        example: 2,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the respective Nookipedia article.',
        example: 'https://nookipedia.com/wiki/Spinosaurus',
      }),
  })
  .openapi({ required: [] })
  .openapi('NHFossilGroup')

const NHFossilGroupWithIndividualFossilsSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description of the fossil group.',
        example:
          'Ahem. Yes. The Spinosaurus was a very large, carnivorous dinosaur, roughly the size of a T. Rex. Unlike its more famous cousin, however, Spinosaurus seems to have spent a great deal of time in water. Similar to modern crocodiles, this creature lived on a diet of fish AND land-dwelling animals. Personally, I am simply relieved that it did not seek FLYING prey.',
      }),
    fossils: z
      .array(
        z
          .object({
            colors: z
              .array(
                z.enum([
                  'Aqua',
                  'Beige',
                  'Black',
                  'Blue',
                  'Brown',
                  'Colorful',
                  'Gray',
                  'Green',
                  'Orange',
                  'Pink',
                  'Purple',
                  'Red',
                  'White',
                  'Yellow',
                ]),
              )
              .exactOptional(),
            fossil_group: z.string().exactOptional(),
            hha_base: z.int().exactOptional(),
            image_url: z.string().exactOptional(),
            interactable: z.boolean().exactOptional(),
            length: z.int().exactOptional(),
            name: z.string().exactOptional().openapi({ example: 'Spino Skull' }),
            sell: z.int().exactOptional(),
            url: z.string().exactOptional(),
            width: z.int().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of objects, each object representing a fossil that belongs to the given group.',
        example: [
          {
            colors: ['Brown'],
            hha_base: 87,
            image_url: 'https://dodo.ac/np/images/7/7b/Spino_Skull_NH_Icon.png',
            interactable: true,
            length: 2,
            name: 'Spino Skull',
            sell: 4000,
            url: 'https://nookipedia.com/wiki/Spinosaurus',
            width: 2,
          },
          {
            colors: ['Brown'],
            hha_base: 87,
            image_url: 'https://dodo.ac/np/images/4/40/Spino_Tail_NH_Icon.png',
            interactable: true,
            length: 2,
            name: 'Spino Tail',
            sell: 2500,
            url: 'https://nookipedia.com/wiki/Spinosaurus',
            width: 2,
          },
          {
            colors: ['Brown'],
            hha_base: 87,
            image_url: 'https://dodo.ac/np/images/9/92/Spino_Torso_NH_Icon.png',
            interactable: true,
            length: 2,
            name: 'Spino Torso',
            sell: 3000,
            url: 'https://nookipedia.com/wiki/Spinosaurus',
            width: 2,
          },
        ],
      }),
    matched: z
      .object({
        name: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The name of the fossil or fossil group that matched the given query.',
            example: 'Spino Skull',
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'If the query given was a fossil group, `group` would be returned. Otherwise, `individual` is returned.',
            example: 'individual',
          }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the fossil group.', example: 'Spinosaurus' }),
    room: z
      .int()
      .exactOptional()
      .openapi({
        description: "The room where the fossil group can be found in the museum's fossil section.",
        example: 2,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the respective Nookipedia article.',
        example: 'https://nookipedia.com/wiki/Spinosaurus',
      }),
  })
  .openapi({ required: [] })
  .openapi('NHFossilGroupWithIndividualFossils')

const NHFossilGroupWithIndividualFossilsNoMatchedSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A description of the fossil group.',
        example:
          'Ahem. Yes. The Spinosaurus was a very large, carnivorous dinosaur, roughly the size of a T. Rex. Unlike its more famous cousin, however, Spinosaurus seems to have spent a great deal of time in water. Similar to modern crocodiles, this creature lived on a diet of fish AND land-dwelling animals. Personally, I am simply relieved that it did not seek FLYING prey.',
      }),
    fossils: z
      .array(
        z
          .object({
            colors: z
              .array(
                z.enum([
                  'Aqua',
                  'Beige',
                  'Black',
                  'Blue',
                  'Brown',
                  'Colorful',
                  'Gray',
                  'Green',
                  'Orange',
                  'Pink',
                  'Purple',
                  'Red',
                  'White',
                  'Yellow',
                ]),
              )
              .exactOptional(),
            fossil_group: z.string().exactOptional(),
            hha_base: z.int().exactOptional(),
            image_url: z.string().exactOptional(),
            interactable: z.boolean().exactOptional(),
            length: z.int().exactOptional(),
            name: z.string().exactOptional().openapi({ example: 'Spino Skull' }),
            sell: z.int().exactOptional(),
            url: z.string().exactOptional(),
            width: z.int().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of objects, each object representing a fossil that belongs to the given group.',
        example: [
          {
            colors: ['Brown'],
            hha_base: 87,
            image_url: 'https://dodo.ac/np/images/7/7b/Spino_Skull_NH_Icon.png',
            interactable: true,
            length: 2,
            name: 'Spino Skull',
            sell: 4000,
            url: 'https://nookipedia.com/wiki/Spinosaurus',
            width: 2,
          },
          {
            colors: ['Brown'],
            hha_base: 87,
            image_url: 'https://dodo.ac/np/images/4/40/Spino_Tail_NH_Icon.png',
            interactable: true,
            length: 2,
            name: 'Spino Tail',
            sell: 2500,
            url: 'https://nookipedia.com/wiki/Spinosaurus',
            width: 2,
          },
          {
            colors: ['Brown'],
            hha_base: 87,
            image_url: 'https://dodo.ac/np/images/9/92/Spino_Torso_NH_Icon.png',
            interactable: true,
            length: 2,
            name: 'Spino Torso',
            sell: 3000,
            url: 'https://nookipedia.com/wiki/Spinosaurus',
            width: 2,
          },
        ],
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the fossil group.', example: 'Spinosaurus' }),
    room: z
      .int()
      .exactOptional()
      .openapi({
        description: "The room where the fossil group can be found in the museum's fossil section.",
        example: 2,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the respective Nookipedia article.',
        example: 'https://nookipedia.com/wiki/Spinosaurus',
      }),
  })
  .openapi({ required: [] })
  .openapi('NHFossilGroupWithIndividualFossilsNoMatched')

const NHFurnitureSchema = z
  .object({
    availability: z
      .array(
        z
          .object({ from: z.string().exactOptional(), note: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Where the furniture may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.',
        example: [{ from: "Nook's Cranny (Upgraded)", note: '' }],
      }),
    buy: z
      .array(
        z
          .object({ currency: z.string().exactOptional(), price: z.int().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of prices, for when the item may be purchased with Bells, Nook Miles, etc..',
        example: [{ currency: 'Bells', price: 31000 }],
      }),
    category: z
      .enum(['Housewares', 'Miscellaneous', 'Wall-mounted'])
      .exactOptional()
      .openapi({
        description: "The category of item as shown in the player's inventory.",
        example: 'Housewares',
      }),
    custom_body_part: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the item has variations, this is the name of the furniture part that changes. For example, for many bamboo items, the custom body part is "Bamboo" as the bamboo color is able to be customized.',
        example: '',
      }),
    custom_kit_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The item that needs to be consumed to customize this item. The vast majority are "Customization Kit", but a small selection of items will require a different item, such as items in the Spooky Series requireing pumpkins.',
        example: '',
      }),
    custom_kits: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of `custom_kit_type`s (e.g. Customization Kits) that are needed to customize this item. Value is 0 if the item is not customizable.',
        example: 0,
      }),
    custom_pattern_part: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the item\'s pattern can be customized, this is the name of the furniture part that can have a pattern applied to it. For example, for the Baby Chair, the custom pattern part is "Cushion" as the cushion on the chair may have a pattern applied.',
        example: '',
      }),
    customizable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not the item is customizable via a crafting table.',
        example: false,
      }),
    door_decor: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "Whether this item may be placed on the exterior door of the player's house.",
        example: false,
      }),
    functions: z
      .array(
        z.enum([
          'Trash',
          'Toilet',
          'Table',
          'Storage',
          'Stereo',
          'Seating',
          'Lighting',
          'Instrument',
          'Dresser',
          'Bed',
          'Audio',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of functionalities (if any) that the item has. For example, furniture that items can be placed on topof will have "Table" as a function..',
        example: ['Dresser'],
      }),
    grid_length: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The number of lengthwise grid spaces this item takes up.',
        example: 1,
      }),
    grid_width: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The number of widthwise grid spaces this item takes up.',
        example: 2,
      }),
    height: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The height of the object. One in-game block is 10 units tall, while the player is 15.1324 units tall.',
        example: 15.98677,
      }),
    hha_base: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "The base value that the item provides to a player's Happy Home Academy score when placed in their home.",
        example: 251,
      }),
    hha_category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The HHA category the item is a part of, if any. If the item does not have an HHA category, this will be an empty string.',
        example: 'Dresser',
      }),
    item_series: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [furniture series](https://nookipedia.com/wiki/Series_(furniture)) the item is a part of, if any. A series is a collection of furniture and interior items, all with the same theme. If the item is not part of a series, this will be an empty string.',
        example: 'Antique',
      }),
    item_set: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [furniture set](https://nookipedia.com/wiki/Set) the item is a part of, if any. A set is a smaller collection of related furniture items. If the item is not part of a set, this will be an empty string.',
        example: '',
      }),
    lucky: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not the item is lucky. Lucky items give a 777-point HHA bonus. Some items are only counted as lucky in certain seasons, as indicated by the `lucky_season` field.',
        example: false,
      }),
    lucky_season: z
      .enum(['', 'All year', 'Spring', 'Summer', 'Autumn', 'Winter'])
      .exactOptional()
      .openapi({
        description:
          'The season in which the item is lucky (or "All year" if lucky throughout the entire year). Items that are not lucky will have this field as an empty string.',
        example: '',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the furniture.', example: 'Antique Vanity' }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Any additional miscellaneous information about the item, such as a name change from a past update.',
        example: '',
      }),
    pattern_total: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
        z.literal(8),
      ])
      .exactOptional()
      .openapi({
        description:
          'The number of default patterns available to customize the item with, between 0 and 8. For items with customizable patterns, the player may also customize with patterns of their own.',
        example: 0,
      }),
    sell: z
      .int()
      .exactOptional()
      .openapi({
        description: "The number of Bells the item can be sold to Nook's store for.",
        example: 7750,
      }),
    tag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tag of an item, if any, which denotes a specific use or relation to an event. Tags are determined by Nintendo. Examples include "Chair", "Musical Instrument", and "Mario". If the item does not have a tag, this will be an empty string.',
        example: 'Dresser',
      }),
    themes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of [themes](https://nookipedia.com/wiki/Theme_(furniture)) (if any) that the item belongs to.',
        example: ['Living Room', 'Expensive'],
      }),
    unlocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether the item is available through legitimate gameplay. Some items are added to the game files in an update, but aren't actually made available until a subsequent update unlocks them.",
        example: true,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the respective Nookipedia article.',
        example: 'https://nookipedia.com/wiki/Item:Antique_Vanity_(New_Horizons)',
      }),
    variation_total: z
      .union([
        z.literal(0),
        z.literal(1),
        z.literal(2),
        z.literal(3),
        z.literal(4),
        z.literal(5),
        z.literal(6),
        z.literal(7),
        z.literal(8),
      ])
      .exactOptional()
      .openapi({ description: 'The number of variations, between 0 and 8.', example: 3 }),
    variations: z
      .array(
        z
          .object({
            colors: z
              .array(
                z.enum([
                  'Aqua',
                  'Beige',
                  'Black',
                  'Blue',
                  'Brown',
                  'Colorful',
                  'Gray',
                  'Green',
                  'Orange',
                  'Pink',
                  'Purple',
                  'Red',
                  'White',
                  'Yellow',
                ]),
              )
              .exactOptional(),
            image_url: z.string().exactOptional(),
            pattern: z.string().exactOptional(),
            variation: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of objects, each object representing a variation of the furniture. Furniture that has no variations (only one version) will have a single variation object with the image URL and colors, but the `variation` or `pattern` fields will be empty strings. Furniture with multiple variations will have the `variation` and/or `pattern` fields defined depending on whether the furniture varies by body variety, pattern, or both.',
        example: [
          {
            colors: ['Aqua', 'Brown'],
            image_url: 'https://dodo.ac/np/images/9/9e/Antique_Vanity_%28Brown%29_NH_Icon.png',
            pattern: '',
            variation: 'Brown',
          },
          {
            colors: ['Aqua', 'Beige'],
            image_url: 'https://dodo.ac/np/images/a/ab/Antique_Vanity_%28Natural%29_NH_Icon.png',
            pattern: '',
            variation: 'Natural',
          },
          {
            colors: ['Aqua', 'Black'],
            image_url: 'https://dodo.ac/np/images/5/55/Antique_Vanity_%28Black%29_NH_Icon.png',
            pattern: '',
            variation: 'Black',
          },
        ],
      }),
    version_added: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of *New Horizons* that the item was added. Items that were included at the game\'s launch have version "1.0.0".',
        example: '1.0.0',
      }),
  })
  .openapi({ required: [] })
  .openapi('NHFurniture')

const NHIndividualFossilSchema = z
  .object({
    colors: z
      .array(
        z.enum([
          'Aqua',
          'Beige',
          'Black',
          'Blue',
          'Brown',
          'Colorful',
          'Gray',
          'Green',
          'Orange',
          'Pink',
          'Purple',
          'Red',
          'White',
          'Yellow',
        ]),
      )
      .exactOptional()
      .openapi({ example: ['Brown'] }),
    fossil_group: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the group that the fossil belongs to.',
        example: 'Spinosaurus',
      }),
    hha_base: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "The base value that the item provides to a player's Happy Home Academy score when placed in their home.",
        example: 87,
      }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "Image of the fossil's icon. dodo.ac is Nookipedia's CDN server.",
        example: 'https://dodo.ac/np/images/7/7b/Spino_Skull_NH_Icon.png',
      }),
    interactable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the item can be interacted with.', example: false }),
    length: z
      .int()
      .exactOptional()
      .openapi({ description: 'The length of the fossil.', example: 2 }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the fossil.', example: 'Spino Skull' }),
    sell: z
      .int()
      .exactOptional()
      .openapi({
        description: "The number of bells the item can be sold to Nook's store for.",
        example: 4000,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the respective Nookipedia article.',
        example: 'https://nookipedia.com/wiki/Spinosaurus',
      }),
    width: z.int().exactOptional().openapi({ description: 'The width of the fossil.', example: 2 }),
  })
  .openapi({ required: [] })
  .openapi('NHIndividualFossil')

const NHInteriorSchema = z
  .object({
    availability: z
      .array(
        z
          .object({ from: z.string().exactOptional(), note: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Where the clothing may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.',
        example: [{ from: "Nook's", note: '' }],
      }),
    buy: z
      .array(
        z
          .object({ currency: z.string().exactOptional(), price: z.int().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of prices, for when the interior may be purchased with Bells, Nook Miles, etc..',
        example: [{ currency: 'Bells', price: 1560 }],
      }),
    category: z
      .enum(['Floors', 'Wallpaper', 'Rugs'])
      .exactOptional()
      .openapi({
        description: "The category of item as shown in the player's inventory.",
        example: 'Wallpaper',
      }),
    colors: z
      .enum([
        'Aqua',
        'Beige',
        'Black',
        'Blue',
        'Brown',
        'Colorful',
        'Gray',
        'Green',
        'Orange',
        'Pink',
        'Purple',
        'Red',
        'White',
        'Yellow',
      ])
      .exactOptional()
      .openapi({ description: '(WIP)', example: ['White', 'Colorful'] }),
    grid_length: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The number of lengthwise grid spaces this item takes up.',
        example: 1,
      }),
    grid_width: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The number of widthwise grid spaces this item takes up.',
        example: 2,
      }),
    hha_base: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "The base value that the item provides to a player's Happy Home Academy score when placed in their home.",
        example: 0,
      }),
    hha_category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The HHA category the item is a part of, if any. If the item does not have an HHA category, this will be an empty string.',
        example: 'Dresser',
      }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "Image of the interior. dodo.ac is Nookipedia's CDN server.",
        example: 'https://dodo.ac/np/images/2/2d/Abstract_Wall_NH_Icon.png',
      }),
    item_series: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [furniture series](https://nookipedia.com/wiki/Series_(furniture)) the item is a part of, if any. A series is a collection of furniture and interior items, all with the same theme. If the item is not part of a series, this will be an empty string.',
        example: '',
      }),
    item_set: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [furniture set](https://nookipedia.com/wiki/Set) the item is a part of, if any. A set is a smaller collection of related furniture items. If the item is not part of a set, this will be an empty string.',
        example: '',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the interior.', example: 'Abstract Wall' }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Any additional miscellaneous information about the item, such as a name change from a past update.',
        example: '',
      }),
    sell: z
      .int()
      .exactOptional()
      .openapi({
        description: "The number of Bells the interior can be sold to Nook's store for.",
        example: 200,
      }),
    tag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tag of an item, if any, which denotes a specific use or relation to an event. Tags are determined by Nintendo. Examples include "Chair", "Musical Instrument", and "Mario". If the item does not have a tag, this will be an empty string.',
        example: 'Dresser',
      }),
    themes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of [themes](https://nookipedia.com/wiki/Theme_(furniture)) (if any) that the item belongs to.',
        example: ['Shop', 'Facility'],
      }),
    unlocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether the item is available through legitimate gameplay. Some items are added to the game files in an update, but aren't actually made available until a subsequent update unlocks them.",
        example: true,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the respective Nookipedia article.',
        example: 'https://nookipedia.com/wiki/Item:Abstract_Wall_(New_Horizons)',
      }),
    version_added: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of *New Horizons* that the item was added. Items that were included at the game\'s launch have version "1.0.0".',
        example: '1.0.0',
      }),
  })
  .openapi({ required: [] })
  .openapi('NHInterior')

const NHItemSchema = z
  .object({
    availability: z
      .array(
        z
          .object({ from: z.string().exactOptional(), note: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Where the clothing may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.',
        example: [{ from: "Nook's", note: '' }],
      }),
    buy: z
      .array(
        z
          .object({ currency: z.string().exactOptional(), price: z.int().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of prices, for when the interior may be purchased with Bells, Nook Miles, etc..',
        example: [{ currency: 'Bells', price: 280 }],
      }),
    edible: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the item is edible or not.', example: false }),
    hha_base: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "The base value that the item provides to a player's Happy Home Academy score when placed in their home.",
        example: 0,
      }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "Image of the interior. dodo.ac is Nookipedia's CDN server.",
        example: 'https://dodo.ac/np/images/9/9f/Acorn_NH_Icon.png',
      }),
    is_fence: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether or not the item is a fence or not.', example: false }),
    material_name_sort: z.int().exactOptional().openapi({ description: '(WIP)', example: 0 }),
    material_seasonality: z
      .string()
      .exactOptional()
      .openapi({ description: '(WIP)', example: 'Autumn' }),
    material_seasonality_sort: z
      .int()
      .exactOptional()
      .openapi({ description: '(WIP)', example: 3 }),
    material_sort: z.int().exactOptional().openapi({ description: '(WIP)', example: 3 }),
    material_type: z
      .enum([
        '',
        'Bamboo',
        'Mushroom',
        'Trash',
        'Wood',
        'Ore',
        'Snowflake',
        'Tree',
        'Ornament',
        'Fruit',
        'Underwater',
        'Other',
        'Leaf',
        'Shell',
        'Flower',
        'Star Fragment',
        'Feather',
        'Egg',
        'Plant',
      ])
      .exactOptional()
      .openapi({ description: '(WIP)', example: 'Tree' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the item.', example: 'Acorn' }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Any additional miscellaneous information about the item, such as a name change from a past update.',
        example: '',
      }),
    plant_type: z
      .enum(['', 'Pumpkin', 'Flower', 'Bush', 'Tree'])
      .exactOptional()
      .openapi({ description: '(WIP)', example: '' }),
    sell: z
      .int()
      .exactOptional()
      .openapi({
        description: "The number of bells the item can be sold to Nook's store for.",
        example: 200,
      }),
    stack: z
      .int()
      .exactOptional()
      .openapi({
        description: 'How much the item can stack up to in a single inventory slot.',
        example: 30,
      }),
    unlocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether the item is available through legitimate gameplay. Some items are added to the game files in an update, but aren't actually made available until a subsequent update unlocks them.",
        example: true,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the respective Nookipedia article.',
        example: 'https://nookipedia.com/wiki/Item:Acorn_(New_Horizons)',
      }),
    version_added: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of *New Horizons* that the item was added. Items that were included at the game\'s launch have version "1.0.0".',
        example: '1.0.0',
      }),
  })
  .openapi({ required: [] })
  .openapi('NHItem')

const NHPhotoSchema = z
  .object({
    availability: z
      .array(
        z
          .object({ from: z.string().exactOptional(), note: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Where the photo may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.',
        example: [{ from: 'Friendship', note: '' }],
      }),
    buy: z
      .array(
        z
          .object({ currency: z.string().exactOptional(), price: z.int().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of prices, for when the item may be purchased with Bells, Nook Miles, etc..',
        example: [],
      }),
    category: z
      .enum(['Photos', 'Posters'])
      .exactOptional()
      .openapi({
        description: "The category of item as shown in the player's inventory.",
        example: 'Accessories',
      }),
    custom_body_part: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the item has variations, this is the name of the furniture part that changes. For example, for many bamboo items, the custom body part is "Bamboo" as the bamboo color is able to be customized.',
        example: 'Frame',
      }),
    custom_kits: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of `custom_kit_type`s (e.g. Customization Kits) that are needed to customize this item. Value is 0 if the item is not customizable.',
        example: 1,
      }),
    customizable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not the item is customizable via a crafting table.',
        example: false,
      }),
    grid_length: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The number of lengthwise grid spaces this item takes up.',
        example: 1,
      }),
    grid_width: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The number of widthwise grid spaces this item takes up.',
        example: 2,
      }),
    interactable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether or not the item can be interacted with. This field is true for all photos and false for all posters.',
        example: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the photo.', example: "Admiral's Photo" }),
    sell: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of Bells the photo can be sold to the store for.',
        example: 10,
      }),
    unlocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether the item is available through legitimate gameplay. Some items are added to the game files in an update, but aren't actually made available until a subsequent update unlocks them.",
        example: true,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the respective Nookipedia article.',
        example: "https://nookipedia.com/wiki/Item:Admiral's_Photo_(New_Horizons)",
      }),
    variations: z
      .array(
        z
          .object({
            colors: z
              .array(
                z.enum([
                  'Aqua',
                  'Beige',
                  'Black',
                  'Blue',
                  'Brown',
                  'Colorful',
                  'Gray',
                  'Green',
                  'Orange',
                  'Pink',
                  'Purple',
                  'Red',
                  'White',
                  'Yellow',
                ]),
              )
              .exactOptional(),
            image_url: z.string().exactOptional(),
            variation: z.string().exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of objects, each object representing a variation of the photo or poster. Items that has no variations (only one version) will have a single variation object with the image URL and colors, but the `variation` field will be empty. Items with multiple variations will have the `variation` fields defined with the name of each variation.',
        example: [
          {
            colors: ['Blue', 'Green'],
            image_url:
              'https://dodo.ac/np/images/7/72/Admiral%27s_Photo_%28Natural_Wood%29_NH_Icon.png',
            variation: 'Natural Wood',
          },
          {
            colors: ['Blue', 'Green'],
            image_url:
              'https://dodo.ac/np/images/e/e5/Admiral%27s_Photo_%28Dark_Wood%29_NH_Icon.png',
            variation: 'Dark Wood',
          },
          {
            colors: ['Blue', 'Green'],
            image_url: 'https://dodo.ac/np/images/9/9a/Admiral%27s_Photo_%28Pastel%29_NH_Icon.png',
            variation: 'Pastel',
          },
          {
            colors: ['Blue', 'Green'],
            image_url: 'https://dodo.ac/np/images/1/16/Admiral%27s_Photo_%28White%29_NH_Icon.png',
            variation: 'White',
          },
          {
            colors: ['Blue', 'Green'],
            image_url: 'https://dodo.ac/np/images/b/be/Admiral%27s_Photo_%28Pop%29_NH_Icon.png',
            variation: 'Pop',
          },
          {
            colors: ['Blue', 'Green'],
            image_url:
              'https://dodo.ac/np/images/5/51/Admiral%27s_Photo_%28Colorful%29_NH_Icon.png',
            variation: 'Colorful',
          },
          {
            colors: ['Blue', 'Green'],
            image_url: 'https://dodo.ac/np/images/e/ed/Admiral%27s_Photo_%28Silver%29_NH_Icon.png',
            variation: 'Silver',
          },
          {
            colors: ['Blue', 'Green'],
            image_url: 'https://dodo.ac/np/images/c/cf/Admiral%27s_Photo_%28Gold%29_NH_Icon.png',
            variation: 'Gold',
          },
        ],
      }),
    version_added: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of *New Horizons* that the item was added. Items that were included at the game\'s launch have version "1.0.0".',
        example: '1.0.0',
      }),
  })
  .openapi({ required: [] })
  .openapi('NHPhoto')

const NHRecipeSchema = z
  .object({
    availability: z
      .array(
        z
          .object({ from: z.string().exactOptional(), note: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Where the recipe may be obtained from. `from` is a brief description of the source; `note`, when provided, provides additional details.',
        example: [
          {
            from: 'Tom Nook',
            note: "Obtained through Tom Nook's DIY Workshop at the beginning of the game.",
          },
          { from: "Nook's Cranny", note: '' },
        ],
      }),
    buy: z
      .array(
        z
          .object({ currency: z.string().exactOptional(), price: z.int().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of prices, for when the recipe may be purchased with Bells, Nook Miles, etc. The majority of recipes cannot be bought (in which case this array will be empty).',
        example: [{ currency: 'Bells', price: 280 }],
      }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "Image of the item the recipe crafts. dodo.ac is Nookipedia's CDN server.",
        example: 'https://dodo.ac/np/images/a/ac/Flimsy_Axe_NH_DIY_Icon.png',
      }),
    materials: z
      .array(
        z
          .object({ count: z.int().exactOptional(), name: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description: 'The list of materials required to craft the item.',
        example: [
          { count: 5, name: 'Tree Branch' },
          { count: 1, name: 'Stone' },
        ],
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the recipe.', example: 'Flimsy Axe' }),
    recipes_to_unlock: z
      .int()
      .exactOptional()
      .openapi({
        description: 'How many recipes the player has to have learned to unlock this one.',
        example: 0,
      }),
    sell: z
      .int()
      .exactOptional()
      .openapi({
        description: "The number of Bells the sea creature can be sold to Nook's store for.",
        example: 200,
      }),
    serial_id: z
      .int()
      .exactOptional()
      .openapi({ description: 'The unique in-game ID of the recipe.', example: 100 }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the respective Nookipedia article.',
        example: 'https://nookipedia.com/wiki/Item:Flimsy_Axe_(New_Horizons)',
      }),
  })
  .openapi({ required: [] })
  .openapi('NHRecipe')

const NHSeaCreatureSchema = z
  .object({
    catchphrases: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'An array of possible catchphrases the player says after catching the sea creature. Most critters have just one, but some can have multiple.',
        example: ['I got an octopus! It can give four hugs at once!'],
      }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "Image of the sea creature. dodo.ac is Nookipedia's CDN server.",
        example: 'https://dodo.ac/np/images/5/58/Octopus_NH_Icon.png',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the sea creature.', example: 'Octopus' }),
    north: z
      .object({
        availability_array: z
          .array(
            z
              .object({ months: z.string().exactOptional(), time: z.string().exactOptional() })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              'An array of objects, each object holding a months string and the time the critter is availabile during the specified month(s) in the northern hemisphere. Most critters will have just one object. A small number of critters have variable time availability in which case this array will have multiple objects.',
            example: [{ months: 'All year', time: 'All day' }],
          }),
        months: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The months the sea creature is available for in the Northern hemisphere. If all year, value will be `"All year"`.',
            example: 'Jul – Sep',
          }),
        months_array: z
          .array(z.int())
          .exactOptional()
          .openapi({
            description:
              'An array of integers representing the months the sea creature is available in the Northern hemisphere.',
            example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          }),
        times_by_month: z
          .object({
            '1': z.string().exactOptional(),
            '2': z.string().exactOptional(),
            '3': z.string().exactOptional(),
            '4': z.string().exactOptional(),
            '5': z.string().exactOptional(),
            '6': z.string().exactOptional(),
            '7': z.string().exactOptional(),
            '8': z.string().exactOptional(),
            '9': z.string().exactOptional(),
            '10': z.string().exactOptional(),
            '11': z.string().exactOptional(),
            '12': z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({
            description:
              'An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.',
            example: {
              '1': 'All day',
              '2': 'All day',
              '3': 'All day',
              '4': 'All day',
              '5': 'All day',
              '6': 'All day',
              '7': 'All day',
              '8': 'All day',
              '9': 'All day',
              '10': 'All day',
              '11': 'All day',
              '12': 'All day',
            },
            required: [],
          }),
      })
      .exactOptional()
      .openapi({
        description: 'When you can catch the sea creature in the Northern hemisphere.',
        required: [],
      }),
    number: z
      .int()
      .exactOptional()
      .openapi({
        description: 'In-game sea creature number, marking position in the Critterpedia.',
        example: 20,
      }),
    rarity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'How rare the sea creature is. Note that this field is currently empty for most sea creatures as we do not yet know how exactly sea creature rarities are calculated in the game code.',
        example: 'Uncommon',
      }),
    render_url: z
      .string()
      .exactOptional()
      .openapi({
        description: "Render of the sea creature. dodo.ac is Nookipedia's CDN server.",
        example: 'https://dodo.ac/np/images/2/27/Octopus_NH.png',
      }),
    sell_nook: z
      .int()
      .exactOptional()
      .openapi({
        description: "The number of Bells the sea creature can be sold to Nook's store for.",
        example: 160,
      }),
    shadow_movement: z
      .enum(['Stationary', 'Very slow', 'Slow', 'Medium', 'Fast', 'Very fast'])
      .exactOptional()
      .openapi({
        description: 'Short descriptor of where the sea creature can be found.',
        example: 'Slow',
      }),
    shadow_size: z
      .enum(['X-Small', 'Small', 'Medium', 'Large', 'X-Large'])
      .exactOptional()
      .openapi({
        description: 'Short descriptor of where the sea creature can be found.',
        example: 'Medium',
      }),
    south: z
      .object({
        availability_array: z
          .array(
            z
              .object({ months: z.string().exactOptional(), time: z.string().exactOptional() })
              .openapi({ required: [] }),
          )
          .exactOptional()
          .openapi({
            description:
              'An array of objects, each object holding a months string and the time the critter is availabile during the specified month(s) in the southern hemisphere. Most critters will have just one object. A small number of critters have variable time availability in which case this array will have multiple objects.',
            example: [{ months: 'All year', time: 'All day' }],
          }),
        months: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The months the sea creature is available for in the Southern hemisphere. If all year, value will be `"All year"`.',
            example: 'Jan – Mar',
          }),
        months_array: z
          .array(z.int())
          .exactOptional()
          .openapi({
            description:
              'An array of integers representing the months the sea creature is available in the Southern hemisphere.',
            example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          }),
        times_by_month: z
          .object({
            '1': z.string().exactOptional(),
            '2': z.string().exactOptional(),
            '3': z.string().exactOptional(),
            '4': z.string().exactOptional(),
            '5': z.string().exactOptional(),
            '6': z.string().exactOptional(),
            '7': z.string().exactOptional(),
            '8': z.string().exactOptional(),
            '9': z.string().exactOptional(),
            '10': z.string().exactOptional(),
            '11': z.string().exactOptional(),
            '12': z.string().exactOptional(),
          })
          .exactOptional()
          .openapi({
            description:
              'An object with twelve numerical keys, each representing a month (`"1"` for January, `"2"` for February, etc.). The value is the times the critter is available during that month. If the critter is unavailable in a month, the value will be `"NA"`.',
            example: {
              '1': 'All day',
              '2': 'All day',
              '3': 'All day',
              '4': 'All day',
              '5': 'All day',
              '6': 'All day',
              '7': 'All day',
              '8': 'All day',
              '9': 'All day',
              '10': 'All day',
              '11': 'All day',
              '12': 'All day',
            },
            required: [],
          }),
      })
      .exactOptional()
      .openapi({
        description: 'When you can catch the sea creature in the Southern hemisphere.',
        required: [],
      }),
    tank_length: z
      .float32()
      .multipleOf(0.1)
      .exactOptional()
      .openapi({
        description: 'The length of the tank when the sea creature is placed as a furniture item.',
        example: 1,
      }),
    tank_width: z
      .float32()
      .multipleOf(0.1)
      .exactOptional()
      .openapi({
        description: 'The width of the tank when the sea creature is placed as a furniture item.',
        example: 1,
      }),
    total_catch: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The total number of sea creatures the player has to have caught before this sea creature will start spawning.',
        example: 0,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the respective Nookipedia article.',
        example: 'https://nookipedia.com/wiki/Octopus_(fish)',
      }),
  })
  .openapi({ required: [] })
  .openapi('NHSeaCreature')

const NHToolSchema = z
  .object({
    availability: z
      .array(
        z
          .object({ from: z.string().exactOptional(), note: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Where the tool may be obtained from (could be multiple sources). `from` is a brief description of the source; `note`, when provided, provides additional details.',
        example: [
          { from: "Nook's Cranny", note: '' },
          { from: 'Crafting', note: '' },
        ],
      }),
    buy: z
      .array(
        z
          .object({ currency: z.string().exactOptional(), price: z.int().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of prices, for when the item may be purchased with Bells, Nook Miles, etc..',
        example: [{ price: 2550 }, { currency: 'Bells' }],
      }),
    custom_body_part: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If the item has variations, this is the name of the furniture part that changes. For example, for many bamboo items, the custom body part is "Bamboo" as the bamboo color is able to be customized.',
        example: '',
      }),
    custom_kits: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of `custom_kit_type`s (e.g. Customization Kits) that are needed to customize this item. Value is 0 if the item is not customizable.',
        example: 0,
      }),
    customizable: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether or not the item is customizable via a crafting table.',
        example: false,
      }),
    hha_base: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "The base value that the item provides to a player's Happy Home Academy score when placed in their home.",
        example: 0,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the tool.', example: 'Axe' }),
    notes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Any additional miscellaneous information about the item, such as a name change from a past update.',
        example: '',
      }),
    sell: z
      .int()
      .exactOptional()
      .openapi({
        description: 'The number of bells the tool can be sold to the store for.',
        example: 625,
      }),
    unlocked: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Whether the item is available through legitimate gameplay. Some items are added to the game files in an update, but aren't actually made available until a subsequent update unlocks them.",
        example: true,
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link the the respective Nookipedia article.',
        example: 'https://nookipedia.com/wiki/Item:Axe_(New_Horizons)',
      }),
    uses: z
      .int()
      .exactOptional()
      .openapi({
        description: 'How many times the tool can be used before breaking.',
        example: 100,
      }),
    variations: z
      .array(
        z
          .object({ image_url: z.string().exactOptional(), variation: z.string().exactOptional() })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array of objects, each object representing a variation of the tool. Tools that has no variations (only one version) will have a single variation object with the image URL and colors, but the `variation` field will be empty. Tools with multiple variations will have the `variation` fields defined with the name of each variation.',
        example: [{ image_url: 'https://dodo.ac/np/images/f/fa/Axe_NH_Icon.png', variation: '' }],
      }),
    version_added: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The version of *New Horizons* that the item was added. Items that were included at the game\'s launch have version "1.0.0".',
        example: '1.0.0',
      }),
  })
  .openapi({ required: [] })
  .openapi('NHTool')

const VillagerSchema = z
  .object({
    alt_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A previous name for the villager. A very small number of villagers changed names between earlier games, such as Sally being known as Hazel in the original game.',
        example: '',
      }),
    appearances: z
      .array(z.enum(['DNM', 'AC', 'E_PLUS', 'WW', 'CF', 'NL', 'WA', 'NH', 'FILM', 'HHD', 'PC']))
      .exactOptional()
      .openapi({
        description:
          'List of official media the villager appeared in. `DNM` is *Doubutsu no Mori* for the Nintendo 64 (Japan-exclusive); `AC` is *Animal Crossing* for GameCube; `E_PLUS` is *Doubutsu no Mori e+* for GameCube (expanded port of AC, Japan-exclusive); `WW` is *Wild World* for the DS; `CF` is *City Folk* for Wii; `NL` is *New Leaf* for 3DS; `WA` is *Welcome amiibo*, the *New Leaf* expansion; `NH` is *New Horizons* for Switch; `FILM` is the *Doubutsu no Mori* Japan-exclusive film; `HHD` is *Happy Home Designer* for the Wii; and `PC` is *Pocket Camp* for mobile.',
        example: ['DNM', 'AC', 'E_PLUS', 'WW', 'CF', 'NL', 'WA', 'NH', 'HHD', 'PC'],
      }),
    birthday_day: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Birthday day of the villager. Note that villager birthdays were not introduced until *Wild World*. For villagers who didn't appear in *Wild World* or any later games, this field will be an empty string.",
        example: '13',
      }),
    birthday_month: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Birthday month of the villager. Note that villager birthdays were not introduced until *Wild World*. For villagers who didn't appear in *Wild World* or any later games, this field will be an empty string.",
        example: 'February',
      }),
    clothing: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The villager's default clothing. This will be the clothing from the latest game (i.e. if the villager had varying phrases between *Wild World* and *New Horizons*, this will be the *New Horizons* clothing).",
        example: 'Simple Parka',
      }),
    debut: z
      .enum(['DNM', 'AC', 'E_PLUS', 'WW', 'CF', 'NL', 'WA', 'NH', 'FILM', 'HHD', 'PC'])
      .exactOptional()
      .openapi({
        description:
          'The first *Animal Crossing* game the villager appeared in. `DNM` is *Doubutsu no Mori* for the Nintendo 64 (Japan-exclusive); `AC` is *Animal Crossing* for GameCube; `E_PLUS` is *Doubutsu no Mori e+* for GameCube (expanded port of AC, Japan-exclusive); `WW` is *Wild World* for the DS; `CF` is *City Folk* for Wii; `NL` is *New Leaf* for 3DS; `WA` is *Welcome amiibo*, the *New Leaf* expansion; `NH` is *New Horizons* for Switch; `FILM` is the *Doubutsu no Mori* Japan-exclusive film; `HHD` is *Happy Home Designer* for the Wii; and `PC` is *Pocket Camp* for mobile.',
        example: 'DNM',
      }),
    gender: z
      .enum(['Male', 'Female'])
      .exactOptional()
      .openapi({
        description: 'Gender of the villager. In *Animal Crossing*, only male and female are used.',
        example: 'Male',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The game's internal identifier for the villager. Not all villagers have IDs; villagers who appeared in any game including or after *Wild World* have a consistent ID between games.",
        example: 'flg01',
      }),
    image_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Image of the villager from the latest game the villager appeared in. dodo.ac is Nookipedia's CDN server.",
        example: 'https://dodo.ac/np/images/9/94/Ribbot_NH.png',
      }),
    islander: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the villager was an island in *Animal Crossing* for GameCube. Only a small number of villagers (36) were islanders.',
        example: false,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the villager.', example: 'Ribbot' }),
    nh_details: z
      .object({
        catchphrase: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The default phrase a villager will use when speaking to the player.',
            example: 'zzrrbbit',
          }),
        clothing: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The default clothing that the villager wears.',
            example: 'Simple Parka',
          }),
        clothing_variation: z
          .string()
          .exactOptional()
          .openapi({
            description: 'The variation of the clothing (usually a color).',
            example: 'Light Blue',
          }),
        fav_colors: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description:
              "The villager's favorite colors (giving the villager a gift with one of their favorite colors increases friendship points).",
            example: ['Blue', 'Aqua'],
          }),
        fav_styles: z
          .array(z.string())
          .exactOptional()
          .openapi({
            description: "The villager's favorite clothing styles.",
            example: ['Simple', 'Active'],
          }),
        hobby: z
          .enum(['Education', 'Fashion', 'Fitness', 'Music', 'Nature', 'Play'])
          .exactOptional()
          .openapi({
            description:
              "The villager's primary hobby, which determines most of the activities they will do around the island (e.g. education villagers will frequently read books and visit the museum). Learn more at https://nookipedia.com/wiki/Hobbies",
            example: 'Fitness',
          }),
        house_exterior_url: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "A rendered model of the villager's house exterior. Note that this is not an official Nintendo asset, but a render based of the in-game model.",
            example: 'https://dodo.ac/np/images/4/42/House_of_Ribbot_NH_Model.png',
          }),
        house_flooring: z
          .string()
          .exactOptional()
          .openapi({
            description: "The flooring in the villager's house.",
            example: 'Future-Tech Flooring',
          }),
        house_interior_url: z
          .string()
          .exactOptional()
          .openapi({
            description: "A screenshot of the villager's house interior.",
            example: 'https://dodo.ac/np/images/8/86/House_of_Ribbot_NH.png',
          }),
        house_music: z
          .string()
          .exactOptional()
          .openapi({
            description: "The music in the villager's house.",
            example: 'K.K. Technopop',
          }),
        house_music_note: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Any notes about the villager\'s music. If populated, this is usually "Does not contain a stereo initially", meaning that the villager\'s house will not play music unless provided with a stereo.',
            example: '',
          }),
        house_wallpaper: z
          .string()
          .exactOptional()
          .openapi({
            description: "The wallpaper in the villager's house.",
            example: 'Circuit-Board Wall',
          }),
        icon_url: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "The villager's icon of their head. See https://nookipedia.com/wiki/Category:New_Horizons_character_icons for full list.",
            example: 'https://dodo.ac/np/images/8/87/Ribbot_NH_Villager_Icon.png',
          }),
        image_url: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Image of the villager from *New Horizons*.',
            example: 'https://dodo.ac/np/images/9/94/Ribbot_NH.png',
          }),
        photo_url: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "The villager's photo, received by the player after attaining a certain friendship level. See https://nookipedia.com/wiki/Category:New_Horizons_pictures for full list.",
            example: 'https://dodo.ac/np/images/0/03/RibbotPicACNH.png',
          }),
        quote: z
          .string()
          .exactOptional()
          .openapi({
            description: "The villager's quote, as found on the back of their in-game photo.",
            example: 'Never rest, never rust.',
          }),
        'sub-personality': z
          .enum(['A', 'B'])
          .exactOptional()
          .openapi({
            description:
              'Each personality in *New Horizons* has two sub-personalities, currently referred to as just A and B. The effect of a sub-personality is currently unknown.',
            example: 'B',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'An object that holds villager data specific to *New Horizons*. If the villager does not appear in *New Horizons*, this field will be set to null.',
        required: [],
      }),
    personality: z
      .enum(['Cranky', 'Jock', 'Lazy', 'Normal', 'Peppy', 'Sisterly', 'Smug', 'Snooty'])
      .exactOptional()
      .openapi({
        description:
          "The villager's personality. Note that there are no official in-game personality names; these are names that are commonly used by the community. In the case of 'sisterly', other common names include 'big sis' and 'uchi'.",
        example: 'Jock',
      }),
    phrase: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The villager's default phrase they use throughout conversation. This will be the phrase from the latest game (i.e. if the villager had varying phrases between *Wild World* and *New Horizons*, this will be the *New Horizons* quote).",
        example: 'zzrrbbit',
      }),
    prev_phrases: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Any phrases used in previous *Animal Crossing* installations. May be empty.',
        example: ['toady'],
      }),
    quote: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The villager's quote as it appears on the back of their in-game portrait item. This will be the quote from the latest game (i.e. if the villager had varying quotes between *Wild World* and *New Horizons*, this will be the *New Horizons* quote). For villagers from older games that do not have a quote, this field will be an empty string.",
        example: 'Never rest, never rust.',
      }),
    sign: z
      .enum([
        'Aries',
        'Taurus',
        'Gemini',
        'Cancer',
        'Leo',
        'Virgo',
        'Libra',
        'Scorpio',
        'Sagittarius',
        'Capricorn',
        'Aquarius',
        'Pisces',
      ])
      .exactOptional()
      .openapi({ description: "The villager's astrological star sign.", example: 'Aquarius' }),
    species: z
      .enum([
        'Alligator',
        'Anteater',
        'Bear',
        'Bird',
        'Bull',
        'Cat',
        'Cub',
        'Chicken',
        'Cow',
        'Deer',
        'Dog',
        'Duck',
        'Eagle',
        'Elephant',
        'Frog',
        'Goat',
        'Gorilla',
        'Hamster',
        'Hippo',
        'Horse',
        'Koala',
        'Kangaroo',
        'Lion',
        'Monkey',
        'Mouse',
        'Octopus',
        'Ostrich',
        'Penguin',
        'Pig',
        'Rabbit',
        'Rhino',
        'Sheep',
        'Squirrel',
        'Tiger',
        'Wolf',
      ])
      .exactOptional()
      .openapi({ description: "The villager's species.", example: 'Frog' }),
    text_color: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The HTML color code of the text of the villager's name badge that appears above their dialogue box when spoken to in-game. Note that to date, only *New Horizons* villagers have this field populated.",
        example: '5e5e5e',
      }),
    title_color: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The HTML color code of the background of the villager's name badge that appears above their dialogue box when spoken to in-game. Note that to date, only *New Horizons* villagers have this field populated. This field may be useful for styling, such as the accent color for a Discord embed.",
        example: 'bfbfbf',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to the respective Nookipedia article.',
        example: 'https://nookipedia.com/wiki/Ribbot',
      }),
  })
  .openapi({ required: [] })
  .openapi('Villager')

export const getNhArtRoute = createRoute({
  method: 'get',
  path: '/nh/art',
  summary: 'All New Horizons artwork',
  description: 'Get a list of all artwork and their details in *Animal Crossing: New Horizons*.',
  request: {
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      hasfake: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to `true`, only artwork that has a fake will be returned. When set to `false`, only artwork without fakes will be returned.',
            in: 'query',
            name: 'hasfake',
            required: false,
            schema: { type: 'string' },
          },
        }),
      excludedetails: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to `true`, only artwork names are returned. Instead of an array of objects with all details, the return will be an array of strings.',
            in: 'query',
            name: 'excludedetails',
            required: false,
            schema: { type: 'string' },
          },
        }),
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL. Note that requesting specific image sizes for long lists may result in a very long response time.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of artwork.',
      content: { 'application/json': { schema: z.array(NHArtworkSchema) } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhArtArtworkRoute = createRoute({
  method: 'get',
  path: '/nh/art/{artwork}',
  summary: 'Single New Horizons artwork',
  description: 'Retrieve information about a specific artwork in *Animal Crossing: New Horizons*.',
  request: {
    params: z.object({
      artwork: z
        .string()
        .openapi({
          param: {
            description: 'The name of the artwork you wish to retrieve information about.',
            in: 'path',
            name: 'artwork',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object describing the artwork.',
      content: { 'application/json': { schema: NHArtworkSchema } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhBugsRoute = createRoute({
  method: 'get',
  path: '/nh/bugs',
  summary: 'All New Horizons bugs',
  description: 'Get a list of all bugs and their details in *Animal Crossing: New Horizons*.',
  request: {
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      month: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Retrive only the bug that are available in a specific month. Value may be the month's name (`jan`, `january`), the integer representing the month (`01`, `1`), or `current` for the current month. When `current` is specified, the return body will be an object with two arrays inside, one called `north` and the other `south` containing the bug available in each respective hemisphere. Note that the current month is calculated based off the API server's time, so it may be slightly off for you at the beginning or end of the month.",
            in: 'query',
            name: 'month',
            required: false,
            schema: { type: 'string' },
          },
        }),
      excludedetails: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to `true`, only bug names are returned. Instead of an array of objects with all details, the return will be an array of strings. This is particularly useful when used with the `month` filter, for users who want just a list of bugs in a given month but not all their respective details.',
            in: 'query',
            name: 'excludedetails',
            required: false,
            schema: { type: 'string' },
          },
        }),
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL. Note that requesting specific image sizes for long lists may result in a very long response time.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of bugs.',
      content: { 'application/json': { schema: z.array(NHBugSchema) } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhBugsBugRoute = createRoute({
  method: 'get',
  path: '/nh/bugs/{bug}',
  summary: 'Single New Horizons bug',
  description: 'Retrieve information about a specific bug in *Animal Crossing: New Horizons*.',
  request: {
    params: z.object({
      bug: z
        .string()
        .openapi({
          param: {
            description: 'The name of the bug you wish to retrieve information about.',
            in: 'path',
            name: 'bug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object describing the bug.',
      content: { 'application/json': { schema: NHBugSchema } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    404: {
      description: 'Could not find the specified bug.',
      content: { 'application/json': { schema: Error404Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhClothingRoute = createRoute({
  method: 'get',
  path: '/nh/clothing',
  summary: 'All New Horizons clothing',
  description:
    'Get a list of all clothing items and their details in *Animal Crossing: New Horizons*.',
  request: {
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      category: z
        .enum([
          'Tops',
          'Bottoms',
          'Dress-up',
          'Headwear',
          'Accessories',
          'Socks',
          'Shoes',
          'Bags',
          'Umbrellas',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify the category of clothing to return.',
            in: 'query',
            name: 'category',
            required: false,
            schema: {
              enum: [
                'Tops',
                'Bottoms',
                'Dress-up',
                'Headwear',
                'Accessories',
                'Socks',
                'Shoes',
                'Bags',
                'Umbrellas',
              ],
              type: 'string',
            },
          },
        }),
      color: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'Aqua',
              'Beige',
              'Black',
              'Blue',
              'Brown',
              'Colorful',
              'Gray',
              'Green',
              'Orange',
              'Pink',
              'Purple',
              'Red',
              'White',
              'Yellow',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return clothing that matches the provided colors (may specify one or two colors). Colors are used for gifting villagers.',
            in: 'query',
            name: 'color',
            required: false,
            schema: {
              items: {
                enum: [
                  'Aqua',
                  'Beige',
                  'Black',
                  'Blue',
                  'Brown',
                  'Colorful',
                  'Gray',
                  'Green',
                  'Orange',
                  'Pink',
                  'Purple',
                  'Red',
                  'White',
                  'Yellow',
                ],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      style: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['Active', 'Cool', 'Cute', 'Elegant', 'Gorgeous', 'Simple'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return clothing that matches the provided styles (may specify one or two styles). Styles are used for gifting villagers.',
            in: 'query',
            name: 'style',
            required: false,
            schema: {
              items: {
                enum: ['Active', 'Cool', 'Cute', 'Elegant', 'Gorgeous', 'Simple'],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      labeltheme: z
        .enum([
          'Comfy',
          'Everyday',
          'Fairy tale',
          'Formal',
          'Goth',
          'Outdoorsy',
          'Party',
          'Sporty',
          'Theatrical',
          'Vacation',
          'Work',
        ])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Return clothing that have the specified Label theme. This is used for completing the requested outfit theme for [Label](https://nookipedia.com/wiki/Label) when she visits the player's island.",
            in: 'query',
            name: 'labeltheme',
            required: false,
            schema: {
              enum: [
                'Comfy',
                'Everyday',
                'Fairy tale',
                'Formal',
                'Goth',
                'Outdoorsy',
                'Party',
                'Sporty',
                'Theatrical',
                'Vacation',
                'Work',
              ],
              type: 'string',
            },
          },
        }),
      excludedetails: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to `true`, only clothing names are returned. Instead of an array of objects with all details, the return will be an array of strings.',
            in: 'query',
            name: 'excludedetails',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of clothing.',
      content: { 'application/json': { schema: z.array(NHClothingSchema) } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhClothingClothingRoute = createRoute({
  method: 'get',
  path: '/nh/clothing/{clothing}',
  summary: 'Single New Horizons clothing',
  description:
    'Retrieve information about a specific clothing item in *Animal Crossing: New Horizons*.',
  request: {
    params: z.object({
      clothing: z
        .string()
        .openapi({
          param: {
            description: 'The name of the clothing you wish to retrieve information about.',
            in: 'path',
            name: 'clothing',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object describing the clothing.',
      content: { 'application/json': { schema: NHClothingSchema } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhEventsRoute = createRoute({
  method: 'get',
  path: '/nh/events',
  summary: 'All New Horizons events',
  description:
    'Get a list of events and dates in *Animal Crossing: New Horizons*, filterable to specific years, months, or days. Data is available for the current and next year.',
  request: {
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      date: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Specify a specific date (in the current or next year) to retrieve events for. Accepts many date formats, such as `YYYY-MM-DD` or `Month Day, Year`, as well as `today` to retrieve the current day's events (UTC time).",
            in: 'query',
            name: 'date',
            required: false,
            schema: { type: 'string' },
          },
        }),
      year: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the year to retrieve events for. Must be the current or next year.',
            in: 'query',
            name: 'year',
            required: false,
            schema: { type: 'string' },
          },
        }),
      month: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the month to retrieve events for (accepts multiple formats, such as `Oct`, `October`, or `10`). Most likely want to use alongside `year`, otherwise events in both the current and next year are returned.',
            in: 'query',
            name: 'month',
            required: false,
            schema: { type: 'string' },
          },
        }),
      day: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Specify the day of the month to retrieve events for.',
            in: 'query',
            name: 'day',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of events.',
      content: { 'application/json': { schema: z.array(NHEventSchema) } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhFishRoute = createRoute({
  method: 'get',
  path: '/nh/fish',
  summary: 'All New Horizons fish',
  description: 'Get a list of all fish and their details in *New Horizons*.',
  request: {
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      month: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Retrive only the fish that are available in a specific month. Value may be the month's name (`jan`, `january`), the integer representing the month (`01`, `1`), or `current` for the current month. When `current` is specified, the return body will be an object with two arrays inside, one called `north` and the other `south` containing the fish available in each respective hemisphere. Note that the current month is calculated based off the API server's time, so it may be slightly off for you at the beginning or end of the month.",
            in: 'query',
            name: 'month',
            required: false,
            schema: { type: 'string' },
          },
        }),
      excludedetails: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to `true`, only fish names are returned. Instead of an array of objects with all details, the return will be an array of strings. This is particularly useful when used with the `month` filter, for users who want just a list of fish in a given month but not all their respective details.',
            in: 'query',
            name: 'excludedetails',
            required: false,
            schema: { type: 'string' },
          },
        }),
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL. Note that requesting specific image sizes for long lists may result in a very long response time.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of fish.',
      content: { 'application/json': { schema: z.array(NHFishSchema) } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhFishFishRoute = createRoute({
  method: 'get',
  path: '/nh/fish/{fish}',
  summary: 'Single New Horizons fish',
  description: 'Retrieve information about a specific fish in *Animal Crossing: New Horizons*.',
  request: {
    params: z.object({
      fish: z
        .string()
        .openapi({
          param: {
            description: 'The name of the fish you wish to retrieve information about.',
            in: 'path',
            name: 'fish',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object describing the fish.',
      content: { 'application/json': { schema: NHFishSchema } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    404: {
      description: 'Could not find the specified fish.',
      content: { 'application/json': { schema: Error404Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhFossilsAllRoute = createRoute({
  method: 'get',
  path: '/nh/fossils/all',
  summary: 'All New Horizons fossil groups or individual fossil',
  description:
    'Get a list of all the fossil groups with their respective individual fossils in *Animal Crossing: New Horizons*.',
  request: {
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of fossil groups.',
      content: {
        'application/json': { schema: z.array(NHFossilGroupWithIndividualFossilsNoMatchedSchema) },
      },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhFossilsAllFossilRoute = createRoute({
  method: 'get',
  path: '/nh/fossils/all/{fossil}',
  summary: 'Single New Horizons fossil group with individual fossils',
  description:
    'Retrieve information about a specific fossil group with their respective individual fossils in *Animal Crossing: New Horizons*.',
  request: {
    params: z.object({
      fossil: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the fossil OR fossil group you wish to retrieve information about. If a fossil is provided, a fossil group that the specified fossil belongs to will be returned.',
            in: 'path',
            name: 'fossil',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object describing the fossil group.',
      content: { 'application/json': { schema: NHFossilGroupWithIndividualFossilsSchema } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhFossilsGroupsRoute = createRoute({
  method: 'get',
  path: '/nh/fossils/groups',
  summary: 'All New Horizons fossil groups',
  description: 'Get a list of all the fossil groups in *Animal Crossing: New Horizons*.',
  request: {
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of fossil groups.',
      content: { 'application/json': { schema: z.array(NHFossilGroupSchema) } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhFossilsGroupsFossilGroupRoute = createRoute({
  method: 'get',
  path: '/nh/fossils/groups/{fossil_group}',
  summary: 'Single New Horizons fossil group',
  description:
    'Retrieve information about a specific fossil group in *Animal Crossing: New Horizons*.',
  request: {
    params: z.object({
      fossil_group: z
        .string()
        .openapi({
          param: {
            description: 'The name of the fossil group you wish to retrieve information about.',
            in: 'path',
            name: 'fossil_group',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object describing the fossil group.',
      content: { 'application/json': { schema: NHFossilGroupSchema } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhFossilsIndividualsRoute = createRoute({
  method: 'get',
  path: '/nh/fossils/individuals',
  summary: 'All New Horizons fossils',
  description: 'Get a list of all the individual fossils in *Animal Crossing: New Horizons*.',
  request: {
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of individual fossils.',
      content: { 'application/json': { schema: z.array(NHIndividualFossilSchema) } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhFossilsIndividualsFossilRoute = createRoute({
  method: 'get',
  path: '/nh/fossils/individuals/{fossil}',
  summary: 'Single New Horizons fossil',
  description:
    'Retrieve information about a specific individual fossil in *Animal Crossing: New Horizons*.',
  request: {
    params: z.object({
      fossil: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the individual fossil you wish to retrieve fossil information about.',
            in: 'path',
            name: 'fossil',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object describing the individual fossil.',
      content: { 'application/json': { schema: NHIndividualFossilSchema } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhFurnitureRoute = createRoute({
  method: 'get',
  path: '/nh/furniture',
  summary: 'All New Horizons furniture',
  description: 'Get a list of all furniture and their details in *Animal Crossing: New Horizons*.',
  request: {
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      category: z
        .enum(['Housewares', 'Miscellaneous', 'Wall-mounted'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the category of furniture to return (houswares, miscellaneous, or wall-mounted).',
            in: 'query',
            name: 'category',
            required: false,
            schema: { enum: ['Housewares', 'Miscellaneous', 'Wall-mounted'], type: 'string' },
          },
        }),
      color: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'Aqua',
              'Beige',
              'Black',
              'Blue',
              'Brown',
              'Colorful',
              'Gray',
              'Green',
              'Orange',
              'Pink',
              'Purple',
              'Red',
              'White',
              'Yellow',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return furniture that matches the provided colors (may specify one or two colors).',
            in: 'query',
            name: 'color',
            required: false,
            schema: {
              items: {
                enum: [
                  'Aqua',
                  'Beige',
                  'Black',
                  'Blue',
                  'Brown',
                  'Colorful',
                  'Gray',
                  'Green',
                  'Orange',
                  'Pink',
                  'Purple',
                  'Red',
                  'White',
                  'Yellow',
                ],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      excludedetails: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to `true`, only furniture names are returned. Instead of an array of objects with all details, the return will be an array of strings.',
            in: 'query',
            name: 'excludedetails',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of furniture.',
      content: { 'application/json': { schema: z.array(NHFurnitureSchema) } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhFurnitureFurnitureRoute = createRoute({
  method: 'get',
  path: '/nh/furniture/{furniture}',
  summary: 'Single New Horizons furniture',
  description:
    'Retrieve information about a specific furniture in *Animal Crossing: New Horizons*.',
  request: {
    params: z.object({
      furniture: z
        .string()
        .openapi({
          param: {
            description: 'The name of the furniture you wish to retrieve information about.',
            in: 'path',
            name: 'furniture',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object describing the furniture.',
      content: { 'application/json': { schema: NHFurnitureSchema } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhInteriorRoute = createRoute({
  method: 'get',
  path: '/nh/interior',
  summary: 'All New Horizons interior items',
  description:
    'Get a list of all interior items (flooring, wallpaper, and rugs) and their details in *Animal Crossing: New Horizons*.',
  request: {
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      color: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'Aqua',
              'Beige',
              'Black',
              'Blue',
              'Brown',
              'Colorful',
              'Gray',
              'Green',
              'Orange',
              'Pink',
              'Purple',
              'Red',
              'White',
              'Yellow',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return furniture that matches the provided colors (may specify one or two colors).',
            in: 'query',
            name: 'color',
            required: false,
            schema: {
              items: {
                enum: [
                  'Aqua',
                  'Beige',
                  'Black',
                  'Blue',
                  'Brown',
                  'Colorful',
                  'Gray',
                  'Green',
                  'Orange',
                  'Pink',
                  'Purple',
                  'Red',
                  'White',
                  'Yellow',
                ],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      excludedetails: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to `true`, only interior item names are returned. Instead of an array of objects with all details, the return will be an array of strings.',
            in: 'query',
            name: 'excludedetails',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of interior items.',
      content: { 'application/json': { schema: z.array(NHInteriorSchema) } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhInteriorItemRoute = createRoute({
  method: 'get',
  path: '/nh/interior/{item}',
  summary: 'Single New Horizons interior item',
  description:
    'Retrieve information about a specific interior item in *Animal Crossing: New Horizons*.',
  request: {
    params: z.object({
      item: z
        .string()
        .openapi({
          param: {
            description: 'The name of the interior item you wish to retrieve information about.',
            in: 'path',
            name: 'item',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      color: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'Aqua',
              'Beige',
              'Black',
              'Blue',
              'Brown',
              'Colorful',
              'Gray',
              'Green',
              'Orange',
              'Pink',
              'Purple',
              'Red',
              'White',
              'Yellow',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Return furniture that matches the provided colors (may specify one or two colors).',
            in: 'query',
            name: 'color',
            required: false,
            schema: {
              items: {
                enum: [
                  'Aqua',
                  'Beige',
                  'Black',
                  'Blue',
                  'Brown',
                  'Colorful',
                  'Gray',
                  'Green',
                  'Orange',
                  'Pink',
                  'Purple',
                  'Red',
                  'White',
                  'Yellow',
                ],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object describing the interior item.',
      content: { 'application/json': { schema: NHInteriorSchema } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhItemsRoute = createRoute({
  method: 'get',
  path: '/nh/items',
  summary: 'Miscellaneous New Horizons items',
  description:
    'Get a list of all miscellaneous items (such as materials, star fragments, fruits, fences, and plants) and their details in *Animal Crossing: New Horizons*.',
  request: {
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      excludedetails: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to `true`, only item names are returned. Instead of an array of objects with all details, the return will be an array of strings.',
            in: 'query',
            name: 'excludedetails',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of items.',
      content: { 'application/json': { schema: z.array(NHItemSchema) } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhItemsItemRoute = createRoute({
  method: 'get',
  path: '/nh/items/{item}',
  summary: 'Single New Horizons miscellaneous item',
  description:
    'Retrieve information about a miscellaneous item (such as materials, star fragments, fruits, fences, and plants) in *Animal Crossing: New Horizons*.',
  request: {
    params: z.object({
      item: z
        .string()
        .openapi({
          param: {
            description: 'The name of the interior item you wish to retrieve information about.',
            in: 'path',
            name: 'item',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object describing the item.',
      content: { 'application/json': { schema: NHItemSchema } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhPhotosRoute = createRoute({
  method: 'get',
  path: '/nh/photos',
  summary: 'All New Horizons photos and posters',
  description:
    'Get a list of all character photos+posters and their details in *Animal Crossing: New Horizons*.',
  request: {
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      excludedetails: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to `true`, only item names are returned. Instead of an array of objects with all details, the return will be an array of strings.',
            in: 'query',
            name: 'excludedetails',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of photos and posters.',
      content: { 'application/json': { schema: z.array(NHPhotoSchema) } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhPhotosItemRoute = createRoute({
  method: 'get',
  path: '/nh/photos/{item}',
  summary: 'Single New Horizons photo or poster',
  description:
    'Retrieve information about a character photo or poster in *Animal Crossing: New Horizons*.',
  request: {
    params: z.object({
      item: z
        .string()
        .openapi({
          param: {
            description: 'The name of the photo or poster you wish to retrieve information about.',
            in: 'path',
            name: 'item',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object describing the photo or poster.',
      content: { 'application/json': { schema: NHPhotoSchema } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhRecipesRoute = createRoute({
  method: 'get',
  path: '/nh/recipes',
  summary: 'All New Horizons recipes',
  description: 'Get a list of all recipes and their details in *Animal Crossing: New Horizons*.',
  request: {
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      material: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify a material to only get recipes that use that material. You can specify `material` up to six times (no recipe uses more than six materials).',
            in: 'query',
            name: 'material',
            required: false,
            schema: { type: 'string' },
          },
        }),
      excludedetails: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to `true`, only recipe names are returned. Instead of an array of objects with all details, the return will be an array of strings.',
            in: 'query',
            name: 'excludedetails',
            required: false,
            schema: { type: 'string' },
          },
        }),
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL. Note that requesting specific image sizes for long lists may result in a very long response time.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of recipes.',
      content: { 'application/json': { schema: z.array(NHRecipeSchema) } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhRecipesItemRoute = createRoute({
  method: 'get',
  path: '/nh/recipes/{item}',
  summary: 'Single New Horizons recipe',
  description: 'Retrieve information about a specific recipe in *Animal Crossing: New Horizons*.',
  request: {
    params: z.object({
      item: z
        .string()
        .openapi({
          param: {
            description: 'The name of the item you wish to retrieve recipe information about.',
            in: 'path',
            name: 'item',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object describing the recipe.',
      content: { 'application/json': { schema: NHRecipeSchema } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhSeaRoute = createRoute({
  method: 'get',
  path: '/nh/sea',
  summary: 'All New Horizons sea creatures',
  description:
    'Get a list of all sea creatures and their details in *Animal Crossing: New Horizons*.',
  request: {
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      month: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Retrive only the sea creature that are available in a specific month. Value may be the month's name (`jan`, `january`), the integer representing the month (`01`, `1`), or `current` for the current month. When `current` is specified, the return body will be an object with two arrays inside, one called `north` and the other `south` containing the sea creature available in each respective hemisphere. Note that the current month is calculated based off the API server's time, so it may be slightly off for you at the beginning or end of the month.",
            in: 'query',
            name: 'month',
            required: false,
            schema: { type: 'string' },
          },
        }),
      excludedetails: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to `true`, only sea creature names are returned. Instead of an array of objects with all details, the return will be an array of strings. This is particularly useful when used with the `month` filter, for users who want just a list of sea creatures in a given month but not all their respective details.',
            in: 'query',
            name: 'excludedetails',
            required: false,
            schema: { type: 'string' },
          },
        }),
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL. Note that requesting specific image sizes for long lists may result in a very long response time.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of sea creatures.',
      content: { 'application/json': { schema: z.array(NHSeaCreatureSchema) } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhSeaSeaCreatureRoute = createRoute({
  method: 'get',
  path: '/nh/sea/{sea_creature}',
  summary: 'Single New Horizons sea creature',
  description:
    'Retrieve information about a specific sea creature in *Animal Crossing: New Horizons*.',
  request: {
    params: z.object({
      sea_creature: z
        .string()
        .openapi({
          param: {
            description: 'The name of the sea creature you wish to retrieve information about.',
            in: 'path',
            name: 'sea_creature',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object describing the sea creature.',
      content: { 'application/json': { schema: NHSeaCreatureSchema } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    404: {
      description: 'Could not find the specified sea creature.',
      content: { 'application/json': { schema: Error404Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhToolsRoute = createRoute({
  method: 'get',
  path: '/nh/tools',
  summary: 'All New Horizons tools',
  description: 'Get a list of all tools and their details in *Animal Crossing: New Horizons*.',
  request: {
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      excludedetails: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to `true`, only tool names are returned. Instead of an array of objects with all details, the return will be an array of strings.',
            in: 'query',
            name: 'excludedetails',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of interior items.',
      content: { 'application/json': { schema: z.array(NHToolSchema) } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getNhToolsToolRoute = createRoute({
  method: 'get',
  path: '/nh/tools/{tool}',
  summary: 'Single New Horizons tool',
  description: 'Retrieve information about a specific tool in *Animal Crossing: New Horizons*.',
  request: {
    params: z.object({
      tool: z
        .string()
        .openapi({
          param: {
            description: 'The name of the interior item you wish to retrieve information about.',
            in: 'path',
            name: 'tool',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON object describing the tool.',
      content: { 'application/json': { schema: NHToolSchema } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})

export const getVillagersRoute = createRoute({
  method: 'get',
  path: '/villagers',
  summary: 'Villagers',
  description:
    'This endpoint retrieves villager information from the entire *Animal Crossing* series, with the option to filter by species, personality, game, and/or birthday. Filters use the AND operator (e.g. asking for villagers who have species `frog` and personality `smug` will return all smug frogs). Note that villagers only include the animals that act as residents. Special characters, such as Tom Nook and Isabelle, are not accessed through this endpoint.',
  request: {
    headers: z.object({
      'X-API-KEY': z
        .uuid()
        .openapi({
          param: {
            description:
              'Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.',
            in: 'header',
            name: 'X-API-KEY',
            required: true,
            schema: { format: 'uuid', type: 'string' },
          },
        }),
      'Accept-Version': z
        .string()
        .openapi({
          param: {
            description:
              'The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.',
            in: 'header',
            name: 'Accept-Version',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Villager name. For most names you will get back an array with one object, but note that names are not a unique identifier across the series, as there are 3 names that are shared by multiple villagers (Lulu, Petunia, Carmen). For those 3 names you will get back an array with 2 objects. How you disambiguate between these villagers is up to you.',
            in: 'query',
            name: 'name',
            required: false,
            schema: { type: 'string' },
          },
        }),
      species: z
        .enum([
          'alligator',
          'anteater',
          'bear',
          'bird',
          'bull',
          'cat',
          'cub',
          'chicken',
          'cow',
          'deer',
          'dog',
          'duck',
          'eagle',
          'elephant',
          'frog',
          'goat',
          'gorilla',
          'hamster',
          'hippo',
          'horse',
          'koala',
          'kangaroo',
          'lion',
          'monkey',
          'mouse',
          'octopus',
          'ostrich',
          'penguin',
          'pig',
          'rabbit',
          'rhino',
          'sheep',
          'squirrel',
          'tiger',
          'wolf',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Retrieve villagers of a certain species.',
            in: 'query',
            name: 'species',
            required: false,
            schema: {
              enum: [
                'alligator',
                'anteater',
                'bear',
                'bird',
                'bull',
                'cat',
                'cub',
                'chicken',
                'cow',
                'deer',
                'dog',
                'duck',
                'eagle',
                'elephant',
                'frog',
                'goat',
                'gorilla',
                'hamster',
                'hippo',
                'horse',
                'koala',
                'kangaroo',
                'lion',
                'monkey',
                'mouse',
                'octopus',
                'ostrich',
                'penguin',
                'pig',
                'rabbit',
                'rhino',
                'sheep',
                'squirrel',
                'tiger',
                'wolf',
              ],
              type: 'string',
            },
          },
        }),
      personality: z
        .enum(['lazy', 'jock', 'cranky', 'smug', 'normal', 'peppy', 'snooty', 'sisterly'])
        .exactOptional()
        .openapi({
          param: {
            description:
              "Retrieve villagers with a certain personality. For 'sisterly', note that the community often also calls it 'uchi' or 'big sister'.",
            in: 'query',
            name: 'personality',
            required: false,
            schema: {
              enum: ['lazy', 'jock', 'cranky', 'smug', 'normal', 'peppy', 'snooty', 'sisterly'],
              type: 'string',
            },
          },
        }),
      game: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum(['DNM', 'AC', 'E_PLUS', 'WW', 'CF', 'NL', 'WA', 'NH', 'FILM', 'HHD', 'PC']),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Retrieve villagers that appear in all listed games. For example, if you want only villagers that appear in both *New Horizons* and *Pocket Camp*, you would send in `?game=nh&game=pc`.',
            in: 'query',
            name: 'game',
            required: false,
            schema: {
              items: {
                enum: ['DNM', 'AC', 'E_PLUS', 'WW', 'CF', 'NL', 'WA', 'NH', 'FILM', 'HHD', 'PC'],
                type: 'string',
              },
              type: 'array',
            },
          },
        }),
      birthmonth: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Retrieve villagers born in a specific month. Value may be the month's name (`jan`, `january`) or the integer representing the month (`01`, `1`).",
            in: 'query',
            name: 'birthmonth',
            required: false,
            schema: { type: 'string' },
          },
        }),
      birthday: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Use with `birthmonth` to get villager(s) born on a specific day. Value should be an int, 1 through 31.',
            in: 'query',
            name: 'birthday',
            required: false,
            schema: { type: 'string' },
          },
        }),
      nhdetails: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to `true`, an `nh_details` object will be included that contains *New Horizons* details about the villager. If the villager does not appear in *New Horizons*, the returned `nh_details` field will be set to null.',
            in: 'query',
            name: 'nhdetails',
            required: false,
            schema: { type: 'string' },
          },
        }),
      excludedetails: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'When set to `true`, only villager names are returned. Instead of an array of objects with all details, the return will be an array of strings.',
            in: 'query',
            name: 'excludedetails',
            required: false,
            schema: { type: 'string' },
          },
        }),
      thumbsize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Specify the desired width of returned image URLs. When unspecified, the linked image(s) returned by the API will be full-resolution. Note that images can only be reduced in size; specifying a width greater than than the maximum size will return the default full-size image URL. Note that requesting specific image sizes for long lists may result in a very long response time.',
            in: 'query',
            name: 'thumbsize',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A JSON array of villagers.',
      content: { 'application/json': { schema: z.array(VillagerSchema) } },
    },
    400: {
      description: 'One of the inputs (usually query parameters) has an invalid value.',
      content: { 'application/json': { schema: Error400Schema } },
    },
    401: {
      description: 'Failed to authenticate user from `X-API-KEY`.',
      content: { 'application/json': { schema: Error401Schema } },
    },
    500: {
      description: 'There was an error fetching the requested data.',
      content: { 'application/json': { schema: Error500Schema } },
    },
  },
})
