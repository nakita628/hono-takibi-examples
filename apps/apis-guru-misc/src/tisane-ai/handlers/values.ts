import { OpenAPIHono } from '@hono/zod-openapi'
import { getValuesRoute } from '../routes'

const app = new OpenAPIHono()

export const valuesHandler = app.openapi(getValuesRoute, (c) => {
  throw new Error('Not implemented')
})
