import { OpenAPIHono } from '@hono/zod-openapi'
import { getDocsSchemaIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const docsHandler = app.openapi(getDocsSchemaIndexRoute, (c) => {
  throw new Error('Not implemented')
})
