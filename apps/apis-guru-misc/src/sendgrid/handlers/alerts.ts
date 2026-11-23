import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAlertsAlertIdRoute,
  getAlertsAlertIdRoute,
  getAlertsRoute,
  patchAlertsAlertIdRoute,
  postAlertsRoute,
} from '../routes'

export const getAlertsRouteHandler: RouteHandler<typeof getAlertsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAlertsRouteHandler: RouteHandler<typeof postAlertsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAlertsAlertIdRouteHandler: RouteHandler<
  typeof deleteAlertsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlertsAlertIdRouteHandler: RouteHandler<typeof getAlertsAlertIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchAlertsAlertIdRouteHandler: RouteHandler<typeof patchAlertsAlertIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
