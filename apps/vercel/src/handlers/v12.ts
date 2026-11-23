import type { RouteHandler } from '@hono/zod-openapi'
import type { patchV12DeploymentsIdCancelRoute } from '../routes'

export const patchV12DeploymentsIdCancelRouteHandler: RouteHandler<
  typeof patchV12DeploymentsIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
