import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV10ProjectsIdOrNameEnvRoute,
  getV10ProjectsRoute,
  postV10ProjectsIdOrNameDomainsRoute,
  postV10ProjectsIdOrNameEnvRoute,
  postV10ProjectsProjectIdPromoteDeploymentIdRoute,
} from '../routes'

export const getV10ProjectsRouteHandler: RouteHandler<typeof getV10ProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV10ProjectsIdOrNameDomainsRouteHandler: RouteHandler<
  typeof postV10ProjectsIdOrNameDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV10ProjectsIdOrNameEnvRouteHandler: RouteHandler<
  typeof getV10ProjectsIdOrNameEnvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV10ProjectsIdOrNameEnvRouteHandler: RouteHandler<
  typeof postV10ProjectsIdOrNameEnvRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV10ProjectsProjectIdPromoteDeploymentIdRouteHandler: RouteHandler<
  typeof postV10ProjectsProjectIdPromoteDeploymentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
