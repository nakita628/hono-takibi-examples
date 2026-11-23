import { OpenAPIHono } from '@hono/zod-openapi'
import { getTrimaRoute } from '../routes'

const app = new OpenAPIHono()

export const trimaHandler = app.openapi(getTrimaRoute, (c) => {
  throw new Error('Not implemented')
})
