import { OpenAPIHono } from '@hono/zod-openapi'
import { postVerifyShopperTaxIdentificationRoute } from '../routes'

const app = new OpenAPIHono()

export const verifyShopperTaxIdentificationHandler = app.openapi(
  postVerifyShopperTaxIdentificationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
