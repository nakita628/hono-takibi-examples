import type { RouteHandler } from '@hono/zod-openapi'
import type { getMcginleyDynamicRoute } from '../routes'

export const getMcginleyDynamicRouteHandler: RouteHandler<typeof getMcginleyDynamicRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
