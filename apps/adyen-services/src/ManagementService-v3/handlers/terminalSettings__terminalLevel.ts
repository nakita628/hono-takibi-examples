import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTerminalsTerminalIdTerminalLogosRoute,
  getTerminalsTerminalIdTerminalSettingsRoute,
  patchTerminalsTerminalIdTerminalLogosRoute,
  patchTerminalsTerminalIdTerminalSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const terminalSettings__terminalLevelHandler = app
  .openapi(getTerminalsTerminalIdTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTerminalsTerminalIdTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTerminalsTerminalIdTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTerminalsTerminalIdTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
