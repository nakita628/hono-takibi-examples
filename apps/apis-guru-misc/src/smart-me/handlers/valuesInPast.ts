import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiValuesInPastIdRoute } from '../routes'

const app = new OpenAPIHono()

export const valuesInPastHandler = app.openapi(getApiValuesInPastIdRoute, (c) => {
  throw new Error('Not implemented')
})
