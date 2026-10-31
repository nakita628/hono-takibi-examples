import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudPaymentsResellerSubscriptionV1AmountSchema = z
  .object({
    amountMicros: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Amount in micros (1_000_000 micros = 1 currency unit)' }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Currency codes in accordance with [ISO-4217 Currency Codes] (https://en.wikipedia.org/wiki/ISO_4217). For example, USD.',
      }),
  })
  .openapi({ description: 'Describes the amount unit including the currency code.', required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1Amount')

const GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestSchema = z
  .object({
    cancelImmediately: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. If true, Google will cancel the subscription immediately, and may or may not (based on the contract) issue a prorated refund for the remainder of the billing cycle. Otherwise, Google defers the cancelation at renewal_time, and will not issue a refund.',
      }),
    cancellationReason: z
      .enum([
        'CANCELLATION_REASON_UNSPECIFIED',
        'CANCELLATION_REASON_FRAUD',
        'CANCELLATION_REASON_REMORSE',
        'CANCELLATION_REASON_ACCIDENTAL_PURCHASE',
        'CANCELLATION_REASON_PAST_DUE',
        'CANCELLATION_REASON_ACCOUNT_CLOSED',
        'CANCELLATION_REASON_UPGRADE_DOWNGRADE',
        'CANCELLATION_REASON_USER_DELINQUENCY',
        'CANCELLATION_REASON_SYSTEM_ERROR',
        'CANCELLATION_REASON_OTHER',
      ])
      .exactOptional()
      .openapi({ description: 'Specifies the reason for the cancellation.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest')

const GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsSchema = z
  .object({
    reason: z
      .enum([
        'CANCELLATION_REASON_UNSPECIFIED',
        'CANCELLATION_REASON_FRAUD',
        'CANCELLATION_REASON_REMORSE',
        'CANCELLATION_REASON_ACCIDENTAL_PURCHASE',
        'CANCELLATION_REASON_PAST_DUE',
        'CANCELLATION_REASON_ACCOUNT_CLOSED',
        'CANCELLATION_REASON_UPGRADE_DOWNGRADE',
        'CANCELLATION_REASON_USER_DELINQUENCY',
        'CANCELLATION_REASON_SYSTEM_ERROR',
        'CANCELLATION_REASON_OTHER',
      ])
      .exactOptional()
      .openapi({ description: 'The reason of the cancellation.' }),
  })
  .openapi({
    description: 'Describes the details of a cancelled or cancelling subscription.',
    required: [],
  })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails')

const GoogleCloudPaymentsResellerSubscriptionV1DurationSchema = z
  .object({
    count: z
      .int32()
      .exactOptional()
      .openapi({ description: 'number of duration units to be included.' }),
    unit: z
      .enum(['UNIT_UNSPECIFIED', 'MONTH', 'DAY'])
      .exactOptional()
      .openapi({ description: 'The unit used for the duration' }),
  })
  .openapi({ description: 'Describes the length of a period of a time.', required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1Duration')

const GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecSchema =
  z
    .object({
      discountAmount: GoogleCloudPaymentsResellerSubscriptionV1AmountSchema.exactOptional().openapi(
        { description: 'Output only. The discount amount. The value is positive.', readOnly: true },
      ),
      discountRatioMicros: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Output only. The discount percentage in micros. For example, 50,000 represents 5%.',
          readOnly: true,
        }),
      recurrenceCount: z
        .int32()
        .exactOptional()
        .openapi({
          description:
            'Output only. Output Only. The duration of an introductory offer in billing cycles.',
          readOnly: true,
        }),
      regionCode: z
        .string()
        .exactOptional()
        .openapi({
          description:
            'Output only. 2-letter ISO region code where the product is available in. Ex. "US".',
          readOnly: true,
        }),
    })
    .openapi({ description: 'The duration of an introductory pricing promotion.', required: [] })
    .openapi(
      'GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec',
    )

const GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsSchema = z
  .object({
    introductoryPricingSpecs: z
      .array(
        GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpecSchema,
      )
      .exactOptional()
      .openapi({ description: 'Specifies the introductory pricing periods.' }),
  })
  .openapi({ description: 'The details of a introductory pricing promotion.', required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails')

const GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecSchema = z
  .object({
    freeTrialDuration:
      GoogleCloudPaymentsResellerSubscriptionV1DurationSchema.exactOptional().openapi({
        description:
          'Output only. The duration of the free trial if the promotion is of type FREE_TRIAL.',
        readOnly: true,
      }),
    introductoryPricingDetails:
      GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsSchema.exactOptional().openapi(
        {
          description:
            'Output only. The details of the introductory pricing spec if the promotion is of type INTRODUCTORY_PRICING.',
          readOnly: true,
        },
      ),
    promotion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. Promotion resource name that identifies a promotion. The format is 'partners/{partner_id}/promotions/{promotion_id}'.",
      }),
    type: z
      .enum([
        'PROMOTION_TYPE_UNSPECIFIED',
        'PROMOTION_TYPE_FREE_TRIAL',
        'PROMOTION_TYPE_INTRODUCTORY_PRICING',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The type of the promotion for the spec.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Describes the spec for one promotion.', required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec')

const GoogleCloudPaymentsResellerSubscriptionV1ServicePeriodSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The end time of the service period. Time is exclusive.' }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The start time of the service period. Time is inclusive.',
      }),
  })
  .openapi({
    description:
      'A description of what time period or moment in time the product or service is being delivered over.',
    required: [],
  })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod')

const GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetailsSchema =
  z
    .object({
      servicePeriod:
        GoogleCloudPaymentsResellerSubscriptionV1ServicePeriodSchema.exactOptional().openapi({
          description: 'The service period of the ONE_TIME line item.',
        }),
    })
    .openapi({ description: 'Details for a ONE_TIME recurrence line item.', required: [] })
    .openapi(
      'GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails',
    )

const GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSchema = z
  .object({
    campaigns: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Campaign attributed to sales of this subscription.' }),
    offering: z
      .enum([
        'OFFERING_UNSPECIFIED',
        'OFFERING_VAS_BUNDLE',
        'OFFERING_VAS_STANDALONE',
        'OFFERING_HARD_BUNDLE',
        'OFFERING_SOFT_BUNDLE',
      ])
      .exactOptional()
      .openapi({
        description: 'The type of offering the subscription was sold by the partner. e.g. VAS.',
      }),
    salesChannel: z
      .enum([
        'CHANNEL_UNSPECIFIED',
        'CHANNEL_RETAIL',
        'CHANNEL_ONLINE_WEB',
        'CHANNEL_ONLINE_ANDROID_APP',
        'CHANNEL_ONLINE_IOS_APP',
      ])
      .exactOptional()
      .openapi({
        description: 'The type of sales channel through which the subscription was sold.',
      }),
    storeId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The identifier for the partner store where the subscription was sold.',
      }),
  })
  .openapi({ description: 'Payload specific to Google One products.', required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload')

const GoogleCloudPaymentsResellerSubscriptionV1YoutubePayloadSchema = z
  .object({
    partnerEligibilityIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The list of eligibility_ids which are applicable for the line item.',
      }),
  })
  .openapi({ description: 'Payload specific to Youtube products.', required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload')

const GoogleCloudPaymentsResellerSubscriptionV1ProductPayloadSchema = z
  .object({
    googleOnePayload:
      GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayloadSchema.exactOptional().openapi({
        description: 'Payload specific to Google One products.',
      }),
    youtubePayload:
      GoogleCloudPaymentsResellerSubscriptionV1YoutubePayloadSchema.exactOptional().openapi({
        description: 'Payload specific to Youtube products.',
      }),
  })
  .openapi({ description: 'Specifies product specific payload.', required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1ProductPayload')

const GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemSchema = z
  .object({
    amount: GoogleCloudPaymentsResellerSubscriptionV1AmountSchema.exactOptional().openapi({
      description:
        'Output only. The price of the product/service in this line item. The amount could be the wholesale price, or it can include a cost of sale based on the contract.',
      readOnly: true,
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Description of this line item.', readOnly: true }),
    lineItemFreeTrialEndTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The free trial end time will be populated after the line item is successfully processed. End time of the line item free trial period, in ISO 8061 format. For example, "2019-08-31T17:28:54.564Z". It will be set the same as createTime if no free trial promotion is specified.',
        readOnly: true,
      }),
    lineItemPromotionSpecs: z
      .array(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. The promotions applied on the line item. It can be: - a free trial promotion, which overrides the subscription-level free trial promotion. - an introductory pricing promotion. When used as input in Create or Provision API, specify its resource name only.',
      }),
    oneTimeRecurrenceDetails:
      GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetailsSchema.exactOptional().openapi(
        {
          description: 'Output only. Details only set for a ONE_TIME recurrence line item.',
          readOnly: true,
        },
      ),
    product: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. Product resource name that identifies one the line item The format is 'partners/{partner_id}/products/{product_id}'.",
      }),
    productPayload:
      GoogleCloudPaymentsResellerSubscriptionV1ProductPayloadSchema.exactOptional().openapi({
        description: 'Optional. Product specific payload for this line item.',
      }),
    recurrenceType: z
      .enum([
        'LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED',
        'LINE_ITEM_RECURRENCE_TYPE_PERIODIC',
        'LINE_ITEM_RECURRENCE_TYPE_ONE_TIME',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The recurrence type of the line item.',
        readOnly: true,
      }),
    state: z
      .enum([
        'LINE_ITEM_STATE_UNSPECIFIED',
        'LINE_ITEM_STATE_ACTIVE',
        'LINE_ITEM_STATE_INACTIVE',
        'LINE_ITEM_STATE_NEW',
        'LINE_ITEM_STATE_ACTIVATING',
        'LINE_ITEM_STATE_DEACTIVATING',
        'LINE_ITEM_STATE_WAITING_TO_DEACTIVATE',
        'LINE_ITEM_STATE_OFF_CYCLE_CHARGING',
      ])
      .exactOptional()
      .openapi({ description: 'Output only. The state of the line item.', readOnly: true }),
  })
  .openapi({ description: 'Individual line item definition of a subscription.', required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem')

const GoogleCloudPaymentsResellerSubscriptionV1LocationSchema = z
  .object({
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The postal code this location refers to. Ex. "94043"' }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '2-letter ISO region code for current content region. Ex. “US” Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1',
      }),
  })
  .openapi({ description: 'Describes a location of an end user.', required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1Location')

const GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsSchema = z
  .object({
    billingCycleSpec: z
      .enum([
        'BILLING_CYCLE_SPEC_UNSPECIFIED',
        'BILLING_CYCLE_SPEC_ALIGN_WITH_PREVIOUS_SUBSCRIPTION',
        'BILLING_CYCLE_SPEC_START_IMMEDIATELY',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. Specifies the billing cycle spec for the new upgraded/downgraded subscription.',
      }),
    previousSubscriptionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The previous subscription id to be replaced. This is not the full resource name, use the subscription_id segment only.',
      }),
  })
  .openapi({
    description:
      'Details about the previous subscription that this new subscription upgrades/downgrades from.',
    required: [],
  })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails')

const GoogleCloudPaymentsResellerSubscriptionV1SubscriptionSchema = z
  .object({
    cancellationDetails:
      GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetailsSchema.exactOptional().openapi(
        {
          description:
            'Output only. Describes the details of a cancelled subscription. Only applicable to subscription of state `STATE_CANCELLED`.',
          readOnly: true,
        },
      ),
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. System generated timestamp when the subscription is created. UTC timezone.',
        readOnly: true,
      }),
    cycleEndTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which the subscription is expected to be extended, in ISO 8061 format. UTC timezone. For example: "2019-08-31T17:28:54.564Z"',
        readOnly: true,
      }),
    endUserEntitled: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Output only. Indicates if the subscription is entitled to the end user.',
        readOnly: true,
      }),
    freeTrialEndTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. End of the free trial period, in ISO 8061 format. For example, "2019-08-31T17:28:54.564Z". It will be set the same as createTime if no free trial promotion is specified.',
        readOnly: true,
      }),
    lineItems: z
      .array(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemSchema)
      .exactOptional()
      .openapi({ description: 'Required. The line items of the subscription.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Resource name of the subscription. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}". This is available for authorizeAddon, but otherwise is response only.',
      }),
    partnerUserToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Identifier of the end-user in partner’s system. The value is restricted to 63 ASCII characters at the maximum.',
      }),
    processingState: z
      .enum([
        'PROCESSING_STATE_UNSPECIFIED',
        'PROCESSING_STATE_CANCELLING',
        'PROCESSING_STATE_RECURRING',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. Describes the processing state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle).',
        readOnly: true,
      }),
    products: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Required. Deprecated: consider using `line_items` as the input. Required. Resource name that identifies the purchased products. The format will be 'partners/{partner_id}/products/{product_id}'.",
      }),
    promotionSpecs: z
      .array(GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpecSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Subscription-level promotions. Only free trial is supported on this level. It determines the first renewal time of the subscription to be the end of the free trial period. Specify the promotion resource name only when used as input.',
      }),
    promotions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Optional. Deprecated: consider using the top-level `promotion_specs` as the input. Optional. Resource name that identifies one or more promotions that can be applied on the product. A typical promotion for a subscription is Free trial. The format will be 'partners/{partner_id}/promotions/{promotion_id}'.",
      }),
    redirectUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The place where partners should redirect the end-user to after creation. This field might also be populated when creation failed. However, Partners should always prepare a default URL to redirect the user in case this field is empty.',
        readOnly: true,
      }),
    renewalTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which the subscription is expected to be renewed by Google - a new charge will be incurred and the service entitlement will be renewed. A non-immediate cancellation will take place at this time too, before which, the service entitlement for the end user will remain valid. UTC timezone in ISO 8061 format. For example: "2019-08-31T17:28:54.564Z"',
        readOnly: true,
      }),
    serviceLocation:
      GoogleCloudPaymentsResellerSubscriptionV1LocationSchema.exactOptional().openapi({
        description:
          'Required. The location that the service is provided as indicated by the partner.',
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'STATE_CREATED',
        'STATE_ACTIVE',
        'STATE_CANCELLED',
        'STATE_IN_GRACE_PERIOD',
        'STATE_CANCEL_AT_END_OF_CYCLE',
        'STATE_SUSPENDED',
      ])
      .exactOptional()
      .openapi({
        description:
          'Output only. Describes the state of the subscription. See more details at [the lifecycle of a subscription](/payments/reseller/subscription/reference/index/Receive.Notifications#payments-subscription-lifecycle).',
        readOnly: true,
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. System generated timestamp when the subscription is most recently updated. UTC timezone.',
        readOnly: true,
      }),
    upgradeDowngradeDetails:
      GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetailsSchema.exactOptional().openapi(
        {
          description:
            'Optional. Details about the previous subscription that this new subscription upgrades/downgrades from. Only populated if this subscription is an upgrade/downgrade from another subscription.',
        },
      ),
  })
  .openapi({ description: 'A Subscription resource managed by 3P Partners.', required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1Subscription')

const GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponseSchema = z
  .object({
    subscription:
      GoogleCloudPaymentsResellerSubscriptionV1SubscriptionSchema.exactOptional().openapi({
        description: 'The cancelled subscription resource.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse')

const GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestSchema = z
  .object({})
  .openapi({
    description:
      'Partner request for entitling the previously provisioned subscription to an end user. The end user identity is inferred from the request OAuth context.',
  })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest')

const GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponseSchema = z
  .object({
    subscription:
      GoogleCloudPaymentsResellerSubscriptionV1SubscriptionSchema.exactOptional().openapi({
        description: 'The subscription that has user linked to it.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse')

const GoogleCloudPaymentsResellerSubscriptionV1ExtensionSchema = z
  .object({
    duration: GoogleCloudPaymentsResellerSubscriptionV1DurationSchema.exactOptional().openapi({
      description: 'Specifies the period of access the subscription should grant.',
    }),
    partnerUserToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Identifier of the end-user in partner’s system.' }),
  })
  .openapi({ description: 'Describes the details of an extension request.', required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1Extension')

const GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequestSchema = z
  .object({
    extension: GoogleCloudPaymentsResellerSubscriptionV1ExtensionSchema.exactOptional().openapi({
      description:
        'Required. Specifies details of the extension. Currently, the duration of the extension must be exactly one billing cycle of the original subscription.',
    }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Restricted to 36 ASCII characters. A random UUID is recommended. The idempotency key for the request. The ID generation logic is controlled by the partner. request_id should be the same as on retries of the same request. A different request_id must be used for a extension of a different cycle. A random UUID is recommended.',
      }),
  })
  .openapi({
    description:
      'Request message for extending a Subscription resource. A new recurrence will be made based on the subscription schedule defined by the original product.',
    required: [],
  })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest')

const GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponseSchema = z
  .object({
    cycleEndTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time at which the subscription is expected to be extended, in ISO 8061 format. UTC timezone. Example, "cycleEndTime":"2019-08-31T17:28:54.564Z"',
      }),
    freeTrialEndTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'End of the free trial period, in ISO 8061 format. UTC timezone. Example, "freeTrialEndTime":"2019-08-31T17:28:54.564Z" This time will be set the same as initial subscription creation time if no free trial period is offered to the partner.',
      }),
    renewalTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time at which the subscription is expected to be renewed by Google - a new charge will be incurred and the service entitlement will be renewed. A non-immediate cancellation will take place at this time too, before which, the service entitlement for the end user will remain valid. UTC timezone in ISO 8061 format. For example: "2019-08-31T17:28:54.564Z"',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse')

const GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequestSchema = z
  .object({
    filter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies the filters for the promotion results. The syntax is defined in https://google.aip.dev/160 with the following caveats: - Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) - Only the following fields are supported: - `applicableProducts` - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` - Unless explicitly mentioned above, other features are not supported. Example: `applicableProducts:partners/partner1/products/product1 AND regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id`',
      }),
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest')

const GoogleTypeLocalizedTextSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text\'s BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.',
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({
        description: "Localized string in the language corresponding to `language_code' below.",
      }),
  })
  .openapi({ description: 'Localized variant of a text in a particular language.', required: [] })
  .openapi('GoogleTypeLocalizedText')

const GoogleCloudPaymentsResellerSubscriptionV1PromotionSchema = z
  .object({
    applicableProducts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Output only. The product ids this promotion can be applied to.',
        readOnly: true,
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies the end time (exclusive) of the period that the promotion is available in. If unset, the promotion is available indefinitely.',
      }),
    freeTrialDuration:
      GoogleCloudPaymentsResellerSubscriptionV1DurationSchema.exactOptional().openapi({
        description:
          'Optional. Specifies the duration of the free trial of the subscription when promotion_type is PROMOTION_TYPE_FREE_TRIAL',
      }),
    introductoryPricingDetails:
      GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsSchema.exactOptional().openapi(
        {
          description:
            'Optional. Specifies the introductory pricing details when the promotion_type is PROMOTION_TYPE_INTRODUCTORY_PRICING.',
        },
      ),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Response only. Resource name of the subscription promotion. It will have the format of "partners/{partner_id}/promotion/{promotion_id}"',
        readOnly: true,
      }),
    promotionType: z
      .enum([
        'PROMOTION_TYPE_UNSPECIFIED',
        'PROMOTION_TYPE_FREE_TRIAL',
        'PROMOTION_TYPE_INTRODUCTORY_PRICING',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. Output Only. Specifies the type of the promotion.',
        readOnly: true,
      }),
    regionCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. 2-letter ISO region code where the promotion is available in. Ex. "US" Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1',
        readOnly: true,
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Specifies the start time (inclusive) of the period that the promotion is available in.',
      }),
    titles: z
      .array(GoogleTypeLocalizedTextSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Localized human readable name of the promotion.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A Promotion resource that defines a promotion for a subscription that can be resold.',
    required: [],
  })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1Promotion')

const GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.',
      }),
    promotions: z
      .array(GoogleCloudPaymentsResellerSubscriptionV1PromotionSchema)
      .exactOptional()
      .openapi({ description: 'The promotions for the current user.' }),
  })
  .openapi({
    description: 'Response containing the found promotions for the current user.',
    required: [],
  })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse')

const GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfigSchema = z
  .object({
    amount: GoogleCloudPaymentsResellerSubscriptionV1AmountSchema.exactOptional().openapi({
      description: 'Output only. The price in the region.',
      readOnly: true,
    }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. 2-letter ISO region code where the product is available in. Ex. "US".',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Configs the prices in an available region.', required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig')

const GoogleCloudPaymentsResellerSubscriptionV1ProductSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Response only. Resource name of the product. It will have the format of "partners/{partner_id}/products/{product_id}"',
        readOnly: true,
      }),
    priceConfigs: z
      .array(GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfigSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Price configs for the product in the available regions.',
        readOnly: true,
      }),
    regionCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Output only. 2-letter ISO region code where the product is available in. Ex. "US" Please refers to: https://en.wikipedia.org/wiki/ISO_3166-1',
        readOnly: true,
      }),
    subscriptionBillingCycleDuration:
      GoogleCloudPaymentsResellerSubscriptionV1DurationSchema.exactOptional().openapi({
        description: 'Output only. Specifies the length of the billing cycle of the subscription.',
        readOnly: true,
      }),
    titles: z
      .array(GoogleTypeLocalizedTextSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Localized human readable name of the product.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A Product resource that defines a subscription service that can be resold.',
    required: [],
  })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1Product')

const GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.',
      }),
    products: z
      .array(GoogleCloudPaymentsResellerSubscriptionV1ProductSchema)
      .exactOptional()
      .openapi({ description: 'The products for the specified partner.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse')

const GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.',
      }),
    promotions: z
      .array(GoogleCloudPaymentsResellerSubscriptionV1PromotionSchema)
      .exactOptional()
      .openapi({ description: 'The promotions for the specified partner.' }),
  })
  .openapi({ required: [] })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse')

const GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionRequestSchema = z
  .object({})
  .openapi({ description: 'Request to revoke a cancellation request.' })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionRequest')

const GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponseSchema = z
  .object({
    subscription:
      GoogleCloudPaymentsResellerSubscriptionV1SubscriptionSchema.exactOptional().openapi({
        description: 'The updated subscription resource.',
      }),
  })
  .openapi({
    description: 'Response that contains the updated subscription resource.',
    required: [],
  })
  .openapi('GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse')

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

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['partners'],
  description:
    'Used by partners to get a subscription by id. It should be called directly by the partner using service accounts.',
  operationId: 'paymentsresellersubscription.partners.subscriptions.get',
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
              'Required. The name of the subscription resource to retrieve. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"',
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
      content: {
        'application/json': { schema: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionSchema },
      },
    },
  },
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['partners'],
  description:
    'Used by partners to cancel a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.',
  operationId: 'paymentsresellersubscription.partners.subscriptions.cancel',
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
              'Required. The name of the subscription resource to be cancelled. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponseSchema,
        },
      },
    },
  },
})

export const postV1NameEntitleRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:entitle',
  tags: ['partners'],
  description:
    'Used by partners to entitle a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.',
  operationId: 'paymentsresellersubscription.partners.subscriptions.entitle',
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
              'Required. The name of the subscription resource that is entitled to the current end user. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponseSchema,
        },
      },
    },
  },
})

export const postV1NameExtendRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:extend',
  tags: ['partners'],
  description:
    '[Deprecated] New partners should be on auto-extend by default. Used by partners to extend a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.',
  operationId: 'paymentsresellersubscription.partners.subscriptions.extend',
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
              'Required. The name of the subscription resource to be extended. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}".',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponseSchema,
        },
      },
    },
  },
})

export const postV1NameUndoCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:undoCancel',
  tags: ['partners'],
  description:
    'Used by partners to revoke the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.',
  operationId: 'paymentsresellersubscription.partners.subscriptions.undoCancel',
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
              'Required. The name of the subscription resource whose pending cancellation needs to be undone. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}"',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponseSchema,
        },
      },
    },
  },
})

export const getV1ParentProductsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/products',
  tags: ['partners'],
  description:
    'To retrieve the products that can be resold by the partner. It should be autenticated with a service account.',
  operationId: 'paymentsresellersubscription.partners.products.list',
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
              'Optional. Specifies the filters for the product results. The syntax is defined in https://google.aip.dev/160 with the following caveats: - Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) - Only the following fields are supported: - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` - Unless explicitly mentioned above, other features are not supported. Example: `regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id`',
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
              'Optional. The maximum number of products to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Optional. A page token, received from a previous `ListProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProducts` must match the call that provided the page token.',
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
              'Required. The parent, the partner that can resell. Format: partners/{partner}',
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
          schema: GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponseSchema,
        },
      },
    },
  },
})

export const getV1ParentPromotionsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/promotions',
  tags: ['partners'],
  description:
    'To retrieve the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.',
  operationId: 'paymentsresellersubscription.partners.promotions.list',
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
              'Optional. Specifies the filters for the promotion results. The syntax is defined in https://google.aip.dev/160 with the following caveats: - Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) - Only the following fields are supported: - `applicableProducts` - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` - Unless explicitly mentioned above, other features are not supported. Example: `applicableProducts:partners/partner1/products/product1 AND regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id`',
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
              'Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'Optional. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token.',
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
              'Required. The parent, the partner that can resell. Format: partners/{partner}',
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
          schema: GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponseSchema,
        },
      },
    },
  },
})

export const postV1ParentPromotionsFindEligibleRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/promotions:findEligible',
  tags: ['partners'],
  description:
    'To find eligible promotions for the current user. The API requires user authorization via OAuth. The user is inferred from the authenticated OAuth credential.',
  operationId: 'paymentsresellersubscription.partners.promotions.findEligible',
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
              'Required. The parent, the partner that can resell. Format: partners/{partner}',
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
          schema: GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequestSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponseSchema,
        },
      },
    },
  },
})

export const postV1ParentSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/subscriptions',
  tags: ['partners'],
  description:
    'Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.',
  operationId: 'paymentsresellersubscription.partners.subscriptions.create',
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
      subscriptionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one.',
            in: 'query',
            name: 'subscriptionId',
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
              'Required. The parent resource name, which is the identifier of the partner. It will have the format of "partners/{partner_id}".',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionSchema },
      },
    },
  },
})

export const postV1ParentSubscriptionsProvisionRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/subscriptions:provision',
  tags: ['partners'],
  description:
    'Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.',
  operationId: 'paymentsresellersubscription.partners.subscriptions.provision',
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
      subscriptionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one.',
            in: 'query',
            name: 'subscriptionId',
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
              'Required. The parent resource name, which is the identifier of the partner. It will have the format of "partners/{partner_id}".',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionSchema },
      },
    },
  },
})
