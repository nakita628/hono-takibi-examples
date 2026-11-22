import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdRoute,
  getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdRoute,
  getV2DebuggerDebuggeesDebuggeeIdBreakpointsRoute,
  getV2DebuggerDebuggeesRoute,
  postV2DebuggerDebuggeesDebuggeeIdBreakpointsSetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const debuggerHandler = app
  .openapi(getV2DebuggerDebuggeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DebuggerDebuggeesDebuggeeIdBreakpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DebuggerDebuggeesDebuggeeIdBreakpointsSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
