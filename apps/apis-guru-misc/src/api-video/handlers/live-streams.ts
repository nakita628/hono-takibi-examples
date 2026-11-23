import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLiveStreamsLiveStreamIdRoute,
  deleteLiveStreamsLiveStreamIdThumbnailRoute,
  getLiveStreamsLiveStreamIdRoute,
  getLiveStreamsRoute,
  patchLiveStreamsLiveStreamIdRoute,
  postLiveStreamsLiveStreamIdThumbnailRoute,
  postLiveStreamsRoute,
} from '../routes'

export const getLiveStreamsRouteHandler: RouteHandler<typeof getLiveStreamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLiveStreamsRouteHandler: RouteHandler<typeof postLiveStreamsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLiveStreamsLiveStreamIdRouteHandler: RouteHandler<
  typeof deleteLiveStreamsLiveStreamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLiveStreamsLiveStreamIdRouteHandler: RouteHandler<
  typeof getLiveStreamsLiveStreamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchLiveStreamsLiveStreamIdRouteHandler: RouteHandler<
  typeof patchLiveStreamsLiveStreamIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLiveStreamsLiveStreamIdThumbnailRouteHandler: RouteHandler<
  typeof deleteLiveStreamsLiveStreamIdThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLiveStreamsLiveStreamIdThumbnailRouteHandler: RouteHandler<
  typeof postLiveStreamsLiveStreamIdThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}
