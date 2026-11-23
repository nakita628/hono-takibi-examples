type TagValue = string
type CreateSavingsPlanResponse = { savingsPlanId?: {} | undefined }
type ResourceNotFoundException = { [x: string]: unknown }
type ValidationException = { [x: string]: unknown }
type InternalServerException = { [x: string]: unknown }
type ServiceQuotaExceededException = { [x: string]: unknown }
type DeleteQueuedSavingsPlanResponse = { [x: string]: unknown }
type SavingsPlanRateFilter = { name?: {} | undefined; values?: {} | undefined }
type DescribeSavingsPlanRatesResponse = {
  savingsPlanId?: {} | undefined
  searchResults?: {} | undefined
  nextToken?: {} | undefined
}
type SavingsPlanArn = string
type SavingsPlanId = string
type SavingsPlanState =
  | 'payment-pending'
  | 'payment-failed'
  | 'active'
  | 'retired'
  | 'queued'
  | 'queued-deleted'
type SavingsPlanFilter = { name?: {} | undefined; values?: {} | undefined }
type DescribeSavingsPlansResponse = { savingsPlans?: {} | undefined; nextToken?: {} | undefined }
type UUID = string
type SavingsPlanPaymentOption = 'All Upfront' | 'Partial Upfront' | 'No Upfront'
type SavingsPlanType = 'Compute' | 'EC2Instance' | 'SageMaker'
type SavingsPlanProductType = 'EC2' | 'Fargate' | 'Lambda' | 'SageMaker'
type SavingsPlanRateServiceCode =
  | 'AmazonEC2'
  | 'AmazonECS'
  | 'AmazonEKS'
  | 'AWSLambda'
  | 'AmazonSageMaker'
type SavingsPlanRateUsageType = string
type SavingsPlanRateOperation = string
type SavingsPlanOfferingRateFilterElement = { name?: {} | undefined; values?: {} | undefined }
type DescribeSavingsPlansOfferingRatesResponse = {
  searchResults?: {} | undefined
  nextToken?: {} | undefined
}
type SavingsPlansDuration = number
type CurrencyCode = 'CNY' | 'USD'
type SavingsPlanDescription = string
type SavingsPlanServiceCode = string
type SavingsPlanUsageType = string
type SavingsPlanOperation = string
type SavingsPlanOfferingFilterElement = { name?: {} | undefined; values?: {} | undefined }
type DescribeSavingsPlansOfferingsResponse = {
  searchResults?: {} | undefined
  nextToken?: {} | undefined
}
type ListTagsForResourceResponse = { tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/CreateSavingsPlan': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                savingsPlanOfferingId: string
                commitment: string
                upfrontPaymentAmount?: string | undefined
                purchaseTime?: string | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: CreateSavingsPlanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                savingsPlanOfferingId: string
                commitment: string
                upfrontPaymentAmount?: string | undefined
                purchaseTime?: string | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                savingsPlanOfferingId: string
                commitment: string
                upfrontPaymentAmount?: string | undefined
                purchaseTime?: string | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                savingsPlanOfferingId: string
                commitment: string
                upfrontPaymentAmount?: string | undefined
                purchaseTime?: string | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                savingsPlanOfferingId: string
                commitment: string
                upfrontPaymentAmount?: string | undefined
                purchaseTime?: string | undefined
                clientToken?: string | undefined
                tags?: { [x: string]: TagValue } | undefined
              }
            }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/DeleteQueuedSavingsPlan': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { savingsPlanId: string } }
            output: DeleteQueuedSavingsPlanResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { savingsPlanId: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { savingsPlanId: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { savingsPlanId: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { savingsPlanId: string } }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/DescribeSavingsPlanRates': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                savingsPlanId: string
                filters?: SavingsPlanRateFilter[] | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: DescribeSavingsPlanRatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                savingsPlanId: string
                filters?: SavingsPlanRateFilter[] | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                savingsPlanId: string
                filters?: SavingsPlanRateFilter[] | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/DescribeSavingsPlans': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                savingsPlanArns?: SavingsPlanArn[] | undefined
                savingsPlanIds?: SavingsPlanId[] | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
                states?: SavingsPlanState[] | undefined
                filters?: SavingsPlanFilter[] | undefined
              }
            }
            output: DescribeSavingsPlansResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                savingsPlanArns?: SavingsPlanArn[] | undefined
                savingsPlanIds?: SavingsPlanId[] | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
                states?: SavingsPlanState[] | undefined
                filters?: SavingsPlanFilter[] | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                savingsPlanArns?: SavingsPlanArn[] | undefined
                savingsPlanIds?: SavingsPlanId[] | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
                states?: SavingsPlanState[] | undefined
                filters?: SavingsPlanFilter[] | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/DescribeSavingsPlansOfferingRates': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                savingsPlanOfferingIds?: UUID[] | undefined
                savingsPlanPaymentOptions?: SavingsPlanPaymentOption[] | undefined
                savingsPlanTypes?: SavingsPlanType[] | undefined
                products?: SavingsPlanProductType[] | undefined
                serviceCodes?: SavingsPlanRateServiceCode[] | undefined
                usageTypes?: SavingsPlanRateUsageType[] | undefined
                operations?: SavingsPlanRateOperation[] | undefined
                filters?: SavingsPlanOfferingRateFilterElement[] | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: DescribeSavingsPlansOfferingRatesResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                savingsPlanOfferingIds?: UUID[] | undefined
                savingsPlanPaymentOptions?: SavingsPlanPaymentOption[] | undefined
                savingsPlanTypes?: SavingsPlanType[] | undefined
                products?: SavingsPlanProductType[] | undefined
                serviceCodes?: SavingsPlanRateServiceCode[] | undefined
                usageTypes?: SavingsPlanRateUsageType[] | undefined
                operations?: SavingsPlanRateOperation[] | undefined
                filters?: SavingsPlanOfferingRateFilterElement[] | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                savingsPlanOfferingIds?: UUID[] | undefined
                savingsPlanPaymentOptions?: SavingsPlanPaymentOption[] | undefined
                savingsPlanTypes?: SavingsPlanType[] | undefined
                products?: SavingsPlanProductType[] | undefined
                serviceCodes?: SavingsPlanRateServiceCode[] | undefined
                usageTypes?: SavingsPlanRateUsageType[] | undefined
                operations?: SavingsPlanRateOperation[] | undefined
                filters?: SavingsPlanOfferingRateFilterElement[] | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/DescribeSavingsPlansOfferings': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                offeringIds?: UUID[] | undefined
                paymentOptions?: SavingsPlanPaymentOption[] | undefined
                productType?: 'EC2' | 'Fargate' | 'Lambda' | 'SageMaker' | undefined
                planTypes?: SavingsPlanType[] | undefined
                durations?: SavingsPlansDuration[] | undefined
                currencies?: CurrencyCode[] | undefined
                descriptions?: SavingsPlanDescription[] | undefined
                serviceCodes?: SavingsPlanServiceCode[] | undefined
                usageTypes?: SavingsPlanUsageType[] | undefined
                operations?: SavingsPlanOperation[] | undefined
                filters?: SavingsPlanOfferingFilterElement[] | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: DescribeSavingsPlansOfferingsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                offeringIds?: UUID[] | undefined
                paymentOptions?: SavingsPlanPaymentOption[] | undefined
                productType?: 'EC2' | 'Fargate' | 'Lambda' | 'SageMaker' | undefined
                planTypes?: SavingsPlanType[] | undefined
                durations?: SavingsPlansDuration[] | undefined
                currencies?: CurrencyCode[] | undefined
                descriptions?: SavingsPlanDescription[] | undefined
                serviceCodes?: SavingsPlanServiceCode[] | undefined
                usageTypes?: SavingsPlanUsageType[] | undefined
                operations?: SavingsPlanOperation[] | undefined
                filters?: SavingsPlanOfferingFilterElement[] | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: ValidationException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & {
              json: {
                offeringIds?: UUID[] | undefined
                paymentOptions?: SavingsPlanPaymentOption[] | undefined
                productType?: 'EC2' | 'Fargate' | 'Lambda' | 'SageMaker' | undefined
                planTypes?: SavingsPlanType[] | undefined
                durations?: SavingsPlansDuration[] | undefined
                currencies?: CurrencyCode[] | undefined
                descriptions?: SavingsPlanDescription[] | undefined
                serviceCodes?: SavingsPlanServiceCode[] | undefined
                usageTypes?: SavingsPlanUsageType[] | undefined
                operations?: SavingsPlanOperation[] | undefined
                filters?: SavingsPlanOfferingFilterElement[] | undefined
                nextToken?: string | undefined
                maxResults?: number | undefined
              }
            }
            output: InternalServerException
            outputFormat: 'json'
            status: 481
          }
    }
  } & {
    '/ListTagsForResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceArn: string } }
            output: ListTagsForResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceArn: string } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceArn: string } }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceArn: string } }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  } & {
    '/TagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceArn: string; tags: { [x: string]: TagValue } } }
            output: TagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceArn: string; tags: { [x: string]: TagValue } } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceArn: string; tags: { [x: string]: TagValue } } }
            output: ServiceQuotaExceededException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceArn: string; tags: { [x: string]: TagValue } } }
            output: ValidationException
            outputFormat: 'json'
            status: 482
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceArn: string; tags: { [x: string]: TagValue } } }
            output: InternalServerException
            outputFormat: 'json'
            status: 483
          }
    }
  } & {
    '/UntagResource': {
      $post:
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceArn: string; tagKeys: TagKey[] } }
            output: UntagResourceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceArn: string; tagKeys: TagKey[] } }
            output: ResourceNotFoundException
            outputFormat: 'json'
            status: 480
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceArn: string; tagKeys: TagKey[] } }
            output: ValidationException
            outputFormat: 'json'
            status: 481
          }
        | {
            input: {
              header: {
                'X-Amz-Content-Sha256'?: string | undefined
                'X-Amz-Date'?: string | undefined
                'X-Amz-Algorithm'?: string | undefined
                'X-Amz-Credential'?: string | undefined
                'X-Amz-Security-Token'?: string | undefined
                'X-Amz-Signature'?: string | undefined
                'X-Amz-SignedHeaders'?: string | undefined
              }
            } & { json: { resourceArn: string; tagKeys: TagKey[] } }
            output: InternalServerException
            outputFormat: 'json'
            status: 482
          }
    }
  },
  '/'
>
export default routes
