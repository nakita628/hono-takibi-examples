import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiVersionLkeClustersClusterIdServicetokenRoute } from '../routes'

const app = new OpenAPIHono()

export const lkeServiceTokensHandler = app.openapi(
  deleteApiVersionLkeClustersClusterIdServicetokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
