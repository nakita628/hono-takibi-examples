import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAchPrenotificationsAchPrenotificationIdRoute,
  getAchPrenotificationsRoute,
  postAchPrenotificationsRoute,
} from '../routes'

export const getAchPrenotificationsRouteHandler: RouteHandler<
  typeof getAchPrenotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAchPrenotificationsRouteHandler: RouteHandler<
  typeof postAchPrenotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAchPrenotificationsAchPrenotificationIdRouteHandler: RouteHandler<
  typeof getAchPrenotificationsAchPrenotificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
