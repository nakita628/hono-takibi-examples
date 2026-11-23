import { OpenAPIHono } from '@hono/zod-openapi'
import { getImportErrorsImportErrorIdRoute, getImportErrorsRoute } from '../routes'

const app = new OpenAPIHono()

export const importErrorsHandler = app
  .openapi(getImportErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getImportErrorsImportErrorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
