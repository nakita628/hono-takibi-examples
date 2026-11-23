import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteConnectionConnectionIdRoute,
  getConnectionConnectionIdRoute,
  getConnectionRoute,
  patchConnectionConnectionIdMetadataRoute,
  patchConnectionMetadataRoute,
  postConnectionConnectionIdMetadataRoute,
  postConnectionMetadataRoute,
  postConnectionRoute,
} from '../routes'

export const getConnectionRouteHandler: RouteHandler<typeof getConnectionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postConnectionRouteHandler: RouteHandler<typeof postConnectionRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getConnectionConnectionIdRouteHandler: RouteHandler<
  typeof getConnectionConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteConnectionConnectionIdRouteHandler: RouteHandler<
  typeof deleteConnectionConnectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConnectionMetadataRouteHandler: RouteHandler<
  typeof postConnectionMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchConnectionMetadataRouteHandler: RouteHandler<
  typeof patchConnectionMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postConnectionConnectionIdMetadataRouteHandler: RouteHandler<
  typeof postConnectionConnectionIdMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchConnectionConnectionIdMetadataRouteHandler: RouteHandler<
  typeof patchConnectionConnectionIdMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
