import { OpenAPIHono } from '@hono/zod-openapi'
import { getMerchantMerchantIdStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const merchantStatusHandler = app.openapi(getMerchantMerchantIdStatusRoute, (c) => {
  throw new Error('Not implemented')
})
