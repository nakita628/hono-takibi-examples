import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserinfoRoute } from '../routes'

export const getUserinfoRouteHandler: RouteHandler<typeof getUserinfoRoute> = async (c) => {
  throw new Error('Not implemented')
}
