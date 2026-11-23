type AspectRecommendations = {
  localizedAspectName?: string | undefined
  suggestedValues?: string[] | undefined
}
type ProductRecommendation = { epid?: string | undefined }
type CorrectiveRecommendations = {
  aspectRecommendations?: AspectRecommendations[] | undefined
  productRecommendation?: ProductRecommendation | undefined
}
type NameValueList = { name?: string | undefined; value?: string | undefined }
type VariationDetails = { sku?: string | undefined; variationAspects?: NameValueList[] | undefined }
type ComplianceDetail = {
  complianceState?: string | undefined
  correctiveRecommendations?: CorrectiveRecommendations | undefined
  message?: string | undefined
  reasonCode?: string | undefined
  variation?: VariationDetails | undefined
  violationData?: NameValueList[] | undefined
}
type ComplianceViolation = {
  complianceType?: string | undefined
  listingId?: string | undefined
  offerId?: string | undefined
  sku?: string | undefined
  violations?: ComplianceDetail[] | undefined
}
type PagedComplianceViolationCollection = {
  href?: string | undefined
  limit?: number | undefined
  listingViolations?: ComplianceViolation[] | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  total?: number | undefined
}
type ComplianceSummaryInfo = {
  complianceType?: string | undefined
  listingCount?: number | undefined
  marketplaceId?: string | undefined
}
type ComplianceSummary = { violationSummaries?: ComplianceSummaryInfo[] | undefined }
type SuppressViolationRequest = {
  complianceType?: string | undefined
  listingId?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/listing_violation': {
      $get:
        | {
            input: {
              query: {
                compliance_type?: string | undefined
                offset?: string | undefined
                listing_id?: string | undefined
                limit?: string | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } }
            output: PagedComplianceViolationCollection
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                compliance_type?: string | undefined
                offset?: string | undefined
                listing_id?: string | undefined
                limit?: string | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: {
              query: {
                compliance_type?: string | undefined
                offset?: string | undefined
                listing_id?: string | undefined
                limit?: string | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                compliance_type?: string | undefined
                offset?: string | undefined
                listing_id?: string | undefined
                limit?: string | undefined
                filter?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/listing_violation_summary': {
      $get:
        | {
            input: { query: { compliance_type?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined }
            }
            output: ComplianceSummary
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { compliance_type?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { query: { compliance_type?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { compliance_type?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID'?: string | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/suppress_listing_violation': {
      $post:
        | {
            input: { json: SuppressViolationRequest }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { json: SuppressViolationRequest }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: SuppressViolationRequest }
            output: {}
            outputFormat: string
            status: 409
          }
        | {
            input: { json: SuppressViolationRequest }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
