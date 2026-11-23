import type { RouteHandler } from '@hono/zod-openapi'
import type { postUpdateIncidentRecordRoute } from '../routes'

export const postUpdateIncidentRecordRouteHandler: RouteHandler<
  typeof postUpdateIncidentRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}
