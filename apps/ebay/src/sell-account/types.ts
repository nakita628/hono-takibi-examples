type SellerEligibilityResponse = {
  programType?: string | undefined
  reason?: string | undefined
  status?: string | undefined
}
type SellerEligibilityMultiProgramResponse = {
  advertisingEligibility?: SellerEligibilityResponse[] | undefined
}
type CompactCustomPolicyResponse = {
  customPolicyId?: string | undefined
  label?: string | undefined
  name?: string | undefined
  policyType?: string | undefined
}
type CustomPolicyResponse = {
  customPolicies?: CompactCustomPolicyResponse[] | undefined
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  total?: number | undefined
}
type CustomPolicyCreateRequest = {
  description?: string | undefined
  label?: string | undefined
  name?: string | undefined
  policyType?: string | undefined
}
type CustomPolicy = {
  customPolicyId?: string | undefined
  description?: string | undefined
  label?: string | undefined
  name?: string | undefined
  policyType?: string | undefined
}
type CustomPolicyRequest = {
  description?: string | undefined
  label?: string | undefined
  name?: string | undefined
}
type CategoryType = { default?: boolean | undefined; name?: string | undefined }
type TimeDuration = { unit?: string | undefined; value?: number | undefined }
type Region = { regionName?: string | undefined; regionType?: string | undefined }
type RegionSet = { regionExcluded?: Region[] | undefined; regionIncluded?: Region[] | undefined }
type Amount = { currency?: string | undefined; value?: string | undefined }
type ShippingService = {
  additionalShippingCost?: Amount | undefined
  buyerResponsibleForPickup?: boolean | undefined
  buyerResponsibleForShipping?: boolean | undefined
  cashOnDeliveryFee?: Amount | undefined
  freeShipping?: boolean | undefined
  shipToLocations?: RegionSet | undefined
  shippingCarrierCode?: string | undefined
  shippingCost?: Amount | undefined
  shippingServiceCode?: string | undefined
  sortOrder?: number | undefined
  surcharge?: Amount | undefined
}
type ShippingOption = {
  costType?: string | undefined
  insuranceFee?: Amount | undefined
  insuranceOffered?: boolean | undefined
  optionType?: string | undefined
  packageHandlingCost?: Amount | undefined
  rateTableId?: string | undefined
  shippingDiscountProfileId?: string | undefined
  shippingPromotionOffered?: boolean | undefined
  shippingServices?: ShippingService[] | undefined
}
type FulfillmentPolicy = {
  categoryTypes?: CategoryType[] | undefined
  description?: string | undefined
  freightShipping?: boolean | undefined
  fulfillmentPolicyId?: string | undefined
  globalShipping?: boolean | undefined
  handlingTime?: TimeDuration | undefined
  localPickup?: boolean | undefined
  marketplaceId?: string | undefined
  name?: string | undefined
  pickupDropOff?: boolean | undefined
  shipToLocations?: RegionSet | undefined
  shippingOptions?: ShippingOption[] | undefined
}
type FulfillmentPolicyResponse = {
  fulfillmentPolicies?: FulfillmentPolicy[] | undefined
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  total?: number | undefined
}
type FulfillmentPolicyRequest = {
  categoryTypes?: CategoryType[] | undefined
  description?: string | undefined
  freightShipping?: boolean | undefined
  globalShipping?: boolean | undefined
  handlingTime?: TimeDuration | undefined
  localPickup?: boolean | undefined
  marketplaceId?: string | undefined
  name?: string | undefined
  pickupDropOff?: boolean | undefined
  shipToLocations?: RegionSet | undefined
  shippingOptions?: ShippingOption[] | undefined
}
type ErrorParameter = { name?: string | undefined; value?: string | undefined }
type Error = {
  category?: string | undefined
  domain?: string | undefined
  errorId?: number | undefined
  inputRefIds?: string[] | undefined
  longMessage?: string | undefined
  message?: string | undefined
  outputRefIds?: string[] | undefined
  parameters?: ErrorParameter[] | undefined
  subdomain?: string | undefined
}
type SetFulfillmentPolicyResponse = {
  categoryTypes?: CategoryType[] | undefined
  description?: string | undefined
  freightShipping?: boolean | undefined
  fulfillmentPolicyId?: string | undefined
  globalShipping?: boolean | undefined
  handlingTime?: TimeDuration | undefined
  localPickup?: boolean | undefined
  marketplaceId?: string | undefined
  name?: string | undefined
  pickupDropOff?: boolean | undefined
  shipToLocations?: RegionSet | undefined
  shippingOptions?: ShippingOption[] | undefined
  warnings?: Error[] | undefined
}
type KycCheck = {
  alert?: string | undefined
  dataRequired?: string | undefined
  detailMessage?: string | undefined
  dueDate?: string | undefined
  remedyUrl?: string | undefined
}
type KycResponse = { kycChecks?: KycCheck[] | undefined }
type RecipientAccountReference = {
  referenceId?: string | undefined
  referenceType?: string | undefined
}
type PaymentMethod = {
  brands?: string[] | undefined
  paymentMethodType?: string | undefined
  recipientAccountReference?: RecipientAccountReference | undefined
}
type Deposit = {
  amount?: Amount | undefined
  dueIn?: TimeDuration | undefined
  paymentMethods?: PaymentMethod[] | undefined
}
type PaymentPolicy = {
  categoryTypes?: CategoryType[] | undefined
  deposit?: Deposit | undefined
  description?: string | undefined
  fullPaymentDueIn?: TimeDuration | undefined
  immediatePay?: boolean | undefined
  marketplaceId?: string | undefined
  name?: string | undefined
  paymentInstructions?: string | undefined
  paymentMethods?: PaymentMethod[] | undefined
  paymentPolicyId?: string | undefined
}
type PaymentPolicyResponse = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  paymentPolicies?: PaymentPolicy[] | undefined
  prev?: string | undefined
  total?: number | undefined
}
type PaymentPolicyRequest = {
  categoryTypes?: CategoryType[] | undefined
  deposit?: Deposit | undefined
  description?: string | undefined
  fullPaymentDueIn?: TimeDuration | undefined
  immediatePay?: boolean | undefined
  marketplaceId?: string | undefined
  name?: string | undefined
  paymentInstructions?: string | undefined
  paymentMethods?: PaymentMethod[] | undefined
}
type SetPaymentPolicyResponse = {
  categoryTypes?: CategoryType[] | undefined
  deposit?: Deposit | undefined
  description?: string | undefined
  fullPaymentDueIn?: TimeDuration | undefined
  immediatePay?: boolean | undefined
  marketplaceId?: string | undefined
  name?: string | undefined
  paymentInstructions?: string | undefined
  paymentMethods?: PaymentMethod[] | undefined
  paymentPolicyId?: string | undefined
  warnings?: Error[] | undefined
}
type PaymentsProgramResponse = {
  marketplaceId?: string | undefined
  paymentsProgramType?: string | undefined
  status?: string | undefined
  wasPreviouslyOptedIn?: boolean | undefined
}
type PaymentsProgramOnboardingSteps = {
  name?: string | undefined
  status?: string | undefined
  webUrl?: string | undefined
}
type PaymentsProgramOnboardingResponse = {
  onboardingStatus?: string | undefined
  steps?: PaymentsProgramOnboardingSteps[] | undefined
}
type SellingLimit = { amount?: Amount | undefined; quantity?: number | undefined }
type SellingPrivileges = {
  sellerRegistrationCompleted?: boolean | undefined
  sellingLimit?: SellingLimit | undefined
}
type Program = { programType?: string | undefined }
type Programs = { programs?: Program[] | undefined }
type RateTable = {
  countryCode?: string | undefined
  locality?: string | undefined
  name?: string | undefined
  rateTableId?: string | undefined
}
type RateTableResponse = { rateTables?: RateTable[] | undefined }
type InternationalReturnOverrideType = {
  returnMethod?: string | undefined
  returnPeriod?: TimeDuration | undefined
  returnShippingCostPayer?: string | undefined
  returnsAccepted?: boolean | undefined
}
type ReturnPolicy = {
  categoryTypes?: CategoryType[] | undefined
  description?: string | undefined
  extendedHolidayReturnsOffered?: boolean | undefined
  internationalOverride?: InternationalReturnOverrideType | undefined
  marketplaceId?: string | undefined
  name?: string | undefined
  refundMethod?: string | undefined
  restockingFeePercentage?: string | undefined
  returnInstructions?: string | undefined
  returnMethod?: string | undefined
  returnPeriod?: TimeDuration | undefined
  returnPolicyId?: string | undefined
  returnShippingCostPayer?: string | undefined
  returnsAccepted?: boolean | undefined
}
type ReturnPolicyResponse = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  returnPolicies?: ReturnPolicy[] | undefined
  total?: number | undefined
}
type ReturnPolicyRequest = {
  categoryTypes?: CategoryType[] | undefined
  description?: string | undefined
  extendedHolidayReturnsOffered?: boolean | undefined
  internationalOverride?: InternationalReturnOverrideType | undefined
  marketplaceId?: string | undefined
  name?: string | undefined
  refundMethod?: string | undefined
  restockingFeePercentage?: string | undefined
  returnInstructions?: string | undefined
  returnMethod?: string | undefined
  returnPeriod?: TimeDuration | undefined
  returnShippingCostPayer?: string | undefined
  returnsAccepted?: boolean | undefined
}
type SetReturnPolicyResponse = {
  categoryTypes?: CategoryType[] | undefined
  description?: string | undefined
  extendedHolidayReturnsOffered?: boolean | undefined
  internationalOverride?: InternationalReturnOverrideType | undefined
  marketplaceId?: string | undefined
  name?: string | undefined
  refundMethod?: string | undefined
  restockingFeePercentage?: string | undefined
  returnInstructions?: string | undefined
  returnMethod?: string | undefined
  returnPeriod?: TimeDuration | undefined
  returnPolicyId?: string | undefined
  returnShippingCostPayer?: string | undefined
  returnsAccepted?: boolean | undefined
  warnings?: Error[] | undefined
}
type SalesTax = {
  countryCode?: string | undefined
  salesTaxJurisdictionId?: string | undefined
  salesTaxPercentage?: string | undefined
  shippingAndHandlingTaxed?: boolean | undefined
}
type SalesTaxes = { salesTaxes?: SalesTax[] | undefined }
type SalesTaxBase = {
  salesTaxPercentage?: string | undefined
  shippingAndHandlingTaxed?: boolean | undefined
}
type Subscription = {
  marketplaceId?: string | undefined
  subscriptionId?: string | undefined
  subscriptionLevel?: string | undefined
  subscriptionType?: string | undefined
  term?: TimeDuration | undefined
}
type SubscriptionResponse = {
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  subscriptions?: Subscription[] | undefined
  total?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/advertising_eligibility': {
      $get:
        | {
            input: { query: { program_types?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: SellerEligibilityMultiProgramResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { program_types?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { program_types?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/custom_policy/': {
      $get:
        | {
            input: { query: { policy_types?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: CustomPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { policy_types?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { policy_types?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID': string } } & {
              json: CustomPolicyCreateRequest
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID': string } } & {
              json: CustomPolicyCreateRequest
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID': string } } & {
              json: CustomPolicyCreateRequest
            }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { header: { 'X-EBAY-C-MARKETPLACE-ID': string } } & {
              json: CustomPolicyCreateRequest
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/custom_policy/:custom_policy_id': {
      $get:
        | {
            input: { param: { custom_policy_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: CustomPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { custom_policy_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { custom_policy_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { custom_policy_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { custom_policy_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            } & { json: CustomPolicyRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { custom_policy_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            } & { json: CustomPolicyRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { custom_policy_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            } & { json: CustomPolicyRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { custom_policy_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            } & { json: CustomPolicyRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { custom_policy_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            } & { json: CustomPolicyRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/fulfillment_policy': {
      $get:
        | {
            input: { query: { marketplace_id: string } }
            output: FulfillmentPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marketplace_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { marketplace_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/fulfillment_policy/': {
      $post:
        | {
            input: { json: FulfillmentPolicyRequest }
            output: SetFulfillmentPolicyResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: FulfillmentPolicyRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: FulfillmentPolicyRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/fulfillment_policy/get_by_policy_name': {
      $get:
        | {
            input: { query: { marketplace_id: string; name: string } }
            output: FulfillmentPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marketplace_id: string; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { marketplace_id: string; name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/fulfillment_policy/:fulfillmentPolicyId': {
      $delete:
        | {
            input: { param: { fulfillmentPolicyId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { fulfillmentPolicyId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fulfillmentPolicyId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { fulfillmentPolicyId: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { fulfillmentPolicyId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { fulfillmentPolicyId: string } }
            output: FulfillmentPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fulfillmentPolicyId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fulfillmentPolicyId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { fulfillmentPolicyId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { fulfillmentPolicyId: string } } & { json: FulfillmentPolicyRequest }
            output: SetFulfillmentPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fulfillmentPolicyId: string } } & { json: FulfillmentPolicyRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { fulfillmentPolicyId: string } } & { json: FulfillmentPolicyRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { fulfillmentPolicyId: string } } & { json: FulfillmentPolicyRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/kyc': {
      $get:
        | { input: {}; output: KycResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/payment_policy': {
      $get:
        | {
            input: { query: { marketplace_id: string } }
            output: PaymentPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marketplace_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { marketplace_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: PaymentPolicyRequest }
            output: SetPaymentPolicyResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: PaymentPolicyRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: PaymentPolicyRequest }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/payment_policy/get_by_policy_name': {
      $get:
        | {
            input: { query: { marketplace_id: string; name: string } }
            output: PaymentPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marketplace_id: string; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { marketplace_id: string; name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/payment_policy/:payment_policy_id': {
      $delete:
        | {
            input: { param: { payment_policy_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { payment_policy_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { payment_policy_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { payment_policy_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { payment_policy_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { payment_policy_id: string } }
            output: PaymentPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_policy_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { payment_policy_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { payment_policy_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { payment_policy_id: string } } & { json: PaymentPolicyRequest }
            output: SetPaymentPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { payment_policy_id: string } } & { json: PaymentPolicyRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { payment_policy_id: string } } & { json: PaymentPolicyRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { payment_policy_id: string } } & { json: PaymentPolicyRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/payments_program/:marketplace_id/:payments_program_type': {
      $get:
        | {
            input: { param: { marketplace_id: string; payments_program_type: string } }
            output: PaymentsProgramResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { marketplace_id: string; payments_program_type: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { marketplace_id: string; payments_program_type: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { marketplace_id: string; payments_program_type: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/payments_program/:marketplace_id/:payments_program_type/onboarding': {
      $get:
        | {
            input: { param: { marketplace_id: string; payments_program_type: string } }
            output: PaymentsProgramOnboardingResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { marketplace_id: string; payments_program_type: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { marketplace_id: string; payments_program_type: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { marketplace_id: string; payments_program_type: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/privilege': {
      $get:
        | { input: {}; output: SellingPrivileges; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/program/get_opted_in_programs': {
      $get:
        | { input: {}; output: Programs; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/program/opt_in': {
      $post:
        | {
            input: { json: Program }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: Program }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Program }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: Program }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: Program }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/program/opt_out': {
      $post:
        | {
            input: { json: Program }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: Program }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: Program }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: Program }; output: {}; outputFormat: string; status: 409 }
        | { input: { json: Program }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/rate_table': {
      $get:
        | {
            input: { query: { country_code?: string | undefined } }
            output: RateTableResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { country_code?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { country_code?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/return_policy': {
      $get:
        | {
            input: { query: { marketplace_id: string } }
            output: ReturnPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marketplace_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { marketplace_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $post:
        | {
            input: { json: ReturnPolicyRequest }
            output: SetReturnPolicyResponse
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: ReturnPolicyRequest }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: ReturnPolicyRequest }; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/return_policy/get_by_policy_name': {
      $get:
        | {
            input: { query: { marketplace_id: string; name: string } }
            output: ReturnPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { marketplace_id: string; name: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { marketplace_id: string; name: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/return_policy/:return_policy_id': {
      $delete:
        | {
            input: { param: { return_policy_id: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { return_policy_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { return_policy_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { return_policy_id: string } }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { param: { return_policy_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { return_policy_id: string } }
            output: ReturnPolicy
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { return_policy_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { return_policy_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { return_policy_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { return_policy_id: string } } & { json: ReturnPolicyRequest }
            output: SetReturnPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { return_policy_id: string } } & { json: ReturnPolicyRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { return_policy_id: string } } & { json: ReturnPolicyRequest }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { return_policy_id: string } } & { json: ReturnPolicyRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/sales_tax': {
      $get:
        | {
            input: { query: { country_code: string } }
            output: SalesTaxes
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { country_code: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { country_code: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/sales_tax/:countryCode/:jurisdictionId': {
      $delete:
        | {
            input: { param: { countryCode: string; jurisdictionId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { countryCode: string; jurisdictionId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { countryCode: string; jurisdictionId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { countryCode: string; jurisdictionId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $get:
        | {
            input: { param: { countryCode: string; jurisdictionId: string } }
            output: SalesTax
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { countryCode: string; jurisdictionId: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { countryCode: string; jurisdictionId: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { countryCode: string; jurisdictionId: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { countryCode: string; jurisdictionId: string } }
            output: {}
            outputFormat: string
            status: 500
          }
      $put:
        | {
            input: { param: { countryCode: string; jurisdictionId: string } } & {
              json: SalesTaxBase
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { countryCode: string; jurisdictionId: string } } & {
              json: SalesTaxBase
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { countryCode: string; jurisdictionId: string } } & {
              json: SalesTaxBase
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { countryCode: string; jurisdictionId: string } } & {
              json: SalesTaxBase
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/subscription': {
      $get:
        | {
            input: {
              query: { limit?: string | undefined; continuation_token?: string | undefined }
            }
            output: SubscriptionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: { limit?: string | undefined; continuation_token?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: { limit?: string | undefined; continuation_token?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
