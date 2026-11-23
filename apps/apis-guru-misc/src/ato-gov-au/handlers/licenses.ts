import type { RouteHandler } from '@hono/zod-openapi'
import type { getLicensesRoute } from '../routes'

export const getLicensesRouteHandler: RouteHandler<typeof getLicensesRoute> = async (c) => {
  throw new Error('Not implemented')
}
