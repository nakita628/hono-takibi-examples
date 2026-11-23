import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUserUserIdAvailableobservationheadingsRoute,
  getUserUserIdObservationsCodePatiententeredRoute,
  getUserUserIdObservationsCodeRoute,
  getUserUserIdObservationsRoute,
  getUserUserIdPatiententeredobservationheadingsRoute,
} from '../routes'

export const getUserUserIdAvailableobservationheadingsRouteHandler: RouteHandler<
  typeof getUserUserIdAvailableobservationheadingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUserIdObservationsRouteHandler: RouteHandler<
  typeof getUserUserIdObservationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUserIdObservationsCodeRouteHandler: RouteHandler<
  typeof getUserUserIdObservationsCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUserIdObservationsCodePatiententeredRouteHandler: RouteHandler<
  typeof getUserUserIdObservationsCodePatiententeredRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUserIdPatiententeredobservationheadingsRouteHandler: RouteHandler<
  typeof getUserUserIdPatiententeredobservationheadingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
