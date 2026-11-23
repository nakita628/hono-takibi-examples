import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMappingsMappingIdRoute,
  getMappingsFieldsRoute,
  getMappingsMappingIdRoute,
  getMappingsRoute,
  postMappingsRoute,
  putMappingsMappingIdRoute,
} from '../routes'

export const getMappingsRouteHandler: RouteHandler<typeof getMappingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMappingsRouteHandler: RouteHandler<typeof postMappingsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMappingsMappingIdRouteHandler: RouteHandler<
  typeof getMappingsMappingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMappingsMappingIdRouteHandler: RouteHandler<
  typeof putMappingsMappingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMappingsMappingIdRouteHandler: RouteHandler<
  typeof deleteMappingsMappingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMappingsFieldsRouteHandler: RouteHandler<typeof getMappingsFieldsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
