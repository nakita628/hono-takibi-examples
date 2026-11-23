import type { RouteHandler } from '@hono/zod-openapi'
import type { getSdktypesRoute, getSdktypesSdktypeIdRoute } from '../routes'

export const getSdktypesSdktypeIdRouteHandler: RouteHandler<
  typeof getSdktypesSdktypeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSdktypesRouteHandler: RouteHandler<typeof getSdktypesRoute> = async (c) => {
  throw new Error('Not implemented')
}
