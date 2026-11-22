type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails = {
  reason?:
    | 'CANCELLATION_REASON_UNSPECIFIED'
    | 'CANCELLATION_REASON_FRAUD'
    | 'CANCELLATION_REASON_REMORSE'
    | 'CANCELLATION_REASON_ACCIDENTAL_PURCHASE'
    | 'CANCELLATION_REASON_PAST_DUE'
    | 'CANCELLATION_REASON_ACCOUNT_CLOSED'
    | 'CANCELLATION_REASON_UPGRADE_DOWNGRADE'
    | 'CANCELLATION_REASON_USER_DELINQUENCY'
    | 'CANCELLATION_REASON_SYSTEM_ERROR'
    | 'CANCELLATION_REASON_OTHER'
    | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1Amount = {
  amountMicros?: string | undefined
  currencyCode?: string | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1Duration = {
  count?: number | undefined
  unit?: 'UNIT_UNSPECIFIED' | 'MONTH' | 'DAY' | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec =
  {
    discountAmount?: GoogleCloudPaymentsResellerSubscriptionV1Amount | undefined
    discountRatioMicros?: string | undefined
    recurrenceCount?: number | undefined
    regionCode?: string | undefined
  }
type GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails = {
  introductoryPricingSpecs?:
    | GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetailsIntroductoryPricingSpec[]
    | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec = {
  freeTrialDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration | undefined
  introductoryPricingDetails?:
    | GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails
    | undefined
  promotion?: string | undefined
  type?:
    | 'PROMOTION_TYPE_UNSPECIFIED'
    | 'PROMOTION_TYPE_FREE_TRIAL'
    | 'PROMOTION_TYPE_INTRODUCTORY_PRICING'
    | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod = {
  endTime?: string | undefined
  startTime?: string | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails = {
  servicePeriod?: GoogleCloudPaymentsResellerSubscriptionV1ServicePeriod | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload = {
  campaigns?: string[] | undefined
  offering?:
    | 'OFFERING_UNSPECIFIED'
    | 'OFFERING_VAS_BUNDLE'
    | 'OFFERING_VAS_STANDALONE'
    | 'OFFERING_HARD_BUNDLE'
    | 'OFFERING_SOFT_BUNDLE'
    | undefined
  salesChannel?:
    | 'CHANNEL_UNSPECIFIED'
    | 'CHANNEL_RETAIL'
    | 'CHANNEL_ONLINE_WEB'
    | 'CHANNEL_ONLINE_ANDROID_APP'
    | 'CHANNEL_ONLINE_IOS_APP'
    | undefined
  storeId?: string | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload = {
  partnerEligibilityIds?: string[] | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1ProductPayload = {
  googleOnePayload?: GoogleCloudPaymentsResellerSubscriptionV1GoogleOnePayload | undefined
  youtubePayload?: GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem = {
  amount?: GoogleCloudPaymentsResellerSubscriptionV1Amount | undefined
  description?: string | undefined
  lineItemFreeTrialEndTime?: string | undefined
  lineItemPromotionSpecs?:
    | GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec[]
    | undefined
  oneTimeRecurrenceDetails?:
    | GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItemOneTimeRecurrenceDetails
    | undefined
  product?: string | undefined
  productPayload?: GoogleCloudPaymentsResellerSubscriptionV1ProductPayload | undefined
  recurrenceType?:
    | 'LINE_ITEM_RECURRENCE_TYPE_UNSPECIFIED'
    | 'LINE_ITEM_RECURRENCE_TYPE_PERIODIC'
    | 'LINE_ITEM_RECURRENCE_TYPE_ONE_TIME'
    | undefined
  state?:
    | 'LINE_ITEM_STATE_UNSPECIFIED'
    | 'LINE_ITEM_STATE_ACTIVE'
    | 'LINE_ITEM_STATE_INACTIVE'
    | 'LINE_ITEM_STATE_NEW'
    | 'LINE_ITEM_STATE_ACTIVATING'
    | 'LINE_ITEM_STATE_DEACTIVATING'
    | 'LINE_ITEM_STATE_WAITING_TO_DEACTIVATE'
    | 'LINE_ITEM_STATE_OFF_CYCLE_CHARGING'
    | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1Location = {
  postalCode?: string | undefined
  regionCode?: string | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails = {
  billingCycleSpec?:
    | 'BILLING_CYCLE_SPEC_UNSPECIFIED'
    | 'BILLING_CYCLE_SPEC_ALIGN_WITH_PREVIOUS_SUBSCRIPTION'
    | 'BILLING_CYCLE_SPEC_START_IMMEDIATELY'
    | undefined
  previousSubscriptionId?: string | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1Subscription = {
  cancellationDetails?:
    | GoogleCloudPaymentsResellerSubscriptionV1SubscriptionCancellationDetails
    | undefined
  createTime?: string | undefined
  cycleEndTime?: string | undefined
  endUserEntitled?: boolean | undefined
  freeTrialEndTime?: string | undefined
  lineItems?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionLineItem[] | undefined
  name?: string | undefined
  partnerUserToken?: string | undefined
  processingState?:
    | 'PROCESSING_STATE_UNSPECIFIED'
    | 'PROCESSING_STATE_CANCELLING'
    | 'PROCESSING_STATE_RECURRING'
    | undefined
  products?: string[] | undefined
  promotionSpecs?: GoogleCloudPaymentsResellerSubscriptionV1SubscriptionPromotionSpec[] | undefined
  promotions?: string[] | undefined
  redirectUri?: string | undefined
  renewalTime?: string | undefined
  serviceLocation?: GoogleCloudPaymentsResellerSubscriptionV1Location | undefined
  state?:
    | 'STATE_UNSPECIFIED'
    | 'STATE_CREATED'
    | 'STATE_ACTIVE'
    | 'STATE_CANCELLED'
    | 'STATE_IN_GRACE_PERIOD'
    | 'STATE_CANCEL_AT_END_OF_CYCLE'
    | 'STATE_SUSPENDED'
    | undefined
  updateTime?: string | undefined
  upgradeDowngradeDetails?:
    | GoogleCloudPaymentsResellerSubscriptionV1SubscriptionUpgradeDowngradeDetails
    | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest = {
  cancelImmediately?: boolean | undefined
  cancellationReason?:
    | 'CANCELLATION_REASON_UNSPECIFIED'
    | 'CANCELLATION_REASON_FRAUD'
    | 'CANCELLATION_REASON_REMORSE'
    | 'CANCELLATION_REASON_ACCIDENTAL_PURCHASE'
    | 'CANCELLATION_REASON_PAST_DUE'
    | 'CANCELLATION_REASON_ACCOUNT_CLOSED'
    | 'CANCELLATION_REASON_UPGRADE_DOWNGRADE'
    | 'CANCELLATION_REASON_USER_DELINQUENCY'
    | 'CANCELLATION_REASON_SYSTEM_ERROR'
    | 'CANCELLATION_REASON_OTHER'
    | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse = {
  subscription?: GoogleCloudPaymentsResellerSubscriptionV1Subscription | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest = { [x: string]: unknown }
type GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse = {
  subscription?: GoogleCloudPaymentsResellerSubscriptionV1Subscription | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1Extension = {
  duration?: GoogleCloudPaymentsResellerSubscriptionV1Duration | undefined
  partnerUserToken?: string | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest = {
  extension?: GoogleCloudPaymentsResellerSubscriptionV1Extension | undefined
  requestId?: string | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse = {
  cycleEndTime?: string | undefined
  freeTrialEndTime?: string | undefined
  renewalTime?: string | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionRequest = {
  [x: string]: unknown
}
type GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse = {
  subscription?: GoogleCloudPaymentsResellerSubscriptionV1Subscription | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig = {
  amount?: GoogleCloudPaymentsResellerSubscriptionV1Amount | undefined
  regionCode?: string | undefined
}
type GoogleTypeLocalizedText = { languageCode?: string | undefined; text?: string | undefined }
type GoogleCloudPaymentsResellerSubscriptionV1Product = {
  name?: string | undefined
  priceConfigs?: GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig[] | undefined
  regionCodes?: string[] | undefined
  subscriptionBillingCycleDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration | undefined
  titles?: GoogleTypeLocalizedText[] | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse = {
  nextPageToken?: string | undefined
  products?: GoogleCloudPaymentsResellerSubscriptionV1Product[] | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1Promotion = {
  applicableProducts?: string[] | undefined
  endTime?: string | undefined
  freeTrialDuration?: GoogleCloudPaymentsResellerSubscriptionV1Duration | undefined
  introductoryPricingDetails?:
    | GoogleCloudPaymentsResellerSubscriptionV1PromotionIntroductoryPricingDetails
    | undefined
  name?: string | undefined
  promotionType?:
    | 'PROMOTION_TYPE_UNSPECIFIED'
    | 'PROMOTION_TYPE_FREE_TRIAL'
    | 'PROMOTION_TYPE_INTRODUCTORY_PRICING'
    | undefined
  regionCodes?: string[] | undefined
  startTime?: string | undefined
  titles?: GoogleTypeLocalizedText[] | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse = {
  nextPageToken?: string | undefined
  promotions?: GoogleCloudPaymentsResellerSubscriptionV1Promotion[] | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest = {
  filter?: string | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
}
type GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse = {
  nextPageToken?: string | undefined
  promotions?: GoogleCloudPaymentsResellerSubscriptionV1Promotion[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/:name': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudPaymentsResellerSubscriptionV1Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:cancel': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionRequest }
        output: GoogleCloudPaymentsResellerSubscriptionV1CancelSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:entitle': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionRequest }
        output: GoogleCloudPaymentsResellerSubscriptionV1EntitleSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:extend': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionRequest }
        output: GoogleCloudPaymentsResellerSubscriptionV1ExtendSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:undoCancel': {
      $post: {
        input: { param: { name: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionRequest }
        output: GoogleCloudPaymentsResellerSubscriptionV1UndoCancelSubscriptionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/products': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/promotions': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        }
        output: GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/promotions:findEligible': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest }
        output: GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/subscriptions': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            subscriptionId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudPaymentsResellerSubscriptionV1Subscription }
        output: GoogleCloudPaymentsResellerSubscriptionV1Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/subscriptions:provision': {
      $post: {
        input: { param: { parent: string } } & {
          query: {
            subscriptionId?: string | undefined
            '$.xgafv'?: '1' | '2' | undefined
            access_token?: string | undefined
            alt?: 'json' | 'media' | 'proto' | undefined
            callback?: string | undefined
            fields?: string | undefined
            key?: string | undefined
            oauth_token?: string | undefined
            prettyPrint?: boolean | undefined
            quotaUser?: string | undefined
            upload_protocol?: string | undefined
            uploadType?: string | undefined
          }
        } & { json: GoogleCloudPaymentsResellerSubscriptionV1Subscription }
        output: GoogleCloudPaymentsResellerSubscriptionV1Subscription
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
