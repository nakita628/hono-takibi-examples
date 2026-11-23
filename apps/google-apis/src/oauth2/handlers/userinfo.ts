import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserinfoV2MeRoute } from '../routes'

export const getUserinfoV2MeRouteHandler: RouteHandler<typeof getUserinfoV2MeRoute> = async (c) => {
  throw new Error('Not implemented')
}
