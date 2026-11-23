type Image = {
  height?: string | undefined
  imageUrl?: string | undefined
  text?: string | undefined
  width?: string | undefined
}
type Amount = { currency?: string | undefined; value?: string | undefined }
type MarketingPrice = {
  discountAmount?: Amount | undefined
  discountPercentage?: string | undefined
  originalPrice?: Amount | undefined
  priceTreatment?: string | undefined
}
type ShippingOption = { shippingCost?: Amount | undefined; shippingCostType?: string | undefined }
type DealItem = {
  additionalImages?: Image[] | undefined
  categoryAncestorIds?: string[] | undefined
  categoryId?: string | undefined
  commissionable?: boolean | undefined
  dealAffiliateWebUrl?: string | undefined
  dealEndDate?: string | undefined
  dealStartDate?: string | undefined
  dealWebUrl?: string | undefined
  energyEfficiencyClass?: string | undefined
  image?: Image | undefined
  itemAffiliateWebUrl?: string | undefined
  itemGroupId?: string | undefined
  itemGroupType?: string | undefined
  itemId?: string | undefined
  itemWebUrl?: string | undefined
  legacyItemId?: string | undefined
  marketingPrice?: MarketingPrice | undefined
  price?: Amount | undefined
  qualifiedPrograms?: string[] | undefined
  shippingOptions?: ShippingOption[] | undefined
  title?: string | undefined
  unitPrice?: Amount | undefined
  unitPricingMeasure?: string | undefined
}
type DealItemSearchResponse = {
  dealItems?: DealItem[] | undefined
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  total?: number | undefined
}
type Terms = { fullText?: string | undefined; summary?: string | undefined }
type Coupon = { redemptionCode?: string | undefined; terms?: Terms | undefined }
type Event = {
  applicableCoupons?: Coupon[] | undefined
  description?: string | undefined
  endDate?: string | undefined
  eventAffiliateWebUrl?: string | undefined
  eventId?: string | undefined
  eventWebUrl?: string | undefined
  images?: Image[] | undefined
  startDate?: string | undefined
  terms?: Terms | undefined
  title?: string | undefined
}
type EventSearchResponse = {
  events?: Event[] | undefined
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  total?: number | undefined
}
type EventItem = {
  additionalImages?: Image[] | undefined
  categoryAncestorIds?: string[] | undefined
  categoryId?: string | undefined
  energyEfficiencyClass?: string | undefined
  eventId?: string | undefined
  image?: Image | undefined
  itemAffiliateWebUrl?: string | undefined
  itemGroupId?: string | undefined
  itemGroupType?: string | undefined
  itemId?: string | undefined
  itemWebUrl?: string | undefined
  legacyItemId?: string | undefined
  marketingPrice?: MarketingPrice | undefined
  price?: Amount | undefined
  qualifiedPrograms?: string[] | undefined
  shippingOptions?: ShippingOption[] | undefined
  title?: string | undefined
  unitPrice?: Amount | undefined
  unitPricingMeasure?: string | undefined
}
type EventItemSearchResponse = {
  eventItems?: EventItem[] | undefined
  href?: string | undefined
  limit?: number | undefined
  next?: string | undefined
  offset?: number | undefined
  prev?: string | undefined
  total?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/deal_item': {
      $get:
        | {
            input: {
              query: {
                category_ids?: string | undefined
                commissionable?: string | undefined
                delivery_country?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } }
            output: DealItemSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                category_ids?: string | undefined
                commissionable?: string | undefined
                delivery_country?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                category_ids?: string | undefined
                commissionable?: string | undefined
                delivery_country?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                category_ids?: string | undefined
                commissionable?: string | undefined
                delivery_country?: string | undefined
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/event': {
      $get:
        | {
            input: { query: { limit?: string | undefined; offset?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: EventSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: string | undefined; offset?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { limit?: string | undefined; offset?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { limit?: string | undefined; offset?: string | undefined } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/event/:event_id': {
      $get:
        | {
            input: { param: { event_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: Event
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { event_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { event_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { event_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { event_id: string } } & {
              header: { 'X-EBAY-C-MARKETPLACE-ID': string }
            }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/event_item': {
      $get:
        | {
            input: {
              query: {
                category_ids?: string | undefined
                delivery_country?: string | undefined
                event_ids: string
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } }
            output: EventItemSearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                category_ids?: string | undefined
                delivery_country?: string | undefined
                event_ids: string
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                category_ids?: string | undefined
                delivery_country?: string | undefined
                event_ids: string
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                category_ids?: string | undefined
                delivery_country?: string | undefined
                event_ids: string
                limit?: string | undefined
                offset?: string | undefined
              }
            } & { header: { 'X-EBAY-C-MARKETPLACE-ID': string } }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  },
  '/'
>
export default routes
