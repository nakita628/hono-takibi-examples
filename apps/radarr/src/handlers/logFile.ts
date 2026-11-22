import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3LogFileFilenameRoute, getApiV3LogFileRoute } from '../routes'

const app = new OpenAPIHono()

export const logFileHandler = app
  .openapi(getApiV3LogFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LogFileFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
