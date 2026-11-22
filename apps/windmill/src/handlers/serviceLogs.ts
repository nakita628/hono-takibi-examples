import { OpenAPIHono } from '@hono/zod-openapi'
import { getServiceLogsGetLogFilePathRoute, getServiceLogsListFilesRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceLogsHandler = app
  .openapi(getServiceLogsListFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServiceLogsGetLogFilePathRoute, (c) => {
    throw new Error('Not implemented')
  })
