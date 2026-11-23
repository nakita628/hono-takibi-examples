import { OpenAPIHono } from '@hono/zod-openapi'
import { getDescribeChangeSetCatalogChangeSetIdRoute } from '../routes'

const app = new OpenAPIHono()

export const describeChangeSetCatalogChangeSetIdHandler = app.openapi(
  getDescribeChangeSetCatalogChangeSetIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
