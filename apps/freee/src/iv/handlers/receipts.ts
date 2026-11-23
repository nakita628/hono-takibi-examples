import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getReceiptsIdRoute,
  getReceiptsRoute,
  getReceiptsTemplatesRoute,
  postReceiptsRoute,
  putReceiptsIdCancelRoute,
  putReceiptsIdRoute,
  putReceiptsIdUncancelRoute,
} from '../routes'

export const getReceiptsRouteHandler: RouteHandler<typeof getReceiptsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReceiptsRouteHandler: RouteHandler<typeof postReceiptsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReceiptsTemplatesRouteHandler: RouteHandler<
  typeof getReceiptsTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReceiptsIdRouteHandler: RouteHandler<typeof getReceiptsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putReceiptsIdRouteHandler: RouteHandler<typeof putReceiptsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putReceiptsIdCancelRouteHandler: RouteHandler<
  typeof putReceiptsIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReceiptsIdUncancelRouteHandler: RouteHandler<
  typeof putReceiptsIdUncancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
