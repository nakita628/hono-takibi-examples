import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetSampleDataRoute } from '../routes'

export const postGetSampleDataRouteHandler: RouteHandler<typeof postGetSampleDataRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
