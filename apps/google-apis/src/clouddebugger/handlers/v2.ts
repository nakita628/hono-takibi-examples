import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdRoute,
  getV2ControllerDebuggeesDebuggeeIdBreakpointsRoute,
  getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdRoute,
  getV2DebuggerDebuggeesDebuggeeIdBreakpointsRoute,
  getV2DebuggerDebuggeesRoute,
  postV2ControllerDebuggeesRegisterRoute,
  postV2DebuggerDebuggeesDebuggeeIdBreakpointsSetRoute,
  putV2ControllerDebuggeesDebuggeeIdBreakpointsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2ControllerDebuggeesRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ControllerDebuggeesDebuggeeIdBreakpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ControllerDebuggeesDebuggeeIdBreakpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
