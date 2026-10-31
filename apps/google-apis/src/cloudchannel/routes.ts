import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudChannelV1ActivateEntitlementRequestSchema = z
  .object({
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).",
      }),
  })
  .openapi({
    description: 'Request message for CloudChannelService.ActivateEntitlement.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ActivateEntitlementRequest')

const GoogleCloudChannelV1AdminUserSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: 'Primary email of the admin user.' }),
    familyName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Family name of the admin user.' }),
    givenName: z.string().exactOptional().openapi({ description: 'Given name of the admin user.' }),
  })
  .openapi({
    description: 'Information needed to create an Admin User for Google Workspace.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1AdminUser')

const GoogleCloudChannelV1AssociationInfoSchema = z
  .object({
    baseEntitlement: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the base entitlement, for which this entitlement is an add-on.',
      }),
  })
  .openapi({
    description: 'Association links that an entitlement has to other entitlements.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1AssociationInfo')

const GoogleCloudChannelV1CancelEntitlementRequestSchema = z
  .object({
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).",
      }),
  })
  .openapi({
    description: 'Request message for CloudChannelService.CancelEntitlement.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1CancelEntitlementRequest')

const GoogleCloudChannelV1ValueSchema = z
  .object({
    boolValue: z.boolean().exactOptional().openapi({ description: 'Represents a boolean value.' }),
    doubleValue: z.float64().exactOptional().openapi({ description: 'Represents a double value.' }),
    int64Value: z.string().exactOptional().openapi({ description: 'Represents an int64 value.' }),
    protoValue: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({ description: "Represents an 'Any' proto value." }),
    stringValue: z.string().exactOptional().openapi({ description: 'Represents a string value.' }),
  })
  .openapi({ description: 'Data type and value of a parameter.', required: [] })
  .openapi('GoogleCloudChannelV1Value')

const GoogleCloudChannelV1ParameterSchema = z
  .object({
    editable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Specifies whether this parameter is allowed to be changed. For example, for a Google Workspace Business Starter entitlement in commitment plan, num_units is editable when entitlement is active.',
        readOnly: true,
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of the parameter.' }),
    value: GoogleCloudChannelV1ValueSchema.exactOptional().openapi({
      description: 'Value of the parameter.',
    }),
  })
  .openapi({ description: 'Definition for extended entitlement parameters.', required: [] })
  .openapi('GoogleCloudChannelV1Parameter')

const GoogleCloudChannelV1ChangeOfferRequestSchema = z
  .object({
    offer: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. New Offer. Format: accounts/{account_id}/offers/{offer_id}.',
      }),
    parameters: z
      .array(GoogleCloudChannelV1ParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Parameters needed to purchase the Offer. To view the available Parameters refer to the Offer.parameter_definitions from the desired offer.',
      }),
    purchaseOrderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Purchase order id provided by the reseller.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).",
      }),
  })
  .openapi({ description: 'Request message for CloudChannelService.ChangeOffer.', required: [] })
  .openapi('GoogleCloudChannelV1ChangeOfferRequest')

const GoogleCloudChannelV1ChangeParametersRequestSchema = z
  .object({
    parameters: z
      .array(GoogleCloudChannelV1ParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Entitlement parameters to update. You can only change editable parameters. To view the available Parameters for a request, refer to the Offer.parameter_definitions from the desired offer.',
      }),
    purchaseOrderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Purchase order ID provided by the reseller.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).",
      }),
  })
  .openapi({
    description: 'Request message for CloudChannelService.ChangeParametersRequest.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ChangeParametersRequest')

const GoogleCloudChannelV1PeriodSchema = z
  .object({
    duration: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total duration of Period Type defined.' }),
    periodType: z
      .enum(['PERIOD_TYPE_UNSPECIFIED', 'DAY', 'MONTH', 'YEAR'])
      .exactOptional()
      .openapi({ description: 'Period Type.' }),
  })
  .openapi({ description: 'Represents period in days/months/years.', required: [] })
  .openapi('GoogleCloudChannelV1Period')

const GoogleCloudChannelV1RenewalSettingsSchema = z
  .object({
    enableRenewal: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If false, the plan will be completed at the end date.' }),
    paymentCycle: GoogleCloudChannelV1PeriodSchema.exactOptional().openapi({
      description: 'Describes how frequently the reseller will be billed, such as once per month.',
    }),
    paymentPlan: z
      .enum(['PAYMENT_PLAN_UNSPECIFIED', 'COMMITMENT', 'FLEXIBLE', 'FREE', 'TRIAL', 'OFFLINE'])
      .exactOptional()
      .openapi({ description: 'Describes how a reseller will be billed.' }),
    resizeUnitCount: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true and enable_renewal = true, the unit (for example seats or licenses) will be set to the number of active units at renewal time.',
      }),
  })
  .openapi({ description: 'Renewal settings for renewable Offers.', required: [] })
  .openapi('GoogleCloudChannelV1RenewalSettings')

const GoogleCloudChannelV1ChangeRenewalSettingsRequestSchema = z
  .object({
    renewalSettings: GoogleCloudChannelV1RenewalSettingsSchema.exactOptional().openapi({
      description: 'Required. New renewal settings.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).",
      }),
  })
  .openapi({
    description: 'Request message for CloudChannelService.ChangeRenewalSettings.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ChangeRenewalSettingsRequest')

const GoogleCloudChannelV1EduDataSchema = z
  .object({
    instituteSize: z
      .enum([
        'INSTITUTE_SIZE_UNSPECIFIED',
        'SIZE_1_100',
        'SIZE_101_500',
        'SIZE_501_1000',
        'SIZE_1001_2000',
        'SIZE_2001_5000',
        'SIZE_5001_10000',
        'SIZE_10001_OR_MORE',
      ])
      .exactOptional()
      .openapi({ description: 'Size of the institute.' }),
    instituteType: z
      .enum(['INSTITUTE_TYPE_UNSPECIFIED', 'K12', 'UNIVERSITY'])
      .exactOptional()
      .openapi({ description: 'Designated institute type of customer.' }),
    website: z
      .string()
      .exactOptional()
      .openapi({ description: "Web address for the edu customer's institution." }),
  })
  .openapi({ description: 'Required Edu Attributes', required: [] })
  .openapi('GoogleCloudChannelV1EduData')

const GoogleCloudChannelV1CloudIdentityInfoSchema = z
  .object({
    adminConsoleUri: z
      .string()
      .exactOptional()
      .openapi({
        description: "Output only. URI of Customer's Admin console dashboard.",
        readOnly: true,
      }),
    alternateEmail: z.string().exactOptional().openapi({ description: 'The alternate email.' }),
    customerType: z
      .enum(['CUSTOMER_TYPE_UNSPECIFIED', 'DOMAIN', 'TEAM'])
      .exactOptional()
      .openapi({
        description: 'CustomerType indicates verification type needed for using services.',
      }),
    eduData: GoogleCloudChannelV1EduDataSchema.exactOptional().openapi({
      description: 'Edu information about the customer.',
    }),
    isDomainVerified: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Output only. Whether the domain is verified. This field is not returned for a Customer's cloud_identity_info resource. Partners can use the domains.get() method of the Workspace SDK's Directory API, or listen to the PRIMARY_DOMAIN_VERIFIED Pub/Sub event in to track domain verification of their resolve Workspace customers.",
        readOnly: true,
      }),
    languageCode: z.string().exactOptional().openapi({ description: 'Language code.' }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Phone number associated with the Cloud Identity.' }),
    primaryDomain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The primary domain name.', readOnly: true }),
  })
  .openapi({
    description: 'Cloud Identity information for the Cloud Channel Customer.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1CloudIdentityInfo')

const GoogleCloudChannelV1ChannelPartnerLinkSchema = z
  .object({
    channelPartnerCloudIdentityInfo:
      GoogleCloudChannelV1CloudIdentityInfoSchema.exactOptional().openapi({
        description: 'Output only. Cloud Identity info of the channel partner (IR).',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp of when the channel partner link is created.',
        readOnly: true,
      }),
    inviteLinkUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. URI of the web page where partner accepts the link invitation.',
        readOnly: true,
      }),
    linkState: z
      .enum(['CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED', 'INVITED', 'ACTIVE', 'REVOKED', 'SUSPENDED'])
      .exactOptional()
      .openapi({ description: 'Required. State of the channel partner link.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name for the channel partner link, in the format accounts/{account_id}/channelPartnerLinks/{id}.',
        readOnly: true,
      }),
    publicId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Public identifier that a customer must use to generate a transfer token to move to this distributor-reseller combination.',
        readOnly: true,
      }),
    resellerCloudIdentityId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Cloud Identity ID of the linked reseller.' }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Timestamp of when the channel partner link is updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Entity representing a link between distributors and their indirect resellers in an n-tier resale channel.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ChannelPartnerLink')

const GoogleTypeDecimalSchema = z
  .object({
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The decimal value, as a string. The string representation consists of an optional sign, `+` (`U+002B`) or `-` (`U+002D`), followed by a sequence of zero or more decimal digits (\"the integer\"), optionally followed by a fraction, optionally followed by an exponent. An empty string **should** be interpreted as `0`. The fraction consists of a decimal point followed by zero or more decimal digits. The string must contain at least one digit in either the integer or the fraction. The number formed by the sign, the integer and the fraction is referred to as the significand. The exponent consists of the character `e` (`U+0065`) or `E` (`U+0045`) followed by one or more decimal digits. Services **should** normalize decimal values before storing them by: - Removing an explicitly-provided `+` sign (`+2.5` -> `2.5`). - Replacing a zero-length integer value with `0` (`.5` -> `0.5`). - Coercing the exponent character to upper-case, with explicit sign (`2.5e8` -> `2.5E+8`). - Removing an explicitly-provided zero exponent (`2.5E0` -> `2.5`). Services **may** perform additional normalization based on its own needs and the internal decimal implementation selected, such as shifting the decimal point and exponent value together (example: `2.5E-1` <-> `0.25`). Additionally, services **may** preserve trailing zeroes in the fraction to indicate increased precision, but are not required to do so. Note that only the `.` character is supported to divide the integer and the fraction; `,` **should not** be supported regardless of locale. Additionally, thousand separators **should not** be supported. If a service does support them, values **must** be normalized. The ENBF grammar is: DecimalString = '' | [Sign] Significand [Exponent]; Sign = '+' | '-'; Significand = Digits '.' | [Digits] '.' Digits; Exponent = ('e' | 'E') [Sign] Digits; Digits = { '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' }; Services **should** clearly document the range of supported values, the maximum supported precision (total number of digits), and, if applicable, the scale (number of digits after the decimal point), as well as how it behaves when receiving out-of-bounds values. Services **may** choose to accept values passed as input even when the value has a higher precision or scale than the service supports, and **should** round the value to fit the supported scale. Alternatively, the service **may** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if precision would be lost. Services **should** error with `400 Bad Request` (`INVALID_ARGUMENT` in gRPC) if the service receives a value outside of the supported range.",
      }),
  })
  .openapi({
    description:
      "A representation of a decimal value, such as 2.5. Clients may convert values into language-native decimal formats, such as Java's BigDecimal or Python's decimal.Decimal. [BigDecimal]: https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/math/BigDecimal.html [decimal.Decimal]: https://docs.python.org/3/library/decimal.html",
    required: [],
  })
  .openapi('GoogleTypeDecimal')

const GoogleCloudChannelV1PercentageAdjustmentSchema = z
  .object({
    percentage: GoogleTypeDecimalSchema.exactOptional().openapi({
      description:
        'The percentage of the bill to adjust. For example: Mark down by 1% => "-1.00" Mark up by 1% => "1.00" Pass-Through => "0.00"',
    }),
  })
  .openapi({
    description: 'An adjustment that applies a flat markup or markdown to an entire bill.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1PercentageAdjustment')

const GoogleCloudChannelV1RepricingAdjustmentSchema = z
  .object({
    percentageAdjustment: GoogleCloudChannelV1PercentageAdjustmentSchema.exactOptional().openapi({
      description: 'Flat markup or markdown on an entire bill.',
    }),
  })
  .openapi({
    description: 'A type that represents the various adjustments you can apply to a bill.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1RepricingAdjustment')

const GoogleCloudChannelV1RepricingConfigChannelPartnerGranularitySchema = z
  .object({})
  .openapi({
    description:
      'Applies the repricing configuration at the channel partner level. The channel partner value is derived from the resource name. Takes an empty json object.',
  })
  .openapi('GoogleCloudChannelV1RepricingConfigChannelPartnerGranularity')

const GoogleCloudChannelV1SkuGroupConditionSchema = z
  .object({
    skuGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies a SKU group (https://cloud.google.com/skus/sku-groups). Resource name of SKU group. Format: accounts/{account}/skuGroups/{sku_group}. Example: "accounts/C01234/skuGroups/3d50fd57-3157-4577-a5a9-a219b8490041".',
      }),
  })
  .openapi({
    description:
      'A condition that applies the override if a line item SKU is found in the SKU group.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1SkuGroupCondition')

const GoogleCloudChannelV1RepricingConditionSchema = z
  .object({
    skuGroupCondition: GoogleCloudChannelV1SkuGroupConditionSchema.exactOptional().openapi({
      description: 'SKU Group condition for override.',
    }),
  })
  .openapi({
    description:
      'Represents the various repricing conditions you can use for a conditional override.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1RepricingCondition')

const GoogleCloudChannelV1ConditionalOverrideSchema = z
  .object({
    adjustment: GoogleCloudChannelV1RepricingAdjustmentSchema.exactOptional().openapi({
      description: "Required. Information about the applied override's adjustment.",
    }),
    rebillingBasis: z
      .enum(['REBILLING_BASIS_UNSPECIFIED', 'COST_AT_LIST', 'DIRECT_CUSTOMER_COST'])
      .exactOptional()
      .openapi({
        description:
          'Required. The RebillingBasis to use for the applied override. Shows the relative cost based on your repricing costs.',
      }),
    repricingCondition: GoogleCloudChannelV1RepricingConditionSchema.exactOptional().openapi({
      description: 'Required. Specifies the condition which, if met, will apply the override.',
    }),
  })
  .openapi({ description: 'Specifies the override to conditionally apply.', required: [] })
  .openapi('GoogleCloudChannelV1ConditionalOverride')

const GoogleTypeDateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('GoogleTypeDate')

const GoogleCloudChannelV1RepricingConfigEntitlementGranularitySchema = z
  .object({
    entitlement: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the entitlement. Format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}',
      }),
  })
  .openapi({
    description: 'Applies the repricing configuration at the entitlement level.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1RepricingConfigEntitlementGranularity')

const GoogleCloudChannelV1RepricingConfigSchema = z
  .object({
    adjustment: GoogleCloudChannelV1RepricingAdjustmentSchema.exactOptional().openapi({
      description: 'Required. Information about the adjustment.',
    }),
    channelPartnerGranularity:
      GoogleCloudChannelV1RepricingConfigChannelPartnerGranularitySchema.exactOptional().openapi({
        description:
          'Applies the repricing configuration at the channel partner level. This is the only supported value for ChannelPartnerRepricingConfig.',
      }),
    conditionalOverrides: z
      .array(GoogleCloudChannelV1ConditionalOverrideSchema)
      .exactOptional()
      .openapi({
        description:
          "The conditional overrides to apply for this configuration. If you list multiple overrides, only the first valid override is used. If you don't list any overrides, the API uses the normal adjustment and rebilling basis.",
      }),
    effectiveInvoiceMonth: GoogleTypeDateSchema.exactOptional().openapi({
      description:
        'Required. The YearMonth when these adjustments activate. The Day field needs to be "0" since we only accept YearMonth repricing boundaries.',
    }),
    entitlementGranularity:
      GoogleCloudChannelV1RepricingConfigEntitlementGranularitySchema.exactOptional().openapi({
        description:
          'Applies the repricing configuration at the entitlement level. This is the only supported value for CustomerRepricingConfig.',
      }),
    rebillingBasis: z
      .enum(['REBILLING_BASIS_UNSPECIFIED', 'COST_AT_LIST', 'DIRECT_CUSTOMER_COST'])
      .exactOptional()
      .openapi({
        description:
          'Required. The RebillingBasis to use for this bill. Specifies the relative cost based on repricing costs you will apply.',
      }),
  })
  .openapi({
    description: 'Configuration for repricing a Google bill over a period of time.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1RepricingConfig')

const GoogleCloudChannelV1ChannelPartnerRepricingConfigSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of the ChannelPartnerRepricingConfig. Format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id}/channelPartnerRepricingConfigs/{id}.',
        readOnly: true,
      }),
    repricingConfig: GoogleCloudChannelV1RepricingConfigSchema.exactOptional().openapi({
      description:
        'Required. The configuration for bill modifications made by a reseller before sending it to ChannelPartner.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Timestamp of an update to the repricing rule. If `update_time` is after RepricingConfig.effective_invoice_month then it indicates this was set mid-month.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller).',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ChannelPartnerRepricingConfig')

const GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequestSchema = z
  .object({
    domain: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Domain to fetch for Cloud Identity account customer.' }),
  })
  .openapi({
    description: 'Request message for CloudChannelService.CheckCloudIdentityAccountsExist.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest')

const GoogleCloudChannelV1CloudIdentityCustomerAccountSchema = z
  .object({
    customerCloudIdentityId: z
      .string()
      .exactOptional()
      .openapi({ description: 'If existing = true, the Cloud Identity ID of the customer.' }),
    customerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If owned = true, the name of the customer that owns the Cloud Identity account. Customer_name uses the format: accounts/{account_id}/customers/{customer_id}',
      }),
    existing: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Returns true if a Cloud Identity account exists for a specific domain.',
      }),
    owned: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Returns true if the Cloud Identity account is associated with a customer of the Channel Services partner.',
      }),
  })
  .openapi({
    description:
      'Entity representing a Cloud Identity account that may be associated with a Channel Services API partner.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1CloudIdentityCustomerAccount')

const GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponseSchema = z
  .object({
    cloudIdentityAccounts: z
      .array(GoogleCloudChannelV1CloudIdentityCustomerAccountSchema)
      .exactOptional()
      .openapi({ description: 'The Cloud Identity accounts associated with the domain.' }),
  })
  .openapi({
    description: 'Response message for CloudChannelService.CheckCloudIdentityAccountsExist.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse')

const GoogleCloudChannelV1ColumnSchema = z
  .object({
    columnId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique name of the column (for example, customer_domain, channel_partner, customer_cost). You can use column IDs in RunReportJobRequest.filter. To see all reports and their columns, call CloudChannelReportsService.ListReports.',
      }),
    dataType: z
      .enum(['DATA_TYPE_UNSPECIFIED', 'STRING', 'INT', 'DECIMAL', 'MONEY', 'DATE', 'DATE_TIME'])
      .exactOptional()
      .openapi({ description: 'The type of the values for this column.' }),
    displayName: z.string().exactOptional().openapi({ description: "The column's display name." }),
  })
  .openapi({
    description:
      'The definition of a report column. Specifies the data properties in the corresponding position of the report rows.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1Column')

const GoogleCloudChannelV1CommitmentSettingsSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Commitment end timestamp.', readOnly: true }),
    renewalSettings: GoogleCloudChannelV1RenewalSettingsSchema.exactOptional().openapi({
      description: 'Optional. Renewal settings applicable for a commitment-based Offer.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Commitment start timestamp.', readOnly: true }),
  })
  .openapi({ description: 'Commitment settings for commitment-based offers.', required: [] })
  .openapi('GoogleCloudChannelV1CommitmentSettings')

const GoogleCloudChannelV1CustomerConstraintsSchema = z
  .object({
    allowedCustomerTypes: z
      .array(z.enum(['CUSTOMER_TYPE_UNSPECIFIED', 'DOMAIN', 'TEAM']))
      .exactOptional()
      .openapi({ description: 'Allowed Customer Type.' }),
    allowedRegions: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Allowed geographical regions of the customer.' }),
    promotionalOrderTypes: z
      .array(
        z.enum(['PROMOTIONAL_TYPE_UNSPECIFIED', 'NEW_UPGRADE', 'TRANSFER', 'PROMOTION_SWITCH']),
      )
      .exactOptional()
      .openapi({ description: 'Allowed Promotional Order Type. Present for Promotional offers.' }),
  })
  .openapi({
    description: 'Represents constraints required to purchase the Offer for a customer.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1CustomerConstraints')

const GoogleCloudChannelV1ConstraintsSchema = z
  .object({
    customerConstraints: GoogleCloudChannelV1CustomerConstraintsSchema.exactOptional().openapi({
      description: 'Represents constraints required to purchase the Offer for a customer.',
    }),
  })
  .openapi({ description: 'Represents the constraints for buying the Offer.', required: [] })
  .openapi('GoogleCloudChannelV1Constraints')

const GoogleCloudChannelV1ContactInfoSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The customer account contact's display name, formatted as a combination of the customer's first and last name.",
        readOnly: true,
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The customer account's contact email. Required for entitlements that create admin.google.com accounts, and serves as the customer's username for those accounts. Use this email to invite Team customers.",
      }),
    firstName: z
      .string()
      .exactOptional()
      .openapi({
        description: "The customer account contact's first name. Optional for Team customers.",
      }),
    lastName: z
      .string()
      .exactOptional()
      .openapi({
        description: "The customer account contact's last name. Optional for Team customers.",
      }),
    phone: z
      .string()
      .exactOptional()
      .openapi({ description: "The customer account's contact phone number." }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: "Optional. The customer account contact's job title." }),
  })
  .openapi({ description: 'Contact information for a customer account.', required: [] })
  .openapi('GoogleCloudChannelV1ContactInfo')

const GoogleCloudChannelV1ProvisionedServiceSchema = z
  .object({
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The product pertaining to the provisioning resource as specified in the Offer.',
        readOnly: true,
      }),
    provisioningId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Provisioning ID of the entitlement. For Google Workspace, this is the underlying Subscription ID. For Google Cloud Platform, this is the Billing Account ID of the billing subaccount."',
        readOnly: true,
      }),
    skuId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The SKU pertaining to the provisioning resource as specified in the Offer.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Service provisioned for an entitlement.', required: [] })
  .openapi('GoogleCloudChannelV1ProvisionedService')

const GoogleCloudChannelV1TrialSettingsSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example [Epoch converter](https://www.epochconverter.com).',
      }),
    trial: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines if the entitlement is in a trial or not: * `true` - The entitlement is in trial. * `false` - The entitlement is not in trial.',
      }),
  })
  .openapi({ description: 'Settings for trial offers.', required: [] })
  .openapi('GoogleCloudChannelV1TrialSettings')

const GoogleCloudChannelV1EntitlementSchema = z
  .object({
    associationInfo: GoogleCloudChannelV1AssociationInfoSchema.exactOptional().openapi({
      description: 'Association information to other entitlements.',
    }),
    commitmentSettings: GoogleCloudChannelV1CommitmentSettingsSchema.exactOptional().openapi({
      description:
        'Commitment settings for a commitment-based Offer. Required for commitment based offers.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which the entitlement is created.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of an entitlement in the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}.',
        readOnly: true,
      }),
    offer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The offer resource name for which the entitlement is to be created. Takes the form: accounts/{account_id}/offers/{offer_id}.',
      }),
    parameters: z
      .array(GoogleCloudChannelV1ParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'Extended entitlement parameters. When creating an entitlement, valid parameter names and values are defined in the Offer.parameter_definitions. For Google Workspace, the following Parameters may be accepted as input: - max_units: The maximum assignable units for a flexible offer OR - num_units: The total commitment for commitment-based offers The response may additionally include the following output-only Parameters: - assigned_units: The number of licenses assigned to users. For GCP billing subaccounts, the following Parameter may be accepted as input: - display_name: The display name of the billing subaccount.',
      }),
    provisionedService: GoogleCloudChannelV1ProvisionedServiceSchema.exactOptional().openapi({
      description: 'Output only. Service provisioning details for the entitlement.',
      readOnly: true,
    }),
    provisioningState: z
      .enum(['PROVISIONING_STATE_UNSPECIFIED', 'ACTIVE', 'SUSPENDED'])
      .exactOptional()
      .openapi({
        description: 'Output only. Current provisioning state of the entitlement.',
        readOnly: true,
      }),
    purchaseOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given, it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. This is only supported for Google Workspace entitlements.',
      }),
    suspensionReasons: z
      .array(
        z.enum([
          'SUSPENSION_REASON_UNSPECIFIED',
          'RESELLER_INITIATED',
          'TRIAL_ENDED',
          'RENEWAL_WITH_TYPE_CANCEL',
          'PENDING_TOS_ACCEPTANCE',
          'OTHER',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Output only. Enumerable of all current suspension reasons for an entitlement.',
        readOnly: true,
      }),
    trialSettings: GoogleCloudChannelV1TrialSettingsSchema.exactOptional().openapi({
      description: 'Output only. Settings for trial offers.',
      readOnly: true,
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which the entitlement is updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description: "An entitlement is a representation of a customer's ability to use a service.",
    required: [],
  })
  .openapi('GoogleCloudChannelV1Entitlement')

const GoogleCloudChannelV1CreateEntitlementRequestSchema = z
  .object({
    entitlement: GoogleCloudChannelV1EntitlementSchema.exactOptional().openapi({
      description: 'Required. The entitlement to create.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).",
      }),
  })
  .openapi({
    description: 'Request message for CloudChannelService.CreateEntitlement',
    required: [],
  })
  .openapi('GoogleCloudChannelV1CreateEntitlementRequest')

const GoogleTypePostalAddressSchema = z
  .object({
    addressLines: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).',
      }),
    administrativeArea: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don\'t use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address\' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".',
      }),
    locality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.',
      }),
    organization: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The name of the organization at the address.' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).',
      }),
    recipients: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.',
      }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.',
      }),
    revision: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.',
      }),
    sortingCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d\'Ivoire).',
      }),
    sublocality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.',
      }),
  })
  .openapi({
    description:
      'Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478',
    required: [],
  })
  .openapi('GoogleTypePostalAddress')

const GoogleCloudChannelV1CustomerSchema = z
  .object({
    alternateEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Secondary contact email. You need to provide an alternate email to create different domains if a primary contact email already exists. Users will receive a notification with credentials when you create an admin.google.com account. Secondary emails are also recovery email addresses. Alternate emails are optional when you create Team customers.',
      }),
    channelPartnerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Cloud Identity ID of the customer's channel partner. Populated only if a channel partner exists for this customer.",
      }),
    cloudIdentityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The customer's Cloud Identity ID if the customer has a Cloud Identity resource.",
        readOnly: true,
      }),
    cloudIdentityInfo: GoogleCloudChannelV1CloudIdentityInfoSchema.exactOptional().openapi({
      description:
        'Output only. Cloud Identity information for the customer. Populated only if a Cloud Identity account exists for this customer.',
      readOnly: true,
    }),
    correlationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. External CRM ID for the customer. Populated only if a CRM ID exists for this customer.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time when the customer was created.', readOnly: true }),
    domain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The customer's primary domain. Must match the primary contact email's domain.",
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id}',
        readOnly: true,
      }),
    orgDisplayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Name of the organization that the customer entity represents.',
      }),
    orgPostalAddress: GoogleTypePostalAddressSchema.exactOptional().openapi({
      description:
        "Required. The organization address for the customer. To enforce US laws and embargoes, we require a region and zip code. You must provide valid addresses for every customer. To set the customer's language, use the Customer-level language code.",
    }),
    primaryContactInfo: GoogleCloudChannelV1ContactInfoSchema.exactOptional().openapi({
      description: 'Primary contact info.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Time when the customer was updated.', readOnly: true }),
  })
  .openapi({
    description: 'Entity representing a customer of a reseller or distributor.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1Customer')

const GoogleCloudChannelV1CustomerEventSchema = z
  .object({
    customer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id}',
      }),
    eventType: z
      .enum(['TYPE_UNSPECIFIED', 'PRIMARY_DOMAIN_CHANGED', 'PRIMARY_DOMAIN_VERIFIED'])
      .exactOptional()
      .openapi({ description: 'Type of event which happened on the customer.' }),
  })
  .openapi({
    description: 'Represents Pub/Sub message content describing customer update.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1CustomerEvent')

const GoogleCloudChannelV1CustomerRepricingConfigSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of the CustomerRepricingConfig. Format: accounts/{account_id}/customers/{customer_id}/customerRepricingConfigs/{id}.',
        readOnly: true,
      }),
    repricingConfig: GoogleCloudChannelV1RepricingConfigSchema.exactOptional().openapi({
      description:
        'Required. The configuration for bill modifications made by a reseller before sending it to customers.',
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Timestamp of an update to the repricing rule. If `update_time` is after RepricingConfig.effective_invoice_month then it indicates this was set mid-month.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Configuration for how a reseller will reprice a Customer.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1CustomerRepricingConfig')

const GoogleTypeTimeZoneSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'IANA Time Zone Database time zone, e.g. "America/New_York".' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. IANA Time Zone Database version number, e.g. "2019a".' }),
  })
  .openapi({
    description:
      'Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).',
    required: [],
  })
  .openapi('GoogleTypeTimeZone')

const GoogleTypeDateTimeSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.',
      }),
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.',
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.',
      }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.',
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.',
      }),
    timeZone: GoogleTypeTimeZoneSchema.exactOptional().openapi({ description: 'Time zone.' }),
    utcOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.',
      }),
  })
  .openapi({
    description:
      "Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.",
    required: [],
  })
  .openapi('GoogleTypeDateTime')

const GoogleCloudChannelV1DateRangeSchema = z
  .object({
    invoiceEndDate: GoogleTypeDateSchema.exactOptional().openapi({
      description:
        'The latest invoice date (exclusive). If your product uses monthly invoices, and this value is not the beginning of a month, this will adjust the date to the first day of the following month.',
    }),
    invoiceStartDate: GoogleTypeDateSchema.exactOptional().openapi({
      description:
        'The earliest invoice date (inclusive). If your product uses monthly invoices, and this value is not the beginning of a month, this will adjust the date to the first day of the given month.',
    }),
    usageEndDateTime: GoogleTypeDateTimeSchema.exactOptional().openapi({
      description:
        'The latest usage date time (exclusive). If you use time groupings (daily, weekly, etc), each group uses midnight to midnight (Pacific time). The usage end date is rounded down to include all usage from the specified date. We recommend that clients pass `usage_start_date_time` in Pacific time.',
    }),
    usageStartDateTime: GoogleTypeDateTimeSchema.exactOptional().openapi({
      description:
        'The earliest usage date time (inclusive). If you use time groupings (daily, weekly, etc), each group uses midnight to midnight (Pacific time). The usage start date is rounded down to include all usage from the specified date. We recommend that clients pass `usage_start_date_time` in Pacific time.',
    }),
  })
  .openapi({ description: 'A representation of usage or invoice date ranges.', required: [] })
  .openapi('GoogleCloudChannelV1DateRange')

const GoogleCloudChannelV1EntitlementChangeSchema = z
  .object({
    activationReason: z
      .enum([
        'ACTIVATION_REASON_UNSPECIFIED',
        'RESELLER_REVOKED_SUSPENSION',
        'CUSTOMER_ACCEPTED_PENDING_TOS',
        'RENEWAL_SETTINGS_CHANGED',
        'OTHER_ACTIVATION_REASON',
      ])
      .exactOptional()
      .openapi({ description: "The Entitlement's activation reason" }),
    cancellationReason: z
      .enum([
        'CANCELLATION_REASON_UNSPECIFIED',
        'SERVICE_TERMINATED',
        'RELATIONSHIP_ENDED',
        'PARTIAL_TRANSFER',
      ])
      .exactOptional()
      .openapi({ description: 'Cancellation reason for the Entitlement.' }),
    changeType: z
      .enum([
        'CHANGE_TYPE_UNSPECIFIED',
        'CREATED',
        'PRICE_PLAN_SWITCHED',
        'COMMITMENT_CHANGED',
        'RENEWED',
        'SUSPENDED',
        'ACTIVATED',
        'CANCELLED',
        'SKU_CHANGED',
        'RENEWAL_SETTING_CHANGED',
        'PAID_SUBSCRIPTION_STARTED',
        'LICENSE_CAP_CHANGED',
        'SUSPENSION_DETAILS_CHANGED',
        'TRIAL_END_DATE_EXTENDED',
        'TRIAL_STARTED',
      ])
      .exactOptional()
      .openapi({ description: 'The change action type.' }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The submitted time of the change.' }),
    entitlement: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Resource name of an entitlement in the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}',
      }),
    offer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Resource name of the Offer at the time of change. Takes the form: accounts/{account_id}/offers/{offer_id}.',
      }),
    operator: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Human-readable identifier that shows what operator made a change. When the operator_type is RESELLER, this is the user's email address. For all other operator types, this is empty.",
      }),
    operatorType: z
      .enum([
        'OPERATOR_TYPE_UNSPECIFIED',
        'CUSTOMER_SERVICE_REPRESENTATIVE',
        'SYSTEM',
        'CUSTOMER',
        'RESELLER',
      ])
      .exactOptional()
      .openapi({ description: 'Operator type responsible for the change.' }),
    otherChangeReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'e.g. purchase_number change reason, entered by CRS.' }),
    parameters: z
      .array(GoogleCloudChannelV1ParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'Extended parameters, such as: purchase_order_number, gcp_details; internal_correlation_id, long_running_operation_id, order_id; etc.',
      }),
    provisionedService: GoogleCloudChannelV1ProvisionedServiceSchema.exactOptional().openapi({
      description: 'Service provisioned for an Entitlement.',
    }),
    suspensionReason: z
      .enum([
        'SUSPENSION_REASON_UNSPECIFIED',
        'RESELLER_INITIATED',
        'TRIAL_ENDED',
        'RENEWAL_WITH_TYPE_CANCEL',
        'PENDING_TOS_ACCEPTANCE',
        'OTHER',
      ])
      .exactOptional()
      .openapi({ description: 'Suspension reason for the Entitlement.' }),
  })
  .openapi({ description: 'Change event entry for Entitlement order history', required: [] })
  .openapi('GoogleCloudChannelV1EntitlementChange')

const GoogleCloudChannelV1EntitlementEventSchema = z
  .object({
    entitlement: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of an entitlement of the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}',
      }),
    eventType: z
      .enum([
        'TYPE_UNSPECIFIED',
        'CREATED',
        'PRICE_PLAN_SWITCHED',
        'COMMITMENT_CHANGED',
        'RENEWED',
        'SUSPENDED',
        'ACTIVATED',
        'CANCELLED',
        'SKU_CHANGED',
        'RENEWAL_SETTING_CHANGED',
        'PAID_SERVICE_STARTED',
        'LICENSE_ASSIGNMENT_CHANGED',
        'LICENSE_CAP_CHANGED',
      ])
      .exactOptional()
      .openapi({ description: 'Type of event which happened on the entitlement.' }),
  })
  .openapi({
    description: 'Represents Pub/Sub message content describing entitlement update.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1EntitlementEvent')

const GoogleCloudChannelV1FetchReportResultsRequestSchema = z
  .object({
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Optional. Requested page size of the report. The server may return fewer results than requested. If you don't specify a page size, the server uses a sensible default (may change over time). The maximum value is 30,000; the server will change larger values to 30,000.",
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A token that specifies a page of results beyond the first page. Obtained through FetchReportResultsResponse.next_page_token of the previous CloudChannelReportsService.FetchReportResults call.',
      }),
  })
  .openapi({
    description: 'Request message for CloudChannelReportsService.FetchReportResults.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1FetchReportResultsRequest')

const GoogleCloudChannelV1ReportSchema = z
  .object({
    columns: z
      .array(GoogleCloudChannelV1ColumnSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of columns included in the report. This defines the schema of the report results.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A description of other aspects of the report, such as the products it supports.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human-readable name for this report.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The report's resource name. Specifies the account and report used to generate report data. The report_id identifier is a UID (for example, `613bf59q`). Name uses the format: accounts/{account_id}/reports/{report_id}",
      }),
  })
  .openapi({
    description:
      'The ID and description of a report that was used to generate report data. For example, "GCP Daily Spend", "Google Workspace License Activity", etc.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1Report')

const GoogleCloudChannelV1ReportResultsMetadataSchema = z
  .object({
    dateRange: GoogleCloudChannelV1DateRangeSchema.exactOptional().openapi({
      description: 'The date range of reported usage.',
    }),
    precedingDateRange: GoogleCloudChannelV1DateRangeSchema.exactOptional().openapi({
      description:
        'The usage dates immediately preceding `date_range` with the same duration. Use this to calculate trending usage and costs. This is only populated if you request trending data. For example, if `date_range` is July 1-15, `preceding_date_range` will be June 16-30.',
    }),
    report: GoogleCloudChannelV1ReportSchema.exactOptional().openapi({
      description: 'Details of the completed report.',
    }),
    rowCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total number of rows of data in the final report.' }),
  })
  .openapi({
    description:
      'The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ReportResultsMetadata')

const GoogleTypeMoneySchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The three-letter currency code defined in ISO 4217.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.',
      }),
    units: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.',
      }),
  })
  .openapi({ description: 'Represents an amount of money with its currency type.', required: [] })
  .openapi('GoogleTypeMoney')

const GoogleCloudChannelV1ReportValueSchema = z
  .object({
    dateTimeValue: GoogleTypeDateTimeSchema.exactOptional().openapi({
      description:
        'A value of type `google.type.DateTime` (year, month, day, hour, minute, second, and UTC offset or timezone.)',
    }),
    dateValue: GoogleTypeDateSchema.exactOptional().openapi({
      description: 'A value of type `google.type.Date` (year, month, day).',
    }),
    decimalValue: GoogleTypeDecimalSchema.exactOptional().openapi({
      description:
        'A value of type `google.type.Decimal`, representing non-integer numeric values.',
    }),
    intValue: z.string().exactOptional().openapi({ description: 'A value of type `int`.' }),
    moneyValue: GoogleTypeMoneySchema.exactOptional().openapi({
      description:
        'A value of type `google.type.Money` (currency code, whole units, decimal units).',
    }),
    stringValue: z.string().exactOptional().openapi({ description: 'A value of type `string`.' }),
  })
  .openapi({ description: 'A single report value.', required: [] })
  .openapi('GoogleCloudChannelV1ReportValue')

const GoogleCloudChannelV1RowSchema = z
  .object({
    values: z
      .array(GoogleCloudChannelV1ReportValueSchema)
      .exactOptional()
      .openapi({ description: 'The list of values in the row.' }),
  })
  .openapi({ description: 'A row of report values.', required: [] })
  .openapi('GoogleCloudChannelV1Row')

const GoogleCloudChannelV1FetchReportResultsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pass this token to FetchReportResultsRequest.page_token to retrieve the next page of results.',
      }),
    reportMetadata: GoogleCloudChannelV1ReportResultsMetadataSchema.exactOptional().openapi({
      description:
        'The metadata for the report results (display name, columns, row count, and date ranges).',
    }),
    rows: z
      .array(GoogleCloudChannelV1RowSchema)
      .exactOptional()
      .openapi({
        description:
          "The report's lists of values. Each row follows the settings and ordering of the columns from `report_metadata`.",
      }),
  })
  .openapi({
    description:
      'Response message for CloudChannelReportsService.FetchReportResults. Contains a tabular representation of the report results.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1FetchReportResultsResponse')

const GoogleCloudChannelV1ImportCustomerRequestSchema = z
  .object({
    authToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details.',
      }),
    channelPartnerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. Cloud Identity ID of a channel partner who will be the direct reseller for the customer's order. This field is required for 2-tier transfer scenarios and can be provided via the request Parent binding as well.",
      }),
    cloudIdentityId: z
      .string()
      .exactOptional()
      .openapi({ description: "Required. Customer's Cloud Identity ID" }),
    customer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies the customer that will receive imported Cloud Identity information. Format: accounts/{account_id}/customers/{customer_id}',
      }),
    domain: z.string().exactOptional().openapi({ description: 'Required. Customer domain.' }),
    overwriteIfExists: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Required. Choose to overwrite an existing customer if found. This must be set to true if there is an existing customer with a conflicting region code or domain.',
      }),
  })
  .openapi({ description: 'Request message for CloudChannelService.ImportCustomer', required: [] })
  .openapi('GoogleCloudChannelV1ImportCustomerRequest')

const GoogleCloudChannelV1ListChannelPartnerLinksResponseSchema = z
  .object({
    channelPartnerLinks: z
      .array(GoogleCloudChannelV1ChannelPartnerLinkSchema)
      .exactOptional()
      .openapi({ description: 'The Channel partner links for a reseller.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass to ListChannelPartnerLinksRequest.page_token to obtain that page.',
      }),
  })
  .openapi({
    description: 'Response message for CloudChannelService.ListChannelPartnerLinks.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ListChannelPartnerLinksResponse')

const GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponseSchema = z
  .object({
    channelPartnerRepricingConfigs: z
      .array(GoogleCloudChannelV1ChannelPartnerRepricingConfigSchema)
      .exactOptional()
      .openapi({ description: 'The repricing configs for this channel partner.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass to ListChannelPartnerRepricingConfigsRequest.page_token to obtain that page.',
      }),
  })
  .openapi({
    description: 'Response message for CloudChannelService.ListChannelPartnerRepricingConfigs.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse')

const GoogleCloudChannelV1ListCustomerRepricingConfigsResponseSchema = z
  .object({
    customerRepricingConfigs: z
      .array(GoogleCloudChannelV1CustomerRepricingConfigSchema)
      .exactOptional()
      .openapi({ description: 'The repricing configs for this channel partner.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass to ListCustomerRepricingConfigsRequest.page_token to obtain that page.',
      }),
  })
  .openapi({
    description: 'Response message for CloudChannelService.ListCustomerRepricingConfigs.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ListCustomerRepricingConfigsResponse')

const GoogleCloudChannelV1ListCustomersResponseSchema = z
  .object({
    customers: z
      .array(GoogleCloudChannelV1CustomerSchema)
      .exactOptional()
      .openapi({ description: 'The customers belonging to a reseller or distributor.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass to ListCustomersRequest.page_token to obtain that page.',
      }),
  })
  .openapi({ description: 'Response message for CloudChannelService.ListCustomers.', required: [] })
  .openapi('GoogleCloudChannelV1ListCustomersResponse')

const GoogleCloudChannelV1ListEntitlementChangesResponseSchema = z
  .object({
    entitlementChanges: z
      .array(GoogleCloudChannelV1EntitlementChangeSchema)
      .exactOptional()
      .openapi({ description: 'The list of entitlement changes.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to list the next page of results.' }),
  })
  .openapi({
    description: 'Response message for CloudChannelService.ListEntitlementChanges',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ListEntitlementChangesResponse')

const GoogleCloudChannelV1ListEntitlementsResponseSchema = z
  .object({
    entitlements: z
      .array(GoogleCloudChannelV1EntitlementSchema)
      .exactOptional()
      .openapi({ description: "The reseller customer's entitlements." }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to list the next page of results. Pass to ListEntitlementsRequest.page_token to obtain that page.',
      }),
  })
  .openapi({
    description: 'Response message for CloudChannelService.ListEntitlements.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ListEntitlementsResponse')

const GoogleCloudChannelV1MediaSchema = z
  .object({
    content: z.string().exactOptional().openapi({ description: 'URL of the media.' }),
    title: z.string().exactOptional().openapi({ description: 'Title of the media.' }),
    type: z
      .enum(['MEDIA_TYPE_UNSPECIFIED', 'MEDIA_TYPE_IMAGE'])
      .exactOptional()
      .openapi({ description: 'Type of the media.' }),
  })
  .openapi({ description: 'Represents media information.', required: [] })
  .openapi('GoogleCloudChannelV1Media')

const GoogleCloudChannelV1MarketingInfoSchema = z
  .object({
    defaultLogo: GoogleCloudChannelV1MediaSchema.exactOptional().openapi({
      description: 'Default logo.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Human readable description. Description can contain HTML.' }),
    displayName: z.string().exactOptional().openapi({ description: 'Human readable name.' }),
  })
  .openapi({
    description: 'Represents the marketing information for a Product, SKU or Offer.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1MarketingInfo')

const GoogleCloudChannelV1ParameterDefinitionSchema = z
  .object({
    allowedValues: z
      .array(GoogleCloudChannelV1ValueSchema)
      .exactOptional()
      .openapi({
        description:
          'If not empty, parameter values must be drawn from this list. For example, [us-west1, us-west2, ...] Applicable to STRING parameter type.',
      }),
    maxValue: GoogleCloudChannelV1ValueSchema.exactOptional().openapi({
      description:
        'Maximum value of the parameter, if applicable. Inclusive. For example, maximum seats when purchasing Google Workspace Business Standard. Applicable to INT64 and DOUBLE parameter types.',
    }),
    minValue: GoogleCloudChannelV1ValueSchema.exactOptional().openapi({
      description:
        'Minimal value of the parameter, if applicable. Inclusive. For example, minimal commitment when purchasing Anthos is 0.01. Applicable to INT64 and DOUBLE parameter types.',
    }),
    name: z.string().exactOptional().openapi({ description: 'Name of the parameter.' }),
    optional: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If set to true, parameter is optional to purchase this Offer.' }),
    parameterType: z
      .enum(['PARAMETER_TYPE_UNSPECIFIED', 'INT64', 'STRING', 'DOUBLE'])
      .exactOptional()
      .openapi({
        description:
          'Data type of the parameter. Minimal value, Maximum value and allowed values will use specified data type here.',
      }),
  })
  .openapi({
    description:
      "Parameter's definition. Specifies what parameter is required to use the current Offer to purchase.",
    required: [],
  })
  .openapi('GoogleCloudChannelV1ParameterDefinition')

const GoogleCloudChannelV1PlanSchema = z
  .object({
    billingAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reseller Billing account to charge after an offer transaction. Only present for Google Cloud Platform offers.',
      }),
    paymentCycle: GoogleCloudChannelV1PeriodSchema.exactOptional().openapi({
      description: 'Describes how frequently the reseller will be billed, such as once per month.',
    }),
    paymentPlan: z
      .enum(['PAYMENT_PLAN_UNSPECIFIED', 'COMMITMENT', 'FLEXIBLE', 'FREE', 'TRIAL', 'OFFLINE'])
      .exactOptional()
      .openapi({ description: 'Describes how a reseller will be billed.' }),
    paymentType: z
      .enum(['PAYMENT_TYPE_UNSPECIFIED', 'PREPAY', 'POSTPAY'])
      .exactOptional()
      .openapi({ description: 'Specifies when the payment needs to happen.' }),
    trialPeriod: GoogleCloudChannelV1PeriodSchema.exactOptional().openapi({
      description:
        'Present for Offers with a trial period. For trial-only Offers, a paid service needs to start before the trial period ends for continued service. For Regular Offers with a trial period, the regular pricing goes into effect when trial period ends, or if paid service is started before the end of the trial period.',
    }),
  })
  .openapi({
    description: 'The payment plan for the Offer. Describes how to make a payment.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1Plan')

const GoogleCloudChannelV1PriceSchema = z
  .object({
    basePrice: GoogleTypeMoneySchema.exactOptional().openapi({ description: 'Base price.' }),
    discount: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Discount percentage, represented as decimal. For example, a 20% discount will be represent as 0.2.',
      }),
    effectivePrice: GoogleTypeMoneySchema.exactOptional().openapi({
      description: 'Effective Price after applying the discounts.',
    }),
    externalPriceUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Link to external price list, such as link to Google Voice rate card.',
      }),
  })
  .openapi({ description: 'Represents the price of the Offer.', required: [] })
  .openapi('GoogleCloudChannelV1Price')

const GoogleCloudChannelV1PriceTierSchema = z
  .object({
    firstResource: z
      .int32()
      .exactOptional()
      .openapi({ description: 'First resource for which the tier price applies.' }),
    lastResource: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Last resource for which the tier price applies.' }),
    price: GoogleCloudChannelV1PriceSchema.exactOptional().openapi({
      description: 'Price of the tier.',
    }),
  })
  .openapi({
    description:
      'Defines price at resource tier level. For example, an offer with following definition : * Tier 1: Provide 25% discount for all seats between 1 and 25. * Tier 2: Provide 10% discount for all seats between 26 and 100. * Tier 3: Provide flat 15% discount for all seats above 100. Each of these tiers is represented as a PriceTier.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1PriceTier')

const GoogleCloudChannelV1PricePhaseSchema = z
  .object({
    firstPeriod: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Defines first period for the phase.' }),
    lastPeriod: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Defines first period for the phase.' }),
    periodType: z
      .enum(['PERIOD_TYPE_UNSPECIFIED', 'DAY', 'MONTH', 'YEAR'])
      .exactOptional()
      .openapi({ description: 'Defines the phase period type.' }),
    price: GoogleCloudChannelV1PriceSchema.exactOptional().openapi({
      description: 'Price of the phase. Present if there are no price tiers.',
    }),
    priceTiers: z
      .array(GoogleCloudChannelV1PriceTierSchema)
      .exactOptional()
      .openapi({ description: 'Price by the resource tiers.' }),
  })
  .openapi({
    description:
      'Specifies the price by the duration of months. For example, a 20% discount for the first six months, then a 10% discount starting on the seventh month.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1PricePhase')

const GoogleCloudChannelV1PriceByResourceSchema = z
  .object({
    price: GoogleCloudChannelV1PriceSchema.exactOptional().openapi({
      description: 'Price of the Offer. Present if there are no price phases.',
    }),
    pricePhases: z
      .array(GoogleCloudChannelV1PricePhaseSchema)
      .exactOptional()
      .openapi({ description: 'Specifies the price by time range.' }),
    resourceType: z
      .enum([
        'RESOURCE_TYPE_UNSPECIFIED',
        'SEAT',
        'MAU',
        'GB',
        'LICENSED_USER',
        'MINUTES',
        'IAAS_USAGE',
        'SUBSCRIPTION',
      ])
      .exactOptional()
      .openapi({ description: 'Resource Type. Example: SEAT' }),
  })
  .openapi({ description: 'Represents price by resource type.', required: [] })
  .openapi('GoogleCloudChannelV1PriceByResource')

const GoogleCloudChannelV1ProductSchema = z
  .object({
    marketingInfo: GoogleCloudChannelV1MarketingInfoSchema.exactOptional().openapi({
      description: 'Marketing information for the product.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Resource Name of the Product. Format: products/{product_id}' }),
  })
  .openapi({
    description:
      'A Product is the entity a customer uses when placing an order. For example, Google Workspace, Google Voice, etc.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1Product')

const GoogleCloudChannelV1SkuSchema = z
  .object({
    marketingInfo: GoogleCloudChannelV1MarketingInfoSchema.exactOptional().openapi({
      description: 'Marketing information for the SKU.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Resource Name of the SKU. Format: products/{product_id}/skus/{sku_id}',
      }),
    product: GoogleCloudChannelV1ProductSchema.exactOptional().openapi({
      description: 'Product the SKU is associated with.',
    }),
  })
  .openapi({
    description:
      "Represents a product's purchasable Stock Keeping Unit (SKU). SKUs represent the different variations of the product. For example, Google Workspace Business Standard and Google Workspace Business Plus are Google Workspace product SKUs.",
    required: [],
  })
  .openapi('GoogleCloudChannelV1Sku')

const GoogleCloudChannelV1OfferSchema = z
  .object({
    constraints: GoogleCloudChannelV1ConstraintsSchema.exactOptional().openapi({
      description: 'Constraints on transacting the Offer.',
    }),
    dealCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The deal code of the offer to get a special promotion or discount.',
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. End of the Offer validity time.', readOnly: true }),
    marketingInfo: GoogleCloudChannelV1MarketingInfoSchema.exactOptional().openapi({
      description: 'Marketing information for the Offer.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Resource Name of the Offer. Format: accounts/{account_id}/offers/{offer_id}',
      }),
    parameterDefinitions: z
      .array(GoogleCloudChannelV1ParameterDefinitionSchema)
      .exactOptional()
      .openapi({ description: 'Parameters required to use current Offer to purchase.' }),
    plan: GoogleCloudChannelV1PlanSchema.exactOptional().openapi({
      description: 'Describes the payment plan for the Offer.',
    }),
    priceByResources: z
      .array(GoogleCloudChannelV1PriceByResourceSchema)
      .exactOptional()
      .openapi({ description: 'Price for each monetizable resource type.' }),
    sku: GoogleCloudChannelV1SkuSchema.exactOptional().openapi({
      description: 'SKU the offer is associated with.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Start of the Offer validity time.' }),
  })
  .openapi({
    description:
      'Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1Offer')

const GoogleCloudChannelV1ListOffersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to retrieve the next page of results.' }),
    offers: z
      .array(GoogleCloudChannelV1OfferSchema)
      .exactOptional()
      .openapi({ description: 'The list of Offers requested.' }),
  })
  .openapi({ description: 'Response message for ListOffers.', required: [] })
  .openapi('GoogleCloudChannelV1ListOffersResponse')

const GoogleCloudChannelV1ListProductsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to retrieve the next page of results.' }),
    products: z
      .array(GoogleCloudChannelV1ProductSchema)
      .exactOptional()
      .openapi({ description: 'List of Products requested.' }),
  })
  .openapi({ description: 'Response message for ListProducts.', required: [] })
  .openapi('GoogleCloudChannelV1ListProductsResponse')

const GoogleCloudChannelV1PurchasableOfferSchema = z
  .object({
    offer: GoogleCloudChannelV1OfferSchema.exactOptional().openapi({ description: 'Offer.' }),
  })
  .openapi({
    description:
      'Offer that you can purchase for a customer. This is used in the ListPurchasableOffer API response.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1PurchasableOffer')

const GoogleCloudChannelV1ListPurchasableOffersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to retrieve the next page of results.' }),
    purchasableOffers: z
      .array(GoogleCloudChannelV1PurchasableOfferSchema)
      .exactOptional()
      .openapi({ description: 'The list of Offers requested.' }),
  })
  .openapi({ description: 'Response message for ListPurchasableOffers.', required: [] })
  .openapi('GoogleCloudChannelV1ListPurchasableOffersResponse')

const GoogleCloudChannelV1PurchasableSkuSchema = z
  .object({ sku: GoogleCloudChannelV1SkuSchema.exactOptional().openapi({ description: 'SKU' }) })
  .openapi({
    description: 'SKU that you can purchase. This is used in ListPurchasableSku API response.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1PurchasableSku')

const GoogleCloudChannelV1ListPurchasableSkusResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to retrieve the next page of results.' }),
    purchasableSkus: z
      .array(GoogleCloudChannelV1PurchasableSkuSchema)
      .exactOptional()
      .openapi({ description: 'The list of SKUs requested.' }),
  })
  .openapi({ description: 'Response message for ListPurchasableSkus.', required: [] })
  .openapi('GoogleCloudChannelV1ListPurchasableSkusResponse')

const GoogleCloudChannelV1ListReportsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pass this token to FetchReportResultsRequest.page_token to retrieve the next page of results.',
      }),
    reports: z
      .array(GoogleCloudChannelV1ReportSchema)
      .exactOptional()
      .openapi({ description: 'The reports available to the partner.' }),
  })
  .openapi({
    description: 'Response message for CloudChannelReportsService.ListReports.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ListReportsResponse')

const GoogleCloudChannelV1ListSkusResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'A token to retrieve the next page of results.' }),
    skus: z
      .array(GoogleCloudChannelV1SkuSchema)
      .exactOptional()
      .openapi({ description: 'The list of SKUs requested.' }),
  })
  .openapi({ description: 'Response message for ListSkus.', required: [] })
  .openapi('GoogleCloudChannelV1ListSkusResponse')

const GoogleCloudChannelV1ListSubscribersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    serviceAccounts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of service accounts which have subscriber access to the topic.',
      }),
    topic: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the topic registered with the reseller.' }),
  })
  .openapi({ description: 'Response Message for ListSubscribers.', required: [] })
  .openapi('GoogleCloudChannelV1ListSubscribersResponse')

const GoogleCloudChannelV1ListTransferableOffersRequestSchema = z
  .object({
    cloudIdentityId: z
      .string()
      .exactOptional()
      .openapi({ description: "Customer's Cloud Identity ID" }),
    customerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A reseller should create a customer and use the resource name of that customer here.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".',
      }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 offers. The maximum value is 1000; the server will coerce values above 1000.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token for a page of results other than the first page. Obtained using ListTransferableOffersResponse.next_page_token of the previous CloudChannelService.ListTransferableOffers call.',
      }),
    sku: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The SKU to look up Offers for.' }),
  })
  .openapi({
    description: 'Request message for CloudChannelService.ListTransferableOffers',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ListTransferableOffersRequest')

const GoogleCloudChannelV1TransferableOfferSchema = z
  .object({
    offer: GoogleCloudChannelV1OfferSchema.exactOptional().openapi({
      description: 'Offer with parameter constraints updated to allow the Transfer.',
    }),
  })
  .openapi({
    description: 'TransferableOffer represents an Offer that can be used in Transfer. Read-only.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1TransferableOffer')

const GoogleCloudChannelV1ListTransferableOffersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass to ListTransferableOffersRequest.page_token to obtain that page.',
      }),
    transferableOffers: z
      .array(GoogleCloudChannelV1TransferableOfferSchema)
      .exactOptional()
      .openapi({
        description: 'Information about Offers for a customer that can be used for transfer.',
      }),
  })
  .openapi({
    description: 'Response message for CloudChannelService.ListTransferableOffers.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ListTransferableOffersResponse')

const GoogleCloudChannelV1ListTransferableSkusRequestSchema = z
  .object({
    authToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details.',
      }),
    cloudIdentityId: z
      .string()
      .exactOptional()
      .openapi({ description: "Customer's Cloud Identity ID" }),
    customerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A reseller is required to create a customer and use the resource name of the created customer here. Customer_name uses the format: accounts/{account_id}/customers/{customer_id}',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US". Optional.',
      }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000. Optional.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token for a page of results other than the first page. Obtained using ListTransferableSkusResponse.next_page_token of the previous CloudChannelService.ListTransferableSkus call. Optional.',
      }),
  })
  .openapi({
    description: 'Request message for CloudChannelService.ListTransferableSkus',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ListTransferableSkusRequest')

const GoogleCloudChannelV1TransferEligibilitySchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Localized description if reseller is not eligible to transfer the SKU.',
      }),
    ineligibilityReason: z
      .enum(['REASON_UNSPECIFIED', 'PENDING_TOS_ACCEPTANCE', 'SKU_NOT_ELIGIBLE', 'SKU_SUSPENDED'])
      .exactOptional()
      .openapi({ description: 'Specified the reason for ineligibility.' }),
    isEligible: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether reseller is eligible to transfer the SKU.' }),
  })
  .openapi({ description: 'Specifies transfer eligibility of a SKU.', required: [] })
  .openapi('GoogleCloudChannelV1TransferEligibility')

const GoogleCloudChannelV1TransferableSkuSchema = z
  .object({
    legacySku: GoogleCloudChannelV1SkuSchema.exactOptional().openapi({
      description:
        'Optional. The customer to transfer has an entitlement with the populated legacy SKU.',
    }),
    sku: GoogleCloudChannelV1SkuSchema.exactOptional().openapi({
      description: 'The SKU pertaining to the provisioning resource as specified in the Offer.',
    }),
    transferEligibility: GoogleCloudChannelV1TransferEligibilitySchema.exactOptional().openapi({
      description: 'Describes the transfer eligibility of a SKU.',
    }),
  })
  .openapi({
    description:
      'TransferableSku represents information a reseller needs to view existing provisioned services for a customer that they do not own. Read-only.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1TransferableSku')

const GoogleCloudChannelV1ListTransferableSkusResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token to retrieve the next page of results. Pass to ListTransferableSkusRequest.page_token to obtain that page.',
      }),
    transferableSkus: z
      .array(GoogleCloudChannelV1TransferableSkuSchema)
      .exactOptional()
      .openapi({
        description: 'Information about existing SKUs for a customer that needs a transfer.',
      }),
  })
  .openapi({
    description: 'Response message for CloudChannelService.ListTransferableSkus.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ListTransferableSkusResponse')

const GoogleCloudChannelV1OperationMetadataSchema = z
  .object({
    operationType: z
      .enum([
        'OPERATION_TYPE_UNSPECIFIED',
        'CREATE_ENTITLEMENT',
        'CHANGE_RENEWAL_SETTINGS',
        'START_PAID_SERVICE',
        'ACTIVATE_ENTITLEMENT',
        'SUSPEND_ENTITLEMENT',
        'CANCEL_ENTITLEMENT',
        'TRANSFER_ENTITLEMENTS',
        'TRANSFER_ENTITLEMENTS_TO_GOOGLE',
        'CHANGE_OFFER',
        'CHANGE_PARAMETERS',
        'PROVISION_CLOUD_IDENTITY',
      ])
      .exactOptional()
      .openapi({ description: 'The RPC that initiated this Long Running Operation.' }),
  })
  .openapi({
    description: 'Provides contextual information about a google.longrunning.Operation.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1OperationMetadata')

const GoogleCloudChannelV1ProvisionCloudIdentityRequestSchema = z
  .object({
    cloudIdentityInfo: GoogleCloudChannelV1CloudIdentityInfoSchema.exactOptional().openapi({
      description: 'CloudIdentity-specific customer information.',
    }),
    user: GoogleCloudChannelV1AdminUserSchema.exactOptional().openapi({
      description: 'Admin user information.',
    }),
    validateOnly: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Validate the request and preview the review, but do not post it.' }),
  })
  .openapi({
    description: 'Request message for CloudChannelService.ProvisionCloudIdentity',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ProvisionCloudIdentityRequest')

const GoogleCloudChannelV1RegisterSubscriberRequestSchema = z
  .object({
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Service account that provides subscriber access to the registered topic.',
      }),
  })
  .openapi({ description: 'Request Message for RegisterSubscriber.', required: [] })
  .openapi('GoogleCloudChannelV1RegisterSubscriberRequest')

const GoogleCloudChannelV1RegisterSubscriberResponseSchema = z
  .object({
    topic: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the topic the subscriber will listen to.' }),
  })
  .openapi({ description: 'Response Message for RegisterSubscriber.', required: [] })
  .openapi('GoogleCloudChannelV1RegisterSubscriberResponse')

const GoogleCloudChannelV1ReportStatusSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: "The report generation's completion time." }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: "The report generation's start time." }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'STARTED', 'WRITING', 'AVAILABLE', 'FAILED'])
      .exactOptional()
      .openapi({ description: 'The current state of the report generation process.' }),
  })
  .openapi({ description: 'Status of a report generation process.', required: [] })
  .openapi('GoogleCloudChannelV1ReportStatus')

const GoogleCloudChannelV1ReportJobSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of a report job. Name uses the format: `accounts/{account_id}/reportJobs/{report_job_id}`',
      }),
    reportStatus: GoogleCloudChannelV1ReportStatusSchema.exactOptional().openapi({
      description: 'The current status of report generation.',
    }),
  })
  .openapi({
    description:
      'The result of a RunReportJob operation. Contains the name to use in FetchReportResultsRequest.report_job and the status of the operation.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1ReportJob')

const GoogleCloudChannelV1RunReportJobRequestSchema = z
  .object({
    dateRange: GoogleCloudChannelV1DateRangeSchema.exactOptional().openapi({
      description: 'Optional. The range of usage or invoice dates to include in the result.',
    }),
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A structured string that defines conditions on dimension columns to restrict the report output. Filters support logical operators (AND, OR, NOT) and conditional operators (=, !=, <, >, <=, and >=) using `column_id` as keys. For example: `(customer:"accounts/C123abc/customers/S456def" OR customer:"accounts/C123abc/customers/S789ghi") AND invoice_start_date.year >= 2022`',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The BCP-47 language code, such as "en-US". If specified, the response is localized to the corresponding language code if the original data sources support it. Default is "en-US".',
      }),
  })
  .openapi({
    description: 'Request message for CloudChannelReportsService.RunReportJob.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1RunReportJobRequest')

const GoogleCloudChannelV1RunReportJobResponseSchema = z
  .object({
    reportJob: GoogleCloudChannelV1ReportJobSchema.exactOptional().openapi({
      description:
        "Pass `report_job.name` to FetchReportResultsRequest.report_job to retrieve the report's results.",
    }),
    reportMetadata: GoogleCloudChannelV1ReportResultsMetadataSchema.exactOptional().openapi({
      description:
        "The metadata for the report's results (display name, columns, row count, and date range). If you view this before the operation finishes, you may see incomplete data.",
    }),
  })
  .openapi({
    description: 'Response message for CloudChannelReportsService.RunReportJob.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1RunReportJobResponse')

const GoogleCloudChannelV1StartPaidServiceRequestSchema = z
  .object({
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).",
      }),
  })
  .openapi({
    description: 'Request message for CloudChannelService.StartPaidService.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1StartPaidServiceRequest')

const GoogleCloudChannelV1SubscriberEventSchema = z
  .object({
    customerEvent: GoogleCloudChannelV1CustomerEventSchema.exactOptional().openapi({
      description: 'Customer event sent as part of Pub/Sub event to partners.',
    }),
    entitlementEvent: GoogleCloudChannelV1EntitlementEventSchema.exactOptional().openapi({
      description: 'Entitlement event sent as part of Pub/Sub event to partners.',
    }),
  })
  .openapi({
    description:
      'Represents information which resellers will get as part of notification from Pub/Sub.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1SubscriberEvent')

const GoogleCloudChannelV1SuspendEntitlementRequestSchema = z
  .object({
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).",
      }),
  })
  .openapi({
    description: 'Request message for CloudChannelService.SuspendEntitlement.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1SuspendEntitlementRequest')

const GoogleCloudChannelV1TransferEntitlementsRequestSchema = z
  .object({
    authToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details.',
      }),
    entitlements: z
      .array(GoogleCloudChannelV1EntitlementSchema)
      .exactOptional()
      .openapi({ description: 'Required. The new entitlements to create or transfer.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).",
      }),
  })
  .openapi({
    description: 'Request message for CloudChannelService.TransferEntitlements.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1TransferEntitlementsRequest')

const GoogleCloudChannelV1TransferEntitlementsResponseSchema = z
  .object({
    entitlements: z
      .array(GoogleCloudChannelV1EntitlementSchema)
      .exactOptional()
      .openapi({ description: 'The transferred entitlements.' }),
  })
  .openapi({
    description:
      'Response message for CloudChannelService.TransferEntitlements. This is put in the response field of google.longrunning.Operation.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1TransferEntitlementsResponse')

const GoogleCloudChannelV1TransferEntitlementsToGoogleRequestSchema = z
  .object({
    entitlements: z
      .array(GoogleCloudChannelV1EntitlementSchema)
      .exactOptional()
      .openapi({ description: 'Required. The entitlements to transfer to Google.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. You can specify an optional unique request ID, and if you need to retry your request, the server will know to ignore the request if it's complete. For example, you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if it received the original operation with the same request ID. If it did, it will ignore the second request. The request ID must be a valid [UUID](https://tools.ietf.org/html/rfc4122) with the exception that zero UUID is not supported (`00000000-0000-0000-0000-000000000000`).",
      }),
  })
  .openapi({
    description: 'Request message for CloudChannelService.TransferEntitlementsToGoogle.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1TransferEntitlementsToGoogleRequest')

const GoogleCloudChannelV1UnregisterSubscriberRequestSchema = z
  .object({
    serviceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Service account to unregister from subscriber access to the topic.',
      }),
  })
  .openapi({ description: 'Request Message for UnregisterSubscriber.', required: [] })
  .openapi('GoogleCloudChannelV1UnregisterSubscriberRequest')

const GoogleCloudChannelV1UnregisterSubscriberResponseSchema = z
  .object({
    topic: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the topic the service account subscriber access was removed from.',
      }),
  })
  .openapi({ description: 'Response Message for UnregisterSubscriber.', required: [] })
  .openapi('GoogleCloudChannelV1UnregisterSubscriberResponse')

const GoogleCloudChannelV1UpdateChannelPartnerLinkRequestSchema = z
  .object({
    channelPartnerLink: GoogleCloudChannelV1ChannelPartnerLinkSchema.exactOptional().openapi({
      description:
        'Required. The channel partner link to update. Only channel_partner_link.link_state is allowed for updates.',
    }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The update mask that applies to the resource. The only allowable value for an update mask is channel_partner_link.link_state.',
      }),
  })
  .openapi({
    description: 'Request message for CloudChannelService.UpdateChannelPartnerLink',
    required: [],
  })
  .openapi('GoogleCloudChannelV1UpdateChannelPartnerLinkRequest')

const GoogleCloudChannelV1alpha1AssociationInfoSchema = z
  .object({
    baseEntitlement: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the base entitlement, for which this entitlement is an add-on.',
      }),
  })
  .openapi({
    description: 'Association links that an entitlement has to other entitlements.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1alpha1AssociationInfo')

const GoogleCloudChannelV1alpha1ChannelPartnerEventSchema = z
  .object({
    channelPartner: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name for the Channel Partner Link. Channel_partner uses the format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id}',
      }),
    eventType: z
      .enum(['TYPE_UNSPECIFIED', 'LINK_STATE_CHANGED', 'PARTNER_ADVANTAGE_INFO_CHANGED'])
      .exactOptional()
      .openapi({ description: 'Type of event performed on the Channel Partner.' }),
  })
  .openapi({
    description:
      'Represents Pub/Sub messages about updates to a Channel Partner. You can retrieve updated values through the ChannelPartnerLinks API.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1alpha1ChannelPartnerEvent')

const GoogleCloudChannelV1alpha1ColumnSchema = z
  .object({
    columnId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique name of the column (for example, customer_domain, channel_partner, customer_cost). You can use column IDs in RunReportJobRequest.filter. To see all reports and their columns, call CloudChannelReportsService.ListReports.',
      }),
    dataType: z
      .enum(['DATA_TYPE_UNSPECIFIED', 'STRING', 'INT', 'DECIMAL', 'MONEY', 'DATE', 'DATE_TIME'])
      .exactOptional()
      .openapi({ description: 'The type of the values for this column.' }),
    displayName: z.string().exactOptional().openapi({ description: "The column's display name." }),
  })
  .openapi({
    description:
      'The definition of a report column. Specifies the data properties in the corresponding position of the report rows.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1alpha1Column')

const GoogleCloudChannelV1alpha1PeriodSchema = z
  .object({
    duration: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total duration of Period Type defined.' }),
    periodType: z
      .enum(['PERIOD_TYPE_UNSPECIFIED', 'DAY', 'MONTH', 'YEAR'])
      .exactOptional()
      .openapi({ description: 'Period Type.' }),
  })
  .openapi({ description: 'Represents period in days/months/years.', required: [] })
  .openapi('GoogleCloudChannelV1alpha1Period')

const GoogleCloudChannelV1alpha1RenewalSettingsSchema = z
  .object({
    disableCommitment: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, disables commitment-based offer on renewal and switches to flexible or pay as you go. Deprecated: Use `payment_plan` instead.',
      }),
    enableRenewal: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If false, the plan will be completed at the end date.' }),
    paymentCycle: GoogleCloudChannelV1alpha1PeriodSchema.exactOptional().openapi({
      description: 'Describes how frequently the reseller will be billed, such as once per month.',
    }),
    paymentOption: z
      .enum(['PAYMENT_OPTION_UNSPECIFIED', 'ANNUAL', 'MONTHLY'])
      .exactOptional()
      .openapi({
        description: 'Set if enable_renewal=true. Deprecated: Use `payment_cycle` instead.',
      }),
    paymentPlan: z
      .enum(['PAYMENT_PLAN_UNSPECIFIED', 'COMMITMENT', 'FLEXIBLE', 'FREE', 'TRIAL', 'OFFLINE'])
      .exactOptional()
      .openapi({ description: 'Describes how a reseller will be billed.' }),
    resizeUnitCount: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true and enable_renewal = true, the unit (for example seats or licenses) will be set to the number of active units at renewal time.',
      }),
    scheduledRenewalOffer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The offer resource name that the entitlement will renew on at the end date. Takes the form: accounts/{account_id}/offers/{offer_id}.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Renewal settings for renewable Offers.', required: [] })
  .openapi('GoogleCloudChannelV1alpha1RenewalSettings')

const GoogleCloudChannelV1alpha1CommitmentSettingsSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Commitment end timestamp.', readOnly: true }),
    renewalSettings: GoogleCloudChannelV1alpha1RenewalSettingsSchema.exactOptional().openapi({
      description: 'Optional. Renewal settings applicable for a commitment-based Offer.',
    }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Commitment start timestamp.', readOnly: true }),
  })
  .openapi({ description: 'Commitment settings for commitment-based offers.', required: [] })
  .openapi('GoogleCloudChannelV1alpha1CommitmentSettings')

const GoogleCloudChannelV1alpha1CustomerEventSchema = z
  .object({
    customer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id}',
      }),
    eventType: z
      .enum(['TYPE_UNSPECIFIED', 'PRIMARY_DOMAIN_CHANGED', 'PRIMARY_DOMAIN_VERIFIED'])
      .exactOptional()
      .openapi({ description: 'Type of event which happened on the customer.' }),
  })
  .openapi({
    description: 'Represents Pub/Sub message content describing customer update.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1alpha1CustomerEvent')

const GoogleCloudChannelV1alpha1DateRangeSchema = z
  .object({
    invoiceEndDate: GoogleTypeDateSchema.exactOptional().openapi({
      description:
        'The latest invoice date (exclusive). If your product uses monthly invoices, and this value is not the beginning of a month, this will adjust the date to the first day of the following month.',
    }),
    invoiceStartDate: GoogleTypeDateSchema.exactOptional().openapi({
      description:
        'The earliest invoice date (inclusive). If your product uses monthly invoices, and this value is not the beginning of a month, this will adjust the date to the first day of the given month.',
    }),
    usageEndDateTime: GoogleTypeDateTimeSchema.exactOptional().openapi({
      description:
        'The latest usage date time (exclusive). If you use time groupings (daily, weekly, etc), each group uses midnight to midnight (Pacific time). The usage end date is rounded down to include all usage from the specified date. We recommend that clients pass `usage_start_date_time` in Pacific time.',
    }),
    usageStartDateTime: GoogleTypeDateTimeSchema.exactOptional().openapi({
      description:
        'The earliest usage date time (inclusive). If you use time groupings (daily, weekly, etc), each group uses midnight to midnight (Pacific time). The usage start date is rounded down to include all usage from the specified date. We recommend that clients pass `usage_start_date_time` in Pacific time.',
    }),
  })
  .openapi({ description: 'A representation of usage or invoice date ranges.', required: [] })
  .openapi('GoogleCloudChannelV1alpha1DateRange')

const GoogleCloudChannelV1alpha1ValueSchema = z
  .object({
    boolValue: z.boolean().exactOptional().openapi({ description: 'Represents a boolean value.' }),
    doubleValue: z.float64().exactOptional().openapi({ description: 'Represents a double value.' }),
    int64Value: z.string().exactOptional().openapi({ description: 'Represents an int64 value.' }),
    protoValue: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({ description: "Represents an 'Any' proto value." }),
    stringValue: z.string().exactOptional().openapi({ description: 'Represents a string value.' }),
  })
  .openapi({ description: 'Data type and value of a parameter.', required: [] })
  .openapi('GoogleCloudChannelV1alpha1Value')

const GoogleCloudChannelV1alpha1ParameterSchema = z
  .object({
    editable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Specifies whether this parameter is allowed to be changed. For example, for a Google Workspace Business Starter entitlement in commitment plan, num_units is editable when entitlement is active.',
        readOnly: true,
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of the parameter.' }),
    value: GoogleCloudChannelV1alpha1ValueSchema.exactOptional().openapi({
      description: 'Value of the parameter.',
    }),
  })
  .openapi({ description: 'Definition for extended entitlement parameters.', required: [] })
  .openapi('GoogleCloudChannelV1alpha1Parameter')

const GoogleCloudChannelV1alpha1ProvisionedServiceSchema = z
  .object({
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The product pertaining to the provisioning resource as specified in the Offer.',
        readOnly: true,
      }),
    provisioningId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Provisioning ID of the entitlement. For Google Workspace, this is the underlying Subscription ID. For Google Cloud Platform, this is the Billing Account ID of the billing subaccount."',
        readOnly: true,
      }),
    skuId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The SKU pertaining to the provisioning resource as specified in the Offer.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Service provisioned for an entitlement.', required: [] })
  .openapi('GoogleCloudChannelV1alpha1ProvisionedService')

const GoogleCloudChannelV1alpha1TrialSettingsSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date when the trial ends. The value is in milliseconds using the UNIX Epoch format. See an example [Epoch converter](https://www.epochconverter.com).',
      }),
    trial: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines if the entitlement is in a trial or not: * `true` - The entitlement is in trial. * `false` - The entitlement is not in trial.',
      }),
  })
  .openapi({ description: 'Settings for trial offers.', required: [] })
  .openapi('GoogleCloudChannelV1alpha1TrialSettings')

const GoogleCloudChannelV1alpha1EntitlementSchema = z
  .object({
    assignedUnits: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The current number of users that are assigned a license for the product defined in provisioned_service.skuId. Read-only. Deprecated: Use `parameters` instead.',
      }),
    associationInfo: GoogleCloudChannelV1alpha1AssociationInfoSchema.exactOptional().openapi({
      description: 'Association information to other entitlements.',
    }),
    channelPartnerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Cloud Identity ID of a channel partner who will be the direct reseller for the customer's order. This field is generally used in 2-tier ordering, where the order is placed by a top-level distributor on behalf of their channel partner or reseller. Required for distributors. Deprecated: `channel_partner_id` has been moved to the Customer.",
      }),
    commitmentSettings: GoogleCloudChannelV1alpha1CommitmentSettingsSchema.exactOptional().openapi({
      description:
        'Commitment settings for a commitment-based Offer. Required for commitment based offers.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which the entitlement is created.',
        readOnly: true,
      }),
    maxUnits: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of units for a non commitment-based Offer, such as Flexible, Trial or Free entitlements. For commitment-based entitlements, this is a read-only field, which only the internal support team can update. Deprecated: Use `parameters` instead.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Resource name of an entitlement in the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}.',
        readOnly: true,
      }),
    numUnits: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of units for a commitment-based Offer. For example, for seat-based Offers, this would be the number of seats; for license-based Offers, this would be the number of licenses. Required for creating commitment-based Offers. Deprecated: Use `parameters` instead.',
      }),
    offer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The offer resource name for which the entitlement is to be created. Takes the form: accounts/{account_id}/offers/{offer_id}.',
      }),
    parameters: z
      .array(GoogleCloudChannelV1alpha1ParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'Extended entitlement parameters. When creating an entitlement, valid parameter names and values are defined in the Offer.parameter_definitions. For Google Workspace, the following Parameters may be accepted as input: - max_units: The maximum assignable units for a flexible offer OR - num_units: The total commitment for commitment-based offers The response may additionally include the following output-only Parameters: - assigned_units: The number of licenses assigned to users. For GCP billing subaccounts, the following Parameter may be accepted as input: - display_name: The display name of the billing subaccount.',
      }),
    provisionedService: GoogleCloudChannelV1alpha1ProvisionedServiceSchema.exactOptional().openapi({
      description: 'Output only. Service provisioning details for the entitlement.',
      readOnly: true,
    }),
    provisioningState: z
      .enum([
        'PROVISIONING_STATE_UNSPECIFIED',
        'ACTIVE',
        'CANCELED',
        'COMPLETE',
        'PENDING',
        'SUSPENDED',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. Current provisioning state of the entitlement.',
        readOnly: true,
      }),
    purchaseOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. This purchase order (PO) information is for resellers to use for their company tracking usage. If a purchaseOrderId value is given, it appears in the API responses and shows up in the invoice. The property accepts up to 80 plain text characters. This is only supported for Google Workspace entitlements.',
      }),
    suspensionReasons: z
      .array(
        z.enum([
          'SUSPENSION_REASON_UNSPECIFIED',
          'RESELLER_INITIATED',
          'TRIAL_ENDED',
          'RENEWAL_WITH_TYPE_CANCEL',
          'PENDING_TOS_ACCEPTANCE',
          'OTHER',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Output only. Enumerable of all current suspension reasons for an entitlement.',
        readOnly: true,
      }),
    trialSettings: GoogleCloudChannelV1alpha1TrialSettingsSchema.exactOptional().openapi({
      description: 'Output only. Settings for trial offers.',
      readOnly: true,
    }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time at which the entitlement is updated.',
        readOnly: true,
      }),
  })
  .openapi({
    description: "An entitlement is a representation of a customer's ability to use a service.",
    required: [],
  })
  .openapi('GoogleCloudChannelV1alpha1Entitlement')

const GoogleCloudChannelV1alpha1EntitlementEventSchema = z
  .object({
    entitlement: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Resource name of an entitlement of the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}',
      }),
    eventType: z
      .enum([
        'TYPE_UNSPECIFIED',
        'CREATED',
        'PRICE_PLAN_SWITCHED',
        'COMMITMENT_CHANGED',
        'RENEWED',
        'SUSPENDED',
        'ACTIVATED',
        'CANCELLED',
        'SKU_CHANGED',
        'RENEWAL_SETTING_CHANGED',
        'PAID_SERVICE_STARTED',
        'LICENSE_ASSIGNMENT_CHANGED',
        'LICENSE_CAP_CHANGED',
      ])
      .exactOptional()
      .openapi({ description: 'Type of event which happened on the entitlement.' }),
  })
  .openapi({
    description: 'Represents Pub/Sub message content describing entitlement update.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1alpha1EntitlementEvent')

const GoogleCloudChannelV1alpha1OperationMetadataSchema = z
  .object({
    operationType: z
      .enum([
        'OPERATION_TYPE_UNSPECIFIED',
        'CREATE_ENTITLEMENT',
        'CHANGE_QUANTITY',
        'CHANGE_RENEWAL_SETTINGS',
        'CHANGE_PLAN',
        'START_PAID_SERVICE',
        'CHANGE_SKU',
        'ACTIVATE_ENTITLEMENT',
        'SUSPEND_ENTITLEMENT',
        'CANCEL_ENTITLEMENT',
        'TRANSFER_ENTITLEMENTS',
        'TRANSFER_ENTITLEMENTS_TO_GOOGLE',
        'CHANGE_OFFER',
        'CHANGE_PARAMETERS',
        'PROVISION_CLOUD_IDENTITY',
      ])
      .exactOptional()
      .openapi({ description: 'The RPC that initiated this Long Running Operation.' }),
  })
  .openapi({
    description: 'Provides contextual information about a google.longrunning.Operation.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1alpha1OperationMetadata')

const GoogleCloudChannelV1alpha1ReportSchema = z
  .object({
    columns: z
      .array(GoogleCloudChannelV1alpha1ColumnSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of columns included in the report. This defines the schema of the report results.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A description of other aspects of the report, such as the products it supports.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human-readable name for this report.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The report's resource name. Specifies the account and report used to generate report data. The report_id identifier is a UID (for example, `613bf59q`). Name uses the format: accounts/{account_id}/reports/{report_id}",
      }),
  })
  .openapi({
    description:
      'The ID and description of a report that was used to generate report data. For example, "GCP Daily Spend", "Google Workspace License Activity", etc.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1alpha1Report')

const GoogleCloudChannelV1alpha1ReportStatusSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: "The report generation's completion time." }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: "The report generation's start time." }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'STARTED', 'WRITING', 'AVAILABLE', 'FAILED'])
      .exactOptional()
      .openapi({ description: 'The current state of the report generation process.' }),
  })
  .openapi({ description: 'Status of a report generation process.', required: [] })
  .openapi('GoogleCloudChannelV1alpha1ReportStatus')

const GoogleCloudChannelV1alpha1ReportJobSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of a report job. Name uses the format: `accounts/{account_id}/reportJobs/{report_job_id}`',
      }),
    reportStatus: GoogleCloudChannelV1alpha1ReportStatusSchema.exactOptional().openapi({
      description: 'The current status of report generation.',
    }),
  })
  .openapi({
    description:
      'The result of a RunReportJob operation. Contains the name to use in FetchReportResultsRequest.report_job and the status of the operation.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1alpha1ReportJob')

const GoogleCloudChannelV1alpha1ReportResultsMetadataSchema = z
  .object({
    dateRange: GoogleCloudChannelV1alpha1DateRangeSchema.exactOptional().openapi({
      description: 'The date range of reported usage.',
    }),
    precedingDateRange: GoogleCloudChannelV1alpha1DateRangeSchema.exactOptional().openapi({
      description:
        'The usage dates immediately preceding `date_range` with the same duration. Use this to calculate trending usage and costs. This is only populated if you request trending data. For example, if `date_range` is July 1-15, `preceding_date_range` will be June 16-30.',
    }),
    report: GoogleCloudChannelV1alpha1ReportSchema.exactOptional().openapi({
      description: 'Details of the completed report.',
    }),
    rowCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total number of rows of data in the final report.' }),
  })
  .openapi({
    description:
      'The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1alpha1ReportResultsMetadata')

const GoogleCloudChannelV1alpha1RunReportJobResponseSchema = z
  .object({
    reportJob: GoogleCloudChannelV1alpha1ReportJobSchema.exactOptional().openapi({
      description:
        "Pass `report_job.name` to FetchReportResultsRequest.report_job to retrieve the report's results.",
    }),
    reportMetadata: GoogleCloudChannelV1alpha1ReportResultsMetadataSchema.exactOptional().openapi({
      description:
        "The metadata for the report's results (display name, columns, row count, and date range). If you view this before the operation finishes, you may see incomplete data.",
    }),
  })
  .openapi({
    description: 'Response message for CloudChannelReportsService.RunReportJob.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1alpha1RunReportJobResponse')

const GoogleCloudChannelV1alpha1SubscriberEventSchema = z
  .object({
    channelPartnerEvent:
      GoogleCloudChannelV1alpha1ChannelPartnerEventSchema.exactOptional().openapi({
        description: 'Channel Partner event sent as part of Pub/Sub event to partners.',
      }),
    customerEvent: GoogleCloudChannelV1alpha1CustomerEventSchema.exactOptional().openapi({
      description: 'Customer event sent as part of Pub/Sub event to partners.',
    }),
    entitlementEvent: GoogleCloudChannelV1alpha1EntitlementEventSchema.exactOptional().openapi({
      description: 'Entitlement event sent as part of Pub/Sub event to partners.',
    }),
  })
  .openapi({
    description:
      'Represents information which resellers will get as part of notification from Pub/Sub.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1alpha1SubscriberEvent')

const GoogleCloudChannelV1alpha1TransferEntitlementsResponseSchema = z
  .object({
    entitlements: z
      .array(GoogleCloudChannelV1alpha1EntitlementSchema)
      .exactOptional()
      .openapi({ description: 'The transferred entitlements.' }),
  })
  .openapi({
    description:
      'Response message for CloudChannelService.TransferEntitlements. This is put in the response field of google.longrunning.Operation.',
    required: [],
  })
  .openapi('GoogleCloudChannelV1alpha1TransferEntitlementsResponse')

const GoogleLongrunningCancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('GoogleLongrunningCancelOperationRequest')

const GoogleRpcStatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('GoogleRpcStatus')

const GoogleLongrunningOperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('GoogleLongrunningOperation')

const GoogleLongrunningListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(GoogleLongrunningOperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('GoogleLongrunningListOperationsResponse')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

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
        'https://www.googleapis.com/auth/apps.order': 'Manage users on your domain',
        'https://www.googleapis.com/auth/apps.reports.usage.readonly':
          'View usage reports for your G Suite domain',
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
        'https://www.googleapis.com/auth/apps.order': 'Manage users on your domain',
        'https://www.googleapis.com/auth/apps.reports.usage.readonly':
          'View usage reports for your G Suite domain',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1ProductsRoute = createRoute({
  method: 'get',
  path: '/v1/products',
  tags: ['products'],
  description:
    'Lists the Products the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.',
  operationId: 'cloudchannel.products.list',
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
      account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. The resource name of the reseller account. Format: accounts/{account_id}.',
            in: 'query',
            name: 'account',
            schema: { type: 'string' },
            required: false,
          },
        }),
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
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
              'Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 Products. The maximum value is 1000; the server will coerce values above 1000.',
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
            description: 'Optional. A token for a page of results other than the first page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudChannelV1ListProductsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const getV1AccountListSubscribersRoute = createRoute({
  method: 'get',
  path: '/v1/{account}:listSubscribers',
  tags: ['accounts'],
  description:
    "Lists service accounts with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: A list of service email addresses.",
  operationId: 'cloudchannel.accounts.listSubscribers',
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
              'Optional. The maximum number of service accounts to return. The service may return fewer than this value. If unspecified, returns at most 100 service accounts. The maximum value is 1000; the server will coerce values above 1000.',
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
              'Optional. A page token, received from a previous `ListSubscribers` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscribers` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      account: z
        .string()
        .openapi({
          param: {
            description: 'Required. Resource name of the account.',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudChannelV1ListSubscribersResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1AccountRegisterRoute = createRoute({
  method: 'post',
  path: '/v1/{account}:register',
  tags: ['accounts'],
  description:
    'Registers a service account with subscriber privileges on the Cloud Pub/Sub topic for this Channel Services account. After you create a subscriber, you get the events through SubscriberEvent Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name with the registered service email address.',
  operationId: 'cloudchannel.accounts.register',
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
      account: z
        .string()
        .openapi({
          param: {
            description: 'Required. Resource name of the account.',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudChannelV1RegisterSubscriberRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudChannelV1RegisterSubscriberResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1AccountUnregisterRoute = createRoute({
  method: 'post',
  path: '/v1/{account}:unregister',
  tags: ['accounts'],
  description:
    "Unregisters a service account with subscriber privileges on the Cloud Pub/Sub topic created for this Channel Services account. If there are no service accounts left with subscriber privileges, this deletes the topic. You can call ListSubscribers to check for these accounts. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different, or the impersonated user is not a super admin. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The topic resource doesn't exist. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The topic name that unregistered the service email address. Returns a success response if the service email address wasn't registered with the topic.",
  operationId: 'cloudchannel.accounts.unregister',
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
      account: z
        .string()
        .openapi({
          param: {
            description: 'Required. Resource name of the account.',
            in: 'path',
            name: 'account',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudChannelV1UnregisterSubscriberRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudChannelV1UnregisterSubscriberResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const getV1CustomerListPurchasableOffersRoute = createRoute({
  method: 'get',
  path: '/v1/{customer}:listPurchasableOffers',
  tags: ['accounts'],
  description:
    "Lists the following: * Offers that you can purchase for a customer. * Offers that you can change for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller * INVALID_ARGUMENT: Required request parameters are missing or invalid.",
  operationId: 'cloudchannel.accounts.customers.listPurchasableOffers',
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
      'changeOfferPurchase.entitlement': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Resource name of the entitlement. Format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}',
            in: 'query',
            name: 'changeOfferPurchase.entitlement',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'changeOfferPurchase.newSku': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Resource name of the new target SKU. Provide this SKU when upgrading or downgrading an entitlement. Format: products/{product_id}/skus/{sku_id}',
            in: 'query',
            name: 'changeOfferPurchase.newSku',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'createEntitlementPurchase.sku': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. SKU that the result should be restricted to. Format: products/{product_id}/skus/{sku_id}.',
            in: 'query',
            name: 'createEntitlementPurchase.sku',
            schema: { type: 'string' },
            required: false,
          },
        }),
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
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
              'Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 Offers. The maximum value is 1000; the server will coerce values above 1000.',
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
            description: 'Optional. A token for a page of results other than the first page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the customer to list Offers for. Format: accounts/{account_id}/customers/{customer_id}.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudChannelV1ListPurchasableOffersResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const getV1CustomerListPurchasableSkusRoute = createRoute({
  method: 'get',
  path: '/v1/{customer}:listPurchasableSkus',
  tags: ['accounts'],
  description:
    "Lists the following: * SKUs that you can purchase for a customer * SKUs that you can upgrade or downgrade for an entitlement. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid.",
  operationId: 'cloudchannel.accounts.customers.listPurchasableSkus',
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
      'changeOfferPurchase.changeType': z
        .enum(['CHANGE_TYPE_UNSPECIFIED', 'UPGRADE', 'DOWNGRADE'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Change Type for the entitlement.',
            in: 'query',
            name: 'changeOfferPurchase.changeType',
            schema: { enum: ['CHANGE_TYPE_UNSPECIFIED', 'UPGRADE', 'DOWNGRADE'], type: 'string' },
            required: false,
          },
        }),
      'changeOfferPurchase.entitlement': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Resource name of the entitlement. Format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}',
            in: 'query',
            name: 'changeOfferPurchase.entitlement',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'createEntitlementPurchase.product': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. List SKUs belonging to this Product. Format: products/{product_id}. Supports products/- to retrieve SKUs for all products.',
            in: 'query',
            name: 'createEntitlementPurchase.product',
            schema: { type: 'string' },
            required: false,
          },
        }),
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
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
              'Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000.',
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
            description: 'Optional. A token for a page of results other than the first page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customer: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the customer to list SKUs for. Format: accounts/{account_id}/customers/{customer_id}.',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudChannelV1ListPurchasableSkusResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1CustomerProvisionCloudIdentityRoute = createRoute({
  method: 'post',
  path: '/v1/{customer}:provisionCloudIdentity',
  tags: ['accounts'],
  description:
    "Creates a Cloud Identity for the given customer using the customer's information, or the information provided here. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer was not found. * ALREADY_EXISTS: The customer's primary email already exists. Retry after changing the customer's primary contact email. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata.",
  operationId: 'cloudchannel.accounts.customers.provisionCloudIdentity',
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
      customer: z
        .string()
        .openapi({
          param: {
            description:
              'Required. Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id}',
            in: 'path',
            name: 'customer',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudChannelV1ProvisionCloudIdentityRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const getV1EntitlementLookupOfferRoute = createRoute({
  method: 'get',
  path: '/v1/{entitlement}:lookupOffer',
  tags: ['accounts'],
  description:
    "Returns the requested Offer resource. Possible error codes: * PERMISSION_DENIED: The entitlement doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement or offer was not found. Return value: The Offer resource.",
  operationId: 'cloudchannel.accounts.customers.entitlements.lookupOffer',
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
      entitlement: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the entitlement to retrieve the Offer. Entitlement uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}',
            in: 'path',
            name: 'entitlement',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudChannelV1OfferSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['operations'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'cloudchannel.operations.list',
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
      filter: z
        .enum(['UNSPECIFIED', 'BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description: 'The standard list filter.',
            in: 'query',
            name: 'filter',
            schema: { enum: ['UNSPECIFIED', 'BASIC', 'FULL'], type: 'string' },
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
            description: 'The standard list page size.',
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
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
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
            description: "The name of the operation's parent resource.",
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
      content: { 'application/json': { schema: GoogleLongrunningListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['operations'],
  description:
    "Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.",
  operationId: 'cloudchannel.operations.delete',
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
            description: 'The name of the operation resource to be deleted.',
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
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['accounts'],
  description:
    "Updates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. This method overwrites the existing CustomerRepricingConfig. You can only update configs if the RepricingConfig.effective_invoice_month is a future month. To make changes to configs for the current month, use CreateCustomerRepricingConfig, taking note of its restrictions. You cannot update the RepricingConfig.effective_invoice_month. When updating a config in the future: * This config must already exist. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.",
  operationId: 'cloudchannel.accounts.customers.customerRepricingConfigs.patch',
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
            description: 'The update mask that applies to the resource. Optional.',
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
              'Output only. Resource name of the CustomerRepricingConfig. Format: accounts/{account_id}/customers/{customer_id}/customerRepricingConfigs/{id}.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudChannelV1CustomerRepricingConfigSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudChannelV1CustomerRepricingConfigSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1NameActivateRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:activate',
  tags: ['accounts'],
  description:
    "Activates a previously suspended entitlement. Entitlements suspended for pending ToS acceptance can't be activated using this method. An entitlement activation is a long-running operation and it updates the state of the customer entitlement. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * SUSPENSION_NOT_RESELLER_INITIATED: Can only activate reseller-initiated suspensions and entitlements that have accepted the TOS. * NOT_SUSPENDED: Can only activate suspended entitlements not in an ACTIVE state. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.",
  operationId: 'cloudchannel.accounts.customers.entitlements.activate',
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
              'Required. The resource name of the entitlement to activate. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudChannelV1ActivateEntitlementRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['operations'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'cloudchannel.operations.cancel',
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
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleLongrunningCancelOperationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1NameChangeOfferRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:changeOffer',
  tags: ['accounts'],
  description:
    "Updates the Offer for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Offer or Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.",
  operationId: 'cloudchannel.accounts.customers.entitlements.changeOffer',
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
              'Required. The resource name of the entitlement to update. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudChannelV1ChangeOfferRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1NameChangeParametersRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:changeParameters',
  tags: ['accounts'],
  description:
    "Change parameters of the entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. For example, the number of seats being changed is greater than the allowed number of max seats, or decreasing seats for a commitment based plan. * NOT_FOUND: Entitlement resource not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.",
  operationId: 'cloudchannel.accounts.customers.entitlements.changeParameters',
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
              'Required. The name of the entitlement to update. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudChannelV1ChangeParametersRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1NameChangeRenewalSettingsRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:changeRenewalSettings',
  tags: ['accounts'],
  description:
    "Updates the renewal settings for an existing customer entitlement. An entitlement update is a long-running operation and it updates the entitlement as a result of fulfillment. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_COMMITMENT_PLAN: Renewal Settings are only applicable for a commitment plan. Can't enable or disable renewals for non-commitment plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.",
  operationId: 'cloudchannel.accounts.customers.entitlements.changeRenewalSettings',
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
              'Required. The name of the entitlement to update. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudChannelV1ChangeRenewalSettingsRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1NameRunRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:run',
  tags: ['accounts'],
  description:
    "Begins generation of data for a given report. The report identifier is a UID (for example, `613bf59q`). Possible error codes: * PERMISSION_DENIED: The user doesn't have access to this report. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The report identifier was not found. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata contains an instance of OperationMetadata. To get the results of report generation, call CloudChannelReportsService.FetchReportResults with the RunReportJobResponse.report_job.",
  operationId: 'cloudchannel.accounts.reports.run',
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
              "Required. The report's resource name. Specifies the account and report used to generate report data. The report_id identifier is a UID (for example, `613bf59q`). Name uses the format: accounts/{account_id}/reports/{report_id}",
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudChannelV1RunReportJobRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.reports.usage.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.reports.usage.readonly'],
    },
  ],
})

export const postV1NameStartPaidServiceRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:startPaidService',
  tags: ['accounts'],
  description:
    "Starts paid service for a trial entitlement. Starts paid service for a trial entitlement immediately. This method is only applicable if a plan is set up for a trial entitlement but has some trial days remaining. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * FAILED_PRECONDITION/NOT_IN_TRIAL: This method only works for entitlement on trial plans. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.",
  operationId: 'cloudchannel.accounts.customers.entitlements.startPaidService',
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
              'Required. The name of the entitlement to start a paid service for. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudChannelV1StartPaidServiceRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1NameSuspendRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:suspend',
  tags: ['accounts'],
  description:
    "Suspends a previously fulfilled entitlement. An entitlement suspension is a long-running operation. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: Entitlement resource not found. * NOT_ACTIVE: Entitlement is not active. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.",
  operationId: 'cloudchannel.accounts.customers.entitlements.suspend',
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
              'Required. The resource name of the entitlement to suspend. Name uses the format: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id}',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudChannelV1SuspendEntitlementRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const getV1ParentChannelPartnerLinksRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/channelPartnerLinks',
  tags: ['accounts'],
  description:
    "List ChannelPartnerLinks belonging to a distributor. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: The list of the distributor account's ChannelPartnerLink resources.",
  operationId: 'cloudchannel.accounts.channelPartnerLinks.list',
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
              'Optional. Requested page size. Server might return fewer results than requested. If unspecified, server will pick a default size (25). The maximum value is 200; the server will coerce values above 200.',
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
              'Optional. A token for a page of results other than the first page. Obtained using ListChannelPartnerLinksResponse.next_page_token of the previous CloudChannelService.ListChannelPartnerLinks call.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      view: z
        .enum(['UNSPECIFIED', 'BASIC', 'FULL'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. The level of granularity the ChannelPartnerLink will display.',
            in: 'query',
            name: 'view',
            schema: { enum: ['UNSPECIFIED', 'BASIC', 'FULL'], type: 'string' },
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
              'Required. The resource name of the reseller account for listing channel partner links. Parent uses the format: accounts/{account_id}',
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
      content: {
        'application/json': { schema: GoogleCloudChannelV1ListChannelPartnerLinksResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1ParentChannelPartnerLinksRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/channelPartnerLinks',
  tags: ['accounts'],
  description:
    'Initiates a channel partner link between a distributor and a reseller, or between resellers in an n-tier reseller channel. Invited partners need to follow the invite_link_uri provided in the response to accept. After accepting the invitation, a link is set up between the two parties. You must be a distributor to call this method. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * ALREADY_EXISTS: The ChannelPartnerLink sent in the request already exists. * NOT_FOUND: No Cloud Identity customer exists for provided domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The new ChannelPartnerLink resource.',
  operationId: 'cloudchannel.accounts.channelPartnerLinks.create',
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
              "Required. Create a channel partner link for the provided reseller account's resource name. Parent uses the format: accounts/{account_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudChannelV1ChannelPartnerLinkSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudChannelV1ChannelPartnerLinkSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const getV1ParentChannelPartnerRepricingConfigsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/channelPartnerRepricingConfigs',
  tags: ['accounts'],
  description:
    'Lists information about how a Reseller modifies their bill before sending it to a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the ChannelPartnerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * Channel Partner ID * RepricingConfig.effective_invoice_month * ChannelPartnerRepricingConfig.update_time If unsuccessful, returns an error.',
  operationId: 'cloudchannel.accounts.channelPartnerLinks.channelPartnerRepricingConfigs.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A filter for [CloudChannelService.ListChannelPartnerRepricingConfigs] results (channel_partner_link only). You can use this filter when you support a BatchGet-like query. To use the filter, you must set `parent=accounts/{account_id}/channelPartnerLinks/-`. Example: `channel_partner_link = accounts/account_id/channelPartnerLinks/c1` OR `channel_partner_link = accounts/account_id/channelPartnerLinks/c2`.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
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
              'Optional. The maximum number of repricing configs to return. The service may return fewer than this value. If unspecified, returns a maximum of 50 rules. The maximum value is 100; values above 100 will be coerced to 100.',
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
              'Optional. A token identifying a page of results beyond the first page. Obtained through ListChannelPartnerRepricingConfigsResponse.next_page_token of the previous CloudChannelService.ListChannelPartnerRepricingConfigs call.',
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
              "Required. The resource name of the account's ChannelPartnerLink. Parent uses the format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id}. Supports accounts/{account_id}/channelPartnerLinks/- to retrieve configs for all channel partners.",
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
      content: {
        'application/json': {
          schema: GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1ParentChannelPartnerRepricingConfigsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/channelPartnerRepricingConfigs',
  tags: ['accounts'],
  description:
    "Creates a ChannelPartnerRepricingConfig. Call this method to set modifications for a specific ChannelPartner's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any ChannelPartner or RepricingConfig.effective_invoice_month. * The contained ChannelPartnerRepricingConfig.repricing_config vaule must be different from the value used in the current config for a ChannelPartner. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The ChannelPartnerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated ChannelPartnerRepricingConfig resource, otherwise returns an error.",
  operationId: 'cloudchannel.accounts.channelPartnerLinks.channelPartnerRepricingConfigs.create',
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
              'Required. The resource name of the ChannelPartner that will receive the repricing config. Parent uses the format: accounts/{account_id}/channelPartnerLinks/{channel_partner_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudChannelV1ChannelPartnerRepricingConfigSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudChannelV1ChannelPartnerRepricingConfigSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const getV1ParentCustomerRepricingConfigsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/customerRepricingConfigs',
  tags: ['accounts'],
  description:
    'Lists information about how a Reseller modifies their bill before sending it to a Customer. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the CustomerRepricingConfig resources. The data for each resource is displayed in the ascending order of: * Customer ID * RepricingConfig.EntitlementGranularity.entitlement * RepricingConfig.effective_invoice_month * CustomerRepricingConfig.update_time If unsuccessful, returns an error.',
  operationId: 'cloudchannel.accounts.customers.customerRepricingConfigs.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A filter for [CloudChannelService.ListCustomerRepricingConfigs] results (customer only). You can use this filter when you support a BatchGet-like query. To use the filter, you must set `parent=accounts/{account_id}/customers/-`. Example: customer = accounts/account_id/customers/c1 OR customer = accounts/account_id/customers/c2.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
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
              'Optional. The maximum number of repricing configs to return. The service may return fewer than this value. If unspecified, returns a maximum of 50 rules. The maximum value is 100; values above 100 will be coerced to 100.',
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
              'Optional. A token identifying a page of results beyond the first page. Obtained through ListCustomerRepricingConfigsResponse.next_page_token of the previous CloudChannelService.ListCustomerRepricingConfigs call.',
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
              'Required. The resource name of the customer. Parent uses the format: accounts/{account_id}/customers/{customer_id}. Supports accounts/{account_id}/customers/- to retrieve configs for all customers.',
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
      content: {
        'application/json': {
          schema: GoogleCloudChannelV1ListCustomerRepricingConfigsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1ParentCustomerRepricingConfigsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/customerRepricingConfigs',
  tags: ['accounts'],
  description:
    "Creates a CustomerRepricingConfig. Call this method to set modifications for a specific customer's bill. You can only create configs if the RepricingConfig.effective_invoice_month is a future month. If needed, you can create a config for the current month, with some restrictions. When creating a config for a future month, make sure there are no existing configs for that RepricingConfig.effective_invoice_month. The following restrictions are for creating configs in the current month. * This functionality is reserved for recovering from an erroneous config, and should not be used for regular business cases. * The new config will not modify exports used with other configs. Changes to the config may be immediate, but may take up to 24 hours. * There is a limit of ten configs for any RepricingConfig.EntitlementGranularity.entitlement or RepricingConfig.effective_invoice_month. * The contained CustomerRepricingConfig.repricing_config vaule must be different from the value used in the current config for a RepricingConfig.EntitlementGranularity.entitlement. Possible Error Codes: * PERMISSION_DENIED: If the account making the request and the account being queried are different. * INVALID_ARGUMENT: Missing or invalid required parameters in the request. Also displays if the updated config is for the current month or past months. * NOT_FOUND: The CustomerRepricingConfig specified does not exist or is not associated with the given account. * INTERNAL: Any non-user error related to technical issues in the backend. In this case, contact Cloud Channel support. Return Value: If successful, the updated CustomerRepricingConfig resource, otherwise returns an error.",
  operationId: 'cloudchannel.accounts.customers.customerRepricingConfigs.create',
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
              'Required. The resource name of the customer that will receive this repricing config. Parent uses the format: accounts/{account_id}/customers/{customer_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudChannelV1CustomerRepricingConfigSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudChannelV1CustomerRepricingConfigSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const getV1ParentCustomersRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/customers',
  tags: ['accounts'],
  description:
    'List Customers. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of Customers, or an empty list if there are no customers.',
  operationId: 'cloudchannel.accounts.customers.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Filters applied to the [CloudChannelService.ListCustomers] results. See https://cloud.google.com/channel/docs/concepts/google-cloud/filter-customers for more information.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
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
              'Optional. The maximum number of customers to return. The service may return fewer than this value. If unspecified, returns at most 10 customers. The maximum value is 50.',
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
              'Optional. A token identifying a page of results other than the first page. Obtained through ListCustomersResponse.next_page_token of the previous CloudChannelService.ListCustomers call.',
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
              'Required. The resource name of the reseller account to list customers from. Parent uses the format: accounts/{account_id}.',
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
      content: { 'application/json': { schema: GoogleCloudChannelV1ListCustomersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1ParentCustomersRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/customers',
  tags: ['accounts'],
  description:
    "Creates a new Customer resource under the reseller or distributor account. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * Domain field value doesn't match the primary email domain. Return value: The newly created Customer resource.",
  operationId: 'cloudchannel.accounts.customers.create',
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
              'Required. The resource name of reseller account in which to create the customer. Parent uses the format: accounts/{account_id}',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleCloudChannelV1CustomerSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudChannelV1CustomerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1ParentCustomersImportRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/customers:import',
  tags: ['accounts'],
  description:
    "Imports a Customer from the Cloud Identity associated with the provided Cloud Identity ID or domain before a TransferEntitlements call. If a linked Customer already exists and overwrite_if_exists is true, it will update that Customer's data. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * NOT_FOUND: Cloud Identity doesn't exist or was deleted. * INVALID_ARGUMENT: Required parameters are missing, or the auth_token is expired or invalid. * ALREADY_EXISTS: A customer already exists and has conflicting critical fields. Requires an overwrite. Return value: The Customer.",
  operationId: 'cloudchannel.accounts.customers.import',
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
              "Required. The resource name of the reseller's account. Parent takes the format: accounts/{account_id} or accounts/{account_id}/channelPartnerLinks/{channel_partner_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleCloudChannelV1ImportCustomerRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleCloudChannelV1CustomerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const getV1ParentEntitlementsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/entitlements',
  tags: ['accounts'],
  description:
    "Lists Entitlements belonging to a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's Entitlements.",
  operationId: 'cloudchannel.accounts.customers.entitlements.list',
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
              'Optional. Requested page size. Server might return fewer results than requested. If unspecified, return at most 50 entitlements. The maximum value is 100; the server will coerce values above 100.',
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
              'Optional. A token for a page of results other than the first page. Obtained using ListEntitlementsResponse.next_page_token of the previous CloudChannelService.ListEntitlements call.',
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
              "Required. The resource name of the reseller's customer account to list entitlements for. Parent uses the format: accounts/{account_id}/customers/{customer_id}",
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
      content: {
        'application/json': { schema: GoogleCloudChannelV1ListEntitlementsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1ParentEntitlementsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/entitlements',
  tags: ['accounts'],
  description:
    "Creates an entitlement for a customer. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: * Required request parameters are missing or invalid. * There is already a customer entitlement for a SKU from the same product family. * INVALID_VALUE: Make sure the OfferId is valid. If it is, contact Google Channel support for further troubleshooting. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: * The SKU was already purchased for the customer. * The customer's primary email already exists. Retry after changing the customer's primary contact email. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The domain required for purchasing a SKU has not been verified. * A pre-requisite SKU required to purchase an Add-On SKU is missing. For example, Google Workspace Business Starter is required to purchase Vault or Drive. * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.",
  operationId: 'cloudchannel.accounts.customers.entitlements.create',
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
              "Required. The resource name of the reseller's customer account in which to create the entitlement. Parent uses the format: accounts/{account_id}/customers/{customer_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudChannelV1CreateEntitlementRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const getV1ParentOffersRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/offers',
  tags: ['accounts'],
  description:
    'Lists the Offers the reseller can sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.',
  operationId: 'cloudchannel.accounts.offers.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The expression to filter results by name (name of the Offer), sku.name (name of the SKU), or sku.product.name (name of the Product). Example 1: sku.product.name=products/p1 AND sku.name!=products/p1/skus/s1 Example 2: name=accounts/a1/offers/o1',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
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
              'Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 500 Offers. The maximum value is 1000; the server will coerce values above 1000.',
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
            description: 'Optional. A token for a page of results other than the first page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showFutureOffers: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A boolean flag that determines if a response returns future offers 30 days from now. If the show_future_offers is true, the response will only contain offers that are scheduled to be available 30 days from now.',
            in: 'query',
            name: 'showFutureOffers',
            schema: { type: 'boolean' },
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
              'Required. The resource name of the reseller account from which to list Offers. Parent uses the format: accounts/{account_id}.',
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
      content: { 'application/json': { schema: GoogleCloudChannelV1ListOffersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const getV1ParentReportsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/reports',
  tags: ['accounts'],
  description:
    'Lists the reports that RunReportJob can run. These reports include an ID, a description, and the list of columns that will be in the result.',
  operationId: 'cloudchannel.accounts.reports.list',
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
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The BCP-47 language code, such as "en-US". If specified, the response is localized to the corresponding language code if the original data sources support it. Default is "en-US".',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
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
              'Optional. Requested page size of the report. The server might return fewer results than requested. If unspecified, returns 20 reports. The maximum value is 100.',
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
              'Optional. A token that specifies a page of results beyond the first page. Obtained through ListReportsResponse.next_page_token of the previous CloudChannelReportsService.ListReports call.',
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
              'Required. The resource name of the partner account to list available reports for. Parent uses the format: accounts/{account_id}',
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
      content: { 'application/json': { schema: GoogleCloudChannelV1ListReportsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.reports.usage.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.reports.usage.readonly'],
    },
  ],
})

export const getV1ParentSkusRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/skus',
  tags: ['products'],
  description:
    'Lists the SKUs for a product the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.',
  operationId: 'cloudchannel.products.skus.list',
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
      account: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. Resource name of the reseller. Format: accounts/{account_id}.',
            in: 'query',
            name: 'account',
            schema: { type: 'string' },
            required: false,
          },
        }),
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The BCP-47 language code. For example, "en-US". The response will localize in the corresponding language code, if specified. The default value is "en-US".',
            in: 'query',
            name: 'languageCode',
            schema: { type: 'string' },
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
              'Optional. Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000.',
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
              'Optional. A token for a page of results other than the first page. Optional.',
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
              'Required. The resource name of the Product to list SKUs for. Parent uses the format: products/{product_id}. Supports products/- to retrieve SKUs for all products.',
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
      content: { 'application/json': { schema: GoogleCloudChannelV1ListSkusResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1ParentCheckCloudIdentityAccountsExistRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}:checkCloudIdentityAccountsExist',
  tags: ['accounts'],
  description:
    'Confirms the existence of Cloud Identity accounts based on the domain and if the Cloud Identity accounts are owned by the reseller. Possible error codes: * PERMISSION_DENIED: The reseller account making the request is different from the reseller account in the API request. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * INVALID_VALUE: Invalid domain value in the request. Return value: A list of CloudIdentityCustomerAccount resources for the domain (may be empty) Note: in the v1alpha1 version of the API, a NOT_FOUND error returns if no CloudIdentityCustomerAccount resources match the domain.',
  operationId: 'cloudchannel.accounts.checkCloudIdentityAccountsExist',
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
              "Required. The reseller account's resource name. Parent uses the format: accounts/{account_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const getV1ParentListEntitlementChangesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}:listEntitlementChanges',
  tags: ['accounts'],
  description:
    "List entitlement history. Possible error codes: * PERMISSION_DENIED: The reseller account making the request and the provided reseller account are different. * INVALID_ARGUMENT: Missing or invalid required fields in the request. * NOT_FOUND: The parent resource doesn't exist. Usually the result of an invalid name parameter. * INTERNAL: Any non-user error related to a technical issue in the backend. In this case, contact CloudChannel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. In this case, contact Cloud Channel support. Return value: List of EntitlementChanges.",
  operationId: 'cloudchannel.accounts.customers.entitlements.listEntitlementChanges',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Optional. Filters applied to the list results.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
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
              'Optional. The maximum number of entitlement changes to return. The service may return fewer than this value. If unspecified, returns at most 10 entitlement changes. The maximum value is 50; the server will coerce values above 50.',
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
              'Optional. A page token, received from a previous CloudChannelService.ListEntitlementChanges call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to CloudChannelService.ListEntitlementChanges must match the call that provided the page token.',
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
              'Required. The resource name of the entitlement for which to list entitlement changes. The `-` wildcard may be used to match entitlements across a customer. Formats: * accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id} * accounts/{account_id}/customers/{customer_id}/entitlements/-',
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
      content: {
        'application/json': { schema: GoogleCloudChannelV1ListEntitlementChangesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1ParentListTransferableOffersRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}:listTransferableOffers',
  tags: ['accounts'],
  description:
    "List TransferableOffers of a customer based on Cloud Identity ID or Customer Name in the request. Use this method when a reseller gets the entitlement information of an unowned customer. The reseller should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The customer provided incorrect reseller information when generating auth token. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: List of TransferableOffer for the given customer and SKU.",
  operationId: 'cloudchannel.accounts.listTransferableOffers',
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
            description: "Required. The resource name of the reseller's account.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudChannelV1ListTransferableOffersRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudChannelV1ListTransferableOffersResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1ParentListTransferableSkusRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}:listTransferableSkus',
  tags: ['accounts'],
  description:
    "List TransferableSkus of a customer based on the Cloud Identity ID or Customer Name in the request. Use this method to list the entitlements information of an unowned customer. You should provide the customer's Cloud Identity ID or Customer Name. Possible error codes: * PERMISSION_DENIED: * The customer doesn't belong to the reseller and has no auth token. * The supplied auth token is invalid. * The reseller account making the request is different from the reseller account in the query. * INVALID_ARGUMENT: Required request parameters are missing or invalid. Return value: A list of the customer's TransferableSku.",
  operationId: 'cloudchannel.accounts.listTransferableSkus',
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
              "Required. The reseller account's resource name. Parent uses the format: accounts/{account_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudChannelV1ListTransferableSkusRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudChannelV1ListTransferableSkusResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1ParentTransferEntitlementsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}:transferEntitlements',
  tags: ['accounts'],
  description:
    "Transfers customer entitlements to new reseller. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * Specify all transferring entitlements. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The Operation metadata will contain an instance of OperationMetadata.",
  operationId: 'cloudchannel.accounts.customers.transferEntitlements',
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
              "Required. The resource name of the reseller's customer account that will receive transferred entitlements. Parent uses the format: accounts/{account_id}/customers/{customer_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudChannelV1TransferEntitlementsRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1ParentTransferEntitlementsToGoogleRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}:transferEntitlementsToGoogle',
  tags: ['accounts'],
  description:
    "Transfers customer entitlements from their current reseller to Google. Possible error codes: * PERMISSION_DENIED: The customer doesn't belong to the reseller. * INVALID_ARGUMENT: Required request parameters are missing or invalid. * NOT_FOUND: The customer or offer resource was not found. * ALREADY_EXISTS: The SKU was already transferred for the customer. * CONDITION_NOT_MET or FAILED_PRECONDITION: * The SKU requires domain verification to transfer, but the domain is not verified. * An Add-On SKU (example, Vault or Drive) is missing the pre-requisite SKU (example, G Suite Basic). * (Developer accounts only) Reseller and resold domain must meet the following naming requirements: * Domain names must start with goog-test. * Domain names must include the reseller domain. * INTERNAL: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. * UNKNOWN: Any non-user error related to a technical issue in the backend. Contact Cloud Channel support. Return value: The ID of a long-running operation. To get the results of the operation, call the GetOperation method of CloudChannelOperationsService. The response will contain google.protobuf.Empty on success. The Operation metadata will contain an instance of OperationMetadata.",
  operationId: 'cloudchannel.accounts.customers.transferEntitlementsToGoogle',
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
              "Required. The resource name of the reseller's customer account where the entitlements transfer from. Parent uses the format: accounts/{account_id}/customers/{customer_id}",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudChannelV1TransferEntitlementsToGoogleRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.order'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.order'],
    },
  ],
})

export const postV1ReportJobFetchReportResultsRoute = createRoute({
  method: 'post',
  path: '/v1/{reportJob}:fetchReportResults',
  tags: ['accounts'],
  description: 'Retrieves data generated by CloudChannelReportsService.RunReportJob.',
  operationId: 'cloudchannel.accounts.reportJobs.fetchReportResults',
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
      reportJob: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The report job created by CloudChannelReportsService.RunReportJob. Report_job uses the format: accounts/{account_id}/reportJobs/{report_job_id}',
            in: 'path',
            name: 'reportJob',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudChannelV1FetchReportResultsRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudChannelV1FetchReportResultsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.reports.usage.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.reports.usage.readonly'],
    },
  ],
})
