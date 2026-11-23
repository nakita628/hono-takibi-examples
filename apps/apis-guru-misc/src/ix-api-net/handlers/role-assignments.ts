import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRoleAssignmentsAssignmentIdRoute,
  getRoleAssignmentsAssignmentIdRoute,
  getRoleAssignmentsRoute,
  postRoleAssignmentsRoute,
} from '../routes'

export const getRoleAssignmentsRouteHandler: RouteHandler<typeof getRoleAssignmentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRoleAssignmentsRouteHandler: RouteHandler<
  typeof postRoleAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRoleAssignmentsAssignmentIdRouteHandler: RouteHandler<
  typeof deleteRoleAssignmentsAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoleAssignmentsAssignmentIdRouteHandler: RouteHandler<
  typeof getRoleAssignmentsAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
