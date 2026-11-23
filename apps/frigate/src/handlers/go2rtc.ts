import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGo2rtcStreamsStreamNameRoute,
  getGo2rtcStreamsRoute,
  getGo2rtcStreamsStreamNameBitrateRoute,
  getGo2rtcStreamsStreamNameRoute,
  putGo2rtcStreamsStreamNameRoute,
} from '../routes'

export const getGo2rtcStreamsRouteHandler: RouteHandler<typeof getGo2rtcStreamsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getGo2rtcStreamsStreamNameRouteHandler: RouteHandler<
  typeof getGo2rtcStreamsStreamNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putGo2rtcStreamsStreamNameRouteHandler: RouteHandler<
  typeof putGo2rtcStreamsStreamNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGo2rtcStreamsStreamNameRouteHandler: RouteHandler<
  typeof deleteGo2rtcStreamsStreamNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGo2rtcStreamsStreamNameBitrateRouteHandler: RouteHandler<
  typeof getGo2rtcStreamsStreamNameBitrateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
