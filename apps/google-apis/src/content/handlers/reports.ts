import { OpenAPIHono } from '@hono/zod-openapi'
import { postMerchantIdReportsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app.openapi(postMerchantIdReportsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
