import { createRoute, z } from '@hono/zod-openapi'

const ImageSchema = z
  .object({
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of the image. For crawled images, this is the provided URL. For uploaded images, this is a serving URL from Google if the image has been processed successfully.',
      }),
    status: z
      .enum([
        'STATUS_UNSPECIFIED',
        'PENDING_PROCESSING',
        'PENDING_CRAWL',
        'OK',
        'ROBOTED',
        'XROBOTED',
        'CRAWL_ERROR',
        'PROCESSING_ERROR',
        'DECODING_ERROR',
        'TOO_BIG',
        'CRAWL_SKIPPED',
        'HOSTLOADED',
        'HTTP_404',
      ])
      .exactOptional()
      .openapi({ description: 'The status of the image. @OutputOnly' }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'CRAWLED', 'UPLOADED'])
      .exactOptional()
      .openapi({ description: 'The type of the image, i.e., crawled or uploaded. @OutputOnly' }),
  })
  .openapi({ description: 'An image.', required: [] })
  .openapi('Image')

const CapacitySchema = z
  .object({
    unit: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unit of the capacity, i.e., MB, GB, or TB.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The numeric value of the capacity.' }),
  })
  .openapi({
    description:
      'The capacity of a product. For more information, see https://support.google.com/manufacturers/answer/6124116#capacity.',
    required: [],
  })
  .openapi('Capacity')

const CountSchema = z
  .object({
    unit: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unit in which these products are counted.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The numeric value of the number of products in a package.' }),
  })
  .openapi({
    description:
      'The number of products in a single package. For more information, see https://support.google.com/manufacturers/answer/6124116#count.',
    required: [],
  })
  .openapi('Count')

const FeatureDescriptionSchema = z
  .object({
    headline: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short description of the feature.' }),
    image: ImageSchema.exactOptional().openapi({
      description: 'An optional image describing the feature.',
    }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'A detailed description of the feature.' }),
  })
  .openapi({
    description:
      'A feature description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.',
    required: [],
  })
  .openapi('FeatureDescription')

const GrocerySchema = z
  .object({
    activeIngredients: z.string().exactOptional().openapi({ description: 'Active ingredients.' }),
    alcoholByVolume: z.float64().exactOptional().openapi({ description: 'Alcohol by volume.' }),
    allergens: z.string().exactOptional().openapi({ description: 'Allergens.' }),
    derivedNutritionClaim: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Derived nutrition claim.' }),
    directions: z.string().exactOptional().openapi({ description: 'Directions.' }),
    indications: z.string().exactOptional().openapi({ description: 'Indications.' }),
    ingredients: z.string().exactOptional().openapi({ description: 'Ingredients.' }),
    nutritionClaim: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Nutrition claim.' }),
    storageInstructions: z
      .string()
      .exactOptional()
      .openapi({ description: 'Storage instructions.' }),
  })
  .openapi({ required: [] })
  .openapi('Grocery')

const FloatUnitSchema = z
  .object({
    amount: z.float64().exactOptional().openapi({ description: 'amount.' }),
    unit: z.string().exactOptional().openapi({ description: 'unit.' }),
  })
  .openapi({ description: 'Combination of float amount and unit.', required: [] })
  .openapi('FloatUnit')

const VoluntaryNutritionFactSchema = z
  .object({
    dailyPercentage: z.float64().exactOptional().openapi({ description: 'Daily percentage.' }),
    name: z.string().exactOptional().openapi({ description: 'Name.' }),
    value: FloatUnitSchema.exactOptional().openapi({ description: 'Value.' }),
  })
  .openapi({ description: 'Voluntary Nutrition Facts.', required: [] })
  .openapi('VoluntaryNutritionFact')

const NutritionSchema = z
  .object({
    addedSugars: FloatUnitSchema.exactOptional().openapi({ description: 'Added sugars.' }),
    addedSugarsDailyPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Added sugars daily percentage.' }),
    calcium: FloatUnitSchema.exactOptional().openapi({ description: 'Calcium.' }),
    calciumDailyPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Calcium daily percentage.' }),
    cholesterol: FloatUnitSchema.exactOptional().openapi({ description: 'Cholesterol.' }),
    cholesterolDailyPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Cholesterol daily percentage.' }),
    dietaryFiber: FloatUnitSchema.exactOptional().openapi({ description: 'Dietary fiber.' }),
    dietaryFiberDailyPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Dietary fiber daily percentage.' }),
    energy: FloatUnitSchema.exactOptional().openapi({
      description: 'Mandatory Nutrition Facts. Energy.',
    }),
    energyFromFat: FloatUnitSchema.exactOptional().openapi({ description: 'Energy from fat.' }),
    folateDailyPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Folate daily percentage.' }),
    folateFolicAcid: FloatUnitSchema.exactOptional().openapi({ description: 'Folate folic acid.' }),
    folateMcgDfe: z.float64().exactOptional().openapi({ description: 'Folate mcg DFE.' }),
    iron: FloatUnitSchema.exactOptional().openapi({ description: 'Iron.' }),
    ironDailyPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Iron daily percentage.' }),
    monounsaturatedFat: FloatUnitSchema.exactOptional().openapi({
      description: 'Monounsaturated fat.',
    }),
    nutritionFactMeasure: z
      .string()
      .exactOptional()
      .openapi({ description: 'Nutrition fact measure.' }),
    polyols: FloatUnitSchema.exactOptional().openapi({ description: 'Polyols.' }),
    polyunsaturatedFat: FloatUnitSchema.exactOptional().openapi({
      description: 'Polyunsaturated fat.',
    }),
    potassium: FloatUnitSchema.exactOptional().openapi({ description: 'Potassium.' }),
    potassiumDailyPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Potassium daily percentage.' }),
    preparedSizeDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Prepared size description.' }),
    protein: FloatUnitSchema.exactOptional().openapi({ description: 'Protein.' }),
    proteinDailyPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Protein daily percentage.' }),
    saturatedFat: FloatUnitSchema.exactOptional().openapi({ description: 'Saturated fat.' }),
    saturatedFatDailyPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Saturated fat daily percentage.' }),
    servingSizeDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Food Serving Size. Serving size description.' }),
    servingSizeMeasure: FloatUnitSchema.exactOptional().openapi({
      description: 'Serving size measure.',
    }),
    servingsPerContainer: z
      .string()
      .exactOptional()
      .openapi({ description: 'Servings per container.' }),
    sodium: FloatUnitSchema.exactOptional().openapi({ description: 'Sodium.' }),
    sodiumDailyPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Sodium daily percentage.' }),
    starch: FloatUnitSchema.exactOptional().openapi({ description: 'Starch.' }),
    totalCarbohydrate: FloatUnitSchema.exactOptional().openapi({
      description: 'Total carbohydrate.',
    }),
    totalCarbohydrateDailyPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total carbohydrate daily percentage.' }),
    totalFat: FloatUnitSchema.exactOptional().openapi({ description: 'Total fat.' }),
    totalFatDailyPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total fat daily percentage.' }),
    totalSugars: FloatUnitSchema.exactOptional().openapi({ description: 'Total sugars.' }),
    totalSugarsDailyPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Total sugars daily percentage.' }),
    transFat: FloatUnitSchema.exactOptional().openapi({ description: 'Trans fat.' }),
    transFatDailyPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Trans fat daily percentage.' }),
    vitaminD: FloatUnitSchema.exactOptional().openapi({ description: 'Vitamin D.' }),
    vitaminDDailyPercentage: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Vitamin D daily percentage.' }),
    voluntaryNutritionFact: z
      .array(VoluntaryNutritionFactSchema)
      .exactOptional()
      .openapi({ description: 'Voluntary nutrition fact.' }),
  })
  .openapi({ required: [] })
  .openapi('Nutrition')

const ProductDetailSchema = z
  .object({
    attributeName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the attribute.' }),
    attributeValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the attribute.' }),
    sectionName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A short section name that can be reused between multiple product details.',
      }),
  })
  .openapi({
    description:
      'A product detail of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.',
    required: [],
  })
  .openapi('ProductDetail')

const PriceSchema = z
  .object({
    amount: z.string().exactOptional().openapi({ description: 'The numeric value of the price.' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency in which the price is denoted.' }),
  })
  .openapi({ description: 'A price.', required: [] })
  .openapi('Price')

const AttributesSchema = z
  .object({
    additionalImageLink: z
      .array(ImageSchema)
      .exactOptional()
      .openapi({
        description:
          'The additional images of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#addlimage.',
      }),
    ageGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The target age group of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#agegroup.',
      }),
    brand: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The brand name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#brand.',
      }),
    capacity: CapacitySchema.exactOptional().openapi({
      description:
        'The capacity of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#capacity.',
    }),
    color: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The color of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#color.',
      }),
    count: CountSchema.exactOptional().openapi({
      description:
        'The count of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#count.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#description.',
      }),
    disclosureDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The disclosure date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#disclosure.',
      }),
    excludedDestination: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of excluded destinations such as "ClientExport", "ClientShoppingCatalog" or "PartnerShoppingCatalog". For more information, see https://support.google.com/manufacturers/answer/7443550',
      }),
    featureDescription: z
      .array(FeatureDescriptionSchema)
      .exactOptional()
      .openapi({
        description:
          'The rich format description of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#featuredesc.',
      }),
    flavor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The flavor of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#flavor.',
      }),
    format: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The format of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#format.',
      }),
    gender: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The target gender of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gender.',
      }),
    grocery: GrocerySchema.exactOptional().openapi({
      description:
        'Grocery Attributes. See more at https://support.google.com/manufacturers/answer/12098458#grocery.',
    }),
    gtin: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The Global Trade Item Number (GTIN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#gtin.',
      }),
    imageLink: ImageSchema.exactOptional().openapi({
      description:
        'The image of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#image.',
    }),
    includedDestination: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of included destinations such as "ClientExport", "ClientShoppingCatalog" or "PartnerShoppingCatalog". For more information, see https://support.google.com/manufacturers/answer/7443550',
      }),
    itemGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The item group id of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#itemgroupid.',
      }),
    material: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The material of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#material.',
      }),
    mpn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Manufacturer Part Number (MPN) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#mpn.',
      }),
    nutrition: NutritionSchema.exactOptional().openapi({
      description:
        'Nutrition Attributes. See more at https://support.google.com/manufacturers/answer/12098458#food-servings.',
    }),
    pattern: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The pattern of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#pattern.',
      }),
    productDetail: z
      .array(ProductDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'The details of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.',
      }),
    productHighlight: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The product highlights. For more information, see https://support.google.com/manufacturers/answer/10066942',
      }),
    productLine: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the group of products related to the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productline.',
      }),
    productName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The canonical name of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productname.',
      }),
    productPageUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of the detail page of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productpage.',
      }),
    productType: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The type or category of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#producttype.',
      }),
    releaseDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The release date of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#release.',
      }),
    richProductContent: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Rich product content. For more information, see https://support.google.com/manufacturers/answer/9389865',
      }),
    scent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The scent of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#scent.',
      }),
    size: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The size of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#size.',
      }),
    sizeSystem: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The size system of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizesystem.',
      }),
    sizeType: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The size type of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#sizetype.',
      }),
    suggestedRetailPrice: PriceSchema.exactOptional().openapi({
      description:
        'The suggested retail price (MSRP) of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#price.',
    }),
    targetClientId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The target client id. Should only be used in the accounts of the data partners. For more information, see https://support.google.com/manufacturers/answer/10857344',
      }),
    theme: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The theme of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#theme.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#title.',
      }),
    videoLink: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The videos of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#video.',
      }),
  })
  .openapi({
    description:
      'Attributes of the product. For more information, see https://support.google.com/manufacturers/answer/6124116.',
    required: [],
  })
  .openapi('Attributes')

const CertificationSchema = z
  .object({
    authority: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Name of the certification body.' }),
    link: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. A URL link to the certification.' }),
    logo: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. A URL link to the certification logo.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Name of the certification.' }),
    validUntil: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The expiration date (UTC).' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. A custom value of the certification.' }),
  })
  .openapi({ description: 'Description of a certification.', required: [] })
  .openapi('Certification')

const DestinationStatusSchema = z
  .object({
    destination: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the destination.' }),
    status: z
      .enum(['UNKNOWN', 'ACTIVE', 'PENDING', 'DISAPPROVED'])
      .exactOptional()
      .openapi({ description: 'The status of the destination.' }),
  })
  .openapi({ description: 'The destination status.', required: [] })
  .openapi('DestinationStatus')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const IssueSchema = z
  .object({
    attribute: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If present, the attribute that triggered the issue. For more information about attributes, see https://support.google.com/manufacturers/answer/6124116.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Longer description of the issue focused on how to resolve it.' }),
    destination: z
      .string()
      .exactOptional()
      .openapi({ description: 'The destination this issue applies to.' }),
    resolution: z
      .enum(['RESOLUTION_UNSPECIFIED', 'USER_ACTION', 'PENDING_PROCESSING'])
      .exactOptional()
      .openapi({ description: 'What needs to happen to resolve the issue.' }),
    severity: z
      .enum(['SEVERITY_UNSPECIFIED', 'ERROR', 'WARNING', 'INFO'])
      .exactOptional()
      .openapi({ description: 'The severity of the issue.' }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'The timestamp when this issue appeared.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Short title describing the nature of the issue.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-generated type of the issue, for example, “INCORRECT_TEXT_FORMATTING”, “IMAGE_NOT_SERVEABLE”, etc.',
      }),
  })
  .openapi({ description: 'Product issue.', required: [] })
  .openapi('Issue')

const ProductCertificationSchema = z
  .object({
    brand: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. This is the product's brand name. The brand is used to help identify your product.",
      }),
    certification: z
      .array(CertificationSchema)
      .exactOptional()
      .openapi({
        description: 'Required. A list of certifications to link to the described product.',
      }),
    countryCode: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Optional. A 2-letter country code (ISO 3166-1 Alpha 2).' }),
    destinationStatuses: z
      .array(DestinationStatusSchema)
      .exactOptional()
      .openapi({ description: 'Output only. The statuses of the destinations.', readOnly: true }),
    issues: z
      .array(IssueSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. A server-generated list of issues associated with the product.',
        readOnly: true,
      }),
    mpn: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. These are the Manufacturer Part Numbers (MPN). MPNs are used to uniquely identify a specific product among all products from the same manufacturer',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The unique name identifier of a product certification Format: accounts/{account}/languages/{language_code}/productCertifications/{id} Where `id` is a some unique identifier and `language_code` is a 2-letter ISO 639-1 code of a Shopping supported language according to https://support.google.com/merchants/answer/160637.',
      }),
    productCode: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Optional. Another name for GTIN.' }),
    productType: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. These are your own product categorization system in your product data.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. This is to clearly identify the product you are certifying.',
      }),
  })
  .openapi({ description: 'Product certification data.', required: [] })
  .openapi('ProductCertification')

const ListProductCertificationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    productCertifications: z
      .array(ProductCertificationSchema)
      .exactOptional()
      .openapi({
        description: 'The product certifications from the specified certification body.',
      }),
  })
  .openapi({ description: 'Response for ListProductCertifications method.', required: [] })
  .openapi('ListProductCertificationsResponse')

const ProductSchema = z
  .object({
    attributes: AttributesSchema.exactOptional().openapi({
      description:
        'Attributes of the product uploaded to the Manufacturer Center. Manually edited attributes are taken into account.',
    }),
    contentLanguage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The content language of the product as a two-letter ISO 639-1 language code (for example, en).',
      }),
    destinationStatuses: z
      .array(DestinationStatusSchema)
      .exactOptional()
      .openapi({ description: 'The status of the destinations.' }),
    issues: z
      .array(IssueSchema)
      .exactOptional()
      .openapi({ description: 'A server-generated list of issues associated with the product.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.',
      }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.',
      }),
    targetCountry: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The target country of the product as a CLDR territory code (for example, US).',
      }),
  })
  .openapi({ description: 'Product data.', required: [] })
  .openapi('Product')

const ListProductsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The token for the retrieval of the next page of product statuses.',
      }),
    products: z
      .array(ProductSchema)
      .exactOptional()
      .openapi({ description: 'List of the products.' }),
  })
  .openapi({ required: [] })
  .openapi('ListProductsResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/manufacturercenter':
          'Manage your product listings for Google Manufacturer Center',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/manufacturercenter':
          'Manage your product listings for Google Manufacturer Center',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['accounts'],
  description:
    'Gets a product certification by its name. This method can only be called by certification bodies.',
  operationId: 'manufacturers.accounts.languages.productCertifications.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the product certification to get. Format: accounts/{account}/languages/{language_code}/productCertifications/{id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProductCertificationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/manufacturercenter'],
      Oauth2c: ['https://www.googleapis.com/auth/manufacturercenter'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['accounts'],
  description:
    'Deletes a product certification by its name. This method can only be called by certification bodies.',
  operationId: 'manufacturers.accounts.languages.productCertifications.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the product certification to delete. Format: accounts/{account}/languages/{language_code}/productCertifications/{id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/manufacturercenter'],
      Oauth2c: ['https://www.googleapis.com/auth/manufacturercenter'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['accounts'],
  description:
    'Updates (or creates if allow_missing = true) a product certification which links certifications with products. This method can only be called by certification bodies.',
  operationId: 'manufacturers.accounts.languages.productCertifications.patch',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The list of fields to update according to aip.dev/134. However, only full update is supported as of right now. Therefore, it can be either ignored or set to "*". Setting any other values will returns UNIMPLEMENTED error.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The unique name identifier of a product certification Format: accounts/{account}/languages/{language_code}/productCertifications/{id} Where `id` is a some unique identifier and `language_code` is a 2-letter ISO 639-1 code of a Shopping supported language according to https://support.google.com/merchants/answer/160637.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProductCertificationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProductCertificationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/manufacturercenter'],
      Oauth2c: ['https://www.googleapis.com/auth/manufacturercenter'],
    },
  ],
})

export const getV1ParentProductCertificationsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/productCertifications',
  tags: ['accounts'],
  description:
    'Lists product certifications from a specified certification body. This method can only be called by certification bodies.',
  operationId: 'manufacturers.accounts.languages.productCertifications.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
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
              'Optional. The maximum number of product certifications to return. The service may return fewer than this value. If unspecified, at most 50 product certifications will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A page token, received from a previous `ListProductCertifications` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProductCertifications` must match the call that provided the page token. Required if requesting the second or higher page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent, which owns this collection of product certifications. Format: accounts/{account}/languages/{language_code}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListProductCertificationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/manufacturercenter'],
      Oauth2c: ['https://www.googleapis.com/auth/manufacturercenter'],
    },
  ],
})

export const getV1ParentProductsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/products',
  tags: ['accounts'],
  description: 'Lists all the products in a Manufacturer Center account.',
  operationId: 'manufacturers.accounts.products.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['UNKNOWN', 'ATTRIBUTES', 'ISSUES', 'DESTINATION_STATUSES'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The information to be included in the response. Only sections listed here will be returned.',
            explode: true,
            in: 'query',
            name: 'include',
            schema: {
              items: {
                enum: ['UNKNOWN', 'ATTRIBUTES', 'ISSUES', 'DESTINATION_STATUSES'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      pageSize: z
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
              'Maximum number of product statuses to return in the response, used for paging.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned by the previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListProductsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/manufacturercenter'],
      Oauth2c: ['https://www.googleapis.com/auth/manufacturercenter'],
    },
  ],
})

export const getV1ParentProductsNameRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/products/{name}',
  tags: ['accounts'],
  description:
    'Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.',
  operationId: 'manufacturers.accounts.products.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      include: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['UNKNOWN', 'ATTRIBUTES', 'ISSUES', 'DESTINATION_STATUSES'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The information to be included in the response. Only sections listed here will be returned.',
            explode: true,
            in: 'query',
            name: 'include',
            schema: {
              items: {
                enum: ['UNKNOWN', 'ATTRIBUTES', 'ISSUES', 'DESTINATION_STATUSES'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProductSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/manufacturercenter'],
      Oauth2c: ['https://www.googleapis.com/auth/manufacturercenter'],
    },
  ],
})

export const putV1ParentProductsNameRoute = createRoute({
  method: 'put',
  path: '/v1/{parent}/products/{name}',
  tags: ['accounts'],
  description:
    'Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.',
  operationId: 'manufacturers.accounts.products.update',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AttributesSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/manufacturercenter'],
      Oauth2c: ['https://www.googleapis.com/auth/manufacturercenter'],
    },
  ],
})

export const deleteV1ParentProductsNameRoute = createRoute({
  method: 'delete',
  path: '/v1/{parent}/products/{name}',
  tags: ['accounts'],
  description: 'Deletes the product from a Manufacturer Center account.',
  operationId: 'manufacturers.accounts.products.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/manufacturercenter'],
      Oauth2c: ['https://www.googleapis.com/auth/manufacturercenter'],
    },
  ],
})
