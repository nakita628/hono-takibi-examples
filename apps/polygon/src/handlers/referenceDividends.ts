import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3ReferenceDividendsRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceDividendsHandler = app.openapi(getV3ReferenceDividendsRoute, (c) => {
  throw new Error('Not implemented')
})
