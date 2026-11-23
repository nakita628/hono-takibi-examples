import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMeAllowedOriginsOriginIdRoute,
  getMeAllowedOriginsOriginIdRoute,
  getMeAllowedOriginsRoute,
  getMeRoute,
  postMeAllowedOriginsRoute,
  postMeGenerateClientKeyRoute,
} from '../routes'

export const getMeRouteHandler: RouteHandler<typeof getMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMeAllowedOriginsRouteHandler: RouteHandler<
  typeof getMeAllowedOriginsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMeAllowedOriginsRouteHandler: RouteHandler<
  typeof postMeAllowedOriginsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMeAllowedOriginsOriginIdRouteHandler: RouteHandler<
  typeof getMeAllowedOriginsOriginIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMeAllowedOriginsOriginIdRouteHandler: RouteHandler<
  typeof deleteMeAllowedOriginsOriginIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMeGenerateClientKeyRouteHandler: RouteHandler<
  typeof postMeGenerateClientKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
