import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCaseTrackCaseIdRoute,
  getCaseTrackCaseIdRoute,
  putCaseTrackRoute,
} from '../routes'

export const putCaseTrackRouteHandler: RouteHandler<typeof putCaseTrackRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCaseTrackCaseIdRouteHandler: RouteHandler<
  typeof deleteCaseTrackCaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCaseTrackCaseIdRouteHandler: RouteHandler<typeof getCaseTrackCaseIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
