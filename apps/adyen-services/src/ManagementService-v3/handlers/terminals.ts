import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getTerminalsRouteHandler: RouteHandler<typeof getTerminalsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTerminalsScheduleActionsRouteHandler: RouteHandler<
  typeof postTerminalsScheduleActionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTerminalsTerminalIdReassignRouteHandler: RouteHandler<
  typeof postTerminalsTerminalIdReassignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTerminalsTerminalIdTerminalLogosRouteHandler: RouteHandler<
  typeof getTerminalsTerminalIdTerminalLogosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTerminalsTerminalIdTerminalLogosRouteHandler: RouteHandler<
  typeof patchTerminalsTerminalIdTerminalLogosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTerminalsTerminalIdTerminalSettingsRouteHandler: RouteHandler<
  typeof getTerminalsTerminalIdTerminalSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTerminalsTerminalIdTerminalSettingsRouteHandler: RouteHandler<
  typeof patchTerminalsTerminalIdTerminalSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTerminalsTerminalIdTerminalThemesUnapplyRouteHandler: RouteHandler<
  typeof postTerminalsTerminalIdTerminalThemesUnapplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTerminalsTerminalIdTerminalThemesIdApplyRouteHandler: RouteHandler<
  typeof postTerminalsTerminalIdTerminalThemesIdApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
