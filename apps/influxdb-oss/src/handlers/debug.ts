import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDebugPprofAllocsRoute,
  getDebugPprofAllRoute,
  getDebugPprofBlockRoute,
  getDebugPprofCmdlineRoute,
  getDebugPprofGoroutineRoute,
  getDebugPprofHeapRoute,
  getDebugPprofMutexRoute,
  getDebugPprofProfileRoute,
  getDebugPprofThreadcreateRoute,
  getDebugPprofTraceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const debugHandler = app
  .openapi(getDebugPprofAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDebugPprofAllocsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDebugPprofBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDebugPprofCmdlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDebugPprofGoroutineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDebugPprofHeapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDebugPprofMutexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDebugPprofProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDebugPprofThreadcreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDebugPprofTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
