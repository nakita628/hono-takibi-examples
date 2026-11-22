import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3ManualimportRoute, postApiV3ManualimportRoute } from '../routes'

const app = new OpenAPIHono()

export const manualImportHandler = app
  .openapi(getApiV3ManualimportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ManualimportRoute, (c) => {
    throw new Error('Not implemented')
  })
