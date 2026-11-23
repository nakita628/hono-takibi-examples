import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiV1CheckIndexRoute,
  getApiV1ConfigurationLinkIndexRoute,
  getApiV1ExposedIndexRoute,
  postApiV1ExposedExposedAppActionIdExecuteIndexRoute,
} from '../routes'

export const getApiV1CheckIndexRouteHandler: RouteHandler<typeof getApiV1CheckIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1ConfigurationLinkIndexRouteHandler: RouteHandler<
  typeof getApiV1ConfigurationLinkIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1ExposedIndexRouteHandler: RouteHandler<
  typeof getApiV1ExposedIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiV1ExposedExposedAppActionIdExecuteIndexRouteHandler: RouteHandler<
  typeof postApiV1ExposedExposedAppActionIdExecuteIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
