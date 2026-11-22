import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1SharedCatalogIndexRoute, postV1SharedCatalogRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedCatalogHandler = app
  .openapi(postV1SharedCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SharedCatalogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
