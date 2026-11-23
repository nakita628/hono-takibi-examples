import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteResourceControlsIdRoute,
  postResourceControlsRoute,
  putResourceControlsIdRoute,
} from '../routes'

export const postResourceControlsRouteHandler: RouteHandler<
  typeof postResourceControlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteResourceControlsIdRouteHandler: RouteHandler<
  typeof deleteResourceControlsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putResourceControlsIdRouteHandler: RouteHandler<
  typeof putResourceControlsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
