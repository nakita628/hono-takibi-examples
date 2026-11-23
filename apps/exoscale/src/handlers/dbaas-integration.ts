import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDbaasIntegrationIdRoute,
  getDbaasIntegrationIdRoute,
  postDbaasIntegrationRoute,
  putDbaasIntegrationIdRoute,
} from '../routes'

export const deleteDbaasIntegrationIdRouteHandler: RouteHandler<
  typeof deleteDbaasIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDbaasIntegrationIdRouteHandler: RouteHandler<
  typeof putDbaasIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDbaasIntegrationIdRouteHandler: RouteHandler<
  typeof getDbaasIntegrationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDbaasIntegrationRouteHandler: RouteHandler<
  typeof postDbaasIntegrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
