import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEmployeesEmployeeIDRoute,
  getEmployeesRoute,
  postEmployeesEmployeeIDRoute,
  postEmployeesRoute,
} from '../routes'

export const getEmployeesRouteHandler: RouteHandler<typeof getEmployeesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployeesRouteHandler: RouteHandler<typeof postEmployeesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getEmployeesEmployeeIDRouteHandler: RouteHandler<
  typeof getEmployeesEmployeeIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEmployeesEmployeeIDRouteHandler: RouteHandler<
  typeof postEmployeesEmployeeIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
