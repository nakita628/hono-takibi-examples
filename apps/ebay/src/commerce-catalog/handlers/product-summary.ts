import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductSummarySearchRoute } from '../routes'

const app = new OpenAPIHono()

export const productSummaryHandler = app.openapi(getProductSummarySearchRoute, (c) => {
  throw new Error('Not implemented')
})
