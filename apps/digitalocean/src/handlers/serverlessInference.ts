import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1ModelsRoute,
  getV1VideosVideoIdContentRoute,
  getV1VideosVideoIdRoute,
  postV1AsyncInvokeRoute,
  postV1AudioSpeechRoute,
  postV1ChatCompletionsRoute,
  postV1EmbeddingsRoute,
  postV1ImagesGenerationsRoute,
  postV1MessagesRoute,
  postV1ResponsesRoute,
  postV1SystemoneRoute,
  postV1VideosRoute,
} from '../routes'

export const postV1ChatCompletionsRouteHandler: RouteHandler<
  typeof postV1ChatCompletionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1MessagesRouteHandler: RouteHandler<typeof postV1MessagesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EmbeddingsRouteHandler: RouteHandler<typeof postV1EmbeddingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ImagesGenerationsRouteHandler: RouteHandler<
  typeof postV1ImagesGenerationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ModelsRouteHandler: RouteHandler<typeof getV1ModelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SystemoneRouteHandler: RouteHandler<typeof postV1SystemoneRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ResponsesRouteHandler: RouteHandler<typeof postV1ResponsesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1AsyncInvokeRouteHandler: RouteHandler<typeof postV1AsyncInvokeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1AudioSpeechRouteHandler: RouteHandler<typeof postV1AudioSpeechRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1VideosRouteHandler: RouteHandler<typeof postV1VideosRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1VideosVideoIdRouteHandler: RouteHandler<typeof getV1VideosVideoIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1VideosVideoIdContentRouteHandler: RouteHandler<
  typeof getV1VideosVideoIdContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
