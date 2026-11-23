type SalesTaxJurisdiction = { salesTaxJurisdictionId?: string | undefined }
type SalesTaxJurisdictions = { salesTaxJurisdictions?: SalesTaxJurisdiction[] | undefined }
type AutomotivePartsCompatibilityPolicy = {
  categoryId?: string | undefined
  categoryTreeId?: string | undefined
  compatibilityBasedOn?: string | undefined
  compatibleVehicleTypes?: string[] | undefined
  maxNumberOfCompatibleVehicles?: number | undefined
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
type AutomotivePartsCompatibilityPolicyResponse = {
  automotivePartsCompatibilityPolicies?: AutomotivePartsCompatibilityPolicy[] | undefined
  warnings?: Error[] | undefined
}
type ExtendedProducerResponsibility = {
  enabledForVariations?: boolean | undefined
  name?: string | undefined
  usage?: string | undefined
}
type ExtendedProducerResponsibilityPolicy = {
  categoryId?: string | undefined
  categoryTreeId?: string | undefined
  supportedAttributes?: ExtendedProducerResponsibility[] | undefined
}
type ExtendedProducerResponsibilityPolicyResponse = {
  extendedProducerResponsibilities?: ExtendedProducerResponsibilityPolicy[] | undefined
  warnings?: Error[] | undefined
}
type Pictogram = {
  pictogramDescription?: string | undefined
  pictogramId?: string | undefined
  pictogramUrl?: string | undefined
}
type SignalWord = { signalWordDescription?: string | undefined; signalWordId?: string | undefined }
type HazardStatement = {
  statementDescription?: string | undefined
  statementId?: string | undefined
}
type HazardousMaterialDetailsResponse = {
  pictograms?: Pictogram[] | undefined
  signalWords?: SignalWord[] | undefined
  statements?: HazardStatement[] | undefined
}
type ItemCondition = {
  conditionDescription?: string | undefined
  conditionId?: string | undefined
  usage?: string | undefined
}
type ItemConditionPolicy = {
  categoryId?: string | undefined
  categoryTreeId?: string | undefined
  itemConditionRequired?: boolean | undefined
  itemConditions?: ItemCondition[] | undefined
}
type ItemConditionPolicyResponse = {
  itemConditionPolicies?: ItemConditionPolicy[] | undefined
  warnings?: Error[] | undefined
}
type ListingStructurePolicy = {
  categoryId?: string | undefined
  categoryTreeId?: string | undefined
  variationsSupported?: boolean | undefined
}
type ListingStructurePolicyResponse = {
  listingStructurePolicies?: ListingStructurePolicy[] | undefined
  warnings?: Error[] | undefined
}
type NegotiatedPricePolicy = {
  bestOfferAutoAcceptEnabled?: boolean | undefined
  bestOfferAutoDeclineEnabled?: boolean | undefined
  bestOfferCounterEnabled?: boolean | undefined
  categoryId?: string | undefined
  categoryTreeId?: string | undefined
}
type NegotiatedPricePolicyResponse = {
  negotiatedPricePolicies?: NegotiatedPricePolicy[] | undefined
  warnings?: Error[] | undefined
}
type TimeDuration = { unit?: string | undefined; value?: number | undefined }
type ReturnPolicyDetails = {
  policyDescriptionEnabled?: boolean | undefined
  refundMethods?: string[] | undefined
  returnMethods?: string[] | undefined
  returnPeriods?: TimeDuration[] | undefined
  returnShippingCostPayers?: string[] | undefined
  returnsAcceptanceEnabled?: boolean | undefined
}
type ReturnPolicy = {
  categoryId?: string | undefined
  categoryTreeId?: string | undefined
  domestic?: ReturnPolicyDetails | undefined
  international?: ReturnPolicyDetails | undefined
  required?: boolean | undefined
}
type ReturnPolicyResponse = {
  returnPolicies?: ReturnPolicy[] | undefined
  warnings?: Error[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/country/:countryCode/sales_tax_jurisdiction': {
      $get:
        | {
            input: { param: { countryCode: string } }
            output: SalesTaxJurisdictions
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { countryCode: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { countryCode: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { countryCode: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/marketplace/:marketplace_id/get_automotive_parts_compatibility_policies': {
      $get:
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: AutomotivePartsCompatibilityPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/marketplace/:marketplace_id/get_extended_producer_responsibility_policies': {
      $get:
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: ExtendedProducerResponsibilityPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/marketplace/:marketplace_id/get_hazardous_materials_labels': {
      $get:
        | {
            input: { param: { marketplace_id: string } }
            output: HazardousMaterialDetailsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { marketplace_id: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { marketplace_id: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { marketplace_id: string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/marketplace/:marketplace_id/get_item_condition_policies': {
      $get:
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: ItemConditionPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/marketplace/:marketplace_id/get_listing_structure_policies': {
      $get:
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: ListingStructurePolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/marketplace/:marketplace_id/get_negotiated_price_policies': {
      $get:
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: NegotiatedPricePolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/marketplace/:marketplace_id/get_return_policies': {
      $get:
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: ReturnPolicyResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { marketplace_id: string } } & {
              query: { filter?: string | undefined }
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
