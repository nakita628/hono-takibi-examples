import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteIncidentRecordRoute } from '../routes'

export const postDeleteIncidentRecordRouteHandler: RouteHandler<
  typeof postDeleteIncidentRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}
