import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteProjectsNameRoute,
  getProjectsNameRoute,
  getProjectsRoute,
  postProjectsRoute,
  putProjectsNameRoute,
  putProjectsNameSendProjectSessionActionRoute,
  putProjectsNameStartProjectSessionRoute,
} from '../routes'

export const postProjectsRouteHandler: RouteHandler<typeof postProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getProjectsRouteHandler: RouteHandler<typeof getProjectsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteProjectsNameRouteHandler: RouteHandler<typeof deleteProjectsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getProjectsNameRouteHandler: RouteHandler<typeof getProjectsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsNameRouteHandler: RouteHandler<typeof putProjectsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsNameSendProjectSessionActionRouteHandler: RouteHandler<
  typeof putProjectsNameSendProjectSessionActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProjectsNameStartProjectSessionRouteHandler: RouteHandler<
  typeof putProjectsNameStartProjectSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
