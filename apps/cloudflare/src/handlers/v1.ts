import type { RouteHandler } from '@hono/zod-openapi'
import type { postV1VerifyRoute } from '../routes'

export const postV1VerifyRouteHandler: RouteHandler<typeof postV1VerifyRoute> = async (c) => {
  throw new Error('Not implemented')
}
