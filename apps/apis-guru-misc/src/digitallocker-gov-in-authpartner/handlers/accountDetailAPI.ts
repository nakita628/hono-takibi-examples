import { OpenAPIHono } from '@hono/zod-openapi'
import { getOauth21UserRoute } from '../routes'

const app = new OpenAPIHono()

export const accountDetailAPIHandler = app.openapi(getOauth21UserRoute, (c) => {
  throw new Error('Not implemented')
})
