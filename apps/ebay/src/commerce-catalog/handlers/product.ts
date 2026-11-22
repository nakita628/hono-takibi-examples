import { OpenAPIHono } from '@hono/zod-openapi'
import { getProductEpidRoute } from '../routes'

const app = new OpenAPIHono()

export const productHandler = app.openapi(getProductEpidRoute, (c) => {
  throw new Error('Not implemented')
})
