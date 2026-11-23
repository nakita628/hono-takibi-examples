import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postRealtimeCallsCallIdAcceptRoute,
  postRealtimeCallsCallIdHangupRoute,
  postRealtimeCallsCallIdReferRoute,
  postRealtimeCallsCallIdRejectRoute,
  postRealtimeCallsRoute,
  postRealtimeClientSecretsRoute,
  postRealtimeSessionsRoute,
  postRealtimeTranscriptionSessionsRoute,
  postRealtimeTranslationsClientSecretsRoute,
} from '../routes'

export const postRealtimeCallsRouteHandler: RouteHandler<typeof postRealtimeCallsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRealtimeCallsCallIdAcceptRouteHandler: RouteHandler<
  typeof postRealtimeCallsCallIdAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealtimeCallsCallIdHangupRouteHandler: RouteHandler<
  typeof postRealtimeCallsCallIdHangupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealtimeCallsCallIdReferRouteHandler: RouteHandler<
  typeof postRealtimeCallsCallIdReferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealtimeCallsCallIdRejectRouteHandler: RouteHandler<
  typeof postRealtimeCallsCallIdRejectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealtimeClientSecretsRouteHandler: RouteHandler<
  typeof postRealtimeClientSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealtimeSessionsRouteHandler: RouteHandler<
  typeof postRealtimeSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealtimeTranscriptionSessionsRouteHandler: RouteHandler<
  typeof postRealtimeTranscriptionSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRealtimeTranslationsClientSecretsRouteHandler: RouteHandler<
  typeof postRealtimeTranslationsClientSecretsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
