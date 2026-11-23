import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTokensCbTokenIdRoute,
  postTokensCreateForCardRoute,
  postTokensCreateUsingTempTokenRoute,
} from '../routes'

export const postTokensCreateUsingTempTokenRouteHandler: RouteHandler<
  typeof postTokensCreateUsingTempTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTokensCreateForCardRouteHandler: RouteHandler<
  typeof postTokensCreateForCardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTokensCbTokenIdRouteHandler: RouteHandler<typeof getTokensCbTokenIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
