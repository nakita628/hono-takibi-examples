import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postProvisioningCreateAccountTicketRoute,
  postProvisioningCreateAccountTreeRoute,
} from '../routes'

export const postProvisioningCreateAccountTicketRouteHandler: RouteHandler<
  typeof postProvisioningCreateAccountTicketRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProvisioningCreateAccountTreeRouteHandler: RouteHandler<
  typeof postProvisioningCreateAccountTreeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
