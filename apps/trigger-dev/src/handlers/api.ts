import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postApiV1EventsRoute,
  postApiV3BatchesBatchIdItemsRoute,
  postApiV3BatchesRoute,
} from '../routes'

export const postApiV1EventsRouteHandler: RouteHandler<typeof postApiV1EventsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV3BatchesRouteHandler: RouteHandler<typeof postApiV3BatchesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postApiV3BatchesBatchIdItemsRouteHandler: RouteHandler<
  typeof postApiV3BatchesBatchIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
