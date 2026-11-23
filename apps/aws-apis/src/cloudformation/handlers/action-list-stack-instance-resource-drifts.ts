import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListStackInstanceResourceDriftsRoute,
  postActionListStackInstanceResourceDriftsRoute,
} from '../routes'

export const getActionListStackInstanceResourceDriftsRouteHandler: RouteHandler<
  typeof getActionListStackInstanceResourceDriftsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListStackInstanceResourceDriftsRouteHandler: RouteHandler<
  typeof postActionListStackInstanceResourceDriftsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
