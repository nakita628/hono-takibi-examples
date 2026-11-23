import type { RouteHandler } from '@hono/zod-openapi'
import type { postListIncidentRecordsRoute } from '../routes'

export const postListIncidentRecordsRouteHandler: RouteHandler<
  typeof postListIncidentRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
