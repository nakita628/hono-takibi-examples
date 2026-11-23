import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteSnapPacksSnapPackIdRoute,
  getSnapPacksRoute,
  getSnapPacksSnapPackIdRoute,
  postSnapPacksRoute,
} from '../routes'

export const getSnapPacksSnapPackIdRouteHandler: RouteHandler<
  typeof getSnapPacksSnapPackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteSnapPacksSnapPackIdRouteHandler: RouteHandler<
  typeof deleteSnapPacksSnapPackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSnapPacksRouteHandler: RouteHandler<typeof getSnapPacksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSnapPacksRouteHandler: RouteHandler<typeof postSnapPacksRoute> = async (c) => {
  throw new Error('Not implemented')
}
