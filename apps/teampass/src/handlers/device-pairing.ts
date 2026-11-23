import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDevicePairingCapabilitiesRoute,
  postDevicePairingClaimRoute,
  postDevicePairingConsumeRoute,
  postDevicePairingCredentialStatusRoute,
  postDevicePairingStatusRoute,
} from '../routes'

export const getDevicePairingCapabilitiesRouteHandler: RouteHandler<
  typeof getDevicePairingCapabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicePairingCredentialStatusRouteHandler: RouteHandler<
  typeof postDevicePairingCredentialStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicePairingClaimRouteHandler: RouteHandler<
  typeof postDevicePairingClaimRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicePairingStatusRouteHandler: RouteHandler<
  typeof postDevicePairingStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDevicePairingConsumeRouteHandler: RouteHandler<
  typeof postDevicePairingConsumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
