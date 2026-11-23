import type { RouteHandler } from '@hono/zod-openapi'
import type { getSuiteRunsRoute } from '../routes'

export const getSuiteRunsRouteHandler: RouteHandler<typeof getSuiteRunsRoute> = async (c) => {
  throw new Error('Not implemented')
}
