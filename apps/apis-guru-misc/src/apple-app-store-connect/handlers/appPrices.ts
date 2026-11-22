import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AppPricesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const appPricesHandler = app.openapi(getV1AppPricesIdRoute, (c) => {
  throw new Error('Not implemented')
})
