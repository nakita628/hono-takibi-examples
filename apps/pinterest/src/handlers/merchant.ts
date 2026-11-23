import { OpenAPIHono } from '@hono/zod-openapi'
import { getMerchantMerchantIdStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const merchantHandler = app.openapi(getMerchantMerchantIdStatusRoute, (c) => {
  throw new Error('Not implemented')
})
