import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1EnCoreWebSmIndexRoute,
  getV1EnCoreWebSmVersionRoute,
  postV1EnCoreWebSmDependenciesRoute,
  postV1EnCoreWebSmEntitiesRoute,
  postV1EnCoreWebSmSentenceDependenciesRoute,
} from '../routes'

export const getV1EnCoreWebSmIndexRouteHandler: RouteHandler<
  typeof getV1EnCoreWebSmIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EnCoreWebSmDependenciesRouteHandler: RouteHandler<
  typeof postV1EnCoreWebSmDependenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EnCoreWebSmEntitiesRouteHandler: RouteHandler<
  typeof postV1EnCoreWebSmEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EnCoreWebSmSentenceDependenciesRouteHandler: RouteHandler<
  typeof postV1EnCoreWebSmSentenceDependenciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EnCoreWebSmVersionRouteHandler: RouteHandler<
  typeof getV1EnCoreWebSmVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
