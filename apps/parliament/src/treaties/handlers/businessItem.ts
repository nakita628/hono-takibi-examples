import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiBusinessItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const businessItemHandler = app.openapi(getApiBusinessItemIdRoute, (c) => {
  throw new Error('Not implemented')
})
