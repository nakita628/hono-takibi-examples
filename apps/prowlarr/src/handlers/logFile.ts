import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1LogFileFilenameRoute, getApiV1LogFileRoute } from '../routes'

const app = new OpenAPIHono()

export const logFileHandler = app
  .openapi(getApiV1LogFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1LogFileFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
