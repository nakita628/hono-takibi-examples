import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOtherCostsIdRoute,
  getOtherCostsRoute,
  patchOtherCostsIdRoute,
  postOtherCostsIdCancellationRoute,
  postOtherCostsIdRestorationRoute,
  postOtherCostsRoute,
} from '../routes'

export const getOtherCostsRouteHandler: RouteHandler<typeof getOtherCostsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOtherCostsRouteHandler: RouteHandler<typeof postOtherCostsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchOtherCostsIdRouteHandler: RouteHandler<typeof patchOtherCostsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getOtherCostsIdRouteHandler: RouteHandler<typeof getOtherCostsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postOtherCostsIdRestorationRouteHandler: RouteHandler<
  typeof postOtherCostsIdRestorationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOtherCostsIdCancellationRouteHandler: RouteHandler<
  typeof postOtherCostsIdCancellationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
