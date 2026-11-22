import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2ControllerDebuggeesDebuggeeIdBreakpointsRoute,
  postV2ControllerDebuggeesRegisterRoute,
  putV2ControllerDebuggeesDebuggeeIdBreakpointsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const controllerHandler = app
  .openapi(postV2ControllerDebuggeesRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ControllerDebuggeesDebuggeeIdBreakpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2ControllerDebuggeesDebuggeeIdBreakpointsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
