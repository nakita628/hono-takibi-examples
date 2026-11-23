import type { RouteHandler } from '@hono/zod-openapi'
import type { postTemporaryVolumeCredentialsRoute } from '../routes'

export const postTemporaryVolumeCredentialsRouteHandler: RouteHandler<
  typeof postTemporaryVolumeCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
