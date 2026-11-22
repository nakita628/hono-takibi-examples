import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1SharedCatalogSharedCatalogIdCompaniesRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedCatalogSharedCatalogIdCompaniesHandler = app.openapi(
  getV1SharedCatalogSharedCatalogIdCompaniesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
