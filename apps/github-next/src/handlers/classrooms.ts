import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getClassroomsClassroomIdAssignmentsRoute,
  getClassroomsClassroomIdRoute,
  getClassroomsRoute,
} from '../routes'

export const getClassroomsRouteHandler: RouteHandler<typeof getClassroomsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getClassroomsClassroomIdRouteHandler: RouteHandler<
  typeof getClassroomsClassroomIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getClassroomsClassroomIdAssignmentsRouteHandler: RouteHandler<
  typeof getClassroomsClassroomIdAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
