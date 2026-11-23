import type { RouteHandler } from '@hono/zod-openapi'
import type { getJobJobArnRoute, postJobRoute, putJobJobArnCancelRoute } from '../routes'

export const putJobJobArnCancelRouteHandler: RouteHandler<typeof putJobJobArnCancelRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postJobRouteHandler: RouteHandler<typeof postJobRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getJobJobArnRouteHandler: RouteHandler<typeof getJobJobArnRoute> = async (c) => {
  throw new Error('Not implemented')
}
