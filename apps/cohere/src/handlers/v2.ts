import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV2BatchesIdRoute,
  getV2BatchesRoute,
  postV2AudioTranscriptionsRoute,
  postV2BatchesIdCancelRoute,
  postV2BatchesRoute,
  postV2ChatRoute,
  postV2EmbedRoute,
  postV2ParseRoute,
  postV2RerankRoute,
} from '../routes'

export const postV2ChatRouteHandler: RouteHandler<typeof postV2ChatRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ParseRouteHandler: RouteHandler<typeof postV2ParseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2EmbedRouteHandler: RouteHandler<typeof postV2EmbedRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2AudioTranscriptionsRouteHandler: RouteHandler<
  typeof postV2AudioTranscriptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BatchesRouteHandler: RouteHandler<typeof getV2BatchesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BatchesRouteHandler: RouteHandler<typeof postV2BatchesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2BatchesIdRouteHandler: RouteHandler<typeof getV2BatchesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2BatchesIdCancelRouteHandler: RouteHandler<
  typeof postV2BatchesIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2RerankRouteHandler: RouteHandler<typeof postV2RerankRoute> = async (c) => {
  throw new Error('Not implemented')
}
