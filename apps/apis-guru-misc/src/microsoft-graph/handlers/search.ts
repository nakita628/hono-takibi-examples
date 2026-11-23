import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSearchRoute,
  patchSearchRoute,
  postSearchMicrosoftGraphQueryRoute,
} from '../routes'

export const getSearchRouteHandler: RouteHandler<typeof getSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchSearchRouteHandler: RouteHandler<typeof patchSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSearchMicrosoftGraphQueryRouteHandler: RouteHandler<
  typeof postSearchMicrosoftGraphQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
