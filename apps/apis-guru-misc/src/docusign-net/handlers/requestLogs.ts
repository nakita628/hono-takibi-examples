import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21DiagnosticsRequestLogsRoute,
  getV21DiagnosticsRequestLogsRequestLogIdRoute,
  getV21DiagnosticsRequestLogsRoute,
  getV21DiagnosticsSettingsRoute,
  putV21DiagnosticsSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requestLogsHandler = app
  .openapi(deleteV21DiagnosticsRequestLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21DiagnosticsRequestLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21DiagnosticsRequestLogsRequestLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21DiagnosticsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21DiagnosticsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
