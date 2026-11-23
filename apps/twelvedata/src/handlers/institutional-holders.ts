import type { RouteHandler } from '@hono/zod-openapi'
import type { getInstitutionalHoldersRoute } from '../routes'

export const getInstitutionalHoldersRouteHandler: RouteHandler<
  typeof getInstitutionalHoldersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
