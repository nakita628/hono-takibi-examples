import type { RouteHandler } from '@hono/zod-openapi'
import type { getEmailsRoute, getEmailsIdRoute } from '../routes'

export const getEmailsRouteHandler: RouteHandler<typeof getEmailsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailsIdRouteHandler: RouteHandler<typeof getEmailsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
