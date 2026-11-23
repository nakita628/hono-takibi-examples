import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDestinationsNameRoute,
  getDestinationsNameRoute,
  getDestinationsRoute,
  patchDestinationsNameRoute,
  postDestinationsRoute,
} from '../routes'

export const postDestinationsRouteHandler: RouteHandler<typeof postDestinationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDestinationsRouteHandler: RouteHandler<typeof getDestinationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDestinationsNameRouteHandler: RouteHandler<
  typeof deleteDestinationsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDestinationsNameRouteHandler: RouteHandler<
  typeof getDestinationsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDestinationsNameRouteHandler: RouteHandler<
  typeof patchDestinationsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
