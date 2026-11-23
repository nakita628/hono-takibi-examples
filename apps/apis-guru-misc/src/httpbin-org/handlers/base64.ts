import type { RouteHandler } from '@hono/zod-openapi'
import type { getBase64ValueRoute } from '../routes'

export const getBase64ValueRouteHandler: RouteHandler<typeof getBase64ValueRoute> = async (c) => {
  throw new Error('Not implemented')
}
