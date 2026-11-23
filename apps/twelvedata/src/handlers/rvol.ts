import { OpenAPIHono } from '@hono/zod-openapi'
import { getRvolRoute } from '../routes'

const app = new OpenAPIHono()

export const rvolHandler = app.openapi(getRvolRoute, (c) => {
  throw new Error('Not implemented')
})
