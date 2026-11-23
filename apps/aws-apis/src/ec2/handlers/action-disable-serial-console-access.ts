import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDisableSerialConsoleAccessRoute,
  postActionDisableSerialConsoleAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDisableSerialConsoleAccessHandler = app
  .openapi(getActionDisableSerialConsoleAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDisableSerialConsoleAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
