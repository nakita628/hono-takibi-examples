import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiValuesInPastMultipleIdRoute } from '../routes'

const app = new OpenAPIHono()

export const valuesInPastMultipleHandler = app.openapi(getApiValuesInPastMultipleIdRoute, (c) => {
  throw new Error('Not implemented')
})
