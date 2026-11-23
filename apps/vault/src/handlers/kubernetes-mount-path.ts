import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteKubernetesMountPathConfigRoute,
  deleteKubernetesMountPathRolesNameRoute,
  getKubernetesMountPathCheckRoute,
  getKubernetesMountPathConfigRoute,
  getKubernetesMountPathRolesIndexRoute,
  getKubernetesMountPathRolesNameRoute,
  postKubernetesMountPathConfigRoute,
  postKubernetesMountPathCredsNameRoute,
  postKubernetesMountPathRolesNameRoute,
} from '../routes'

export const getKubernetesMountPathCheckRouteHandler: RouteHandler<
  typeof getKubernetesMountPathCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesMountPathConfigRouteHandler: RouteHandler<
  typeof getKubernetesMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesMountPathConfigRouteHandler: RouteHandler<
  typeof postKubernetesMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKubernetesMountPathConfigRouteHandler: RouteHandler<
  typeof deleteKubernetesMountPathConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesMountPathCredsNameRouteHandler: RouteHandler<
  typeof postKubernetesMountPathCredsNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesMountPathRolesIndexRouteHandler: RouteHandler<
  typeof getKubernetesMountPathRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKubernetesMountPathRolesNameRouteHandler: RouteHandler<
  typeof getKubernetesMountPathRolesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKubernetesMountPathRolesNameRouteHandler: RouteHandler<
  typeof postKubernetesMountPathRolesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKubernetesMountPathRolesNameRouteHandler: RouteHandler<
  typeof deleteKubernetesMountPathRolesNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
