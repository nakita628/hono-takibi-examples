import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAssignmentsAssignmentIdAcceptedAssignmentsRoute,
  getAssignmentsAssignmentIdGradesRoute,
  getAssignmentsAssignmentIdRoute,
} from '../routes'

export const getAssignmentsAssignmentIdRouteHandler: RouteHandler<
  typeof getAssignmentsAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssignmentsAssignmentIdAcceptedAssignmentsRouteHandler: RouteHandler<
  typeof getAssignmentsAssignmentIdAcceptedAssignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssignmentsAssignmentIdGradesRouteHandler: RouteHandler<
  typeof getAssignmentsAssignmentIdGradesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
