import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3LogFileUpdateFilenameRoute, getApiV3LogFileUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const updateLogFileHandler = app
  .openapi(getApiV3LogFileUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LogFileUpdateFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
