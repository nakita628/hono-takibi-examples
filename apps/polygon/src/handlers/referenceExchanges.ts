import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3ReferenceExchangesRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceExchangesHandler = app.openapi(getV3ReferenceExchangesRoute, (c) => {
  throw new Error('Not implemented')
})
