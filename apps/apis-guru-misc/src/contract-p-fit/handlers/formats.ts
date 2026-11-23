import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFormatsFormatIdRoute,
  getFormatsDocumentTypesRoute,
  getFormatsFormatIdRoute,
  getFormatsRoute,
  getFormatsScopeTagFieldsRoute,
  patchFormatsFormatIdRoute,
  postFormatsRoute,
} from '../routes'

export const getFormatsRouteHandler: RouteHandler<typeof getFormatsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFormatsRouteHandler: RouteHandler<typeof postFormatsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormatsDocumentTypesRouteHandler: RouteHandler<
  typeof getFormatsDocumentTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFormatsFormatIdRouteHandler: RouteHandler<
  typeof deleteFormatsFormatIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormatsFormatIdRouteHandler: RouteHandler<typeof getFormatsFormatIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchFormatsFormatIdRouteHandler: RouteHandler<
  typeof patchFormatsFormatIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFormatsScopeTagFieldsRouteHandler: RouteHandler<
  typeof getFormatsScopeTagFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
