import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3CollectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app.openapi(getV3CollectionsRoute, (c) => {
  throw new Error('Not implemented')
})
