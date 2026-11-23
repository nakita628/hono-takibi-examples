import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteAdminAdminAccountIdRoute } from '../routes'

export const deleteAdminAdminAccountIdRouteHandler: RouteHandler<
  typeof deleteAdminAdminAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
