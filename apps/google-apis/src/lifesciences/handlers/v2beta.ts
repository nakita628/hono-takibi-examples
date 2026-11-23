import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV2betaNameLocationsRoute,
  getV2betaNameOperationsRoute,
  getV2betaNameRoute,
  postV2betaNameCancelRoute,
  postV2betaParentPipelinesRunRoute,
} from '../routes'

export const getV2betaNameRouteHandler: RouteHandler<typeof getV2betaNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2betaNameLocationsRouteHandler: RouteHandler<
  typeof getV2betaNameLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2betaNameOperationsRouteHandler: RouteHandler<
  typeof getV2betaNameOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2betaNameCancelRouteHandler: RouteHandler<
  typeof postV2betaNameCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2betaParentPipelinesRunRouteHandler: RouteHandler<
  typeof postV2betaParentPipelinesRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}
