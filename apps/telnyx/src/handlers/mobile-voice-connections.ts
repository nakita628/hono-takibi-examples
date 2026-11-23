import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMobileVoiceConnectionsIdRoute,
  getMobileVoiceConnectionsIdRoute,
  getMobileVoiceConnectionsRoute,
  patchMobileVoiceConnectionsIdRoute,
  postMobileVoiceConnectionsRoute,
} from '../routes'

export const getMobileVoiceConnectionsRouteHandler: RouteHandler<
  typeof getMobileVoiceConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMobileVoiceConnectionsRouteHandler: RouteHandler<
  typeof postMobileVoiceConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMobileVoiceConnectionsIdRouteHandler: RouteHandler<
  typeof deleteMobileVoiceConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMobileVoiceConnectionsIdRouteHandler: RouteHandler<
  typeof getMobileVoiceConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMobileVoiceConnectionsIdRouteHandler: RouteHandler<
  typeof patchMobileVoiceConnectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
