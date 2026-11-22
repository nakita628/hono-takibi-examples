import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiValuesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const valuesHandler = app.openapi(getApiValuesIdRoute, (c) => {
  throw new Error('Not implemented')
})
