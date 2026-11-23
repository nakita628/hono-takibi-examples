import type { RouteHandler } from '@hono/zod-openapi'
import type { getEmployeesIdRoute } from '../routes'

export const getEmployeesIdRouteHandler: RouteHandler<typeof getEmployeesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
