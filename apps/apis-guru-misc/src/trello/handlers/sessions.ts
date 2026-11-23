import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSessionsSocketRoute,
  postSessionsRoute,
  putSessionsIdSessionRoute,
  putSessionsIdSessionStatusRoute,
} from '../routes'

export const postSessionsRouteHandler: RouteHandler<typeof postSessionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getSessionsSocketRouteHandler: RouteHandler<typeof getSessionsSocketRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putSessionsIdSessionRouteHandler: RouteHandler<
  typeof putSessionsIdSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSessionsIdSessionStatusRouteHandler: RouteHandler<
  typeof putSessionsIdSessionStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
