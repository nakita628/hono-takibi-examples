import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAnythingStringsRoute,
  postAnythingStringsRoute,
  putAnythingStringsRoute,
} from '../routes'

export const postAnythingStringsRouteHandler: RouteHandler<
  typeof postAnythingStringsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnythingStringsRouteHandler: RouteHandler<typeof getAnythingStringsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putAnythingStringsRouteHandler: RouteHandler<typeof putAnythingStringsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
