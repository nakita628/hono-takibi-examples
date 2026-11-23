import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDynamicEmergencyEndpointsIdRoute,
  getDynamicEmergencyEndpointsIdRoute,
  getDynamicEmergencyEndpointsRoute,
  postDynamicEmergencyEndpointsRoute,
} from '../routes'

export const getDynamicEmergencyEndpointsRouteHandler: RouteHandler<
  typeof getDynamicEmergencyEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDynamicEmergencyEndpointsRouteHandler: RouteHandler<
  typeof postDynamicEmergencyEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDynamicEmergencyEndpointsIdRouteHandler: RouteHandler<
  typeof deleteDynamicEmergencyEndpointsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDynamicEmergencyEndpointsIdRouteHandler: RouteHandler<
  typeof getDynamicEmergencyEndpointsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
