import { createRoute, z } from '@hono/zod-openapi'

const BrandedFoodObjectSchema = z
  .object({
    items: z
      .array(
        z
          .object({
            allergens: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description:
                  'An array of ingredients in this item that may cause allergic reactions in people',
              }),
            barcode: z.string().exactOptional().openapi({ description: 'EAN/UPC barcode' }),
            brand: z
              .string()
              .exactOptional()
              .openapi({ description: 'The brand name that owns this item' }),
            brand_list: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description:
                  'An array of brands we have associated with this item. Some items are sold by more than 1 brand.',
              }),
            categories: z
              .array(z.string().openapi({ description: 'An array of categories for this item' }))
              .exactOptional(),
            countries: z
              .array(z.string())
              .exactOptional()
              .openapi({ description: 'An array of countries where this item is sold' }),
            country_details: z
              .object({
                english_speaking: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description:
                      "The number of countries where English is the country's primary language",
                  }),
                non_english_speaking: z
                  .int()
                  .exactOptional()
                  .openapi({
                    description:
                      "The number of countries where English is not the country's primary language",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  'An object containing additional information on the countries where this item is found',
                required: [],
              }),
            description: z
              .string()
              .exactOptional()
              .openapi({ description: 'A description of this item' }),
            diet_flags: z
              .array(
                z
                  .object({
                    compatibility_description: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'A description of how we graded this ingredient for compatibility with the diet',
                      }),
                    compatibility_level: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          'A numeric representation of if we believe this ingredient is compatible with the diet. Higher values indicate more compatibility',
                      }),
                    diet_label: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Name of the diet with which this ingredient may not be compatible',
                      }),
                    ingredient: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Ingredient name' }),
                    ingredient_description: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Description of the ingredient' }),
                    is_allergen: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description: 'Boolean representing if the ingredient is a known allergen',
                      }),
                    is_compatible: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'A description of if we believe this ingredient is compatible with the diet',
                      }),
                  })
                  .openapi({
                    description:
                      'An object containing information on an individual ingredient that was flagged as potentially not being compatible with a certain diet',
                    required: [],
                  }),
              )
              .exactOptional()
              .openapi({
                description:
                  'An array of ingredient objects that were flagged while grading this item for compatibility with each diet',
              }),
            diet_labels: z
              .object({
                gluten_free: z
                  .object({
                    compatibility_level: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          'Numeric representation of how compatible this item is with this diet. Higher values indicate more compatibility',
                      }),
                    confidence: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          'Boolean that indicates if we are confident in how this item is graded for this diet',
                      }),
                    confidence_description: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Description of our confidence that this item was graded correctly',
                      }),
                    is_compatible: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description: 'Boolean describing if this item is compatible with this diet',
                      }),
                    name: z.string().exactOptional().openapi({ description: 'Diet name' }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      "An object containing information on this item's compatibility with Gluten Free diets",
                    required: [],
                  }),
                vegan: z
                  .object({
                    compatibility_level: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          'Numeric representation of how compatible this item is with this diet. Higher values indicate more compatibility',
                      }),
                    confidence: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          'Boolean that indicates if we are confident in how this item is graded for this diet',
                      }),
                    confidence_description: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Description of our confidence that this item was graded correctly',
                      }),
                    is_compatible: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description: 'Boolean describing if this item is compatible with this diet',
                      }),
                    name: z.string().exactOptional().openapi({ description: 'Diet name' }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      "An object containing information on this item's compatibility with the Vegan diets",
                    required: [],
                  }),
                vegetarian: z
                  .object({
                    compatibility_level: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          'Numeric representation of how compatible this item is with this diet. Higher values indicate more compatibility',
                      }),
                    confidence: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          'Boolean that indicates if we are confident in how this item is graded for this diet',
                      }),
                    confidence_description: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Description of our confidence that this item was graded correctly',
                      }),
                    is_compatible: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description: 'Boolean describing if this item is compatible with this diet',
                      }),
                    name: z.string().exactOptional().openapi({ description: 'Diet name' }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      "An object containing information on this item's compatibility with Vegetarian diets",
                    required: [],
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "An object containing this item's compatibility grades for each supported diet",
                required: [],
              }),
            has_english_ingredients: z
              .boolean()
              .exactOptional()
              .openapi({
                description: 'A boolean indicating if we have English ingredients for this item',
              }),
            ingredient_list: z
              .array(z.string())
              .exactOptional()
              .openapi({ description: "An array of this item's ingredients" }),
            ingredients: z
              .string()
              .exactOptional()
              .openapi({
                description: "This food item's ingredients from greatest quantity to least",
              }),
            keywords: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description: 'An array of keywords that can be used to describe this item',
              }),
            minerals: z
              .array(z.string())
              .exactOptional()
              .openapi({ description: 'An array of minerals that this item contains' }),
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Item name as provided by brand owner or as shown on packaging',
              }),
            nutrients: z
              .array(
                z
                  .object({
                    data_points: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description: 'Number of observations on which the value is based',
                      }),
                    description: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Description of the nutrient source' }),
                    measurement_unit: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The unit used for the measure of this nutrient' }),
                    name: z.string().exactOptional().openapi({ description: 'Nutrient name' }),
                    per_100g: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Amount of the nutrient per 100g of food' }),
                    rank: z.int().exactOptional().openapi({ description: 'Nutrient rank' }),
                  })
                  .openapi({
                    description:
                      'An object containing information for a specific nutrient found in this food item',
                    required: [],
                  }),
              )
              .exactOptional()
              .openapi({
                description: 'An array containing nutrient informatio objects for this food item',
              }),
            package: z
              .object({
                quantity: z.int().exactOptional().openapi({ description: 'Package quantity' }),
                size: z.string().exactOptional().openapi({ description: 'Package size' }),
              })
              .exactOptional()
              .openapi({
                description: 'An object containing basic packaging information about this item',
                required: [],
              }),
            packaging_photos: z
              .object({
                front: z
                  .object({
                    display: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: "Full-sized photo of the front of this item's packaging",
                      }),
                    small: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: "Small photo of the front of this item's packaging",
                      }),
                    thumb: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: "Thumbnail photo of the front of this item's packaging",
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      "An object containing photos of the front of this item's packaging",
                    required: [],
                  }),
                ingredients: z
                  .object({
                    display: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: "Full-sized photo of the ingredients on this item's packaging",
                      }),
                    small: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: "Small photo of the ingredients on this item's packaging",
                      }),
                    thumb: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: "Thumbnail photo of the ingredients on this item's packaging",
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      "An object containing photos of the ingredients on this item's packaging",
                    required: [],
                  }),
                nutrition: z
                  .object({
                    display: z
                      .string()
                      .exactOptional()
                      .openapi({ description: "Full-sized photo of this item's nutrition label" }),
                    small: z
                      .string()
                      .exactOptional()
                      .openapi({ description: "Small photo of this item's nutrition label" }),
                    thumb: z
                      .string()
                      .exactOptional()
                      .openapi({ description: "Thumbnail photo of this item's nutrition label" }),
                  })
                  .exactOptional()
                  .openapi({
                    description: "An object containing photos of this item's nutrition label",
                    required: [],
                  }),
              })
              .exactOptional()
              .openapi({
                description: "A object containing a collection of photos of this item's packaging",
                required: [],
              }),
            palm_oil_ingredients: z
              .array(z.string())
              .exactOptional()
              .openapi({ description: 'An array of ingredients made from palm oil' }),
            serving: z
              .object({
                measurement_unit: z
                  .string()
                  .exactOptional()
                  .openapi({
                    description:
                      'Measurement unit for each serving (e.g. if measure is 3 tsp, the unit is tsp)',
                  }),
                size: z.string().exactOptional().openapi({ description: 'Serving size' }),
                size_fulltext: z
                  .string()
                  .exactOptional()
                  .openapi({ description: 'Serving size description' }),
              })
              .exactOptional()
              .openapi({
                description: 'An object containing serving information for this item',
                required: [],
              }),
            traces: z
              .array(z.string())
              .exactOptional()
              .openapi({
                description: 'An array of trace ingredients that may be found in this item',
              }),
            vitamins: z
              .array(z.string())
              .exactOptional()
              .openapi({ description: 'An array of vitamins that are found in this item' }),
          })
          .openapi({
            description: 'An object containing information for this specific item.',
            required: [],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array containing an object for each individual item returned by your API call.',
      }),
  })
  .openapi({
    description:
      'Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.',
    required: [],
  })
  .openapi('BrandedFoodObject')

const IngredientObjectSchema = z
  .object({
    items: z
      .array(
        z
          .object({
            calorie_conversion_factor: z
              .object({
                carbohydrate_value: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'The multiplication factor for carbohydrates' }),
                fat_value: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'The multiplication factor for fat' }),
                protein_value: z
                  .number()
                  .exactOptional()
                  .openapi({ description: 'The multiplication factor for protein' }),
              })
              .exactOptional()
              .openapi({
                description:
                  'An object containing the multiplication factors to be used when calculating energy from macronutrients for a specific food.',
                required: [],
              }),
            categories: z
              .array(z.string().openapi({ description: 'An array of categories for this item' }))
              .exactOptional(),
            common_name: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Common name associated with this item. These generally clarify what the item is (e.g. when the brand name is "BRAND\'s Spicy Enchilada" the common name may be "Chicken enchilada")',
              }),
            components: z
              .array(
                z
                  .object({
                    data_points: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description: 'The number of obersvations on which the measure is based',
                      }),
                    gram_weight: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'The weight of the component in grams' }),
                    is_refuse: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'Whether the component is refuse, i.e. not edible' }),
                    name: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The kind of component, e.g. bone' }),
                    pct_weight: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description:
                          'The weight of the component as a percentage of the total weight of the food',
                      }),
                  })
                  .openapi({
                    description:
                      'An object containing information on a specific component of this food item',
                    required: [],
                  }),
              )
              .exactOptional()
              .openapi({
                description:
                  'An array of objects containing the constituent parts of a food (e.g. bone is a component of meat)',
              }),
            footnote: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Comments on any unusual aspects of this item. Examples might include unusual aspects of the food overall',
              }),
            name: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Item name as provided by brand owner or as shown on packaging',
              }),
            nutrients: z
              .array(
                z
                  .object({
                    data_points: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description: 'Number of observations on which the value is based',
                      }),
                    description: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'Description of the nutrient source' }),
                    footnote: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Comments on any unusual aspect of the food nutrient. Examples might include why a nutrient value is different than typically expected.',
                      }),
                    max: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Maximum nutrient value' }),
                    measurement_unit: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'The unit used for the measure of this nutrient' }),
                    median: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Median nutrient value' }),
                    min: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Minimum nutrient value' }),
                    name: z.string().exactOptional().openapi({ description: 'Nutrient name' }),
                    per_100g: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'Amount of the nutrient per 100g of food' }),
                    rank: z.int().exactOptional().openapi({ description: 'Nutrient rank' }),
                  })
                  .openapi({
                    description:
                      'An object containing information for a specific nutrient found in this food item',
                    required: [],
                  }),
              )
              .exactOptional()
              .openapi({
                description: 'An array containing nutrient informatio objects for this food item',
              }),
            portions: z
              .array(
                z
                  .object({
                    data_points: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description: 'The number of observations on which the measure is based',
                      }),
                    description: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Comments that provide more specificity on the measure. For example, for a pizza measure the dissemination text might be 1 slice is 1/8th of a 14 inch pizza.',
                      }),
                    footnote: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Comments on any unusual aspects of the measure. Examples might includes caveats on the usage of a measure, or reasons why a measure gram weight is an unexpected value.',
                      }),
                    gram_weight: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'The weight of the measure in grams' }),
                    measurement_unit: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'The unit used for measure (e.g. if mesure is 3 tsp, the unit is tsp)',
                      }),
                    modifier: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Qualifier of the measure (e.g. related to food shape or form) (e.g. melted, crushed, diced)',
                      }),
                  })
                  .openapi({
                    description:
                      'An object containing information on a specific food portion found in this item',
                    required: [],
                  }),
              )
              .exactOptional()
              .openapi({
                description:
                  'An array of objects containing information on discrete amounts of a food found in this item',
              }),
            protein_conversion_factor: z
              .number()
              .exactOptional()
              .openapi({
                description: 'The multiplication factor used to calculate protein from nitrogen',
              }),
            score: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  "A value that represents how similar the name of this food item is to the original search term. The lower the value the closer this item's name is to the original search term.",
              }),
            search_term: z
              .string()
              .exactOptional()
              .openapi({ description: 'The original search term that found this food item' }),
          })
          .openapi({
            description: 'An object containing information for this specific item.',
            required: [],
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'An array containing an object for each individual item returned by your API call.',
      }),
  })
  .openapi({
    description:
      'Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.',
    required: [],
  })
  .openapi('IngredientObject')

const _200BrandedResponseResponse = {
  description: '**Valid** - Will return an object containing any matching foods. \n',
  content: { 'application/json': { schema: BrandedFoodObjectSchema } },
}

const _200IngredientResponseResponse = {
  description: '**Valid** - Will return an object containing any matching ingredient foods. \n',
  content: { 'application/json': { schema: IngredientObjectSchema } },
}

const _400ErrorResponse = { description: '**Validation error** - Invalid parameters or request.\n' }

const _401ErrorResponse = {
  description:
    '**Unauthorized** - Invalid API key, unauthorized access, or usage limits exceeded. ***[More information &raquo;](https://desk.zoho.com/portal/chompthis/kb/articles/what-is-a-rate-limit)***\n',
}

const _404ErrorResponse = { description: '**Not found** - No food items were found.\n' }

const _500ErrorResponse = {
  description:
    '**Server error** - Internal server error, request failed, or base error. *Please **[contact us](https://chompthis.com/api/ticket-new.php)** if you see this.*\n',
}

const ApiKeyAuthSecurityScheme = { in: 'query', name: 'api_key', type: 'apiKey' }

export const getFoodBrandedBarcodePhpRoute = createRoute({
  method: 'get',
  path: '/food/branded/barcode.php',
  summary: 'Get a branded food item using a barcode',
  description:
    "## Get data for a branded food using the food's UPC/EAN barcode.\n\n**Example** \n> ```https://chompthis.com/api/v2/food/branded/barcode.php?api_key=API_KEY&code=CODE```\n\n**Tips**\n  * Read our **[Knowledge Base article](https://desk.zoho.com/portal/chompthis/kb/articles/im-having-trouble-getting-matches-for-barcodes-what-can-id-do)** for helpful tips and tricks.\n",
  request: {
    query: z.object({
      code: z
        .string()
        .openapi({
          param: {
            description: '#### UPC/EAN barcode\n\n**Example**\n> ```&code=0842234000988```\n',
            in: 'query',
            name: 'code',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: _200BrandedResponseResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    404: _404ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getFoodBrandedNamePhpRoute = createRoute({
  method: 'get',
  path: '/food/branded/name.php',
  summary: 'Get a branded food item by name',
  description:
    "## Search for branded food items by name.\n\n**Example**\n> ```https://chompthis.com/api/v2/food/branded/name.php?api_key=API_KEY&name=NAME```\n\n**Tips**\n  * Get started by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.\n\n> This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.\n",
  request: {
    query: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              '#### Search for branded food items using a general food name keyword. This does not have to exactly match the "official" name for the food.\n\n**Example**\n> ```&name=Starburst```\n',
            in: 'query',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(1),
            z.literal(2),
            z.literal(3),
            z.literal(4),
            z.literal(5),
            z.literal(6),
            z.literal(7),
            z.literal(8),
            z.literal(9),
            z.literal(10),
          ]),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '#### Set maximum number of records you want the API to return. The default value is "**10**."\n\n**Example**\n> ```&limit=10```\n',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], type: 'integer' },
          },
        }),
      page: z
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
              '#### This is how you paginate the search result. By default, you will see the first 10 records. You must increment the page number to access the next 10 records, and so on. The default value is "**1**."\n\n**Example**\n> ```&page=1```\n',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: _200BrandedResponseResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    404: _404ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getFoodBrandedSearchPhpRoute = createRoute({
  method: 'get',
  path: '/food/branded/search.php',
  summary: 'Get data for branded food items using various search parameters',
  description:
    "## Search for branded food items using various parameters.\n\n**Example**\n> ```https://chompthis.com/api/v2/food/branded/search.php?api_key=API_KEY&brand=BRAND&country=COUNTRY&page=1```\n\n**Tips** \n  * Get started by using the **[Query Builder](https://chompthis.com/api/build.php)**.\n\n> This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.\n",
  request: {
    query: z.object({
      allergen: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '#### Filter the search to only include branded foods that contain a specific allergen.\n\n**Example**\n> ```&allergen=Peanuts```\n\n**Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.\n',
            in: 'query',
            name: 'allergen',
            required: false,
            schema: { type: 'string' },
          },
        }),
      brand: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '#### Filter the search to only include branded foods that are owned by a specific brand.\n\n**Example**\n> ```&brand=Starbucks```\n',
            in: 'query',
            name: 'brand',
            required: false,
            schema: { type: 'string' },
          },
        }),
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '#### Filter the search to only include branded foods from a specific category.\n\n**Example**\n> ```&category=Plant Based Foods```\n',
            in: 'query',
            name: 'category',
            required: false,
            schema: { type: 'string' },
          },
        }),
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '#### Filter the search to only include branded foods that are sold in a specific country.\n\n**Example**\n> ```&country=United States```\n\n**Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.\n',
            in: 'query',
            name: 'country',
            required: false,
            schema: { type: 'string' },
          },
        }),
      diet: z
        .enum(['Vegan', 'Vegetarian', 'Gluten Free'])
        .exactOptional()
        .openapi({
          param: {
            description:
              '#### Filter the search to only include branded foods that are considered compatible with a specific diet.\n\n**Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.\n',
            in: 'query',
            name: 'diet',
            required: false,
            schema: { enum: ['Vegan', 'Vegetarian', 'Gluten Free'], type: 'string' },
          },
        }),
      ingredient: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '#### Filter the search to only include branded foods that contain a specific ingredient.\n\n**Example**\n> ```&ingredient=Salt```\n',
            in: 'query',
            name: 'ingredient',
            required: false,
            schema: { type: 'string' },
          },
        }),
      keyword: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '#### Filter the search to only include branded foods that are associated with a specific keyword.\n\n**Example**\n> ```&keyword=Organic```\n\n**Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.\n',
            in: 'query',
            name: 'keyword',
            required: false,
            schema: { type: 'string' },
          },
        }),
      mineral: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '#### Filter the search to only include branded foods that contain a specific mineral.\n\n**Example**\n> ```&mineral=Potassium```\n',
            in: 'query',
            name: 'mineral',
            required: false,
            schema: { type: 'string' },
          },
        }),
      nutrient: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '#### Filter the search to only include branded foods that contain a specific nutrient.\n\n**Example**\n> ```&nutrient=Caffeine```\n\n**Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.\n',
            in: 'query',
            name: 'nutrient',
            required: false,
            schema: { type: 'string' },
          },
        }),
      palm_oil: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '#### Filter the search to only include branded foods that contain a specific ingredient made using palm oil.\n\n**Example**\n> ```&palm_oil=E160a Beta Carotene```\n',
            in: 'query',
            name: 'palm_oil',
            required: false,
            schema: { type: 'string' },
          },
        }),
      trace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '### Filter the search to only include branded foods that contain a specific trace ingredient.\n\n**Example**\n> ```&trace=Tree Nuts```\n\n**Important Note**: This parameter cannot be used alone. It must be paired with at least 1 additional parameter.\n',
            in: 'query',
            name: 'trace',
            required: false,
            schema: { type: 'string' },
          },
        }),
      vitamin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '#### Filter the search to only include branded foods that contain a specific vitamin.\n\n**Example**\n> ```&vitamin=Biotin```\n',
            in: 'query',
            name: 'vitamin',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([
            z.literal(1),
            z.literal(2),
            z.literal(3),
            z.literal(4),
            z.literal(5),
            z.literal(6),
            z.literal(7),
            z.literal(8),
            z.literal(9),
            z.literal(10),
          ]),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '#### Set maximum number of records you want the API to return. The default value is "**10**."\n\n**Example**\n> ```&limit=10```\n',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], type: 'integer' },
          },
        }),
      page: z
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
              '#### This is how you paginate the search result. By default, you will see the first 10 records. You must increment the page number to access the next 10 records, and so on. The default value is "**1**."\n\n**Example**\n> ```&page=1```\n',
            in: 'query',
            name: 'page',
            required: false,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: _200BrandedResponseResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    404: _404ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ ApiKeyAuth: [] }],
})

export const getFoodIngredientSearchPhpRoute = createRoute({
  method: 'get',
  path: '/food/ingredient/search.php',
  summary: 'Get raw/generic food ingredient item(s)',
  description:
    "## Get data for a specific ingredient or a specific set of ingredients.\n\n**Example #1: Single Ingredient**\n> ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli```\n\n**Example #2: Set of Ingredients**\n> ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli,mashed potatoes,chicken drumstick```\n\n**Tips**\n  * Expose ingredient endpoints by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.\n\n> This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.\n",
  request: {
    query: z.object({
      find: z
        .string()
        .openapi({
          param: {
            description:
              'Search our database for a single ingredient or a specific set of ingredients.\n\n**Example #1: Single Ingredient**\n> ```&find=raw broccoli```\n\n**Example #2: Set of Ingredients**\n> ```&find=raw broccoli,buttermilk waffle,mashed potatoes```\n\n**Important Notes** \n  * Comma-separated lists cannot contain more than **10 ingredients**. You must perform additional API calls if you are looking up more than 10 ingredients.\n',
            in: 'query',
            name: 'find',
            required: true,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.union([z.literal(1), z.literal(2), z.literal(3)]),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              '#### Set maximum number of records you want the API to return, per search term. The default value is "**1**."\n\n**Example**\n> ```&limit=3```\n',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { enum: [1, 2, 3], type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: _200IngredientResponseResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    404: _404ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ ApiKeyAuth: [] }],
})
