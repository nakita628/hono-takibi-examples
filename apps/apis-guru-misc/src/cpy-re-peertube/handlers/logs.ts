import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1ServerAuditLogsRoute,
  getApiV1ServerLogsRoute,
  postApiV1ServerLogsClientRoute,
} from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app
  .openapi(getApiV1ServerAuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ServerLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ServerLogsClientRoute, (c) => {
    throw new Error('Not implemented')
  })
