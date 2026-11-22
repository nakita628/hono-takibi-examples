import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1InformationSchemaTablesTableIdRefreshRoute } from '../routes'

const app = new OpenAPIHono()

export const informationSchemaTablesHandler = app.openapi(
  postV1InformationSchemaTablesTableIdRefreshRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
