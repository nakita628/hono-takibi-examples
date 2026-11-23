import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteProjectsProjectIdRoute,
  getProjectsProjectIdAssetsRoute,
  getProjectsProjectIdRoute,
  postProjectsProjectIdAssetsAssociateRoute,
  postProjectsProjectIdAssetsDisassociateRoute,
  postProjectsRoute,
  putProjectsProjectIdRoute,
} from '../routes'

export const postProjectsProjectIdAssetsAssociateRouteHandler: RouteHandler<
  typeof postProjectsProjectIdAssetsAssociateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsProjectIdAssetsDisassociateRouteHandler: RouteHandler<
  typeof postProjectsProjectIdAssetsDisassociateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postProjectsRouteHandler: RouteHandler<typeof postProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsProjectIdRouteHandler: RouteHandler<
  typeof deleteProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsProjectIdRouteHandler: RouteHandler<
  typeof getProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsProjectIdRouteHandler: RouteHandler<
  typeof putProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsProjectIdAssetsRouteHandler: RouteHandler<
  typeof getProjectsProjectIdAssetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
