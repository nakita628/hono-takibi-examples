import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getConfigRawPathsRoute,
  getConfigRawRoute,
  getConfigRoute,
  getConfigSchemaJsonRoute,
  postConfigSaveRoute,
  putConfigSetRoute,
} from '../routes'

export const getConfigSchemaJsonRouteHandler: RouteHandler<
  typeof getConfigSchemaJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigRouteHandler: RouteHandler<typeof getConfigRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getConfigRawPathsRouteHandler: RouteHandler<typeof getConfigRawPathsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getConfigRawRouteHandler: RouteHandler<typeof getConfigRawRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postConfigSaveRouteHandler: RouteHandler<typeof postConfigSaveRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putConfigSetRouteHandler: RouteHandler<typeof putConfigSetRoute> = async (c) => {
  throw new Error('Not implemented')
}
