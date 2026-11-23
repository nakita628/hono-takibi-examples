import { OpenAPIHono } from '@hono/zod-openapi'
import { postTelephoneOrderMerchantIdProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const telephoneOrderHandler = app.openapi(postTelephoneOrderMerchantIdProviderRoute, (c) => {
  throw new Error('Not implemented')
})
