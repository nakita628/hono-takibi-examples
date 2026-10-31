import { createRoute, z } from '@hono/zod-openapi'

const AmountSchema = z
  .object({
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The three-letter ISO 4217 code representing the currency of the amount in the value field. Default: The currency of the authenticated user's country. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/bas:CurrencyCodeEnum'>eBay API documentation</a>",
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The monetary value, in the currency specified by the currency field.',
      }),
  })
  .openapi({ description: 'The currency and value of the item.', required: [] })
  .openapi('Amount')

const TermsSchema = z
  .object({
    fullText: z
      .string()
      .exactOptional()
      .openapi({ description: 'A full-text description of the terms.' }),
    summary: z
      .string()
      .exactOptional()
      .openapi({ description: 'A summarized description of the terms.' }),
  })
  .openapi({
    description: 'The terms for the event, provided in a full-text description and summary.',
    required: [],
  })
  .openapi('Terms')

const CouponSchema = z
  .object({
    redemptionCode: z.string().exactOptional().openapi({ description: 'The coupon code.' }),
    terms: TermsSchema.exactOptional().openapi({
      description: 'The terms of use associated with the coupon.',
    }),
  })
  .openapi({ description: 'The details for the coupon available for the item.', required: [] })
  .openapi('Coupon')

const ImageSchema = z
  .object({
    height: z.string().exactOptional().openapi({ description: 'The height of the image.' }),
    imageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The relative path to the image location.' }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'The text associated with the image.' }),
    width: z.string().exactOptional().openapi({ description: 'The width of the image.' }),
  })
  .openapi({
    description: 'The type that defines the details of an image, such as size and URL.',
    required: [],
  })
  .openapi('Image')

const MarketingPriceSchema = z
  .object({
    discountAmount: AmountSchema.exactOptional().openapi({
      description: 'The monetary value of the seller discount.',
    }),
    discountPercentage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The percentage of the seller discount based on the value returned in the originalPrice field.',
      }),
    originalPrice: AmountSchema.exactOptional().openapi({
      description: 'The monetary value of the item prior to the discount.',
    }),
    priceTreatment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The pricing treatment (discount) that was applied to the price of the item. Note: The pricing treatment affects how and where the discounted price can be displayed. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:PriceTreatmentEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({ description: 'A type that describes the seller discount.', required: [] })
  .openapi('MarketingPrice')

const ShippingOptionSchema = z
  .object({
    shippingCost: AmountSchema.exactOptional().openapi({
      description:
        'The final shipping cost for all items after all discounts are applied. Note: The price does include the value-added tax (VAT) for applicable jurisdictions when requested from supported marketplaces. In this case, users must pass the X-EBAY-C-MARKETPLACE-ID request header specifying the supported marketplace (such as EBAY_GB) to see the VAT-inclusive pricing. For more information on VAT, refer to VAT Obligations in the EU.',
    }),
    shippingCostType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The class of the shipping cost. Valid Values: FIXED or CALCULATED Code so that your app gracefully handles any future changes to this list.',
      }),
  })
  .openapi({
    description: 'The details provided for the shipping provider, such as shipping cost and type.',
    required: [],
  })
  .openapi('ShippingOption')

const DealItemSchema = z
  .object({
    additionalImages: z
      .array(ImageSchema)
      .exactOptional()
      .openapi({ description: 'The additional images for the deal item.' }),
    categoryAncestorIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The IDs of the ancestors for the primary category.' }),
    categoryId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the leaf category for the deal item. A leaf category is the lowest level in a category and has no children.',
      }),
    commissionable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'A boolean value specifying whether the listing has commission.' }),
    dealAffiliateWebUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The deal associated with the item with affiliate attribution.' }),
    dealEndDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date after which the deal ends.' }),
    dealStartDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date on which the deal starts.' }),
    dealWebUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The web URL for the deal associated with the item.' }),
    energyEfficiencyClass: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string value specifying the Energy Efficiency class.' }),
    image: ImageSchema.exactOptional().openapi({
      description: 'The primary image for the deal item.',
    }),
    itemAffiliateWebUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The item web URL with affiliate attribution.' }),
    itemGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for the deal item group. This is the parent item ID for the seller-defined variations. Note: This field is returned for multiple-SKU items.',
      }),
    itemGroupType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An enumeration value that indicates the type of item group. An item group contains items that have various aspect differences, such as color, size, or storage capacity. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:ItemGroupTypeEnum'>eBay API documentation</a>",
      }),
    itemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for the deal item. Note: This field is only returned for single-SKU items.',
      }),
    itemWebUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The web URL for the deal item.' }),
    legacyItemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The legacy item ID associated with the deal item.' }),
    marketingPrice: MarketingPriceSchema.exactOptional().openapi({
      description: 'The original price for the deal item, and the discount amount and percentage.',
    }),
    price: AmountSchema.exactOptional().openapi({
      description:
        'The price for the deal item. Note: The price does include the value-added tax (VAT) for applicable jurisdictions when requested from supported marketplaces. In this case, users must pass the X-EBAY-C-MARKETPLACE-ID request header specifying the supported marketplace (such as EBAY_GB) to see the VAT-inclusive pricing. For more information on VAT, refer to VAT Obligations in the EU.',
    }),
    qualifiedPrograms: z
      .array(
        z
          .string()
          .openapi({
            description:
              " For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:ProgramEnum'>eBay API documentation</a>",
          }),
      )
      .exactOptional()
      .openapi({ description: 'A list of programs applicable to the item.' }),
    shippingOptions: z
      .array(ShippingOptionSchema)
      .exactOptional()
      .openapi({ description: 'The cost required to ship the deal item.' }),
    title: z.string().exactOptional().openapi({ description: 'The title of the deal item.' }),
    unitPrice: AmountSchema.exactOptional().openapi({
      description:
        'The price per unit for the deal item. Some European countries require listings for certain types of products to include the price per unit so that buyers can accurately compare prices. For example: &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot;',
    }),
    unitPricingMeasure: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The designation used to specify the quantity of the deal item, such as size, weight, volume, and count. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot;',
      }),
  })
  .openapi({ description: 'The detailed data returned for the deal item.', required: [] })
  .openapi('DealItem')

const DealItemSearchResponseSchema = z
  .object({
    dealItems: z
      .array(DealItemSchema)
      .exactOptional()
      .openapi({ description: 'A list of deal items that match the search criteria.' }),
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The relative path to the current set of results.' }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of items, from the current result set, returned on a single page. Default: 20',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({ description: 'The relative path to the next set of results.' }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0',
      }),
    prev: z
      .string()
      .exactOptional()
      .openapi({ description: 'The relative path to the previous set of results.' }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of matches for the search criteria.' }),
  })
  .openapi({ description: 'The result set for the deal item search.', required: [] })
  .openapi('DealItemSearchResponse')

const ErrorParameterSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The object of the error.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of the object.' }),
  })
  .openapi({ required: [] })
  .openapi('ErrorParameter')

const ErrorSchema = z
  .object({
    category: z.string().exactOptional().openapi({ description: 'Identifies the type of erro.' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name for the primary system where the error occurred. This is relevant for application errors.',
      }),
    errorId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'A unique number to identify the error.' }),
    inputRefIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'An array of request elements most closely associated to the error.',
      }),
    longMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'A more detailed explanation of the error.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Information on how to correct the problem, in the end user's terms and language where applicable.",
      }),
    outputRefIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'An array of request elements most closely associated to the error.',
      }),
    parameters: z
      .array(ErrorParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.',
      }),
    subdomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.',
      }),
  })
  .openapi({
    description: 'This type defines the fields that can be returned in an error.',
    required: [],
  })
  .openapi('Error')

const EventSchema = z
  .object({
    applicableCoupons: z
      .array(CouponSchema)
      .exactOptional()
      .openapi({ description: 'A list of coupons associated with the event.' }),
    description: z.string().exactOptional().openapi({ description: 'The event description.' }),
    endDate: z.string().exactOptional().openapi({ description: 'The end date for the event.' }),
    eventAffiliateWebUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of the View Event page for the event, which includes the affiliate tracking ID.',
      }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier for the event.' }),
    eventWebUrl: z.string().exactOptional().openapi({ description: 'The web URL for the event.' }),
    images: z
      .array(ImageSchema)
      .exactOptional()
      .openapi({ description: 'The images for the event.' }),
    startDate: z.string().exactOptional().openapi({ description: 'The start date for the event.' }),
    terms: TermsSchema.exactOptional().openapi({
      description: 'The terms associated with the event.',
    }),
    title: z.string().exactOptional().openapi({ description: 'The title of the event.' }),
  })
  .openapi({ description: 'The result set for the event search.', required: [] })
  .openapi('Event')

const EventItemSchema = z
  .object({
    additionalImages: z
      .array(ImageSchema)
      .exactOptional()
      .openapi({ description: 'The additional images for the event item.' }),
    categoryAncestorIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The IDs of the ancestors for the primary category.' }),
    categoryId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the leaf category for the event item. A leaf category is the lowest level in a category and has no children.',
      }),
    energyEfficiencyClass: z
      .string()
      .exactOptional()
      .openapi({ description: 'A string value specifying the Energy Efficiency class.' }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique event identifier associated with the item.' }),
    image: ImageSchema.exactOptional().openapi({ description: 'The image for the event item.' }),
    itemAffiliateWebUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The item web URL with affiliate attribution.' }),
    itemGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for the event item group. This is the parent item ID for the seller-defined variations. Note: This field is returned for multiple-SKU items.',
      }),
    itemGroupType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An enumeration value that indicates the type of item group. An item group contains items that have various aspect differences, such as color, size, or storage capacity. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:ItemGroupTypeEnum'>eBay API documentation</a>",
      }),
    itemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for the event item. Note: This field is only returned for single-SKU items.',
      }),
    itemWebUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The web URL for the event item.' }),
    legacyItemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The legacy item ID associated with the event item.' }),
    marketingPrice: MarketingPriceSchema.exactOptional().openapi({
      description: 'The original price for the event item, and the discount amount and percentage.',
    }),
    price: AmountSchema.exactOptional().openapi({
      description: 'The applicable price for the event item.',
    }),
    qualifiedPrograms: z
      .array(
        z
          .string()
          .openapi({
            description:
              " For implementation help, refer to <a href='https://developer.ebay.com/api-docs/buy/deal/types/api:ProgramEnum'>eBay API documentation</a>",
          }),
      )
      .exactOptional()
      .openapi({ description: 'A list of programs applicable to the event item.' }),
    shippingOptions: z
      .array(ShippingOptionSchema)
      .exactOptional()
      .openapi({ description: 'The cost required to ship the event item.' }),
    title: z.string().exactOptional().openapi({ description: 'The title of the event item.' }),
    unitPrice: AmountSchema.exactOptional().openapi({
      description:
        'The price per unit for the event item. Some European countries require listings for certain types of products to include the price per unit so that buyers can accurately compare prices. For example: &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot;',
    }),
    unitPricingMeasure: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The designation used to specify the quantity of the event item, such as size, weight, volume, and count. This helps buyers compare prices. For example, the following tells the buyer that the item is 7.99 per 100 grams. &quot;unitPricingMeasure&quot;: &quot;100g&quot;, &quot;unitPrice&quot;: { &nbsp;&nbsp;&quot;value&quot;: &quot;7.99&quot;, &nbsp;&nbsp;&quot;currency&quot;: &quot;GBP&quot;',
      }),
  })
  .openapi({ description: 'The detailed data returned for the event item.', required: [] })
  .openapi('EventItem')

const EventItemSearchResponseSchema = z
  .object({
    eventItems: z
      .array(EventItemSchema)
      .exactOptional()
      .openapi({ description: 'A list of event items that match the search criteria.' }),
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The relative path to the current set of results.' }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of items, from the current result set, returned on a single page. Default: 20',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({ description: 'The relative path to the next set of results.' }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0',
      }),
    prev: z
      .string()
      .exactOptional()
      .openapi({ description: 'The relative path to the previous set of results.' }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of matches for the specified search criteria.' }),
  })
  .openapi({ description: 'The result set for the event item search.', required: [] })
  .openapi('EventItemSearchResponse')

const EventSearchResponseSchema = z
  .object({
    events: z
      .array(EventSchema)
      .exactOptional()
      .openapi({ description: 'A list of results that match the search criteria.' }),
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'The relative path to the current set of results.' }),
    limit: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of items, from the current result set, returned on a single page. Default: 20',
      }),
    next: z
      .string()
      .exactOptional()
      .openapi({ description: 'The relative path to the next set of results.' }),
    offset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0',
      }),
    prev: z
      .string()
      .exactOptional()
      .openapi({ description: 'The relative path to the previous set of results.' }),
    total: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total number of matches for the specified search criteria.' }),
  })
  .openapi({ description: 'The result set for the specified event search criteria.', required: [] })
  .openapi('EventSearchResponse')

const ApiAuthSecurityScheme = {
  description:
    'The security definitions for this API. Please check individual operations for applicable scopes.',
  flows: {
    clientCredentials: {
      scopes: {
        'https://api.ebay.com/oauth/api_scope/buy.deal': 'View eBay sale events and deals.',
      },
      tokenUrl: 'https://api.ebay.com/identity/v1/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getDealItemRoute = createRoute({
  method: 'get',
  path: '/deal_item',
  tags: ['deal_item'],
  description:
    'This method retrieves a paginated set of deal items. The result set contains all deal items associated with the specified search criteria and marketplace ID. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.',
  operationId: 'getDealItems',
  request: {
    query: z.object({
      category_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The unique identifier of the eBay category for the search.',
            in: 'query',
            name: 'category_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      commissionable: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A filter for commissionable deals. Restriction: This filter is currently only supported for the US marketplace.',
            in: 'query',
            name: 'commissionable',
            required: false,
            schema: { type: 'string' },
          },
        }),
      delivery_country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A filter for items that can be shipped to the specified country.',
            in: 'query',
            name: 'delivery_country',
            required: false,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items, from the current result set, returned on a single page.',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-EBAY-C-MARKETPLACE-ID': z
        .string()
        .openapi({
          param: {
            description: 'A header used to specify the eBay marketplace ID.',
            in: 'header',
            name: 'X-EBAY-C-MARKETPLACE-ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: DealItemSearchResponseSchema } },
    },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/buy.deal'] }],
})

export const getEventRoute = createRoute({
  method: 'get',
  path: '/event',
  tags: ['event'],
  description:
    'This method returns paginated results containing all eBay events for the specified marketplace. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.',
  operationId: 'getEvents',
  request: {
    query: z.object({
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items, from the current result set, returned on a single page. Default: 20 Maximum Value: 100',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-EBAY-C-MARKETPLACE-ID': z
        .string()
        .openapi({
          param: {
            description: 'A header used to specify the eBay marketplace ID.',
            in: 'header',
            name: 'X-EBAY-C-MARKETPLACE-ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: EventSearchResponseSchema } },
    },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/buy.deal'] }],
})

export const getEventEventIdRoute = createRoute({
  method: 'get',
  path: '/event/{event_id}',
  tags: ['event'],
  description:
    'This method retrieves the details for an eBay event. The result set contains detailed information associated with the specified event ID, such as applicable coupons, start and end dates, and event terms. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.',
  operationId: 'getEvent',
  request: {
    headers: z.object({
      'X-EBAY-C-MARKETPLACE-ID': z
        .string()
        .openapi({
          param: {
            description: 'A header used to specify the eBay marketplace ID.',
            in: 'header',
            name: 'X-EBAY-C-MARKETPLACE-ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      event_id: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for the eBay event.',
            in: 'path',
            name: 'event_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: EventSchema } } },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/buy.deal'] }],
})

export const getEventItemRoute = createRoute({
  method: 'get',
  path: '/event_item',
  tags: ['event_item'],
  description:
    'This method returns a paginated set of event items. The result set contains all event items associated with the specified search criteria and marketplace ID. Request headers This method uses the X-EBAY-C-ENDUSERCTX request header to support revenue sharing for eBay Partner Networks and to improve the accuracy of shipping and delivery time estimations. For details see, Request headers in the Buying Integration Guide. Restrictions This method can return a maximum of 10,000 items. For a list of supported sites and other restrictions, see API Restrictions. eBay Partner Network: In order to receive a commission for your sales, you must use the URL returned in the itemAffiliateWebUrl field to forward your buyer to the ebay.com site.',
  operationId: 'getEventItems',
  request: {
    query: z.object({
      category_ids: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The unique identifier of the eBay category for the search. Maximum Value: 1',
            in: 'query',
            name: 'category_ids',
            required: false,
            schema: { type: 'string' },
          },
        }),
      delivery_country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'A filter for items that can be shipped to the specified country.',
            in: 'query',
            name: 'delivery_country',
            required: false,
            schema: { type: 'string' },
          },
        }),
      event_ids: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifiers for the eBay events. Maximum Value: 1',
            in: 'query',
            name: 'event_ids',
            required: true,
            schema: { type: 'string' },
          },
        }),
      limit: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of items, from the current result set, returned on a single page. Default: 20',
            in: 'query',
            name: 'limit',
            required: false,
            schema: { type: 'string' },
          },
        }),
      offset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The number of items that will be skipped in the result set. This is used with the limit field to control the pagination of the output. For example, if the offset is set to 0 and the limit is set to 10, the method will retrieve items 1 through 10 from the list of items returned. If the offset is set to 10 and the limit is set to 10, the method will retrieve items 11 through 20 from the list of items returned. Default: 0',
            in: 'query',
            name: 'offset',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'X-EBAY-C-MARKETPLACE-ID': z
        .string()
        .openapi({
          param: {
            description: 'A header used to specify the eBay marketplace ID.',
            in: 'header',
            name: 'X-EBAY-C-MARKETPLACE-ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: EventItemSearchResponseSchema } },
    },
    400: { description: 'Bad Request' },
    403: { description: 'Forbidden' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/buy.deal'] }],
})
