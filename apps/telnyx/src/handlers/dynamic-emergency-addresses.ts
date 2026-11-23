import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDynamicEmergencyAddressesIdRoute,
  getDynamicEmergencyAddressesIdRoute,
  getDynamicEmergencyAddressesRoute,
  postDynamicEmergencyAddressesRoute,
} from '../routes'

export const getDynamicEmergencyAddressesRouteHandler: RouteHandler<
  typeof getDynamicEmergencyAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDynamicEmergencyAddressesRouteHandler: RouteHandler<
  typeof postDynamicEmergencyAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDynamicEmergencyAddressesIdRouteHandler: RouteHandler<
  typeof deleteDynamicEmergencyAddressesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDynamicEmergencyAddressesIdRouteHandler: RouteHandler<
  typeof getDynamicEmergencyAddressesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
