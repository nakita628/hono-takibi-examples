import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserUploadsRealmIdStrFilenameRoute, postUserUploadsRoute } from '../routes'

export const postUserUploadsRouteHandler: RouteHandler<typeof postUserUploadsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserUploadsRealmIdStrFilenameRouteHandler: RouteHandler<
  typeof getUserUploadsRealmIdStrFilenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
