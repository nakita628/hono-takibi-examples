import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1SharedCatalogSharedCatalogIdUnassignCompaniesRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedCatalogSharedCatalogIdUnassignCompaniesHandler = app.openapi(
  postV1SharedCatalogSharedCatalogIdUnassignCompaniesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
