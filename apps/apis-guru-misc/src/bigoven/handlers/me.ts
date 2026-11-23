import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMePreferencesOptionsRoute,
  getMeRoute,
  getMeSkinnyRoute,
  putMePersonalRoute,
  putMePreferencesRoute,
  putMeProfileRoute,
  putMeRoute,
} from '../routes'

export const getMeRouteHandler: RouteHandler<typeof getMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putMeRouteHandler: RouteHandler<typeof putMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putMePersonalRouteHandler: RouteHandler<typeof putMePersonalRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putMePreferencesRouteHandler: RouteHandler<typeof putMePreferencesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMePreferencesOptionsRouteHandler: RouteHandler<
  typeof getMePreferencesOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMeProfileRouteHandler: RouteHandler<typeof putMeProfileRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMeSkinnyRouteHandler: RouteHandler<typeof getMeSkinnyRoute> = async (c) => {
  throw new Error('Not implemented')
}
