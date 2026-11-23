import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDestinationsArnRoute,
  getDestinationsArnRoute,
  getDestinationsRoute,
  patchDestinationsRoute,
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

export const patchDestinationsRouteHandler: RouteHandler<typeof patchDestinationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteDestinationsArnRouteHandler: RouteHandler<
  typeof deleteDestinationsArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDestinationsArnRouteHandler: RouteHandler<typeof getDestinationsArnRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
