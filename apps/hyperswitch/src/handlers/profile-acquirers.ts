import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postProfileAcquirersProfileIdProfileAcquirerIdRoute,
  postProfileAcquirersRoute,
} from '../routes'

export const postProfileAcquirersRouteHandler: RouteHandler<
  typeof postProfileAcquirersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProfileAcquirersProfileIdProfileAcquirerIdRouteHandler: RouteHandler<
  typeof postProfileAcquirersProfileIdProfileAcquirerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
