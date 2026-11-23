import type { RouteHandler } from '@hono/zod-openapi'
import type { getEmailsIdRoute, getEmailsRoute } from '../routes'

export const getEmailsRouteHandler: RouteHandler<typeof getEmailsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmailsIdRouteHandler: RouteHandler<typeof getEmailsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
