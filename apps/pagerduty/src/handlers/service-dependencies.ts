import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getServiceDependenciesBusinessServicesIdRoute,
  getServiceDependenciesTechnicalServicesIdRoute,
  postServiceDependenciesAssociateRoute,
  postServiceDependenciesDisassociateRoute,
} from '../routes'

export const postServiceDependenciesAssociateRouteHandler: RouteHandler<
  typeof postServiceDependenciesAssociateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceDependenciesBusinessServicesIdRouteHandler: RouteHandler<
  typeof getServiceDependenciesBusinessServicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postServiceDependenciesDisassociateRouteHandler: RouteHandler<
  typeof postServiceDependenciesDisassociateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceDependenciesTechnicalServicesIdRouteHandler: RouteHandler<
  typeof getServiceDependenciesTechnicalServicesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
