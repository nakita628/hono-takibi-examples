import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postV1NameGenerateAccessTokenRoute,
  postV1NameGenerateIdTokenRoute,
  postV1NameSignBlobRoute,
  postV1NameSignJwtRoute,
} from '../routes'

export const postV1NameGenerateAccessTokenRouteHandler: RouteHandler<
  typeof postV1NameGenerateAccessTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameGenerateIdTokenRouteHandler: RouteHandler<
  typeof postV1NameGenerateIdTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameSignBlobRouteHandler: RouteHandler<typeof postV1NameSignBlobRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameSignJwtRouteHandler: RouteHandler<typeof postV1NameSignJwtRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
