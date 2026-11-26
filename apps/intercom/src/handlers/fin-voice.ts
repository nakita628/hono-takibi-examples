import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postFinVoiceRegisterRoute,
  getFinVoiceCollectIdRoute,
  getFinVoiceExternalIdExternalIdRoute,
  getFinVoicePhoneNumberPhoneNumberRoute,
  getFinVoiceConversationConversationIdRoute,
} from '../routes'

export const postFinVoiceRegisterRouteHandler: RouteHandler<
  typeof postFinVoiceRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFinVoiceCollectIdRouteHandler: RouteHandler<
  typeof getFinVoiceCollectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFinVoiceExternalIdExternalIdRouteHandler: RouteHandler<
  typeof getFinVoiceExternalIdExternalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFinVoicePhoneNumberPhoneNumberRouteHandler: RouteHandler<
  typeof getFinVoicePhoneNumberPhoneNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFinVoiceConversationConversationIdRouteHandler: RouteHandler<
  typeof getFinVoiceConversationConversationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
