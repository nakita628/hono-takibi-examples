import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStatutoryLeavesSickStatutorySickLeaveIDRoute,
  getStatutoryLeavesSummaryEmployeeIDRoute,
  postStatutoryLeavesSickRoute,
} from '../routes'

export const getStatutoryLeavesSummaryEmployeeIDRouteHandler: RouteHandler<
  typeof getStatutoryLeavesSummaryEmployeeIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStatutoryLeavesSickRouteHandler: RouteHandler<
  typeof postStatutoryLeavesSickRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatutoryLeavesSickStatutorySickLeaveIDRouteHandler: RouteHandler<
  typeof getStatutoryLeavesSickStatutorySickLeaveIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
