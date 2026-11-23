import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTaskAssignmentsTaskAssignmentIdRoute,
  getTaskAssignmentsTaskAssignmentIdRoute,
  postTaskAssignmentsRoute,
  putTaskAssignmentsTaskAssignmentIdRoute,
} from '../routes'

export const postTaskAssignmentsRouteHandler: RouteHandler<
  typeof postTaskAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTaskAssignmentsTaskAssignmentIdRouteHandler: RouteHandler<
  typeof deleteTaskAssignmentsTaskAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTaskAssignmentsTaskAssignmentIdRouteHandler: RouteHandler<
  typeof getTaskAssignmentsTaskAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putTaskAssignmentsTaskAssignmentIdRouteHandler: RouteHandler<
  typeof putTaskAssignmentsTaskAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
