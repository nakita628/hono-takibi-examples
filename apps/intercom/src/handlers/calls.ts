import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCallsCallIdRecordingRoute,
  getCallsCallIdRoute,
  getCallsIdTranscriptRoute,
  getCallsRoute,
  postCallsSearchRoute,
} from '../routes'

export const getCallsRouteHandler: RouteHandler<typeof getCallsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCallsCallIdRouteHandler: RouteHandler<typeof getCallsCallIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCallsCallIdRecordingRouteHandler: RouteHandler<
  typeof getCallsCallIdRecordingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCallsIdTranscriptRouteHandler: RouteHandler<
  typeof getCallsIdTranscriptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCallsSearchRouteHandler: RouteHandler<typeof postCallsSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
