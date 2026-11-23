import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePersonLoginTokenIdRoute,
  getPersonLoginGroupRoute,
  getPersonLoginRoute,
  getPersonLoginTokenRoute,
  getPersonRoute,
  postPersonLoginRoute,
  postPersonLoginTokenRoute,
  postPersonRegisterRoute,
  postPersonRoute,
  putPersonLoginRoute,
} from '../routes'

export const getPersonRouteHandler: RouteHandler<typeof getPersonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPersonRouteHandler: RouteHandler<typeof postPersonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPersonRegisterRouteHandler: RouteHandler<typeof postPersonRegisterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPersonLoginRouteHandler: RouteHandler<typeof getPersonLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPersonLoginRouteHandler: RouteHandler<typeof postPersonLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putPersonLoginRouteHandler: RouteHandler<typeof putPersonLoginRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPersonLoginGroupRouteHandler: RouteHandler<
  typeof getPersonLoginGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPersonLoginTokenRouteHandler: RouteHandler<
  typeof getPersonLoginTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPersonLoginTokenRouteHandler: RouteHandler<
  typeof postPersonLoginTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePersonLoginTokenIdRouteHandler: RouteHandler<
  typeof deletePersonLoginTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
