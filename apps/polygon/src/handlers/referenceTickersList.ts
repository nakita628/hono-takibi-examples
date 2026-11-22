import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3ReferenceTickersRoute } from '../routes'

const app = new OpenAPIHono()

export const referenceTickersListHandler = app.openapi(getV3ReferenceTickersRoute, (c) => {
  throw new Error('Not implemented')
})
