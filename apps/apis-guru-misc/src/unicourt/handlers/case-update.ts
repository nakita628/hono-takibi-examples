import type { RouteHandler } from '@hono/zod-openapi'
import type { getCaseUpdateCaseIdRoute, putCaseUpdateRoute } from '../routes'

export const putCaseUpdateRouteHandler: RouteHandler<typeof putCaseUpdateRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCaseUpdateCaseIdRouteHandler: RouteHandler<
  typeof getCaseUpdateCaseIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
