import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetIncidentRecordArnRoute } from '../routes'

export const getGetIncidentRecordArnRouteHandler: RouteHandler<
  typeof getGetIncidentRecordArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
