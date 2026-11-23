import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postMetadataAddRoute,
  postMetadataDeleteRoute,
  postMetadataListRoute,
  postMetadataUpdateRoute,
} from '../routes'

export const postMetadataListRouteHandler: RouteHandler<typeof postMetadataListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMetadataAddRouteHandler: RouteHandler<typeof postMetadataAddRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMetadataUpdateRouteHandler: RouteHandler<typeof postMetadataUpdateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postMetadataDeleteRouteHandler: RouteHandler<typeof postMetadataDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
