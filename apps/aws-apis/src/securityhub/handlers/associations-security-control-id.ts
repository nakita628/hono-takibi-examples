import type { RouteHandler } from '@hono/zod-openapi'
import type { getAssociationsSecurityControlIdRoute } from '../routes'

export const getAssociationsSecurityControlIdRouteHandler: RouteHandler<
  typeof getAssociationsSecurityControlIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
