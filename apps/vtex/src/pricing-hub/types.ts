type Items = {
  brandId: string
  categoriesIds: string[]
  index: number
  priceTableIds: string[]
  quantity: number
  sellerId: string
  skuId: string
}[]
type GetPricesRequestObject = {
  UtmCampaign?: string | undefined
  UtmInternalCampaign?: string | undefined
  UtmMedium?: string | undefined
  UtmSource?: string | undefined
  email: string
  items: Items
  salesChannel: string
}
type Item1 = {
  costPrice: number
  index: number
  listPrice: number
  price: number
  priceTable: string
  priceValidUntil: string
  skuId: string
}
type Response2 = { items: Item1[] }
type ConfigExternalPriceSourceRequest = { active?: boolean | undefined; appName: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/pricing-hub/prices': {
      $post: {
        input: { query: { accountName: string } } & {
          header: {
            Accept: string
            'Content-Type': string
            'X-VTEX-API-AppKey': string
            'X-VTEX-API-AppToken': string
          }
        } & { json: GetPricesRequestObject }
        output: Response2
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/config': {
      $put: {
        input: { query: { an?: string | undefined } } & {
          header: {
            Accept: string
            'Content-Type': string
            'X-VTEX-API-AppKey': string
            'X-VTEX-API-AppToken': string
          }
        } & { json: ConfigExternalPriceSourceRequest }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
