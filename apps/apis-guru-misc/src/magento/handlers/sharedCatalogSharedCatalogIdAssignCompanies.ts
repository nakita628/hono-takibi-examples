import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1SharedCatalogSharedCatalogIdAssignCompaniesRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedCatalogSharedCatalogIdAssignCompaniesHandler = app.openapi(
  postV1SharedCatalogSharedCatalogIdAssignCompaniesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
