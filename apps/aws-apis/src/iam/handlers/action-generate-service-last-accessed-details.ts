import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGenerateServiceLastAccessedDetailsRoute,
  postActionGenerateServiceLastAccessedDetailsRoute,
} from '../routes'

export const getActionGenerateServiceLastAccessedDetailsRouteHandler: RouteHandler<
  typeof getActionGenerateServiceLastAccessedDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGenerateServiceLastAccessedDetailsRouteHandler: RouteHandler<
  typeof postActionGenerateServiceLastAccessedDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
