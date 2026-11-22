import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postTerminalsTerminalIdTerminalThemesIdApplyRoute,
  postTerminalsTerminalIdTerminalThemesUnapplyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const terminalThemes__terminalLevelHandler = app
  .openapi(postTerminalsTerminalIdTerminalThemesUnapplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTerminalsTerminalIdTerminalThemesIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
