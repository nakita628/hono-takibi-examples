import type { RouteHandler } from '@hono/zod-openapi'
import type { getEmailsRoute } from '../routes'

export const getEmailsRouteHandler: RouteHandler<typeof getEmailsRoute> = async (c) => {
  throw new Error('Not implemented')
}
