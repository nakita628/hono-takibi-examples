import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ManualimportRoute, postApiV1ManualimportRoute } from '../routes'

const app = new OpenAPIHono()

export const manualImportHandler = app
  .openapi(postApiV1ManualimportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ManualimportRoute, (c) => {
    throw new Error('Not implemented')
  })
