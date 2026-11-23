import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getResourceProofsResPrfIdRoute,
  patchResourceProofsResPrfIdRoute,
  postResourceProofsRoute,
} from '../routes'

export const getResourceProofsResPrfIdRouteHandler: RouteHandler<
  typeof getResourceProofsResPrfIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchResourceProofsResPrfIdRouteHandler: RouteHandler<
  typeof patchResourceProofsResPrfIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postResourceProofsRouteHandler: RouteHandler<typeof postResourceProofsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
