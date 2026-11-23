import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAssistantAlarmsRoute,
  postAssistantA11yModeRoute,
  postAssistantAlarmsDeleteRoute,
  postAssistantAlarmsVolumeRoute,
  postAssistantCheckReadyStatusRoute,
  postAssistantNotificationsRoute,
  postAssistantSetNightModeParamsRoute,
} from '../routes'

export const postAssistantA11yModeRouteHandler: RouteHandler<
  typeof postAssistantA11yModeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssistantAlarmsRouteHandler: RouteHandler<typeof getAssistantAlarmsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAssistantAlarmsDeleteRouteHandler: RouteHandler<
  typeof postAssistantAlarmsDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAssistantAlarmsVolumeRouteHandler: RouteHandler<
  typeof postAssistantAlarmsVolumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAssistantCheckReadyStatusRouteHandler: RouteHandler<
  typeof postAssistantCheckReadyStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAssistantNotificationsRouteHandler: RouteHandler<
  typeof postAssistantNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAssistantSetNightModeParamsRouteHandler: RouteHandler<
  typeof postAssistantSetNightModeParamsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
