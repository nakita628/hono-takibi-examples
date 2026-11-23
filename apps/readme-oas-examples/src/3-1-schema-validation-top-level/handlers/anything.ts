import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnythingNumbersRoute } from '../routes'

const app = new OpenAPIHono()

export const anythingHandler = app.openapi(getAnythingNumbersRoute, (c) => {
  throw new Error('Not implemented')
})
