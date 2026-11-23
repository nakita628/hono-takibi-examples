import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postVectorsDeleteRoute,
  postVectorsFetchRoute,
  postVectorsUpdateRoute,
  postVectorsUpsertRoute,
} from '../routes'

export const postVectorsDeleteRouteHandler: RouteHandler<typeof postVectorsDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postVectorsFetchRouteHandler: RouteHandler<typeof postVectorsFetchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postVectorsUpdateRouteHandler: RouteHandler<typeof postVectorsUpdateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postVectorsUpsertRouteHandler: RouteHandler<typeof postVectorsUpsertRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
