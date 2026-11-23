import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSendDiagnosticInterruptRoute,
  postActionSendDiagnosticInterruptRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSendDiagnosticInterruptHandler = app
  .openapi(getActionSendDiagnosticInterruptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSendDiagnosticInterruptRoute, (c) => {
    throw new Error('Not implemented')
  })
