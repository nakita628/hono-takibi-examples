import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1SharedCatalogIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedCatalogIdHandler = app.openapi(putV1SharedCatalogIdRoute, (c) => {
  throw new Error('Not implemented')
})
