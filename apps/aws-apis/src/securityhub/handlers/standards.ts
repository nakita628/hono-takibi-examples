import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStandardsControlsStandardsSubscriptionArnRoute,
  getStandardsRoute,
  patchStandardsControlStandardsControlArnRoute,
  postStandardsDeregisterRoute,
  postStandardsGetRoute,
  postStandardsRegisterRoute,
} from '../routes'

export const postStandardsDeregisterRouteHandler: RouteHandler<
  typeof postStandardsDeregisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStandardsRegisterRouteHandler: RouteHandler<
  typeof postStandardsRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStandardsRouteHandler: RouteHandler<typeof getStandardsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStandardsControlsStandardsSubscriptionArnRouteHandler: RouteHandler<
  typeof getStandardsControlsStandardsSubscriptionArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStandardsGetRouteHandler: RouteHandler<typeof postStandardsGetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchStandardsControlStandardsControlArnRouteHandler: RouteHandler<
  typeof patchStandardsControlStandardsControlArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
