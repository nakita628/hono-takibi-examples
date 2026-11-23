import type { RouteHandler } from '@hono/zod-openapi'
import type { postV1betaTokenRoute } from '../routes'

export const postV1betaTokenRouteHandler: RouteHandler<typeof postV1betaTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
