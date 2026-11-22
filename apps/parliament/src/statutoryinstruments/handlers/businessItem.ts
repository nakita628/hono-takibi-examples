import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1BusinessItemIdRoute } from '../routes'

const app = new OpenAPIHono()

export const businessItemHandler = app.openapi(getApiV1BusinessItemIdRoute, (c) => {
  throw new Error('Not implemented')
})
