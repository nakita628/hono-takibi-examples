import type { RouteHandler } from '@hono/zod-openapi'
import type { postExternalUsersSubmitDeleteJobRoute } from '../routes'

export const postExternalUsersSubmitDeleteJobRouteHandler: RouteHandler<
  typeof postExternalUsersSubmitDeleteJobRoute
> = async (c) => {
  throw new Error('Not implemented')
}
