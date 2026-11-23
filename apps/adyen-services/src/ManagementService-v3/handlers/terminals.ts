import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTerminalsRoute,
  getTerminalsTerminalIdTerminalLogosRoute,
  getTerminalsTerminalIdTerminalSettingsRoute,
  patchTerminalsTerminalIdTerminalLogosRoute,
  patchTerminalsTerminalIdTerminalSettingsRoute,
  postTerminalsScheduleActionsRoute,
  postTerminalsTerminalIdReassignRoute,
  postTerminalsTerminalIdTerminalThemesIdApplyRoute,
  postTerminalsTerminalIdTerminalThemesUnapplyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const terminalsHandler = app
  .openapi(getTerminalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTerminalsScheduleActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTerminalsTerminalIdReassignRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(postTerminalsTerminalIdTerminalThemesUnapplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTerminalsTerminalIdTerminalThemesIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
