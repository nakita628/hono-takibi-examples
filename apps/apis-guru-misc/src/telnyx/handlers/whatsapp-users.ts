import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWhatsappUsersWhatsappUserIdRoute,
  patchWhatsappUsersWhatsappUserIdRoute,
} from '../routes'

export const getWhatsappUsersWhatsappUserIdRouteHandler: RouteHandler<
  typeof getWhatsappUsersWhatsappUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchWhatsappUsersWhatsappUserIdRouteHandler: RouteHandler<
  typeof patchWhatsappUsersWhatsappUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
