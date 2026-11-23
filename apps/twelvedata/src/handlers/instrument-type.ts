import { OpenAPIHono } from '@hono/zod-openapi'
import { getInstrumentTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const instrumentTypeHandler = app.openapi(getInstrumentTypeRoute, (c) => {
  throw new Error('Not implemented')
})
