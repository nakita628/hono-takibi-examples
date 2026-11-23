import type { RouteHandler } from '@hono/zod-openapi'
import type { postV3TemplatesRoute } from '../routes'

export const postV3TemplatesRouteHandler: RouteHandler<typeof postV3TemplatesRoute> = async (c) => {
  throw new Error('Not implemented')
}
