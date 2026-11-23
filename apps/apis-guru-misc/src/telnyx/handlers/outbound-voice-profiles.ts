import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteOutboundVoiceProfilesIdRoute,
  getOutboundVoiceProfilesIdRoute,
  getOutboundVoiceProfilesRoute,
  patchOutboundVoiceProfilesIdRoute,
  postOutboundVoiceProfilesRoute,
} from '../routes'

export const getOutboundVoiceProfilesRouteHandler: RouteHandler<
  typeof getOutboundVoiceProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOutboundVoiceProfilesRouteHandler: RouteHandler<
  typeof postOutboundVoiceProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOutboundVoiceProfilesIdRouteHandler: RouteHandler<
  typeof deleteOutboundVoiceProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOutboundVoiceProfilesIdRouteHandler: RouteHandler<
  typeof getOutboundVoiceProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOutboundVoiceProfilesIdRouteHandler: RouteHandler<
  typeof patchOutboundVoiceProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
