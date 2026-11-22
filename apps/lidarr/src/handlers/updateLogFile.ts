import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1LogFileUpdateFilenameRoute, getApiV1LogFileUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const updateLogFileHandler = app
  .openapi(getApiV1LogFileUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogFileUpdateFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
