import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAccountInfo202609ActivityAuditLogsRoute,
  getAccountInfo202609ActivityLoginRoute,
  getAccountInfo202609ActivitySecurityRoute,
} from '../routes'

export const getAccountInfo202609ActivityAuditLogsRouteHandler: RouteHandler<
  typeof getAccountInfo202609ActivityAuditLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountInfo202609ActivityLoginRouteHandler: RouteHandler<
  typeof getAccountInfo202609ActivityLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountInfo202609ActivitySecurityRouteHandler: RouteHandler<
  typeof getAccountInfo202609ActivitySecurityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
