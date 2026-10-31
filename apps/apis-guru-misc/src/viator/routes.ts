import { createRoute, z } from '@hono/zod-openapi'

const _401UNAUTHORIZEDSchema = z
  .object({
    code: z.literal('UNAUTHORIZED').exactOptional(),
    message: z.literal('Invalid API key').exactOptional(),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp of the request\n\n  * e.g.: `2019-09-17T03:20:45.737043Z`\n',
      }),
    trackingId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Tracking identifier for this error response' }),
  })
  .openapi({ required: [] })
  .openapi('_401UNAUTHORIZED')

const _406NOTACCEPTABLESchema = z
  .object({
    code: z.literal('INVALID_HEADER_VALUE').exactOptional(),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Describes which in-header parameter was not acceptable to this system; e.g., 'Invalid value for header: exp-api-key'",
      }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp of the request\n\n  * e.g.: `2019-09-17T03:20:45.737043Z`\n',
      }),
    trackingId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Tracking identifier for this error response' }),
  })
  .openapi({ required: [] })
  .openapi('_406NOTACCEPTABLE')

const _500INTERNALSERVERERRORSchema = z
  .object({
    code: z.literal('INTERNAL_SERVER_ERROR').exactOptional(),
    message: z.literal('Internal server error').exactOptional(),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp of the request\n\n  * e.g.: `2019-09-17T03:20:45.737043Z`\n',
      }),
    trackingId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Tracking identifier for this error response' }),
  })
  .openapi({ required: [] })
  .openapi('_500INTERNALSERVERERROR')

const _503SERVICEUNAVAILABLESchema = z
  .object({
    code: z.literal('SERVICE_UNAVAILABLE').exactOptional(),
    message: z.literal('Internal server error').exactOptional(),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp of the request\ne.g.: `2019-09-17T03:20:45.737043Z`\n' }),
    trackingId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Tracking identifier for this error response' }),
  })
  .openapi({ required: [] })
  .openapi('_503SERVICEUNAVAILABLE')

const RefundDetailsSchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Three-letter code indicating the currency in which `itemPrice` and `refundAmount` are displayed',
      }),
    itemPrice: z
      .number()
      .exactOptional()
      .openapi({ description: 'The merchant net price at the time this product was booked' }),
    refundAmount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Numeric currency amount that will be refunded if this booking is cancelled now',
      }),
    refundPercentage: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Percentage of the item price that will be refunded if this booking is cancelled now',
      }),
  })
  .openapi({
    description:
      'Details of the refund\n\n**Note**: Bookings that have not been confirmed by the supplier and have a status of `"PENDING"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking has been accepted by the supplier and its status is `"CONFIRMED"`.\n',
    required: [],
  })
  .openapi('RefundDetails')

const CancelBookingQuoteResponseSchema = z
  .object({
    bookingId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The booking reference number, prepended with `BR-`' }),
    refundDetails: RefundDetailsSchema.exactOptional(),
    status: z
      .enum(['CANCELLABLE', 'CANCELLED', 'NOT_CANCELLABLE'])
      .exactOptional()
      .openapi({
        description:
          "String indicating the cancellation status of this itinerary item:\n\n  * `CANCELLABLE` - this booking is available to be cancelled\n  * `CANCELLED` - this booking has already been cancelled\n  * `NOT_CANCELLABLE` - this booking cannot be cancelled (because the product's operation date is now in the past)\n",
      }),
  })
  .openapi({ required: [] })
  .openapi('CancelBookingQuoteResponse')

const CancelBookingResponseSchema = z
  .object({
    bookingId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Booking reference number for this booking, prepended with `BR-`',
        example: 'BR-580254558',
      }),
    reason: z.enum(['ALREADY_CANCELLED', 'NOT_CANCELLABLE']).exactOptional(),
    status: z
      .enum(['ACCEPTED', 'DECLINED'])
      .exactOptional()
      .openapi({
        description:
          'String indicating the outcome of the booking cancellation request.\n\n  * `ACCEPTED`: The cancellation was successful\n  * `DECLINED`: The cancellation failed\n',
        example: 'DECLINED',
      }),
  })
  .openapi({ required: [] })
  .openapi('CancelBookingResponse')

const CancellationReasonSchema = z
  .object({
    cancellationReasonCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Machine-interpretable identification code for this cancellation',
        example: 'Customer_Service.Weather',
      }),
    cancellationReasonText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Natural-language description of this cancellation reason',
        example: 'The weather conditions were unsuitable',
      }),
  })
  .openapi({ required: [] })
  .openapi('CancellationReason')

const CancellationReasonsResponseSchema = z
  .object({
    reasons: z
      .array(CancellationReasonSchema)
      .exactOptional()
      .openapi({
        description:
          'Array of cancellation reason codes and their asssociated texts for display to the user',
      }),
  })
  .openapi({ required: [] })
  .openapi('CancellationReasonsResponse')

const CancellationRequestSchema = z
  .object({
    reasonCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Machine-interpretable identification code for this cancellation reason, retrieved from [cancellationReasons](#operation/cancellationReasons)',
        example: 'Customer_Service.I_canceled_my_entire_trip',
      }),
  })
  .openapi({ required: [] })
  .openapi('CancellationRequest')

const SearchFreetextResponseSchema = z
  .object({
    searchType: z
      .enum(['PRODUCT', 'DESTINATION', 'ATTRACTION', 'RECOMMENDATION'])
      .exactOptional()
      .openapi({
        description:
          '**indicator** of the entity type for *this* result that is *one of*:\n  - `"PRODUCT"`: a tour / activity\n  - `"DESTINATION"`: continent, country, city, region\n  - `"ATTRACTION"`: an attraction within a destination (only available to partners with SEO access)\n  - `"RECOMMENDATION"`: an attraction within a destination (only available to partners with SEO access)\n',
      }),
    sortOrder: z
      .int()
      .exactOptional()
      .openapi({ description: '**sort order** for *this* data object' }),
  })
  .openapi({
    discriminator: {
      mapping: {
        ATTRACTION: '#/components/schemas/SearchFreetextResponseAttraction',
        DESTINATION: '#/components/schemas/SearchFreetextResponseDestination',
        PRODUCT: '#/components/schemas/SearchFreetextResponseProduct',
        RECOMMENDATION: '#/components/schemas/SearchFreetextResponseRecommendation',
      },
      propertyName: 'searchType',
    },
    required: [],
  })
  .openapi('SearchFreetextResponse')

const WebURLSchema = z
  .string()
  .nullable()
  .openapi({ description: 'ignore (Viator only)' })
  .openapi('WebURL')

const SearchFreetextResponseAttractionSchema = SearchFreetextResponseSchema.and(
  z
    .object({
      data: z
        .object({
          attractionCity: z
            .number()
            .exactOptional()
            .openapi({ description: 'City in which this attraction is located' }),
          attractionLatitude: z
            .number()
            .exactOptional()
            .openapi({ description: "Latitude of this attraction's location" }),
          attractionLongitude: z
            .number()
            .exactOptional()
            .openapi({ description: "Longitude of this attraction's location" }),
          attractionState: z
            .number()
            .exactOptional()
            .openapi({ description: 'State in which this attraction is located' }),
          attractionStreetAddress: z
            .number()
            .exactOptional()
            .openapi({ description: 'Street address of this attraction' }),
          descriptionIntro: z
            .string()
            .exactOptional()
            .openapi({ description: 'Description introduction text' }),
          descriptionText: z
            .string()
            .exactOptional()
            .openapi({ description: 'Description of this attraction' }),
          destinationId: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Destination ID for the destination in which this attraction is located',
            }),
          editorsPick: z.boolean().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          keywordCount: z.int().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          keywords: z
            .array(z.string().openapi({ description: 'ignore (Viator only)' }))
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          overviewSummary: z
            .string()
            .exactOptional()
            .openapi({ description: 'HTML-formatted summary overview of this attraction' }),
          pagePrimaryLanguage: z
            .string()
            .exactOptional()
            .openapi({ description: 'Language of the natural-language elements in this response' }),
          pageTitle: z.string().exactOptional().openapi({ description: 'Title of page' }),
          pageUrlName: z
            .string()
            .exactOptional()
            .openapi({ description: 'URL path fragment for attraction' }),
          panoramaCount: z.int().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          photoCount: z
            .int()
            .exactOptional()
            .openapi({ description: 'Number of photos available for this attraction' }),
          primaryDestinationId: z
            .int()
            .exactOptional()
            .openapi({
              description:
                'Primary destination ID for the destination in which this attraction is located',
            }),
          primaryDestinationName: z
            .string()
            .exactOptional()
            .openapi({
              description:
                'Primary destination ID for the destination in which this attraction is located',
            }),
          primaryDestinationUrlName: z
            .string()
            .exactOptional()
            .openapi({ description: 'Name of primary destination for this attraction' }),
          productCount: z.int().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          publishedDate: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          rating: z
            .number()
            .exactOptional()
            .openapi({ description: 'Numeric rating for this attraction' }),
          reviewCount: z
            .int()
            .exactOptional()
            .openapi({ description: 'Number of reviews for this attraction' }),
          seoId: z.int().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          seoType: z
            .string()
            .exactOptional()
            .openapi({ description: 'Type of result; i.e. `"ATTRACTION"`' }),
          showPhotos: z.boolean().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          showReviews: z.boolean().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          sortOrder: z.int().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          tabTitle: z
            .string()
            .exactOptional()
            .openapi({ description: 'Tab title for this attraction' }),
          thumbnailHiResURL: z
            .string()
            .exactOptional()
            .openapi({ description: 'URL for high-resolution image for this attraction' }),
          thumbnailURL: z
            .string()
            .exactOptional()
            .openapi({ description: 'URL for medium-resolution image for this attraction' }),
          title: z.string().exactOptional().openapi({ description: 'Title of this attraction' }),
          userName: z.string().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          webURL: WebURLSchema.exactOptional(),
        })
        .exactOptional()
        .openapi({
          description: '**object** detailing **an attraction** that matches the search criteria',
          required: [],
        }),
    })
    .openapi({ required: [] }),
).openapi('SearchFreetextResponseAttraction')

const DestinationTypeSchema = z
  .enum(['CITY', 'COUNTRY', 'REGION'])
  .openapi({
    description:
      '**destination type specifier**\n- `"COUNTRY"`: destination is a country\n- `"REGION"`: destination is a recognized region of a country, such as a state, island within a country, stretch of coastline, etc.\n- `"CITY"`: destination is a city\n',
  })
  .openapi('DestinationType')

const IataCodeSchema = z
  .string()
  .nullable()
  .openapi({
    description:
      "**IATA airport code** for the destination\n- a three-letter code defined by the International Air Transport Association (IATA) used to identify many airports around the world\n- the IATA code is also known as an 'IATA location identifier', 'IATA station code' or simply a 'location identifier'\n- the IATA code is &lt;u&gt;not available&lt;/u&gt; for destinations with a destination type of `'COUNTRY'` or `'REGION'`, as there could be more than one airport within a destination\n",
  })
  .openapi('IataCode')

const SearchFreetextResponseDestinationSchema = SearchFreetextResponseSchema.and(
  z
    .object({
      data: z
        .object({
          defaultCurrencyCode: z
            .string()
            .exactOptional()
            .openapi({
              description: '**currency code** for the currency in which pricing is displayed',
            }),
          destinationId: z
            .int()
            .exactOptional()
            .openapi({
              description:
                '**unique numeric identifier** of the destination\n- use this value as the `destId` input field for other Viator API services\n',
            }),
          destinationName: z
            .string()
            .exactOptional()
            .openapi({ description: '**natural-language name** of the destination' }),
          destinationType: DestinationTypeSchema.exactOptional(),
          destinationUrlName: z
            .string()
            .exactOptional()
            .openapi({ description: 'ignore - (Viator only)' }),
          iataCode: IataCodeSchema.exactOptional(),
          latitude: z
            .number()
            .exactOptional()
            .openapi({ description: "**latitude component** of the destination's geolocation" }),
          longitude: z
            .number()
            .exactOptional()
            .openapi({ description: "**longitude component** of the destination's geolocation" }),
          lookupId: z
            .string()
            .exactOptional()
            .openapi({
              description:
                "**hierarchy location specifier** for the destination that is a concatenation of all `parentId` and `destinationId` codes\n- e.g. `'8.77.673'` for Chicago\n- format: [top level `parentId`].[any additional `parentId`].[`destinationId`]\n",
            }),
          parentId: z
            .int()
            .exactOptional()
            .openapi({
              description: "**unique numeric identifier** of the destination's parent destination",
            }),
          selectable: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'ignore - (Viator only)' }),
          sortOrder: z
            .int()
            .exactOptional()
            .openapi({ description: '**sort order** for this response' }),
          timeZone: z
            .string()
            .exactOptional()
            .openapi({ description: '**time zone** of the destination' }),
        })
        .exactOptional()
        .openapi({
          description: '**object** detailing **a destination** that matches the search criteria',
          required: [],
        }),
    })
    .openapi({ required: [] }),
).openapi('SearchFreetextResponseDestination')

const BookingEngineIdSchema = z
  .enum(['FreesaleBE', 'UnconditionalBE', 'DeferredCRMBE', 'FreesaleOnRequestBE'])
  .openapi({
    description:
      '**booking type specifier** for *this* product that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made\n\n*one of* the following:\n- `"FreesaleBE"` – *this* product will be confirmed immediately and the supplier will be sent a notification\n- `"UnconditionalBE"` - *this* product will be confirmed immediately and the supplier will not be notified\n- `"DeferredCRMBE"` - *this* product is an on-request product and will not be confirmed immediately. *this* product will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services\n- `"FreesaleOnRequestBE"` - *this* product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.\n\nIf a booking is made within the on-request period, *this* product will be an on-request product. Once the booking has been made, the `bookingEngineId` will change to either `"FreesaleOnRequestBE:OnRequest"` or `"FreesaleOnRequestBE:Freesold"` depending on the travel date and the on-request period                        \n',
  })
  .openapi('BookingEngineId')

const MerchantNetPriceFromSchema = z
  .number()
  .openapi({
    description:
      "Numeric 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee; i.e. the merchant net rate\n\nFor more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)\n",
  })
  .openapi('MerchantNetPriceFrom')

const MerchantNetPriceFromFormattedSchema = z
  .string()
  .openapi({
    description:
      "Currency-formatted 'from' (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee (i.e. the merchant net rate)\n\nFor more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)\n",
  })
  .openapi('MerchantNetPriceFromFormatted')

const OnRequestPeriodSchema = z
  .int()
  .nullable()
  .openapi({
    description:
      "**number** of hours before the travel date that *this* product will be 'on-request' for\n- this field will contain a value if the `bookingEngineId` is `'FreesaleOnRequestBE'`\n- an `onRequestPeriod` of 48 hours means that *this* product is freesale up until 48 hours before the travel date, and is on-request for 48 hours or less until the travel date\n- **note**: 'hours in advance' (the number of hours a product is available for booking before the travel date) may also affect this; however, this value is not available in the API\n",
  })
  .openapi('OnRequestPeriod')

const OnSaleSchema = z
  .boolean()
  .openapi({ description: 'Ignore (Viator only)\n' })
  .openapi('OnSale')

const PriceSchema = z
  .number()
  .openapi({
    description:
      "**suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter. This is the cheapest sell price, taking into consideration off-peak periods and discounts on larger groups.\n\n\n  - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n",
  })
  .openapi('Price')

const PriceFormattedSchema = z
  .string()
  .openapi({
    description:
      "**currency-formatted suggested sell ('from') price** for this product in the currency set in the `currencyCode` parameter\n\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n",
  })
  .openapi('PriceFormatted')

const RatingSchema = z
  .number()
  .openapi({
    description:
      '**average user rating** of *this* product\n\nusers rate products by assigning a star-rating from 1-5; this value shows the average of the star ratings provided by users;\n\nthe `ratingCounts` associative array in this response provides a breakdown of how many submissions for each star rating have been received\n',
  })
  .openapi('Rating')

const ReviewCountSchema = z
  .int()
  .openapi({
    description:
      '**number** of user reviews that have been submitted by users for *this* product\n\nIf your account has been configured to limit the number of reviews you can receive, this value will never be higher than that. Otherwise, this value will show the total number of reviews available for this product. If there are more than 24 reviews available, you will need to use the [/product/reviews](#operation/productReviews) service to retrieve the remainder of the reviews.\n',
  })
  .openapi('ReviewCount')

const RrpSchema = z
  .int()
  .openapi({
    description:
      '**numeric original price** for this product if the product is on special / a discount has been applied. `0` if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.',
  })
  .openapi('Rrp')

const RrpFormattedSchema = z
  .string()
  .openapi({
    description:
      '**currency-formatted original price** for this product if the product is on special / a discount has been applied. Empty string if there is no discount on this product. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.',
  })
  .openapi('RrpFormatted')

const SavingAmountSchema = z
  .string()
  .openapi({ description: 'Ignore (Viator only)\n' })
  .openapi('SavingAmount')

const SavingAmountFormatedSchema = z
  .string()
  .openapi({ description: 'Ignore (Viator only)\n' })
  .openapi('SavingAmountFormated')

const SpecialOfferAvailableSchema = z
  .boolean()
  .openapi({
    description:
      "**indicator**: `true` if a special offer is available for *this* product. If `true` the `specialOffer` field will contain a text string providing details of the special offer which you may wish to display in your product search results. E.g. 'Book by May 27 to save 34% off our previously offered price!'. See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.",
  })
  .openapi('SpecialOfferAvailable')

const TranslationLevelSchema = z
  .union([z.literal(0), z.literal(80), z.literal(100)])
  .openapi({
    description:
      '**numeric indicator** of the language translation level for *this* product that is one of:\n- `0`: no translation (English only)\n- `80`: full machine translation\n- `100`: full human translation\n\nSee: [Working with human and machine translations](#section/Appendices/Working-with-human-and-machine-translations) for more information\n',
  })
  .openapi('TranslationLevel')

const SearchFreetextResponseProductSchema = SearchFreetextResponseSchema.and(
  z
    .object({
      data: z
        .object({
          admission: z.string().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          attractionLatitude: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          attractionLongitude: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          available: z.boolean().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          bookingEngineId: BookingEngineIdSchema.exactOptional(),
          catIds: z
            .array(z.int())
            .exactOptional()
            .openapi({
              description:
                '**list** of unique numeric product category identifiers \n- `categoryId` is available for the destination from the [/taxonomy/categories](#operation/taxonomyCategories) service\n',
            }),
          code: z
            .string()
            .exactOptional()
            .openapi({ description: '**unique alphanumeric identifier** of *this* product' }),
          currencyCode: z
            .string()
            .exactOptional()
            .openapi({
              description: "**currency** in which *this* product's pricing is displayed",
            }),
          duration: z
            .string()
            .exactOptional()
            .openapi({ description: '**natural-language duration** of *this* product' }),
          essential: z.string().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          merchantCancellable: z
            .boolean()
            .exactOptional()
            .openapi({
              description:
                'ignore (Viator only)\n\nFor cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object\n',
            }),
          merchantNetPriceFrom: MerchantNetPriceFromSchema.exactOptional(),
          merchantNetPriceFromFormatted: MerchantNetPriceFromFormattedSchema.exactOptional(),
          onRequestPeriod: OnRequestPeriodSchema.exactOptional(),
          onSale: OnSaleSchema.exactOptional(),
          panoramaCount: z
            .int()
            .exactOptional()
            .openapi({
              description: '**number** of panoramic images available for *this* product',
            }),
          pas: z
            .object({})
            .exactOptional()
            .openapi({
              description:
                '**object** detailing product availability\n- `pas` stands for Product Availability Schema\n',
            }),
          photoCount: z
            .int()
            .exactOptional()
            .openapi({ description: '**number** of user photos published for *this* product' }),
          price: PriceSchema.exactOptional(),
          priceFormatted: PriceFormattedSchema.exactOptional(),
          primaryDestinationId: z
            .int()
            .exactOptional()
            .openapi({
              description: "**unique numeric identifier** of *this* product's primary destination",
            }),
          primaryDestinationName: z
            .string()
            .exactOptional()
            .openapi({
              description: "**natural-language name** of *this* product's primary destination",
            }),
          primaryDestinationUrlName: z
            .string()
            .exactOptional()
            .openapi({
              description: "**URL-formatted name** of *this* product's primary destination",
            }),
          primaryGroupId: z
            .string()
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          productURLName: z
            .string()
            .exactOptional()
            .openapi({ description: '**URL-formatted name** of *this* product' }),
          publishedDate: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          rating: RatingSchema.exactOptional(),
          reviewCount: ReviewCountSchema.exactOptional(),
          rrp: RrpSchema.exactOptional(),
          rrpformatted: RrpFormattedSchema.exactOptional(),
          savingAmount: SavingAmountSchema.exactOptional(),
          savingAmountFormated: SavingAmountFormatedSchema.exactOptional(),
          shortDescription: z
            .string()
            .exactOptional()
            .openapi({
              description: '**natural-language description** (shortened) of *this* product',
            }),
          shortTitle: z
            .string()
            .exactOptional()
            .openapi({ description: '**natural-language title** (shortened) of *this* product' }),
          sortOrder: z.int().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          specialOfferAvailable: SpecialOfferAvailableSchema.exactOptional(),
          specialReservation: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          specialReservationDetails: z
            .string()
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          sslSupported: z
            .boolean()
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          subCatIds: z
            .array(z.int())
            .exactOptional()
            .openapi({
              description:
                '**list** of unique numeric subcategory identifiers that *this* product falls under\n- `subcategoryId` is available from [/taxonomy/categories](#operation/taxonomyCategories) service"\n',
            }),
          supplierCode: z
            .string()
            .exactOptional()
            .openapi({ description: "**unique identifier** of *this* product's supplier" }),
          supplierName: z
            .string()
            .exactOptional()
            .openapi({ description: "**natural-language name** of *this* product's supplier" }),
          thumbnailHiResURL: z
            .string()
            .exactOptional()
            .openapi({ description: '**high-resolution thumbnail image URL** for *this* product' }),
          thumbnailURL: z
            .string()
            .exactOptional()
            .openapi({ description: "**URL** of *this* product's thumbnail image" }),
          title: z
            .string()
            .exactOptional()
            .openapi({ description: '**natural-language title** of *this* product' }),
          translationLevel: TranslationLevelSchema.exactOptional(),
          uniqueShortDescription: z
            .string()
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          videoCount: z
            .int()
            .exactOptional()
            .openapi({
              description: 'ignore (Viator only) – videos are not available to partners',
            }),
          webURL: WebURLSchema.exactOptional(),
        })
        .exactOptional()
        .openapi({
          description: '**object** detailing a **product** that matches the search criteria',
          required: [],
        }),
    })
    .openapi({ required: [] }),
).openapi('SearchFreetextResponseProduct')

const SearchFreetextResponseRecommendationSchema = SearchFreetextResponseSchema.and(
  z
    .object({
      data: z
        .object({
          attractionCity: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          attractionLatitude: z
            .number()
            .nullable()
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          attractionLongitude: z
            .number()
            .nullable()
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          attractionState: z
            .string()
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          attractionStreetAddress: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          descriptionIntro: z
            .string()
            .exactOptional()
            .openapi({ description: 'Introductory text for this recommendation' }),
          descriptionText: z
            .string()
            .exactOptional()
            .openapi({ description: 'Text for this recommendation' }),
          destinationId: z
            .int()
            .exactOptional()
            .openapi({ description: 'Destination Id for the destination of this recommendation' }),
          editorsPick: z.boolean().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          keywordCount: z.int().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          keywords: z
            .array(z.string().openapi({ description: 'ignore (Viator only)' }))
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          overviewSummary: z
            .string()
            .exactOptional()
            .openapi({ description: 'HTML-formatted overview of recommendation' }),
          pagePrimaryLanguage: z
            .string()
            .exactOptional()
            .openapi({ description: 'language for the natural-language text in this response' }),
          pageTitle: z.string().exactOptional().openapi({ description: 'Title of this page' }),
          pageUrlName: z
            .string()
            .exactOptional()
            .openapi({ description: 'URL path fragment for this recommendation' }),
          panoramaCount: z.int().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          photoCount: z.int().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          primaryDestinationId: z
            .int()
            .exactOptional()
            .openapi({
              description: 'Destination Id for the primary destination of this recommendation',
            }),
          primaryDestinationName: z
            .string()
            .exactOptional()
            .openapi({ description: 'Name of primary destination for this recommendation' }),
          primaryDestinationUrlName: z
            .string()
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          productCount: z
            .int()
            .exactOptional()
            .openapi({ description: 'Number of products that this recommendation refers to' }),
          publishedDate: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'ignore (Viator only)' }),
          rating: z
            .number()
            .exactOptional()
            .openapi({ description: 'Numeric average rating for this recommendation' }),
          reviewCount: z
            .int()
            .exactOptional()
            .openapi({ description: 'number of reviews for this recommendation' }),
          seoId: z.int().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          seoType: z
            .string()
            .exactOptional()
            .openapi({ description: 'Type of response; i.e. `"RECOMMENDATION"`' }),
          showPhotos: z.boolean().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          showReviews: z.boolean().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          sortOrder: z.int().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          tabTitle: z
            .string()
            .exactOptional()
            .openapi({ description: 'Tab-title for this recommendation' }),
          thumbnailHiResURL: z
            .string()
            .exactOptional()
            .openapi({ description: 'URL for the high-resolution image for this recommendation' }),
          thumbnailURL: z
            .string()
            .exactOptional()
            .openapi({ description: 'URL for medium-resolution image for this recommendation' }),
          title: z
            .string()
            .exactOptional()
            .openapi({ description: 'Title of this recommendation' }),
          userName: z.string().exactOptional().openapi({ description: 'ignore (Viator only)' }),
          webURL: WebURLSchema.exactOptional(),
        })
        .exactOptional()
        .openapi({
          description: '**object** detailing a **recommendation** that matches the search criteria',
          required: [],
        }),
    })
    .openapi({ required: [] }),
).openapi('SearchFreetextResponseRecommendation')

const AgeBandIdSchema = z
  .int()
  .openapi({
    description:
      '**unique numeric identifier** for the age band\n- See: [Working with age bands](#section/Appendices/Working-with-age-bands)\n',
  })
  .openapi('AgeBandId')

const BandIdSchema = z
  .int()
  .openapi({
    description:
      '**unique numeric identifier** for the age band\n- See: [Working with age bands](#section/Appendices/Working-with-age-bands)\n',
  })
  .openapi('BandId')

const BasicErrorModelSchema = z
  .object({
    dateStamp: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '**timestamp** of *this* response' }),
    errorCodes: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          '**array** of error codes pertaining to *this* error\n- See: [Viator API error codes](#section/Appendices/Viator-API-error-codes) for a list of possible error codes\n',
        example: [],
      }),
    errorMessage: z
      .array(z.any())
      .nullable()
      .exactOptional()
      .openapi({ description: '**array** of error message strings' }),
    errorMessageText: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '**array** of error message strings in plain text' }),
    errorName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '**name** of *this* type of error' }),
    errorReference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '**reference number** of *this* error' }),
    errorType: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '**code** specifying the type of error' }),
    extraInfo: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'ignore (Viator only)' }),
    extraObject: z
      .object({})
      .nullable()
      .exactOptional()
      .openapi({ description: 'ignore (Viator only)' }),
    success: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "**boolean indicator** of *this* request's outcome\n- `true`: the request was successful with no errors\n- `false`: an error was encountered\n",
      }),
    totalCount: z
      .int()
      .nullable()
      .exactOptional()
      .openapi({ description: '**number** of results available for *this* service\n' }),
    vmid: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: '**unique numeric id** of the server that processed *this* request',
      }),
  })
  .openapi({ required: [] })
  .openapi('BasicErrorModel')

const BookingEngineIdResponseSchema = z
  .enum(['UF', 'OR', 'FO'])
  .openapi({
    description:
      '[booking type indicator](#section/Key-concepts/Booking-concepts) that indicates whether the booking will be `CONFIRMED` immediately or if it will remain `PENDING` even after the booking has been made\n\n*one of* the following:\n- `"UF"` (FreesaleBE and UnconditionalBE) – this booking will be confirmed immediately\n- `"OR"` (DeferredCRMBE) – the booked product is an on-request product, will not be confirmed immediately and will have a `PENDING` status after it is booked, to be confirmed by the supplier within the time specified in the `hoursConfirmed` field available in the booking response and post-booking services\n- `"FO"` (FreesaleOnRequestBE) – the booked product is freesale up until a certain number of days before the travel date, referred to as the *on-request period*.\n',
  })
  .openapi('BookingEngineIdResponse')

const BookingStatusItemSchema = z
  .object({
    amended: z
      .boolean()
      .exactOptional()
      .openapi({ description: "**indicator**: `true` if *this* item's booking has been amended" }),
    cancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "**indicator**: `true` if *this* item's booking has been cancelled",
      }),
    confirmed: z
      .boolean()
      .exactOptional()
      .openapi({ description: "**indicator**: `true` if *this* item's booking is confirmed" }),
    failed: z
      .boolean()
      .exactOptional()
      .openapi({ description: "**indicator**: `true` if *this* item's booking has failed" }),
    level: z
      .enum(['ITEM', 'ITINERARY'])
      .exactOptional()
      .openapi({ description: "**level** of *this* item's booking status" }),
    pending: z
      .boolean()
      .exactOptional()
      .openapi({ description: "**indicator**: `true` if *this* item's booking is pending" }),
    status: z
      .int()
      .exactOptional()
      .openapi({ description: "**numeric identifier** of *this* item's booking status" }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "**natural-language description** of *this* item's booking status; e.g., 'Waiting to be booked'",
      }),
    type: z
      .enum([
        'WAITING',
        'CONFIRMED',
        'UNAVAILABLE',
        'PENDING',
        'FAILED',
        'CANCELLED',
        'EXPIRED',
        'AMENDED',
        'PENDING_AMEND',
        'REJECTED',
        'ON_HOLD',
      ])
      .exactOptional()
      .openapi({
        description:
          "**specifier** of *this* item's booking status\n* See: [bookingStatus fields and meanings](#section/Appendices/bookingStatus-field-values-and-meanings)\n",
      }),
  })
  .openapi({ description: '**object** containing item booking status information', required: [] })
  .openapi('BookingStatusItem')

const BookingStatusItinerarySchema = z
  .object({
    amended: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "**indicator**: `true` if *this* itinerary's booking has been amended",
      }),
    cancelled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "**indicator**: `true` if *this* itinerary's booking has been cancelled",
      }),
    confirmed: z
      .boolean()
      .exactOptional()
      .openapi({ description: "**indicator**: `true` if *this* itinerary's booking is confirmed" }),
    failed: z
      .boolean()
      .exactOptional()
      .openapi({ description: "**indicator**: `true` if *this* itinerary's booking has failed" }),
    level: z
      .enum(['ITEM', 'ITINERARY'])
      .exactOptional()
      .openapi({ description: "**level** of *this* itinerary's booking status" }),
    pending: z
      .boolean()
      .exactOptional()
      .openapi({ description: "**indicator**: `true` if *this* itinerary's booking is pending" }),
    status: z
      .int()
      .exactOptional()
      .openapi({ description: "**numeric identifier** of *this* itinerary's booking status" }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description: "**natural-language description** of *this* itinerary's booking status",
      }),
    type: z
      .enum(['WAITING', 'CONFIRMED', 'PENDING', 'FAILED', 'CANCELLED', 'AMENDED', 'PENDING_AMEND'])
      .exactOptional()
      .openapi({
        description:
          "**specifier** of *this* itinerary's booking status\n* See: [bookingStatus fields and meanings](#section/Appendices/bookingStatus-field-values-and-meanings)\n",
      }),
  })
  .openapi({
    description: '**object** containing itinerary booking status information',
    required: [],
  })
  .openapi('BookingStatusItinerary')

const CurrencyCodeSchema = z
  .string()
  .openapi({
    description:
      'Three-letter code indicating the currency in which `itemPrice` and `refundAmount` are displayed',
    example: 'USD',
  })
  .openapi('CurrencyCode')

const PhotoObjectSchema = z
  .object({
    caption: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '**HTML-formatted caption** for *this* photograph\n- may contain basic HTML mark-up - e.g., br, li, b, u, p, i, ul and ol\n',
      }),
    editorsPick: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "**indicator**: `true` if *this* photograph has been tagged as an *editor's pick*; i.e., can be given preference for display",
      }),
    ownerAvatarURL: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: '**URL** for the avatar image of the user that submitted *this* photograph',
      }),
    ownerCountry: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '**country** in which the owner of *this* photograph is located' }),
    ownerId: z
      .int()
      .exactOptional()
      .openapi({
        description: '**unique numeric identifier** of the user that owns the photograph',
      }),
    ownerName: z
      .string()
      .exactOptional()
      .openapi({
        description: "**handle** of the user that submitted *this* photograph; e.g., 'Husker1k'",
      }),
    photoHiResURL: z
      .string()
      .exactOptional()
      .openapi({ description: '**URL** of the high-resolution version of *this* photograph' }),
    photoId: z
      .int()
      .exactOptional()
      .openapi({ description: '**unique numeric identifier** of *this* photograph' }),
    photoMediumResURL: z
      .string()
      .exactOptional()
      .openapi({ description: '**URL** of the medium-resolution version of *this* photograph' }),
    photoURL: z
      .string()
      .exactOptional()
      .openapi({ description: '**URL** for the standard-resolution version of *this* photograph' }),
    productCode: z
      .string()
      .exactOptional()
      .openapi({ description: '**product code** for the product that *this* photograph is of' }),
    productTitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "**natural-language title** of the product associated with *this* photograph; e.g., 'Sydney and Bondi Hop-on Hop-off Tour'",
      }),
    productUrlName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '**URL-formatted title** of the product associated with *this* photograph; e.g., `Sydney-and-Bondi-Hop-on-Hop-off-Tour`',
      }),
    sortOrder: z
      .int()
      .exactOptional()
      .openapi({ description: '**sort order** for *this* photograph; e.g., `3`' }),
    sslSupported: z.boolean().exactOptional().openapi({ description: 'ignore (Viator only)' }),
    thumbnailURL: z
      .string()
      .exactOptional()
      .openapi({ description: "**URL** of *this* product's thumbnail image" }),
    timeUploaded: z
      .string()
      .exactOptional()
      .openapi({ description: '**date** on which *this* photograph was submitted' }),
    title: z.string().exactOptional().openapi({ description: '**title** of *this* photograph' }),
  })
  .openapi({ description: '**object** detailing a single photo from a user', required: [] })
  .openapi('PhotoObject')

const RatingCountsSchema = z
  .object({
    '1': z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of reviews with a one star rating' }),
    '2': z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of reviews with a two star rating' }),
    '3': z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of reviews with a three star rating' }),
    '4': z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of reviews with a four star rating' }),
    '5': z
      .number()
      .exactOptional()
      .openapi({ description: 'Number of reviews with a five star rating' }),
  })
  .openapi({
    description:
      '**dictionary** of rating (stars) to number of reviews with each rating for *this* product"\n\nusers rate products by assigning a star-rating from 1-5; these values show the total number of reviews for each of the star ratings (up to a maximum given in the `reviewCount` field in this response)\n\n- **note**: see response sample for structure\n',
    required: [],
  })
  .openapi('RatingCounts')

const ReviewObjectSchema = z
  .object({
    ownerAvatarURL: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "**URL** of the reviewer's avatar image" }),
    ownerCountry: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: '**country** in which the reviewer is located' }),
    ownerId: z
      .int()
      .exactOptional()
      .openapi({
        description: '**unique numeric identifier** of the user that submitted *this* review',
      }),
    ownerName: z
      .string()
      .exactOptional()
      .openapi({ description: '**name** of the user that submitted *this* review' }),
    productCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '**product code** of the product that *this* review is about; e.g., `5010SYDNEY`',
      }),
    productTitle: z
      .string()
      .exactOptional()
      .openapi({ description: '**title** of the product that *this* review is about' }),
    productUrlName: z
      .string()
      .exactOptional()
      .openapi({
        description: '**URL-formatted title** of the product that *this* review is about',
      }),
    publishedDate: z
      .string()
      .exactOptional()
      .openapi({ description: '**date** that *this* review was published' }),
    rating: z.int().exactOptional().openapi({ description: '**rating** given by the reviewer' }),
    review: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '**HTML-formatted content** of the review\n- may contain basic HTML mark-up - e.g., br, li, b, u, p, i, ul and ol\n',
      }),
    reviewId: z
      .int()
      .exactOptional()
      .openapi({ description: '**unique numeric identifier** of *this* review' }),
    sortOrder: z.int().exactOptional().openapi({ description: '**sort order** for *this* review' }),
    sslSupported: z.boolean().exactOptional().openapi({ description: 'ignore (Viator only)' }),
    submissionDate: z
      .string()
      .exactOptional()
      .openapi({ description: '**date** that *this* review was submitted' }),
    viatorFeedback: z.string().exactOptional().openapi({ description: 'ignore (Viator only)' }),
    viatorNotes: z.string().exactOptional().openapi({ description: 'ignore (Viator only)' }),
  })
  .openapi({ description: '**object** containing a single user review', required: [] })
  .openapi('ReviewObject')

const ReviewsSchema = z
  .array(ReviewObjectSchema)
  .openapi({
    description:
      '**array** of user review objects\n\nThe number of reviews returned here will either be the number of reviews you are entitled to according to your account configuration; or, if you are not limited in the number of reviews you can receive, will be a maxiumum of 24 reviews. If the value of `reviewCount` in this response exceeds 24, you can use the [/product/reviews](#operation/productReviews) endpoint to retrieve the remainder of the reviews.\n',
  })
  .openapi('Reviews')

const SortOrderSchema = z
  .enum([
    'TOP_SELLERS',
    'REVIEW_AVG_RATING_A',
    'REVIEW_AVG_RATING_D',
    'PRICE_FROM_A',
    'PRICE_FROM_D',
  ])
  .openapi({
    description:
      "**sort order** in which to return the results that is *one of*:\n\n  - `'TOP_SELLERS'`: the top sellers\n  - `'REVIEW_AVG_RATING_A'`: ascending by average traveler rating (low -&gt; high)\n  - `'REVIEW_AVG_RATING_D'`: descending by average traveler rating (high -&gt; low)\n  - `'PRICE_FROM_A'`: ascending by price (low -&gt; high)\n  - `'PRICE_FROM_D'`: descending by price (high -&gt; low)\n",
  })
  .openapi('SortOrder')

const SpecialOfferSchema = z
  .string()
  .openapi({
    description:
      '**natural-language description** of any special offers available for *this* product when `specialOfferAvailable` is `true`.\n- empty string if there are no specials available\n- See [Special offers and on-sale pricing](#section/Key-concepts/Special-offers-and-on-sale-pricing) for more information.\n',
  })
  .openapi('SpecialOffer')

const TopXSchema = z
  .string()
  .openapi({
    description:
      "**start and end rows** to return in the format {start}-{end}\n- e.g. `'1-10'`, `'11-20'`\n\n**Note**: \n- the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`\n- if `topX` is not specified, the default is `'1-100'`\n",
  })
  .openapi('TopX')

const AcceptLanguageParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)\n',
      in: 'header',
      name: 'Accept-Language',
      required: true,
      schema: { example: 'en-US', type: 'string' },
    },
    example: 'en-US',
  })

const CodeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: '**unique alphanumeric identifier** of the product',
      example: '5010SYDNEY',
      in: 'query',
      name: 'code',
      schema: { type: 'string' },
      required: false,
    },
  })

const CurrencyCodeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        "**currency code** for the currency in which pricing is displayed\n- default=`'USD'`\n",
      in: 'query',
      name: 'currencyCode',
      schema: { type: 'string' },
      required: false,
    },
  })

const DestIdParamsSchema = z
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
      description: '**unique numeric identifier** of the destination',
      example: 123,
      in: 'query',
      name: 'destId',
      schema: { type: 'integer' },
      required: false,
    },
  })

const ProductCodeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: '**unique alphanumeric identifier** of the product',
      example: '2280AAHT',
      in: 'query',
      name: 'productCode',
      schema: { type: 'string' },
      required: false,
    },
  })

const ShowUnavailableParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description:
        "**specifier** as to whether or not to show 'unavailable' products:\n\n  - `true`: return *both* available and unavailable products\n  - `false`: return *only* available products (default)\n",
      example: false,
      in: 'query',
      name: 'showUnavailable',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const SortOrderREVIEWParamsSchema = z
  .enum(['REVIEW_RATING_A', 'REVIEW_RATING_D', 'REVIEW_RATING_SUBMISSION_DATE_D'])
  .exactOptional()
  .openapi({
    param: {
      description:
        '**specifier** of the order in which to return reviews\n\nSort order options:\n\n  - `"REVIEW_RATING_A"`: Traveler Rating (low→high) Average\n  - `"REVIEW_RATING_D"`: Traveler Rating (high→low) Average\n  - `"REVIEW_RATING_SUBMISSION_DATE_D"`: Most recent review\n',
      in: 'query',
      name: 'sortOrder',
      schema: {
        enum: ['REVIEW_RATING_A', 'REVIEW_RATING_D', 'REVIEW_RATING_SUBMISSION_DATE_D'],
        type: 'string',
      },
      required: false,
    },
  })

const TopXParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        "**start and end rows** to return in the format {start}-{end}\n- e.g. `'1-10'`, `'11-20'`\n\n**Note**: \n- the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'`\n- if `topX` is not specified, the default is `'1-100'`\n",
      example: '1-3',
      in: 'query',
      name: 'topX',
      schema: { type: 'string' },
      required: false,
    },
  })

const AvailableProductsExampleExample = {
  summary: 'available products example',
  value: {
    data: [
      {
        admission: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        available: true,
        bookingEngineId: 'UnconditionalBE',
        catIds: [6, 12],
        code: '5010SYDNEY',
        currencyCode: 'USD',
        duration: '2 hours',
        essential: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        merchantCancellable: true,
        merchantNetPriceFrom: 29.52,
        merchantNetPriceFromFormatted: '$29.52',
        onRequestPeriod: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        onSale: false,
        panoramaCount: 0,
        pas: {
          incompleteQuote: false,
          productCode: '5010SYDNEY',
          removedChildAges: [],
          tourGrades: {
            '24HOUR': {
              availDates: [
                {
                  dateList:
                    '20200321 20200322 20200323 20200324 20200325 20200326 20200327 20200328 20200329 20200330 20200331 20200401 20200402 20200403 20200404 20200405 20200406 20200407 20200408 20200409 20200410 20200411 20200412 20200413 20200414 20200415 20200416 20200417 20200418 20200419 20200420 20200421 ',
                  priceFrom: 'USD 36.97',
                  priceQuote: {
                    generalRetailPrice: 'USD 36.97',
                    merchantNetPrice: 'USD 29.52',
                    priceSource: 'MANUAL',
                    retailPrice: 'USD 36.97',
                  },
                },
              ],
              bookingEngine: 'UNCONDITIONAL_FREESALE',
              description:
                'Unlimited use on Big Bus Sydney &amp; Bondi Hop-on Hop-off Tour for 24 hours from time of first use',
              languageServices: {
                de: ['AUDIO'],
                en: ['AUDIO'],
                es: ['AUDIO'],
                fr: ['AUDIO'],
                ja: ['AUDIO'],
                ko: ['AUDIO'],
                zh: ['AUDIO'],
              },
              sapi: false,
              title: '24 Hour Classic Ticket ',
              tourGradeCode: '24HOUR',
            },
            '48HOUR': {
              availDates: [
                {
                  dateList:
                    '20200321 20200322 20200323 20200324 20200325 20200326 20200327 20200328 20200329 20200330 20200331 20200401 20200402 20200403 20200404 20200405 20200406 20200407 20200408 20200409 20200410 20200411 20200412 20200413 20200414 20200415 20200416 20200417 20200418 20200419 20200420 20200421 ',
                  priceFrom: 'USD 49.50',
                  priceQuote: {
                    generalRetailPrice: 'USD 49.50',
                    merchantNetPrice: 'USD 39.53',
                    priceSource: 'MANUAL',
                    retailPrice: 'USD 49.50',
                  },
                },
              ],
              bookingEngine: 'UNCONDITIONAL_FREESALE',
              description:
                '48 Hour Premium Ticket: Unlimited use on Big Bus Sydney &amp; Bondi Tour for 48 hours from time of first use PLUS a guided walking tour of The Rocks, Syd',
              languageServices: {
                de: ['AUDIO'],
                en: ['AUDIO'],
                es: ['AUDIO'],
                fr: ['AUDIO'],
                ja: ['AUDIO'],
                ko: ['AUDIO'],
                zh: ['AUDIO'],
              },
              sapi: false,
              title: '48 Hour Premium Ticket ',
              tourGradeCode: '48HOUR',
            },
            DELUXE: {
              availDates: [
                {
                  dateList:
                    '20200321 20200322 20200323 20200324 20200325 20200326 20200327 20200328 20200329 20200330 20200331 20200401 20200402 20200403 20200404 20200405 20200406 20200407 20200408 20200409 20200410 20200411 20200412 20200413 20200414 20200415 20200416 20200417 20200418 20200419 20200420 20200421 ',
                  priceFrom: 'USD 68.93',
                  priceQuote: {
                    generalRetailPrice: 'USD 68.93',
                    merchantNetPrice: 'USD 55.05',
                    priceSource: 'MANUAL',
                    retailPrice: 'USD 68.93',
                  },
                },
              ],
              bookingEngine: 'UNCONDITIONAL_FREESALE',
              description:
                'Big Bus and Habour Cruise: Combine two great Sydney experiences into one with a hop-on hop off Big Bus Tours and a hop-on hop-off Sydney Harbour cruise &lt;br/&gt;Duration: 2 days: SPECIAL OFFER: EXTRA FREE DAY when you purchase a Deluxe ticket - have 3 days to explore Sydney not 2. Limited time only.\n&lt;br/&gt;Complimentary Walking Tour: Complimentary English-speaking 90-minute guided walking tour of “The Rocks” historic and harbourside precinct.',
              languageServices: {
                de: ['AUDIO'],
                en: ['AUDIO'],
                es: ['AUDIO'],
                fr: ['AUDIO'],
                ja: ['AUDIO'],
                ko: ['AUDIO'],
                zh: ['AUDIO'],
              },
              sapi: false,
              title: '48 Hour Deluxe Bus and Cruise',
              tourGradeCode: 'DELUXE',
            },
            TG1: {
              availDates: [
                {
                  dateList:
                    '20200321 20200322 20200323 20200324 20200325 20200326 20200327 20200328 20200329 20200330 20200331 20200401 20200402 20200403 20200404 20200405 20200406 20200407 20200408 20200409 20200410 20200411 20200412 20200413 20200414 20200415 20200416 20200417 20200418 20200419 20200420 20200421 ',
                  priceFrom: 'USD 89.81',
                  priceQuote: {
                    generalRetailPrice: 'USD 89.81',
                    merchantNetPrice: 'USD 71.74',
                    priceSource: 'MANUAL',
                    retailPrice: 'USD 89.81',
                  },
                },
              ],
              bookingEngine: 'UNCONDITIONAL_FREESALE',
              description:
                'Hop-on Hop-Off and Attractions: 48hr Big Bus Tours, 1-day Hop-On Hop-Off Harbour Cruise, 4 Attractions: Tower Eye, Madame Tussauds, Wildlife Zoo, Aquarium&lt;br/&gt;Duration: 2 days: SPECIAL OFFER: EXTRA FREE DAY when you purchase a Deluxe ticket - have 3 days to explore Sydney not 2. Limited time only.\n&lt;br/&gt;Complimentary Walking Tours: Complimentary English-speaking guided walking tour of “The Rocks” historic and harbourside precinct.',
              languageServices: {
                de: ['AUDIO'],
                en: ['AUDIO'],
                es: ['AUDIO'],
                fr: ['AUDIO'],
                ja: ['AUDIO'],
                ko: ['AUDIO'],
                zh: ['AUDIO'],
              },
              sapi: false,
              title: '48Hour Deluxe PLUS Attractions',
              tourGradeCode: 'TG1',
            },
          },
          travellerMix: '1A',
        },
        photoCount: 124,
        price: 36.97,
        priceFormatted: '$36.97',
        primaryDestinationId: 357,
        primaryDestinationName: 'Sydney',
        primaryDestinationUrlName: 'Sydney',
        primaryGroupId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        productUrlName: 'Sydney-and-Bondi-Hop-on-Hop-off-Tour',
        rating: 4.5,
        reviewCount: 1605,
        rrp: 0,
        rrpformatted: '',
        savingAmount: 0,
        savingAmountFormated: '',
        shortDescription:
          "Explore Sydney and Bondi Beach on this hop-on hop-off sightseeing tour, which takes you by double-decker bus to 34 stops around the city including Sydney Opera House, Sydney Harbour Bridge, Darling Harbour, Bondi Beach and more. Enjoy unobstructed views and recorded commentary on board. Simply hop off to walk around and sightsee in depth. Your ticket is valid for 24 or 48 hours, so you can experience Sydney and Bondi's most noteworthy attractions, sights, and shopping and dining areas at your own pace.",
        shortTitle: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
        sortOrder: 1,
        specialOfferAvailable: false,
        specialReservation: false,
        specialReservationDetails: {
          $ref: '#/components/examples/product-example-1/value/data/pas',
        },
        sslSupported: false,
        subCatIds: [97, 98, 5330, 26963, 32024, 45],
        supplierCode: '5010',
        supplierName: 'Big Bus Tours',
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/94/40/f3.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/94/40/f3.jpg',
        title: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
        translationLevel: 0,
        uniqueShortDescription: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        videoCount: 1,
        webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
      {
        admission: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        available: true,
        bookingEngineId: 'FreesaleOnRequestBE',
        catIds: [1, 25, 12],
        code: '2280SUN',
        currencyCode: 'USD',
        duration: '3 hours 30 minutes',
        essential: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        merchantCancellable: true,
        merchantNetPriceFrom: 420.68,
        merchantNetPriceFromFormatted: '$420.68',
        onRequestPeriod: 336,
        onSale: false,
        panoramaCount: 0,
        pas: {
          incompleteQuote: false,
          productCode: '2280SUN',
          removedChildAges: [],
          tourGrades: {
            SUNSET_ASTAR: {
              availDates: [
                {
                  dateList:
                    '20200321 20200322 20200323 20200324 20200325 20200326 20200327 20200328 20200329 20200330 20200331 20200401 20200402 20200403 20200404 20200405 20200406 20200407 20200408 20200409 20200410 20200411 20200412 20200413 20200414 20200415 20200416 20200417 20200418 20200419 20200420 20200421 ',
                  priceFrom: 'USD 490.00',
                  priceQuote: {
                    generalRetailPrice: 'USD 490.00',
                    merchantNetPrice: 'USD 420.68',
                    priceSource: 'MANUAL',
                    retailPrice: 'USD 490.00',
                  },
                },
              ],
              bookingEngine: 'FREESALE_ON_REQUEST',
              description: 'Grand Canyon West Rim Deluxe Sunset Tour by A-Star Helicopter',
              languageServices: {
                de: ['AUDIO'],
                en: ['AUDIO'],
                es: ['AUDIO'],
                fr: ['AUDIO'],
                it: ['AUDIO'],
                ja: ['AUDIO'],
                ko: ['AUDIO'],
                pt: ['AUDIO'],
                ru: ['AUDIO'],
                tw: ['AUDIO'],
              },
              sapi: false,
              title: 'A-Star Helicopter ',
              tourGradeCode: 'SUNSET_ASTAR',
            },
            SUNSET_EC130: {
              availDates: [
                {
                  dateList:
                    '20200321 20200322 20200323 20200324 20200325 20200326 20200327 20200328 20200329 20200330 20200331 20200401 20200402 20200403 20200404 20200405 20200406 20200407 20200408 20200409 20200410 20200411 20200412 20200413 20200414 20200415 20200416 20200417 20200418 20200419 20200420 20200421 ',
                  priceFrom: 'USD 515.00',
                  priceQuote: {
                    generalRetailPrice: 'USD 515.00',
                    merchantNetPrice: 'USD 441.98',
                    priceSource: 'MANUAL',
                    retailPrice: 'USD 515.00',
                  },
                },
              ],
              bookingEngine: 'FREESALE_ON_REQUEST',
              description: 'Grand Canyon West Rim Deluxe Sunset Tour by EC-130 Helicopter ',
              languageServices: {
                de: ['AUDIO'],
                en: ['AUDIO'],
                es: ['AUDIO'],
                fr: ['AUDIO'],
                it: ['AUDIO'],
                ja: ['AUDIO'],
                ko: ['AUDIO'],
                pt: ['AUDIO'],
                ru: ['AUDIO'],
                tw: ['AUDIO'],
              },
              sapi: false,
              title: 'EC-130 Helicopter Upgrade',
              tourGradeCode: 'SUNSET_EC130',
            },
          },
          travellerMix: '1A',
        },
        photoCount: 7,
        price: 490,
        priceFormatted: '$490.00',
        primaryDestinationId: 684,
        primaryDestinationName: 'Las Vegas',
        primaryDestinationUrlName: 'Las-Vegas',
        primaryGroupId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        productUrlName: 'Grand-Canyon-West-Rim-Deluxe-Sunset-Helicopter-Tour',
        rating: 5,
        reviewCount: 399,
        rrp: 0,
        rrpformatted: '',
        savingAmount: 0,
        savingAmountFormated: '',
        shortDescription:
          "Take off from Las Vegas on a magical sunset helicopter tour to the Grand Canyon. You'll enjoy a 45-minute helicopter flight each way, land at the Grand Canyon for a glass of Champagne and snacks while you watch the sun start it's descent behind the walls of the canyon, then fly low over the famous neon-lit Las Vegas Strip on your return.",
        shortTitle: 'Grand Canyon from Las Vegas West Rim Sunset Helicopter Tour',
        sortOrder: 2,
        specialOfferAvailable: false,
        specialReservation: false,
        specialReservationDetails: {
          $ref: '#/components/examples/product-example-1/value/data/pas',
        },
        sslSupported: false,
        subCatIds: [113, 2, 98, 26963, 45, 95],
        supplierCode: '2280',
        supplierName: 'Sundance Helicopters',
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/7a/ec/1c.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/7a/ec/1c.jpg',
        title: 'Grand Canyon West Rim Deluxe Sunset Helicopter Tour',
        translationLevel: 0,
        uniqueShortDescription: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        videoCount: 1,
        webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
    ],
    dateStamp: '2020-02-10T15:41:53+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331005',
  },
}

const BookingAvailabilityDatesExampleExample = {
  summary: 'booking availability dates example',
  value: {
    data: {
      '2020-02': [
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
      ],
      '2020-03': [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
      '2020-04': [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
      ],
      '2020-05': [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
      '2020-06': [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
      ],
      '2020-07': [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
      '2020-08': [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
      '2020-09': [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
      ],
      '2020-10': [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
      '2020-11': [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
      ],
      '2020-12': [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
      '2021-01': [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
      '2021-02': ['01', '02', '03', '04', '05', '06', '07', '08'],
    },
    dateStamp: '2020-02-10T16:51:10+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331004',
  },
}

const BookingAvailabilityExampleExample = {
  summary: 'booking availability example',
  value: {
    data: {
      availability: [
        {
          available: true,
          bookingDate: '2020-06-01',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 1,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-02',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 2,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-03',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 3,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-04',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 4,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-05',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 5,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-06',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 6,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-07',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 7,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-08',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 8,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-09',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 9,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-10',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 10,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-11',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 11,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-12',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 12,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-13',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 13,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-14',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 14,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-15',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 15,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-16',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 16,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-17',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 17,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-18',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 18,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-19',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 19,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-20',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 20,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-21',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 21,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-22',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 22,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-23',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 23,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-24',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 24,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-25',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 25,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-26',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 26,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-27',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 27,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-28',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 28,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-29',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 29,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        {
          available: true,
          bookingDate: '2020-06-30',
          currencyCode: 'AUD',
          gradeCode: '24HOUR',
          merchantNetPrice: 42.41,
          merchantNetPriceFormatted: '$42.41',
          retailPrice: 53.1,
          retailPriceFormatted: '$53.10',
          sortOrder: 30,
          unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
      ],
      firstAvailableDate: '2020-06-01',
      lastAvailableDate: '2021-02-10',
      productCode: '5010SYDNEY',
    },
    dateStamp: '2020-02-10T16:43:02+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331004',
  },
}

const BookingAvailabilityTourgradesExampleExample = {
  summary: 'booking availability tourgrades example',
  value: {
    data: [
      {
        ageBands: [
          {
            bandId: 1,
            bandTotal: 42.41,
            bandTotalFormatted: '$42.41',
            count: 1,
            currencyCode: 'AUD',
            pricePerTraveler: 42.41,
            pricePerTravelerFormatted: '$42.41',
          },
        ],
        ageBandsRequired: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        available: true,
        bookingDate: '2020-02-28',
        currencyCode: 'AUD',
        defaultLanguageCode: 'en',
        gradeCode: '24HOUR',
        gradeDepartureTime: '',
        gradeDescription:
          'Unlimited use on Big Bus Sydney &amp; Bondi Hop-on Hop-off Tour for 24 hours from time of first use',
        gradeTitle: '24 Hour Classic Ticket ',
        langServices: {
          'de/SERVICE_AUDIO': 'German - Audio',
          'en/SERVICE_AUDIO': 'English - Audio',
          'es/SERVICE_AUDIO': 'Spanish - Audio',
          'fr/SERVICE_AUDIO': 'French - Audio',
          'ja/SERVICE_AUDIO': 'Japanese - Audio',
          'ko/SERVICE_AUDIO': 'Korean - Audio',
          'zh/SERVICE_AUDIO': 'Chinese - Audio',
        },
        merchantNetPrice: 42.41,
        merchantNetPriceFormatted: '$42.41',
        retailPrice: 53.1,
        retailPriceFormatted: '$53.10',
        sortOrder: 1,
        unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
      {
        ageBands: [
          {
            bandId: 1,
            bandTotal: 56.79,
            bandTotalFormatted: '$56.79',
            count: 1,
            currencyCode: 'AUD',
            pricePerTraveler: 56.79,
            pricePerTravelerFormatted: '$56.79',
          },
        ],
        ageBandsRequired: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        available: true,
        bookingDate: '2020-02-28',
        currencyCode: 'AUD',
        defaultLanguageCode: 'en',
        gradeCode: '48HOUR',
        gradeDepartureTime: '',
        gradeDescription:
          '48 Hour Premium Ticket: Unlimited use on Big Bus Sydney &amp; Bondi Tour for 48 hours from time of first use PLUS a guided walking tour of The Rocks, Syd',
        gradeTitle: '48 Hour Premium Ticket ',
        langServices: {
          'de/SERVICE_AUDIO': 'German - Audio',
          'en/SERVICE_AUDIO': 'English - Audio',
          'es/SERVICE_AUDIO': 'Spanish - Audio',
          'fr/SERVICE_AUDIO': 'French - Audio',
          'ja/SERVICE_AUDIO': 'Japanese - Audio',
          'ko/SERVICE_AUDIO': 'Korean - Audio',
          'zh/SERVICE_AUDIO': 'Chinese - Audio',
        },
        merchantNetPrice: 56.79,
        merchantNetPriceFormatted: '$56.79',
        retailPrice: 71.1,
        retailPriceFormatted: '$71.10',
        sortOrder: 2,
        unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
      {
        ageBands: [
          {
            bandId: 1,
            bandTotal: 79.08,
            bandTotalFormatted: '$79.08',
            count: 1,
            currencyCode: 'AUD',
            pricePerTraveler: 79.08,
            pricePerTravelerFormatted: '$79.08',
          },
        ],
        ageBandsRequired: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        available: true,
        bookingDate: '2020-02-28',
        currencyCode: 'AUD',
        defaultLanguageCode: 'en',
        gradeCode: 'DELUXE',
        gradeDepartureTime: '',
        gradeDescription:
          'Big Bus and Habour Cruise: Combine two great Sydney experiences into one with a hop-on hop off Big Bus Tours and a hop-on hop-off Sydney Harbour cruise &lt;br/&gt;Duration: 2 days: SPECIAL OFFER: EXTRA FREE DAY when you purchase a Deluxe ticket - have 3 days to explore Sydney not 2. Limited time only.\n&lt;br/&gt;Complimentary Walking Tour: Complimentary English-speaking 90-minute guided walking tour of “The Rocks” historic and harbourside precinct.',
        gradeTitle: '48 Hour Deluxe Bus and Cruise',
        langServices: {
          'de/SERVICE_AUDIO': 'German - Audio',
          'en/SERVICE_AUDIO': 'English - Audio',
          'es/SERVICE_AUDIO': 'Spanish - Audio',
          'fr/SERVICE_AUDIO': 'French - Audio',
          'ja/SERVICE_AUDIO': 'Japanese - Audio',
          'ko/SERVICE_AUDIO': 'Korean - Audio',
          'zh/SERVICE_AUDIO': 'Chinese - Audio',
        },
        merchantNetPrice: 79.08,
        merchantNetPriceFormatted: '$79.08',
        retailPrice: 99,
        retailPriceFormatted: '$99.00',
        sortOrder: 3,
        unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
      {
        ageBands: [
          {
            bandId: 1,
            bandTotal: 103.04,
            bandTotalFormatted: '$103.04',
            count: 1,
            currencyCode: 'AUD',
            pricePerTraveler: 103.04,
            pricePerTravelerFormatted: '$103.04',
          },
        ],
        ageBandsRequired: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        available: true,
        bookingDate: '2020-02-28',
        currencyCode: 'AUD',
        defaultLanguageCode: 'en',
        gradeCode: 'TG1',
        gradeDepartureTime: '',
        gradeDescription:
          'Hop-on Hop-Off and Attractions: 48hr Big Bus Tours, 1-day Hop-On Hop-Off Harbour Cruise, 4 Attractions: Tower Eye, Madame Tussauds, Wildlife Zoo, Aquarium&lt;br/&gt;Duration: 2 days: SPECIAL OFFER: EXTRA FREE DAY when you purchase a Deluxe ticket - have 3 days to explore Sydney not 2. Limited time only.\n&lt;br/&gt;Complimentary Walking Tours: Complimentary English-speaking guided walking tour of “The Rocks” historic and harbourside precinct.',
        gradeTitle: '48Hour Deluxe PLUS Attractions',
        langServices: {
          'de/SERVICE_AUDIO': 'German - Audio',
          'en/SERVICE_AUDIO': 'English - Audio',
          'es/SERVICE_AUDIO': 'Spanish - Audio',
          'fr/SERVICE_AUDIO': 'French - Audio',
          'ja/SERVICE_AUDIO': 'Japanese - Audio',
          'ko/SERVICE_AUDIO': 'Korean - Audio',
          'zh/SERVICE_AUDIO': 'Chinese - Audio',
        },
        merchantNetPrice: 103.04,
        merchantNetPriceFormatted: '$103.04',
        retailPrice: 129,
        retailPriceFormatted: '$129.00',
        sortOrder: 4,
        unavailableReason: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
    ],
    dateStamp: '2020-02-10T16:57:56+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: {
      CDE_BRAINTREE: {
        APPAY: 'sandbox_rtg2qcnx_yx8ptb2tqsjnzdnj',
        GPAY: 'sandbox_rtg2qcnx_yx8ptb2tqsjnzdnj',
        PP: 'sandbox_rtg2qcnx_yx8ptb2tqsjnzdnj',
      },
    },
    success: true,
    totalCount: 1,
    vmid: '331003',
  },
}

const BookingAvailablilityTourgradesPricingmatrixExampleExample = {
  summary: 'booking availability tourgrades example',
  value: {
    data: {
      bookingMonth: '2020-03',
      dates: [
        {
          bookingDate: '2020-03-01',
          callForLastMinAvailability: false,
          sortOrder: 1,
          tourGrades: [
            {
              gradeCode: 'EB_ASTAR_SP~07:00',
              gradeTitle: 'Special: Earlybird A-Star 07:00',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 383.4,
                          merchantNetPriceFormatted: '$383.40',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 409.99,
                          priceFormatted: '$409.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-01',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 1,
            },
            {
              gradeCode: 'EB_EC130_SP~07:00',
              gradeTitle: 'Special: Earlybird EC-130 07:00',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 404.7,
                          merchantNetPriceFormatted: '$404.70',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 434.99,
                          priceFormatted: '$434.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-01',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 2,
            },
            {
              gradeCode: 'TG1~08:00',
              gradeTitle: 'Morning Departure; A-Star 08:00',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 388.72,
                          merchantNetPriceFormatted: '$388.72',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 459.99,
                          priceFormatted: '$459.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-01',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 3,
            },
            {
              gradeCode: 'TG1~09:45',
              gradeTitle: 'Morning Departure; A-Star 09:45',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 388.72,
                          merchantNetPriceFormatted: '$388.72',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 459.99,
                          priceFormatted: '$459.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-01',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 4,
            },
            {
              gradeCode: 'TG1~10:45',
              gradeTitle: 'Morning Departure; A-Star 10:45',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 388.72,
                          merchantNetPriceFormatted: '$388.72',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 459.99,
                          priceFormatted: '$459.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-01',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 5,
            },
            {
              gradeCode: 'TG2~08:00',
              gradeTitle: 'Morning Departure; EC-130 08:00',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 410.02,
                          merchantNetPriceFormatted: '$410.02',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 484.99,
                          priceFormatted: '$484.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-01',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 6,
            },
            {
              gradeCode: 'TG2~09:45',
              gradeTitle: 'Morning Departure; EC-130 09:45',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 410.02,
                          merchantNetPriceFormatted: '$410.02',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 484.99,
                          priceFormatted: '$484.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-01',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 7,
            },
            {
              gradeCode: 'TG2~10:45',
              gradeTitle: 'Morning Departure; EC-130 10:45',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 410.02,
                          merchantNetPriceFormatted: '$410.02',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 484.99,
                          priceFormatted: '$484.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-01',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 8,
            },
            {
              gradeCode: 'TG3~12:30',
              gradeTitle: 'Afternoon Departure; A-Star 12:30',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 383.4,
                          merchantNetPriceFormatted: '$383.40',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 449.99,
                          priceFormatted: '$449.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-01',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 9,
            },
            {
              gradeCode: 'TG3~13:30',
              gradeTitle: 'Afternoon Departure; A-Star 13:30',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 383.4,
                          merchantNetPriceFormatted: '$383.40',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 449.99,
                          priceFormatted: '$449.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-01',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 10,
            },
            {
              gradeCode: 'TG4~12:30',
              gradeTitle: 'Afternoon Departure; EC-130 12:30',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 404.7,
                          merchantNetPriceFormatted: '$404.70',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 474.99,
                          priceFormatted: '$474.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-01',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 11,
            },
            {
              gradeCode: 'TG4~13:30',
              gradeTitle: 'Afternoon Departure; EC-130 13:30',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 404.7,
                          merchantNetPriceFormatted: '$404.70',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 474.99,
                          priceFormatted: '$474.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-01',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 12,
            },
          ],
        },
        {
          bookingDate: '2020-03-02',
          callForLastMinAvailability: false,
          sortOrder: 2,
          tourGrades: [
            {
              gradeCode: 'EB_ASTAR_SP~07:00',
              gradeTitle: 'Special: Earlybird A-Star 07:00',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 383.4,
                          merchantNetPriceFormatted: '$383.40',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 409.99,
                          priceFormatted: '$409.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-02',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 1,
            },
            {
              gradeCode: 'EB_EC130_SP~07:00',
              gradeTitle: 'Special: Earlybird EC-130 07:00',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 404.7,
                          merchantNetPriceFormatted: '$404.70',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 434.99,
                          priceFormatted: '$434.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-02',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 2,
            },
            {
              gradeCode: 'TG1~08:00',
              gradeTitle: 'Morning Departure; A-Star 08:00',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 388.72,
                          merchantNetPriceFormatted: '$388.72',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 459.99,
                          priceFormatted: '$459.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-02',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 3,
            },
            {
              gradeCode: 'TG1~09:45',
              gradeTitle: 'Morning Departure; A-Star 09:45',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 388.72,
                          merchantNetPriceFormatted: '$388.72',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 459.99,
                          priceFormatted: '$459.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-02',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 4,
            },
            {
              gradeCode: 'TG1~10:45',
              gradeTitle: 'Morning Departure; A-Star 10:45',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 388.72,
                          merchantNetPriceFormatted: '$388.72',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 459.99,
                          priceFormatted: '$459.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-02',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 5,
            },
            {
              gradeCode: 'TG2~08:00',
              gradeTitle: 'Morning Departure; EC-130 08:00',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 410.02,
                          merchantNetPriceFormatted: '$410.02',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 484.99,
                          priceFormatted: '$484.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-02',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 6,
            },
            {
              gradeCode: 'TG2~09:45',
              gradeTitle: 'Morning Departure; EC-130 09:45',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 410.02,
                          merchantNetPriceFormatted: '$410.02',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 484.99,
                          priceFormatted: '$484.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-02',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 7,
            },
            {
              gradeCode: 'TG2~10:45',
              gradeTitle: 'Morning Departure; EC-130 10:45',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 410.02,
                          merchantNetPriceFormatted: '$410.02',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 484.99,
                          priceFormatted: '$484.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-02',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 8,
            },
            {
              gradeCode: 'TG3~12:30',
              gradeTitle: 'Afternoon Departure; A-Star 12:30',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 383.4,
                          merchantNetPriceFormatted: '$383.40',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 449.99,
                          priceFormatted: '$449.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-02',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 9,
            },
            {
              gradeCode: 'TG3~13:30',
              gradeTitle: 'Afternoon Departure; A-Star 13:30',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 383.4,
                          merchantNetPriceFormatted: '$383.40',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 449.99,
                          priceFormatted: '$449.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-02',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 10,
            },
            {
              gradeCode: 'TG4~12:30',
              gradeTitle: 'Afternoon Departure; EC-130 12:30',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 404.7,
                          merchantNetPriceFormatted: '$404.70',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 474.99,
                          priceFormatted: '$474.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-02',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 11,
            },
            {
              gradeCode: 'TG4~13:30',
              gradeTitle: 'Afternoon Departure; EC-130 13:30',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 404.7,
                          merchantNetPriceFormatted: '$404.70',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 474.99,
                          priceFormatted: '$474.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-02',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 12,
            },
          ],
        },
        {
          bookingDate: '2020-03-03',
          callForLastMinAvailability: false,
          sortOrder: 3,
          tourGrades: [
            {
              gradeCode: 'EB_ASTAR_SP~07:00',
              gradeTitle: 'Special: Earlybird A-Star 07:00',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 383.4,
                          merchantNetPriceFormatted: '$383.40',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 409.99,
                          priceFormatted: '$409.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-03',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 1,
            },
            {
              gradeCode: 'EB_EC130_SP~07:00',
              gradeTitle: 'Special: Earlybird EC-130 07:00',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 404.7,
                          merchantNetPriceFormatted: '$404.70',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 434.99,
                          priceFormatted: '$434.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-03',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 2,
            },
            {
              gradeCode: 'TG1~08:00',
              gradeTitle: 'Morning Departure; A-Star 08:00',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 388.72,
                          merchantNetPriceFormatted: '$388.72',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 459.99,
                          priceFormatted: '$459.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-03',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 3,
            },
            {
              gradeCode: 'TG1~09:45',
              gradeTitle: 'Morning Departure; A-Star 09:45',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 388.72,
                          merchantNetPriceFormatted: '$388.72',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 459.99,
                          priceFormatted: '$459.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-03',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 4,
            },
            {
              gradeCode: 'TG1~10:45',
              gradeTitle: 'Morning Departure; A-Star 10:45',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 388.72,
                          merchantNetPriceFormatted: '$388.72',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 459.99,
                          priceFormatted: '$459.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-03',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 5,
            },
            {
              gradeCode: 'TG2~08:00',
              gradeTitle: 'Morning Departure; EC-130 08:00',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 410.02,
                          merchantNetPriceFormatted: '$410.02',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 484.99,
                          priceFormatted: '$484.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-03',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 6,
            },
            {
              gradeCode: 'TG2~09:45',
              gradeTitle: 'Morning Departure; EC-130 09:45',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 410.02,
                          merchantNetPriceFormatted: '$410.02',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 484.99,
                          priceFormatted: '$484.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-03',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 7,
            },
            {
              gradeCode: 'TG2~10:45',
              gradeTitle: 'Morning Departure; EC-130 10:45',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 410.02,
                          merchantNetPriceFormatted: '$410.02',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 484.99,
                          priceFormatted: '$484.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-03',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 8,
            },
            {
              gradeCode: 'TG3~12:30',
              gradeTitle: 'Afternoon Departure; A-Star 12:30',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 383.4,
                          merchantNetPriceFormatted: '$383.40',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 449.99,
                          priceFormatted: '$449.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-03',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 9,
            },
            {
              gradeCode: 'TG3~13:30',
              gradeTitle: 'Afternoon Departure; A-Star 13:30',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 383.4,
                          merchantNetPriceFormatted: '$383.40',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 449.99,
                          priceFormatted: '$449.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-03',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 10,
            },
            {
              gradeCode: 'TG4~12:30',
              gradeTitle: 'Afternoon Departure; EC-130 12:30',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 404.7,
                          merchantNetPriceFormatted: '$404.70',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 474.99,
                          priceFormatted: '$474.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-03',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 11,
            },
            {
              gradeCode: 'TG4~13:30',
              gradeTitle: 'Afternoon Departure; EC-130 13:30',
              pricingMatrix: [
                {
                  ageBandPrices: [
                    {
                      bandId: 1,
                      maximumCountRequired: 9,
                      minimumCountRequired: 1,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 404.7,
                          merchantNetPriceFormatted: '$404.70',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 474.99,
                          priceFormatted: '$474.99',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 1,
                    },
                    {
                      bandId: 3,
                      maximumCountRequired: 9,
                      minimumCountRequired: 0,
                      prices: [
                        {
                          currencyCode: 'USD',
                          merchantNetPrice: 0,
                          merchantNetPriceFormatted: '$0.00',
                          minNoOfTravellersRequiredForPrice: 1,
                          price: 0,
                          priceFormatted: '$0.00',
                          sortOrder: 1,
                        },
                      ],
                      sortOrder: 2,
                    },
                  ],
                  bookingDate: '2020-03-03',
                  pricingUnit: 'per person',
                  sortOrder: 1,
                },
              ],
              sortOrder: 12,
            },
          ],
        },
      ],
      pricingUnit: 'per person',
    },
    dateStamp: '2020-02-10T18:17:58+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331003',
  },
}

const BookingBookExampleExample = {
  summary: 'booking book example',
  value: {
    data: {
      bookerEmail: 'apitest@viator.com',
      bookingDate: '2020-02-11',
      bookingStatus: {
        amended: false,
        cancelled: false,
        confirmed: true,
        failed: false,
        level: 'ITINERARY',
        pending: false,
        status: 3,
        text: 'Confirmed',
        type: 'CONFIRMED',
      },
      currencyCode: 'USD',
      distributorRef: 'distributorRef100000',
      exchangeRate: 1,
      hasVoucher: true,
      itemSummaries: [
        {
          applePassSupported: false,
          appleWalletURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          barcodeOption: 'tour',
          barcodeType: 'code128',
          bookingEngineId: 'FO',
          bookingStatus: {
            amended: false,
            cancelled: false,
            confirmed: true,
            failed: false,
            level: 'ITEM',
            pending: false,
            status: 1,
            text: 'Paid &amp;amp; Confirmed',
            type: 'CONFIRMED',
          },
          currencyCode: 'USD',
          departsFrom: 'Las Vegas, United States',
          departurePoint: 'Traveler pickup is offered&lt;br&gt;&lt;br&gt;',
          departurePointAddress: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          departurePointDirections: {
            $ref: '#/components/examples/product-example-1/value/data/pas',
          },
          destId: 684,
          distributorItemRef: 'itemRef1000000',
          hoursConfirmed: 0,
          itemId: 580669678,
          itineraryId: 1005851866,
          languageServicesLanguageCode: 'en',
          lastRetailPrice: 388.72,
          lastRetailPriceFormatted: '$388.72',
          leadTravellerFirstname: 'Homer test',
          leadTravellerSurname: 'Simpson test',
          leadTravellerTitle: 'Mr',
          merchantCancellable: true,
          merchantNetPrice: 388.72,
          merchantNetPriceFormatted: '$388.72',
          merchantTermsAndConditions: {
            amountRefundable: 'USD 412.04',
            cancellationFromTourDate: [
              {
                dayRangeMax: { $ref: '#/components/examples/product-example-1/value/data/pas' },
                dayRangeMin: 1,
                percentageRefundable: 100,
                policyEndTimestamp: 1585580400,
                policyStartTimestamp: {
                  $ref: '#/components/examples/product-example-1/value/data/pas',
                },
              },
              {
                dayRangeMax: 1,
                dayRangeMin: 0,
                percentageRefundable: 0,
                policyEndTimestamp: 1585666800,
                policyStartTimestamp: 1585580400,
              },
            ],
            merchantTermsAndConditionsType: 1,
            termsAndConditions:
              'For a full refund, cancel at least 24 hours in advance of the start date of the experience.',
          },
          obfsId: 362208,
          passbooks: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          pickupHotelId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          pickupHotelName: 'null',
          price: 412.04,
          priceFormatted: '$412.04',
          priceUSD: 412.04,
          productCode: '2280AAHT',
          productPulledDown: false,
          productTitle: 'Grand Canyon All-American Helicopter Tour',
          productWidgetList: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          rnplInfo: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          rulesApplied: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          savingAmount: 0,
          savingAmountFormated: '$0.00',
          sortOrder: 0,
          startingTime: '8:00 AM',
          supplierName: 'Sundance Helicopters',
          supplierPhoneNumber: '+1 123 456 7890',
          termsAndConditions: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          tourGradeCode: 'TG1~08:00',
          tourGradeDescription: 'Morning Departure; A-Star 08:00 (TG1~08:00)',
          travelDate: '2020-03-31',
          travellerAgeBands: [
            {
              ageBandId: 1,
              count: 1,
              description: 'Adult',
              pluralDescription: 'Adults',
              sortOrder: 0,
            },
          ],
          voucherKey:
            '1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678',
          voucherOption: 'VOUCHER_E',
          voucherRequirements:
            'You can present either a paper or an electronic voucher for this activity.',
          voucherURL:
            'https://viatorapi.live.rc.viator.com/service/merchant/voucher.jspa?code=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;embedResources=false',
          vouchers: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
      ],
      itineraryId: 1005851866,
      omniPreRuleList: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      paypalRedirectURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      rulesApplied: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      securityToken: '4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e',
      sortOrder: 0,
      totalPrice: 412.04,
      totalPriceFormatted: '$412.04',
      totalPriceUSD: 412.04,
      userId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      voucherKey: '1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e',
      voucherURL:
        'https://viatorapi.live.rc.viator.com/service/merchant/voucher.jspa?code=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e&amp;embedResources=false',
    },
    dateStamp: '2020-02-11T16:55:47+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331003',
  },
}

const BookingCalculatepriceExampleExample = {
  summary: 'booking calculateprice example',
  value: {
    data: {
      currencyCode: 'USD',
      hasPromoCode: false,
      itinerary: {
        bookerEmail: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        bookingDate: '2020-02-10',
        bookingStatus: {
          amended: false,
          cancelled: false,
          confirmed: false,
          failed: false,
          level: 'ITINERARY',
          pending: false,
          status: 0,
          text: 'Waiting to be Booked',
          type: 'WAITING',
        },
        currencyCode: 'USD',
        distributorRef: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        exchangeRate: 1,
        hasVoucher: false,
        itemSummaries: [
          {
            applePassSupported: false,
            appleWalletURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            barcodeOption: 'perperson',
            barcodeType: 'qrcode',
            bookingEngineId: 'UF',
            bookingStatus: {
              amended: false,
              cancelled: false,
              confirmed: false,
              failed: false,
              level: 'ITEM',
              pending: false,
              status: 0,
              text: 'Waiting to be Booked',
              type: 'WAITING',
            },
            currencyCode: 'USD',
            departsFrom: 'The Rocks, Australia',
            departurePoint: 'You may start this tour at any of the stops listed.',
            departurePointAddress: {
              $ref: '#/components/examples/product-example-1/value/data/pas',
            },
            departurePointDirections: {
              $ref: '#/components/examples/product-example-1/value/data/pas',
            },
            destId: 357,
            distributorItemRef: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            hoursConfirmed: 0,
            itemId: 580659274,
            itineraryId: 1005847086,
            languageServicesLanguageCode: {
              $ref: '#/components/examples/product-example-1/value/data/pas',
            },
            lastRetailPrice: 29.53,
            lastRetailPriceFormatted: '$29.53',
            leadTravellerFirstname: '',
            leadTravellerSurname: {
              $ref: '#/components/examples/product-example-1/value/data/pas',
            },
            leadTravellerTitle: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            merchantCancellable: true,
            merchantNetPrice: 29.53,
            merchantNetPriceFormatted: '$29.53',
            obfsId: 31185,
            passbooks: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            pickupHotelId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            pickupHotelName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            price: 31.3,
            priceFormatted: '$31.30',
            priceUSD: 31.3,
            productCode: '5010SYDNEY',
            productPulledDown: false,
            productTitle: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
            productWidgetList: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            rnplInfo: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            rulesApplied: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            savingAmount: 0,
            savingAmountFormated: '$0.00',
            sortOrder: 0,
            startingTime: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            supplierName: 'Big Bus Tours',
            supplierPhoneNumber: '+1 123 456 7890',
            termsAndConditions: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            tourGradeCode: '24HOUR',
            tourGradeDescription: '24 Hour Classic Ticket  (24HOUR)',
            travelDate: '2020-03-03',
            travellerAgeBands: [
              {
                ageBandId: 1,
                count: 1,
                description: 'Adult',
                pluralDescription: 'Adults',
                sortOrder: 0,
              },
            ],
            voucherKey: '',
            voucherOption: 'VOUCHER_E',
            voucherRequirements:
              'You can present either a paper or an electronic voucher for this activity.',
            voucherURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            vouchers: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          },
        ],
        itineraryId: 1005847086,
        omniPreRuleList: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        paypalRedirectURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        rulesApplied: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        securityToken: '595798ee27965d5178ab6a800f9b796ed7efac8fd303086e4113e1e99848932c',
        sortOrder: 0,
        totalPrice: 31.3,
        totalPriceFormatted: '$31.30',
        totalPriceUSD: 31.3,
        userId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        voucherKey: '',
        voucherURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
      itineraryFromPrice: 29.53,
      itineraryFromPriceFormatted: '$29.53',
      itineraryNewPrice: 29.53,
      itineraryNewPriceFormatted: '$29.53',
      itinerarySaving: 0,
      itinerarySavingFormatted: '$0.00',
      paymentGatewayInfo: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      promoCode: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      promoCodeExpired: false,
      promoCodeValid: false,
      rulesApplied: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    },
    dateStamp: '2020-02-10T18:26:49+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331003',
  },
}

const BookingHotelsExample_1Example = {
  summary: 'destId',
  value: {
    data: [
      {
        address: '35 Main St',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Hahndorf',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1001419406',
        latitude: -35.031216,
        longitude: 138.81102,
        name: 'The Hahndorf Inn',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5245',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 1,
      },
      {
        address: 'Lot 112 Neagles Rock Road',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '10984108',
        latitude: -33.863453,
        longitude: 138.61,
        name: 'Neagles Retreat Villas',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 2,
      },
      {
        address: '310 Main North Rd',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '11205163',
        latitude: -33.831417,
        longitude: 138.60942,
        name: 'The Mill Apartments',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: ['56243P2', '56243P3', '56243P6'],
        sortOrder: 3,
      },
      {
        address: '14 Bridge St, Old Reynella',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Reynella',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1255430',
        latitude: -35.08964,
        longitude: 138.53828,
        name: 'St. Francis Winery',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5161',
        productCodes: [
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
        ],
        sortOrder: 4,
      },
      {
        address: 'Motel 574 Main North Rd',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Enfield',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1255431',
        latitude: -34.845764,
        longitude: 138.60115,
        name: 'Adelaide Manor',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5094',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '120684P2',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 5,
      },
      {
        address: '471 Main North Rd, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Enfield',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1255432',
        latitude: -34.85016,
        longitude: 138.60077,
        name: 'Comfort Inn Manhattan',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5085',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '120684P2',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 6,
      },
      {
        address: 'Morphettville Motor Inn 444 - 446 Anzac Hwy',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Camden Park',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1257946',
        latitude: -34.97334,
        longitude: 138.54086,
        name: 'Morphettville Motor Inn',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5038',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '119946P9',
          '120684P2',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 7,
      },
      {
        address: '1 Nottage Tce, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Medindie',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1257951',
        latitude: -34.89378,
        longitude: 138.60353,
        name: 'Comfort Inn Scottys',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5081',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '119946P9',
          '120684P2',
          '120684P5',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 8,
      },
      {
        address: 'White Hut Road, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1262285',
        latitude: -33.820854,
        longitude: 138.61382,
        name: 'Clare Country Club',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: ['56243P2', '56243P3', '56243P6'],
        sortOrder: 9,
      },
      {
        address: '74a Main North Rd, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1262636',
        latitude: -33.848263,
        longitude: 138.6178,
        name: 'Clare Valley Motel',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: ['56243P2', '56243P3', '56243P6'],
        sortOrder: 10,
      },
      {
        address: 'Quarry Rd, Sevenhill via Clare Valley',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1289197',
        latitude: -33.87362,
        longitude: 138.6354,
        name: 'Thorn Park by the Vines',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: ['56243P2', '56243P3', '56243P6'],
        sortOrder: 11,
      },
      {
        address: '141 Brebner Dr',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'West Lakes',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1301167',
        latitude: -34.88005,
        longitude: 138.48842,
        name: 'Lakes Hotel',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5021',
        productCodes: [
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 12,
      },
      {
        address: '198 Esplanade',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Largs Bay',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1301173',
        latitude: -34.825584,
        longitude: 138.4865,
        name: 'Largs Pier Hotel - Motel',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5016',
        productCodes: [
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
        ],
        sortOrder: 13,
      },
      {
        address: '24 Dequetteville Tce',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Kent Town',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1301183',
        latitude: -34.924698,
        longitude: 138.6194,
        name: 'Adelaide Royal Coach',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5067',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '119946P9',
          '120684P2',
          '120684P5',
          '142696P2',
          '142696P5',
          '196440P1',
          '19852P6',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '21300P2',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
          '40887P6',
          '65854P1',
          '65854P2',
          '65854P3',
          '65854P6',
          '6763ULTIMATE',
          '67705P1',
          '67705P2',
        ],
        sortOrder: 14,
      },
      {
        address: '540 Marion Rd',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Marion',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1320631',
        latitude: -34.97743,
        longitude: 138.55557,
        name: 'Marion Motel and Apartments',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5038',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '119946P9',
          '120684P2',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 15,
      },
      {
        address: '17 Colley Tce, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Glenelg',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1579776',
        latitude: -34.97872,
        longitude: 138.51253,
        name: 'Glenelg Beachside Apartments',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5045',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 16,
      },
      {
        address: '373 Glen Osmond Rd, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Glen Osmond',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1584919',
        latitude: -34.9604,
        longitude: 138.64185,
        name: 'Jacksons Motor Inn',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5064',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '119946P9',
          '120684P2',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 17,
      },
      {
        address: '288-292 Main North Rd',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Prospect',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1589097',
        latitude: -34.87285,
        longitude: 138.60158,
        name: 'Comfort Inn &amp; Suites Sombrero',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5082',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '120684P2',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 18,
      },
      {
        address: 'Warenda Road, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1626470',
        latitude: -33.854675,
        longitude: 138.62292,
        name: 'Brice Hill Country Lodge',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: ['56243P2', '56243P3', '56243P6'],
        sortOrder: 19,
      },
      {
        address: 'Clare Valley, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1630042',
        latitude: -33.84362,
        longitude: 138.63342,
        name: 'Springfarm Cottage',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '',
        productCodes: ['56243P2', '56243P3', '56243P6'],
        sortOrder: 20,
      },
      {
        address: '647 North East Rd, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Gilles Plains',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1633907',
        latitude: -34.852222,
        longitude: 138.665,
        name: 'Highlander Hotel Bar Kitchen Rooftop',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5086',
        productCodes: [
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 21,
      },
      {
        address: '277 Glen Osmond Road, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Frewville',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1661623',
        latitude: -34.95136,
        longitude: 138.63423,
        name: 'Welcome Inn 277',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5063',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '119946P9',
          '120684P2',
          '120684P5',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 22,
      },
      {
        address: '325 Main North Rd, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1729496',
        latitude: -33.829445,
        longitude: 138.60802,
        name: 'Comfort Inn Clare Central',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: ['56243P2', '56243P3', '56243P6'],
        sortOrder: 23,
      },
      {
        address: '73 St Andrews Bvd, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Normanville',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1803904',
        latitude: -35.46194,
        longitude: 138.31508,
        name: 'Links Lady Bay Resort',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5204',
        productCodes: ['200245P4'],
        sortOrder: 24,
      },
      {
        address: '406 Sir Donald Bradman Dr, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Brooklyn Park',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2076447',
        latitude: -34.93242,
        longitude: 138.5395,
        name: 'Adelaide Airport Motel',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5032',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '119946P9',
          '120684P2',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '21300P1',
          '21300P7',
          '21300P9',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 25,
      },
      {
        address: '10 Main St',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Mawson Lakes',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2122469',
        latitude: -34.80973,
        longitude: 138.61734,
        name: 'Mawson Lakes Hotel',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5095',
        productCodes: [
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
        ],
        sortOrder: 26,
      },
      {
        address: '647 North East Rd, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Gilles Plains',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2218971',
        latitude: -34.85213,
        longitude: 138.6651,
        name: 'Comfort Inn Riverfront Berriedale',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5086',
        productCodes: [
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 27,
      },
      {
        address: '72 Warenda Rd',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2453318',
        latitude: -33.856297,
        longitude: 138.62358,
        name: 'St Helens Country Cottages',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: ['56243P2', '56243P3', '56243P6'],
        sortOrder: 28,
      },
      {
        address: '190 Gover St, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2479967',
        latitude: -34.904903,
        longitude: 138.5927,
        name: 'North Adelaide Boutique Stays Accommodation',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5006',
        productCodes: ['21300P1', '21300P11', '21300P14', '21300P6', '21300P7', '21300P9'],
        sortOrder: 29,
      },
      {
        address: '199 Glen Osmond Rd, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Frewville',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2482535',
        latitude: -34.94779,
        longitude: 138.62839,
        name: 'Frewville Motor Inn',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5063',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '119946P9',
          '120684P2',
          '120684P5',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
          '6763ULTIMATE',
        ],
        sortOrder: 30,
      },
      {
        address: '493 Portrush Rd',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Glenunga',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2501758',
        latitude: -34.94681,
        longitude: 138.6427,
        name: 'Best Western Adelaide Granada Motor Inn',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5064',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '119946P9',
          '120684P2',
          '120684P5',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 31,
      },
      {
        address: '33 - 37 Main St',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Mawson Lakes',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2575802',
        latitude: -34.806805,
        longitude: 138.61667,
        name: 'Quest Mawson Lakes',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5095',
        productCodes: [
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '21300P10',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
        ],
        sortOrder: 32,
      },
      {
        address: '859 Main North Rd, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Pooraka',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2628301',
        latitude: -34.82837,
        longitude: 138.61504,
        name: 'Pavlos Motel',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5095',
        productCodes: [
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 33,
      },
      {
        address: '23-25 Church St, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Penola',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2640160',
        latitude: -37.381992,
        longitude: 140.83783,
        name: 'Alexander Cameron Suites',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5277',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 34,
      },
      {
        address: '151 St Georges Tce',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2773041',
        latitude: -33.82023,
        longitude: 138.58174,
        name: 'Patly Hill Farm',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 35,
      },
      {
        address: 'corner of South &amp; West Terrace, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Stansbury',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2774580',
        latitude: -34.91078,
        longitude: 137.79254,
        name: 'Oyster Court Motel &amp; Holiday Units',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5582',
        productCodes: ['200245P4'],
        sortOrder: 36,
      },
      {
        address: '1274 South Rd, Adelaide',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Tonsley',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2786536',
        latitude: -35.00457,
        longitude: 138.5747,
        name: 'Tonsley Hotel Motel',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5042',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '119946P9',
          '120684P2',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 37,
      },
      {
        address: '445 Torrens Rd, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Woodville Park',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2853212',
        latitude: -34.87638,
        longitude: 138.54959,
        name: 'Lindy Lodge Motel',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5011',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '120684P2',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 38,
      },
      {
        address: '516 Glynburn Rd',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Burnside',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '3002527',
        latitude: -34.93765,
        longitude: 138.66063,
        name: 'The Feathers Hotel',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5066',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '120684P2',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 39,
      },
      {
        address: '20 Mount Barker Rd, (Corner Gill Terrace)',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Glen Osmond',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '3235180',
        latitude: -34.9643,
        longitude: 138.6466,
        name: 'Tollgate Motel',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5064',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '119946P9',
          '120684P2',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 40,
      },
      {
        address: '9 Warenda Rd, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '3240942',
        latitude: -33.846573,
        longitude: 138.62152,
        name: 'Riesling Trail and Clare Valley Cottages',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: ['56243P2', '56243P3', '56243P6'],
        sortOrder: 41,
      },
      {
        address: 'Sevenhill, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '3281019',
        latitude: -33.90826,
        longitude: 138.6238,
        name: 'Skillogalee Cottages',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: ['56243P2', '56243P3', '56243P6'],
        sortOrder: 42,
      },
      {
        address: '191 Main North Rd, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '3516966',
        latitude: -33.835503,
        longitude: 138.61389,
        name: 'Bentleys Hotel Motel',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 43,
      },
      {
        address: '220 Spring Gully Rd, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '3668974',
        latitude: -33.866726,
        longitude: 138.59903,
        name: 'Clare View Accommodation',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 44,
      },
      {
        address: 'Motel 393 Main North Rd',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Enfield',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '4257826',
        latitude: -34.86265,
        longitude: 138.60156,
        name: 'Enfield Motel',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5085',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '120684P2',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 45,
      },
      {
        address: 'Lot 136 Main North Road',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '4345469',
        latitude: -33.864716,
        longitude: 138.62134,
        name: 'Discovery Parks - Clare',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: ['56243P2', '56243P3', '56243P6'],
        sortOrder: 46,
      },
      {
        address: '16-28 Adelaide Rd',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Stansbury',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '4856431',
        latitude: -34.903656,
        longitude: 137.79562,
        name: 'Stansbury Holiday Motel',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5582',
        productCodes: ['200245P4'],
        sortOrder: 47,
      },
      {
        address: '135 Esplanade, cnr Jetty Rd',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Brighton',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '4861044',
        latitude: -35.01719,
        longitude: 138.51463,
        name: 'Esplanade Hotel Adelaide',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5048',
        productCodes: ['181322P2'],
        sortOrder: 48,
      },
      {
        address: 'off Gaelic Cemetery Road, Stanley Flat',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '4971218',
        latitude: -33.78769,
        longitude: 138.60567,
        name: 'Wuthering Heights',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5034',
        productCodes: ['56243P2', '56243P3', '56243P6'],
        sortOrder: 49,
      },
      {
        address: '431 Bungaree Road, (Off Highway B82)',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '5004100',
        latitude: -33.7714,
        longitude: 138.5837,
        name: 'Bungaree Station',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: ['56243P2', '56243P3', '56243P6'],
        sortOrder: 50,
      },
      {
        address: '18 Victoria Rd',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '6029450',
        latitude: -33.83657,
        longitude: 138.61197,
        name: 'Clare Valley Heritage Retreat',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: ['56243P2', '56243P3', '56243P6'],
        sortOrder: 51,
      },
      {
        address: '29 Hope St',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Clare',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '6461957',
        latitude: -33.83995,
        longitude: 138.61311,
        name: 'The Reserve Apartment',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5453',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 52,
      },
      {
        address: 'The Watson 33 Warwick St',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Walkerville',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '7755816',
        latitude: -34.896725,
        longitude: 138.61743,
        name: 'The Watson Adelaide - Art Series',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5081',
        productCodes: [
          '119946P4',
          '119946P5',
          '119946P6',
          '119946P8',
          '119946P9',
          '120684P2',
          '120684P5',
          '142696P2',
          '142696P5',
          '200245P1',
          '200245P4',
          '200245P5',
          '200245P7',
          '201625P1',
          '215244P1',
          '233580P1',
          '233580P2',
          '233580P4',
          '238603P1',
          '40887P5',
        ],
        sortOrder: 53,
      },
      {
        address: 'Moana Tourist Park 44 Nashwauk Cres',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Moana',
        destinationId: 123,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '7870501',
        latitude: -35.19921,
        longitude: 138.47296,
        name: 'Moana Beach Tourist Park',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '5169',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 54,
      },
    ],
    dateStamp: '2020-02-10T18:33:02+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331004',
  },
}

const BookingHotelsExample_2Example = {
  summary: 'productCode',
  value: {
    data: [
      {
        address: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        destinationId: 0,
        hotelString: "I live locally / I'm staying with friends, relatives",
        id: 'local',
        latitude: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        longitude: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        name: "I live locally / I'm staying with friends, relatives",
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        postcode: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 1,
      },
      {
        address: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        destinationId: 0,
        hotelString: 'My hotel is not yet booked',
        id: 'notBooked',
        latitude: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        longitude: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        name: 'My hotel is not yet booked',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        postcode: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 2,
      },
      {
        address: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        destinationId: 0,
        hotelString: 'My hotel is not listed',
        id: 'notListed',
        latitude: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        longitude: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        name: 'My hotel is not listed',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        postcode: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 3,
      },
      {
        address: '3730 Las Vegas Boulevard South, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1091925',
        latitude: 36.107323,
        longitude: -115.17628,
        name: 'ARIA Resort &amp; Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89158-4300',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 4,
      },
      {
        address: '3645 Las Vegas Blvd S, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1121312',
        latitude: 36.113705,
        longitude: -115.16985,
        name: "Bally's Las Vegas Hotel &amp; Casino",
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-4321',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 5,
      },
      {
        address: '3600 Las Vegas Blvd S',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1091703',
        latitude: 36.112026,
        longitude: -115.175285,
        name: 'Bellagio Las Vegas',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-4303',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 6,
      },
      {
        address: '3570 Las Vegas Blvd South, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1091762',
        latitude: 36.115753,
        longitude: -115.174446,
        name: 'Caesars Palace',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-8933',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 7,
      },
      {
        address: '2880 Las Vegas Blvd S, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1091770',
        latitude: 36.13704,
        longitude: -115.16351,
        name: 'Circus Circus Hotel &amp; Casino Las Vegas',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-1138',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 8,
      },
      {
        address: '3940 S Las Vegas Blvd',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1496876',
        latitude: 36.093147,
        longitude: -115.17744,
        name: 'Delano Las Vegas',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89119-1002',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 9,
      },
      {
        address: '206 N. 3rd Street',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '5790631',
        latitude: 36.17198,
        longitude: -115.14171,
        name: 'Downtown Grand',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89101-2931',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 10,
      },
      {
        address: '600 East Fremont Street, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1111692',
        latitude: 36.169106,
        longitude: -115.139015,
        name: 'El Cortez Hotel &amp; Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89101-5614',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 11,
      },
      {
        address: '80 East Harmon Avenue, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2639337',
        latitude: 36.108875,
        longitude: -115.16867,
        name: 'Elara By Hilton Grand Vacations - Center Strip',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-4539',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 12,
      },
      {
        address: '3131 Las Vegas Boulevard S, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2123368',
        latitude: 36.128822,
        longitude: -115.1649,
        name: 'Encore At Wynn Las Vegas',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-1967',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 13,
      },
      {
        address: '3850 S Las Vegas Blvd, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1097786',
        latitude: 36.098976,
        longitude: -115.17598,
        name: 'Excalibur Hotel &amp; Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-4300',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 14,
      },
      {
        address: '3555 Las Vegas Blvd S, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1091844',
        latitude: 36.116383,
        longitude: -115.172195,
        name: 'Flamingo Las Vegas Hotel &amp; Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-8901',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 15,
      },
      {
        address: '200 Fremont St',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1111699',
        latitude: 36.170788,
        longitude: -115.14377,
        name: 'Fremont Hotel &amp; Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89101-5622',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 16,
      },
      {
        address: '4000 W Flamingo Rd, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1091823',
        latitude: 36.11706,
        longitude: -115.19205,
        name: 'Gold Coast Hotel &amp; Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89103-4088',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 17,
      },
      {
        address: '129 Fremont St, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1091828',
        latitude: 36.17005,
        longitude: -115.145645,
        name: 'Golden Nugget Hotel &amp; Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89101-5603',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 18,
      },
      {
        address: '3475 Las Vegas Boulevard South, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1114889',
        latitude: 36.119415,
        longitude: -115.17206,
        name: "Harrah's Las Vegas Hotel &amp; Casino",
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-8922',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 19,
      },
      {
        address: '3575 Las Vegas Blvd S, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1217597',
        latitude: 36.116592,
        longitude: -115.1696,
        name: 'Hilton Grand Vacations at the Flamingo',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-8919',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 20,
      },
      {
        address: '3950 Koval Ln, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2164660',
        latitude: 36.11815,
        longitude: -115.16341,
        name: 'Holiday Inn Club Vacations at Desert Club Resort',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-4702',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 21,
      },
      {
        address: '3900 S Las Vegas Blvd, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1111709',
        latitude: 36.09734,
        longitude: -115.17634,
        name: 'Luxor Hotel &amp; Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89119-1004',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 22,
      },
      {
        address: '3950 Las Vegas Boulevard South, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1091886',
        latitude: 36.0959,
        longitude: -115.174095,
        name: 'Mandalay Bay Resort &amp; Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89119-1006',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 23,
      },
      {
        address: '75 East Harmon Avenue, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1567617',
        latitude: 36.10761,
        longitude: -115.16966,
        name: "Marriott's Grand Chateau",
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 24,
      },
      {
        address: '3799 S Las Vegas Blvd',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1091891',
        latitude: 36.102436,
        longitude: -115.16935,
        name: 'MGM Grand Las Vegas',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-4319',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 25,
      },
      {
        address: '3790 Las Vegas Boulevard South, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1091904',
        latitude: 36.102093,
        longitude: -115.17433,
        name: 'New York - New York Hotel and Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-4338',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 26,
      },
      {
        address: '115 E Tropicana Avenue, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1600446',
        latitude: 36.10006,
        longitude: -115.167595,
        name: 'OYO Las Vegas Hotel and Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-7304',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 27,
      },
      {
        address: '4321 West Flamingo Road, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1208820',
        latitude: 36.114502,
        longitude: -115.19429,
        name: 'Palms Casino Resort',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89103-3903',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 28,
      },
      {
        address: '3655 Las Vegas Boulevard South, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1143336',
        latitude: 36.11242,
        longitude: -115.17175,
        name: 'Paris Las Vegas',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-4345',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 29,
      },
      {
        address: '3770 S Las Vegas Blvd, South Part of the Strip, Next to NY Hotel',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1097712',
        latitude: 36.132004,
        longitude: -115.16145,
        name: 'Park MGM Las Vegas',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-4337',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 30,
      },
      {
        address: '3667 Las Vegas Boulevard South, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1091687',
        latitude: 36.110043,
        longitude: -115.17096,
        name: 'Planet Hollywood Resort &amp; Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-4331',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 31,
      },
      {
        address: '3745 Las Vegas Boulevard South, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1091916',
        latitude: 36.106483,
        longitude: -115.17092,
        name: 'Polo Towers Suites',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-4308',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 32,
      },
      {
        address: '3700 W Flamingo, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1091673',
        latitude: 36.1161,
        longitude: -115.18675,
        name: 'Rio All-Suite Hotel &amp; Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89103-4043',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 33,
      },
      {
        address: '145 East Harmon Avenue',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1601419',
        latitude: 36.106987,
        longitude: -115.166756,
        name: 'Signature at MGM Grand',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-4504',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 34,
      },
      {
        address: '3708 Las Vegas Boulevard South, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2829539',
        latitude: 36.109745,
        longitude: -115.17384,
        name: 'The Cosmopolitan of Las Vegas, Autograph Collection',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-4309',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 35,
      },
      {
        address: '3595 Las Vegas Boulevard South',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '7537691',
        latitude: 36.114937,
        longitude: -115.172455,
        name: 'The Cromwell Hotel Las Vegas',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-8918',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 36,
      },
      {
        address: '301 Fremont Street, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1091679',
        latitude: 36.169464,
        longitude: -115.142784,
        name: 'The D Casino Hotel Las Vegas',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89101-5600',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 37,
      },
      {
        address: '3535 Las Vegas Blvd S, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1186114',
        latitude: 36.118,
        longitude: -115.17194,
        name: 'The LINQ Hotel &amp; Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-8921',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 38,
      },
      {
        address: '3400 Las Vegas Blvd. S., ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1097737',
        latitude: 36.121216,
        longitude: -115.17343,
        name: 'The Mirage Hotel &amp; Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-8923',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 39,
      },
      {
        address: '3325 Las Vegas Blvd South, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1675000',
        latitude: 36.12396,
        longitude: -115.16791,
        name: 'The Palazzo at The Venetian',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-1414',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 40,
      },
      {
        address: '2000 Las Vegas Boulevard South, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1114898',
        latitude: 36.147305,
        longitude: -115.155594,
        name: 'The STRAT Hotel, Casino &amp; SkyPod',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89104-2507',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 41,
      },
      {
        address: '3355 Las Vegas Blvd S, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1097704',
        latitude: 36.121475,
        longitude: -115.16994,
        name: 'The Venetian Resort',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-8941',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 42,
      },
      {
        address: '3300 Las Vegas Blvd S, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1091967',
        latitude: 36.123917,
        longitude: -115.17123,
        name: 'Treasure Island Hotel &amp; Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-8916',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 43,
      },
      {
        address: '3801 Las Vegas Blvd South, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1097730',
        latitude: 36.09878,
        longitude: -115.17033,
        name: 'Tropicana Las Vegas - A DoubleTree by Hilton Hotel',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-4325',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 44,
      },
      {
        address: '2000 Fashion Show Drive, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2022061',
        latitude: 36.12944,
        longitude: -115.17272,
        name: 'Trump International Hotel Las Vegas',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-1936',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 45,
      },
      {
        address: '255 East Flamingo Road, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1224853',
        latitude: 36.113308,
        longitude: -115.160835,
        name: 'Tuscany Suites &amp; Casino',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89169-4708',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 46,
      },
      {
        address: '2600 W. Harmon Avenue, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2474086',
        latitude: 36.109516,
        longitude: -115.17793,
        name: 'Vdara Hotel &amp; Spa at ARIA Las Vegas',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89158-4538',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 47,
      },
      {
        address: '3752 S Las Vegas Blvd S\n\n, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '2456410',
        latitude: 36.106415,
        longitude: -115.17404,
        name: 'Waldorf Astoria Las Vegas',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89158-4382',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 48,
      },
      {
        address: '3131 Las Vegas Boulevard South, ',
        brand: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        city: 'Las Vegas',
        destinationId: 684,
        hotelString: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        id: '1503598',
        latitude: 36.126553,
        longitude: -115.16552,
        name: 'Wynn Las Vegas',
        notes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        phone: '+1 123 456 7890',
        postcode: '89109-1967',
        productCodes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        sortOrder: 49,
      },
    ],
    dateStamp: '2020-02-10T18:29:35+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331005',
  },
}

const BookingMybookingsExampleExample = {
  summary: 'booking mybookings example',
  value: {
    data: [
      {
        bookerEmail: 'apitest@viator.com',
        bookingDate: '2020-02-11',
        bookingStatus: {
          amended: false,
          cancelled: false,
          confirmed: true,
          failed: false,
          level: 'ITINERARY',
          pending: false,
          status: 3,
          text: 'Confirmed',
          type: 'CONFIRMED',
        },
        currencyCode: 'USD',
        distributorRef: 'distributorRef100000',
        exchangeRate: 1,
        hasVoucher: true,
        itemSummaries: [
          {
            applePassSupported: false,
            appleWalletURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            barcodeOption: 'tour',
            barcodeType: 'code128',
            bookingEngineId: 'FO',
            bookingStatus: {
              amended: false,
              cancelled: false,
              confirmed: true,
              failed: false,
              level: 'ITEM',
              pending: false,
              status: 1,
              text: 'Paid &amp;amp; Confirmed',
              type: 'CONFIRMED',
            },
            currencyCode: 'USD',
            departsFrom: 'Las Vegas, United States',
            departurePoint: 'Traveler pickup is offered&lt;br&gt;&lt;br&gt;',
            departurePointAddress: {
              $ref: '#/components/examples/product-example-1/value/data/pas',
            },
            departurePointDirections: {
              $ref: '#/components/examples/product-example-1/value/data/pas',
            },
            destId: 684,
            distributorItemRef: 'itemRef1000000',
            hoursConfirmed: 0,
            itemId: 580669678,
            itineraryId: 1005851866,
            languageServicesLanguageCode: 'en',
            lastRetailPrice: 388.72,
            lastRetailPriceFormatted: '$388.72',
            leadTravellerFirstname: 'Homer test',
            leadTravellerSurname: 'Simpson test',
            leadTravellerTitle: 'Mr',
            merchantCancellable: true,
            merchantNetPrice: 388.72,
            merchantNetPriceFormatted: '$388.72',
            merchantTermsAndConditions: {
              amountRefundable: 'USD 412.04',
              cancellationFromTourDate: [
                {
                  dayRangeMax: { $ref: '#/components/examples/product-example-1/value/data/pas' },
                  dayRangeMin: 1,
                  percentageRefundable: 100,
                  policyEndTimestamp: 1585580400,
                  policyStartTimestamp: {
                    $ref: '#/components/examples/product-example-1/value/data/pas',
                  },
                },
                {
                  dayRangeMax: 1,
                  dayRangeMin: 0,
                  percentageRefundable: 0,
                  policyEndTimestamp: 1585666800,
                  policyStartTimestamp: 1585580400,
                },
              ],
              merchantTermsAndConditionsType: 1,
              termsAndConditions:
                'For a full refund, cancel at least 24 hours in advance of the start date of the experience.',
            },
            obfsId: 362208,
            passbooks: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            pickupHotelId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            pickupHotelName: 'null',
            price: 412.04,
            priceFormatted: '$412.04',
            priceUSD: 412.04,
            productCode: '2280AAHT',
            productPulledDown: false,
            productTitle: 'Grand Canyon All-American Helicopter Tour',
            productWidgetList: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            rnplInfo: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            rulesApplied: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            savingAmount: 0,
            savingAmountFormated: '$0.00',
            sortOrder: 0,
            startingTime: '8:00 AM',
            supplierName: 'Sundance Helicopters',
            supplierPhoneNumber: '+1 123 456 7890',
            termsAndConditions: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            tourGradeCode: 'TG1~08:00',
            tourGradeDescription: 'Morning Departure; A-Star 08:00 (TG1~08:00)',
            travelDate: '2020-03-31',
            travellerAgeBands: [
              {
                ageBandId: 1,
                count: 1,
                description: 'Adult',
                pluralDescription: 'Adults',
                sortOrder: 0,
              },
            ],
            voucherKey:
              '1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678',
            voucherOption: 'VOUCHER_E',
            voucherRequirements:
              'You can present either a paper or an electronic voucher for this activity.',
            voucherURL:
              'https://viatorapi.live.rc.viator.com/service/merchant/voucher.jspa?code=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;embedResources=false',
            vouchers: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          },
        ],
        itineraryId: 1005851866,
        omniPreRuleList: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        paypalRedirectURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        rulesApplied: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        securityToken: '4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e',
        sortOrder: 1,
        totalPrice: 412.04,
        totalPriceFormatted: '$412.04',
        totalPriceUSD: 412.04,
        userId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        voucherKey: '1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e',
        voucherURL:
          'https://viatorapi.live.rc.viator.com/service/merchant/voucher.jspa?code=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e&amp;embedResources=false',
      },
    ],
    dateStamp: '2020-02-11T20:27:20+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331004',
  },
}

const BookingPastbookingExampleExample = {
  summary: 'booking pastbooking example',
  value: {
    data: {
      bookerEmail: 'apitest@viator.com',
      bookingDate: '2020-02-11',
      bookingStatus: {
        amended: false,
        cancelled: false,
        confirmed: true,
        failed: false,
        level: 'ITINERARY',
        pending: false,
        status: 3,
        text: 'Confirmed',
        type: 'CONFIRMED',
      },
      currencyCode: 'USD',
      distributorRef: 'distributorRef100000',
      exchangeRate: 1,
      hasVoucher: true,
      itemSummaries: [
        {
          applePassSupported: false,
          appleWalletURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          barcodeOption: 'tour',
          barcodeType: 'code128',
          bookingEngineId: 'FO',
          bookingStatus: {
            amended: false,
            cancelled: false,
            confirmed: true,
            failed: false,
            level: 'ITEM',
            pending: false,
            status: 1,
            text: 'Paid &amp;amp; Confirmed',
            type: 'CONFIRMED',
          },
          currencyCode: 'USD',
          departsFrom: 'Las Vegas, United States',
          departurePoint: 'Traveler pickup is offered&lt;br&gt;&lt;br&gt;',
          departurePointAddress: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          departurePointDirections: {
            $ref: '#/components/examples/product-example-1/value/data/pas',
          },
          destId: 684,
          distributorItemRef: 'itemRef1000000',
          hoursConfirmed: 0,
          itemId: 580669678,
          itineraryId: 1005851866,
          languageServicesLanguageCode: 'en',
          lastRetailPrice: 388.72,
          lastRetailPriceFormatted: '$388.72',
          leadTravellerFirstname: 'Homer test',
          leadTravellerSurname: 'Simpson test',
          leadTravellerTitle: 'Mr',
          merchantCancellable: true,
          merchantNetPrice: 388.72,
          merchantNetPriceFormatted: '$388.72',
          merchantTermsAndConditions: {
            amountRefundable: 'USD 412.04',
            cancellationFromTourDate: [
              {
                dayRangeMax: { $ref: '#/components/examples/product-example-1/value/data/pas' },
                dayRangeMin: 1,
                percentageRefundable: 100,
                policyEndTimestamp: 1585580400,
                policyStartTimestamp: {
                  $ref: '#/components/examples/product-example-1/value/data/pas',
                },
              },
              {
                dayRangeMax: 1,
                dayRangeMin: 0,
                percentageRefundable: 0,
                policyEndTimestamp: 1585666800,
                policyStartTimestamp: 1585580400,
              },
            ],
            merchantTermsAndConditionsType: 1,
            termsAndConditions:
              'For a full refund, cancel at least 24 hours in advance of the start date of the experience.',
          },
          obfsId: 362208,
          passbooks: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          pickupHotelId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          pickupHotelName: 'null',
          price: 412.04,
          priceFormatted: '$412.04',
          priceUSD: 412.04,
          productCode: '2280AAHT',
          productPulledDown: false,
          productTitle: 'Grand Canyon All-American Helicopter Tour',
          productWidgetList: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          rnplInfo: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          rulesApplied: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          savingAmount: 0,
          savingAmountFormated: '$0.00',
          sortOrder: 0,
          startingTime: '8:00 AM',
          supplierName: 'Sundance Helicopters',
          supplierPhoneNumber: '+1 123 456 7890',
          termsAndConditions: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          tourGradeCode: 'TG1~08:00',
          tourGradeDescription: 'Morning Departure; A-Star 08:00 (TG1~08:00)',
          travelDate: '2020-03-31',
          travellerAgeBands: [
            {
              ageBandId: 1,
              count: 1,
              description: 'Adult',
              pluralDescription: 'Adults',
              sortOrder: 0,
            },
          ],
          voucherKey:
            '1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678',
          voucherOption: 'VOUCHER_E',
          voucherRequirements:
            'You can present either a paper or an electronic voucher for this activity.',
          voucherURL:
            'https://viatorapi.live.rc.viator.com/service/merchant/voucher.jspa?code=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;embedResources=false',
          vouchers: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
      ],
      itineraryId: 1005851866,
      omniPreRuleList: [],
      paypalRedirectURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      rulesApplied: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      securityToken: '4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e',
      sortOrder: 0,
      totalPrice: 412.04,
      totalPriceFormatted: '$412.04',
      totalPriceUSD: 412.04,
      userId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      voucherKey: '1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e',
      voucherURL:
        'https://viatorapi.live.rc.viator.com/service/merchant/voucher.jspa?code=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e&amp;embedResources=false',
    },
    dateStamp: '2020-02-11T20:06:43+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331003',
  },
}

const BookingPricingmatrixExampleExample = {
  summary: 'booking pricing matrix example',
  value: {
    data: [
      {
        ageBandPrices: [
          {
            bandId: 1,
            maximumCountRequired: 9,
            minimumCountRequired: 0,
            prices: [
              {
                currencyCode: 'EUR',
                merchantNetPrice: 26.64,
                merchantNetPriceFormatted: '€26,64',
                minNoOfTravellersRequiredForPrice: 1,
                price: 33.35,
                priceFormatted: '€33,35',
                sortOrder: 1,
              },
            ],
            sortOrder: 1,
          },
          {
            bandId: 2,
            maximumCountRequired: 9,
            minimumCountRequired: 0,
            prices: [
              {
                currencyCode: 'EUR',
                merchantNetPrice: 18.06,
                merchantNetPriceFormatted: '€18,06',
                minNoOfTravellersRequiredForPrice: 1,
                price: 22.61,
                priceFormatted: '€22,61',
                sortOrder: 1,
              },
            ],
            sortOrder: 2,
          },
        ],
        bookingDate: '2020-03-11',
        pricingUnit: 'per person',
        sortOrder: 1,
      },
    ],
    dateStamp: '2020-02-11T16:21:23+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331003',
  },
}

const BookingStatusExampleExample = {
  summary: 'booking status example',
  value: {
    data: [
      {
        bookingDate: '2020-02-11',
        bookingStatus: {
          amended: false,
          cancelled: false,
          confirmed: true,
          failed: false,
          level: 'ITINERARY',
          pending: false,
          status: 3,
          text: 'Confirmed',
          type: 'CONFIRMED',
        },
        distributorRef: 'distributorRef100000',
        itemSummaries: [
          {
            bookingStatus: {
              amended: false,
              cancelled: false,
              confirmed: true,
              failed: false,
              level: 'ITEM',
              pending: false,
              status: 1,
              text: 'Paid &amp;amp; Confirmed',
              type: 'CONFIRMED',
            },
            distributorItemRef: 'itemRef1000000',
            itemId: 580669678,
            itineraryId: 1005851866,
            sortOrder: 0,
            travelDate: '2020-03-31',
          },
        ],
        itineraryId: 1005851866,
        sortOrder: 1,
      },
    ],
    dateStamp: '2020-02-11T18:38:25+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331004',
  },
}

const BookingStatusItemsExampleExample = {
  summary: 'booking status items example',
  value: {
    data: [
      {
        bookingStatus: {
          amended: false,
          cancelled: false,
          confirmed: true,
          failed: false,
          level: 'ITEM',
          pending: false,
          status: 1,
          text: 'Paid &amp;amp; Confirmed',
          type: 'CONFIRMED',
        },
        distributorItemRef: 'itemRef1000000',
        itemId: 580669678,
      },
    ],
    dateStamp: '2020-02-11T19:03:06+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331001',
  },
}

const BookingVoucherExampleExample = {
  summary: 'booking voucher example',
  value: {
    data: '\n&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;\n&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;\n    &lt;head&gt;\n        &lt;meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /&gt;\n        &lt;meta name="viewport" content="width=device-width" /&gt;\n        &lt;title&gt;Viator&lt;/title&gt;\n    &lt;/head&gt;\n    &lt;body&gt;\n        &lt;div id="content" class="voucher_box"&gt;\n                &lt;div id="voucher_1"&gt;\n\n        &lt;div class="section"&gt;\n            &lt;div class="voucher_title"&gt;\n                Voucher 1\n                of 1: Homer test Simpson test\n            &lt;/div&gt;\n        &lt;/div&gt;\n\n        &lt;div class="section bline"&gt;\n            &lt;div class="btn_box"&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n\n        &lt;div style="line-height: 1.5;font-family:\'Arial\',\'Helvetica\',\'Verdana\',sans-serif; font-size: 12px; padding: 0 10px; border-bottom: 1px solid #CAE2EA;"&gt;\n\n            &lt;h2 style="font-size:16px;font-weight:bold;margin:0.5em 0;padding:0;"&gt;\n            Grand Canyon All-American Helicopter Tour\n                    &lt;span style="display: block;font-size:12px;"&gt;\n                        Morning Departure; A-Star 08:00\n                    &lt;/span&gt;\n            &lt;/h2&gt;\n\n            &lt;div class="barcode"&gt;\n                &lt;img src="/voucher/resource?type=barcode&amp;itineraryItemId=580669678&amp;voucherToken=4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e" alt=""/&gt;\n            &lt;/div&gt;\n\n                &lt;h2 style="font-size:16px;font-weight:bold;margin:0.5em 0;padding:0;"&gt;SAMPLE ONLY&lt;/h2&gt;\n\n            &lt;ul style="margin:0 0 1em 1em; padding:0;"&gt;\n                &lt;li&gt;\n                    &lt;strong&gt;Date:&lt;/strong&gt;\n                Tuesday March 31, 2020\n                &lt;/li&gt;\n            &lt;/ul&gt;\n\n            &lt;ul style="margin:0 0 1em 1em; padding:0;"&gt;\n                    &lt;li&gt;\n                        &lt;strong&gt;Lead traveler\n                            :\n                        &lt;/strong&gt;Homer test Simpson test\n                    &lt;/li&gt;\n                    &lt;li&gt;\n                        &lt;strong&gt;Number of Travelers\n                            :\n                        &lt;/strong&gt;1 Adult&lt;/li&gt;\n\n                &lt;li&gt;\n                    &lt;strong&gt;Booking Reference:\n                    &lt;/strong&gt;BR-580669678&lt;/li&gt;\n\n                &lt;li&gt;\n                    &lt;strong&gt;Product Code:\n                    &lt;/strong&gt;2280AAHT&lt;/li&gt;\n\n                    &lt;li&gt;\n                        &lt;strong&gt;Option Code:\n                        &lt;/strong&gt;TG1~08:00&lt;/li&gt;\n\n                    &lt;li&gt;\n                        &lt;strong&gt;Supplier\n                            : &lt;/strong&gt;Sundance Helicopters&lt;/li&gt;\n\n\n\n\n\n                &lt;li&gt;\n                    &lt;strong&gt;Location\n                        :&lt;/strong&gt;\n                            &lt;p&gt;Traveler pickup is offered&lt;br&gt;&lt;br&gt;&lt;/p&gt;\n                &lt;/li&gt;\n\n                    &lt;li&gt;\n                        &lt;strong&gt;Tour Option Description\n                            :&lt;/strong&gt;\n                    Morning departure between 8am and 11:45am on an A-Star Helicopter for the All American Helicopter Tour\n                        \n                    &lt;/li&gt;\n            &lt;/ul&gt;\n\n            &lt;h3 style="font-size:14px;font-weight:bold;margin:0.5em 0;padding:0;"&gt;\n            Voucher Information\n            &lt;/h3&gt;\n\n            &lt;ul style="margin:0 0 1em 1em; padding:0;"&gt;\n                You can present either a paper or an electronic voucher for this activity.\n                    &lt;span style="color:#888888;"&gt; / You can present either a paper or an electronic voucher for this activity.&lt;/span&gt;\n            &lt;/ul&gt;\n\n            &lt;h3 style="font-size:14px;font-weight:bold;margin:0.5em 0;padding:0;"&gt;\n            Important Information\n            &lt;/h3&gt;\n                &lt;ul&gt;\n&lt;li&gt;Your local contact is Sundance Helicopters on +17027360606.&lt;/li&gt;&lt;/ul&gt;\n• Important: due to comfort, weight and balance of the aircraft, the maximum weight per passenger to ride in an A-Star helicopter is 275lbs (125kg / 19.6st). If passengers weigh in between 275lbs and 300lbs (136kg/21.4st), you will be required to upgrade to the EC-130.&lt;br&gt; • Any passenger over 300lbs will be required to purchase an additional seat. This is payable directly to the tour operator on the day of the tour.&lt;br&gt; • Due to the nature of this tour and the safety of all guests, the tour operator reserves the right to refuse service to passengers who are intoxicated or show signs of intoxication. If, as a result, your tour is canceled, you will not be entitled to a refund.&lt;br&gt; • Infant children must be under the age of two and have proof of age, such as a passport and are considered lap children.&lt;br&gt; • Per FAA regulations, all passenger must present photo ID at check in.&lt;br&gt; • If you would like a vegetarian meal as your lunch option, please contact the local operator as soon as possible.&lt;br&gt; • Please Note: Please look for your Limo driver who will get out and will be looking for the lead traveler’s last name of whom the reservation is under. There is also a sign in the front windshield of the Limo that will say Sundance Helicopters.&lt;br&gt;&lt;br&gt;Hotel pickups commence prior to this time, you must contact the local service provider to verify your exact pickup time.&lt;br&gt;&lt;br&gt;All flight times are approximate and subject to change due to weather conditions and weight restrictions.&lt;br&gt;\n\n                &lt;h3 style="font-size:14px;font-weight:bold;margin:0.5em 0;padding:0;"&gt;\n                Inclusions\n                &lt;/h3&gt;\n                    &lt;ul&gt;\n&lt;li&gt;45-minute (approx.) flight each way (helicopter based on option selected)&lt;/li&gt;&lt;li&gt;Hotel pickup and drop-off by limousine&lt;/li&gt;&lt;li&gt;Snacks&lt;/li&gt;&lt;li&gt;Glass of Champagne&lt;/li&gt;&lt;li&gt;All taxes and fees&lt;/li&gt;&lt;/ul&gt;\n\n\n                &lt;h3 style="font-size:14px;font-weight:bold;margin:0.5em 0;padding:0;"&gt;\n                Exclusions\n                &lt;/h3&gt;\n                    &lt;ul&gt;\n&lt;li&gt;Gratuities&lt;/li&gt;&lt;/ul&gt;\n\n\n\n        &lt;/div&gt;\n\n    &lt;/div&gt;\n        &lt;br/&gt;\n\n        &lt;/div&gt;\n\n    &lt;/body&gt;\n&lt;/html&gt;\n',
    dateStamp: '2020-02-11T19:50:39+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331003',
  },
}

const BookingsIdCancelQuoteExampleExample = {
  summary: 'bookings cancel quote example',
  value: {
    bookingId: 'BR-580669678',
    refundDetails: {
      currencyCode: 'USD',
      itemPrice: 412.04,
      refundAmount: 412.04,
      refundPercentage: 100,
    },
    status: 'CANCELLABLE',
  },
}

const CancelReasonsExampleExample = {
  summary: 'cancel reasons example',
  value: {
    reasons: [
      {
        cancellationReasonCode: 'Customer_Service.Unexpected_medical_circumstances',
        cancellationReasonText: 'Unexpected/medical circumstances',
      },
      {
        cancellationReasonCode: 'Customer_Service.Duplicate_Booking',
        cancellationReasonText: 'Duplicate Booking',
      },
      {
        cancellationReasonCode: 'Customer_Service.Tour operator asked me to cancel',
        cancellationReasonText: 'Tour operator asked me to cancel',
      },
      {
        cancellationReasonCode: 'Customer_Service.Chose_a_different_cheaper_tour',
        cancellationReasonText: 'Chose a different/cheaper tour',
      },
      { cancellationReasonCode: 'Customer_Service.Weather', cancellationReasonText: 'Weather' },
      {
        cancellationReasonCode: 'Customer_Service.Booked_wrong_tour_date',
        cancellationReasonText: 'Booked wrong tour/date',
      },
      {
        cancellationReasonCode: 'Customer_Service.I_canceled_my_entire_trip',
        cancellationReasonText: 'I canceled my entire trip',
      },
    ],
  },
}

const HealthCheckExampleExample = {
  summary: 'health check example',
  value: {
    allGood: true,
    capiOk: true,
    dbOk: true,
    memcachedOk: true,
    message: { $ref: '#/components/examples/product-example-1/value/data/pas' },
  },
}

const ProductExample_1Example = {
  summary: '5010SYDNEY',
  value: {
    data: {
      additionalInfo: [
        'Confirmation will be received at time of booking',
        'Wheelchair accessible',
        'When booking the 24 or 48 hour Family Pass, only the lead passenger name is required for a booking of up to 2 Adults and 2 children 16 years and under. At time of booking you only need to enter 1 adult to complete your booking',
        'Infants aged 0 to 4 years travel free of charge',
      ],
      admission: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      ageBands: [
        {
          adult: true,
          ageFrom: 16,
          ageTo: 99,
          bandId: 1,
          count: 0,
          description: 'Adult',
          pluralDescription: 'Adults',
          sortOrder: 1,
          treatAsAdult: true,
        },
        {
          adult: false,
          ageFrom: 5,
          ageTo: 15,
          bandId: 2,
          count: 0,
          description: 'Child',
          pluralDescription: 'Children',
          sortOrder: 2,
          treatAsAdult: true,
        },
        {
          adult: false,
          ageFrom: 0,
          ageTo: 4,
          bandId: 3,
          count: 0,
          description: 'Infant',
          pluralDescription: 'Infants',
          sortOrder: 3,
          treatAsAdult: false,
        },
      ],
      allTravellerNamesRequired: true,
      applePassSupported: true,
      available: true,
      bookingEngineId: 'UnconditionalBE',
      bookingQuestions: [],
      catIds: [6, 12],
      city: 'Sydney',
      code: '5010SYDNEY',
      country: 'Australia',
      currencyCode: 'USD',
      departurePoint: 'You may start this tour at any of the stops listed.',
      departureTime: 'See itinerary',
      departureTimeComments: '',
      description:
        '&lt;b&gt;Itinerary&lt;/b&gt;&lt;br&gt;&lt;br&gt;&lt;p&gt;&lt;strong&gt;Red Route - Sydney Icons&lt;/strong&gt;&lt;/p&gt;&lt;p&gt;Route Duration: 2 hours&lt;/p&gt;&lt;div&gt;Stops on the Red Route - Sydney Icons:&lt;/div&gt;&lt;ul&gt;&lt;li&gt;T Galleria x Petal met Sugar - Circular Quay, George St, cnr Alfred St. (opp DFS Galleria)&lt;/li&gt;\n&lt;li&gt;Martin Place Station, Elizabeth St, Stand E - Sydney Tower/ Westfield&lt;/li&gt;\n&lt;li&gt;1 William St - Australian Museum&lt;/li&gt;\n&lt;li&gt;William St at Palmer St - William St, Kings Cross&lt;/li&gt;\n&lt;li&gt;121 Darlinghurst Rd - Kings Cross Train Station on Darlinghurst Rd.&lt;/li&gt;\n&lt;li&gt;123-125 MacLeay St - El Alamein Fountain&lt;/li&gt;\n&lt;li&gt;2 Bourke St - Cowper Wharf Rd, outside the Woollomooloo Hotel&lt;/li&gt;\n&lt;li&gt;2A Macquarie St - Sydney Opera House&lt;/li&gt;\n&lt;li&gt;Macquarie Street - Botanical Garden, Scenic Walk to Mrs Macquarie Chair&lt;/li&gt;\n&lt;li&gt;State Library of New South Wales - State Library&lt;/li&gt;\n&lt;li&gt;Prince Albert Rd opp College St - Hyde Park&lt;/li&gt;\n&lt;li&gt;Greyhound Australia - Central Station, Pitt Street, Bus Bay 18&lt;/li&gt;\n&lt;li&gt;Powerhouse Museum, Harris St - Powerhouse Museum&lt;/li&gt;\n&lt;li&gt;Fish Market - Harris St, cnr Pyrmont Bridge Rd&lt;/li&gt;\n&lt;li&gt;Marquee Sydney - The Star Casino&lt;/li&gt;\n&lt;li&gt;Maritime Museum&lt;/li&gt;\n&lt;li&gt;ICC Sydney&lt;/li&gt;\n&lt;li&gt;Chinese Garden of Friendship&lt;/li&gt;\n&lt;li&gt;SEA LIFE Sydney Aquarium&lt;/li&gt;\n&lt;li&gt;ibis Sydney King Street Wharf - Kings Street Wharf&lt;/li&gt;\n&lt;li&gt;Hickson Road&lt;/li&gt;\n&lt;li&gt;Dawes Point - Sydney Harbour Bridge&lt;/li&gt;\n&lt;li&gt;The Rocks&lt;/li&gt;&lt;/ul&gt;&lt;div&gt;Attractions on the Red Route - Sydney Icons:&lt;/div&gt;&lt;p&gt;Hyde Park Barracks / Australian Museum / Sea Life Sydney Aquarium / Darling Harbour / The Rocks / Bondi Beach / Sydney Harbour Bridge / Royal Botanic Garden Sydney / Sydney Town Hall / Hyde Park / Circular Quay / City Sightseeing Sydney / Madame Tussauds Sydney / Big Bus Sydney&lt;/p&gt;&lt;p&gt;&lt;i&gt;Operates:&lt;/i&gt; 1st bus departs from Stop 1 Circular Quay at 8.30am.\nFrequency every 20 minutes\nLast bus departs from stop 1 at 6.30pm&lt;/p&gt;&lt;p&gt;&lt;strong&gt;Blue Route - Bondi Lifestyle&lt;/strong&gt;&lt;/p&gt;&lt;p&gt;Route Duration: 2 hours&lt;/p&gt;&lt;div&gt;Stops on the Blue Route - Bondi Lifestyle:&lt;/div&gt;&lt;ul&gt;&lt;li&gt;492 Pitt St - Central Station, Pitt Street, Bus Bay 18&lt;/li&gt;\n&lt;li&gt;1 William St - Australian Museum &lt;/li&gt;\n&lt;li&gt;Paddington Town Hall, Oxford St&lt;/li&gt;\n&lt;li&gt;Oxford St opp Moncur St&lt;/li&gt;\n&lt;li&gt;Bondi Beach&lt;/li&gt;\n&lt;li&gt;North Bondi Beach, Campbell Pde&lt;/li&gt;\n&lt;li&gt;Rose Bay&lt;/li&gt;\n&lt;li&gt;Double Bay&lt;/li&gt;&lt;/ul&gt;&lt;div&gt;Attractions on the Blue Route - Bondi Lifestyle:&lt;/div&gt;&lt;p&gt;Paddington Markets / Centennial Park / Bondi Beach / Rose Bay / Double Bay&lt;/p&gt;&lt;p&gt;&lt;i&gt;Operates:&lt;/i&gt; 1st bus departs from Stop 1 Circular Quay at 9.30am.\nFrequency every 30 minutes\nLast bus departs from stop 1 at 6.30pm&lt;/p&gt;',
      destinationId: 357,
      duration: '2 hours',
      essential: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      exclusions: ['Food and drinks', 'Admission'],
      highlights: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      hotelPickup: false,
      inclusions: [
        'Choice of 24 hour or 48 hour pass',
        'Pre-recorded commentary in English, French, Spanish, German, Italian, Mandarin, Japanese, Korean',
        'Free wifi onboard',
      ],
      itinerary: '',
      location: 'The Rocks, Australia',
      mapURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      maxTravellerCount: 9,
      merchantCancellable: true,
      merchantNetPriceFrom: 29.52,
      merchantNetPriceFromFormatted: '$29.52',
      merchantTermsAndConditions: {
        amountRefundable: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        cancellationFromTourDate: [
          {
            dayRangeMax: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            dayRangeMin: 1,
            percentageRefundable: 100,
            policyEndTimestamp: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            policyStartTimestamp: {
              $ref: '#/components/examples/product-example-1/value/data/pas',
            },
          },
          {
            dayRangeMax: 1,
            dayRangeMin: 0,
            percentageRefundable: 0,
            policyEndTimestamp: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            policyStartTimestamp: {
              $ref: '#/components/examples/product-example-1/value/data/pas',
            },
          },
        ],
        merchantTermsAndConditionsType: 1,
        termsAndConditions:
          'For a full refund, cancel at least 24 hours in advance of the start date of the experience.',
      },
      onRequestPeriod: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      onSale: false,
      operates: '&lt;p&gt;Daily&lt;/p&gt;',
      panoramaCount: 0,
      pas: null,
      passengerAttributes: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      photoCount: 124,
      price: 36.97,
      priceFormatted: '$36.97',
      primaryDestinationId: 357,
      primaryDestinationName: 'Sydney',
      primaryDestinationUrlName: 'Sydney',
      primaryGroupId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      productPhotos: [
        {
          caption: 'Selfies at Bondi Beach',
          path: 'attractions-splice-spp-674x446/09/c5/d3/87.jpg',
          photoURL:
            'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/c5/d3/87.jpg',
          supplier: 'SUPPLIER',
        },
        {
          caption: '',
          path: 'attractions-splice-spp-674x446/09/c5/d2/d1.jpg',
          photoURL:
            'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/c5/d2/d1.jpg',
          supplier: 'SUPPLIER',
        },
        {
          caption: '',
          path: 'attractions-splice-spp-674x446/07/94/40/f3.jpg',
          photoURL:
            'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/94/40/f3.jpg',
          supplier: 'SUPPLIER',
        },
        {
          caption: 'Sydney and Bondi Hop-On Hop-Off Tour',
          path: 'attractions-splice-spp-674x446/09/c5/d2/d4.jpg',
          photoURL:
            'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/c5/d2/d4.jpg',
          supplier: 'SUPPLIER',
        },
        {
          caption: 'Bondi Beach',
          path: 'attractions-splice-spp-674x446/09/c5/d2/c7.jpg',
          photoURL:
            'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/c5/d2/c7.jpg',
          supplier: 'SUPPLIER',
        },
        {
          caption: 'Visit icons',
          path: 'attractions-splice-spp-674x446/07/90/5a/68.jpg',
          photoURL:
            'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/90/5a/68.jpg',
          supplier: 'SUPPLIER',
        },
        {
          caption: 'Big Bus App provides live tracking',
          path: 'attractions-splice-spp-674x446/07/90/5a/6a.jpg',
          photoURL:
            'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/90/5a/6a.jpg',
          supplier: 'SUPPLIER',
        },
        {
          caption: 'The Rocks',
          path: 'attractions-splice-spp-674x446/07/90/5a/7d.jpg',
          photoURL:
            'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/90/5a/7d.jpg',
          supplier: 'SUPPLIER',
        },
      ],
      productUrlName: 'Sydney-and-Bondi-Hop-on-Hop-off-Tour',
      rating: 4.5,
      ratingCounts: { '1': 38, '2': 99, '3': 198, '4': 500, '5': 770 },
      region: 'New South Wales',
      returnDetails: 'You may disembark at any of the available stops.',
      reviewCount: 1605,
      reviews: [
        {
          ownerAvatarURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          ownerCountry: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          ownerId: 32351278,
          ownerName: 'esperanza h',
          productCode: '5010SYDNEY',
          productTitle: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
          productUrlName: 'Sydney-and-Bondi-Hop-on-Hop-off-Tour',
          publishedDate: '2020-01-16',
          rating: 5,
          review:
            '&lt;p&gt;Excellent way of visiting the city! It’s the only way to see atttactions in Sydney as I only have three days to stay . The next day I went back to Bondi beach to spend half of my day for the birthday of my son. Went to Iceberg Club overlooking the beach with surfers. It’s the best view you can get while having lunch! Walked along the coast to enjoy the magnificent view. I plan to go back again to this beautiful city. Spent sometime at the opera house area where there’s plenty of nice cafes to eat while admiring the view!&lt;/p&gt;',
          reviewId: 67907371,
          sortOrder: 1,
          sslSupported: false,
          submissionDate: '2020-01-16',
          viatorFeedback: '',
          viatorNotes: '',
        },
        {
          ownerAvatarURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/f5/tomzak21-account_47925237-45sq.jpg',
          ownerCountry: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          ownerId: 47925237,
          ownerName: 'tomzak21',
          productCode: '5010SYDNEY',
          productTitle: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
          productUrlName: 'Sydney-and-Bondi-Hop-on-Hop-off-Tour',
          publishedDate: '2020-01-09',
          rating: 5,
          review:
            "&lt;p&gt;Love The Big Bus, Hop On / Hop Off Tour Company! This is the way to see just about all the key areas and tourist attractions. You don't have to rent a car and they are actually comfortable. We also did a Hop On, Hop Off in Budapest, Hungary and that was great also, saw all the major attractions!&lt;/p&gt;\n\n&lt;p&gt;  They provide you with earbuds and there are 6+ languages that you can choose. Being in Sydney, there was Chinese, Korean, Japanese, along with French, Spanish, English and I believe German.&lt;/p&gt;\n\n&lt;p&gt;  There is also a \"package deal\" in which you can purchase a pass to other attractions along the route.. like Wildlife Sydney Zoo, Madame Tussaud's, Sydney Eye. You can buy a 2, 3 or 4 attraction pass in which The Big Bus is one of the attractions.&lt;/p&gt;\n\n&lt;p&gt;  Love The Big Bus! If you want a quick tour or spend a couples days of exploring, this is the way to go!&lt;/p&gt;\n\n&lt;p&gt;  Only complaint... the drop off  and  pick up spots could be better labeled. They should put there logo on a sign and make it noticeable. Some stops had some kind of sign, but there were a few stops that we weren't sure we were in the right spot. It wound up that we were in the correct spot. Addresses are listed in the provided  in the pamphlet / flyer provided.&lt;/p&gt;",
          reviewId: 67480203,
          sortOrder: 2,
          sslSupported: false,
          submissionDate: '2020-01-09',
          viatorFeedback: '',
          viatorNotes: '',
        },
      ],
      rrp: 0,
      rrpformatted: '',
      salesPoints: [],
      savingAmount: 0,
      savingAmountFormated: '',
      shortDescription:
        "Explore Sydney and Bondi Beach on this hop-on hop-off sightseeing tour, which takes you by double-decker bus to 34 stops around the city including Sydney Opera House, Sydney Harbour Bridge, Darling Harbour, Bondi Beach and more. Enjoy unobstructed views and recorded commentary on board. Simply hop off to walk around and sightsee in depth. Your ticket is valid for 24 or 48 hours, so you can experience Sydney and Bondi's most noteworthy attractions, sights, and shopping and dining areas at your own pace.",
      shortTitle: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
      specialOffer: '',
      specialOfferAvailable: false,
      specialReservation: false,
      specialReservationDetails: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      sslSupported: false,
      subCatIds: [97, 98, 5330, 26963, 32024, 45],
      supplierCode: '5010',
      supplierName: 'Big Bus Tours',
      termsAndConditions: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      thumbnailHiResURL:
        'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/94/40/f3.jpg',
      thumbnailURL:
        'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/94/40/f3.jpg',
      title: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
      tourGrades: [
        {
          currencyCode: 'USD',
          defaultLanguageCode: 'en',
          gradeCode: '24HOUR',
          gradeDepartureTime: '',
          gradeDescription:
            'Unlimited use on Big Bus Sydney &amp; Bondi Hop-on Hop-off Tour for 24 hours from time of first use',
          gradeTitle: '24 Hour Classic Ticket ',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'zh/SERVICE_AUDIO': 'Chinese - Audio',
          },
          merchantNetPriceFrom: 29.52,
          merchantNetPriceFromFormatted: '$29.52',
          priceFrom: 36.97,
          priceFromFormatted: '$36.97',
          sortOrder: 1,
        },
        {
          currencyCode: 'USD',
          defaultLanguageCode: 'en',
          gradeCode: '48HOUR',
          gradeDepartureTime: '',
          gradeDescription:
            '48 Hour Premium Ticket: Unlimited use on Big Bus Sydney &amp; Bondi Tour for 48 hours from time of first use PLUS a guided walking tour of The Rocks, Syd',
          gradeTitle: '48 Hour Premium Ticket ',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'zh/SERVICE_AUDIO': 'Chinese - Audio',
          },
          merchantNetPriceFrom: 39.53,
          merchantNetPriceFromFormatted: '$39.53',
          priceFrom: 49.5,
          priceFromFormatted: '$49.50',
          sortOrder: 2,
        },
        {
          currencyCode: 'USD',
          defaultLanguageCode: 'en',
          gradeCode: 'DELUXE',
          gradeDepartureTime: '',
          gradeDescription:
            'Big Bus and Habour Cruise: Combine two great Sydney experiences into one with a hop-on hop off Big Bus Tours and a hop-on hop-off Sydney Harbour cruise &lt;br/&gt;Duration: 2 days: SPECIAL OFFER: EXTRA FREE DAY when you purchase a Deluxe ticket - have 3 days to explore Sydney not 2. Limited time only.\n&lt;br/&gt;Complimentary Walking Tour: Complimentary English-speaking 90-minute guided walking tour of “The Rocks” historic and harbourside precinct.',
          gradeTitle: '48 Hour Deluxe Bus and Cruise',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'zh/SERVICE_AUDIO': 'Chinese - Audio',
          },
          merchantNetPriceFrom: 55.05,
          merchantNetPriceFromFormatted: '$55.05',
          priceFrom: 68.93,
          priceFromFormatted: '$68.93',
          sortOrder: 3,
        },
        {
          currencyCode: 'USD',
          defaultLanguageCode: 'en',
          gradeCode: 'TG1',
          gradeDepartureTime: '',
          gradeDescription:
            'Hop-on Hop-Off and Attractions: 48hr Big Bus Tours, 1-day Hop-On Hop-Off Harbour Cruise, 4 Attractions: Tower Eye, Madame Tussauds, Wildlife Zoo, Aquarium&lt;br/&gt;Duration: 2 days: SPECIAL OFFER: EXTRA FREE DAY when you purchase a Deluxe ticket - have 3 days to explore Sydney not 2. Limited time only.\n&lt;br/&gt;Complimentary Walking Tours: Complimentary English-speaking guided walking tour of “The Rocks” historic and harbourside precinct.',
          gradeTitle: '48Hour Deluxe PLUS Attractions',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'zh/SERVICE_AUDIO': 'Chinese - Audio',
          },
          merchantNetPriceFrom: 71.74,
          merchantNetPriceFromFormatted: '$71.74',
          priceFrom: 89.81,
          priceFromFormatted: '$89.81',
          sortOrder: 4,
        },
      ],
      tourGradesAvailable: true,
      translationLevel: 0,
      userPhotos: [
        {
          caption: '&lt;p&gt;Carl and Karen meeting a new friend at the Wildlife park.&lt;/p&gt;',
          editorsPick: true,
          ownerAvatarURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          ownerCountry: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          ownerId: 1755909,
          ownerName: 'Husker1k',
          photoHiResURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/e4/dsc00471-photo_1909732-1536tall.jpg',
          photoId: 1909732,
          photoMediumResURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/e4/dsc00471-photo_1909732-260tall.jpg',
          photoURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/e4/dsc00471-photo_1909732-770tall.jpg',
          productCode: '5010SYDNEY',
          productTitle: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
          productUrlName: 'Sydney-and-Bondi-Hop-on-Hop-off-Tour',
          sortOrder: 1,
          sslSupported: false,
          thumbnailURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/e4/dsc00471-photo_1909732-133sq.jpg',
          timeUploaded: '2012-02-07',
          title: 'DSC00471',
        },
        {
          caption: 'Sydney Opera House',
          editorsPick: true,
          ownerAvatarURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          ownerCountry: 'Australia',
          ownerId: 288013,
          ownerName: 'Kylie G',
          photoHiResURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/f2/sydney-opera-house-photo_997106-1536tall.jpg',
          photoId: 997106,
          photoMediumResURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/f2/sydney-opera-house-photo_997106-260tall.jpg',
          photoURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/f2/sydney-opera-house-photo_997106-770tall.jpg',
          productCode: '5010SYDNEY',
          productTitle: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
          productUrlName: 'Sydney-and-Bondi-Hop-on-Hop-off-Tour',
          sortOrder: 2,
          sslSupported: false,
          thumbnailURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/f2/sydney-opera-house-photo_997106-133sq.jpg',
          timeUploaded: '2009-07-22',
          title: 'Sydney Opera House',
        },
      ],
      videoCount: 1,
      videos: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      voucherOption: 'VOUCHER_E',
      voucherRequirements:
        'You can present either a paper or an electronic voucher for this activity.',
      webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    },
    dateStamp: '2020-02-06T18:15:04+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331001',
  },
}

const ProductExample_2Example = {
  summary: '2280AAHT',
  value: {
    data: {
      additionalInfo: [
        'Confirmation will be received at time of booking, unless booked within 30 days of travel. In this case confirmation will be received within 48 hours, subject to availability',
        'Tours require a minimum number of passengers to operate',
        'Due to comfort, weight and balance of the aircraft, the maximum weight per passenger to ride in an A-Star helicopter is 275lbs (125kg / 19.6st). If passengers weigh in between 275lbs and 300lbs (136kg/21.4st), you will be required to upgrade to the EC-130.',
        'Any passenger over 300lbs will be required to purchase an additional seat. This is payable directly to the tour operator on the day of the tour.',
        'Individual passenger weights, including infants, MUST be advised at time of booking',
        'Collapsible wheelchairs with removable wheels may be accommodated provided the passenger is accompanied by someone who can assist them with boarding and disembarking the aircraft',
        'Infant children are considered a lap child if they are under the age of two and have proof of age, such as a passport or a copy of their birth certificate',
        'Veggie options are available. Please note this request in the special requirement field at check out.',
        'Please note: Seats are determined by passengers weights and front seats cannot be guaranteed at any time.',
        'Wheelchair accessible',
        'Service animals allowed',
        'Infants must sit on laps',
        'Infant seats available',
        'Transportation is wheelchair accessible',
        'Most travelers can participate',
        'This experience requires good weather. If it’s canceled due to poor weather, you’ll be offered a different date or a full refund',
        'This experience requires a minimum number of travelers. If it’s canceled because the minimum isn’t met, you’ll be offered a different date/experience or a full refund',
      ],
      admission: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      ageBands: [
        {
          adult: true,
          ageFrom: 2,
          ageTo: 99,
          bandId: 1,
          count: 0,
          description: 'Adult',
          pluralDescription: 'Adults',
          sortOrder: 1,
          treatAsAdult: true,
        },
        {
          adult: false,
          ageFrom: 0,
          ageTo: 1,
          bandId: 3,
          count: 0,
          description: 'Infant',
          pluralDescription: 'Infants',
          sortOrder: 2,
          treatAsAdult: false,
        },
      ],
      allTravellerNamesRequired: true,
      applePassSupported: true,
      available: true,
      bookingEngineId: 'FreesaleOnRequestBE',
      bookingQuestions: [
        {
          message:
            'For safety reasons you must enter the weight of all passengers. Please indicate pounds or kilos.',
          questionId: 23,
          required: true,
          sortOrder: 1,
          stringQuestionId: 'weights_passengerWeights',
          subTitle: '(e.g. 127 pounds, 145 kilos, etc)',
          title: 'Passenger Weights',
        },
      ],
      catIds: [1, 25, 12],
      city: 'Las Vegas',
      code: '2280AAHT',
      country: 'United States',
      currencyCode: 'EUR',
      departurePoint: 'Traveler pickup is offered&lt;br&gt;&lt;br&gt;',
      departureTime: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      departureTimeComments: '',
      description:
        "&lt;b&gt;Itinerary&lt;/b&gt;&lt;br&gt;This is a typical itinerary for this product&lt;br&gt;&lt;br&gt;&lt;b&gt;Pass By:&lt;/b&gt; Lake Mead National Recreation Area, 10 Lakeshore Rd, NV 89005&lt;br&gt;&lt;br&gt;This tour is likely to sell-out! The Grand Canyon All-American Helicopter Tour regularly sells out weeks in advance, so book ahead to avoid disappointment!&lt;br&gt;&lt;br&gt;During the flight, you can listen to a recorded commentary about the Grand Canyon and its surrounds via audio headphones. You'll discover the natural beauty of the Grand Canyon as your air-conditioned helicopter flies to the West Rim, passing over Lake Las Vegas, Lake Mead and the Hoover Dam en route. &lt;br&gt;&lt;br&gt;&lt;b&gt;Pass By:&lt;/b&gt; Hoover Dam Access Road, Boulder City, NV 89109&lt;br&gt;&lt;br&gt;Hoover Dam is a spectacular sight from the air, curved between the rock canyon walls. &lt;br&gt;&lt;br&gt;&lt;b&gt;Pass By:&lt;/b&gt; Colorado River, Grand Canyon National Park, AZ&lt;br&gt;&lt;br&gt;As you enter the Grand Canyon, you'll soar over the mighty Colorado River. &lt;br&gt;&lt;br&gt;&lt;b&gt;Stop At:&lt;/b&gt; Grand Canyon West, AZ 86434, USA&lt;br&gt;&lt;br&gt;You'll land for an unforgettable experience, 3,200 feet (960 meters) below the rim. While you share a bottle of champagne under an authentic Native American Ramada shelter and a basket of snacks, your pilot/guide will be happy to answer any questions you may have about the canyon or your helicopter flight.&lt;br&gt;&lt;br&gt;Duration: 45 minutes&lt;br&gt;&lt;br&gt;&lt;b&gt;Pass By:&lt;/b&gt; The Strip, S Las Vegas Blvd, Las Vegas, NV 89109&lt;br&gt;&lt;br&gt;Your Grand Canyon helicopter scenic flight ends with a low-level pass over the west side of the famous Las Vegas Strip. On landing, your limousine is waiting to whisk you back to your hotel.&lt;br&gt;&lt;br&gt;",
      destinationId: 684,
      duration: '3 hours 30 minutes',
      essential: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      exclusions: ['Gratuities'],
      highlights: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      hotelPickup: true,
      inclusions: [
        '45-minute (approx.) flight each way (helicopter based on option selected)',
        'Hotel pickup and drop-off by limousine',
        'Snacks',
        'Glass of Champagne',
        'All taxes and fees',
      ],
      itinerary: '',
      location: 'Las Vegas, United States',
      mapURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      maxTravellerCount: 9,
      merchantCancellable: true,
      merchantNetPriceFrom: 351.9,
      merchantNetPriceFromFormatted: '€351,90',
      merchantTermsAndConditions: {
        amountRefundable: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        cancellationFromTourDate: [
          {
            dayRangeMax: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            dayRangeMin: 1,
            percentageRefundable: 100,
            policyEndTimestamp: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            policyStartTimestamp: {
              $ref: '#/components/examples/product-example-1/value/data/pas',
            },
          },
          {
            dayRangeMax: 1,
            dayRangeMin: 0,
            percentageRefundable: 0,
            policyEndTimestamp: { $ref: '#/components/examples/product-example-1/value/data/pas' },
            policyStartTimestamp: {
              $ref: '#/components/examples/product-example-1/value/data/pas',
            },
          },
        ],
        merchantTermsAndConditionsType: 1,
        termsAndConditions:
          'For a full refund, cancel at least 24 hours in advance of the start date of the experience.',
      },
      onRequestPeriod: 720,
      onSale: false,
      operates: 'Daily',
      panoramaCount: 0,
      pas: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      passengerAttributes: [
        {
          customAttribute_kg: 'kgs',
          customAttribute_lb: 'lbs',
          errorMissingMessage:
            'The weight entered is not valid. Please provide weight as a number (i.e. 95)',
          errorValidationMessage:
            'The weight entered is not valid. Please provide weight as a number (i.e. 95)',
          questionId: 'weights_passengerWeights',
          required: true,
          title: 'Weight',
          validateType: 'positiveInteger',
        },
      ],
      photoCount: 5,
      price: 376.3,
      priceFormatted: '€376,30',
      primaryDestinationId: 684,
      primaryDestinationName: 'Las Vegas',
      primaryDestinationUrlName: 'Las-Vegas',
      primaryGroupId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      productPhotos: [
        {
          caption: 'Grand Canyon All-American Helicopter Tour',
          path: 'attractions-splice-spp-674x446/07/38/cd/90.jpg',
          photoURL: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/38/cd/90.jpg',
          supplier: 'SUPPLIER',
        },
        {
          caption: '',
          path: 'attractions-splice-spp-674x446/07/90/58/3c.jpg',
          photoURL: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/90/58/3c.jpg',
          supplier: 'SUPPLIER',
        },
        {
          caption: '',
          path: 'attractions-splice-spp-674x446/07/90/58/3d.jpg',
          photoURL: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/90/58/3d.jpg',
          supplier: 'SUPPLIER',
        },
        {
          caption: '',
          path: 'attractions-splice-spp-674x446/07/1b/3e/94.jpg',
          photoURL: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/1b/3e/94.jpg',
          supplier: 'SUPPLIER',
        },
        {
          caption: '',
          path: 'attractions-splice-spp-674x446/07/90/58/21.jpg',
          photoURL: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/90/58/21.jpg',
          supplier: 'SUPPLIER',
        },
        {
          caption: 'Grand Canyon All-American Helicopter Tour',
          path: 'attractions-splice-spp-674x446/07/75/b2/fb.jpg',
          photoURL: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/75/b2/fb.jpg',
          supplier: 'SUPPLIER',
        },
      ],
      productUrlName: 'Grand-Canyon-All-American-Helicopter-Tour',
      rating: 5,
      ratingCounts: { '1': 41, '2': 78, '3': 131, '4': 883, '5': 5913 },
      region: 'Nevada',
      returnDetails: '',
      reviewCount: 7046,
      reviews: [
        {
          ownerAvatarURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/8e/meri-s-account_6638734-45sq.jpg',
          ownerCountry: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          ownerId: 6638734,
          ownerName: 'Meri S',
          productCode: '2280AAHT',
          productTitle: 'Grand Canyon All-American Helicopter Tour',
          productUrlName: 'Grand-Canyon-All-American-Helicopter-Tour',
          publishedDate: '2020-01-22',
          rating: 5,
          review:
            '&lt;p&gt;Wonderful trip!  The limo picked us up at the MGM and took us directly to the helipad.  We were a group of 6, and we had our own helicopter.  Our pilot was amazing, and the flight was breathtaking.  We had a great time!  Definitely worth the money!&lt;/p&gt;',
          reviewId: 68309931,
          sortOrder: 1,
          sslSupported: false,
          submissionDate: '2020-01-22',
          viatorFeedback: '',
          viatorNotes: '',
        },
        {
          ownerAvatarURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          ownerCountry: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          ownerId: 65594303,
          ownerName: 'June Ling C',
          productCode: '2280AAHT',
          productTitle: 'Grand Canyon All-American Helicopter Tour',
          productUrlName: 'Grand-Canyon-All-American-Helicopter-Tour',
          publishedDate: '2020-01-20',
          rating: 5,
          review:
            '&lt;p&gt;Best tour ever! our pilot Ryan explained as we fly across each location. We managed to took good view of Grand Canyon picture and the tour is worth to go .Never regret of booking this tour . I would recommend everyone to go if you have time in Vegas&lt;/p&gt;',
          reviewId: 68183211,
          sortOrder: 2,
          sslSupported: false,
          submissionDate: '2020-01-20',
          viatorFeedback: '',
          viatorNotes: '',
        },
      ],
      rrp: 0,
      rrpformatted: '',
      salesPoints: [],
      savingAmount: 0,
      savingAmountFormated: '',
      shortDescription:
        "Take off from McCarran Airport on an exhilarating helicopter flight to the Grand Canyon. You'll enjoy a 45-minute helicopter flight each way, land deep in the canyon for a glass of champagne and a basket of snacks then fly low over the famous Las Vegas Strip on your return. The Grand Canyon All American Helicopter Tour is a half-day tour, leaving you with time in the day free to explore Las Vegas and Nevada at your leisure.",
      shortTitle: 'Las Vegas to Grand Canyon Helicopter Tour with Champagne',
      specialOffer: '',
      specialOfferAvailable: false,
      specialReservation: false,
      specialReservationDetails: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      sslSupported: false,
      subCatIds: [113, 2, 98, 26963, 45, 94, 95],
      supplierCode: '2280',
      supplierName: 'Sundance Helicopters',
      termsAndConditions: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      thumbnailHiResURL:
        'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/38/cd/90.jpg',
      thumbnailURL:
        'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/38/cd/90.jpg',
      title: 'Grand Canyon All-American Helicopter Tour',
      tourGrades: [
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'EB_ASTAR_SP~06:45',
          gradeDepartureTime: '6:45 AM',
          gradeDescription:
            'Special Offer: Receive a discounted seat for the Grand Canyon All American Helicopter Tour departing between 6:45am and 7am on an A-Star helicopter',
          gradeTitle: 'Special: Earlybird A-Star 06:45',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 351.9,
          merchantNetPriceFromFormatted: '€351,90',
          priceFrom: 376.3,
          priceFromFormatted: '€376,30',
          sortOrder: 1,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'EB_ASTAR_SP~07:00',
          gradeDepartureTime: '7:00 AM',
          gradeDescription:
            'Special Offer: Receive a discounted seat for the Grand Canyon All American Helicopter Tour departing between 6:45am and 7am on an A-Star helicopter',
          gradeTitle: 'Special: Earlybird A-Star 07:00',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 351.9,
          merchantNetPriceFromFormatted: '€351,90',
          priceFrom: 376.3,
          priceFromFormatted: '€376,30',
          sortOrder: 2,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'EB_EC130_SP~06:45',
          gradeDepartureTime: '6:45 AM',
          gradeDescription:
            'Special Offer: Receive a discounted seat for the Grand Canyon All American Helicopter Tour departing between 6:45am and 7am on an EC-130',
          gradeTitle: 'Special: Earlybird EC-130 06:45',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 371.45,
          merchantNetPriceFromFormatted: '€371,45',
          priceFrom: 399.25,
          priceFromFormatted: '€399,25',
          sortOrder: 3,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'EB_EC130_SP~07:00',
          gradeDepartureTime: '7:00 AM',
          gradeDescription:
            'Special Offer: Receive a discounted seat for the Grand Canyon All American Helicopter Tour departing between 6:45am and 7am on an EC-130',
          gradeTitle: 'Special: Earlybird EC-130 07:00',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 371.45,
          merchantNetPriceFromFormatted: '€371,45',
          priceFrom: 399.25,
          priceFromFormatted: '€399,25',
          sortOrder: 4,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG1~08:00',
          gradeDepartureTime: '8:00 AM',
          gradeDescription:
            'Morning departure between 8am and 11:45am on an A-Star Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Morning Departure; A-Star 08:00',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 356.79,
          merchantNetPriceFromFormatted: '€356,79',
          priceFrom: 422.19,
          priceFromFormatted: '€422,19',
          sortOrder: 5,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG1~09:30',
          gradeDepartureTime: '9:30 AM',
          gradeDescription:
            'Morning departure between 8am and 11:45am on an A-Star Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Morning Departure; A-Star 09:30',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 356.79,
          merchantNetPriceFromFormatted: '€356,79',
          priceFrom: 422.19,
          priceFromFormatted: '€422,19',
          sortOrder: 6,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG1~09:45',
          gradeDepartureTime: '9:45 AM',
          gradeDescription:
            'Morning departure between 8am and 11:45am on an A-Star Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Morning Departure; A-Star 09:45',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 356.79,
          merchantNetPriceFromFormatted: '€356,79',
          priceFrom: 422.19,
          priceFromFormatted: '€422,19',
          sortOrder: 7,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG1~10:45',
          gradeDepartureTime: '10:45 AM',
          gradeDescription:
            'Morning departure between 8am and 11:45am on an A-Star Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Morning Departure; A-Star 10:45',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 356.79,
          merchantNetPriceFromFormatted: '€356,79',
          priceFrom: 422.19,
          priceFromFormatted: '€422,19',
          sortOrder: 8,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG2~08:00',
          gradeDepartureTime: '8:00 AM',
          gradeDescription:
            'Morning departure between 8am and 11:45am on an EC-130 Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Morning Departure; EC-130 08:00',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 376.34,
          merchantNetPriceFromFormatted: '€376,34',
          priceFrom: 445.14,
          priceFromFormatted: '€445,14',
          sortOrder: 9,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG2~09:30',
          gradeDepartureTime: '9:30 AM',
          gradeDescription:
            'Morning departure between 8am and 11:45am on an EC-130 Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Morning Departure; EC-130 09:30',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 376.34,
          merchantNetPriceFromFormatted: '€376,34',
          priceFrom: 445.14,
          priceFromFormatted: '€445,14',
          sortOrder: 10,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG2~09:45',
          gradeDepartureTime: '9:45 AM',
          gradeDescription:
            'Morning departure between 8am and 11:45am on an EC-130 Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Morning Departure; EC-130 09:45',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 376.34,
          merchantNetPriceFromFormatted: '€376,34',
          priceFrom: 445.14,
          priceFromFormatted: '€445,14',
          sortOrder: 11,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG2~10:45',
          gradeDepartureTime: '10:45 AM',
          gradeDescription:
            'Morning departure between 8am and 11:45am on an EC-130 Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Morning Departure; EC-130 10:45',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 376.34,
          merchantNetPriceFromFormatted: '€376,34',
          priceFrom: 445.14,
          priceFromFormatted: '€445,14',
          sortOrder: 12,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG3~12:15',
          gradeDepartureTime: '12:15 PM',
          gradeDescription:
            'Afternoon departure between 12pm and 4:15pm on an A-Star Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Afternoon Departure; A-Star 12:15',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 351.9,
          merchantNetPriceFromFormatted: '€351,90',
          priceFrom: 413.02,
          priceFromFormatted: '€413,02',
          sortOrder: 13,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG3~12:30',
          gradeDepartureTime: '12:30 PM',
          gradeDescription:
            'Afternoon departure between 12pm and 4:15pm on an A-Star Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Afternoon Departure; A-Star 12:30',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 351.9,
          merchantNetPriceFromFormatted: '€351,90',
          priceFrom: 413.02,
          priceFromFormatted: '€413,02',
          sortOrder: 14,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG3~13:30',
          gradeDepartureTime: '1:30 PM',
          gradeDescription:
            'Afternoon departure between 12pm and 4:15pm on an A-Star Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Afternoon Departure; A-Star 13:30',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 351.9,
          merchantNetPriceFromFormatted: '€351,90',
          priceFrom: 413.02,
          priceFromFormatted: '€413,02',
          sortOrder: 15,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG3~15:00',
          gradeDepartureTime: '3:00 PM',
          gradeDescription:
            'Afternoon departure between 12pm and 4:15pm on an A-Star Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Afternoon Departure; A-Star 15:00',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 351.9,
          merchantNetPriceFromFormatted: '€351,90',
          priceFrom: 413.02,
          priceFromFormatted: '€413,02',
          sortOrder: 16,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG3~15:15',
          gradeDepartureTime: '3:15 PM',
          gradeDescription:
            'Afternoon departure between 12pm and 4:15pm on an A-Star Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Afternoon Departure; A-Star 15:15',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 351.9,
          merchantNetPriceFromFormatted: '€351,90',
          priceFrom: 413.02,
          priceFromFormatted: '€413,02',
          sortOrder: 17,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG3~16:15',
          gradeDepartureTime: '4:15 PM',
          gradeDescription:
            'Afternoon departure between 12pm and 4:15pm on an A-Star Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Afternoon Departure; A-Star 16:15',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 351.9,
          merchantNetPriceFromFormatted: '€351,90',
          priceFrom: 413.02,
          priceFromFormatted: '€413,02',
          sortOrder: 18,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG4~12:15',
          gradeDepartureTime: '12:15 PM',
          gradeDescription:
            'Afternoon departure between 12pm and 4:15pm on an EC-130 Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Afternoon Departure; EC-130 12:15',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 371.45,
          merchantNetPriceFromFormatted: '€371,45',
          priceFrom: 435.96,
          priceFromFormatted: '€435,96',
          sortOrder: 19,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG4~12:30',
          gradeDepartureTime: '12:30 PM',
          gradeDescription:
            'Afternoon departure between 12pm and 4:15pm on an EC-130 Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Afternoon Departure; EC-130 12:30',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 371.45,
          merchantNetPriceFromFormatted: '€371,45',
          priceFrom: 435.96,
          priceFromFormatted: '€435,96',
          sortOrder: 20,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG4~13:30',
          gradeDepartureTime: '1:30 PM',
          gradeDescription:
            'Afternoon departure between 12pm and 4:15pm on an EC-130 Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Afternoon Departure; EC-130 13:30',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 371.45,
          merchantNetPriceFromFormatted: '€371,45',
          priceFrom: 435.96,
          priceFromFormatted: '€435,96',
          sortOrder: 21,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG4~15:00',
          gradeDepartureTime: '3:00 PM',
          gradeDescription:
            'Afternoon departure between 12pm and 4:15pm on an EC-130 Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Afternoon Departure; EC-130 15:00',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 371.45,
          merchantNetPriceFromFormatted: '€371,45',
          priceFrom: 435.96,
          priceFromFormatted: '€435,96',
          sortOrder: 22,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG4~15:15',
          gradeDepartureTime: '3:15 PM',
          gradeDescription:
            'Afternoon departure between 12pm and 4:15pm on an EC-130 Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Afternoon Departure; EC-130 15:15',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 371.45,
          merchantNetPriceFromFormatted: '€371,45',
          priceFrom: 435.96,
          priceFromFormatted: '€435,96',
          sortOrder: 23,
        },
        {
          currencyCode: 'EUR',
          defaultLanguageCode: 'en',
          gradeCode: 'TG4~16:15',
          gradeDepartureTime: '4:15 PM',
          gradeDescription:
            'Afternoon departure between 12pm and 4:15pm on an EC-130 Helicopter for the All American Helicopter Tour',
          gradeTitle: 'Afternoon Departure; EC-130 16:15',
          langServices: {
            'de/SERVICE_AUDIO': 'German - Audio',
            'en/SERVICE_AUDIO': 'English - Audio',
            'es/SERVICE_AUDIO': 'Spanish - Audio',
            'fr/SERVICE_AUDIO': 'French - Audio',
            'it/SERVICE_AUDIO': 'Italian - Audio',
            'ja/SERVICE_AUDIO': 'Japanese - Audio',
            'ko/SERVICE_AUDIO': 'Korean - Audio',
            'pt/SERVICE_AUDIO': 'Portuguese - Audio',
            'ru/SERVICE_AUDIO': 'Russian - Audio',
            'tw/SERVICE_AUDIO': 'Chinese (Traditional) - Audio',
          },
          merchantNetPriceFrom: 371.45,
          merchantNetPriceFromFormatted: '€371,45',
          priceFrom: 435.96,
          priceFromFormatted: '€435,96',
          sortOrder: 24,
        },
      ],
      tourGradesAvailable: true,
      translationLevel: 0,
      userPhotos: [
        {
          caption: 'Grand Canyon All-American Helicopter Tour',
          editorsPick: false,
          ownerAvatarURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/09/viator-insider-account_9179657-45sq.jpg',
          ownerCountry: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          ownerId: 9179657,
          ownerName: 'Viator Insider',
          photoHiResURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/01/img_4048-jpg-photo_30186497-1536tall.jpg',
          photoId: 30186497,
          photoMediumResURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/01/img_4048-jpg-photo_30186497-260tall.jpg',
          photoURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/01/img_4048-jpg-photo_30186497-770tall.jpg',
          productCode: '2280AAHT',
          productTitle: 'Grand Canyon All-American Helicopter Tour',
          productUrlName: 'Grand-Canyon-All-American-Helicopter-Tour',
          sortOrder: 1,
          sslSupported: false,
          thumbnailURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/01/img_4048-jpg-photo_30186497-133sq.jpg',
          timeUploaded: '2018-01-26',
          title: 'IMG_4048.jpg',
        },
        {
          caption: 'Grand Canyon All-American Helicopter Tour',
          editorsPick: false,
          ownerAvatarURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/09/viator-insider-account_9179657-45sq.jpg',
          ownerCountry: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          ownerId: 9179657,
          ownerName: 'Viator Insider',
          photoHiResURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/f5/img_4102-jpg-photo_30186485-1536tall.jpg',
          photoId: 30186485,
          photoMediumResURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/f5/img_4102-jpg-photo_30186485-260tall.jpg',
          photoURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/f5/img_4102-jpg-photo_30186485-770tall.jpg',
          productCode: '2280AAHT',
          productTitle: 'Grand Canyon All-American Helicopter Tour',
          productUrlName: 'Grand-Canyon-All-American-Helicopter-Tour',
          sortOrder: 2,
          sslSupported: false,
          thumbnailURL:
            'http://cache-graphicslib.viator.com/graphicslib/media/f5/img_4102-jpg-photo_30186485-133sq.jpg',
          timeUploaded: '2018-01-26',
          title: 'IMG_4102.jpg',
        },
      ],
      videoCount: 1,
      videos: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      voucherOption: 'VOUCHER_E',
      voucherRequirements:
        'You can present either a paper or an electronic voucher for this activity.',
      webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    },
    dateStamp: '2020-02-06T18:19:27+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331003',
  },
}

const ProductPhotosExampleExample = {
  summary: 'product photos example',
  value: {
    data: [
      {
        caption: '&lt;p&gt;Carl and Karen meeting a new friend at the Wildlife park.&lt;/p&gt;',
        editorsPick: true,
        ownerAvatarURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        ownerCountry: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        ownerId: 1755909,
        ownerName: 'Husker1k',
        photoHiResURL:
          'http://cache-graphicslib.viator.com/graphicslib/media/e4/dsc00471-photo_1909732-1536tall.jpg',
        photoId: 1909732,
        photoMediumResURL:
          'http://cache-graphicslib.viator.com/graphicslib/media/e4/dsc00471-photo_1909732-260tall.jpg',
        photoURL:
          'http://cache-graphicslib.viator.com/graphicslib/media/e4/dsc00471-photo_1909732-770tall.jpg',
        productCode: '5010SYDNEY',
        productTitle: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
        productUrlName: 'Sydney-and-Bondi-Hop-on-Hop-off-Tour',
        sortOrder: 1,
        sslSupported: false,
        thumbnailURL:
          'http://cache-graphicslib.viator.com/graphicslib/media/e4/dsc00471-photo_1909732-133sq.jpg',
        timeUploaded: '2012-02-07',
        title: 'DSC00471',
      },
      {
        caption: 'Sydney Opera House',
        editorsPick: true,
        ownerAvatarURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        ownerCountry: 'Australia',
        ownerId: 288013,
        ownerName: 'Kylie G',
        photoHiResURL:
          'http://cache-graphicslib.viator.com/graphicslib/media/f2/sydney-opera-house-photo_997106-1536tall.jpg',
        photoId: 997106,
        photoMediumResURL:
          'http://cache-graphicslib.viator.com/graphicslib/media/f2/sydney-opera-house-photo_997106-260tall.jpg',
        photoURL:
          'http://cache-graphicslib.viator.com/graphicslib/media/f2/sydney-opera-house-photo_997106-770tall.jpg',
        productCode: '5010SYDNEY',
        productTitle: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
        productUrlName: 'Sydney-and-Bondi-Hop-on-Hop-off-Tour',
        sortOrder: 2,
        sslSupported: false,
        thumbnailURL:
          'http://cache-graphicslib.viator.com/graphicslib/media/f2/sydney-opera-house-photo_997106-133sq.jpg',
        timeUploaded: '2009-07-22',
        title: 'Sydney Opera House',
      },
      {
        caption: '&lt;p&gt;This was taken from a water taxi&lt;/p&gt;',
        editorsPick: false,
        ownerAvatarURL:
          'http://cache-graphicslib.viator.com/graphicslib/media/d7/sheila-t-account_1327319-45sq.jpg',
        ownerCountry: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        ownerId: 1327319,
        ownerName: 'Sheila T',
        photoHiResURL:
          'http://cache-graphicslib.viator.com/graphicslib/media/8a/-photo_31376266-1536tall.jpg',
        photoId: 31376266,
        photoMediumResURL:
          'http://cache-graphicslib.viator.com/graphicslib/media/8a/-photo_31376266-260tall.jpg',
        photoURL:
          'http://cache-graphicslib.viator.com/graphicslib/media/8a/-photo_31376266-770tall.jpg',
        productCode: '5010SYDNEY',
        productTitle: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
        productUrlName: 'Sydney-and-Bondi-Hop-on-Hop-off-Tour',
        sortOrder: 3,
        sslSupported: false,
        thumbnailURL:
          'http://cache-graphicslib.viator.com/graphicslib/media/8a/-photo_31376266-133sq.jpg',
        timeUploaded: '2018-03-28',
        title: '',
      },
    ],
    dateStamp: '2020-02-10T15:32:59+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 118,
    vmid: '331001',
  },
}

const ProductReviewsExampleExample = {
  summary: 'product reviews example',
  value: {
    data: [
      {
        ownerAvatarURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        ownerCountry: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        ownerId: 29510203,
        ownerName: 'Lauren',
        productCode: '5010SYDNEY',
        productTitle: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
        productUrlName: 'Sydney-and-Bondi-Hop-on-Hop-off-Tour',
        publishedDate: '2019-12-31',
        rating: 1,
        review:
          '&lt;p&gt;We did the hop on hop off bus for the second half of our day. The buses were supposed to stop running at 7:30 pm. At 6:58 our bus driver kicked everyone off the bus before the end time. We were almost 3 miles from our hotel. We all asked if we could get off at an actual stop which was 2 miles closer to our hotel and the driver said no. I want my money back because it was awful!!! I would give 0 stars if I could!&lt;/p&gt;',
        reviewId: 63679157,
        sortOrder: 1,
        sslSupported: false,
        submissionDate: '2019-11-04',
        viatorFeedback: '',
        viatorNotes: '',
      },
      {
        ownerAvatarURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        ownerCountry: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        ownerId: 30185188,
        ownerName: 'Robin R',
        productCode: '5010SYDNEY',
        productTitle: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
        productUrlName: 'Sydney-and-Bondi-Hop-on-Hop-off-Tour',
        publishedDate: '2018-05-09',
        rating: 1,
        review:
          '&lt;p&gt;The bus was so crowded people were standing in the aisle which made it very difficult to see the sights.  I got the last available seat which was facing backwards, so what little I could see, was of no value. The audio system was unusable because the sound quality was terrible. &lt;/p&gt;\n\n&lt;p&gt;When we finally got to Bondi Beach which was lovely, we opted to uber back to our hotel which was much more convenient, efficient and had unobstructed views.&lt;/p&gt;',
        reviewId: 32425348,
        sortOrder: 2,
        sslSupported: false,
        submissionDate: '2018-05-09',
        viatorFeedback: '',
        viatorNotes: '',
      },
      {
        ownerAvatarURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        ownerCountry: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        ownerId: 29062502,
        ownerName: 'Nancy S',
        productCode: '5010SYDNEY',
        productTitle: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
        productUrlName: 'Sydney-and-Bondi-Hop-on-Hop-off-Tour',
        publishedDate: '2018-03-26',
        rating: 1,
        review:
          '&lt;p&gt;There were not buses. At one stop we waited almost 30 minutes and then the bus was so crowded we had to stand. We had bought our tickets in advance to be sure to have a place on the bus but when we got on they were still selling tickets. Never again.&lt;/p&gt;',
        reviewId: 31322881,
        sortOrder: 3,
        sslSupported: false,
        submissionDate: '2018-03-26',
        viatorFeedback: '',
        viatorNotes: '',
      },
    ],
    dateStamp: '2020-02-09T19:05:03+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1561,
    vmid: '331004',
  },
}

const SearchFreetextExample_1Example = {
  summary: 'by attraction or recommendation',
  value: {
    data: [
      {
        data: {
          attractionCity: 'Peach Springs',
          attractionLatitude: 36.011871,
          attractionLongitude: -113.81094,
          attractionState: 'Arizona',
          attractionStreetAddress: 'Eagle Point Road',
          descriptionIntro: 'Grand Canyon Skywalk',
          descriptionText:
            'The Grand Canyon Skywalk is a glass, 70-foot long, open-air bridge suspended 4,000 feet above the canyon floor, providing 720-degree views. The Skywalk is operated by the Hualapai Tribe, which owns and protects more than one million acres of land throughout the Grand Canyon’s western rim. Even with its remote location some 120 miles from Las Vegas, you can easily experience the Grand Canyon Skywalk on a day trip or overnight excursion to the West Rim.',
          destinationId: 684,
          editorsPick: false,
          keywordCount: 0,
          keywords: [],
          overviewSummary:
            '&lt;div style=""&gt;There’s no doubt that 4,000 feet (1,220 meters) is a long way down, especially when standing on a bridge made of glass—and you’re looking down toward the Grand Canyon floor. That’s the experience visitors find at the Grand Canyon Skywalk, a horseshoe-shaped, glass-bottomed bridge that juts out 70 feet (20 meters) above one of America’s most scenic sites. Travelers who step out onto the bridge are rewarded with panoramic West Rim and Colorado River views that extend 720 degrees, wrapping around, below, and behind.&amp;nbsp;&lt;/div&gt;&lt;div style=""&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=""&gt;&lt;b&gt;The Basics&lt;/b&gt;&lt;/div&gt;&lt;div style=""&gt;Most tours to the Grand Canyon Skywalk begin in Las Vegas, where travelers head east to the Arizona desert by road, plane, or helicopter. A Skywalk ticket can be combined with a Hoover Dam trip or a scenic helicopter tour over the canyon, while other options include visits with Hualapai tribe members or a boat ride up the Colorado River. Those short on time can opt for a skip-the-line experience.&lt;/div&gt;&lt;div style=""&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=""&gt;&lt;b&gt;Things to Know Before You Go&lt;/b&gt;&lt;/div&gt;&lt;div style=""&gt;&lt;ul&gt;&lt;li&gt;The Skywalk is a must-visit for thrill-seekers.&lt;br&gt;&lt;/li&gt;&lt;li&gt;Cameras aren’t permitted on the Skywalk, but it is possible to purchase photos from Grand Canyon West’s professional photographers.&lt;br&gt;&lt;/li&gt;&lt;li&gt;Outside food and drink are not permitted within Grand Canyon West or on the Skywalk.&lt;br&gt;&lt;/li&gt;&lt;li&gt;Tours to the Skywalk can last upwards of nine hours depending on the option chosen.&lt;br&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;div style=""&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=""&gt;&lt;b&gt;How to Get There&lt;/b&gt;&lt;/div&gt;&lt;div style=""&gt;McCarran International Airport in Las Vegas is the nearest commercial airport to the Skywalk bridge, about two hours away by road. Because the Grand Canyon Skywalk is a part of Grand Canyon West—a remote and rugged section of canyon managed by the Hualapai—entry to the bridge can only be purchased as part of a package excursion. While many visitors come on a guided tour, it’s also possible to drive yourself to Grand Canyon West, then take the hop-on, hop-off shuttle to the Skywalk and other attractions.&lt;/div&gt;&lt;div style=""&gt;&lt;br&gt;&lt;/div&gt;&lt;div style=""&gt;&lt;b&gt;When to Get There&lt;/b&gt;&lt;/div&gt;&lt;div style=""&gt;Daytime temperatures at the Grand Canyon hover at or above 85°F (30­°C) in summer, making fall and spring much more appealing times to visit. The glass bridge tends to be busiest around midday, so plan to arrive in the morning or later in the afternoon to ensure you have more elbow room.&lt;/div&gt;&lt;div style=""&gt;&lt;b&gt;&lt;br&gt;&lt;/b&gt;&lt;/div&gt;&lt;div style=""&gt;&lt;b&gt;Other Activities at Grand Canyon West&lt;/b&gt;&lt;/div&gt;&lt;div style=""&gt;The Grand Canyon West complex lies outside the national park and is operated by the Hualapai tribe. In addition to the Skywalk, visitors can explore an American Indian village at Eagle Point, cruise along the Colorado River, hike to the ruins of an old guano mine, or even rent a rustic cabin at Hualapai Ranch.&lt;/div&gt;',
          pagePrimaryLanguage: 'en',
          pageTitle: 'Grand Canyon Skywalk',
          pageUrlName: 'Grand-Canyon-Skywalk',
          panoramaCount: 0,
          photoCount: 110,
          primaryDestinationId: 684,
          primaryDestinationName: 'Las Vegas',
          primaryDestinationUrlName: 'Las-Vegas',
          productCount: 10,
          publishedDate: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          rating: 4.5,
          reviewCount: 1695,
          seoId: 10,
          seoType: 'ATTRACTION',
          showPhotos: false,
          showReviews: false,
          sortOrder: 1,
          tabTitle: 'Grand Canyon Skywalk',
          thumbnailHiResURL:
            'http://cache-graphicslib.viator.com/graphicslib/page-images/742x525/100565_Las%20Vegas_Grand%20Canyon%20Skywalk_d684-224.jpg',
          thumbnailURL:
            'http://cache-graphicslib.viator.com/graphicslib/page-images/100565_Las%20Vegas_Grand%20Canyon%20Skywalk_d684-224.jpg',
          title: 'Grand Canyon Skywalk',
          userName: '',
          webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        searchType: 'ATTRACTION',
        sortOrder: 1,
      },
      {
        data: {
          attractionCity: 'Grand Canyon National Park',
          attractionLatitude: 36.059053,
          attractionLongitude: -112.12825,
          attractionState: 'Arizona',
          attractionStreetAddress: '',
          descriptionIntro: 'Grand Canyon South Rim\n',
          descriptionText:
            "&lt;p&gt;Of the two major rims of the Grand Canyon, many visitors choose the South Rim, which boasts easy access, the bulk of services, and the panoramic vistas for which the park is famous. Every summer, visitors throng the park's most popular rim, mainly to ogle its easily accessible dramatic, sweeping canyon views.&lt;/p&gt;&lt;p&gt;\n\nBut the Grand Canyon South Rim is more then those spectacular canyon views. The first stop for many is Grand Canyon Village, which is filled with many historic buildings. Other historic highlights in the South Rim is Desert View Watchtower, which has one of the few views of the bottom of the Canyon and the Colorado River; Grand Canyon Railway Depot, built in 1909; and Bright Angel Lodge, a rustic lodge built of logs and stones.&lt;/p&gt;&lt;p&gt;\n\nFor hikers, the Grand Canyon South Rim is where you'll find Bright Angel Trail, Rim Trail, and South Kaibab Trail - all of which offer the most dazzling views of the Grand Canyon.&lt;/p&gt;",
          destinationId: 684,
          editorsPick: true,
          keywordCount: 0,
          keywords: [],
          overviewSummary:
            "The South Rim is the most popular area of Grand Canyon National Park, boasting easy access to the canyon, the bulk of available amenities and services, and the panoramic vistas for which the natural wonder is famous. One of the most famous attractions in the American Southwest, the area offers breathtaking views over the Colorado River and the chance to immerse yourself in Native American culture.&lt;div&gt;&lt;br&gt;&lt;b&gt;The Basics&lt;br&gt;&lt;/b&gt;The South Rim of the Grand Canyon averages 7,000 feet (2,134 meters) above sea level, with natural wonders including Navajo Point, Hermit Road, and the Abyss. Grand Canyon Village is home to a variety of historic buildings, while other popular stops include the Grand Canyon Railway Depot, the Bright Angel Lodge, Kolb Studio, and the Desert View Watchtower, which features work by Hopi artists and incorporates Native American art and design.&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Choosing a group bus tour, helicopter tour, air tour, or a self-drive tour makes the South Rim conveniently accessible from Las Vegas. Tours also leave from Sedona and Phoenix, and some combine the trip with a visit to the West Rim, the North Rim, or the Hoover Dam. A Grand Canyon helicopter tour is undoubtedly the fastest and most dramatic way to visit the canyon from Vegas.&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;b&gt;Things to Know Before You Go&lt;/b&gt;&lt;br&gt;&lt;ul&gt;&lt;li&gt;The Canyon View Visitor Center, near the south entrance, stocks maps, books, and videos, while the Cameron Trading Post, outside the east entrance to the park, boasts a selection of souvenirs and supplies.&lt;br&gt;&lt;/li&gt;&lt;li&gt;Stop by the Hopi House Gift Store and Art Gallery to see art and crafts from the local tribes.&lt;br&gt;&lt;/li&gt;&lt;li&gt;If driving, be sure you have plenty of gas in your car before setting out for the canyon; there are few service stations in this remote part of Arizona.&lt;br&gt;&lt;/li&gt;&lt;/ul&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;b&gt;How to Get There&lt;br&gt;&lt;/b&gt;Located in the Arizona national park, the South Rim is a three-hour drive from Las Vegas or a short plane ride via Grand Canyon Airport. Driving from Flagstaff, take US 180 directly to the South Rim or US 89 to Arizona 64 and the east entrance to the park.&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;b&gt;When to Get There&lt;br&gt;&lt;/b&gt;The South Rim gets quite crowded with visitors in the summertime. Consider visiting in the shoulder season, or booking a South Rim bus or jeep tour so you don't have to struggle with traffic and parking.&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;b&gt;Hiking the Grand Canyon South Rim&lt;/b&gt;&lt;/div&gt;&lt;div&gt;The Grand Canyon South Rim is home to the Bright Angel Trail, Rim Trail, and South Kaibab Trail—all of which offer the most dazzling views of the canyon. Keep your eyes open for the regal California condors, which have recently returned to the area.&lt;/div&gt;",
          pagePrimaryLanguage: 'en',
          pageTitle: 'Grand Canyon South Rim',
          pageUrlName: 'Grand-Canyon-South-Rim',
          panoramaCount: 0,
          photoCount: 54,
          primaryDestinationId: 684,
          primaryDestinationName: 'Las Vegas',
          primaryDestinationUrlName: 'Las-Vegas',
          productCount: 11,
          publishedDate: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          rating: 4,
          reviewCount: 32,
          seoId: 1249,
          seoType: 'ATTRACTION',
          showPhotos: false,
          showReviews: false,
          sortOrder: 2,
          tabTitle: 'Grand Canyon South',
          thumbnailHiResURL:
            'http://cache-graphicslib.viator.com/graphicslib/page-images/742x525/811289_grand-canyon-south-rim.jpg',
          thumbnailURL:
            'http://cache-graphicslib.viator.com/graphicslib/page-images/811289_grand-canyon-south-rim.jpg',
          title: 'Grand Canyon South Rim',
          userName: '',
          webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        searchType: 'ATTRACTION',
        sortOrder: 2,
      },
      {
        data: {
          attractionCity: '',
          attractionLatitude: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          attractionLongitude: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          attractionState: '',
          attractionStreetAddress: '',
          descriptionIntro: '',
          descriptionText: '',
          destinationId: 684,
          editorsPick: false,
          keywordCount: 0,
          keywords: [],
          overviewSummary:
            "&lt;div&gt;The Grand Canyon is an inspiring sight from any angle, but seeing it from the air is an unforgettable experience. With a helicopter tour from Las Vegas, you'll travel in style and enjoy incredible aerial views of the canyon. Here are your options.&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;b&gt;Highlights&lt;/b&gt;&lt;/div&gt;&lt;div&gt;&lt;ul&gt;&lt;li&gt;Skip the tour bus and reach the Grand Canyon in just 45 minutes on a helicopter ride from Las Vegas.&lt;/li&gt;&lt;li&gt;Catch views of the famous Las Vegas Strip from above on your way in and out of the city.&lt;/li&gt;&lt;li&gt;Take in the natural beauty of the Grand Canyon and the Colorado River through expansive helicopter windows.&lt;/li&gt;&lt;li&gt;Enjoy easy access to the sights of your choices, from scenic overlooks to the Grand Canyon Skywalk.&lt;br&gt;&lt;/li&gt;&lt;li&gt;Most tours also fly low over the Hoover Dam, affording more scenic views.&lt;/li&gt;&lt;/ul&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;b&gt;VIP &amp; Exclusive Tours&lt;/b&gt;&lt;/div&gt;&lt;div&gt;From pickup in a luxury vehicle to a multi-course gourmet meal in the canyon, VIP tours kick things up a notch. Choose a tour that pairs your helicopter ride with a below-the-rim landing, a seated meal, or a sunset champagne toast and picnic set at the canyon with table linens and fine china.&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;b&gt;Combo Tours&lt;/b&gt;&lt;/div&gt;&lt;div&gt;If you have extra time, add to your Grand Canyon helicopter experience with a boat trip on the Colorado River, a stroll out on the Grand Canyon Skywalk, or some free time for hiking and exploring the national park's West Rim.&lt;/div&gt;",
          pagePrimaryLanguage: 'en',
          pageTitle: 'Grand Canyon Helicopter Tours from Las Vegas',
          pageUrlName: 'Grand-Canyon-Helicopter-Tours-from-Las-Vegas',
          panoramaCount: 0,
          photoCount: 229,
          primaryDestinationId: 684,
          primaryDestinationName: 'Las Vegas',
          primaryDestinationUrlName: 'Las-Vegas',
          productCount: 6,
          publishedDate: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          rating: 4.5,
          reviewCount: 2652,
          seoId: 26043,
          seoType: 'RECOMMENDATION',
          showPhotos: false,
          showReviews: false,
          sortOrder: 3,
          tabTitle: '',
          thumbnailHiResURL:
            'http://cache-graphicslib.viator.com/graphicslib/page-images/742x525/668530_Viator_Photographer_392432.jpg',
          thumbnailURL:
            'http://cache-graphicslib.viator.com/graphicslib/page-images/668530_Viator_Photographer_392432.jpg',
          title: 'Grand Canyon Helicopter Tours from Las Vegas',
          userName: '',
          webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        searchType: 'RECOMMENDATION',
        sortOrder: 3,
      },
    ],
    dateStamp: '2021-02-01T18:35:40+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 54,
    vmid: '331004',
  },
}

const SearchFreetextExample_2Example = {
  summary: 'by product or destination',
  value: {
    data: [
      {
        data: {
          admission: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          available: true,
          bookingEngineId: 'FreesaleBE',
          catIds: [18],
          code: '2596GCWED',
          currencyCode: 'EUR',
          duration: '3 hours 30 minutes',
          essential: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          merchantCancellable: true,
          merchantNetPriceFrom: 1518.53,
          merchantNetPriceFromFormatted: '€1.518,53',
          onRequestPeriod: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          onSale: false,
          panoramaCount: 0,
          pas: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          photoCount: 5,
          price: 1828.02,
          priceFormatted: '€1.828,02',
          primaryDestinationId: 684,
          primaryDestinationName: 'Las Vegas',
          primaryDestinationUrlName: 'Las-Vegas',
          primaryGroupId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          productUrlName: 'Grand-Canyon-Helicopter-Wedding',
          rating: 5,
          reviewCount: 10,
          rrp: 0,
          rrpformatted: '',
          savingAmount: 0,
          savingAmountFormated: '',
          shortDescription:
            'Make your special day even more memorable! Say "I do" in the Grand Canyon and fly from Las Vegas in a six-seater helicopter. All the arrangements are made for you, and you can even have an Elvis or Johnny Cash impersonator perform the ceremony (additional cost).',
          shortTitle: 'Grand Canyon Helicopter Wedding',
          sortOrder: 1,
          specialOfferAvailable: false,
          specialReservation: false,
          specialReservationDetails: {
            $ref: '#/components/examples/product-example-1/value/data/pas',
          },
          sslSupported: false,
          subCatIds: [61, 62],
          supplierCode: '2596',
          supplierName: 'A Special Memory Wedding Chapel',
          thumbnailHiResURL:
            'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/a4/cf/24.jpg',
          thumbnailURL:
            'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/a4/cf/24.jpg',
          title: 'Grand Canyon Helicopter Wedding',
          translationLevel: 0,
          uniqueShortDescription: {
            $ref: '#/components/examples/product-example-1/value/data/pas',
          },
          videoCount: 0,
          webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        searchType: 'PRODUCT',
        sortOrder: 1,
      },
      {
        data: {
          admission: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          available: true,
          bookingEngineId: 'FreesaleBE',
          catIds: [16, 5, 9, 25, 12],
          code: '43493P1',
          currencyCode: 'EUR',
          duration: '15 hours',
          essential: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          merchantCancellable: true,
          merchantNetPriceFrom: 59.32,
          merchantNetPriceFromFormatted: '€59,32',
          onRequestPeriod: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          onSale: false,
          panoramaCount: 0,
          pas: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          photoCount: 0,
          price: 82.66,
          priceFormatted: '€82,66',
          primaryDestinationId: 684,
          primaryDestinationName: 'Las Vegas',
          primaryDestinationUrlName: 'Las-Vegas',
          primaryGroupId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          productUrlName: 'Grand-Canyon-South-Rim-Day-Tour-from-Las-Vegas',
          rating: 4.2,
          reviewCount: 32,
          rrp: 0,
          rrpformatted: '',
          savingAmount: 0,
          savingAmountFormated: '',
          shortDescription:
            "Journey to one of the Seven Wonders of the World on this day tour from Las Vegas. After hotel pick-up from most hotels on the Strip, you'll head out to the beautiful South Rim for 3 hours. Your guide will provide you with some suggested itineraries to help maximize your time here.AT THIS TIME, THE GRAND CANYON NATIONAL PARK HAS PLACED RESTRICTIONS ON GROUP TOURS TO THE SOUTH RIM DUE TO COVID19. THEY HAVE NOT SET A SPECIFIC DATE ON WHEN RESTRICTIONS WILL BE LIFTED; HOWEVER, WE ARE ACCEPTING RESERVATIONS GIVEN THE RESTRICTIONS CAN BE REMOVED AT ANY TIME. AS THE DAY OF YOUR TOUR ARRIVES, WE WILL CONTACT YOU TO INFORM YOU IF THE TOUR WILL BE OPERATING OR NOT. IF IT DOES NOT, WE CAN ISSUE YOU A FULL REFUND OR WE CAN OFFER YOU TO MOVE TO THE GRAND CANYON WEST RIM TOUR. THE WEST RIM IS CURRENTLY OPEN AND WE ARE OPERATING TOURS THERE ON A REGULAR BASIS.&lt;br&gt;",
          shortTitle: 'Grand Canyon South Rim Bus Tour',
          sortOrder: 2,
          specialOfferAvailable: false,
          specialReservation: false,
          specialReservationDetails: {
            $ref: '#/components/examples/product-example-1/value/data/pas',
          },
          sslSupported: false,
          subCatIds: [113, 98, 36, 56, 94, 15],
          supplierCode: '43493',
          supplierName: 'Sweetours',
          thumbnailHiResURL:
            'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/30/7e/e9.jpg',
          thumbnailURL:
            'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0b/30/7e/e9.jpg',
          title: 'Grand Canyon South Rim Bus Tour',
          translationLevel: 0,
          uniqueShortDescription: {
            $ref: '#/components/examples/product-example-1/value/data/pas',
          },
          videoCount: 0,
          webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        },
        searchType: 'PRODUCT',
        sortOrder: 2,
      },
      {
        data: {
          defaultCurrencyCode: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          destinationId: 23971,
          destinationName: 'Grand Baie',
          destinationType: 'CITY',
          destinationUrlName: 'Grand-Baie',
          iataCode: { $ref: '#/components/examples/product-example-1/value/data/pas' },
          latitude: -20.007281,
          longitude: 57.586106,
          lookupId: '1.4463.23971',
          parentId: 4463,
          selectable: true,
          sortOrder: 3,
          timeZone: 'Indian/Mauritius',
        },
        searchType: 'DESTINATION',
        sortOrder: 3,
      },
    ],
    dateStamp: '2021-02-01T18:35:40+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 54,
    vmid: '331004',
  },
}

const SearchProductsCodesExample_1Example = {
  summary: 'two valid products',
  value: {
    data: [
      {
        admission: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        available: true,
        bookingEngineId: 'UnconditionalBE',
        catIds: [6, 12],
        code: '5010SYDNEY',
        currencyCode: 'EUR',
        duration: '2 hours',
        essential: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        merchantCancellable: true,
        merchantNetPriceFrom: 26.64,
        merchantNetPriceFromFormatted: '€26,64',
        onRequestPeriod: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        onSale: false,
        panoramaCount: 0,
        pas: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        photoCount: 124,
        price: 33.35,
        priceFormatted: '€33,35',
        primaryDestinationId: 357,
        primaryDestinationName: 'Sydney',
        primaryDestinationUrlName: 'Sydney',
        primaryGroupId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        productUrlName: 'Sydney-and-Bondi-Hop-on-Hop-off-Tour',
        rating: 4.5,
        reviewCount: 1605,
        rrp: 0,
        rrpformatted: '',
        savingAmount: 0,
        savingAmountFormated: '',
        shortDescription:
          "Explore Sydney and Bondi Beach on this hop-on hop-off sightseeing tour, which takes you by double-decker bus to 34 stops around the city including Sydney Opera House, Sydney Harbour Bridge, Darling Harbour, Bondi Beach and more. Enjoy unobstructed views and recorded commentary on board. Simply hop off to walk around and sightsee in depth. Your ticket is valid for 24 or 48 hours, so you can experience Sydney and Bondi's most noteworthy attractions, sights, and shopping and dining areas at your own pace.",
        shortTitle: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
        sortOrder: 1,
        specialOfferAvailable: false,
        specialReservation: false,
        specialReservationDetails: {
          $ref: '#/components/examples/product-example-1/value/data/pas',
        },
        sslSupported: false,
        subCatIds: [97, 98, 5330, 26963, 32024, 45],
        supplierCode: '5010',
        supplierName: 'Big Bus Tours',
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/94/40/f3.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/94/40/f3.jpg',
        title: 'Big Bus Sydney and Bondi Hop-on Hop-off Tour',
        translationLevel: 0,
        uniqueShortDescription: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        videoCount: 1,
        webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
      {
        admission: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        available: true,
        bookingEngineId: 'FreesaleOnRequestBE',
        catIds: [1, 25, 12],
        code: '2280SUN',
        currencyCode: 'EUR',
        duration: '3 hours 30 minutes',
        essential: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        merchantCancellable: true,
        merchantNetPriceFrom: 386.11,
        merchantNetPriceFromFormatted: '€386,11',
        onRequestPeriod: 336,
        onSale: false,
        panoramaCount: 0,
        pas: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        photoCount: 7,
        price: 449.74,
        priceFormatted: '€449,74',
        primaryDestinationId: 684,
        primaryDestinationName: 'Las Vegas',
        primaryDestinationUrlName: 'Las-Vegas',
        primaryGroupId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        productUrlName: 'Grand-Canyon-West-Rim-Deluxe-Sunset-Helicopter-Tour',
        rating: 5,
        reviewCount: 399,
        rrp: 0,
        rrpformatted: '',
        savingAmount: 0,
        savingAmountFormated: '',
        shortDescription:
          "Take off from Las Vegas on a magical sunset helicopter tour to the Grand Canyon. You'll enjoy a 45-minute helicopter flight each way, land at the Grand Canyon for a glass of Champagne and snacks while you watch the sun start it's descent behind the walls of the canyon, then fly low over the famous neon-lit Las Vegas Strip on your return.",
        shortTitle: 'Grand Canyon from Las Vegas West Rim Sunset Helicopter Tour',
        sortOrder: 2,
        specialOfferAvailable: false,
        specialReservation: false,
        specialReservationDetails: {
          $ref: '#/components/examples/product-example-1/value/data/pas',
        },
        sslSupported: false,
        subCatIds: [113, 2, 98, 26963, 45, 95],
        supplierCode: '2280',
        supplierName: 'Sundance Helicopters',
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/7a/ec/1c.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/7a/ec/1c.jpg',
        title: 'Grand Canyon West Rim Deluxe Sunset Helicopter Tour',
        translationLevel: 0,
        uniqueShortDescription: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        videoCount: 1,
        webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
    ],
    dateStamp: '2020-02-09T16:07:17+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 2,
    vmid: '331003',
  },
}

const SearchProductsCodesExample_2Example = {
  summary: 'search products example invalid product',
  value: {
    data: [],
    dateStamp: '2020-02-09T16:11:27+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 0,
    vmid: '331005',
  },
}

const SearchProductsExample_1Example = {
  summary: 'search products example by destination',
  value: {
    data: [
      {
        admission: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        available: true,
        bookingEngineId: 'FreesaleBE',
        catIds: [26051, 6, 50127],
        code: '73492P4',
        currencyCode: 'USD',
        duration: '1 hour',
        essential: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        merchantCancellable: false,
        merchantNetPriceFrom: 55.38,
        merchantNetPriceFromFormatted: '$55.38',
        onRequestPeriod: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        onSale: false,
        panoramaCount: 0,
        pas: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        photoCount: 0,
        price: 65,
        priceFormatted: '$65.00',
        primaryDestinationId: 684,
        primaryDestinationName: 'Las Vegas',
        primaryDestinationUrlName: 'Las-Vegas',
        primaryGroupId: 26051,
        productUrlName: 'Viva-Las-Vinos-Wine-Yoga',
        rating: 0,
        reviewCount: 0,
        rrp: 0,
        rrpformatted: '',
        savingAmount: 0,
        savingAmountFormated: '',
        shortDescription:
          'Sip your wine and unwind with wine yoga! This gentle yoga class combines sipping your wine and practicing fun yoga basics in a rad environment. A tad unconventional, this class is filled with laughter, fun, and cheers-ing your neighbor.&lt;br&gt;&lt;br&gt;Private parties are available upon request.&lt;br&gt;&lt;br&gt;Ticket includes one glass of wine, a souvenir adult sippy (to help prevent the spillage of the wine!), and a gentle quirky yoga class.&lt;br&gt;&lt;br&gt;',
        shortTitle: 'Yoga Uncorked at The Gramercy',
        sortOrder: 1,
        specialOfferAvailable: false,
        specialReservation: false,
        specialReservationDetails: {
          $ref: '#/components/examples/product-example-1/value/data/pas',
        },
        sslSupported: false,
        subCatIds: [50128, 19, 26052, 21, 40293],
        supplierCode: '73492',
        supplierName: 'MintnHoney',
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/27/7e/88.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/09/27/7e/88.jpg',
        title: 'Yoga Uncorked at The Gramercy',
        translationLevel: 0,
        uniqueShortDescription: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        videoCount: 0,
        webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
      {
        admission: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        available: true,
        bookingEngineId: 'FreesaleBE',
        catIds: [26051, 6],
        code: '73492P17',
        currencyCode: 'USD',
        duration: '1 hour',
        essential: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        merchantCancellable: true,
        merchantNetPriceFrom: 46.86,
        merchantNetPriceFromFormatted: '$46.86',
        onRequestPeriod: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        onSale: false,
        panoramaCount: 0,
        pas: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        photoCount: 0,
        price: 55,
        priceFormatted: '$55.00',
        primaryDestinationId: 684,
        primaryDestinationName: 'Las Vegas',
        primaryDestinationUrlName: 'Las-Vegas',
        primaryGroupId: 6,
        productUrlName: 'Yoga-Uncorked-Artisan-Hotel',
        rating: 0,
        reviewCount: 0,
        rrp: 0,
        rrpformatted: '',
        savingAmount: 0,
        savingAmountFormated: '',
        shortDescription:
          'Sip your wine and unwind with wine yoga! This gentle yoga class combines sipping your wine and practicing fun yoga basics in a rad environment. A tad unconventional, this class is filled with laughter, fun, and cheers-ing your neighbor.&lt;br&gt;&lt;br&gt;Private parties are available upon request.&lt;br&gt;&lt;br&gt;Ticket includes one glass of wine, a souvenir adult sippy (to help prevent the spillage of the wine!), and a gentle quirky yoga class.&lt;br&gt;&lt;br&gt;',
        shortTitle: 'Yoga Uncorked-Artisan Hotel',
        sortOrder: 2,
        specialOfferAvailable: false,
        specialReservation: false,
        specialReservationDetails: {
          $ref: '#/components/examples/product-example-1/value/data/pas',
        },
        sslSupported: false,
        subCatIds: [19, 26052, 21, 40293],
        supplierCode: '73492',
        supplierName: 'MintnHoney',
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/ac/2b/2d.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/09/ac/2b/2d.jpg',
        title: 'Yoga Uncorked-Artisan Hotel',
        translationLevel: 0,
        uniqueShortDescription: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        videoCount: 0,
        webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
      {
        admission: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        available: true,
        bookingEngineId: 'DeferredCRMBE',
        catIds: [26051, 50127],
        code: '73458P1',
        currencyCode: 'USD',
        duration: '1 to 2 hours',
        essential: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        merchantCancellable: true,
        merchantNetPriceFrom: 213,
        merchantNetPriceFromFormatted: '$213.00',
        onRequestPeriod: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        onSale: false,
        panoramaCount: 0,
        pas: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        photoCount: 0,
        price: 250,
        priceFormatted: '$250.00',
        primaryDestinationId: 22171,
        primaryDestinationName: 'Nevada',
        primaryDestinationUrlName: 'Nevada',
        primaryGroupId: 26051,
        productUrlName: 'Sunset-Yoga-in-Las-Vegas',
        rating: 0,
        reviewCount: 0,
        rrp: 0,
        rrpformatted: '',
        savingAmount: 0,
        savingAmountFormated: '',
        shortDescription:
          'Enjoy a quiet, beautiful short walk to a secluded and breathtaking scene in Las Vegas. Travelers can choose to visit Calico Basin, Mt. Charleston, Wetlands, Seven Magic Mountains, or Lake Las Vegas for a private or group yoga session. Each session will provide the freedom from day-to-day distractions and allow you to immerse yourself in a unique and awe-inspiring locale. Each yoga session will be tailored to the individual and/or group in order to ensure the proper tone and intention is set. This is an all-inclusive experience. Guided walking tour, customized yoga session, yoga mats and water will be provided.',
        shortTitle: 'Explore the Beauty of Las Vegas with Private and Group Yoga Classes',
        sortOrder: 3,
        specialOfferAvailable: false,
        specialReservation: false,
        specialReservationDetails: {
          $ref: '#/components/examples/product-example-1/value/data/pas',
        },
        sslSupported: false,
        subCatIds: [50128, 26052, 40293],
        supplierCode: '73458',
        supplierName: 'Jennifer Pierotti Yoga ',
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/3b/bc/78.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/3b/bc/78.jpg',
        title: 'Explore the Beauty of Las Vegas with Private and Group Yoga Classes',
        translationLevel: 0,
        uniqueShortDescription: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        videoCount: 0,
        webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
    ],
    dateStamp: '2020-02-09T14:34:51+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 3,
    vmid: '331005',
  },
}

const SearchProductsExample_2Example = {
  summary: 'search products example (by attraction link)',
  value: {
    data: [
      {
        admission: '3',
        available: true,
        bookingEngineId: 'FreesaleBE',
        catIds: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        code: '5408P24',
        currencyCode: 'USD',
        duration: '5 hours',
        essential: '2',
        merchantCancellable: true,
        merchantNetPriceFrom: 21.12,
        merchantNetPriceFromFormatted: '$21.12',
        onRequestPeriod: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        onSale: false,
        panoramaCount: 0,
        pas: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        photoCount: 9,
        price: 27.55,
        priceFormatted: '$27.55',
        primaryDestinationId: 662,
        primaryDestinationName: 'Miami',
        primaryDestinationUrlName: 'Miami',
        primaryGroupId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        productUrlName: 'Everglades-Airboat-Safari',
        rating: 4,
        reviewCount: 12,
        rrp: 29,
        rrpformatted: '$29.00',
        savingAmount: 0,
        savingAmountFormated: '',
        shortDescription:
          "Explore the Everglades National Park and Florida's natural eco-system on an airboat! See and experience the wild alligators in their natural habitat. Have the chance to see alligators up close in their natural habitat, as well as the many exhibits scattered throughout the park.&nbsp; Transportation is available from your hotel when option is selected.",
        shortTitle: 'Everglades Airboat Safari',
        sortOrder: 2,
        specialOfferAvailable: true,
        specialReservation: false,
        specialReservationDetails: {
          $ref: '#/components/examples/product-example-1/value/data/pas',
        },
        sslSupported: false,
        subCatIds: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        supplierCode: '5408',
        supplierName: 'Miami Double Decker',
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/6e/f3/ca.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/06/6e/f3/ca.jpg',
        title: 'Everglades Airboat Safari',
        translationLevel: 0,
        uniqueShortDescription: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        videoCount: 0,
        webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
      {
        admission: '3',
        available: true,
        bookingEngineId: 'FreesaleBE',
        catIds: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        code: '6331EVERAIRTRANS',
        currencyCode: 'USD',
        duration: '5 hours',
        essential: '2',
        merchantCancellable: true,
        merchantNetPriceFrom: 40.97,
        merchantNetPriceFromFormatted: '$40.97',
        onRequestPeriod: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        onSale: false,
        panoramaCount: 0,
        pas: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        photoCount: 0,
        price: 51.3,
        priceFormatted: '$51.30',
        primaryDestinationId: 662,
        primaryDestinationName: 'Miami',
        primaryDestinationUrlName: 'Miami',
        primaryGroupId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        productUrlName: 'Everglades-Airboat-Tour-with-Transport-from-Miami',
        rating: 3.5,
        reviewCount: 22,
        rrp: 54,
        rrpformatted: '$54.00',
        savingAmount: 0,
        savingAmountFormated: '',
        shortDescription:
          'Choose between daily morning or afternoon departure from Miami Beach or Downtown Miami and&nbsp;experience everything the Everglades have to offer during this ca. 4-5 hour Everglades tour (depending on traffic). English, Spanish or German guides are available on your bus. After your pick-up you will drive to the Everglades where you will first board an Airboat&nbsp;guided by your park ranger which takes you on an exciting high speed ride through the river of grass and allows you to discover the beauty of this unique eco-system. Observe a variety of animals including birds, turtles and alligators in their natural habitat and watch the gators up close during the alligator presentation following the airboat ride',
        shortTitle: 'Everglades Airboat Ride Ranger-Guided Eco-Tour from Miami',
        sortOrder: 4,
        specialOfferAvailable: true,
        specialReservation: false,
        specialReservationDetails: {
          $ref: '#/components/examples/product-example-1/value/data/pas',
        },
        sslSupported: false,
        subCatIds: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        supplierCode: '6331',
        supplierName: 'US2U',
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/e9/60/52.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/06/e9/60/52.jpg',
        title:
          'Everglades Airboat &amp; Gators AM or PM pick-up - English,Spanish,German or French',
        translationLevel: 0,
        uniqueShortDescription: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        videoCount: 0,
        webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
      {
        admission: '3',
        available: true,
        bookingEngineId: 'FreesaleBE',
        catIds: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        code: '6331P14',
        currencyCode: 'USD',
        duration: '5 hours',
        essential: '2',
        merchantCancellable: true,
        merchantNetPriceFrom: 61.5,
        merchantNetPriceFromFormatted: '$61.50',
        onRequestPeriod: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        onSale: false,
        panoramaCount: 0,
        pas: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        photoCount: 0,
        price: 65.45,
        priceFormatted: '$65.45',
        primaryDestinationId: 662,
        primaryDestinationName: 'Miami',
        primaryDestinationUrlName: 'Miami',
        primaryGroupId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        productUrlName: 'Everglades-Tour-auf-Deutsch',
        rating: 3,
        reviewCount: 1,
        rrp: 77,
        rrpformatted: '$77.00',
        savingAmount: 0,
        savingAmountFormated: '',
        shortDescription:
          'Discover the Everglades on this popular tour. Enjoy a one hour Airboat tour and a wildlife show displaying a variety of animals.',
        shortTitle: 'Everglades Airboat 1 hour with AM or PM pick-up',
        sortOrder: 6,
        specialOfferAvailable: true,
        specialReservation: false,
        specialReservationDetails: {
          $ref: '#/components/examples/product-example-1/value/data/pas',
        },
        sslSupported: false,
        subCatIds: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        supplierCode: '6331',
        supplierName: 'US2U',
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/a5/43/8f.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/09/a5/43/8f.jpg',
        title: 'Everglades Airboat 1 hour with AM or PM pick-up',
        translationLevel: 0,
        uniqueShortDescription: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        videoCount: 0,
        webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
    ],
    dateStamp: '2020-02-09T14:37:22+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 24,
    vmid: '331001',
  },
}

const SearchProductsExample_3Example = {
  summary: 'search products example (freesale only)',
  value: {
    data: [
      {
        admission: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        available: true,
        bookingEngineId: 'FreesaleBE',
        catIds: [4, 20, 9, 25, 26, 12],
        code: '50420P54',
        currencyCode: 'USD',
        duration: '15 days',
        essential: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        merchantCancellable: false,
        merchantNetPriceFrom: 4792.5,
        merchantNetPriceFromFormatted: '$4,792.50',
        onRequestPeriod: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        onSale: false,
        panoramaCount: 0,
        pas: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        photoCount: 0,
        price: 6000,
        priceFormatted: '$6,000.00',
        primaryDestinationId: 684,
        primaryDestinationName: 'Las Vegas',
        primaryDestinationUrlName: 'Las-Vegas',
        primaryGroupId: 4,
        productUrlName: 'The-Old-Southwest-Grand-Circle-Leisure-Tour',
        rating: 0,
        reviewCount: 0,
        rrp: 0,
        rrpformatted: '',
        savingAmount: 0,
        savingAmountFormated: '',
        shortDescription:
          "Do you want to see as many National Parks as you can? Then book our Southwest National Parks Grand Circle Tour, which includes 7 National Parks and an old train ride. Explore amazing, famous National Parks like Arches, Canyonlands, Capitol Reef, Bryce Canyon, Zion, Mesa Verde and more. This includes Utah's Mighty Five and many more. Shoot down white water rapids with an experienced guide or take a lazy, scenic river float. These are just some of the items packed into our extensive Grand Circle Tour.&lt;br&gt;&lt;br&gt;Spend 14 magical days exploring petrified dunes, vibrant pine forests, and deserts with oil-painting perfect sunsets. This is a small group setting. Usually, there are no more than ten guests. Each small group has a private guide to tell stories of the old days and give insight into what you are experiencing. With its walking, scenic views, local restaurants, hidden gems, and other fantastic experiences, the Southwest National Parks Grand Circle Tour awaits you!",
        shortTitle: 'The Old Southwest Grand Circle--Leisure Tour',
        sortOrder: 1,
        specialOfferAvailable: false,
        specialReservation: false,
        specialReservationDetails: {
          $ref: '#/components/examples/product-example-1/value/data/pas',
        },
        sslSupported: false,
        subCatIds: [113, 98, 36, 116, 85, 11],
        supplierCode: '50420',
        supplierName: 'New Way Horizon Travel LLC',
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/19/57/60.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/09/19/57/60.jpg',
        title: 'The Old Southwest Grand Circle--Leisure Tour',
        translationLevel: 0,
        uniqueShortDescription: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        videoCount: 0,
        webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
      {
        admission: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        available: true,
        bookingEngineId: 'DeferredCRMBE',
        catIds: [1, 18, 26, 12],
        code: '9424P24',
        currencyCode: 'USD',
        duration: '3 hours',
        essential: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        merchantCancellable: true,
        merchantNetPriceFrom: 3236.75,
        merchantNetPriceFromFormatted: '$3,236.75',
        onRequestPeriod: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        onSale: false,
        panoramaCount: 0,
        pas: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        photoCount: 0,
        price: 3799.99,
        priceFormatted: '$3,799.99',
        primaryDestinationId: 684,
        primaryDestinationName: 'Las Vegas',
        primaryDestinationUrlName: 'Las-Vegas',
        primaryGroupId: 18,
        productUrlName: 'Helicopter-Wedding-The-Grand-Canon',
        rating: 0,
        reviewCount: 0,
        rrp: 0,
        rrpformatted: '',
        savingAmount: 0,
        savingAmountFormated: '',
        shortDescription:
          'If getting married in a natural wonder of the world is on your bucket list, look no farther. You and your guests will enjoy a scenic flight the Grand Canyon West Rim for a private ceremony in the basin of the canyon. Photos, cake, a Champagne toast and limousine transfers are included.',
        shortTitle: 'Grand Canyon Helicopter Wedding Ceremony',
        sortOrder: 2,
        specialOfferAvailable: false,
        specialReservation: false,
        specialReservationDetails: {
          $ref: '#/components/examples/product-example-1/value/data/pas',
        },
        sslSupported: false,
        subCatIds: [2, 26963, 116, 61, 45, 62, 95],
        supplierCode: '9424',
        supplierName: 'Destination Las Vegas Group',
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/75/b7/96.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/06/75/b7/96.jpg',
        title: 'Helicopter Wedding Ceremony: The Grand Canyon',
        translationLevel: 0,
        uniqueShortDescription: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        videoCount: 0,
        webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
      {
        admission: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        available: true,
        bookingEngineId: 'DeferredCRMBE',
        catIds: [20, 9, 26, 12],
        code: '240839P1',
        currencyCode: 'USD',
        duration: '3 days',
        essential: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        merchantCancellable: false,
        merchantNetPriceFrom: 1996.08,
        merchantNetPriceFromFormatted: '$1,996.08',
        onRequestPeriod: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        onSale: false,
        panoramaCount: 0,
        pas: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        photoCount: 0,
        price: 2499,
        priceFormatted: '$2,499.00',
        primaryDestinationId: 684,
        primaryDestinationName: 'Las Vegas',
        primaryDestinationUrlName: 'Las-Vegas',
        primaryGroupId: 9,
        productUrlName: '3-Day-Zion-Adventure-Tour',
        rating: 0,
        reviewCount: 0,
        rrp: 0,
        rrpformatted: '',
        savingAmount: 0,
        savingAmountFormated: '',
        shortDescription:
          'The hosts and guides are locals, so we know the sweet spots away from the crowds. Our multi-lingual abilities are sure to keep the group happy and entertained as we traverse through some unique and gorgeous locations. We’ve simplified logistics, landed some amazing accommodations, and planned in high quality adventure and American meals. We’re happy to customize the tour to groups and families wanting a little more say in the adventure. Just email us!',
        shortTitle: '3 Day Zion Adventure Tour',
        sortOrder: 3,
        specialOfferAvailable: false,
        specialReservation: false,
        specialReservationDetails: {
          $ref: '#/components/examples/product-example-1/value/data/pas',
        },
        sslSupported: false,
        subCatIds: [32, 98, 116, 85],
        supplierCode: '240839',
        supplierName: 'Red Tread Tours LLC',
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/3d/3f/ff.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0a/3d/3f/ff.jpg',
        title: '3 Day Zion Adventure Tour',
        translationLevel: 0,
        uniqueShortDescription: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        videoCount: 0,
        webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
    ],
    dateStamp: '2020-02-09T15:18:03+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 910,
    vmid: '331005',
  },
}

const TaxonomyAttractionsExampleExample = {
  summary: 'taxonomy attractions example',
  value: {
    data: [
      {
        attractionCity: '',
        attractionLatitude: 35.8808,
        attractionLongitude: -113.97048,
        attractionState: '',
        attractionStreetAddress: '',
        destinationId: 684,
        pageUrlName: 'Grand-Canyon-West-Rim',
        photoCount: 157,
        primaryDestinationId: 684,
        primaryDestinationName: 'Las Vegas',
        primaryDestinationUrlName: 'Las-Vegas',
        productCount: 16,
        publishedDate: '2020-01-15',
        rating: 4.5,
        seoId: 1594,
        sortOrder: 1,
        thumbnailHiResURL:
          'http://cache-graphicslib.viator.com/graphicslib/page-images/742x525/44811_GrandCanyon_WestRim_d815-24.jpg',
        thumbnailURL:
          'http://cache-graphicslib.viator.com/graphicslib/page-images/44811_GrandCanyon_WestRim_d815-24.jpg',
        title: 'Grand Canyon West Rim',
        webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
      {
        attractionCity: 'Las Vegas',
        attractionLatitude: 36.162683,
        attractionLongitude: -115.144685,
        attractionState: '',
        attractionStreetAddress: '619 Las Vegas Boulevard South',
        destinationId: 684,
        pageUrlName: 'Graceland-Wedding-Chapel',
        photoCount: 10,
        primaryDestinationId: 684,
        primaryDestinationName: 'Las Vegas',
        primaryDestinationUrlName: 'Las-Vegas',
        productCount: 2,
        publishedDate: '2019-08-22',
        rating: 4.5,
        seoId: 1246,
        sortOrder: 2,
        thumbnailHiResURL:
          'http://cache-graphicslib.viator.com/graphicslib/page-images/742x525/785937_Viator_Photographer_395090.jpg',
        thumbnailURL:
          'http://cache-graphicslib.viator.com/graphicslib/page-images/785937_Viator_Photographer_395090.jpg',
        title: 'Graceland Wedding Chapel',
        webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
      {
        attractionCity: 'Las Vegas',
        attractionLatitude: 36.126374,
        attractionLongitude: -115.166749,
        attractionState: '',
        attractionStreetAddress: '3131 Las Vegas Blvd South',
        destinationId: 684,
        pageUrlName: 'Wynn-Las-Vegas',
        photoCount: 5,
        primaryDestinationId: 684,
        primaryDestinationName: 'Las Vegas',
        primaryDestinationUrlName: 'Las-Vegas',
        productCount: 2,
        publishedDate: '2019-07-30',
        rating: 0,
        seoId: 1266,
        sortOrder: 3,
        thumbnailHiResURL:
          'http://cache-graphicslib.viator.com/graphicslib/page-images/742x525/100516_Las%20Vegas_Wynn%20Hotel%20&amp;%20Casino_d684-508.jpg',
        thumbnailURL:
          'http://cache-graphicslib.viator.com/graphicslib/page-images/100516_Las%20Vegas_Wynn%20Hotel%20&amp;%20Casino_d684-508.jpg',
        title: 'Wynn Las Vegas',
        webURL: { $ref: '#/components/examples/product-example-1/value/data/pas' },
      },
    ],
    dateStamp: '2020-02-06T19:55:25+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 72,
    vmid: '331004',
  },
}

const TaxonomyCategoriesExampleExample = {
  summary: 'taxonomy categories example',
  value: {
    data: [
      {
        groupName: 'Air, Helicopter &amp; Balloon Tours',
        groupUrlName: 'Air-Helicopter-and-Balloon-Tours',
        id: 1,
        productCount: 77,
        sortOrder: 1,
        subcategories: [
          {
            categoryId: 1,
            sortOrder: 1,
            subcategoryId: 2,
            subcategoryName: 'Helicopter Tours',
            subcategoryUrlName: 'Helicopter-Tours',
          },
          {
            categoryId: 1,
            sortOrder: 2,
            subcategoryId: 1,
            subcategoryName: 'Air Tours',
            subcategoryUrlName: 'Air-Tours',
          },
          {
            categoryId: 1,
            sortOrder: 3,
            subcategoryId: 3,
            subcategoryName: 'Balloon Rides',
            subcategoryUrlName: 'Balloon-Rides',
          },
        ],
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/71/7c/7d.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/07/71/7c/7d.jpg',
      },
      {
        groupName: 'Classes &amp; Workshops',
        groupUrlName: 'Classes-and-Workshops',
        id: 26051,
        productCount: 12,
        sortOrder: 2,
        subcategories: [
          {
            categoryId: 26051,
            sortOrder: 1,
            subcategoryId: 40290,
            subcategoryName: 'Language Classes',
            subcategoryUrlName: 'Language-Classes',
          },
          {
            categoryId: 26051,
            sortOrder: 2,
            subcategoryId: 40293,
            subcategoryName: 'Sports Lessons',
            subcategoryUrlName: 'Sports-Lessons',
          },
          {
            categoryId: 26051,
            sortOrder: 3,
            subcategoryId: 33939,
            subcategoryName: 'Craft Classes',
            subcategoryUrlName: 'Craft-Classes',
          },
          {
            categoryId: 26051,
            sortOrder: 4,
            subcategoryId: 26052,
            subcategoryName: 'Yoga Classes',
            subcategoryUrlName: 'Yoga-Classes',
          },
          {
            categoryId: 26051,
            sortOrder: 5,
            subcategoryId: 40286,
            subcategoryName: 'Art Classes',
            subcategoryUrlName: 'Art-Classes',
          },
        ],
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0a/03/9e/ca.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/0a/03/9e/ca.jpg',
      },
      {
        groupName: 'Cruises, Sailing &amp; Water Tours',
        groupUrlName: 'Cruises-Sailing-and-Water-Tours',
        id: 3,
        productCount: 21,
        sortOrder: 3,
        subcategories: [
          {
            categoryId: 3,
            sortOrder: 1,
            subcategoryId: 5640,
            subcategoryName: 'Dinner Cruises',
            subcategoryUrlName: 'Dinner-Cruises',
          },
          {
            categoryId: 3,
            sortOrder: 2,
            subcategoryId: 7,
            subcategoryName: 'Day Cruises',
            subcategoryUrlName: 'Day-Cruises',
          },
          {
            categoryId: 3,
            sortOrder: 3,
            subcategoryId: 40295,
            subcategoryName: 'Water Tours',
            subcategoryUrlName: 'Water-Tours',
          },
        ],
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/e5/a3/54.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/06/e5/a3/54.jpg',
      },
      {
        groupName: 'Cultural &amp; Theme Tours',
        groupUrlName: 'Cultural-and-Theme-Tours',
        id: 4,
        productCount: 94,
        sortOrder: 4,
        subcategories: [
          {
            categoryId: 4,
            sortOrder: 1,
            subcategoryId: 14,
            subcategoryName: 'Literary, Art &amp; Music Tours',
            subcategoryUrlName: 'Literary-Art-and-Music-Tours',
          },
          {
            categoryId: 4,
            sortOrder: 2,
            subcategoryId: 118,
            subcategoryName: 'Ghost &amp; Vampire Tours',
            subcategoryUrlName: 'Ghost-and-Vampire-Tours',
          },
          {
            categoryId: 4,
            sortOrder: 3,
            subcategoryId: 12,
            subcategoryName: 'Historical &amp; Heritage Tours',
            subcategoryUrlName: 'Historical-and-Heritage-Tours',
          },
          {
            categoryId: 4,
            sortOrder: 4,
            subcategoryId: 11,
            subcategoryName: 'Cultural Tours',
            subcategoryUrlName: 'Cultural-Tours',
          },
          {
            categoryId: 4,
            sortOrder: 5,
            subcategoryId: 26967,
            subcategoryName: 'Architecture Tours',
            subcategoryUrlName: 'Architecture-Tours',
          },
          {
            categoryId: 4,
            sortOrder: 6,
            subcategoryId: 13,
            subcategoryName: 'Movie &amp; TV Tours',
            subcategoryUrlName: 'Movie-and-TV-Tours',
          },
          {
            categoryId: 4,
            sortOrder: 7,
            subcategoryId: 40338,
            subcategoryName: 'LGBT Friendly Tours',
            subcategoryUrlName: 'LGBT-Friendly-Tours',
          },
          {
            categoryId: 4,
            sortOrder: 8,
            subcategoryId: 5332,
            subcategoryName: 'Archaeology Tours',
            subcategoryUrlName: 'Archaeology-Tours',
          },
        ],
        thumbnailHiResURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/73/48/34.jpg',
        thumbnailURL:
          'https://hare-media-cdn.tripadvisor.com/media/attractions-splice-spp-154x109/06/73/48/34.jpg',
      },
    ],
    dateStamp: '2020-02-06T19:47:58+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331001',
  },
}

const TaxonomyDestinationsExampleExample = {
  summary: 'taxonomy destinations example',
  value: {
    data: [
      {
        defaultCurrencyCode: 'USD',
        destinationId: 77,
        destinationName: 'USA',
        destinationType: 'COUNTRY',
        destinationUrlName: 'USA',
        iataCode: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        latitude: 37.09024,
        longitude: -95.712891,
        lookupId: '8.77',
        parentId: 8,
        selectable: false,
        sortOrder: 1,
        timeZone: 'America/New_York',
      },
      {
        defaultCurrencyCode: 'USD',
        destinationId: 22212,
        destinationName: 'Alabama',
        destinationType: 'REGION',
        destinationUrlName: 'Alabama',
        iataCode: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        latitude: 32.34,
        longitude: -86.26,
        lookupId: '8.77.22212',
        parentId: 77,
        selectable: true,
        sortOrder: 1,
        timeZone: '',
      },
      {
        defaultCurrencyCode: 'USD',
        destinationId: 270,
        destinationName: 'Alaska',
        destinationType: 'REGION',
        destinationUrlName: 'Alaska',
        iataCode: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        latitude: 63.588753,
        longitude: -154.4930619,
        lookupId: '8.77.270',
        parentId: 77,
        selectable: true,
        sortOrder: 2,
        timeZone: 'America/Anchorage',
      },
      {
        defaultCurrencyCode: 'USD',
        destinationId: 271,
        destinationName: 'Arizona',
        destinationType: 'REGION',
        destinationUrlName: 'Arizona',
        iataCode: { $ref: '#/components/examples/product-example-1/value/data/pas' },
        latitude: 34.0489281,
        longitude: -111.0937311,
        lookupId: '8.77.271',
        parentId: 77,
        selectable: true,
        sortOrder: 3,
        timeZone: 'America/Phoenix',
      },
    ],
    dateStamp: '2020-02-06T19:43:09+0000',
    errorCodes: [],
    errorMessage: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorMessageText: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorName: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorReference: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    errorType: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    extraInfo: {},
    extraObject: { $ref: '#/components/examples/product-example-1/value/data/pas' },
    success: true,
    totalCount: 1,
    vmid: '331001',
  },
}

const APIKeySecurityScheme = { in: 'header', name: 'exp-api-key', type: 'apiKey' }

const LegacyAPIKeySecurityScheme = { in: 'query', name: 'apiKey', type: 'apiKey' }

export const postAvailableProductsRoute = createRoute({
  method: 'post',
  path: '/available/products',
  tags: ['Product services'],
  summary: '/available/products',
  description:
    'Find products that are available\n\n This endpoint returns available products filtered by product code, date range or number of adult travelers\n\n\n - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. \n \n',
  operationId: 'availableProducts',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currencyCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "**currency** in which to display product pricing\n- default: `'USD'`\n",
                }),
              endDate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**end date** of the date range to search within (must be in the future)',
                }),
              numAdults: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    '**number of adult travelers** who wish to participate\n- default: `1`\n',
                }),
              productCodes: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    '**array of unique alphanumeric product identifiers** specifying which products to find the availability of\n- maximum: `50`\n',
                  example: ['5010SYDNEY', '2280SUN', '9169P50'],
                }),
              startDate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**start date** of the date range to search within (must be in the future)',
                }),
            })
            .openapi({ required: [] }),
          example: {
            currencyCode: 'USD',
            endDate: '2020-12-31',
            numAdults: 1,
            productCodes: ['5010SYDNEY', '2280SUN', '9169P50'],
            startDate: '2020-12-21',
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .array(
                    z
                      .object({
                        admission: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        available: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        bookingEngineId: BookingEngineIdSchema.exactOptional(),
                        catIds: z
                          .array(z.int())
                          .exactOptional()
                          .openapi({
                            description:
                              '**list** of unique numeric category identifiers that this product falls under\n- `categoryId` is available from the [/taxonomy/categories](#operation/taxonomyCategories) service\n',
                          }),
                        code: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**unique alphanumeric identifier** of *this* product',
                          }),
                        currencyCode: CurrencyCodeSchema.exactOptional(),
                        duration: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**natural-language description** of *this* product's duration",
                          }),
                        essential: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        merchantCancellable: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              'ignore (Viator only)\n\n    \nFor cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object\n',
                          }),
                        merchantNetPriceFrom: MerchantNetPriceFromSchema.exactOptional(),
                        merchantNetPriceFromFormatted:
                          MerchantNetPriceFromFormattedSchema.exactOptional(),
                        onRequestPeriod: OnRequestPeriodSchema.exactOptional(),
                        onSale: OnSaleSchema.exactOptional(),
                        panoramaCount: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              '**number** of panoramic images available for *this* product',
                          }),
                        pas: z
                          .object({
                            incompleteQuote: z
                              .boolean()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            productCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: '**unique alphanumeric identifier** of *this* product',
                              }),
                            removedChildAges: z
                              .array(z.string())
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            tourGrades: z
                              .record(
                                z.string(),
                                z
                                  .object({
                                    availDates: z
                                      .array(
                                        z
                                          .object({
                                            dateList: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  '**list of dates** on which *this* tour grade is available formatted according to the example',
                                              }),
                                            priceFrom: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  '**lowest sale price** for *this* tour grade formatted according to the example',
                                              }),
                                            priceQuote: z
                                              .object({
                                                generalRetailPrice: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      '**general retail price** of *this* tour grade formatted according to the example',
                                                  }),
                                                merchantNetPrice: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({ description: 'ignore (Viator only)' }),
                                                retailPrice: z
                                                  .string()
                                                  .exactOptional()
                                                  .openapi({
                                                    description:
                                                      '**retail price** of *this* tour grade formatted according to the example',
                                                  }),
                                              })
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  '**pricing object** for *this* tour grade',
                                                required: [],
                                              }),
                                          })
                                          .openapi({ required: [] }),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '**array of objects** with availability and pricing information for *this* tour grade',
                                      }),
                                    bookingEngine: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '**booking modality specifier** for *this* tour grade',
                                      }),
                                    description: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '**natural-language description** of *this* tour grade',
                                      }),
                                    languageServices: z
                                      .record(z.string(), z.array(z.any()))
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '**dictionary** of language codes to array of textual language service descriptors available for *this* tour grade',
                                      }),
                                    sapi: z
                                      .boolean()
                                      .exactOptional()
                                      .openapi({ description: 'ignore (Viator only)' }),
                                    title: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '**natural-language title** of *this* tour grade',
                                      }),
                                    tourGradeCode: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '**alphanumeric identifier** for *this* tour grade',
                                      }),
                                  })
                                  .openapi({ required: [] }),
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  '**dictionary** of tour grade alphanumeric codes to tour grade objects',
                              }),
                            travellerMix: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**alphanumeric code** indicating the combination of adults and children being enquired about',
                              }),
                          })
                          .exactOptional()
                          .openapi({
                            description:
                              '**object** detailing product availability\n- `pas` stands for Product Availability Schema\n',
                            required: [],
                          }),
                        photoCount: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: '**number** of user photos published for *this* product',
                          }),
                        price: PriceSchema.exactOptional(),
                        priceFormatted: PriceFormattedSchema.exactOptional(),
                        primaryDestinationId: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              "**unique numeric identifier** of *this* product's primary destination",
                          }),
                        primaryDestinationName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**natural-language name** of *this* product's primary destination",
                          }),
                        primaryDestinationUrlName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**URL-formatted name** of *this* product's primary destination",
                          }),
                        primaryGroupId: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        productUrlName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: '**URL-formatted name** of *this* product' }),
                        rating: RatingSchema.exactOptional(),
                        reviewCount: ReviewCountSchema.exactOptional(),
                        rrp: RrpSchema.exactOptional(),
                        rrpFormatted: RrpFormattedSchema.exactOptional(),
                        savingAmount: SavingAmountSchema.exactOptional(),
                        savingAmountFormated: SavingAmountFormatedSchema.exactOptional(),
                        shortDescription: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**natural-language description** (short) of *this* product',
                          }),
                        shortTitle: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**natural-language title (shortened)** of *this* product',
                          }),
                        sortOrder: z
                          .int()
                          .exactOptional()
                          .openapi({ description: '**sort order** of this result object' }),
                        specialOfferAvailable: SpecialOfferAvailableSchema.exactOptional(),
                        specialReservation: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        specialReservationDetails: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        sslSupported: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        subCatIds: z
                          .array(z.int())
                          .exactOptional()
                          .openapi({
                            description:
                              '**list** of unique numeric subcategory identifiers that this product falls under\n- `subcategoryId` is available from the [/taxonomy/categories](#operation/taxonomyCategories) service\n',
                          }),
                        supplierCode: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: "**unique identifier** of *this* product's supplier",
                          }),
                        supplierName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: "**natural-language name** of *this* product's supplier",
                          }),
                        thumbnailHiResURL: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**URL** of *this* product's high resolution thumbnail image",
                          }),
                        thumbnailURL: z
                          .string()
                          .exactOptional()
                          .openapi({ description: "**URL** of *this* product's thumbnail image" }),
                        title: z
                          .string()
                          .exactOptional()
                          .openapi({ description: '**natural-language title** of *this* product' }),
                        translationLevel: TranslationLevelSchema.exactOptional(),
                        uniqueShortDescription: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**natural-language description** of *this* product',
                          }),
                        videoCount: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              'ignore (Viator only) – videos are not available to partners\n',
                          }),
                        webURL: WebURLSchema.exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({ description: '**array** of product objects' }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': AvailableProductsExampleExample },
        },
      },
    },
  },
})

export const postBookingAvailabilityRoute = createRoute({
  method: 'post',
  path: '/booking/availability',
  tags: ['Booking services'],
  summary: '/booking/availability',
  description:
    'Get the tour-grade with the lowest price that is available for a product on each day of the specified month\n\nThis service:\n- returns \n- useful when displaying a calendar of available tours\n- For more information, see: [Availability services](#section/Key-concepts/Availability-services)\n- **Notes:** \n  - [/booking/availability/dates](#operation/bookingAvailabilityDates) provides all availability in one call and is more suitable for calendars, etc.\n\n  - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. \n',
  operationId: 'bookingAvailability',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ageBands: z
                .array(
                  z
                    .object({
                      bandId: AgeBandIdSchema.exactOptional(),
                      count: z
                        .int()
                        .exactOptional()
                        .openapi({ description: '**number of people** in *this* age band' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description:
                    '**array of objects** specifying the age bands by which to to filter search results',
                }),
              currencyCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**currency code** for the currency in which to display tour grade pricing information',
                }),
              month: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**month component** (text format) of the start of the date range for which to retrieve tour grade availability information (must be in the future)',
                }),
              productCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**unique alphanumeric identifier** of the product for which you wish to retrieve tour grade availability information',
                }),
              year: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**year component** (text format) of the start of the date range for which to retrieve tour grade availability information (must be in the future)',
                }),
            })
            .openapi({ required: [] }),
          example: {
            ageBands: [{ bandId: 1, count: 1 }],
            currencyCode: 'AUD',
            month: '12',
            productCode: '5010SYDNEY',
            year: '2020',
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .object({
                    availability: z
                      .array(
                        z
                          .object({
                            available: z
                              .boolean()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**indicator** - `true` if *this* tour grade is available to book',
                              }),
                            bookingDate: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**date** on which *this* tour grade is available to be booked',
                              }),
                            currencyCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**currency code** of the currency in which product pricing is displayed',
                              }),
                            gradeCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: '**alphanumeric identifier** for *this* tour grade',
                              }),
                            merchantNetPrice: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**numeric merchant net rate** for *this* tour grade\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            merchantNetPriceFormatted: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**currency-formatted merchant net rate** for *this* tour grade\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            retailPrice: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**numeric suggested retail price** for *this* tour grade\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            retailPriceFormatted: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**currency-formatted suggested retail price** for *this* tour grade\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            sortOrder: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**sort order** of this tour grade availability object',
                              }),
                            unavailableReason: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language explanation** as to why *this* tour grade is not available to be booked',
                              }),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional()
                      .openapi({ description: '**array** of tour grade availability objects' }),
                    firstAvailableDate: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**first available date** (in plain text format) for the tour grade',
                      }),
                    lastAvailableDate: z
                      .string()
                      .exactOptional()
                      .openapi({ description: '**last available date** for the tour grade' }),
                    productCode: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**unique alphanumeric identifer** of the product that was specified in the request',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description:
                      '**object** detailing available tourgrades for the specified age bands and date range for this product',
                    required: [],
                  }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': BookingAvailabilityExampleExample },
        },
      },
    },
  },
})

export const getBookingAvailabilityDatesRoute = createRoute({
  method: 'get',
  path: '/booking/availability/dates',
  tags: ['Booking services'],
  summary: '/booking/availability/dates',
  description:
    "Get dates on which a product is available\n\nThis service:\n- retrieves all available dates for a product, excluding days it does not operate and blocked-out dates\n- returns a multi-dimensional array of year-month -&gt; days that have any availabile tour grade or traveler mix\n- useful to present the user with a list of dates for selection on which *this* product is available for booking\n- **Notes**: \n\n  - The user's desired traveler mix may not be eligible for booking; these details can be displayed when you retrieve its list of tour grades\n  - Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. \n",
  operationId: 'bookingAvailabilityDates',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    query: z.object({ productCode: ProductCodeParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .record(z.string(), z.array(z.string()))
                  .exactOptional()
                  .openapi({
                    description:
                      "**dictionary** of month identifiers (e.g., `'2018-12'`) to an array of days-of-the-month (text) specifying which days of the specified month *this* product is available to be booked\"\n- **Note**: see response sample for object structure\n",
                  }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': BookingAvailabilityDatesExampleExample },
        },
      },
    },
  },
})

export const postBookingAvailabilityTourgradesRoute = createRoute({
  method: 'post',
  path: '/booking/availability/tourgrades',
  tags: ['Booking services'],
  summary: '/booking/availability/tourgrades',
  description:
    'Get the tour grades of a product that are currently available\n\nThis service reports:\n- all tour grades for the specified product, on the specified day, that are available for the specified age bands\n- the pricing breakdown and the total depending on the travel date and traveler mix\n\n**Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. \n',
  operationId: 'bookingAvailabilityTourgrades',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              ageBands: z
                .array(
                  z
                    .object({
                      bandId: BandIdSchema.exactOptional(),
                      count: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description:
                            '**numeric count** of number of travelers in *this* age band',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: '**array** of ageBand objects' }),
              bookingDate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**date** to enquire about available tour grades for *this* product (must be in the future)',
                }),
              currencyCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**currency code** for the currency in which to display pricing information',
                }),
              productCode: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
          example: {
            ageBands: [{ bandId: 1, count: 1 }],
            bookingDate: '2020-12-28',
            currencyCode: 'AUD',
            productCode: '5010SYDNEY',
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .array(
                    z
                      .object({
                        ageBands: z
                          .array(z.any())
                          .exactOptional()
                          .openapi({
                            description:
                              '**array** of age band objects describing the age bands and respective passenger counts allowed to book *this* tour grade; `null` if `ageBandsRequired` is filled and `available` is `false`',
                          }),
                        ageBandsRequired: z
                          .array(
                            z.array(
                              z
                                .object({
                                  bandId: BandIdSchema.exactOptional(),
                                  maximumCountRequired: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        '**maximum number** of passengers from *this* age band allowable for *this* tour grade',
                                    }),
                                  minimumCountRequired: z
                                    .int()
                                    .exactOptional()
                                    .openapi({
                                      description:
                                        '**minimum number** of passengers from *this* age band required for *this* tour grade',
                                    }),
                                })
                                .openapi({ required: [] }),
                            ),
                          )
                          .exactOptional()
                          .openapi({
                            description:
                              '**array of arrays** of age band objects describing the traveler mixes eligible to book *this* tour grade; `null` if `ageBands` is filled and `available` is `true`\n- **note**: multiple objects; structure will depend on available tour grades – see response sample for an example, but the exact result you receive will differ\n',
                          }),
                        available: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              '**indicator** - `true` if this tour grade is available to be booked according to the traveler mix specified',
                          }),
                        bookingDate: z
                          .string()
                          .exactOptional()
                          .openapi({ description: '**date** on which *this* tour grade operates' }),
                        currencyCode: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**currency code for the specified currency** (will be `'ERROR'` if `available` is `false`)",
                          }),
                        defaultLanguageCode: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**language code for standard langauge** for *this* product',
                          }),
                        gradeCode: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**alphanumeric identifier** of *this* tour grade',
                          }),
                        gradeDepartureTime: z
                          .string()
                          .exactOptional()
                          .openapi({ description: '**time** of *this* product' }),
                        gradeDescription: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**natural-language description** of the tour grade',
                          }),
                        gradeTitle: z
                          .string()
                          .exactOptional()
                          .openapi({ description: '**natural-language title** of the tour grade' }),
                        langServices: z
                          .object({})
                          .exactOptional()
                          .openapi({
                            description:
                              '**object** detailing language services available for *this* product** (will be `null` if `available` is `false`)',
                          }),
                        merchantNetPrice: z
                          .number()
                          .exactOptional()
                          .openapi({
                            description:
                              '**numeric merchant net rate** for *this* tour grade\n**Note**: will be `0` if `available` is `false`\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                          }),
                        merchantNetPriceFormatted: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**currency-formatted merchant net rate** for *this* tour grade\n**Note**: will be empty if `available` is `false`\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                          }),
                        retailPrice: z
                          .number()
                          .exactOptional()
                          .openapi({
                            description:
                              '**numeric suggested retail price** for *this* tour grade\n**Note**: will be `0` if `available` is `false`\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                          }),
                        retailPriceFormatted: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**currency-formatted suggested retail price** for *this* tour grade\n**Note**: (will be '' if `available` is `false`)\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n",
                          }),
                        sortOrder: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: '**sort order** for *this* tour grade availability object',
                          }),
                        unavailableReason: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**enum specifier of reason for product unavailability** (will be `null` if `available` is `true`)',
                          }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': BookingAvailabilityTourgradesExampleExample },
        },
      },
    },
  },
})

export const postBookingAvailabilityTourgradesPricingmatrixRoute = createRoute({
  method: 'post',
  path: '/booking/availability/tourgrades/pricingmatrix',
  tags: ['Booking services'],
  summary: '/booking/availability/tourgrades/pricingmatrix',
  description:
    'Get a pricing matrix that includes availability and tour-grades for a product\n\nGiven a month, this service returns days with available tour grades only (i.e., days which have at least one tourgrade available), and the pricing matrix for that tour grade for that day.\n\n- **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server. \n',
  operationId: 'bookingAvailabilityTourgradesPricingmatrix',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currencyCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**currency code** for the currency in which to display pricing details',
                }),
              month: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**month of year** (as text) by which to filter results (must be in the future)',
                }),
              productCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**alphanumeric identifier** of product about which to retrieve tour grade and pricing information',
                }),
              year: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**year** (as text) by which to filter results (must be in the future)',
                }),
            })
            .openapi({ required: [] }),
          example: { currenctCode: 'USD', month: '12', productCode: '2280AAHT', year: '2020' },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .object({
                    bookingMonth: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: '**month of year** (as text) by which to filter results',
                      }),
                    dates: z
                      .array(
                        z
                          .object({
                            bookingDate: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: '**date** on which *this* product operates',
                              }),
                            callForLastMinAvailability: z
                              .boolean()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            sortOrder: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description: '**sort order** for *this* tour grade pricing object',
                              }),
                            tourGrades: z
                              .array(
                                z
                                  .object({
                                    gradeCode: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '**alphanumeric identifier** of the tour grade',
                                      }),
                                    gradeTitle: z
                                      .string()
                                      .exactOptional()
                                      .openapi({ description: '**title of tour grade**' }),
                                    pricingMatrix: z
                                      .array(
                                        z
                                          .object({
                                            ageBandPrices: z
                                              .array(
                                                z
                                                  .object({
                                                    bandId: BandIdSchema.exactOptional(),
                                                    maximumCountRequired: z
                                                      .int()
                                                      .exactOptional()
                                                      .openapi({
                                                        description:
                                                          '**maximum number** of participants allowed for *this* tour grade',
                                                      }),
                                                    minimumCountRequired: z
                                                      .int()
                                                      .exactOptional()
                                                      .openapi({
                                                        description:
                                                          '**minimum number** of participants required for *this* tour grade',
                                                      }),
                                                    prices: z
                                                      .array(
                                                        z
                                                          .object({
                                                            currencyCode: z
                                                              .string()
                                                              .exactOptional()
                                                              .openapi({
                                                                description:
                                                                  '**currency code** of the currency in which pricing details are displayed',
                                                              }),
                                                            merchantNetPrice: z
                                                              .number()
                                                              .exactOptional()
                                                              .openapi({
                                                                description:
                                                                  '**numeric merchant net rate** for *this* age band\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                                                              }),
                                                            merchantNetPriceFormatted: z
                                                              .string()
                                                              .exactOptional()
                                                              .openapi({
                                                                description:
                                                                  '**currency-formatted merchant net rate** for *this* age band\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                                                              }),
                                                            minNoOfTravellersRequiredForPrice: z
                                                              .int()
                                                              .exactOptional(),
                                                            price: z
                                                              .number()
                                                              .exactOptional()
                                                              .openapi({
                                                                description:
                                                                  '**numeric suggested retail price** for *this* age band\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                                                              }),
                                                            priceFormatted: z
                                                              .string()
                                                              .exactOptional()
                                                              .openapi({
                                                                description:
                                                                  '**currency-formatted suggested retail price** for *this* age band\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                                                                example: '799',
                                                              }),
                                                            sortOrder: z
                                                              .int()
                                                              .exactOptional()
                                                              .openapi({
                                                                description:
                                                                  '**sort order** *this* pricing detail object',
                                                              }),
                                                          })
                                                          .openapi({ required: [] }),
                                                      )
                                                      .exactOptional()
                                                      .openapi({
                                                        description:
                                                          '**array** of pricing detail objects',
                                                      }),
                                                    sortOrder: z
                                                      .int()
                                                      .exactOptional()
                                                      .openapi({
                                                        description:
                                                          '**sort order** for *this* tour grade',
                                                      }),
                                                  })
                                                  .openapi({ required: [] }),
                                              )
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  '**array** of pricing objects by age band',
                                              }),
                                            bookingDate: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  '**date** on which *this* product operates',
                                              }),
                                            pricingUnit: z
                                              .string()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  '**natural-language description** of the pricing mode\n- see [Understanding the pricingUnit field](#section/Using-the-API/Understanding-the-pricingUnit-field) for more information\n',
                                              }),
                                            sortOrder: z
                                              .int()
                                              .exactOptional()
                                              .openapi({
                                                description:
                                                  '**sort order** for *this* pricing object',
                                              }),
                                          })
                                          .openapi({ required: [] }),
                                      )
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '**array of pricing objects** for *this* tour grade',
                                      }),
                                    sortOrder: z
                                      .int()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '**sort order** for *this* tour grade pricing object',
                                      }),
                                  })
                                  .openapi({ required: [] }),
                              )
                              .exactOptional()
                              .openapi({
                                description: '**array** of tour grade pricing information objects',
                              }),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          '**array of tour grade pricing objects** each detailing availability on a single day',
                      }),
                    pricingUnit: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**natural-language label** for the pricing terms of this tour grade\n- see [Understanding the pricingUnit field](#section/Using-the-API/Understanding-the-pricingUnit-field) for more information\n',
                      }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': BookingAvailablilityTourgradesPricingmatrixExampleExample },
        },
      },
    },
  },
})

export const postBookingBookRoute = createRoute({
  method: 'post',
  path: '/booking/book',
  tags: ['Booking services'],
  summary: '/booking/book',
  description:
    'Make a booking\n\nFor more information, see: \n\n  - [Cancellation policy](#section/Key-concepts/Cancellation-policy)\n  - [Booking concepts](#section/Key-concepts/Booking-concepts)\n  - [Booking process flow](#section/Common-workflows-and-data-validation/Booking-process-flow)\n  - [Making a booking](#section/Common-workflows-and-data-validation/Making-a-booking)\n  - [Supplier communications](#section/Key-concepts/Supplier-communications)\n',
  operationId: 'bookingBook',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              booker: z
                .object({
                  cellPhone: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        '**telephone number** of the lead traveler\n\n**Note**:\n\n  * Must be included to enable CLC communications\n  * See [Supplier communications](#section/Merchant-APIs/Supplier-communications) for more information\n',
                    }),
                  cellPhoneCountryCode: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        '**country code** for the telephone number of the lead traveler\n\n**Note**: \n\n  * Must be included to enable CLC communications. \n  * See [Supplier communications](#section/Merchant-APIs/Supplier-communications) for more information\n',
                    }),
                  email: z
                    .string()
                    .exactOptional()
                    .openapi({ description: '**email address** of the primary contact' }),
                  firstname: z
                    .string()
                    .openapi({ description: '**first name** of the primary contact\n' }),
                  homePhone: z
                    .string()
                    .exactOptional()
                    .openapi({ description: '**phone number** (home) of the primary contact' }),
                  surname: z
                    .string()
                    .openapi({ description: '**surname** of the primary contact' }),
                  title: z
                    .string()
                    .exactOptional()
                    .openapi({ description: '**title** of the primary contact' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    "**object** containing details about the primary contact (**note**: this contact needn't be a traveller)",
                  required: ['firstname', 'surname'],
                }),
              currencyCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**currency code** for the currency the booking will be submitted in (you will be billed in this currency)',
                }),
              demo: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '**specifier**: `true` if this is a *demo* booking only (demos do not send any notifications, are automatically confirmed and OnRequest products become freesale products. Default value is true. Production must have `demo` set to `false`.',
                }),
              items: z
                .array(
                  z
                    .object({
                      bookingQuestionAnswers: z
                        .array(
                          z
                            .object({
                              answer: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    '**answer** to the question for the `questionId` listed (recommended length for the answer is 500 characters)\n\n**Note**: To specify answers for each traveler, separate the values with a comma as in the per_person_booking_questions request example\n',
                                }),
                              questionId: z
                                .int()
                                .exactOptional()
                                .openapi({
                                  description:
                                    '**numeric identifier** for the question (**note**: `questionId` can be retrieved from the [/product](#operation/product) service)',
                                }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            '**array** of objects containing booking questions and the answers provided for them for *this* product\n- If a booking question is available in the `bookingQuestions` array in the response from [/product](#operation/product) for *this* product, the matching `bookingQuestionAnswers` must be passed to *this* service. \n- If a product does not have any booking questions, you can omit the `bookingQuestionAnswers` array in your request. \n- Any invalid or unrequired booking-question answers that are passed to *this* service will be ignored (and, no exceptions will be raised) \n- You will need to include this array if [/product](#operation/product) returns any questions in the `bookingQuestions` array.\n',
                        }),
                      hotelId: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            '**specifer** of the hotel\nIf [/product](#operation/product) returns `hotelPickup`: `true` and a list of hotels is available for *this* product in [/booking/hotels](#operation/bookingHotels), a `hotelId` must be captured (as per the hotel service id field); or, use an alternative `hotelId`, such as:\n \n - `"notBooked"`: the customer has not yet booked their hotel\n - `"notListed"`: the customer\'s hotel is not listed\n\n If the customer chooses one of these options, the product supplier may need to correspond with the user to find out their pick-up location. The best way to do this is by enabling [Closed-Loop-Communication (CLC)](#section/Merchant-APIs/Supplier-communications).\n',
                        }),
                      languageOptionCode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            '**specifier** of language service provided for this product that has been chosen for this booking (usually in the format langcode/Service eg en/SERVICE_GUIDE. If the product details service [/product](#operation/product) for the product returns a langService, this must be provided.)',
                        }),
                      partnerItemDetail: z
                        .object({
                          distributorItemRef: z
                            .string()
                            .exactOptional()
                            .openapi({
                              description:
                                "**unique alphanumeric code** for the order ('itinerary') (merchant API partners must pass a `distributorItemRef` into the `partnerItemDetails` object for each item in *this* object\n- this code can be any alphanumeric string and is defined by the distributor\n",
                            }),
                        })
                        .exactOptional()
                        .openapi({
                          description: '**object** containing partner details at a per-item level',
                          required: [],
                        }),
                      pickupPoint: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "**details** about the hotel pick-up point (must be provided if the `hotelId` selected by the user is `'notListed'` or if no hotels are returned for *this* product in [/booking/hotels](#operation/bookingHotels) where `hotelPickup` is `true`.",
                        }),
                      productCode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            '**unique alphanumeric identifier** of the product to be booked',
                        }),
                      specialRequirements: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            '**text field** to capture any additional requirements for the booking, such as dietary requirements or if a wheelchair is required',
                        }),
                      tourGradeCode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            "**specifier** of the tour grade to be booked (if tour grades are supplied in [/product](#operation/product), you must allow the customer to select a tour grade code. If no tour grades are available for *this* product, set this to `'DEFAULT'`.)",
                        }),
                      travelDate: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: '**date** of travel for the item in format yyyy-mm-dd',
                        }),
                      travellers: z
                        .array(
                          z
                            .object({
                              bandId: BandIdSchema.exactOptional(),
                              firstname: z
                                .string()
                                .exactOptional()
                                .openapi({ description: '**first name** of *this* traveller' }),
                              leadTraveller: z
                                .boolean()
                                .exactOptional()
                                .openapi({
                                  description:
                                    '**indicator**: `true` if this traveler is the lead traveler',
                                }),
                              surname: z
                                .string()
                                .exactOptional()
                                .openapi({ description: '**surname** of *this* traveler' }),
                              title: z
                                .string()
                                .exactOptional()
                                .openapi({
                                  description:
                                    "**title** of the traveler (e.g `'Mr'`, `'Mrs'`, `'Ms'`, `'Miss'`, `'Mstr'`, `'Dr'`)",
                                }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            '**array** of traveler names, details and whether they are the lead traveller',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: '**array** of items to be booked' }),
              partnerDetail: z
                .object({
                  distributorRef: z
                    .string()
                    .exactOptional()
                    .openapi({
                      description:
                        "**unique alphanumeric reference code** for the distributor\n- Merchant API partners must pass a `distributorRef` at the order (A.K.A. 'itinerary') level in the `partnerDetail` object. The `distributorRef` passed must be alphanumeric and unique to bookings made by the merchant.\n- Passing an existing `distributorRef`: If an existing `distributorRef` is passed, the booking with the matching `distributorRef` will be returned in the response and a new booking will not be made. The fields in the response are identical to the response for a new booking.\n",
                    }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Applicable only for extra partner detail for either partner or merchant partner for sending partner specific information\n',
                  required: [],
                }),
            })
            .openapi({ required: [] }),
          examples: {
            per_person_booking_questions: {
              value: {
                booker: {
                  email: 'apitest@viator.com',
                  firstname: 'Homer Test',
                  surname: 'Simpson Test',
                  title: 'Mr',
                },
                currencyCode: 'USD',
                demo: true,
                items: [
                  {
                    bookingQuestionAnswers: [
                      { answer: '0123456789, 9876543210', questionId: 5 },
                      { answer: 'Australia, Fiji', questionId: 4 },
                      { answer: '01 July 2022, 31 May 2022', questionId: 3 },
                    ],
                    hotelId: { $ref: '#/components/examples/product-example-1/value/data/pas' },
                    languageOptionCode: 'en/SERVICE_GUIDE',
                    partnerItemDetail: { distributorItemRef: 'distroItemRef8348234535_1' },
                    pickupPoint: { $ref: '#/components/examples/product-example-1/value/data/pas' },
                    productCode: '100022P1',
                    specialRequirements: '',
                    tourGradeCode: 'TG1',
                    travelDate: '2020-12-30',
                    travellers: [
                      {
                        bandId: 1,
                        firstname: 'Homer1',
                        leadTraveller: true,
                        surname: 'Simpson Test',
                        title: 'Mr',
                      },
                      {
                        bandId: 1,
                        firstname: 'Homer2',
                        leadTraveller: true,
                        surname: 'Simpson Test',
                        title: 'Mr',
                      },
                    ],
                  },
                ],
                partnerDetail: { distributorRef: 'distroRef34398534535' },
              },
            },
            single_traveler: {
              value: {
                booker: {
                  cellPhone: '0411041041',
                  cellPhoneCountryCode: '61',
                  email: 'apitest@viator.com',
                  firstname: 'Homer test',
                  homePhone: '83798517',
                  surname: 'Simpson test',
                  title: 'Mr',
                },
                currencyCode: 'USD',
                demo: true,
                items: [
                  {
                    bookingQuestionAnswers: [{ answer: '70 kgs', questionId: 23 }],
                    hotelId: '1091770',
                    languageOptionCode: 'en/SERVICE_GUIDE',
                    partnerItemDetail: { distributorItemRef: 'itemRef1000000' },
                    pickupPoint: { $ref: '#/components/examples/product-example-1/value/data/pas' },
                    productCode: '2280AAHT',
                    specialRequirements: '',
                    tourGradeCode: 'TG1~08:00',
                    travelDate: '2020-12-31',
                    travellers: [
                      {
                        bandId: 1,
                        firstname: 'Homer test',
                        leadTraveller: true,
                        surname: 'Simpson test',
                        title: 'Mr',
                      },
                    ],
                  },
                ],
                partnerDetail: { distributorRef: 'distributorRef100000' },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .object({
                    bookerEmail: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: '**email address** of the entity that made *this* booking',
                      }),
                    bookingDate: z
                      .string()
                      .exactOptional()
                      .openapi({ description: '**date** of *this* booking' }),
                    bookingStatus: BookingStatusItinerarySchema.exactOptional(),
                    currencyCode: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**currency code** of the currency in which *this* booking was made',
                      }),
                    distributorRef: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    exchangeRate: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    hasVoucher: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    itemSummaries: z
                      .array(
                        z
                          .object({
                            applePassSupported: z
                              .boolean()
                              .exactOptional()
                              .openapi({ description: '' }),
                            barcodeOption: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Indicates whether a voucher is required for each passenger; or, whether the requirement is one voucher per group booking.',
                              }),
                            barcodeType: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: '**alphanumeric code** specifying the type of barcode',
                              }),
                            bookingEngineId: BookingEngineIdResponseSchema.exactOptional(),
                            bookingStatus: BookingStatusItemSchema.exactOptional(),
                            currencyCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**currency code** for the currency in which pricing is displayed for *this* item',
                              }),
                            departsFrom: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  "**natural-language description** of *this* item's departure location",
                              }),
                            departurePoint: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  "**natural-language description** of *this* item's departure point",
                              }),
                            departurePointAddress: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  "**HTML-formatted address** of *this* item's departure point",
                              }),
                            departurePointDirections: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  "**natural-language description** of directions regarding *this* item's departure point",
                              }),
                            destId: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**unique numeric identifer** of the destination of *this* item',
                              }),
                            distributorItemRef: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            hoursConfirmed: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'The `hoursConfirmed` field also indicates if the product is freesale or on request. The `hoursConfirmed` value is the approximate window for confirmation in hours, which can be presented to the customer. A value of `0` means that the product is **freesale**, and a value greater than `0` means that the product is **on-request**.\n',
                              }),
                            itemId: z
                              .int()
                              .exactOptional()
                              .openapi({ description: '**numeric identifer** of *this* item' }),
                            itineraryId: z
                              .int()
                              .exactOptional()
                              .openapi({ description: 'Ignore (Viator only)' }),
                            languageServicesCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**code** for the language that this product operates in',
                              }),
                            lastRetailPrice: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description: '**numeric merchant net rate** of *this* item',
                              }),
                            lastRetailPriceFormatted: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**currency-formatted merchant net rate** of *this* item',
                              }),
                            leadTravellerFirstname: z
                              .string()
                              .exactOptional()
                              .openapi({ description: '**first name** of the lead traveler' }),
                            leadTravellerSurname: z
                              .string()
                              .exactOptional()
                              .openapi({ description: '**surname** of the lead traveler' }),
                            leadTravellerTitle: z
                              .string()
                              .exactOptional()
                              .openapi({ description: "**title** of the lead traveler's name" }),
                            merchantCancellable: z
                              .boolean()
                              .exactOptional()
                              .openapi({
                                description:
                                  'ignore (Viator only)\n\nFor cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object\n',
                              }),
                            merchantNetPrice: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**numeric merchant net rate** for *this* item"\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            merchantNetPriceFormatted: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**currency-formatted merchant net rate** for *this* item\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            merchantTermsAndConditions: z
                              .object({
                                amountRefundable: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**currency-formatted** amount that will be refunded if the cancellation is processed now.',
                                  }),
                                cancellationFromTourDate: z
                                  .array(
                                    z
                                      .object({
                                        dayRangeMax: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**number** of days prior to the tour start date that *this* policy window begins. `null` signifies open-endedness',
                                          }),
                                        dayRangeMin: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**number** of days prior to the tour start date that *this* policy window ends',
                                          }),
                                        percentageRefundable: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**percentage** of total price refundable if cancelled within *this* time window',
                                          }),
                                        policyEndTimestamp: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**Unix timestamp** giving the exact time the policy ends',
                                          }),
                                        policyStartTimestamp: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**Unix timestamp** giving the exact time the policy commences',
                                          }),
                                      })
                                      .openapi({ required: [] }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description: '**array** of cancellation policy objects',
                                  }),
                                termsAndConditions: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**natural-language description** of the terms and conditions for *this* product',
                                  }),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            obfsId: z
                              .int()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            passbooks: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            pickupHotelId: z
                              .string()
                              .exactOptional()
                              .openapi({ description: '**identifer** for the pick-up hotel' }),
                            pickupHotelName: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: '**natural-language name** of the pick-up hotel',
                              }),
                            price: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**numeric merchant total price** for *this* item\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            priceFormatted: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**currency-formatted merchant total price** for *this* item\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            priceUSD: z
                              .number()
                              .exactOptional()
                              .openapi({ description: '**numeric merchant total price** in USD' }),
                            productCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: '**unique alphanumeric identifier** of *this* product',
                              }),
                            productPulledDown: z
                              .boolean()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            productTitle: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: '**natural-language title** of *this* product',
                              }),
                            productWidgetList: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            rulesApplied: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            savingAmount: SavingAmountSchema.exactOptional(),
                            savingAmountFormated: SavingAmountFormatedSchema.exactOptional(),
                            sortOrder: z
                              .int()
                              .exactOptional()
                              .openapi({ description: '**sort order** of *this* item summary' }),
                            startingTime: z
                              .string()
                              .exactOptional()
                              .openapi({ description: '**starting time** of this product' }),
                            supplierName: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  "**natural-language name** of *this* product's supplier",
                              }),
                            supplierPhoneNumber: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: "**telephone number** of *this* product's supplier",
                              }),
                            termsAndConditions: z
                              .object({})
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            tourGradeCode: z
                              .string()
                              .exactOptional()
                              .openapi({ description: '**identifer** of *this* tour grade' }),
                            tourGradeDescription: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language description** of *this* tour grade',
                              }),
                            travelDate: z
                              .string()
                              .exactOptional()
                              .openapi({ description: '**date** of travel' }),
                            travellerAgeBands: z
                              .array(
                                z
                                  .object({
                                    ageBandId: AgeBandIdSchema.exactOptional(),
                                    count: z
                                      .int()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '**numeric** number of travelers in *this* age band',
                                      }),
                                    description: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '**natural-language description** (singular) of *this* age band',
                                      }),
                                    pluralDescription: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '**natural-language description** (plural) of *this* age band',
                                      }),
                                    sortOrder: z
                                      .int()
                                      .exactOptional()
                                      .openapi({
                                        description: '**sort order** for *this* age band',
                                      }),
                                  })
                                  .openapi({ required: [] }),
                              )
                              .exactOptional()
                              .openapi({
                                description:
                                  '**array** of objects detailing the traveler age bands',
                              }),
                            voucherKey: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints',
                              }),
                            voucherOption: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            voucherRequirements: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language description** of the requirements pertaining to this voucher',
                              }),
                            voucherURL: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.',
                              }),
                            vouchers: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional()
                      .openapi({ description: '**array** of item summaries' }),
                    itineraryId: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    omniPreRuleList: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    paypalRedirectURL: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    rulesApplied: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    securityToken: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    sortOrder: z
                      .int()
                      .exactOptional()
                      .openapi({ description: '**sort order** for *this* object' }),
                    totalPrice: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description:
                          '**numeric merchant total price** for *this* booking\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                      }),
                    totalPriceFormatted: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**currency-formatted merchant total price** for *this* booking\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                      }),
                    totalPriceUSD: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description: '**numeric merchant total price** of *this* booking in USD',
                      }),
                    userId: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    voucherKey: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints',
                      }),
                    voucherURL: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.',
                      }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': BookingBookExampleExample },
        },
      },
    },
  },
})

export const postBookingCalculatepriceRoute = createRoute({
  method: 'post',
  path: '/booking/calculateprice',
  tags: ['Booking services'],
  summary: '/booking/calculateprice',
  description:
    'Confirm the price of a tour / activity prior to booking\n\nFor more information, see: [Calculating prices](#section/Common-workflows-and-data-validation/Calculating-prices)  \n\n- **Note**: Availability and pricing data is limited to a period of **six months** into the future from the present time\n',
  operationId: 'bookingCalculateprice',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currencyCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**currency code** for the currency in which to display pricing details',
                }),
              items: z
                .array(
                  z
                    .object({
                      productCode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            '**unique alphanumeric identifier** of the product the total price for which you which to calculate',
                        }),
                      tourGradeCode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            '**alphanumeric identifier** for the tour grade for which to calculate the total price',
                        }),
                      travelDate: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            '**date** for which to calculate the total price (must be in the future)',
                        }),
                      travellers: z
                        .array(
                          z
                            .object({ bandId: BandIdSchema.exactOptional() })
                            .openapi({ required: [] }),
                        )
                        .exactOptional()
                        .openapi({
                          description:
                            '**array of objects** detailing the age bands for which to calculate the total price',
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({ description: '**array** of travel detail objects' }),
            })
            .openapi({ required: [] }),
          example: {
            currencyCode: 'USD',
            items: [
              {
                productCode: '5010SYDNEY',
                tourGradeCode: '24HOUR',
                travelDate: '2020-12-12',
                travellers: [{ bandId: 1 }],
              },
            ],
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .object({
                    currencyCode: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**specifier of the currency** in which pricing details are displayed',
                      }),
                    hasPromoCode: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    itinerary: z
                      .object({
                        bookerEmail: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        bookingDate: z
                          .string()
                          .exactOptional()
                          .openapi({ description: '**date** of *this* booking' }),
                        bookingStatus: BookingStatusItinerarySchema.exactOptional(),
                        currencyCode: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**specifier** of the currency in which pricing details are displayed',
                          }),
                        distributorRef: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        exchangeRate: z
                          .int()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        hasVoucher: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        itemSummaries: z
                          .array(
                            z
                              .object({
                                applePassSupported: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({ description: 'ignore (Viator only)' }),
                                barcodeOption: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Indicates whether a voucher is required for each passenger; or, whether the requirement is one voucher per group booking.',
                                  }),
                                barcodeType: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: '**alphanumeric specifier** of the barcode type',
                                  }),
                                bookingEngineId: BookingEngineIdResponseSchema.exactOptional(),
                                bookingStatus: BookingStatusItemSchema.exactOptional(),
                                currencyCode: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**currency code** for the currency in which pricing details are displayed',
                                  }),
                                departsFrom: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      "**natural-language description** of *this* item's general departure location",
                                  }),
                                departurePoint: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      "**HTML-formatted description** of *this* product's departure location(s)",
                                  }),
                                departurePointAddress: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      "**HTML-formatted description** of *this* product's departure address",
                                  }),
                                departurePointDirections: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      "**HTML-formatted descriptive notes** about *this* product's departure location",
                                  }),
                                destId: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**unique numeric id** of the destination associated with *this* product',
                                  }),
                                distributorItemRef: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ description: 'ignore (Viator only)' }),
                                hoursConfirmed: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'The `hoursConfirmed` field also indicates if the product is freesale or on request. The `hoursConfirmed` value is the approximate window for confirmation in hours, which can be presented to the customer. A value of `0` means that the product is **freesale**, and a value greater than `0` means that the product is **on-request**.\n',
                                  }),
                                itemId: z
                                  .int()
                                  .exactOptional()
                                  .openapi({ description: 'ignore (Viator only)' }),
                                itineraryId: z
                                  .int()
                                  .exactOptional()
                                  .openapi({ description: 'ignore (Viator only)' }),
                                languageServicesLanguageCode: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ description: 'ignore (Viator only)' }),
                                lastRetailPrice: z
                                  .number()
                                  .exactOptional()
                                  .openapi({ description: 'ignore (Viator only)' }),
                                lastRetailPriceFormatted: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**currency-formatted most recent retail price** for *this* item',
                                  }),
                                leadTravellerFirstname: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ description: 'ignore (Viator only)' }),
                                leadTravellerSurname: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ description: 'ignore (Viator only)' }),
                                leadTravellerTitle: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: "**title** of the lead traveler's name",
                                  }),
                                merchantCancellable: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'ignore (Viator only)\n\nFor cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object\n',
                                  }),
                                merchantNetPrice: z
                                  .number()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**numeric merchant net rate** for *this* product\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                                  }),
                                merchantNetPriceFormatted: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**currency-formatted merchant net rate** for *this* product\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                                  }),
                                obfsId: z
                                  .int()
                                  .exactOptional()
                                  .openapi({ description: 'ignore (Viator only)' }),
                                passbooks: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ description: 'ignore (Viator only)' }),
                                pickupHotelId: z
                                  .int()
                                  .exactOptional()
                                  .openapi({ description: 'ignore (Viator only)' }),
                                pickupHotelName: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ description: 'ignore (Viator only)' }),
                                price: z
                                  .number()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**numeric suggested retail price** for *this* product\n- For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)\n',
                                  }),
                                priceFormatted: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**currency-formatted suggested retail price** for *this* product\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                                  }),
                                priceUSD: z
                                  .number()
                                  .exactOptional()
                                  .openapi({
                                    description: '**numeric price of *this* product** in USD',
                                  }),
                                productCode: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**unique alphanumeric identifier** of *this* product',
                                  }),
                                productPulledDown: z
                                  .boolean()
                                  .exactOptional()
                                  .openapi({ description: 'ignore (Viator only)' }),
                                productTitle: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: '**natural-language title** of *this* product',
                                  }),
                                productWidgetList: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ description: 'ignore (Viator only)' }),
                                rulesApplied: z
                                  .array(z.string())
                                  .exactOptional()
                                  .openapi({
                                    description: '**array** of rules applied to *this* item',
                                  }),
                                savingAmount: SavingAmountSchema.exactOptional(),
                                savingAmountFormated: SavingAmountFormatedSchema.exactOptional(),
                                sortOrder: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description: '**sort-order** of *this* item summary',
                                  }),
                                startingTime: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      "**starting time** of the tour in the supplier's local time zone",
                                  }),
                                supplierName: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      "**natural-language name** of *this* product's supplier",
                                  }),
                                supplierPhoneNumber: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ description: '**telephone number** of the supplier' }),
                                termsAndConditions: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ description: 'ignore (Viator only)' }),
                                tourGradeCode: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description: '**alphanumeric specifier** of the tour grade',
                                  }),
                                tourGradeDescription: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      "**natural-language description** of *this* item's tour grade",
                                  }),
                                travelDate: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      "**date** on which *this* product will operate (in the supplier's local time zone)",
                                  }),
                                travellerAgeBands: z
                                  .array(
                                    z
                                      .object({
                                        ageBandId: AgeBandIdSchema.exactOptional(),
                                        count: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description: '**number of travelers in *this* age band',
                                          }),
                                        description: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**natural-language** description (singular) of *this* age band',
                                          }),
                                        pluralDescription: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**natural-language** description (plural) of *this* age band',
                                          }),
                                        sortOrder: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description: '**sort order** for *this* age band',
                                          }),
                                      })
                                      .openapi({ required: [] }),
                                  )
                                  .exactOptional()
                                  .openapi({ description: '**array** of age-band objects' }),
                                voucherKey: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints',
                                  }),
                                voucherOption: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**alphanumeric specifier** of the relevant voucher option',
                                  }),
                                voucherRequirements: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**natural-language description** of the voucher requirements for this tour (**note:** Should agree with value in `voucherOption` field)',
                                  }),
                                voucherURL: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.',
                                  }),
                                vouchers: z
                                  .string()
                                  .exactOptional()
                                  .openapi({ description: 'ignore (Viator only)' }),
                              })
                              .openapi({ required: [] }),
                          )
                          .exactOptional()
                          .openapi({ description: '**array** of item summaries' }),
                        itineraryId: z
                          .int()
                          .exactOptional()
                          .openapi({ description: '**numeric identifier** for *this* order' }),
                        omniPreRuleList: z
                          .int()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        paypalRedirectURL: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        rulesApplied: z
                          .array(z.string())
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        securityToken: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        sortOrder: z
                          .int()
                          .exactOptional()
                          .openapi({ description: '**sort order** for *this* itinerary' }),
                        totalPrice: z
                          .number()
                          .exactOptional()
                          .openapi({
                            description:
                              '**numeric total price (total)** for *this* order\n- For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)\n',
                          }),
                        totalPriceFormatted: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**currency-formatted total price (including transaction fee)** for *this* order\n- For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)\n',
                          }),
                        totalPriceUSD: z
                          .number()
                          .exactOptional()
                          .openapi({
                            description: '**numeric total price** of *this* order in USD',
                          }),
                        userId: z
                          .int()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        voucherKey: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              'Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints',
                          }),
                        voucherURL: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.',
                          }),
                      })
                      .exactOptional()
                      .openapi({
                        description: '**summary results** for all itinerary items',
                        required: [],
                      }),
                    itineraryFromPrice: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    itineraryFromPriceFormatted: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    itineraryNewPrice: z
                      .number()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    itineraryNewPriceFormatted: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    itinerarySaving: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    itinerarySavingFormatted: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    paymentGatewayInfo: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    promoCode: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    promoCodeExpired: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    promoCodeValid: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    rulesApplied: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': BookingCalculatepriceExampleExample },
        },
      },
    },
  },
})

export const getBookingHotelsRoute = createRoute({
  method: 'get',
  path: '/booking/hotels',
  tags: ['Booking services'],
  summary: '/booking/hotels',
  description:
    'Get hotel pick-ups\nLists the hotel pickups available for either a product or a destination\n',
  operationId: 'bookingHotels',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    query: z.object({ productCode: ProductCodeParamsSchema, destId: DestIdParamsSchema }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .array(
                    z
                      .object({
                        address: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**natural-language address** of hotel pick-up point',
                          }),
                        brand: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        city: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**natural-language name** of the destination that *this* hotel pick-up point pertains to',
                          }),
                        destinationId: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              '**unique numeric identifer** of the destination that *this* hotel pick-up point pertains to',
                          }),
                        hotelString: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        id: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**identifier** of *this* hotel pick-up point`',
                          }),
                        latitude: z
                          .number()
                          .exactOptional()
                          .openapi({
                            description:
                              "**numeric latitude component** of *this* hotel pick-up point's geolocation",
                          }),
                        longitude: z
                          .number()
                          .exactOptional()
                          .openapi({
                            description:
                              "**numeric longitude component** of *this* hotel pick-up point's geolocation",
                          }),
                        name: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**natural-language name** of hotel pick-up point',
                          }),
                        notes: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**natural-language notes** about *this* hotel pick-up point',
                          }),
                        phone: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**phone number** of *this* hotel pick-up point',
                          }),
                        postcode: z
                          .string()
                          .exactOptional()
                          .openapi({ description: '**post code** of *this* hotel pick-up point' }),
                        productCodes: z
                          .array(z.string())
                          .exactOptional()
                          .openapi({
                            description:
                              '**array** of product codes pertaining to *this* hotel pick-up point',
                          }),
                        sortOrder: z
                          .int()
                          .exactOptional()
                          .openapi({ description: '**sort-order** of *this* hotel pick-up point' }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({ description: '**array** of hotel pick-up objects' }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': BookingHotelsExample_1Example, '2': BookingHotelsExample_2Example },
        },
      },
    },
  },
})

export const getBookingMybookingsRoute = createRoute({
  method: 'get',
  path: '/booking/mybookings',
  tags: ['Booking services'],
  summary: '/booking/mybookings',
  description:
    "Get a user's bookings with travel dates in the future. \n\nThis service can also be used to check the status of a booking. \n\n**Provide either:** \n- A `voucherKey`, **or...** \n- An email address (`email`) and a booking reference (`itineraryOrItemId`) ([Booking Reference](#section/Key-concepts/Booking-references))\n",
  operationId: 'bookingMybookings',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    query: z.object({
      voucherKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '**voucher key** for the booking',
            example:
              '3299307:93c7f36a56b18ba1068787ba7fb7988da5c8ad08db77604110141ff21498603e:600033670',
            in: 'query',
            name: 'voucherKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '**email address** of the booker for the booking',
            example: 'apitest@viator.com',
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            required: false,
          },
        }),
      itineraryOrItemId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The booking reference number of the item\n- **Note**: For more information, see [Booking references](#section/Key-concepts/Booking-references)\n',
            example: '700179574',
            in: 'query',
            name: 'itineraryOrItemId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .object({
                    bookerEmail: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: '**email address** of the entity that booked the tour',
                      }),
                    bookingDate: z
                      .string()
                      .exactOptional()
                      .openapi({ description: '**date** on which the booking was made' }),
                    bookingStatus: BookingStatusItinerarySchema.exactOptional(),
                    currencyCode: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**currency code** for the currency in which pricing is displayed',
                      }),
                    distributorRef: z
                      .string()
                      .exactOptional()
                      .openapi({ description: '**reference code** for the distributor' }),
                    exchangeRate: z
                      .int()
                      .exactOptional()
                      .openapi({ description: '**exchange rate** applied to the pricing' }),
                    hasVoucher: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: '**indicator**: `true` if a voucher exists' }),
                    itemSummaries: z
                      .array(
                        z
                          .object({
                            barcodeOption: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Indicates whether a voucher is required for each passenger; or, whether the requirement is one voucher per group booking.',
                              }),
                            barcodeType: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: '**alphanumeric code** specifying the type of barcode',
                              }),
                            bookingEngineId: BookingEngineIdResponseSchema.exactOptional(),
                            bookingStatus: BookingStatusItemSchema.exactOptional(),
                            currencyCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**currency code** for the currency in which pricing is displayed',
                              }),
                            departsFrom: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  "**natural-language description** of *this* item's departure location",
                              }),
                            departurePoint: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  "**natural-language description** of the product's departure point",
                              }),
                            departurePointAddress: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language address** of the departure point for the product',
                              }),
                            departurePointDirections: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language description** of how to access the departure point for the product',
                              }),
                            destId: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**unique numeric identifier** of the destination in which the product operates',
                              }),
                            distributorItemRef: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**alphanumeric reference code** of the distributor item',
                              }),
                            hoursConfirmed: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  'The `hoursConfirmed` field also indicates if the product is freesale or on request. The `hoursConfirmed` value is the approximate window for confirmation in hours, which can be presented to the customer. A value of `0` means that the product is **freesale**, and a value greater than `0` means that the product is **on-request**.\n',
                              }),
                            itemId: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Booking-reference number generated by Viator\n- **Note**: For more information, see: [Booking references](#section/Key-concepts/Booking-references)\n',
                              }),
                            itineraryId: z
                              .int()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            languageServicesLanguageCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**language code** for the language that the product operates in',
                              }),
                            lastRetailPrice: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**currency-formatted merchant net rate** of *this* item',
                              }),
                            lastRetailPriceFormatted: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: '**currency-formatted retail price** of *this* item',
                              }),
                            leadTravellerFirstname: z
                              .string()
                              .exactOptional()
                              .openapi({ description: '**first name** of the lead traveler' }),
                            leadTravellerSurname: z
                              .string()
                              .exactOptional()
                              .openapi({ description: '**surname** of the lead traveler' }),
                            leadTravellerTitle: z
                              .string()
                              .exactOptional()
                              .openapi({ description: "**title** of the lead traveler's name" }),
                            merchantCancellable: z
                              .boolean()
                              .exactOptional()
                              .openapi({
                                description:
                                  'ignore (Viator only)\n\nFor cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object\n',
                              }),
                            merchantNetPrice: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**currency-formatted merchant net rate** of *this* item\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            merchantNetPriceFormatted: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**currency-formatted merchant net rate** of *this* item\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            merchantTermsAndConditions: z
                              .object({
                                amountRefundable: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**currency-formatted** amount that will be refunded if the cancellation is processed now.',
                                  }),
                                cancellationFromTourDate: z
                                  .array(
                                    z
                                      .object({
                                        dayRangeMax: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**number** of days prior to the tour start date that *this* policy window begins. `null` signifies open-endedness',
                                          }),
                                        dayRangeMin: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**number** of days prior to the tour start date that *this* policy window ends',
                                          }),
                                        percentageRefundable: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**percentage** of total price refundable if cancelled within *this* time window',
                                          }),
                                        policyEndTimestamp: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**Unix timestamp** giving the exact time the policy ends',
                                          }),
                                        policyStartTimestamp: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**Unix timestamp** giving the exact time the policy commences',
                                          }),
                                      })
                                      .openapi({ required: [] }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description: '**array** of cancellation policy objects',
                                  }),
                                termsAndConditions: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**natural-language description** of the terms and conditions for *this* product',
                                  }),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            obfsId: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            passbooks: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            price: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**numeric merchant total price** of the product that was booked\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            priceFormatted: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**currency-formatted merchant total price** for *this* booking\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            priceUSD: z.number().exactOptional(),
                            productCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**unique alphanumeric identifier** of the product that was booked',
                              }),
                            productPulledDown: z.boolean().exactOptional(),
                            productTitle: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language description** of the product that was booked',
                              }),
                            productWidgetList: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            rulesApplied: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            savingAmount: SavingAmountSchema.exactOptional(),
                            savingAmountFormated: SavingAmountFormatedSchema.exactOptional(),
                            sortOrder: z
                              .int()
                              .exactOptional()
                              .openapi({ description: '**sort order** of *this* item summary' }),
                            termsAndConditions: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            tourGradeCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**alphanumeric identifier** of the tour grade of the product that was booked',
                              }),
                            tourGradeDescription: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language description** of *this* tour grade',
                              }),
                            travelDate: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: '**date** of travel for the product that was booked',
                              }),
                            travellerAgeBands: z
                              .array(
                                z
                                  .object({
                                    ageBandId: AgeBandIdSchema.exactOptional(),
                                    count: z
                                      .int()
                                      .exactOptional()
                                      .openapi({
                                        description: '**number** of travelers in *this* age band',
                                      }),
                                    description: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '**natural-language description** (singular) of *this* age band',
                                      }),
                                    pluralDescription: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '**natural-language description** (plural) of *this* age band',
                                      }),
                                    sortOrder: z
                                      .int()
                                      .exactOptional()
                                      .openapi({
                                        description: '**sort order** for *this* age band',
                                      }),
                                  })
                                  .openapi({ required: [] }),
                              )
                              .exactOptional()
                              .openapi({ description: '**array** of age band objects' }),
                            voucherKey: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints',
                              }),
                            voucherOption: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**specifier** of the rules pertaining to the use of the voucher',
                              }),
                            voucherRequirements: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language description** of the requirements for using the voucher',
                              }),
                            voucherURL: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.',
                              }),
                            vouchers: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional()
                      .openapi({ description: '**array** of item summary objects' }),
                    itineraryId: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    rulesApplied: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    sortOrder: z
                      .int()
                      .exactOptional()
                      .openapi({ description: '**sort order** for the booking object' }),
                    totalPrice: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description:
                          '**numeric merchant total price** for *this* booking\nFor more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                      }),
                    totalPriceFormatted: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**currency-formatted merchant total price** of *this* booking\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                      }),
                    totalPriceUSD: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description: '**numeric merchant total price** of this booking in USD',
                      }),
                    userId: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    voucherKey: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints',
                      }),
                    voucherURL: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.',
                      }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': BookingMybookingsExampleExample },
        },
      },
    },
  },
})

export const getBookingPastbookingRoute = createRoute({
  method: 'get',
  path: '/booking/pastbooking',
  tags: ['Booking services'],
  summary: '/booking/pastbooking',
  description:
    'Get the details of a single specific past booking based on the `voucherKey` or `itemId` and email address sent in the request.\n\n**Note**: this service will only return past bookings that were made with the same API key that was used to make the booking\n\n**Sample query parameters**:\n- email=apitest@viator.com&amp;itemId=580669678\n\n**or**\n- voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678\n\n**email**\n- The email address passed must match the email address associated with the booking\n\n**Departure details**\n\n- Departure details such as the `departurePoint`, `departurePointAddress` and `departurePointDirections` is included in the response. \n- These fields may contain HTML escape characters such as &amp;amp; and special characters that are escaped by a backslash. Ensure that these fields are parsed after receiving the response as it will cause your JSON to be invalid.\n\nFor more information, see: [Reviewing bookings](#section/Common-workflows-and-data-validation/Reviewing-bookings)\n',
  operationId: 'bookingPastbooking',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    query: z.object({
      voucherKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "**specifier** of past booking type (use *one* of: `itemId` (booking reference) *and* `'voucherKey'` *or* `'email'`)",
            example:
              '1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678',
            in: 'query',
            name: 'voucherKey',
            schema: { type: 'string' },
            required: false,
          },
        }),
      email: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '**email address** by which to search for past bookings',
            example: 'apitest@viator.com',
            in: 'query',
            name: 'email',
            schema: { type: 'string' },
            required: false,
          },
        }),
      itemId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search for a booking with this **unique booking-reference number**. See [Booking references](#section/Key-concepts/Booking-references) for more information.\n',
            example: '580669678',
            in: 'query',
            name: 'itemId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .object({
                    bookerEmail: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: '**email address** of the entity that booked the tour',
                      }),
                    bookingDate: z
                      .string()
                      .exactOptional()
                      .openapi({ description: '**date** on which the booking was made' }),
                    bookingStatus: BookingStatusItinerarySchema.exactOptional(),
                    currencyCode: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**currency code** for the currency in which pricing is displayed',
                      }),
                    distributorRef: z
                      .string()
                      .exactOptional()
                      .openapi({ description: '**reference code** for the distributor' }),
                    exchangeRate: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    hasVoucher: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: '**indicator**: `true` if a voucher exists' }),
                    itemSummaries: z
                      .array(
                        z
                          .object({
                            barcodeOption: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Indicates whether a voucher is required for each passenger; or, whether the requirement is one voucher per group booking.',
                              }),
                            barcodeType: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: '**alphanumeric code** specifying the type of barcode',
                              }),
                            bookingEngineId: BookingEngineIdResponseSchema.exactOptional(),
                            bookingStatus: BookingStatusItemSchema.exactOptional(),
                            currencyCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**currency code** for the currency in which pricing is displayed',
                              }),
                            departsFrom: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  "**natural-language description** of *this* item's departure location",
                              }),
                            departurePoint: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language description** of the product departure point',
                              }),
                            departurePointAddress: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language address** of the departure point for the product',
                              }),
                            departurePointDirections: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language description** of how to access the departure point for the product',
                              }),
                            destId: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**unique numeric identifier** of the destination in which the product operates',
                              }),
                            distributorItemRef: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**alphanumeric reference code** of the distributor item',
                              }),
                            hoursConfirmed: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  'The `hoursConfirmed` field also indicates if the product is freesale or on request. The `hoursConfirmed` value is the approximate window for confirmation in hours, which can be presented to the customer. A value of `0` means that the product is **freesale**, and a value greater than `0` means that the product is **on-request**.\n',
                              }),
                            itemId: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Booking-reference number generated by Viator\n- **Note**: For more information, see: [Booking references](#section/Key-concepts/Booking-references)\n',
                              }),
                            itineraryId: z
                              .int()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            languageServicesLanguageCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**language code** for the language that the product operates in',
                              }),
                            lastRetailPrice: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description: '**numeric last retail price** of *this* item',
                              }),
                            lastRetailPriceFormatted: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: '**currency-formatted retail price** of *this* item',
                              }),
                            leadTravellerFirstname: z
                              .string()
                              .exactOptional()
                              .openapi({ description: '**first name** of the lead traveler' }),
                            leadTravellerSurname: z
                              .string()
                              .exactOptional()
                              .openapi({ description: '**surname** of the lead traveler' }),
                            leadTravellerTitle: z
                              .string()
                              .exactOptional()
                              .openapi({ description: "**title** of the lead traveler's name" }),
                            merchantCancellable: z
                              .boolean()
                              .exactOptional()
                              .openapi({
                                description:
                                  'ignore (Viator only)\n\nFor cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object\n',
                              }),
                            merchantNetPrice: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**numeric merchant net rate** for *this* item\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            merchantNetPriceFormatted: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**currency-formatted merchant net rate** for *this* item\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            merchantTermsAndConditions: z
                              .object({
                                amountRefundable: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**currency-formatted** amount that will be refunded if the cancellation is processed now.',
                                  }),
                                cancellationFromTourDate: z
                                  .array(
                                    z
                                      .object({
                                        dayRangeMax: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**number** of days prior to the tour start date that *this* policy window begins. `null` signifies open-endedness',
                                          }),
                                        dayRangeMin: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**number** of days prior to the tour start date that *this* policy window ends',
                                          }),
                                        percentageRefundable: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**percentage** of total price refundable if cancelled within *this* time window',
                                          }),
                                        policyEndTimestamp: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**Unix timestamp** giving the exact time the policy ends',
                                          }),
                                        policyStartTimestamp: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**Unix timestamp** giving the exact time the policy commences',
                                          }),
                                      })
                                      .openapi({ required: [] }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description: '**array** of cancellation policy objects',
                                  }),
                                termsAndConditions: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**natural-language description** of the terms and conditions for *this* product',
                                  }),
                              })
                              .exactOptional()
                              .openapi({ required: [] }),
                            obfsId: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            passbooks: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            price: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**numeric merchant total price** for the booked product\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            priceFormatted: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**currency-formatted merchant total price** for *this* item\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            priceUSD: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description: '**numeric merchant total price** of the item in USD',
                              }),
                            productCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**unique alphanumeric identifier** of the product that was booked',
                              }),
                            productPulledDown: z
                              .boolean()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            productTitle: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language description** of the product that was booked',
                              }),
                            productWidgetList: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            rulesApplied: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            savingAmount: SavingAmountSchema.exactOptional(),
                            savingAmountFormated: SavingAmountFormatedSchema.exactOptional(),
                            sortOrder: z.int().exactOptional(),
                            termsAndConditions: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            tourGradeCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**alphanumeric identifier** of the tour grade of the product that was booked',
                              }),
                            tourGradeDescription: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language description** of *this* tour grade',
                              }),
                            travelDate: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: '**date** of travel for the product that was booked',
                              }),
                            travellerAgeBands: z
                              .array(
                                z
                                  .object({
                                    ageBandId: AgeBandIdSchema.exactOptional(),
                                    count: z
                                      .int()
                                      .exactOptional()
                                      .openapi({
                                        description: '**number** of travelers in *this* age band',
                                      }),
                                    description: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '**natural-language description** (singular) of *this* age band',
                                      }),
                                    pluralDescription: z
                                      .string()
                                      .exactOptional()
                                      .openapi({
                                        description:
                                          '**natural-language description** (plural) of *this* age band',
                                      }),
                                    sortOrder: z
                                      .int()
                                      .exactOptional()
                                      .openapi({
                                        description: '**sort order** for *this* age band',
                                      }),
                                  })
                                  .openapi({ required: [] }),
                              )
                              .exactOptional()
                              .openapi({ description: '**array** of age band objects' }),
                            voucherKey: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints',
                              }),
                            voucherOption: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**specifier** of the rules pertaining to the use of the voucher',
                              }),
                            voucherRequirements: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language description** of the requirements for using the voucher',
                              }),
                            voucherURL: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.',
                              }),
                            vouchers: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional()
                      .openapi({ description: '**array** of item summary objects' }),
                    itineraryId: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    rulesApplied: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    sortOrder: z
                      .int()
                      .exactOptional()
                      .openapi({ description: '**sort order** for *this* result' }),
                    totalPrice: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description:
                          '**numeric merchant total price** for *this* booking\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                      }),
                    totalPriceFormatted: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**currency-formatted merchant total price** for *this* booking\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                      }),
                    totalPriceUSD: z
                      .number()
                      .exactOptional()
                      .openapi({
                        description: '**numeric merchant total price** of this booking in USD',
                      }),
                    userId: z
                      .string()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    voucherKey: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          'Unique reference for the voucher for this booking that can be used as a request parameter to search for existing bookings using the [/booking/mybookings](#operation/bookingMybookings) and [/booking/pastbooking](#operation/bookingPastbooking) endpoints',
                      }),
                    voucherURL: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**URL of the voucher** for *this* product (if available). The customer can access this URL to retrieve their voucher.',
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description: '**object** containing pricing matrix information',
                    required: [],
                  }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': BookingPastbookingExampleExample },
        },
      },
    },
  },
})

export const postBookingPricingmatrixRoute = createRoute({
  method: 'post',
  path: '/booking/pricingmatrix',
  tags: ['Booking services'],
  summary: '/booking/pricingmatrix',
  description:
    'Get the pricing matrix for tour-grades, product age bands and pax mixes\n\nFor more information, see: [Get the tour-grade pricing matrix](#section/Common-workflows-and-data-validation/Get-the-tour-grade-pricing-matrix)\n',
  operationId: 'bookingPricingmatrix',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              bookingDate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**date** for which to retrieve pricing data  (must be in the future) (**note**: this is an optional parameter for normal products; if the date is *not* provided then the nearest available date is determined)',
                }),
              currencyCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**currency code** of the currency in which to display pricing information',
                }),
              productCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**unique alphanumeric identifier** of the product for which to retrieve the pricing matrix',
                }),
              tourGradeCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**alphanumeric identifier** of the product tour grade for which to retrieve the pricing matrix',
                }),
            })
            .openapi({ required: [] }),
          example: {
            bookingDate: '2020-12-12',
            currencyCode: 'EUR',
            productCode: '5010SYDNEY',
            tourGradeCode: '24HOUR',
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .array(
                    z
                      .object({
                        ageBandPrices: z
                          .array(
                            z
                              .object({
                                bandId: BandIdSchema.exactOptional(),
                                maximumCountRequired: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**maximum number of travelers** that this pricing schedule can be applied to\n- use this field to specify the largest group size you are interested in making a booking for\n',
                                  }),
                                minimumCountRequired: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**minimum number of travelers** that this pricing schedule can be applied to\n- use this field to specify the smallest group size you are interested in making a booking for\n',
                                  }),
                                prices: z
                                  .array(
                                    z
                                      .object({
                                        currencyCode: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**currency code** for the currency in which pricing is displayed',
                                          }),
                                        merchantNetPrice: z
                                          .number()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**numeric merchant net rate** for *this* age band\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                                          }),
                                        merchantNetPriceFormatted: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**currency-formatted merchant net rate** for *this* age band\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                                          }),
                                        minNoOfTravellersRequiredForPrice: z
                                          .int()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              "**minimum number of travelers** that this pricing schedule can be applied to; e.g., '3' means that the price is for a group of three people or more",
                                          }),
                                        price: z
                                          .number()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**numeric suggested retail price** for *this* age band\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                                          }),
                                        priceFormatted: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description:
                                              '**currency-formatted suggested retail price** for *this* age band and the suggested sell price\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                                          }),
                                        sortOrder: z
                                          .string()
                                          .exactOptional()
                                          .openapi({
                                            description: '**sort order** for *this* pricing object',
                                          }),
                                      })
                                      .openapi({ required: [] }),
                                  )
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**array** of prices available for *this* age band (based on the min and max count required)',
                                  }),
                                sortOrder: z
                                  .int()
                                  .exactOptional()
                                  .openapi({ description: '**sort order** for *this* age band' }),
                              })
                              .openapi({ required: [] }),
                          )
                          .exactOptional()
                          .openapi({ description: '**array** of age band pricing objects' }),
                        bookingDate: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**date** for which to retrieve pricing information',
                          }),
                        pricingUnit: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**unit** in which pricing is calculated (currently, only 'per person' is supported)\n- see [Understanding the pricingUnit field](#section/Using-the-API/Understanding-the-pricingUnit-field) for more information\n",
                          }),
                        sortOrder: z
                          .int()
                          .exactOptional()
                          .openapi({ description: '**sort order** for *this* response object' }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': BookingPricingmatrixExampleExample },
        },
      },
    },
  },
})

export const postBookingStatusRoute = createRoute({
  method: 'post',
  path: '/booking/status',
  tags: ['Booking services'],
  summary: '/booking/status',
  description:
    'Get the booking status for multiple items based on different criteria\n\nThis service: \n- is ideally be used in software for bulk updates of pending bookings\n- returns a maximum of 1000 bookings (narrow your search if you expect a greater number of results)\n- will return &lt;u&gt;both&lt;/u&gt; live &lt;u&gt;and&lt;/u&gt; test bookings\n- rate limited to &lt;u&gt;one request every 30 minutes&lt;/u&gt;\n- For more information, see: [Get the bookiing status for multiple items](#section/Common-workflows-and-data-validation/Get-the-booking-status-for-multiple-items)\n\n**Exceeding the rate limit**\n- You will receive the following error message if you exceed the rate limit allowed for this service. Set `test` to `true` to bypass this limit:\n```javascript\n{\n    "data": null\n    "vmid": 221002\n    "errorMessage": ["Access allowed every 30 minutes"]\n    "errorType": "EXCEPTION"\n    "dateStamp": "2013-03-26T10:28:51+0000"\n    "errorReference": 55315512721712161381352771\n    "errorMessageText": ["Access allowed every 30 minutes"]\n    "success": false\n    "totalCount": 1\n    "errorName": "PollingDeniedException"  \n}\n```\n',
  operationId: 'bookingStatus',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              bookingDateFrom: z
                .string()
                .exactOptional()
                .openapi({
                  description: '**earliest date** for *this* booking (must be in the future)',
                }),
              bookingDateTo: z
                .string()
                .exactOptional()
                .openapi({
                  description: '**latest date** for *this* booking (must be in the future)',
                }),
              distributorItemRefs: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "**array** of partner-defined distributor item reference identifiers e.g. `['refItem1','refItem2','refItem3']`",
                }),
              distributorRefs: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: '**array** of partner-defined distributor reference identifiers',
                }),
              itemIds: z
                .array(z.int().openapi({ description: '**numeric item identifier**' }))
                .exactOptional()
                .openapi({ description: '**array** of item identifiers to check' }),
              leadFirstName: z
                .string()
                .exactOptional()
                .openapi({ description: '**first name** of the lead traveler' }),
              leadSurname: z
                .string()
                .exactOptional()
                .openapi({ description: '**surname** of the lead traveler' }),
              test: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '**specifier**:\n- `true`: bypass the poll limit in the prelive environment only (recommended for testing)\n- `false`: (default)\n',
                }),
            })
            .openapi({
              description:
                '**note**: all items are optional, but at least one needs to be included',
              required: [],
            }),
          examples: {
            all: {
              value: {
                bookingDateFrom: '2020-12-21',
                bookingDateTo: '2020-12-31',
                distributorItemRefs: ['itemRef1000000'],
                itemIds: [580669678],
                leadFirstName: 'Homer test',
                leadSurname: 'Simpson test',
                test: true,
              },
            },
            booking_date: {
              value: { bookingDateFrom: '2020-12-21', bookingDateTo: '2020-12-31', test: true },
            },
            distributorItemRefs: { value: { distributorItemRefs: ['itemRef1000000'], test: true } },
            itemIds: { value: { itemIds: [580669678], test: true } },
            lead_name: {
              value: { leadFirstName: 'Homer test', leadSurname: 'Simpson test', test: true },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .object({
                    bookingDate: z
                      .string()
                      .exactOptional()
                      .openapi({ description: '**date**: of *this* booking' }),
                    bookingStatus: BookingStatusItinerarySchema.exactOptional(),
                    distributorRef: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**alphanumeric identifer** of the distributor for *this* booking',
                      }),
                    itemSummaries: z
                      .array(
                        z
                          .object({
                            bookingStatus: BookingStatusItemSchema.exactOptional(),
                            distributorItemRef: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**partner-defined distributor item reference identifier**',
                              }),
                            itemId: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  'Booking-reference number generated by Viator\n- **Note**: For more information, see: [Booking references](#section/Key-concepts/Booking-references)\n',
                              }),
                            itineraryId: z
                              .int()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            sortOrder: z
                              .int()
                              .exactOptional()
                              .openapi({ description: '**sort order** for *this* item' }),
                            travelDate: z
                              .string()
                              .exactOptional()
                              .openapi({ description: '**date** of the booking' }),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional()
                      .openapi({ description: '**array** of item summary objects' }),
                    itineraryId: z
                      .int()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    sortOrder: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description: '**sort order** for *this* response',
                        example: { $ref: '#/components/examples/product-example-1/value/data/pas' },
                      }),
                  })
                  .exactOptional()
                  .openapi({
                    description: '**object** containing booking status and details',
                    required: [],
                  }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': BookingStatusExampleExample },
        },
      },
    },
  },
})

export const postBookingStatusItemsRoute = createRoute({
  method: 'post',
  path: '/booking/status/items',
  tags: ['Booking services'],
  summary: '/booking/status/items',
  description:
    'Get brief booking statuses\n\nThis service is similar to [/booking/status](#operation/bookingStatus) in that it:\n- retrieves the booking status for multiple items based on different criteria\n- has the same request parameters as [/booking/status](#operation/bookingStatus)\n\nHowever, it differs in that it returns a multi-item array of booking items with less detail than what would be received from [/booking/status](#operation/bookingStatus).\n',
  operationId: 'bookingStatusItems',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              bookingDateFrom: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**earliest date** for when the booking(s) in question were made (must be in the future)',
                }),
              bookingDateTo: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**latest date** for when the booking(s) in question were made (must be in the future)',
                }),
              distributorItemRefs: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description:
                    "**array** of partner-defined distributor item reference identifiers e.g. `['refItem1','refItem2','refItem3']`",
                }),
              distributorRefs: z
                .array(z.string())
                .exactOptional()
                .openapi({
                  description: '**array** of partner-defined distributor reference identifiers',
                }),
              itemIds: z
                .array(z.int().openapi({ description: '**numeric item identifier**' }))
                .exactOptional()
                .openapi({
                  description:
                    '**array** of booking-reference numbers to check\n\n `itemId` (booking-reference provided by Viator). For more information, see [Booking references](#section/Key-concepts/Booking-references)\n',
                }),
              leadFirstName: z
                .string()
                .exactOptional()
                .openapi({ description: '**first name** of the lead traveler' }),
              leadSurname: z
                .string()
                .exactOptional()
                .openapi({ description: '**surname** of the lead traveler' }),
              test: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    '**specifier**:\n- `true`: bypass the poll limit in the prelive environment only\n- `false`: (default) make a *real* booking, not a test\n',
                }),
            })
            .openapi({
              description:
                '**note**: all items are optional, but at least one needs to be included',
              required: [],
            }),
          examples: {
            all: {
              value: {
                bookingDateFrom: '2020-12-21',
                bookingDateTo: '2020-12-31',
                distributorItemRefs: ['itemRef1000000'],
                itemIds: [580669678],
                leadFirstName: 'Homer test',
                leadSurname: 'Simpson test',
                test: true,
              },
            },
            booking_date: {
              value: { bookingDateFrom: '2020-12-21', bookingDateTo: '2020-12-31', test: true },
            },
            distributorItemRefs: { value: { distributorItemRefs: ['itemRef1000000'], test: true } },
            itemIds: { value: { itemIds: [580669678], test: true } },
            lead_name: {
              value: { leadFirstName: 'Homer test', leadSurname: 'Simpson test', test: true },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .array(
                    z
                      .object({
                        bookingStatus: BookingStatusItemSchema.exactOptional(),
                        distributorItemRef: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**partner-defined distributor item reference identifier**',
                          }),
                        itemId: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              'Booking-reference number generated by Viator\n- **Note**: For more information, see: [Booking references](#section/Key-concepts/Booking-references)\n',
                          }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({
                    description:
                      '**array** containing item ids and their associated booking status object',
                  }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': BookingStatusItemsExampleExample },
        },
      },
    },
  },
})

export const getBookingVoucherRoute = createRoute({
  method: 'get',
  path: '/booking/voucher',
  tags: ['Booking services'],
  summary: '/booking/voucher',
  description:
    'Get voucher details\n- Use this service to retrieve the voucher details of a booked item.\n- The data returned is HTML-formatted and can be wrapped in a header and/or footer.\n\n**Sample query parameters**\n- leadLastName=Simpson test&amp;itemId=580669678\n\n**or** \n- voucherKey=1005851866:4af44c13ecf3f1a7d3f9ef2fc00c2257e08fa42ae20f877f3039ff9b52aba24e:580669678&amp;fullHTML=true&amp;mobileVoucher=true\n',
  operationId: 'bookingVoucher',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    query: z.object({
      leadLastName: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: '**surname** of *this* lead traveler',
            example: 'Simpson',
            in: 'query',
            name: 'leadLastName',
            schema: { type: 'string' },
            required: false,
          },
        }),
      itemId: z
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
              'Booking-reference number generated by Viator\n\n  - **Note**: For more information, see: [Booking references](#section/Key-concepts/Booking-references)\n',
            example: '600033670',
            in: 'query',
            name: 'itemId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      embeddedResources: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'ignore (Viator only)',
            in: 'query',
            name: 'embeddedResources',
            schema: { example: false, type: 'boolean' },
            required: false,
          },
          example: false,
        }),
      voucherKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '**identifier** for the voucher\n- **note**: use &lt;u&gt;either&lt;/u&gt; `voucherKey` &lt;u&gt;or&lt;/u&gt; the three separate parameters\n- if `voucherKey` is provided as well as the other parameters, then `voucherKey` overrides the other paramaters\n- `voucherKey` is obtained from [/booking/mybookings](#operation/bookingMybookings) or in the response from [/booking/book](#operation/bookingBook) when you make a booking\n',
            in: 'query',
            name: 'voucherKey',
            schema: {
              example:
                '3299307:93c7f36a56b18ba1068787ba7fb7988da5c8ad08db77604110141ff21498603e:600033670',
              type: 'string',
            },
            required: false,
          },
          example:
            '3299307:93c7f36a56b18ba1068787ba7fb7988da5c8ad08db77604110141ff21498603e:600033670',
        }),
      fullHTML: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '**specifier**:\n- set to `true` if you wish to retrieve the full HTML-formatted voucher\n- set to `false` if you want the div fragment (optional)\n',
            example: true,
            in: 'query',
            name: 'fullHTML',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      mobileVoucher: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "**specifier**: \n- if set to `true`, the service returns the mobile (cut down) HTML-formatted voucher\n- if `false` the full voucher HTML is returned (ignoring `fullHTML`)\n- default: `true` \n- this field should only be enabled for products that have a `voucherOption` of `'VOUCHER_E'`\n- do not enable `mobileVouchers` for paper vouchers (`voucherOption` of `'VOUCHER_PAPER_ONLY'`) as no barcode is returned\n- the voucher information is available in the response from [/product](#operation/product), [/booking/book](#operation/bookingBook), [/booking/pastbooking](#operation/bookingPastbooking), [/booking/mybookings](#operation/bookingMybookings) (it is also displayed under the 'Redemption Info' heading in this service)\n",
            example: true,
            in: 'query',
            name: 'mobileVoucher',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .string()
                  .exactOptional()
                  .openapi({ description: '**HTML-formatted** voucher content' }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': BookingVoucherExampleExample },
        },
      },
    },
  },
})

export const getBookingsCancelReasonsRoute = createRoute({
  method: 'get',
  path: '/bookings/cancel-reasons',
  tags: ['Booking services'],
  summary: '/bookings/cancel-reasons',
  description:
    'Retrieves a dictionary of unique identification codes (`cancellationReasonCode`) and their associated natural-language descriptions (`cancellationReasonText`).\n\nFor information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)\n\n**Note**: \n\n  * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.\n  * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/cancel-reasons`\n',
  operationId: 'cancellationReasons',
  request: { headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(CancellationReasonsResponseSchema),
          examples: { '1': CancelReasonsExampleExample },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: _401UNAUTHORIZEDSchema } },
    },
    406: {
      description: 'Not Acceptable',
      content: { 'application/json': { schema: _406NOTACCEPTABLESchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: _500INTERNALSERVERERRORSchema } },
    },
    503: {
      description: 'Service Unavailable',
      content: { 'application/json': { schema: _503SERVICEUNAVAILABLESchema } },
    },
  },
  servers: [
    {
      description: 'Sandbox server (uses test data)',
      url: 'https://api.sandbox.viator.com/partner',
    },
  ],
})

export const postBookingsBookingReferenceCancelRoute = createRoute({
  method: 'post',
  path: '/bookings/{booking-reference}/cancel',
  tags: ['Booking services'],
  summary: '/bookings/{booking-reference}/cancel',
  description:
    'Submits a cancellation request for the specified booking\n\nFor information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)\n\n**Note**: \n\n  * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.\n  * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel`\n',
  operationId: 'cancelBooking',
  request: {
    params: z.object({
      'booking-reference': z
        .string()
        .openapi({
          param: {
            description: 'The ID of the booking',
            in: 'path',
            name: 'booking-reference',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: CancellationRequestSchema,
          example: { reasonCode: 'Customer_Service.I_canceled_my_entire_trip' },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: CancelBookingResponseSchema,
          examples: {
            '1': { summary: 'canceled', value: { bookingId: 'BR-580669678', status: 'ACCEPTED' } },
            '2': {
              summary: 'already canceled',
              value: { bookingId: 'BR-580669678', reason: 'ALREADY_CANCELLED', status: 'DECLINED' },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.literal('BAD_REQUEST').exactOptional().openapi({ example: 'BAD_REQUEST' }),
              message: z
                .literal('Missing cancellation reason')
                .exactOptional()
                .openapi({ example: 'Missing cancellation reason' }),
              timestamp: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Timestamp of the request',
                  example: '2019-09-17T03:20:45.737043Z',
                }),
              trackingId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Tracking identifier for this error response (useful when seeking support)',
                  example: 'XXXX',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: _401UNAUTHORIZEDSchema } },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.literal('NOT_FOUND').exactOptional().openapi({ example: 'NOT_FOUND' }),
              message: z
                .literal('Booking not found')
                .exactOptional()
                .openapi({
                  description:
                    'The specified booking was not found; or, it was not created with this API key',
                  example: 'Booking not found',
                }),
              timestamp: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'Timestamp of the request',
                  example: '2019-09-17T03:20:45.737043Z',
                }),
              trackingId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Tracking identifier for this error response (useful when seeking support)',
                  example: 'XXXX',
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
    406: {
      description: 'Not Acceptable',
      content: { 'application/json': { schema: _406NOTACCEPTABLESchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: _500INTERNALSERVERERRORSchema } },
    },
    503: {
      description: 'Service Unavailable',
      content: { 'application/json': { schema: _503SERVICEUNAVAILABLESchema } },
    },
  },
  servers: [
    {
      description: 'Sandbox server (uses test data)',
      url: 'https://api.sandbox.viator.com/partner',
    },
  ],
})

export const getBookingsBookingReferenceCancelQuoteRoute = createRoute({
  method: 'get',
  path: '/bookings/{booking-reference}/cancel-quote',
  tags: ['Booking services'],
  summary: '/bookings/{booking-reference}/cancel-quote',
  description:
    'Retrieves a quote for the cancellation of a booking\n\nFor information on how to use this service, see: [Cancellation API workflow](#section/Common-workflows-and-data-validation/Cancellation-API-workflow)\n\n**Note**: \n\n  * This service &lt;u&gt;requires&lt;/u&gt; [exp-api-key](#section/Authentication/exp-api-key) to be included as a header parameter. Please speak to your account manager if you have not yet been issued an exp-api-key.\n  * The base URL for the server for this endpoint is different from the older endpoints described in this document. Use `https://api.sandbox.viator.com/partner/bookings/{booking-reference}/cancel-quote`\n',
  operationId: 'cancelBookingQuote',
  request: {
    params: z.object({
      'booking-reference': z
        .string()
        .openapi({
          param: {
            description:
              'Unique numeric identifier of the booking for which to retrieve a cancellation quote',
            in: 'path',
            name: 'booking-reference',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: CancelBookingQuoteResponseSchema,
          examples: { '1': BookingsIdCancelQuoteExampleExample },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: { 'application/json': { schema: _401UNAUTHORIZEDSchema } },
    },
    406: {
      description: 'Not Acceptable',
      content: { 'application/json': { schema: _406NOTACCEPTABLESchema } },
    },
    500: {
      description: 'Internal Server Error',
      content: { 'application/json': { schema: _500INTERNALSERVERERRORSchema } },
    },
    503: {
      description: 'Service Unavailable',
      content: { 'application/json': { schema: _503SERVICEUNAVAILABLESchema } },
    },
  },
  servers: [
    {
      description: 'Sandbox server (uses test data)',
      url: 'https://api.sandbox.viator.com/partner',
    },
  ],
})

export const getHealthCheckRoute = createRoute({
  method: 'get',
  path: '/health/check',
  tags: ['General services'],
  summary: '/health/check',
  description:
    'Health check\nUse this service to determine whether the Viator API is presently online and that your API key is valid. You should receive a response identical to the example shown. If you have not yet received an API key, please request one from your business development partner. If you have not yet signed up as a Viator merchant partner and would like to, please visit our [distribution partner website](https://www.viator.com/distribution-partners?mcid=58463#api-solutions)."\n',
  operationId: 'healthCheck',
  request: { headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .object({
              allGood: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: '**indicator**: `true` signifies health' }),
              capiOk: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: '**indicator**: `true` signifies health' }),
              dbOk: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: '**indicator**: `true` signifies health' }),
              memcachedOk: z
                .boolean()
                .nullable()
                .exactOptional()
                .openapi({ description: '**indicator**: `true` signifies health' }),
              message: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    '**natural-language description** of any issues regarding the health of the API',
                }),
            })
            .openapi({ required: [] }),
          examples: { '1': HealthCheckExampleExample },
        },
      },
    },
  },
})

export const postMerchantCancellationRoute = createRoute({
  method: 'post',
  path: '/merchant/cancellation',
  tags: ['Deprecated services'],
  summary: '/merchant/cancellation',
  description:
    'Cancel a booking\n**Note**: This service has been replaced by the [cancellationReasons](#operation/cancellationReasons), [bookingQuote](#operation/bookingQuote) and [cancelBooking](#operation/cancelBooking) endpoints\n',
  operationId: 'merchantCancellation',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              cancelItems: z
                .array(
                  z
                    .object({
                      cancelCode: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            '**cancellation code** that describes the reason for the cancellation\n- see: [Suggested cancellation codes](#suggested-cancellation-codes)\n',
                          example: '82',
                        }),
                      cancelDescription: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description:
                            '**natural-language description** of the reason for cancellation (a reason must be provided if `cancelCode` is `62` or `66`)',
                          example: '',
                        }),
                      distributorItemRef: z
                        .string()
                        .exactOptional()
                        .openapi({
                          description: '**alphanumeric reference code** of the distributor item',
                          example: 'JdpItin001',
                        }),
                      itemId: z
                        .int()
                        .exactOptional()
                        .openapi({
                          description: '**numeric identifier** of item to cancel in itinerary',
                          example: 330056,
                        }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional()
                .openapi({
                  description: '**array** of objects detailing itinerary items to cancel',
                }),
              distributorRef: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**itinerary reference identifier** (partner defined) for the booking to cancel',
                  example: 'Jdp122',
                }),
              itineraryId: z
                .int()
                .exactOptional()
                .openapi({
                  description: '**numeric identifier** for the itinerary',
                  example: 1234655,
                }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .object({
                    cancelItems: z
                      .array(
                        z
                          .object({
                            cancellationResponseDescription: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: 'See Response codes table',
                                example: 'No further action required',
                              }),
                            cancellationResponseStatusCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  'See [cancellation response codes table](#cancellation-response-status-codes-and-their-meanings)',
                                example: 'Confirmed',
                              }),
                            distributorItemRef: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**alphanumeric reference code** of the distributor item',
                                example: 'ItinItemRef012',
                              }),
                            itemId: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: '**numeric identifier** of the item to cancel',
                                example: '600088255',
                              }),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional()
                      .openapi({ description: '**array** of items to be cancelled' }),
                    distributorRef: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: '**reference code** for the distributor',
                        example: 'ItinRef012',
                      }),
                    itineraryId: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description: '**numeric** identifier for the itinerary',
                        example: 3331605,
                      }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
    400: {
      description: 'Error',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .object({
                    cancellationResponseDescription: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**natural-language description** for this response (see response codes table)',
                        example:
                          'Please double check the details or contact Viator Customer Service',
                      }),
                    cancellationResponseStatusCode: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: '**status code** for this response (see response codes table)',
                        example: 'Error.ItineraryUnknown',
                      }),
                    distributorItemRef: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: '**alphanumeric reference code** of the distributor item',
                        example: 'ItinItemRef012',
                      }),
                    itemId: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: '**identifier** for the item to cancel',
                        example: '600088255',
                      }),
                  })
                  .exactOptional()
                  .openapi({ required: [] }),
              })
              .openapi({ required: [] }),
          ),
        },
      },
    },
  },
  deprecated: true,
})

export const getProductRoute = createRoute({
  method: 'get',
  path: '/product',
  tags: ['Product services'],
  summary: '/product',
  description:
    'Get product information\nThis service provides all product details required for a product display page, as well as information required for price checks and booking, such as: \n- age bands\n- tour grades\n- language options \n- booking questions\n- hotel pickup flags\n\n**currencyCode (in query):** \n- use this parameter to specify the currency in which product pricing should be displayed\n- the default currency is the currency of your account; or, if you have multi-currency enabled, US dollars\n- "multi-currency" allows pricing and booking in various currencies - please speak to the business development team if you\'d like this enabled\n- **Note**: you will be billed in the currency in which the booking was made\n\n**Product photos**\n\n&lt;mark&gt;**&lt;u&gt;Update 13 Feb 2020&lt;/u&gt;**: All supplier-provided photos for the selected product are now available in the `productPhotos` array in this endpoint\'s response. Previously, only two supplier-provided photos were available – one in the `productPhotos` array and one in `thumbnailHiResURL`. &lt;/mark&gt;\n\n**Videos**\n\n- Videos are no longer provided via this API\n',
  operationId: 'product',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    query: z.object({
      currencyCode: CurrencyCodeParamsSchema,
      sortOrder: SortOrderREVIEWParamsSchema,
      voucherOption: z
        .enum(['VOUCHER_PAPER_ONLY', 'VOUCHER_E'])
        .exactOptional()
        .openapi({
          param: {
            description:
              '- `"VOUCHER_PAPER_ONLY"`: Paper Vouchers only accepted\n- `"VOUCHER_E"`: EVouchers + Paper Vouchers accepted\n',
            in: 'query',
            name: 'voucherOption',
            schema: { enum: ['VOUCHER_PAPER_ONLY', 'VOUCHER_E'], type: 'string' },
            required: false,
          },
        }),
      code: CodeParamsSchema,
      showUnavailable: ShowUnavailableParamsSchema,
      excludeTourGradeAvailability: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              '**specifier:** \n- `true`: return **all** tour grades, including those that are not available\n- `false`: only display tour grades that *are* available\n',
            in: 'query',
            name: 'excludeTourGradeAvailability',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .object({
                    additionalInfo: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({
                        description:
                          '**array** of HTML-formatted clauses providing additional information about *this* product, such as:\n- when the confirmation will be received (i.e. at time of booking, or within 48 hours of booking etc)\n- accessibility options; such as whether wheelchair access is available\n- particulars about the pick-up location and process\n- **Note**: may contain basic HTML mark-up tags – e.g., br, li, b, u, p, i, ul and ol\n',
                      }),
                    admission: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    ageBands: z
                      .array(
                        z
                          .object({
                            adult: z
                              .boolean()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**indicator**: `true` if *this* age band describes adults (not children)',
                              }),
                            ageFrom: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**numeric lower age limit** of the age range defined by *this* age band',
                              }),
                            ageTo: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**numeric upper age limit** of the age range included in *this* age band',
                              }),
                            bandId: BandIdSchema.exactOptional(),
                            count: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**number** of participants in *this* age band required to book the product',
                              }),
                            description: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language description** (singular) of *this* age band',
                              }),
                            pluralDescription: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language description** (plural) of *this* age band',
                              }),
                            sortOrder: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description: '**sort order** for *this* age band object',
                              }),
                            treatAsAdult: z
                              .boolean()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**indicator**: `true` if members of this age band are considered to be adults',
                              }),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          '**array** of age band objects detailing the age bands available for *this* product\n  \n- **note**: only the age bands listed here can book this product using the [/booking/book](#operation/bookingBook) service\n',
                      }),
                    allTravellerNamesRequired: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          '**indicator**: `true` if all traveler names are required.&lt;br /&gt;**Note**: if set to `true`, then all passenger names must be included in the booking request, and all must be unique. Placeholder names cannot be used.',
                      }),
                    applePassSupported: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description: '**indicator**: `true` if Apple Wallet is supported',
                      }),
                    available: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    bookingEngineId: BookingEngineIdSchema.exactOptional(),
                    bookingQuestions: z
                      .array(
                        z
                          .object({
                            message: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language instructions** for *this* booking question\n- **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information\n',
                              }),
                            questionId: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**unique numeric identifier** for *this* booking question\n- **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information\n',
                              }),
                            required: z
                              .boolean()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**boolean indicator**:\n- `true` if the answer to *this* booking question &lt;u&gt;must&lt;/u&gt; be included in the request object to the b service when booking *this* product\n- **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information\n',
                              }),
                            sortOrder: z
                              .int()
                              .exactOptional()
                              .openapi({
                                description: '**sort order** for *this* booking question',
                              }),
                            stringQuestionId: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**unique alphanumeric identifier** for the booking question\n- **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information\n',
                              }),
                            subTitle: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language subtitle** for *this* booking question\n- **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information\n',
                              }),
                            title: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language title** for *this* booking question\n- **note**: see [Booking questions](#section/Appendices/Booking-questions) for more information\n',
                              }),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional(),
                    catIds: z
                      .array(z.int())
                      .exactOptional()
                      .openapi({
                        description:
                          '**list** of unique numeric category identifiers that *this* product falls under\n- `categoryId` is available from the [/taxonomy/categories](#operation/taxonomyCategories) service\n',
                      }),
                    city: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**name** of city or destination that *this* product operates in',
                      }),
                    code: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: '**unique alphanumeric identifier** of *this* product',
                      }),
                    country: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**natural-language name** of the country in which *this* product operates',
                      }),
                    currencyCode: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          "**currency** in which to display *this* product's pricing details",
                      }),
                    departurePoint: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          "**HTML-formatted natural-language description** of *this* product's departure location",
                      }),
                    departureTime: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          "**HTML-formatted natural-language description** of *this* product's departure times\n- may contain basic HTML mark-up tags; e.g., br, li, b, u, p, i, ul and ol\n",
                      }),
                    departureTimeComments: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**HTML-formatted natural-language description** of extra information pertaining to product departure times',
                      }),
                    description: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**HTML-formatted natural-language description** of *this* product (extended)',
                      }),
                    destinationId: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          '**unique numeric identifier** of the destination in which *this* product is located\n- `destinationId` is available from the [/taxonomy/destinations](#operation/taxonomyDestinations) service\n',
                      }),
                    duration: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          "**natural-language description** of *this* product's duration",
                      }),
                    essential: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    exclusions: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({
                        description:
                          '**array** of HTML-formatted natural-language exclusions for *this* product\n- may contain basic HTML mark-up - e.g., br, li, b, u, p, i, ul and ol\n',
                      }),
                    highlights: z
                      .int()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    hotelPickup: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          "**indicator**: `true` if *this* product offers hotel pick-up; if so, you will need to collect the user's hotel details",
                      }),
                    inclusions: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({
                        description:
                          '**array** of HTML-formatted features included in *this* product\n- may contain basic HTML mark-up tags; e.g., br, li, b, u, p, i, ul and ol\n',
                      }),
                    itinerary: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**HTML-formatted description** of the itinerary of *this* tour if available\n- may contain basic HTML tags; e.g., br, li, b, u, p, i, ul and ol\n',
                      }),
                    location: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          "**natural-language description** of *this* product's location\n-  can be a combination of the country and city, or a custom location\n",
                      }),
                    mapURL: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: "**URL** of this product's map (usually an image)" }),
                    maxTravellerCount: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          '**maximum number of travelers** allowed per-booking for *this* product',
                      }),
                    merchantCancellable: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          'ignore (Viator only)\n\n      \nFor cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object\n',
                      }),
                    merchantNetPriceFrom: MerchantNetPriceFromSchema.exactOptional(),
                    merchantNetPriceFromFormatted:
                      MerchantNetPriceFromFormattedSchema.exactOptional(),
                    merchantTermsAndConditions: z
                      .object({
                        amountRefundable: z
                          .int()
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description:
                              'Usually shows the total amount refundable if the cancellation is processed now. `null` in /product as no booking has been made.',
                          }),
                        cancellationFromTourDate: z
                          .array(
                            z
                              .object({
                                dayRangeMax: z
                                  .int()
                                  .nullable()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**number** of days prior to the tour start date that *this* policy window begins',
                                  }),
                                dayRangeMin: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**number** of days prior to the tour start date that *this* policy window ends',
                                  }),
                                percentageRefundable: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**percentage** of total price refundable if cancelled within *this* time window',
                                  }),
                                policyEndTimestamp: z
                                  .int()
                                  .nullable()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Usually shows the Unix timestamp giving the exact time the policy ends. `null` in /product as no booking has yet been made.',
                                  }),
                                policyStartTimestamp: z
                                  .int()
                                  .nullable()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      'Usually shows the Unix timestamp giving the exact time the policy commences. `null` in /product as no booking has yet been made.',
                                  }),
                              })
                              .openapi({ required: [] }),
                          )
                          .exactOptional(),
                        merchantTermsAndConditionsType: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              '**numeric identifier** for the merchant terms and conditions type for *this* product',
                          }),
                        termsAndConditions: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**natural-language description** of the terms and conditions for *this* product',
                          }),
                      })
                      .nullable()
                      .exactOptional()
                      .openapi({ required: [] }),
                    onRequestPeriod: OnRequestPeriodSchema.exactOptional(),
                    onSale: OnSaleSchema.exactOptional(),
                    operates: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          "**HTML-formatted natural-language description** of *this* product's operation frequency",
                      }),
                    panoramaCount: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description: '**number** of panoramic images available for *this* product',
                      }),
                    pas: z
                      .object({})
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    passengerAttributes: z
                      .array(
                        z
                          .object({
                            customAttribute_kgs: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            customAttribute_lbs: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            errorMissingMessage: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            errorValidationMessage: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            questionId: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            required: z
                              .boolean()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            title: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                            validateType: z
                              .string()
                              .exactOptional()
                              .openapi({ description: 'ignore (Viator only)' }),
                          })
                          .openapi({ required: [] }),
                      )
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    photoCount: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description: '**number** of user photos available for *this* product',
                      }),
                    price: PriceSchema.exactOptional(),
                    priceFormatted: PriceFormattedSchema.exactOptional(),
                    primaryDestinationId: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description:
                          "**unique numeric identifier** of *this* product's primary destination",
                      }),
                    primaryDestinationName: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          "**natural-language name** of *this* product's primary destination",
                      }),
                    primaryDestinationUrlName: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**URL-formatted name** of the destination in which *this* product is located',
                      }),
                    primaryGroupId: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    productPhotos: z
                      .array(
                        z
                          .object({
                            caption: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description: '**natural-language caption** for *this* photo',
                              }),
                            photoURL: z
                              .string()
                              .exactOptional()
                              .openapi({ description: '**URL** of *this* photo' }),
                            supplier: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language name** of the supplier of *this* photo',
                              }),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional()
                      .openapi({
                        description:
                          '**array** of image objects detailing images available for *this* product',
                      }),
                    productUrlName: z
                      .string()
                      .exactOptional()
                      .openapi({ description: '**URL-formatted name** of *this* product' }),
                    rating: RatingSchema.exactOptional(),
                    ratingCounts: RatingCountsSchema.exactOptional(),
                    region: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**natural-language name** of the region in which *this* product operates',
                      }),
                    returnDetails: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          "**HTML-formatted natural-language description** of *this* product's drop-off details (if available)",
                      }),
                    reviewCount: ReviewCountSchema.exactOptional(),
                    reviews: ReviewsSchema.exactOptional(),
                    rrp: RrpSchema.exactOptional(),
                    rrpFormatted: RrpFormattedSchema.exactOptional(),
                    salesPoints: z
                      .array(z.string())
                      .exactOptional()
                      .openapi({
                        description:
                          'ignore (Viator only)\n\n**Note**: The information that was previously returned in this field is available in the `additionalInfo`, `inclusions` and `description` fields\n',
                      }),
                    savingAmount: SavingAmountSchema.exactOptional(),
                    savingAmountFormated: SavingAmountFormatedSchema.exactOptional(),
                    shortDescription: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**natural-language description** (shortened) of *this* product',
                      }),
                    shortTitle: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: '**natural-language title** (shortened) of *this* product',
                      }),
                    specialOffer: SpecialOfferSchema.exactOptional(),
                    specialOfferAvailable: SpecialOfferAvailableSchema.exactOptional(),
                    specialReservation: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    specialReservationDetails: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    sslSupported: z
                      .boolean()
                      .exactOptional()
                      .openapi({ description: 'ignore (Viator only)' }),
                    subCatIds: z
                      .array(z.int())
                      .exactOptional()
                      .openapi({
                        description:
                          '**list** of unique numeric subcategory identifiers that *this* product falls under\n- `subcategoryId` is available from the [/taxonomy/categories](#operation/taxonomyCategories) service\n',
                      }),
                    supplierCode: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: "**unique identification code** of *this* product's supplier",
                      }),
                    supplierName: z
                      .string()
                      .exactOptional()
                      .openapi({ description: "**name** of *this* product's supplier" }),
                    thumbnailHiResURL: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description: "**URL** of *this* product's high-resolution thumbnail image",
                      }),
                    thumbnailURL: z
                      .string()
                      .exactOptional()
                      .openapi({ description: "**URL** for *this* product's thumbnail image" }),
                    title: z
                      .string()
                      .exactOptional()
                      .openapi({ description: '**natural-language title** of *this* product' }),
                    tourGrades: z
                      .array(
                        z
                          .object({
                            currencyCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  "**currency code** of the currency *this* product's tour grades prices are shown in",
                              }),
                            defaultLanguageCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**language code** of the standard language for *this* tour grade',
                              }),
                            gradeCode: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**unique alphanumeric identifier** of *this* tour grade',
                              }),
                            gradeDepartureTime: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**departure time** for *this* tour grade if available',
                              }),
                            gradeDescription: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language description** of *this* tour grade',
                              }),
                            gradeTitle: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**natural-language description** of *this* tour grade',
                              }),
                            langServices: z
                              .record(z.string(), z.string())
                              .exactOptional()
                              .openapi({
                                description:
                                  '**dictionary** of language service codes and their natural-language descriptors',
                              }),
                            merchantNetPriceFrom: MerchantNetPriceFromSchema.exactOptional(),
                            merchantNetPriceFromFormatted:
                              MerchantNetPriceFromFormattedSchema.exactOptional(),
                            priceFrom: z
                              .number()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**numeric suggested retail price** for *this* tour grade\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            priceFromFormatted: z
                              .string()
                              .exactOptional()
                              .openapi({
                                description:
                                  '**currency-formatted suggested retail price** for *this* tour grade\n- For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)\n',
                              }),
                            sortOrder: z
                              .int()
                              .exactOptional()
                              .openapi({ description: '**sort order** of *this* tour grade' }),
                          })
                          .openapi({ required: [] }),
                      )
                      .exactOptional()
                      .openapi({
                        description: '**array** of tour grade objects available for *this* product',
                      }),
                    tourGradesAvailable: z
                      .boolean()
                      .exactOptional()
                      .openapi({
                        description:
                          '**indicator**: \n- `true`: tour grades are available for this product, meaning you will need to display these tour grades to the user and include a tour grade when booking *this* product\n- `false`: only a default tour grade is available for *this* product\n',
                      }),
                    translationLevel: TranslationLevelSchema.exactOptional(),
                    userPhotos: z
                      .array(PhotoObjectSchema)
                      .exactOptional()
                      .openapi({ description: '**array** of user photo objects' }),
                    videoCount: z
                      .int()
                      .exactOptional()
                      .openapi({
                        description: 'ignore (Viator only) – videos are not available to partners',
                      }),
                    videos: z
                      .string()
                      .nullable()
                      .exactOptional()
                      .openapi({
                        description: 'ignore (Viator only) – videos are not available to partners',
                      }),
                    voucherOption: z
                      .string()
                      .exactOptional()
                      .openapi({
                        description:
                          '**specifier** of the type(s) of vouchers that can be used:\n\n  - `VOUCHER_PAPER_ONLY` - *only* printed paper vouchers accepted\n  - `VOUCHER_E` - e-vouchers + printed paper vouchers accepted\n',
                      }),
                    voucherRequirements: z
                      .any()
                      .exactOptional()
                      .openapi({
                        description:
                          '**natural-language description** of any requirements pertaining to the use of the voucher',
                      }),
                    webURL: WebURLSchema.exactOptional(),
                  })
                  .exactOptional()
                  .openapi({ description: '**object** containing product details', required: [] }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': ProductExample_1Example, '2': ProductExample_2Example },
        },
      },
    },
  },
})

export const getProductPhotosRoute = createRoute({
  method: 'get',
  path: '/product/photos',
  tags: ['Product services'],
  summary: '/product/photos',
  description: 'Get photos of a product submitted by users',
  operationId: 'productPhotos',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    query: z.object({
      topX: TopXParamsSchema,
      code: CodeParamsSchema,
      showUnavailable: ShowUnavailableParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .array(PhotoObjectSchema)
                  .exactOptional()
                  .openapi({ description: '**array** of photo objects' }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': ProductPhotosExampleExample },
        },
      },
    },
  },
})

export const getProductReviewsRoute = createRoute({
  method: 'get',
  path: '/product/reviews',
  tags: ['Product services'],
  summary: '/product/reviews',
  description:
    'Get user-submitted reviews of a product\n\n**Note**: \n- The number of reviews that you can obtain via this service will depend on whether your account is limited in terms of the number of reviews you are entitled to receive. \n- The number of reviews available through this service is given in the `reviewCount` element in the response from [/product](#operation/product)\n- Please speak to your account manager if you wish to receive more reviews. If your account is not limited, you will be able to receive all available reviews for this product.\n- Only reviews in the language specified in the Accept-Language request header will be returned\n\n**Example:** "Get the first three reviews for product `5010SYDNEY` sorted by rating in ascending order":\n\n```javascript\nhttps://viatorapi.sandbox.viator.com/service/product/reviews?sortOrder=REVIEW_RATING_A&amp;topX=1-3&amp;code=5010SYDNEY&amp;showUnavailable=false\n```\n',
  operationId: 'productReviews',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    query: z.object({
      sortOrder: SortOrderREVIEWParamsSchema,
      topX: TopXParamsSchema,
      code: CodeParamsSchema,
      showUnavailable: ShowUnavailableParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .array(ReviewObjectSchema)
                  .exactOptional()
                  .openapi({ description: '**array** of review objects' }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': ProductReviewsExampleExample },
        },
      },
    },
  },
})

export const postSearchFreetextRoute = createRoute({
  method: 'post',
  path: '/search/freetext',
  tags: ['Product services'],
  summary: '/search/freetext',
  description:
    'Free text search\n- This service provides a **free text search across all products and destinations**\n- The `text` parameter is required\n- **Note:** results include a type indicator (`type`) that you can use to display each result appropriately based on its content\n',
  operationId: 'searchFreetext',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currencyCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**currency code** for the currency in which to display product pricing information',
                }),
              destId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    '**unique numeric identifier** of the destination to search within \n- `destinationId` can be retrieved from the [/taxonomy/destinations](#operation/taxonomyDestinations) service\n',
                }),
              searchTypes: z
                .array(z.enum(['PRODUCT', 'DESTINATION', 'ATTRACTION', 'RECOMMENDATION']))
                .exactOptional()
                .openapi({
                  description:
                    '**array** of search domain specifiers where each item is *one of*:\n  - `"PRODUCT"`: a tour / activity\n  - `"DESTINATION"`: continent, country, city, region\n  - `"ATTRACTION"`: an attraction within a destination (only available to partners with SEO access)\n  - `"RECOMMENDATION"`: an attraction within a destination (only available to partners with SEO access)\n',
                }),
              sortOrder: SortOrderSchema.exactOptional(),
              text: z.string().exactOptional().openapi({ description: '**text** to search for' }),
              topX: TopXSchema.exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            '1': {
              summary: 'by product or destination',
              value: {
                currencyCode: 'EUR',
                destId: 684,
                searchTypes: ['ATTRACTION', 'RECOMMENDATION'],
                text: 'grand',
                topX: '1-3',
              },
            },
            '2': {
              summary: 'by attraction or recommendation',
              value: {
                currencyCode: 'USD',
                destId: 684,
                searchTypes: ['PRODUCT', 'DESTINATION'],
                text: 'grand',
                topX: '1-3',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .array(SearchFreetextResponseSchema)
                  .exactOptional()
                  .openapi({ description: '**array** of search results' }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': SearchFreetextExample_1Example, '2': SearchFreetextExample_2Example },
        },
      },
    },
  },
})

export const postSearchProductsRoute = createRoute({
  method: 'post',
  path: '/search/products',
  tags: ['Product services'],
  summary: '/search/products',
  description:
    'Search for products\nThis service is used to search for products based on various criteria; such as:\n* the destination (locale) in which it operates\n* its association with a tourist attraction\n* its category and/or subcategory\n* the time period during which it operates\nThe fields you include in the request body for this service determine the kind of search that will be performed.\n\n**&lt;u&gt;Note&lt;/u&gt;**: \n\n* You can search **EITHER** by destination (`destId`) **OR** by attraction-link (`seoId`), but not both.\n* The destination identifier (`destId`) can be retrieved from the [/taxonomy/destinations](#operation/taxonomyDestinations) service.\n* The category (`catId`) and subcategory (`subCatId`) identifiers can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service.\n* The attraction identifier (`seoId`) can be retrieved from the [/taxonomy/attractions](#operation/taxonomyAttractions) service.\n\n**&lt;u&gt;Examples&lt;/u&gt;**:\n\n**Search by destination**:\n\n* E.g., "Top ten highest-rated yoga classes operating in Las Vegas:\n```javascript\n{\n    "destId": 684,\n    "subCatId": 26052,\n    "sortOrder": "REVIEW_AVG_RATING_D",\n    "topX": "1-3"\n}\n```\n\n**Search by attraction-link**:\n\n* E.g., "Products related to Everglades National Park operating 21-26 May 2019 in order of descending price":\n```javascript\n{\n    "seoId": 1115,\n    "sortOrder": "PRICE_FROM_D",\n    "topX": "1-3"\n}\n```\n\n**&lt;u&gt;\'Freesale-only\' merchants&lt;/u&gt;**:\n- Merchants with a "freesale only" key *must* pass `startDate` and `endDate` to this service to retrieve a list of all available \'freesale\' products (and \'freesale/on-request\' products that are currently \'freesale\') in the destination. \n- E.g., the following request body will result in \'freesale/on-request\' products within their on-request period not appearing in the results from this service. \n```javascript\n{\n    "destId": 684,\n    "startDate": "2020-02-21",\n    "endDate": "2020-03-21",\n    "sortOrder": "PRICE_FROM_D",\n    "topX": "1-3"\n}\n```\n\n- If `startDate` and `endDate` are omitted, \'freesale/on-request\' products that are presently within their on-request period may appear to be available to customers, but won\'t be available at the time of booking.\n',
  operationId: 'searchProducts',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              catId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    '**unique numeric identifier** of *this* product category to search within\n- `categoryId` can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service\n- at present, it is not possible to use `catId` in conjunction with `seoId`\n',
                }),
              currencyCode: z
                .string()
                .exactOptional()
                .openapi({ description: '**currency** in which to display product prices' }),
              destId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    '**unique numeric identifier** of the destination in which to search for products\n- `destinationId` is available from the [/taxonomy/destinations](#operation/taxonomyDestinations) service\n- use **EITHER** `destId` **OR** `seoId`, but not both\n',
                }),
              endDate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "**end date delimiter** for the search (must be in the future)\n- e.g., `'2019-10-21'`\n",
                }),
              seoId: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**search restriction specifier** for products associated with an attraction uniquely identified by `seoId`\n- use **EITHER** `destId` **OR** `seoId`, but not both\n',
                }),
              sortOrder: z
                .enum([
                  'TOP_SELLERS',
                  'REVIEW_AVG_RATING_A',
                  'REVIEW_AVG_RATING_D',
                  'PRICE_FROM_A',
                  'PRICE_FROM_D',
                ])
                .exactOptional()
                .openapi({
                  description:
                    '**sort order** in which to return the results that is *one of*:\n\n  - `"TOP_SELLERS"`: the top sellers\n  - `"REVIEW_AVG_RATING_A"`: ascending by average traveler rating (low -&gt; high)\n  - `"REVIEW_AVG_RATING_D"`: descending by average traveler rating (high -&gt; low)\n  - `"PRICE_FROM_A"`: ascending by price (low -&gt; high)\n  - `"PRICE_FROM_D"`: descending by price (high -&gt; low) \n',
                }),
              startDate: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "**start date delimiter** for the search (must be in the future)\n- e.g., `'2018-10-21'`\n",
                }),
              subCatId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    '**unique numeric identifier** of *this* product subcategory to search within\n- `subcategoryId` can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service\n- at present, it is not possible to use `subCatId` in conjunction with `seoId`\n',
                }),
              topX: TopXSchema.exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            '1': {
              summary: 'by destination',
              value: {
                destId: 684,
                sortOrder: 'REVIEW_AVG_RATING_D',
                subCatId: 26052,
                topX: '1-3',
              },
            },
            '2': {
              summary: 'by attraction link',
              value: { seoId: 1115, sortOrder: 'PRICE_FROM_D', topX: '1-3' },
            },
            '3': {
              summary: 'freesale only',
              value: {
                destId: 684,
                endDate: '2020-12-31',
                sortOrder: 'PRICE_FROM_D',
                startDate: '2020-12-21',
                topX: '1-3',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .array(
                    z
                      .object({
                        admission: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        available: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        bookingEngineId: BookingEngineIdSchema.exactOptional(),
                        catIds: z
                          .array(z.int())
                          .exactOptional()
                          .openapi({
                            description:
                              '**list** of unique numeric category identifiers for *this* product\n- the `categoryId` for the destination is available from the [/taxonomy/categories](#operation/taxonomyCategories) service\n',
                          }),
                        code: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**unique alphanumeric identifier** of *this* product',
                          }),
                        currencyCode: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**indicator** of the currency in which *this* product's prices are displayed",
                            example: 'EUR',
                          }),
                        duration: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**natural-language description** of the duration of *this* product',
                          }),
                        essential: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        merchantCancellable: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              'ignore (Viator only)\n\n    \nFor cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object\n',
                          }),
                        merchantNetPriceFrom: MerchantNetPriceFromSchema.exactOptional(),
                        merchantNetPriceFromFormatted:
                          MerchantNetPriceFromFormattedSchema.exactOptional(),
                        onRequestPeriod: OnRequestPeriodSchema.exactOptional(),
                        onSale: OnSaleSchema.exactOptional(),
                        panoramaCount: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              '**number** of panoramic images available for *this* product',
                          }),
                        pas: z
                          .object({})
                          .nullable()
                          .exactOptional()
                          .openapi({
                            description:
                              '**object** detailing product availability\n- `pas` stands for Product Availability Schema\n',
                          }),
                        photoCount: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: '**number** of user photos published for *this* product',
                          }),
                        price: PriceSchema.exactOptional(),
                        priceFormatted: PriceFormattedSchema.exactOptional(),
                        primaryDestinationId: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              "**unique numeric identifier** of *this* product's primary destination",
                          }),
                        primaryDestinationName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**natural-language name** of *this* product's primary destination",
                          }),
                        primaryDestinationUrlName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**URL-formatted name** of *this* product's primary destination",
                          }),
                        primaryGroupId: z
                          .int()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        productUrlName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: '**URL-formatted name** of *this* product' }),
                        rating: RatingSchema.exactOptional(),
                        reviewCount: ReviewCountSchema.exactOptional(),
                        rrp: RrpSchema.exactOptional(),
                        rrpformatted: RrpFormattedSchema.exactOptional(),
                        savingAmount: SavingAmountSchema.exactOptional(),
                        savingAmountFormated: SavingAmountFormatedSchema.exactOptional(),
                        shortDescription: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**HTML-formatted natural-language description** of *this* product',
                          }),
                        shortTitle: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**short natural-language title** of *this* product (for use when there is a need to conserve space)',
                          }),
                        sortOrder: z
                          .int()
                          .exactOptional()
                          .openapi({ description: '**sort order** for *this* product' }),
                        specialOfferAvailable: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        specialReservation: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        specialReservationDetails: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        sslSupported: z
                          .any()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        subCatIds: z
                          .array(z.int())
                          .exactOptional()
                          .openapi({
                            description:
                              '**list** of unique numeric subcategory identifiers for *this* product\n- the `subcategoryId` for the destination is available from the [/taxonomy/categories](#operation/taxonomyCategories) service\n',
                          }),
                        supplierCode: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**unique identifier** of *this* product's supplier in text string format",
                          }),
                        supplierName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: "**natural-language name** of *this* product's supplier",
                            example: 'V Theater Group, LLC',
                          }),
                        thumbnailHiResURL: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**URL** for the high resolution thumbnail for *this* product',
                          }),
                        thumbnailURL: z
                          .string()
                          .exactOptional()
                          .openapi({ description: "**URL** for *this* product's thumbnail image" }),
                        title: z
                          .string()
                          .exactOptional()
                          .openapi({ description: '**natural-language title** of *this* product' }),
                        translationLevel: TranslationLevelSchema.exactOptional(),
                        uniqueShortDescription: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        videoCount: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              'ignore (Viator only) – videos are not available to partners',
                          }),
                        webURL: WebURLSchema.exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({ description: '**array** of product objects' }),
              })
              .openapi({ required: [] }),
          ),
          examples: {
            '1': SearchProductsExample_1Example,
            '2': SearchProductsExample_2Example,
            '3': SearchProductsExample_3Example,
          },
        },
      },
    },
  },
})

export const postSearchProductsCodesRoute = createRoute({
  method: 'post',
  path: '/search/products/codes',
  tags: ['Product services'],
  summary: '/search/products/codes',
  description:
    "Search by product code\n- This service returns an array of products given an array of product identifiers that is useful for wishlist / shopping cart / user account display \n- **Note**: requesting an inactive or non-existent product code will return `0`, `null` and blank values (as per the 'invalid_product' example).\n",
  operationId: 'searchProductsCodes',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              currencyCode: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    '**currency code** for the currency in which to display product pricing',
                }),
              productCodes: z
                .array(z.string())
                .exactOptional()
                .openapi({ description: '**array** of product codes to search for' }),
            })
            .openapi({ required: [] }),
          examples: {
            invalid_product: { value: { currencyCode: 'USD', productCodes: ['123457890'] } },
            two_valid_products: {
              value: { currencyCode: 'EUR', productCodes: ['2280SUN', '229016', '5010SYDNEY'] },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .array(
                    z
                      .object({
                        admission: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        bookingEngineId: BookingEngineIdSchema.exactOptional(),
                        catIds: z
                          .array(z.int())
                          .exactOptional()
                          .openapi({
                            description:
                              '**list** of category identifiers *this* product falls under\n- `categoryId` is available from the [/taxonomy/categories](#operation/taxonomyCategories) service\n',
                          }),
                        code: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**unique alphanumeric identifier** of *this* product',
                          }),
                        currencyCode: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**currency** in which *this* product's pricing is displayed",
                          }),
                        duration: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**natural-language description** of *this* product's duration",
                          }),
                        essential: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        merchantCancellable: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              'ignore (Viator only)\n\n    \nFor cancellation information regarding the booking, please refer to the `merchantTermsAndConditions` object\n',
                          }),
                        merchantNetPriceFrom: MerchantNetPriceFromSchema.exactOptional(),
                        merchantNetPriceFromFormatted:
                          MerchantNetPriceFromFormattedSchema.exactOptional(),
                        onRequestPeriod: OnRequestPeriodSchema.exactOptional(),
                        onSale: OnSaleSchema.exactOptional(),
                        panoramaCount: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              '**number** of panoramic images available for *this* product',
                          }),
                        pas: z
                          .object({})
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        photoCount: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: '**number** of user photos published for *this* product',
                          }),
                        price: PriceSchema.exactOptional(),
                        priceFormatted: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**currency-formatted suggested sell 'from' price** of *this* product",
                          }),
                        primaryDestinationId: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              "**unique numeric identifier** of *this* product's primary destination",
                          }),
                        primaryDestinationName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**natural-language name** of *this* product's primary destination",
                          }),
                        primaryGroupId: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        rating: RatingSchema.exactOptional(),
                        reviewCount: ReviewCountSchema.exactOptional(),
                        rrp: RrpSchema.exactOptional(),
                        rrpformatted: RrpFormattedSchema.exactOptional(),
                        savingAmount: SavingAmountSchema.exactOptional(),
                        savingAmountFormated: SavingAmountFormatedSchema.exactOptional(),
                        shortDescription: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**natural-language description** of *this* product (short)',
                            example:
                              "Enjoy a fun filled day out, the whole family can enjoy Manly SEA LIFE Sanctuary! You'll see a vast array of marine life and meet some of Australia's most deadly animals. Learn all about these animals during the daily live shows and guided tours. The expert staff will share stories, interesting facts and answer all of your questions about these often misunderstood creatures.",
                          }),
                        shortTitle: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**natural-language title** (shortened) of *this* product',
                          }),
                        sortOrder: z
                          .int()
                          .exactOptional()
                          .openapi({ description: '**sort order** for *this* search result' }),
                        specialOfferAvailable: z
                          .boolean()
                          .exactOptional()
                          .openapi({
                            description:
                              "**indicator**: `true` if a special offer is available for *this* product. If `true`, this means that the `specialOffer` field in the response from the [/product] service will contain a text string providing details of the special offer which you may wish to display in your product search results. E.g. 'Book by May 27 to save 34% off our previously offered price!'",
                          }),
                        specialReservation: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        specialReservationDetails: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        subCatIds: z
                          .array(z.int())
                          .exactOptional()
                          .openapi({
                            description:
                              '**list** of subcategory identifiers that *this* product falls under \n- `subcategoryId` is available from the [/taxonomy/categories](#operation/taxonomyCategories) service\n',
                          }),
                        supplierCode: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: "**unique identifier** of *this* product's supplier",
                          }),
                        supplierName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: "**natural-language name** of *this* product's supplier",
                          }),
                        thumbnailHiResURL: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**URL** for *this* product's high-resolution thumbnail image",
                          }),
                        thumbnailURL: z
                          .string()
                          .exactOptional()
                          .openapi({ description: "**URL** for *this* product's thumbnail image" }),
                        title: z
                          .string()
                          .exactOptional()
                          .openapi({ description: '**natural-language title** of *this* product' }),
                        translationLevel: TranslationLevelSchema.exactOptional(),
                        uniqueShortDescription: z
                          .string()
                          .nullable()
                          .exactOptional()
                          .openapi({ description: 'ignore (Viator only)' }),
                        videoCount: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              'ignore (Viator only) – videos are not available to partners',
                          }),
                        webURL: WebURLSchema.exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({ description: '**array** of product objects' }),
              })
              .openapi({ required: [] }),
          ),
          examples: {
            '1': SearchProductsCodesExample_1Example,
            '2': SearchProductsCodesExample_2Example,
          },
        },
      },
    },
  },
})

export const postTaxonomyAttractionsRoute = createRoute({
  method: 'post',
  path: '/taxonomy/attractions',
  tags: ['Taxonomy services'],
  summary: '/taxonomy/attractions',
  description:
    "Get attractions\n- Retrieves a list of attractions (things like the Eiffel Tower or Empire State Building) and their associated unique numeric identifiers\n- The attraction's identifier (`seoId`) can be used as a means of searching for available products; for example, in the [/search/products](#operation/searchProducts) service.\n",
  operationId: 'taxonomyAttractions',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              destId: z
                .int()
                .exactOptional()
                .openapi({
                  description:
                    '**unique numeric identifier** of the destination in which to search for attractions',
                }),
              sortOrder: z
                .enum([
                  'SEO_PUBLISHED_DATE_D',
                  'SEO_PUBLISHED_DATE_A',
                  'SEO_REVIEW_AVG_RATING_D',
                  'SEO_REVIEW_AVG_RATING_A',
                  'SEO_ALPHABETICAL',
                ])
                .exactOptional()
                .openapi({
                  description:
                    '**sort order** in which to return the results that is *one of*:\n  * `"SEO_PUBLISHED_DATE_D"`: publish date (descending)\n  * `"SEO_PUBLISHED_DATE_A"`: publish date (ascending)\n  * `"SEO_REVIEW_AVG_RATING_D"`: traveler rating (high→low)\n  * `"SEO_REVIEW_AVG_RATING_A"`: traveler rating (low→high)\n  * `"SEO_ALPHABETICAL"`: alphabetical (A→Z)\n',
                }),
              topX: TopXSchema.exactOptional(),
            })
            .openapi({ required: [] }),
          example: { destId: 684, sortOrder: 'SEO_PUBLISHED_DATE_D', topX: '1-3' },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .array(
                    z
                      .object({
                        attractionCity: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**name** of the city in which the attraction is located',
                          }),
                        attractionLatitude: z
                          .number()
                          .exactOptional()
                          .openapi({
                            description: "**latitude component** of the attraction's location",
                          }),
                        attractionLongitude: z
                          .number()
                          .exactOptional()
                          .openapi({
                            description: "**longitude component** of the attraction's location",
                          }),
                        attractionState: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**name** of the state in which the attraction is located',
                          }),
                        attractionStreetAddress: z
                          .string()
                          .exactOptional()
                          .openapi({ description: '**street address** of the attraction' }),
                        destinationId: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              '**unique numeric identifier** of the the destination associated with the attraction',
                          }),
                        pageUrlName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**URL-formatted title** of the attraction page',
                          }),
                        photoCount: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: '**number** of user photos published for the attraction',
                          }),
                        primaryDestinationId: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              "**unique numeric identifier** of the attraction's primary destination",
                          }),
                        primaryDestinationName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**natural-language name** of the attraction's primary destination",
                          }),
                        primaryDestinationUrlName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**URL-formatted name** of the destination associated with *this* attraction',
                          }),
                        productCount: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: '**number** of products associated with the attraction',
                          }),
                        publishedDate: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**conventionally-formatted date** on which the attraction was listed',
                          }),
                        rating: z
                          .number()
                          .exactOptional()
                          .openapi({ description: '**average user rating** of the attraction' }),
                        seoId: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              '**unique numeric identifier** of the attraction\n- use as an input for [/search/products](#operation/searchProducts)\n',
                          }),
                        sortOrder: z
                          .int()
                          .exactOptional()
                          .openapi({ description: '**sort order** of *this* listing' }),
                        thumbnailHiResURL: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**URL** for the attraction's high-resolution thumbnail image",
                          }),
                        thumbnailURL: z
                          .string()
                          .exactOptional()
                          .openapi({ description: "**URL** the attraction's thumbnail image" }),
                        title: z
                          .string()
                          .exactOptional()
                          .openapi({ description: '**natural-language title** of the attraction' }),
                        webURL: WebURLSchema.exactOptional(),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({ description: '**array** of attraction objects' }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': TaxonomyAttractionsExampleExample },
        },
      },
    },
  },
})

export const getTaxonomyCategoriesRoute = createRoute({
  method: 'get',
  path: '/taxonomy/categories',
  tags: ['Taxonomy services'],
  summary: '/taxonomy/categories',
  description:
    'Get all product categories\n- Retrieves a list of product categories for a destination that can be used as a means of filtering when searching for products using the [/search/products](/#operation/searchProducts) service\n- This service can be used to get a list of all categories and subcategories for a destination by including its `destId`, or you can omit the `destId` to get a list of all categories and subcategories\n- **Note:** If no `destId` is passed, `productCount` and `thumbnailURL` will be `null` as they are destination-specific fields\n',
  operationId: 'taxonomyCategories',
  request: {
    headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }),
    query: z.object({
      destId: z
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
              '**unique numeric identifier** of the destination to enquire about (optional)\n- `destinationId` is returned by [/taxonomy/destinations](#operation/taxonomyDestinations)\n',
            example: 684,
            in: 'query',
            name: 'destId',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .array(
                    z
                      .object({
                        groupName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**natural-language name** of *this* product category',
                            example: 'Air, Helicopter and Balloon Tours',
                          }),
                        groupUrlName: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description: '**URL-formatted name** of *this* product category',
                          }),
                        id: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description: '**unique numeric identifier** for the category',
                            example: 1,
                          }),
                        productCount: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              '**number** of products in this category in the destination specified by `destId`\n- **note**: will be `null` if no `destId` is included in the query\n',
                            example: 47,
                          }),
                        subcategories: z
                          .array(
                            z
                              .object({
                                categoryId: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**unique numeric identifier** of *this* product category',
                                    example: 1,
                                  }),
                                sortorder: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**sort order** (suggested) of the subcategory within the category',
                                    example: 1,
                                  }),
                                subCategoryUrlName: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**URL-formatted name** of *this* product subcategory',
                                  }),
                                subcategoryId: z
                                  .int()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**unique numeric identifier** of *this* product subcategory',
                                    example: 1,
                                  }),
                                subcategoryName: z
                                  .string()
                                  .exactOptional()
                                  .openapi({
                                    description:
                                      '**natural-language name** of *this* product subcategory',
                                    example: 'Air Tours',
                                  }),
                              })
                              .openapi({ required: [] }),
                          )
                          .exactOptional()
                          .openapi({ description: '**array** of subcategory objects' }),
                        thumbnailURL: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**URL** for this category's thumbnail image, selected from the most popular product within the category\n- **note:** will be `null` if no `destId` is included in the query\n",
                            example:
                              'http://cache.graphicslib.viator.com/graphicslib-prelive/thumbs154x109/2280/SITours/grand-canyon-all-american-helicopter-tour-in-las-vegas-115053.jpg',
                          }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({ description: '**array** of category data objects' }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': TaxonomyCategoriesExampleExample },
        },
      },
    },
  },
})

export const getTaxonomyDestinationsRoute = createRoute({
  method: 'get',
  path: '/taxonomy/destinations',
  tags: ['Taxonomy services'],
  summary: '/taxonomy/destinations',
  description:
    'Get details of all destinations supported by this API\n- Retrieves all the country taxonomy/city nodes as a flat list\n- Returns a complete list of Viator destinations, including destination names and parent identifiers\n- Used to provide navigation through drill down lists or combo boxes\n',
  operationId: 'taxonomyDestinations',
  request: { headers: z.object({ 'Accept-Language': AcceptLanguageParamsSchema }) },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: BasicErrorModelSchema.and(
            z
              .object({
                data: z
                  .array(
                    z
                      .object({
                        defaultCurrencyCode: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              '**currency code** for the currency in which pricing is displayed',
                          }),
                        destinationId: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              '**unique numeric identifier** of the destination\n- use this value as the `destId` input field for other Viator API services\n',
                          }),
                        destinationName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: '**natural-language name** of the destination' }),
                        destinationType: DestinationTypeSchema.exactOptional(),
                        destinationUrlName: z
                          .string()
                          .exactOptional()
                          .openapi({ description: 'ignore - (Viator only)' }),
                        iataCode: IataCodeSchema.exactOptional(),
                        latitude: z
                          .number()
                          .exactOptional()
                          .openapi({
                            description: "**latitude component** of the destination's geolocation",
                          }),
                        longitude: z
                          .number()
                          .exactOptional()
                          .openapi({
                            description: "**longitude component** of the destination's geolocation",
                          }),
                        lookupId: z
                          .string()
                          .exactOptional()
                          .openapi({
                            description:
                              "**hierarchy location specifier** for the destination that is a concatenation of all `parentId` and `destinationId` codes\n- e.g. `'8.77.673'` for Chicago\n- format: [top level `parentId`].[any additional `parentId`].[`destinationId`]\n",
                          }),
                        parentId: z
                          .int()
                          .exactOptional()
                          .openapi({
                            description:
                              "**unique numeric identifier** of the destination's parent destination",
                          }),
                        selectable: z
                          .boolean()
                          .exactOptional()
                          .openapi({ description: 'ignore - (Viator only)' }),
                        sortOrder: z
                          .int()
                          .exactOptional()
                          .openapi({ description: '**sort order** for this response' }),
                        timeZone: z
                          .string()
                          .exactOptional()
                          .openapi({ description: '**time zone** of the destination' }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional()
                  .openapi({ description: '**array** of destination objects' }),
              })
              .openapi({ required: [] }),
          ),
          examples: { '1': TaxonomyDestinationsExampleExample },
        },
      },
    },
  },
})
