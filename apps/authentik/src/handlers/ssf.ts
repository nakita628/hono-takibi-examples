import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSsfStreamsUuidIndexRoute,
  getSsfStreamsIndexRoute,
  getSsfStreamsUuidIndexRoute,
} from '../routes'

export const getSsfStreamsIndexRouteHandler: RouteHandler<typeof getSsfStreamsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSsfStreamsUuidIndexRouteHandler: RouteHandler<
  typeof getSsfStreamsUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSsfStreamsUuidIndexRouteHandler: RouteHandler<
  typeof deleteSsfStreamsUuidIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
