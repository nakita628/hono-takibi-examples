import type { RouteHandler } from '@hono/zod-openapi'
import type { getSshRoute } from '../routes'

export const getSshRouteHandler: RouteHandler<typeof getSshRoute> = async (c) => {
  throw new Error('Not implemented')
}
