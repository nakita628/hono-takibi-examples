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
} from './routes'
import {
  deleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdRouteHandler,
  getV2ControllerDebuggeesDebuggeeIdBreakpointsRouteHandler,
  getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdRouteHandler,
  getV2DebuggerDebuggeesDebuggeeIdBreakpointsRouteHandler,
  getV2DebuggerDebuggeesRouteHandler,
  postV2ControllerDebuggeesRegisterRouteHandler,
  postV2DebuggerDebuggeesDebuggeeIdBreakpointsSetRouteHandler,
  putV2ControllerDebuggeesDebuggeeIdBreakpointsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2ControllerDebuggeesRegisterRoute, postV2ControllerDebuggeesRegisterRouteHandler)
  .openapi(
    getV2ControllerDebuggeesDebuggeeIdBreakpointsRoute,
    getV2ControllerDebuggeesDebuggeeIdBreakpointsRouteHandler,
  )
  .openapi(
    putV2ControllerDebuggeesDebuggeeIdBreakpointsIdRoute,
    putV2ControllerDebuggeesDebuggeeIdBreakpointsIdRouteHandler,
  )
  .openapi(getV2DebuggerDebuggeesRoute, getV2DebuggerDebuggeesRouteHandler)
  .openapi(
    getV2DebuggerDebuggeesDebuggeeIdBreakpointsRoute,
    getV2DebuggerDebuggeesDebuggeeIdBreakpointsRouteHandler,
  )
  .openapi(
    postV2DebuggerDebuggeesDebuggeeIdBreakpointsSetRoute,
    postV2DebuggerDebuggeesDebuggeeIdBreakpointsSetRouteHandler,
  )
  .openapi(
    deleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdRoute,
    deleteV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdRouteHandler,
  )
  .openapi(
    getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdRoute,
    getV2DebuggerDebuggeesDebuggeeIdBreakpointsBreakpointIdRouteHandler,
  )

export default app
