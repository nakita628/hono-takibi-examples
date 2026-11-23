import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRidesPagePagePerPagePerPageRoute,
  postRidesPagePagePerPagePerPageRoute,
} from '../routes'

export const getRidesPagePagePerPagePerPageRouteHandler: RouteHandler<
  typeof getRidesPagePagePerPagePerPageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRidesPagePagePerPagePerPageRouteHandler: RouteHandler<
  typeof postRidesPagePagePerPagePerPageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
