import type { RouteHandler } from '@hono/zod-openapi'
import type { getLicensesNameRoute, getLicensesRoute } from '../routes'

export const getLicensesRouteHandler: RouteHandler<typeof getLicensesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getLicensesNameRouteHandler: RouteHandler<typeof getLicensesNameRoute> = async (c) => {
  throw new Error('Not implemented')
}
