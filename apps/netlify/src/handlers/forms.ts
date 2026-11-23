import type { RouteHandler } from '@hono/zod-openapi'
import type { getFormsFormIdSubmissionsRoute } from '../routes'

export const getFormsFormIdSubmissionsRouteHandler: RouteHandler<
  typeof getFormsFormIdSubmissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
