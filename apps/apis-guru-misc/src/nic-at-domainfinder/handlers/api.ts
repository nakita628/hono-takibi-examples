import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1SuggestRoute } from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app.openapi(getApiV1SuggestRoute, (c) => {
  throw new Error('Not implemented')
})
