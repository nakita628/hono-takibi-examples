import { OpenAPIHono } from '@hono/zod-openapi'
import { getImportsImportIdRoute, postImportsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const importsHandler = app
  .openapi(getImportsImportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postImportsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
