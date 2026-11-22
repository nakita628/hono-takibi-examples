import { OpenAPIHono } from '@hono/zod-openapi'
import { getSecdefRoute } from '../routes'

const app = new OpenAPIHono()

export const financialInstrumentDefinitionsHandler = app.openapi(getSecdefRoute, (c) => {
  throw new Error('Not implemented')
})
