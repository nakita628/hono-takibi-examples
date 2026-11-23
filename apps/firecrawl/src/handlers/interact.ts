import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteInteractSessionIdRoute,
  getInteractRoute,
  postInteractRoute,
  postInteractSessionIdExecuteRoute,
} from '../routes'

export const postInteractRouteHandler: RouteHandler<typeof postInteractRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInteractRouteHandler: RouteHandler<typeof getInteractRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postInteractSessionIdExecuteRouteHandler: RouteHandler<
  typeof postInteractSessionIdExecuteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteInteractSessionIdRouteHandler: RouteHandler<
  typeof deleteInteractSessionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
