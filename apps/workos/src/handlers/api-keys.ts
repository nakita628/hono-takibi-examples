import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiKeysIdRoute,
  postApiKeysIdExpireRoute,
  postApiKeysValidationsRoute,
} from '../routes'

export const postApiKeysValidationsRouteHandler: RouteHandler<
  typeof postApiKeysValidationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiKeysIdRouteHandler: RouteHandler<typeof deleteApiKeysIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiKeysIdExpireRouteHandler: RouteHandler<
  typeof postApiKeysIdExpireRoute
> = async (c) => {
  throw new Error('Not implemented')
}
