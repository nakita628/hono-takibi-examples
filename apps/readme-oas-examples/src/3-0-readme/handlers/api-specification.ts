import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteApiSpecificationIdRoute,
  getApiSpecificationRoute,
  postApiSpecificationRoute,
  putApiSpecificationIdRoute,
} from '../routes'

export const getApiSpecificationRouteHandler: RouteHandler<
  typeof getApiSpecificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApiSpecificationRouteHandler: RouteHandler<
  typeof postApiSpecificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putApiSpecificationIdRouteHandler: RouteHandler<
  typeof putApiSpecificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteApiSpecificationIdRouteHandler: RouteHandler<
  typeof deleteApiSpecificationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
