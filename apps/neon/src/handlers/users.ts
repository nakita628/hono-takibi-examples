import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUsersMeOrganizationsRoute,
  getUsersMeRoute,
  postUsersMeProjectsTransferRoute,
} from '../routes'

export const getUsersMeRouteHandler: RouteHandler<typeof getUsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getUsersMeOrganizationsRouteHandler: RouteHandler<
  typeof getUsersMeOrganizationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUsersMeProjectsTransferRouteHandler: RouteHandler<
  typeof postUsersMeProjectsTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}
