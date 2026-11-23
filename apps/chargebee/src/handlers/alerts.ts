import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAlertsAlertIdAlertStatusesRoute,
  getAlertsAlertIdRoute,
  getAlertsRoute,
  postAlertsAlertIdDeleteRoute,
  postAlertsAlertIdRoute,
  postAlertsRoute,
} from '../routes'

export const getAlertsAlertIdRouteHandler: RouteHandler<typeof getAlertsAlertIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAlertsAlertIdRouteHandler: RouteHandler<typeof postAlertsAlertIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAlertsAlertIdDeleteRouteHandler: RouteHandler<
  typeof postAlertsAlertIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlertsRouteHandler: RouteHandler<typeof getAlertsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAlertsRouteHandler: RouteHandler<typeof postAlertsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlertsAlertIdAlertStatusesRouteHandler: RouteHandler<
  typeof getAlertsAlertIdAlertStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
