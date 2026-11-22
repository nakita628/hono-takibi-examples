import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2AccountRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app.openapi(getV2AccountRoute, (c) => {
  throw new Error('Not implemented')
})
