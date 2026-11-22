import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3ReferenceTickersTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceTickersTypesHandler = app.openapi(getV3ReferenceTickersTypesRoute, (c) => {
  throw new Error('Not implemented')
})
