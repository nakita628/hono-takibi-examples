import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1VatCategoriesRoute, postV1VatCategoriesVatRatesRoute } from '../routes'

const app = new OpenAPIHono()

export const vatCategoriesHandler = app
  .openapi(getV1VatCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VatCategoriesVatRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
