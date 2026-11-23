import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPerformerRoute,
  getPerformerSearchRoute,
  postPerformerSearchRoute,
} from '../routes'

export const getPerformerRouteHandler: RouteHandler<typeof getPerformerRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPerformerSearchRouteHandler: RouteHandler<typeof getPerformerSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPerformerSearchRouteHandler: RouteHandler<
  typeof postPerformerSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
