import { OpenAPIHono } from '@hono/zod-openapi'
import { getDescribeEntityCatalogEntityIdRoute } from '../routes'

const app = new OpenAPIHono()

export const describeEntityCatalogEntityIdHandler = app.openapi(
  getDescribeEntityCatalogEntityIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
