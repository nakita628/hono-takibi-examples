type GoogleCloudChannelV1Media = {
  content?: string | undefined
  title?: string | undefined
  type?: 'MEDIA_TYPE_UNSPECIFIED' | 'MEDIA_TYPE_IMAGE' | undefined
}
type GoogleCloudChannelV1MarketingInfo = {
  defaultLogo?: GoogleCloudChannelV1Media | undefined
  description?: string | undefined
  displayName?: string | undefined
}
type GoogleCloudChannelV1Product = {
  marketingInfo?: GoogleCloudChannelV1MarketingInfo | undefined
  name?: string | undefined
}
type GoogleCloudChannelV1ListProductsResponse = {
  nextPageToken?: string | undefined
  products?: GoogleCloudChannelV1Product[] | undefined
}
type GoogleCloudChannelV1ListSubscribersResponse = {
  nextPageToken?: string | undefined
  serviceAccounts?: string[] | undefined
  topic?: string | undefined
}
type GoogleCloudChannelV1RegisterSubscriberRequest = { serviceAccount?: string | undefined }
type GoogleCloudChannelV1RegisterSubscriberResponse = { topic?: string | undefined }
type GoogleCloudChannelV1UnregisterSubscriberRequest = { serviceAccount?: string | undefined }
type GoogleCloudChannelV1UnregisterSubscriberResponse = { topic?: string | undefined }
type GoogleCloudChannelV1CustomerConstraints = {
  allowedCustomerTypes?: ('CUSTOMER_TYPE_UNSPECIFIED' | 'DOMAIN' | 'TEAM')[] | undefined
  allowedRegions?: string[] | undefined
  promotionalOrderTypes?:
    | ('PROMOTIONAL_TYPE_UNSPECIFIED' | 'NEW_UPGRADE' | 'TRANSFER' | 'PROMOTION_SWITCH')[]
    | undefined
}
type GoogleCloudChannelV1Constraints = {
  customerConstraints?: GoogleCloudChannelV1CustomerConstraints | undefined
}
type GoogleCloudChannelV1Value = {
  boolValue?: boolean | undefined
  doubleValue?: number | undefined
  int64Value?: string | undefined
  protoValue?: { [x: string]: { [x: string]: unknown } } | undefined
  stringValue?: string | undefined
}
type GoogleCloudChannelV1ParameterDefinition = {
  allowedValues?: GoogleCloudChannelV1Value[] | undefined
  maxValue?: GoogleCloudChannelV1Value | undefined
  minValue?: GoogleCloudChannelV1Value | undefined
  name?: string | undefined
  optional?: boolean | undefined
  parameterType?: 'PARAMETER_TYPE_UNSPECIFIED' | 'INT64' | 'STRING' | 'DOUBLE' | undefined
}
type GoogleCloudChannelV1Period = {
  duration?: number | undefined
  periodType?: 'PERIOD_TYPE_UNSPECIFIED' | 'DAY' | 'MONTH' | 'YEAR' | undefined
}
type GoogleCloudChannelV1Plan = {
  billingAccount?: string | undefined
  paymentCycle?: GoogleCloudChannelV1Period | undefined
  paymentPlan?:
    | 'PAYMENT_PLAN_UNSPECIFIED'
    | 'COMMITMENT'
    | 'FLEXIBLE'
    | 'FREE'
    | 'TRIAL'
    | 'OFFLINE'
    | undefined
  paymentType?: 'PAYMENT_TYPE_UNSPECIFIED' | 'PREPAY' | 'POSTPAY' | undefined
  trialPeriod?: GoogleCloudChannelV1Period | undefined
}
type GoogleTypeMoney = {
  currencyCode?: string | undefined
  nanos?: number | undefined
  units?: string | undefined
}
type GoogleCloudChannelV1Price = {
  basePrice?: GoogleTypeMoney | undefined
  discount?: number | undefined
  effectivePrice?: GoogleTypeMoney | undefined
  externalPriceUri?: string | undefined
}
type GoogleCloudChannelV1PriceTier = {
  firstResource?: number | undefined
  lastResource?: number | undefined
  price?: GoogleCloudChannelV1Price | undefined
}
type GoogleCloudChannelV1PricePhase = {
  firstPeriod?: number | undefined
  lastPeriod?: number | undefined
  periodType?: 'PERIOD_TYPE_UNSPECIFIED' | 'DAY' | 'MONTH' | 'YEAR' | undefined
  price?: GoogleCloudChannelV1Price | undefined
  priceTiers?: GoogleCloudChannelV1PriceTier[] | undefined
}
type GoogleCloudChannelV1PriceByResource = {
  price?: GoogleCloudChannelV1Price | undefined
  pricePhases?: GoogleCloudChannelV1PricePhase[] | undefined
  resourceType?:
    | 'RESOURCE_TYPE_UNSPECIFIED'
    | 'SEAT'
    | 'MAU'
    | 'GB'
    | 'LICENSED_USER'
    | 'MINUTES'
    | 'IAAS_USAGE'
    | 'SUBSCRIPTION'
    | undefined
}
type GoogleCloudChannelV1Sku = {
  marketingInfo?: GoogleCloudChannelV1MarketingInfo | undefined
  name?: string | undefined
  product?: GoogleCloudChannelV1Product | undefined
}
type GoogleCloudChannelV1Offer = {
  constraints?: GoogleCloudChannelV1Constraints | undefined
  dealCode?: string | undefined
  endTime?: string | undefined
  marketingInfo?: GoogleCloudChannelV1MarketingInfo | undefined
  name?: string | undefined
  parameterDefinitions?: GoogleCloudChannelV1ParameterDefinition[] | undefined
  plan?: GoogleCloudChannelV1Plan | undefined
  priceByResources?: GoogleCloudChannelV1PriceByResource[] | undefined
  sku?: GoogleCloudChannelV1Sku | undefined
  startTime?: string | undefined
}
type GoogleCloudChannelV1PurchasableOffer = { offer?: GoogleCloudChannelV1Offer | undefined }
type GoogleCloudChannelV1ListPurchasableOffersResponse = {
  nextPageToken?: string | undefined
  purchasableOffers?: GoogleCloudChannelV1PurchasableOffer[] | undefined
}
type GoogleCloudChannelV1PurchasableSku = { sku?: GoogleCloudChannelV1Sku | undefined }
type GoogleCloudChannelV1ListPurchasableSkusResponse = {
  nextPageToken?: string | undefined
  purchasableSkus?: GoogleCloudChannelV1PurchasableSku[] | undefined
}
type GoogleCloudChannelV1EduData = {
  instituteSize?:
    | 'INSTITUTE_SIZE_UNSPECIFIED'
    | 'SIZE_1_100'
    | 'SIZE_101_500'
    | 'SIZE_501_1000'
    | 'SIZE_1001_2000'
    | 'SIZE_2001_5000'
    | 'SIZE_5001_10000'
    | 'SIZE_10001_OR_MORE'
    | undefined
  instituteType?: 'INSTITUTE_TYPE_UNSPECIFIED' | 'K12' | 'UNIVERSITY' | undefined
  website?: string | undefined
}
type GoogleCloudChannelV1CloudIdentityInfo = {
  adminConsoleUri?: string | undefined
  alternateEmail?: string | undefined
  customerType?: 'CUSTOMER_TYPE_UNSPECIFIED' | 'DOMAIN' | 'TEAM' | undefined
  eduData?: GoogleCloudChannelV1EduData | undefined
  isDomainVerified?: boolean | undefined
  languageCode?: string | undefined
  phoneNumber?: string | undefined
  primaryDomain?: string | undefined
}
type GoogleCloudChannelV1AdminUser = {
  email?: string | undefined
  familyName?: string | undefined
  givenName?: string | undefined
}
type GoogleCloudChannelV1ProvisionCloudIdentityRequest = {
  cloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfo | undefined
  user?: GoogleCloudChannelV1AdminUser | undefined
  validateOnly?: boolean | undefined
}
type GoogleRpcStatus = {
  code?: number | undefined
  details?: { [x: string]: { [x: string]: unknown } }[] | undefined
  message?: string | undefined
}
type GoogleLongrunningOperation = {
  done?: boolean | undefined
  error?: GoogleRpcStatus | undefined
  metadata?: { [x: string]: { [x: string]: unknown } } | undefined
  name?: string | undefined
  response?: { [x: string]: { [x: string]: unknown } } | undefined
}
type GoogleProtobufEmpty = { [x: string]: unknown }
type GoogleLongrunningListOperationsResponse = {
  nextPageToken?: string | undefined
  operations?: GoogleLongrunningOperation[] | undefined
}
type GoogleTypeDecimal = { value?: string | undefined }
type GoogleCloudChannelV1PercentageAdjustment = { percentage?: GoogleTypeDecimal | undefined }
type GoogleCloudChannelV1RepricingAdjustment = {
  percentageAdjustment?: GoogleCloudChannelV1PercentageAdjustment | undefined
}
type GoogleCloudChannelV1RepricingConfigChannelPartnerGranularity = { [x: string]: unknown }
type GoogleCloudChannelV1SkuGroupCondition = { skuGroup?: string | undefined }
type GoogleCloudChannelV1RepricingCondition = {
  skuGroupCondition?: GoogleCloudChannelV1SkuGroupCondition | undefined
}
type GoogleCloudChannelV1ConditionalOverride = {
  adjustment?: GoogleCloudChannelV1RepricingAdjustment | undefined
  rebillingBasis?:
    | 'REBILLING_BASIS_UNSPECIFIED'
    | 'COST_AT_LIST'
    | 'DIRECT_CUSTOMER_COST'
    | undefined
  repricingCondition?: GoogleCloudChannelV1RepricingCondition | undefined
}
type GoogleTypeDate = {
  day?: number | undefined
  month?: number | undefined
  year?: number | undefined
}
type GoogleCloudChannelV1RepricingConfigEntitlementGranularity = {
  entitlement?: string | undefined
}
type GoogleCloudChannelV1RepricingConfig = {
  adjustment?: GoogleCloudChannelV1RepricingAdjustment | undefined
  channelPartnerGranularity?:
    | GoogleCloudChannelV1RepricingConfigChannelPartnerGranularity
    | undefined
  conditionalOverrides?: GoogleCloudChannelV1ConditionalOverride[] | undefined
  effectiveInvoiceMonth?: GoogleTypeDate | undefined
  entitlementGranularity?: GoogleCloudChannelV1RepricingConfigEntitlementGranularity | undefined
  rebillingBasis?:
    | 'REBILLING_BASIS_UNSPECIFIED'
    | 'COST_AT_LIST'
    | 'DIRECT_CUSTOMER_COST'
    | undefined
}
type GoogleCloudChannelV1CustomerRepricingConfig = {
  name?: string | undefined
  repricingConfig?: GoogleCloudChannelV1RepricingConfig | undefined
  updateTime?: string | undefined
}
type GoogleCloudChannelV1ActivateEntitlementRequest = { requestId?: string | undefined }
type GoogleLongrunningCancelOperationRequest = { [x: string]: unknown }
type GoogleCloudChannelV1Parameter = {
  editable?: boolean | undefined
  name?: string | undefined
  value?: GoogleCloudChannelV1Value | undefined
}
type GoogleCloudChannelV1ChangeOfferRequest = {
  offer?: string | undefined
  parameters?: GoogleCloudChannelV1Parameter[] | undefined
  purchaseOrderId?: string | undefined
  requestId?: string | undefined
}
type GoogleCloudChannelV1ChangeParametersRequest = {
  parameters?: GoogleCloudChannelV1Parameter[] | undefined
  purchaseOrderId?: string | undefined
  requestId?: string | undefined
}
type GoogleCloudChannelV1RenewalSettings = {
  enableRenewal?: boolean | undefined
  paymentCycle?: GoogleCloudChannelV1Period | undefined
  paymentPlan?:
    | 'PAYMENT_PLAN_UNSPECIFIED'
    | 'COMMITMENT'
    | 'FLEXIBLE'
    | 'FREE'
    | 'TRIAL'
    | 'OFFLINE'
    | undefined
  resizeUnitCount?: boolean | undefined
}
type GoogleCloudChannelV1ChangeRenewalSettingsRequest = {
  renewalSettings?: GoogleCloudChannelV1RenewalSettings | undefined
  requestId?: string | undefined
}
type GoogleTypeTimeZone = { id?: string | undefined; version?: string | undefined }
type GoogleTypeDateTime = {
  day?: number | undefined
  hours?: number | undefined
  minutes?: number | undefined
  month?: number | undefined
  nanos?: number | undefined
  seconds?: number | undefined
  timeZone?: GoogleTypeTimeZone | undefined
  utcOffset?: string | undefined
  year?: number | undefined
}
type GoogleCloudChannelV1DateRange = {
  invoiceEndDate?: GoogleTypeDate | undefined
  invoiceStartDate?: GoogleTypeDate | undefined
  usageEndDateTime?: GoogleTypeDateTime | undefined
  usageStartDateTime?: GoogleTypeDateTime | undefined
}
type GoogleCloudChannelV1RunReportJobRequest = {
  dateRange?: GoogleCloudChannelV1DateRange | undefined
  filter?: string | undefined
  languageCode?: string | undefined
}
type GoogleCloudChannelV1StartPaidServiceRequest = { requestId?: string | undefined }
type GoogleCloudChannelV1SuspendEntitlementRequest = { requestId?: string | undefined }
type GoogleCloudChannelV1ChannelPartnerLink = {
  channelPartnerCloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfo | undefined
  createTime?: string | undefined
  inviteLinkUri?: string | undefined
  linkState?:
    | 'CHANNEL_PARTNER_LINK_STATE_UNSPECIFIED'
    | 'INVITED'
    | 'ACTIVE'
    | 'REVOKED'
    | 'SUSPENDED'
    | undefined
  name?: string | undefined
  publicId?: string | undefined
  resellerCloudIdentityId?: string | undefined
  updateTime?: string | undefined
}
type GoogleCloudChannelV1ListChannelPartnerLinksResponse = {
  channelPartnerLinks?: GoogleCloudChannelV1ChannelPartnerLink[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudChannelV1ChannelPartnerRepricingConfig = {
  name?: string | undefined
  repricingConfig?: GoogleCloudChannelV1RepricingConfig | undefined
  updateTime?: string | undefined
}
type GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse = {
  channelPartnerRepricingConfigs?: GoogleCloudChannelV1ChannelPartnerRepricingConfig[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudChannelV1ListCustomerRepricingConfigsResponse = {
  customerRepricingConfigs?: GoogleCloudChannelV1CustomerRepricingConfig[] | undefined
  nextPageToken?: string | undefined
}
type GoogleTypePostalAddress = {
  addressLines?: string[] | undefined
  administrativeArea?: string | undefined
  languageCode?: string | undefined
  locality?: string | undefined
  organization?: string | undefined
  postalCode?: string | undefined
  recipients?: string[] | undefined
  regionCode?: string | undefined
  revision?: number | undefined
  sortingCode?: string | undefined
  sublocality?: string | undefined
}
type GoogleCloudChannelV1ContactInfo = {
  displayName?: string | undefined
  email?: string | undefined
  firstName?: string | undefined
  lastName?: string | undefined
  phone?: string | undefined
  title?: string | undefined
}
type GoogleCloudChannelV1Customer = {
  alternateEmail?: string | undefined
  channelPartnerId?: string | undefined
  cloudIdentityId?: string | undefined
  cloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfo | undefined
  correlationId?: string | undefined
  createTime?: string | undefined
  domain?: string | undefined
  languageCode?: string | undefined
  name?: string | undefined
  orgDisplayName?: string | undefined
  orgPostalAddress?: GoogleTypePostalAddress | undefined
  primaryContactInfo?: GoogleCloudChannelV1ContactInfo | undefined
  updateTime?: string | undefined
}
type GoogleCloudChannelV1ListCustomersResponse = {
  customers?: GoogleCloudChannelV1Customer[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudChannelV1ImportCustomerRequest = {
  authToken?: string | undefined
  channelPartnerId?: string | undefined
  cloudIdentityId?: string | undefined
  customer?: string | undefined
  domain?: string | undefined
  overwriteIfExists?: boolean | undefined
}
type GoogleCloudChannelV1AssociationInfo = { baseEntitlement?: string | undefined }
type GoogleCloudChannelV1CommitmentSettings = {
  endTime?: string | undefined
  renewalSettings?: GoogleCloudChannelV1RenewalSettings | undefined
  startTime?: string | undefined
}
type GoogleCloudChannelV1ProvisionedService = {
  productId?: string | undefined
  provisioningId?: string | undefined
  skuId?: string | undefined
}
type GoogleCloudChannelV1TrialSettings = {
  endTime?: string | undefined
  trial?: boolean | undefined
}
type GoogleCloudChannelV1Entitlement = {
  associationInfo?: GoogleCloudChannelV1AssociationInfo | undefined
  commitmentSettings?: GoogleCloudChannelV1CommitmentSettings | undefined
  createTime?: string | undefined
  name?: string | undefined
  offer?: string | undefined
  parameters?: GoogleCloudChannelV1Parameter[] | undefined
  provisionedService?: GoogleCloudChannelV1ProvisionedService | undefined
  provisioningState?: 'PROVISIONING_STATE_UNSPECIFIED' | 'ACTIVE' | 'SUSPENDED' | undefined
  purchaseOrderId?: string | undefined
  suspensionReasons?:
    | (
        | 'SUSPENSION_REASON_UNSPECIFIED'
        | 'RESELLER_INITIATED'
        | 'TRIAL_ENDED'
        | 'RENEWAL_WITH_TYPE_CANCEL'
        | 'PENDING_TOS_ACCEPTANCE'
        | 'OTHER'
      )[]
    | undefined
  trialSettings?: GoogleCloudChannelV1TrialSettings | undefined
  updateTime?: string | undefined
}
type GoogleCloudChannelV1ListEntitlementsResponse = {
  entitlements?: GoogleCloudChannelV1Entitlement[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudChannelV1CreateEntitlementRequest = {
  entitlement?: GoogleCloudChannelV1Entitlement | undefined
  requestId?: string | undefined
}
type GoogleCloudChannelV1ListOffersResponse = {
  nextPageToken?: string | undefined
  offers?: GoogleCloudChannelV1Offer[] | undefined
}
type GoogleCloudChannelV1Column = {
  columnId?: string | undefined
  dataType?:
    | 'DATA_TYPE_UNSPECIFIED'
    | 'STRING'
    | 'INT'
    | 'DECIMAL'
    | 'MONEY'
    | 'DATE'
    | 'DATE_TIME'
    | undefined
  displayName?: string | undefined
}
type GoogleCloudChannelV1Report = {
  columns?: GoogleCloudChannelV1Column[] | undefined
  description?: string | undefined
  displayName?: string | undefined
  name?: string | undefined
}
type GoogleCloudChannelV1ListReportsResponse = {
  nextPageToken?: string | undefined
  reports?: GoogleCloudChannelV1Report[] | undefined
}
type GoogleCloudChannelV1ListSkusResponse = {
  nextPageToken?: string | undefined
  skus?: GoogleCloudChannelV1Sku[] | undefined
}
type GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest = { domain?: string | undefined }
type GoogleCloudChannelV1CloudIdentityCustomerAccount = {
  customerCloudIdentityId?: string | undefined
  customerName?: string | undefined
  existing?: boolean | undefined
  owned?: boolean | undefined
}
type GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse = {
  cloudIdentityAccounts?: GoogleCloudChannelV1CloudIdentityCustomerAccount[] | undefined
}
type GoogleCloudChannelV1EntitlementChange = {
  activationReason?:
    | 'ACTIVATION_REASON_UNSPECIFIED'
    | 'RESELLER_REVOKED_SUSPENSION'
    | 'CUSTOMER_ACCEPTED_PENDING_TOS'
    | 'RENEWAL_SETTINGS_CHANGED'
    | 'OTHER_ACTIVATION_REASON'
    | undefined
  cancellationReason?:
    | 'CANCELLATION_REASON_UNSPECIFIED'
    | 'SERVICE_TERMINATED'
    | 'RELATIONSHIP_ENDED'
    | 'PARTIAL_TRANSFER'
    | undefined
  changeType?:
    | 'CHANGE_TYPE_UNSPECIFIED'
    | 'CREATED'
    | 'PRICE_PLAN_SWITCHED'
    | 'COMMITMENT_CHANGED'
    | 'RENEWED'
    | 'SUSPENDED'
    | 'ACTIVATED'
    | 'CANCELLED'
    | 'SKU_CHANGED'
    | 'RENEWAL_SETTING_CHANGED'
    | 'PAID_SUBSCRIPTION_STARTED'
    | 'LICENSE_CAP_CHANGED'
    | 'SUSPENSION_DETAILS_CHANGED'
    | 'TRIAL_END_DATE_EXTENDED'
    | 'TRIAL_STARTED'
    | undefined
  createTime?: string | undefined
  entitlement?: string | undefined
  offer?: string | undefined
  operator?: string | undefined
  operatorType?:
    | 'OPERATOR_TYPE_UNSPECIFIED'
    | 'CUSTOMER_SERVICE_REPRESENTATIVE'
    | 'SYSTEM'
    | 'CUSTOMER'
    | 'RESELLER'
    | undefined
  otherChangeReason?: string | undefined
  parameters?: GoogleCloudChannelV1Parameter[] | undefined
  provisionedService?: GoogleCloudChannelV1ProvisionedService | undefined
  suspensionReason?:
    | 'SUSPENSION_REASON_UNSPECIFIED'
    | 'RESELLER_INITIATED'
    | 'TRIAL_ENDED'
    | 'RENEWAL_WITH_TYPE_CANCEL'
    | 'PENDING_TOS_ACCEPTANCE'
    | 'OTHER'
    | undefined
}
type GoogleCloudChannelV1ListEntitlementChangesResponse = {
  entitlementChanges?: GoogleCloudChannelV1EntitlementChange[] | undefined
  nextPageToken?: string | undefined
}
type GoogleCloudChannelV1ListTransferableOffersRequest = {
  cloudIdentityId?: string | undefined
  customerName?: string | undefined
  languageCode?: string | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
  sku?: string | undefined
}
type GoogleCloudChannelV1TransferableOffer = { offer?: GoogleCloudChannelV1Offer | undefined }
type GoogleCloudChannelV1ListTransferableOffersResponse = {
  nextPageToken?: string | undefined
  transferableOffers?: GoogleCloudChannelV1TransferableOffer[] | undefined
}
type GoogleCloudChannelV1ListTransferableSkusRequest = {
  authToken?: string | undefined
  cloudIdentityId?: string | undefined
  customerName?: string | undefined
  languageCode?: string | undefined
  pageSize?: number | undefined
  pageToken?: string | undefined
}
type GoogleCloudChannelV1TransferEligibility = {
  description?: string | undefined
  ineligibilityReason?:
    | 'REASON_UNSPECIFIED'
    | 'PENDING_TOS_ACCEPTANCE'
    | 'SKU_NOT_ELIGIBLE'
    | 'SKU_SUSPENDED'
    | undefined
  isEligible?: boolean | undefined
}
type GoogleCloudChannelV1TransferableSku = {
  legacySku?: GoogleCloudChannelV1Sku | undefined
  sku?: GoogleCloudChannelV1Sku | undefined
  transferEligibility?: GoogleCloudChannelV1TransferEligibility | undefined
}
type GoogleCloudChannelV1ListTransferableSkusResponse = {
  nextPageToken?: string | undefined
  transferableSkus?: GoogleCloudChannelV1TransferableSku[] | undefined
}
type GoogleCloudChannelV1TransferEntitlementsRequest = {
  authToken?: string | undefined
  entitlements?: GoogleCloudChannelV1Entitlement[] | undefined
  requestId?: string | undefined
}
type GoogleCloudChannelV1TransferEntitlementsToGoogleRequest = {
  entitlements?: GoogleCloudChannelV1Entitlement[] | undefined
  requestId?: string | undefined
}
type GoogleCloudChannelV1FetchReportResultsRequest = {
  pageSize?: number | undefined
  pageToken?: string | undefined
}
type GoogleCloudChannelV1ReportResultsMetadata = {
  dateRange?: GoogleCloudChannelV1DateRange | undefined
  precedingDateRange?: GoogleCloudChannelV1DateRange | undefined
  report?: GoogleCloudChannelV1Report | undefined
  rowCount?: string | undefined
}
type GoogleCloudChannelV1ReportValue = {
  dateTimeValue?: GoogleTypeDateTime | undefined
  dateValue?: GoogleTypeDate | undefined
  decimalValue?: GoogleTypeDecimal | undefined
  intValue?: string | undefined
  moneyValue?: GoogleTypeMoney | undefined
  stringValue?: string | undefined
}
type GoogleCloudChannelV1Row = { values?: GoogleCloudChannelV1ReportValue[] | undefined }
type GoogleCloudChannelV1FetchReportResultsResponse = {
  nextPageToken?: string | undefined
  reportMetadata?: GoogleCloudChannelV1ReportResultsMetadata | undefined
  rows?: GoogleCloudChannelV1Row[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/products': {
      $get: {
        input: {
          query: {
            account?: string | undefined
            languageCode?: string | undefined
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
        output: GoogleCloudChannelV1ListProductsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:account:listSubscribers': {
      $get: {
        input: { param: { account: string } } & {
          query: {
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
        output: GoogleCloudChannelV1ListSubscribersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:account:register': {
      $post: {
        input: { param: { account: string } } & {
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
        } & { json: GoogleCloudChannelV1RegisterSubscriberRequest }
        output: GoogleCloudChannelV1RegisterSubscriberResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:account:unregister': {
      $post: {
        input: { param: { account: string } } & {
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
        } & { json: GoogleCloudChannelV1UnregisterSubscriberRequest }
        output: GoogleCloudChannelV1UnregisterSubscriberResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer:listPurchasableOffers': {
      $get: {
        input: { param: { customer: string } } & {
          query: {
            'changeOfferPurchase.entitlement'?: string | undefined
            'changeOfferPurchase.newSku'?: string | undefined
            'createEntitlementPurchase.sku'?: string | undefined
            languageCode?: string | undefined
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
        output: GoogleCloudChannelV1ListPurchasableOffersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer:listPurchasableSkus': {
      $get: {
        input: { param: { customer: string } } & {
          query: {
            'changeOfferPurchase.changeType'?:
              | 'CHANGE_TYPE_UNSPECIFIED'
              | 'UPGRADE'
              | 'DOWNGRADE'
              | undefined
            'changeOfferPurchase.entitlement'?: string | undefined
            'createEntitlementPurchase.product'?: string | undefined
            languageCode?: string | undefined
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
        output: GoogleCloudChannelV1ListPurchasableSkusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:customer:provisionCloudIdentity': {
      $post: {
        input: { param: { customer: string } } & {
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
        } & { json: GoogleCloudChannelV1ProvisionCloudIdentityRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:entitlement:lookupOffer': {
      $get: {
        input: { param: { entitlement: string } } & {
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
        output: GoogleCloudChannelV1Offer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name': {
      $delete: {
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
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            filter?: 'UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: GoogleLongrunningListOperationsResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          query: {
            updateMask?: string | undefined
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
        } & { json: GoogleCloudChannelV1CustomerRepricingConfig }
        output: GoogleCloudChannelV1CustomerRepricingConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:activate': {
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
        } & { json: GoogleCloudChannelV1ActivateEntitlementRequest }
        output: GoogleLongrunningOperation
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
        } & { json: GoogleLongrunningCancelOperationRequest }
        output: GoogleProtobufEmpty
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:changeOffer': {
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
        } & { json: GoogleCloudChannelV1ChangeOfferRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:changeParameters': {
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
        } & { json: GoogleCloudChannelV1ChangeParametersRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:changeRenewalSettings': {
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
        } & { json: GoogleCloudChannelV1ChangeRenewalSettingsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:run': {
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
        } & { json: GoogleCloudChannelV1RunReportJobRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:startPaidService': {
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
        } & { json: GoogleCloudChannelV1StartPaidServiceRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:name:suspend': {
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
        } & { json: GoogleCloudChannelV1SuspendEntitlementRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/channelPartnerLinks': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            pageSize?: number | undefined
            pageToken?: string | undefined
            view?: 'UNSPECIFIED' | 'BASIC' | 'FULL' | undefined
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
        output: GoogleCloudChannelV1ListChannelPartnerLinksResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudChannelV1ChannelPartnerLink }
        output: GoogleCloudChannelV1ChannelPartnerLink
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/channelPartnerRepricingConfigs': {
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
        output: GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudChannelV1ChannelPartnerRepricingConfig }
        output: GoogleCloudChannelV1ChannelPartnerRepricingConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/customerRepricingConfigs': {
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
        output: GoogleCloudChannelV1ListCustomerRepricingConfigsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudChannelV1CustomerRepricingConfig }
        output: GoogleCloudChannelV1CustomerRepricingConfig
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/customers': {
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
        output: GoogleCloudChannelV1ListCustomersResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudChannelV1Customer }
        output: GoogleCloudChannelV1Customer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/customers:import': {
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
        } & { json: GoogleCloudChannelV1ImportCustomerRequest }
        output: GoogleCloudChannelV1Customer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/entitlements': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
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
        output: GoogleCloudChannelV1ListEntitlementsResponse
        outputFormat: 'json'
        status: 200
      }
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
        } & { json: GoogleCloudChannelV1CreateEntitlementRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/offers': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            filter?: string | undefined
            languageCode?: string | undefined
            pageSize?: number | undefined
            pageToken?: string | undefined
            showFutureOffers?: boolean | undefined
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
        output: GoogleCloudChannelV1ListOffersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/reports': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            languageCode?: string | undefined
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
        output: GoogleCloudChannelV1ListReportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent/skus': {
      $get: {
        input: { param: { parent: string } } & {
          query: {
            account?: string | undefined
            languageCode?: string | undefined
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
        output: GoogleCloudChannelV1ListSkusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent:checkCloudIdentityAccountsExist': {
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
        } & { json: GoogleCloudChannelV1CheckCloudIdentityAccountsExistRequest }
        output: GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent:listEntitlementChanges': {
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
        output: GoogleCloudChannelV1ListEntitlementChangesResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent:listTransferableOffers': {
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
        } & { json: GoogleCloudChannelV1ListTransferableOffersRequest }
        output: GoogleCloudChannelV1ListTransferableOffersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent:listTransferableSkus': {
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
        } & { json: GoogleCloudChannelV1ListTransferableSkusRequest }
        output: GoogleCloudChannelV1ListTransferableSkusResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent:transferEntitlements': {
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
        } & { json: GoogleCloudChannelV1TransferEntitlementsRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:parent:transferEntitlementsToGoogle': {
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
        } & { json: GoogleCloudChannelV1TransferEntitlementsToGoogleRequest }
        output: GoogleLongrunningOperation
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/:reportJob:fetchReportResults': {
      $post: {
        input: { param: { reportJob: string } } & {
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
        } & { json: GoogleCloudChannelV1FetchReportResultsRequest }
        output: GoogleCloudChannelV1FetchReportResultsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
