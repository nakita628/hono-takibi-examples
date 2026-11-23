import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getLeaveTypesLeaveTypeIDRoute,
  getLeaveTypesRoute,
  postLeaveTypesRoute,
} from '../routes'

export const getLeaveTypesRouteHandler: RouteHandler<typeof getLeaveTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLeaveTypesRouteHandler: RouteHandler<typeof postLeaveTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLeaveTypesLeaveTypeIDRouteHandler: RouteHandler<
  typeof getLeaveTypesLeaveTypeIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
