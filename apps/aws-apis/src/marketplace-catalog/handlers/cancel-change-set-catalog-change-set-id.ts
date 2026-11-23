import { OpenAPIHono } from '@hono/zod-openapi'
import { patchCancelChangeSetCatalogChangeSetIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cancelChangeSetCatalogChangeSetIdHandler = app.openapi(
  patchCancelChangeSetCatalogChangeSetIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
