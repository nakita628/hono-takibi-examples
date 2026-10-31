import { createRoute, z } from '@hono/zod-openapi'

const AmountSchema = z
  .object({
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The base currency applied to the <b>value</b> field to establish a monetary amount.  <br><br>The currency is represented as a 3-letter <a href="https://www.iso.org/iso-4217-currency-codes.html" title="https://www.iso.org" target="_blank">ISO 4217</a> currency code. For example, the code for the Canadian Dollar is <code>CAD</code>.  <br><br><b>Default:</b> The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href=\'https://developer.ebay.com/api-docs/sell/logistics/types/bas:CurrencyCodeEnum\'>eBay API documentation</a>',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The monetary amount in the specified <b>currency</b>.' }),
  })
  .openapi({
    description:
      'A complex type that describes the value of a monetary amount as represented by a global currency.',
    required: [],
  })
  .openapi('Amount')

const AdditionalOptionSchema = z
  .object({
    additionalCost: AmountSchema.exactOptional().openapi({
      description:
        'The monetary cost of the additional shipping option identified by the <b>optionType</b> field.',
    }),
    optionType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of a shipping option that can be purchased in addition to the base shipping cost of this rate. The value supplied in this field must match exactly the option name as supplied by the selected rate.',
      }),
  })
  .openapi({
    description:
      'This complex type contains information about a shipping option that can be purchased in addition to the base shipping cost of a recommended rate. Additional options for each rate are defined, named, and offered by the selected shipping carrier. Examples include shipping insurance or the requirement for a recipient signature.',
    required: [],
  })
  .openapi('AdditionalOption')

const ContactAddressSchema = z
  .object({
    addressLine1: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first line of the street address.' }),
    addressLine2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The second line of the street address. Use this field for additional address information, such as a suite or apartment number.',
      }),
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'The city in which the address is located.' }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The country of the address, represented as two-letter <a href="https://www.iso.org/iso-3166-country-codes.html" title="https://www.iso.org" target="_blank">ISO 3166</a> country code. For example, <code>US</code> represents the United States and <code>DE</code> represents Germany. For implementation help, refer to <a href=\'https://developer.ebay.com/api-docs/sell/logistics/types/bas:CountryCodeEnum\'>eBay API documentation</a>',
      }),
    county: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The county (not country) in which the address is located. Counties typically contain multiple cities or towns.',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The postal code of the address.' }),
    stateOrProvince: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The state or province in which the address is located. States and provinces often contain multiple counties.',
      }),
  })
  .openapi({
    description: 'This complex type specifies the details of a geographical address.',
    required: [],
  })
  .openapi('ContactAddress')

const PhoneNumberSchema = z
  .object({
    phoneNumber: z.string().exactOptional().openapi({ description: 'A telephone number.' }),
  })
  .openapi({
    description: 'This complex type contains a string field representing a telephone number.',
    required: [],
  })
  .openapi('PhoneNumber')

const ContactSchema = z
  .object({
    companyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company name with which the contact is associated.' }),
    contactAddress: ContactAddressSchema.exactOptional().openapi({
      description: "The details of the contact's geographical address.",
    }),
    fullName: z.string().exactOptional().openapi({ description: "The contact's full name." }),
    primaryPhone: PhoneNumberSchema.exactOptional().openapi({
      description: "The contact's primary telephone number.",
    }),
  })
  .openapi({
    description:
      'This complex type contains contact information for an individual buyer or seller.',
    required: [],
  })
  .openapi('Contact')

const CreateShipmentFromQuoteRequestSchema = z
  .object({
    additionalOptions: z
      .array(AdditionalOptionSchema)
      .exactOptional()
      .openapi({
        description:
          "Supply a list of one or more shipping options that the seller wants to purchase for this shipment.  <br><br>The <b>baseShippingCost</b> field that's associated with the selected shipping rate is the cost of the base service offered in the rate. In addition to the base service, sellers can add additional shipping services to the base service. Shipping options include things such as shipping insurance or a recipient's signature upon delivery. The cost of any added services is summed with the base shipping cost to determine the final cost for the shipment. All options added to the shipment must be chosen from the set of shipping options offered with the selected rate.",
      }),
    labelCustomMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional text to be printed on the shipping label if the selected shipping carrier supports custom messages on their labels.',
      }),
    labelSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The seller\'s desired label size. Any supplied value is applied only if the shipping carrier supports multiple label sizes, otherwise the carrier\'s default label size is used.  <br><brCurrently, the only valid value is: <code>4"x6"</code>',
      }),
    rateId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The eBay-assigned ID of the shipping rate that the seller selected for the shipment. This value is generated by a call to <b>createShippingQuote</b> and is returned in the <b>rates.rateId</b> field.',
      }),
    returnTo: ContactSchema.exactOptional().openapi({
      description:
        'The optional return address and contact details for the shipment. The return address is printed on the shipping label. If not specified, the return address defaults to the <b>shipFrom</b> address returned in shipping quote. ',
    }),
    shippingQuoteId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique eBay-assigned ID of the shipping quote that was generated by a call to <b>createShippingQuote</b>.',
      }),
  })
  .openapi({
    description:
      'This complex type contains the request payload for the <b>createFromShippingQuote</b> method.',
    required: [],
  })
  .openapi('CreateShipmentFromQuoteRequest')

const DimensionsSchema = z
  .object({
    height: z
      .string()
      .exactOptional()
      .openapi({ description: 'The numeric value of the height of the package.' }),
    length: z
      .string()
      .exactOptional()
      .openapi({ description: 'The numeric value of the length of the package.' }),
    unit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The unit of measure used to express the height, length, and width of the package. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:LengthUnitOfMeasureEnum'>eBay API documentation</a>",
      }),
    width: z
      .string()
      .exactOptional()
      .openapi({ description: 'The numeric value of the width of the package.' }),
  })
  .openapi({
    description: 'This complex type defines the dimensions of a package to be shipped.',
    required: [],
  })
  .openapi('Dimensions')

const ErrorParameterSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the entity that threw the error.' }),
    value: z.string().exactOptional().openapi({ description: 'A description of the error.' }),
  })
  .openapi({ description: 'Container for an error parameter.', required: [] })
  .openapi('ErrorParameter')

const ErrorSchema = z
  .object({
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The category type for this error or warning. It takes a string that can have one of three values:<ul><li><code>Application</code>: Indicates an exception or error occurred in the application code or at runtime. Examples include catching an exception in a service\'s business logic, system failures, or request errors from a dependency.</li><li><code>Business</code>: Used when your service or a dependent service refused to continue processing on the resource because of a business rule violation such as "Seller does not ship item to Antarctica" or "Buyer ineligible to purchase an alcoholic item". Business errors are not syntactical input errors.</li><li><code>Request</code>: Used when there is anything wrong with the request, such as authentication, syntactical errors, rate limiting or missing headers, bad HTTP header values, and so on.</li></ul>',
      }),
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the domain containing the service or application.' }),
    errorId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.',
      }),
    inputRefIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Identifies specific request elements associated with the error, if any. inputRefId's response is format specific. For JSON, use <i>JSONPath</i> notation.",
      }),
    longMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An expanded version of message that should be around 100-200 characters long, but is not required to be such.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An end user and app-developer friendly device agnostic message. It explains what the error or warning is, and how to fix it (in a general sense). Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale.",
      }),
    outputRefIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Identifies specific response elements associated with the error, if any. Path format is the same as <code>inputRefId</code>.',
      }),
    parameters: z
      .array(ErrorParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'This optional complex field type contains a list of one or more context-specific <code>ErrorParameter</code> objects, with each item in the list entry being a parameter (or input field name) that caused an error condition. Each <code>ErrorParameter</code> object consists of two fields, a <code>name</code> and a <code>value</code>.',
      }),
    subdomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Name of the domain's subsystem or subdivision. For example, checkout is a subdomain in the buying domain.",
      }),
  })
  .openapi({
    description: 'A container that defines the elements of error and warning message.',
    required: [],
  })
  .openapi('Error')

const OrderSchema = z
  .object({
    channel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The e-commerce platform or environment where the order was created. Use the value <code>EBAY</code> to get the rates available for eBay orders.',
      }),
    orderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique ID of the order supplied by the channel of origin. For eBay orders, this would be the <b>orderId</b>.',
      }),
  })
  .openapi({
    description:
      'This complex type defines an order from which a seller is including one or more line items in a single package to be shipped.',
    required: [],
  })
  .openapi('Order')

const WeightSchema = z
  .object({
    unit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The unit of measurement used to specify the weight of a shipping package. Both the <strong>unit</strong> and <strong>value</strong> fields are required if the <strong>weight</strong> container is used. If the English system of measurement is being used, the applicable values for weight units are <code>POUND</code> and <code>OUNCE</CODE>. If the metric system of measurement is being used, the applicable values for weight units are <code>KILOGRAM</code> and <code>GRAM</code>. The metric system is used by most countries outside of the US. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:WeightUnitOfMeasureEnum'>eBay API documentation</a>",
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The numeric value of the weight of the package, as measured by the value of <b>unit</b>.',
      }),
  })
  .openapi({
    description:
      'This complex type contains information about the weight of an object such as a shipping package.',
    required: [],
  })
  .openapi('Weight')

const PackageSpecificationSchema = z
  .object({
    dimensions: DimensionsSchema.exactOptional().openapi({
      description:
        'Declares the height, length, width, and unit of measure for the package to be shipped.',
    }),
    weight: WeightSchema.exactOptional().openapi({
      description: 'Declares the weight of the package.',
    }),
  })
  .openapi({
    description: 'This complex type specifies the dimensions and weight of a package.',
    required: [],
  })
  .openapi('PackageSpecification')

const PickupSlotSchema = z
  .object({
    pickupSlotEndTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the pickup slot ends, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code>',
      }),
    pickupSlotId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Seller-defined name for the pickup slot. <!-- Max characters? -->',
      }),
    pickupSlotStartTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the pickup slot begins, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> UTC string.',
      }),
    pickupSlotTimeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time zone of the pickup location, returned as <a href="https://www.iana.org/time-zones" target="_blank">Time Zone Database</a> ID (also know as an Olson time zone ID).',
      }),
  })
  .openapi({
    description: 'This complex type defines a time window for the pickup of a package.',
    required: [],
  })
  .openapi('PickupSlot')

const PurchasedRateSchema = z
  .object({
    additionalOptions: z
      .array(AdditionalOptionSchema)
      .exactOptional()
      .openapi({
        description:
          'An list of additional, optional features that have been purchased for the shipment.',
      }),
    baseShippingCost: AmountSchema.exactOptional().openapi({
      description:
        'The amount of the "base cost" for the shipment as set by the given carrier for the specified service. This cost excludes any addition costs accrued from the addition of any optional shipping options.',
    }),
    destinationTimeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time zone of the destination according to <a href="https://www.iana.org/time-zones" target="_blank">Time Zone Database</a>. For example, "America/Los_Angeles".',
      }),
    maxEstimatedDeliveryDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string value representing maximum (latest) estimated delivery time, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code>',
      }),
    minEstimatedDeliveryDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string value representing minimum (earliest) estimated delivery time, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a>ISO 8601</a> UTC string.',
      }),
    pickupNetworks: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of pickup networks compatible with the shipping service.' }),
    pickupSlotId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This unique eBay-assigned ID value is returned only if the shipment has been configured for a scheduled pickup.',
      }),
    pickupType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The type of pickup or drop off configured for the shipment. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:PickupTypeEnum'>eBay API documentation</a>",
      }),
    rateId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The eBay-generated ID of the shipping rate that the seller has chosen to purchase for the shipment.',
      }),
    shippingCarrierCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID code for the carrier that was selected for the package shipment.',
      }),
    shippingCarrierName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the shipping carrier.' }),
    shippingQuoteId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique eBay-generated ID of the <i>shipping quote</i> from which the seller selected a shipping rate (<b>rateId</b>).',
      }),
    shippingServiceCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String ID code for the shipping service selected for the package shipment. This is a service that the shipping carrier supplies.',
      }),
    shippingServiceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the shipping service.' }),
    totalShippingCost: AmountSchema.exactOptional().openapi({
      description:
        'The total shipping cost, which is the sum cost of the base shipping cost and the cost of all the selected shipping options.',
    }),
  })
  .openapi({
    description:
      'The "rate" that has been selected and purchased for the shipment, as referenced by the <b>rateId</b> value.',
    required: [],
  })
  .openapi('PurchasedRate')

const RateSchema = z
  .object({
    additionalOptions: z
      .array(AdditionalOptionSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains service and pricing information for one or more shipping options that are offered by the carrier and can be purchased in addition to the base shipping service provided by this rate. Shipping options can include items such as <code>INSURANCE</code> and <code>SIGNATURE</code>.',
      }),
    baseShippingCost: AmountSchema.exactOptional().openapi({
      description:
        'A live quote for the cost that the carrier (identified by <b>shippingCarrierCode</b>) is charging for the shipping service being offered (identified by <b>shippingServiceCode</b>), excluding any additional shipping options.',
    }),
    destinationTimeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the time zone region, as defined in the <a href="http://www.iana.org/time-zones"  target="_blank">IANA Time Zone Database</a>, to which the package is being shipped.  <br><br>Delivery dates are calculated relative to this time zone.  <br><br><span class="tablenote"><strong>Note:</strong> This is different from a Coordinated Universal Time (UTC) offset. For example, the <i>America/Los_Angeles</i> time zone identifies a region with the UTC standard time offset of <code>-08:00</code>, but so do several other time zones, including <i>America/Tijuana</i>,<i>America/Dawson</i>, and <i>Pacific/Pitcairn</i>.</span>',
      }),
    maxEstimatedDeliveryDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The latest stated date and time the shipment will be delivered at this rate.  <br><br>The time stamp is formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code>',
      }),
    minEstimatedDeliveryDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The estimated earliest date and time the shipment will be delivered at this rate. The time stamp is formatted as an ISO 8601 UTC string.',
      }),
    pickupNetworks: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of pickup networks compatible with the shipping service.' }),
    pickupSlots: z
      .array(PickupSlotSchema)
      .exactOptional()
      .openapi({ description: 'A list of available pickup slots for the package.' }),
    pickupType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The type of pickup or drop-off service associated with the <b>pickupSlots</b> time frames. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:PickupTypeEnum'>eBay API documentation</a>",
      }),
    rateId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique eBay-assigned ID for this shipping rate.' }),
    rateRecommendation: z
      .array(
        z
          .string()
          .openapi({
            description:
              " For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:RateRecommendationEnum'>eBay API documentation</a>",
          }),
      )
      .exactOptional()
      .openapi({
        description:
          "A list of reasons this rate is recommended. Available values are: <ul> <li><code>BUYER_CHOSEN</code> &mdash; The rate meets or exceeds the requirements of the buyer's preferred shipping option.</li> <li><code>CHEAPEST_ON_TIME</code> &mdash; The rate is the cheapest rate available that will provide delivery within the seller's time frame commitment.</li>  <li><code>EBAY_PLUS_OK</code> &mdash; The rate complies with the shipping requirements of the eBay Plus program.</li> <li><code>FASTEST_ON_TIME</code> &mdash; The rate has the fastest shipping time, and will provide delivery within the seller's time frame commitment.</li> <li><code>GUARANTEED_DELIVERY_OK</code> &mdash; The rate complies with the shipping requirements of the eBay Guaranteed Delivery program.</li></ul>",
      }),
    shippingCarrierCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code name of the shipping carrier who will provide the service identified by <b>shippingServiceCode</b>.',
      }),
    shippingCarrierName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The common name of the shipping carrier.' }),
    shippingServiceCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code name of the shipping service to be provided by the carrier identified by <b>shippingCarrierCode</b>.',
      }),
    shippingServiceName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The common name of the shipping service.' }),
  })
  .openapi({
    description:
      "This complex type contains live quote information about a shipping service that's available for a given shipping quote request, including the shipping carrier and service, delivery window, shipping cost, and additional shipping options.",
    required: [],
  })
  .openapi('Rate')

const ShipmentCancellationSchema = z
  .object({
    cancellationRequestedDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time and date the request was made to cancel the shipment, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> UTC string.',
      }),
    cancellationStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This enum specifies the current cancellation status of a shipment, if a cancellation request has been made. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:ShipmentCancellationStatusEnum'>eBay API documentation</a>",
      }),
  })
  .openapi({
    description:
      'This type defines a shipment cancellation by the date and time the cancellation request was made and the current status of the request.',
    required: [],
  })
  .openapi('ShipmentCancellation')

const ShipmentSchema = z
  .object({
    cancellation: ShipmentCancellationSchema.exactOptional().openapi({
      description: 'Cancellation status for the package, if one exists.',
    }),
    creationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time the shipment was created, formatted as an <a href="https://www.iso.org/iso-8601-date-and-time-format.html" title="https://www.iso.org" target="_blank">ISO 8601</a> string, which is based on the 24-hour Coordinated Universal Time (UTC) clock.  <br><br><b>Format:</b> <code>[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z</code> <br><b>Example:</b> <code>2018-08-20T07:09:00.000Z</code>',
      }),
    labelCustomMessage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If supported by the selected shipping carrier, this field can contain optional seller text to be printed on the shipping label.',
      }),
    labelDownloadUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The direct URL the seller can use to download an image of the shipping label. By default, the file format is PDF. See <a href="/api-docs/sell/logistics/resources/shipment/methods/downloadLabelFile">downloadLabelFile</a> for requesting different response file formats.',
      }),
    labelSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The seller\'s desired label size. The support for multi-sized labels is shipping-carrier specific and if the size requested in the <b>creaateFromShippingQuote</b> call matches a size the carrier supports, the value will be represented here in the shipment. <br><br>Currently, the only valid value is: <code>4"x6"</code>',
      }),
    orders: z
      .array(OrderSchema)
      .exactOptional()
      .openapi({
        description:
          'This list value is optionally assigned by the seller. When present, each element in the returned list contains seller-assigned information about an order (such as an order number). Because a package can contain all or part of one or more orders, this field provides a way for sellers to identify the packages that contain specific orders.',
      }),
    packageSpecification: PackageSpecificationSchema.exactOptional().openapi({
      description: 'The weight and dimensions of the package.',
    }),
    rate: PurchasedRateSchema.exactOptional().openapi({
      description:
        'The shipping rate that the seller has chosen to purchase for this shipment. Each rate, identified by a <b>rateId</b>, contains the offered base service, options, and shipping parameters that were selected for the package shipment.',
    }),
    returnTo: ContactSchema.exactOptional().openapi({
      description:
        'The address and contact details that should be used for item returns. Sellers have the option to define a return address that is different from their <b>shipFrom</b> address. If not specified, the return address defaults to the <b>shipFrom</b> address in the shipping quote.',
    }),
    shipFrom: ContactSchema.exactOptional().openapi({
      description: 'The address and contact details for the origin of the package shipment.',
    }),
    shipTo: ContactSchema.exactOptional().openapi({
      description: 'The address and contact details for the destination of the shipment.',
    }),
    shipmentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique eBay-assigned ID for the shipment. The ID is generated when the shipment is created by a call to <b>createFromShippingQuote</b>.',
      }),
    shipmentTrackingNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique carrier-assigned ID string that can be used to track the shipment.',
      }),
  })
  .openapi({
    description:
      'This complex type defines a shipment for a specific package (for example, a box or letter). Shipments are always linked to a purchased shipping label. ',
    required: [],
  })
  .openapi('Shipment')

const ShippingQuoteSchema = z
  .object({
    creationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time this quote was created, expressed as an ISO 8601 UTC string.',
      }),
    expirationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last date and time that this quote will be honored, expressed as an ISO 8601 UTC string. After this time the quote expires and the expressed rates can no longer be purchased.',
      }),
    orders: z
      .array(OrderSchema)
      .exactOptional()
      .openapi({
        description:
          'This list value is optionally assigned by the seller. When present, each element in the returned list contains seller-assigned information about an order (such as an order number). Because a package can contain all or part of one or more orders, this field provides a way for sellers to identify the packages that contain specific orders.',
      }),
    packageSpecification: PackageSpecificationSchema.exactOptional().openapi({
      description: 'The weight and dimensions of the package covered by this shipping quote.',
    }),
    rates: z
      .array(RateSchema)
      .exactOptional()
      .openapi({
        description:
          "A list of <i>rates</i> where each rate, as identified by a <b>rateId</b>, contains information about a specific shipping service offered by a carrier.  Rates include shipping carrier and service, the to and from locations, the pickup and delivery windows, the seller's shipping parameters, the service constraints, and the cost for the base service and a list of additional shipping options.  <br><br>Each rate offered is supported by a label service where you can purchase the rate, and associated shipping label, via a call to <b>createFromShippingQuote</b>.",
      }),
    shipFrom: ContactSchema.exactOptional().openapi({
      description: 'The address and contact details for the origin of the shipment.',
    }),
    shipTo: ContactSchema.exactOptional().openapi({
      description:
        'The address and contact details for the origin of the shipment.  <!-- which address should this be for a GSP shipment?-->',
    }),
    shippingQuoteId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique eBay-assigned ID for this shipping quote. The value of this field is associated with a specific package, based on its origin, destination, and size.',
      }),
    warnings: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'A list of any warnings triggered by the request.' }),
  })
  .openapi({
    description:
      'This complex type describes a "shipping quote," which contains the parameters for a package shipment. The shipping quote contains a list of "live quotes" or <i>rates</i> for the shipment. Rates are offerd by a carrier for a particular service, of set of services, for shipping the package. Included in the shipping quote are the package specifications, the shipment\'s origin and destination addresses, and the shipping parameters specified by the seller.  <br><br>Use the <b>rateId</b> value to select the specific service you want when you create a shipment by calling <b>createFromShippingQuote</b>.',
    required: [],
  })
  .openapi('ShippingQuote')

const ShippingQuoteRequestSchema = z
  .object({
    orders: z
      .array(OrderSchema)
      .exactOptional()
      .openapi({
        description:
          'A seller-defined list that contains information about the orders in the package. This allows sellers to include information about the line items in the package with the shipment information.  <br><br>A package can contain any number of line items from one or more orders, providing they all ship in the same package.  <br><br><b>Maximum list size:</b> 10',
      }),
    packageSpecification: PackageSpecificationSchema.exactOptional().openapi({
      description: 'Declares the weight and dimensions of the package.',
    }),
    shipFrom: ContactSchema.exactOptional().openapi({
      description: 'The address and contact details pertaining to the origin of the shipment.',
    }),
    shipTo: ContactSchema.exactOptional().openapi({
      description:
        "The address and contact details pertaining to the shipment's destination.  <!--<br><br>If you are using eBay's Global Shipping Program (GSP) to ship internationally, supply the address to -->",
    }),
  })
  .openapi({
    description:
      'This complex type defines the request body for <b>createShippingQuote</b>. Sellers <i>request a quote</i> for a shipment by defining the "To" and "From" addresses for the package, plus the package\'s size.  <br><br>Carriers respond by offering up a "rate" for the service of theirs that best fits seller\'s needs.',
    required: [],
  })
  .openapi('ShippingQuoteRequest')

const ApiAuthSecurityScheme = {
  description:
    'The security definitions for this API. Please check individual operations for applicable scopes.',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://auth.ebay.com/oauth2/authorize',
      scopes: {
        'https://api.ebay.com/oauth/api_scope/sell.logistics':
          ' This scope would allow signed in user to access Logistics information.',
      },
      tokenUrl: 'https://api.ebay.com/identity/v1/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postShipmentCreateFromShippingQuoteRoute = createRoute({
  method: 'post',
  path: '/shipment/create_from_shipping_quote',
  tags: ['shipment'],
  description:
    'This method creates a "shipment" based on the <b>shippingQuoteId</b> and <b>rateId</b> values supplied in the request. The rate identified by the <b>rateId</b> value specifies the carrier and service for the package shipment, and the rate ID must be contained in the shipping quote identified by the <b>shippingQuoteId</b> value. Call <b>createShippingQuote</b> to retrieve a set of live shipping rates.  <br><br>When you create a shipment, eBay generates a shipping label that you can download and use to ship your package.  <br><br>In a <b>createFromShippingQuote</b> request, sellers can include a list of shipping options they want to add to the base service quoted in the selected rate. The list of available shipping options is specific to each quoted rate and if available, the options are listed in the rate container of the of the shipping quote.  <br><br>In addition to a configurable return-to location and other details about the shipment, the response to this method includes:  <ul><li>The shipping carrier and service to be used for the package shipment</li> <li>A list of selected shipping options, if any</li> <li>The shipment tracking number</li> <li>The total shipping cost (the sum cost of the base shipping service and any added options)</li></ul> When you create a shipment, your billing agreement account is charged the sum of the <b>baseShippingCost</b> and the total cost of any additional shipping options you might have selected. Use the URL returned in <b>labelDownloadUrl</b> field, or call <b>downloadLabelFile</b> with the <b>shipmentId</b> value from the response, to download a shipping label for your package. <p class="tablenote"><b>Important!</b> Sellers must set up their payment method with eBay before they can use this method to create a shipment and the associated shipping label.</p>',
  operationId: 'createFromShippingQuote',
  request: {
    body: {
      description: 'The create shipment from quote request.',
      content: {
        'application/json': {
          schema: CreateShipmentFromQuoteRequestSchema.openapi({
            description: 'The create shipment from quote request.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'Created', content: { 'application/json': { schema: ShipmentSchema } } },
    400: { description: 'Bad Request' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.logistics'] }],
})

export const getShipmentShipmentIdRoute = createRoute({
  method: 'get',
  path: '/shipment/{shipmentId}',
  tags: ['shipment'],
  description:
    'This method retrieves the shipment details for the specified shipment ID. Call <b>createFromShippingQuote</b> to generate a shipment ID.',
  operationId: 'getShipment',
  request: {
    params: z.object({
      shipmentId: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter specifies the unique eBay-assigned ID of the shipment you want to retrieve. The <b>shipmentId</b> value is generated and returned by a call to <b>createFromShippingQuote</b>.',
            in: 'path',
            name: 'shipmentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ShipmentSchema } } },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.logistics'] }],
})

export const postShipmentShipmentIdCancelRoute = createRoute({
  method: 'post',
  path: '/shipment/{shipmentId}/cancel',
  tags: ['shipment'],
  description:
    "This method cancels the shipment associated with the specified shipment ID and the associated shipping label is deleted. When you cancel a shipment, the <b>totalShippingCost</b> of the canceled shipment is refunded to the account established by the user's billing agreement.  <br><br>Note that you cannot cancel a shipment if you have used the associated shipping label.",
  operationId: 'cancelShipment',
  request: {
    params: z.object({
      shipmentId: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter specifies the unique eBay-assigned ID of the shipment to be canceled. The <b>shipmentId</b> value is generated and returned by a call to <b>createFromShippingQuote</b>.',
            in: 'path',
            name: 'shipmentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'Success', content: { 'application/json': { schema: ShipmentSchema } } },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.logistics'] }],
})

export const getShipmentShipmentIdDownloadLabelFileRoute = createRoute({
  method: 'get',
  path: '/shipment/{shipmentId}/download_label_file',
  tags: ['shipment'],
  description:
    'This method returns the shipping label file that was generated for the <b>shipmentId</b> value specified in the request. Call <b>createFromShippingQuote</b> to generate a shipment ID.  <br><br>Use the <code>Accept</code> HTTP header to specify the format of the returned file. The default file format is a PDF file. <!-- Are other options available? -->',
  operationId: 'downloadLabelFile',
  request: {
    params: z.object({
      shipmentId: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter specifies the unique eBay-assigned ID of the shipment associated with the shipping label you want to download. The <b>shipmentId</b> value is generated and returned by a call to <b>createFromShippingQuote</b>.',
            in: 'path',
            name: 'shipmentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/pdf': { schema: z.array(z.string()) } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.logistics'] }],
})

export const postShippingQuoteRoute = createRoute({
  method: 'post',
  path: '/shipping_quote',
  tags: ['shipping_quote'],
  description:
    'The <b>createShippingQuote</b> method returns a <i>shipping quote </i> that contains a list of live "rates."  <br><br>Each rate represents an offer made by a shipping carrier for a specific service and each offer has a live quote for the base service cost. Rates have a time window in which they are "live," and rates expire when their purchase window ends. If offered by the carrier, rates can include shipping options (and their associated prices), and users can add any offered shipping option to the base service should they desire.  Also, depending on the services required, rates can also include pickup and delivery windows.  <br><br>Each rate is for a single package and is based on the following information: <ul><li>The shipping origin</li> <li>The shipping destination</li> <li>The package size (weight and dimensions)</li></ul>  Rates are identified by a unique eBay-assigned <b>rateId</b> and rates are based on price points, pickup and delivery time frames, and other user requirements. Because each rate offered must be compliant with the eBay shipping program, all rates reflect eBay-negotiated prices.  <br><br>The various rates returned in a shipping quote offer the user a choice from which they can choose a shipping service that best fits their needs. Select the rate for your shipment and using the associated <b>rateId</b>, call <b>createFromShippingQuote</b> to create a shipment and generate a shipping label that you can use to ship the package.',
  operationId: 'createShippingQuote',
  request: {
    headers: z.object({
      'X-EBAY-C-MARKETPLACE-ID': z
        .string()
        .openapi({
          param: {
            description:
              'This header parameter specifies the eBay marketplace for the shipping quote that is being created. For a list of valid values, refer to the section <a href="/api-docs/static/rest-request-components.html#marketpl" target="_blank">Marketplace ID Values</a> in the <b>Using eBay RESTful APIs</b> guide.',
            in: 'header',
            name: 'X-EBAY-C-MARKETPLACE-ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The request object for <b>createShippingQuote</b>.',
      content: {
        'application/json': {
          schema: ShippingQuoteRequestSchema.openapi({
            description: 'The request object for <b>createShippingQuote</b>.',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created',
      content: { 'application/json': { schema: ShippingQuoteSchema } },
    },
    400: { description: 'Bad Request' },
    409: { description: 'Conflict' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.logistics'] }],
})

export const getShippingQuoteShippingQuoteIdRoute = createRoute({
  method: 'get',
  path: '/shipping_quote/{shippingQuoteId}',
  tags: ['shipping_quote'],
  description:
    'This method retrieves the complete details of the shipping quote associated with the specified <b>shippingQuoteId</b> value.  <br><br>A "shipping quote" pertains to a single specific package and contains a set of shipping "rates" that quote the cost to ship the package by different shipping carriers and services. The quotes are based on the package\'s origin, destination, and size.  <br><br>Call <b>createShippingQuote</b> to create a <b>shippingQuoteId</b>.',
  operationId: 'getShippingQuote',
  request: {
    params: z.object({
      shippingQuoteId: z
        .string()
        .openapi({
          param: {
            description:
              'This path parameter specifies the unique eBay-assigned ID of the shipping quote you want to retrieve. The <b>shippingQuoteId</b> value is generated and returned by a call to <b>createShippingQuote</b>.',
            in: 'path',
            name: 'shippingQuoteId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ShippingQuoteSchema } },
    },
    400: { description: 'Bad Request' },
    404: { description: 'Not Found' },
    500: { description: 'Internal Server Error' },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope/sell.logistics'] }],
})
