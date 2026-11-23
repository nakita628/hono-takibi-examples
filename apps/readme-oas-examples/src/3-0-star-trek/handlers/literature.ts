import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLiteratureRoute,
  getLiteratureSearchRoute,
  postLiteratureSearchRoute,
} from '../routes'

export const getLiteratureRouteHandler: RouteHandler<typeof getLiteratureRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLiteratureSearchRouteHandler: RouteHandler<
  typeof getLiteratureSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLiteratureSearchRouteHandler: RouteHandler<
  typeof postLiteratureSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
