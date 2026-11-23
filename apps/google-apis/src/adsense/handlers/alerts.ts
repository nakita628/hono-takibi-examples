import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteAlertsAlertIdRoute, getAlertsRoute } from '../routes'

export const getAlertsRouteHandler: RouteHandler<typeof getAlertsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAlertsAlertIdRouteHandler: RouteHandler<
  typeof deleteAlertsAlertIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
