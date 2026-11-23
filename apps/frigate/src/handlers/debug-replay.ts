import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDebugReplayStatusRoute,
  postDebugReplayStartFromExportRoute,
  postDebugReplayStartRoute,
  postDebugReplayStopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const debugReplayHandler = app
  .openapi(postDebugReplayStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDebugReplayStartFromExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDebugReplayStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDebugReplayStopRoute, (c) => {
    throw new Error('Not implemented')
  })
