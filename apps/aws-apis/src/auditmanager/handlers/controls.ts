import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteControlsControlIdRoute,
  getControlsControlIdRoute,
  postControlsRoute,
  putControlsControlIdRoute,
} from '../routes'

export const postControlsRouteHandler: RouteHandler<typeof postControlsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteControlsControlIdRouteHandler: RouteHandler<
  typeof deleteControlsControlIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getControlsControlIdRouteHandler: RouteHandler<
  typeof getControlsControlIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putControlsControlIdRouteHandler: RouteHandler<
  typeof putControlsControlIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
