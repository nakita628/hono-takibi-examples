import { OpenAPIHono } from '@hono/zod-openapi'
import { getDescribeChangeSetCatalogChangeSetIdRoute } from '../routes'

const app = new OpenAPIHono()

export const DescribeChangeSetCatalogChangeSetIdHandler = app.openapi(
  getDescribeChangeSetCatalogChangeSetIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
