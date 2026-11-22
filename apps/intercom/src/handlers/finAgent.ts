import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postFinAskRoute,
  postFinCapabilitiesRoute,
  postFinCsatRoute,
  postFinEscalateRoute,
  postFinProceduresProcedureIdRunRoute,
  postFinReplyRoute,
  postFinStartRoute,
} from '../routes'

const app = new OpenAPIHono()

export const finAgentHandler = app
  .openapi(postFinStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFinReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFinCsatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFinCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFinAskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFinProceduresProcedureIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFinEscalateRoute, (c) => {
    throw new Error('Not implemented')
  })
