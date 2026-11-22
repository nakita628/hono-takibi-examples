import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV2ProjectsDefaultResourcesRoute,
  getV2ProjectsProjectIdResourcesRoute,
  postV2ProjectsDefaultResourcesRoute,
  postV2ProjectsProjectIdResourcesRoute,
} from '../routes'

export const getV2ProjectsDefaultResourcesRouteHandler: RouteHandler<
  typeof getV2ProjectsDefaultResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ProjectsDefaultResourcesRouteHandler: RouteHandler<
  typeof postV2ProjectsDefaultResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2ProjectsProjectIdResourcesRouteHandler: RouteHandler<
  typeof getV2ProjectsProjectIdResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2ProjectsProjectIdResourcesRouteHandler: RouteHandler<
  typeof postV2ProjectsProjectIdResourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
