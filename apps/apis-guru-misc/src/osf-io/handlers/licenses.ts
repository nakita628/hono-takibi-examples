import type { RouteHandler } from '@hono/zod-openapi'
import type { getLicensesIndexRoute } from '../routes'

export const getLicensesIndexRouteHandler: RouteHandler<typeof getLicensesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
