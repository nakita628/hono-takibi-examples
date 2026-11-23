import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetSerialConsoleAccessStatusRoute,
  postActionGetSerialConsoleAccessStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetSerialConsoleAccessStatusHandler = app
  .openapi(getActionGetSerialConsoleAccessStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetSerialConsoleAccessStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
