import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1NameRoute,
  getV1NameGetExecutableRoute,
  getV1NameReleasesRoute,
  getV1NameRoute,
  getV1NameRulesetsRoute,
  patchV1NameRoute,
  postV1NameReleasesRoute,
  postV1NameRulesetsRoute,
  postV1NameTestRoute,
} from '../routes'

export const deleteV1NameRouteHandler: RouteHandler<typeof deleteV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1NameRouteHandler: RouteHandler<typeof patchV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameReleasesRouteHandler: RouteHandler<typeof getV1NameReleasesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameReleasesRouteHandler: RouteHandler<typeof postV1NameReleasesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1NameRulesetsRouteHandler: RouteHandler<typeof getV1NameRulesetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameRulesetsRouteHandler: RouteHandler<typeof postV1NameRulesetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1NameGetExecutableRouteHandler: RouteHandler<
  typeof getV1NameGetExecutableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameTestRouteHandler: RouteHandler<typeof postV1NameTestRoute> = async (c) => {
  throw new Error('Not implemented')
}
