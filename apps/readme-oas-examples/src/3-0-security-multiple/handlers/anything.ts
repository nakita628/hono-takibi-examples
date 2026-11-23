import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAnythingAndOrRoute,
  postAnythingAndRoute,
  postAnythingManyAndOrRoute,
  postAnythingOrRoute,
} from '../routes'

export const postAnythingAndRouteHandler: RouteHandler<typeof postAnythingAndRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnythingOrRouteHandler: RouteHandler<typeof postAnythingOrRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnythingAndOrRouteHandler: RouteHandler<typeof postAnythingAndOrRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAnythingManyAndOrRouteHandler: RouteHandler<
  typeof postAnythingManyAndOrRoute
> = async (c) => {
  throw new Error('Not implemented')
}
