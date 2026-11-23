import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameAnswersDeleteRoute,
  deleteV1NameRoute,
  getV1ParentAnswersRoute,
  getV1ParentRoute,
  patchV1NameRoute,
  postV1ParentAnswersUpsertRoute,
  postV1ParentRoute,
} from '../routes'

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1NameAnswersDeleteRouteHandler: RouteHandler<
  typeof deleteV1NameAnswersDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentRouteHandler: RouteHandler<typeof getV1ParentRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ParentRouteHandler: RouteHandler<typeof postV1ParentRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ParentAnswersRouteHandler: RouteHandler<typeof getV1ParentAnswersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ParentAnswersUpsertRouteHandler: RouteHandler<
  typeof postV1ParentAnswersUpsertRoute
> = async (c) => {
  throw new Error('Not implemented')
}
