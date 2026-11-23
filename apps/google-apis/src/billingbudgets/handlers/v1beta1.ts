import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1beta1NameRoute,
  getV1beta1NameRoute,
  getV1beta1ParentBudgetsRoute,
  patchV1beta1NameRoute,
  postV1beta1ParentBudgetsRoute,
} from '../routes'

export const deleteV1beta1NameRouteHandler: RouteHandler<typeof deleteV1beta1NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1beta1NameRouteHandler: RouteHandler<typeof getV1beta1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1beta1NameRouteHandler: RouteHandler<typeof patchV1beta1NameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1beta1ParentBudgetsRouteHandler: RouteHandler<
  typeof getV1beta1ParentBudgetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1beta1ParentBudgetsRouteHandler: RouteHandler<
  typeof postV1beta1ParentBudgetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
