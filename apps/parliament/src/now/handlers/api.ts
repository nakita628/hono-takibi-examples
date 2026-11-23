import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiMessageMessageAnnunciatorCurrentRoute,
  getApiMessageMessageAnnunciatorDateRoute,
} from '../routes'

export const getApiMessageMessageAnnunciatorCurrentRouteHandler: RouteHandler<
  typeof getApiMessageMessageAnnunciatorCurrentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiMessageMessageAnnunciatorDateRouteHandler: RouteHandler<
  typeof getApiMessageMessageAnnunciatorDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
