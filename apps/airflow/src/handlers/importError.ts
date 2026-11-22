import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2ImportErrorsImportErrorIdRoute, getApiV2ImportErrorsRoute } from '../routes'

const app = new OpenAPIHono()

export const importErrorHandler = app
  .openapi(getApiV2ImportErrorsImportErrorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ImportErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
