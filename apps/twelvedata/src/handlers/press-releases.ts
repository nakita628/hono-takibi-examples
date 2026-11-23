import type { RouteHandler } from '@hono/zod-openapi'
import type { getPressReleasesRoute } from '../routes'

export const getPressReleasesRouteHandler: RouteHandler<typeof getPressReleasesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
