import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionEnableSerialConsoleAccessRoute,
  postActionEnableSerialConsoleAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionEnableSerialConsoleAccessHandler = app
  .openapi(getActionEnableSerialConsoleAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionEnableSerialConsoleAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
