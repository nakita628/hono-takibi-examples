import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getQuotationsIdRoute,
  getQuotationsRoute,
  patchQuotationsIdRoute,
  postQuotationsIdCancellationRoute,
  postQuotationsRoute,
  putQuotationsIdQuotationStatusRoute,
} from '../routes'

export const getQuotationsRouteHandler: RouteHandler<typeof getQuotationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQuotationsRouteHandler: RouteHandler<typeof postQuotationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuotationsIdRouteHandler: RouteHandler<typeof getQuotationsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchQuotationsIdRouteHandler: RouteHandler<typeof patchQuotationsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putQuotationsIdQuotationStatusRouteHandler: RouteHandler<
  typeof putQuotationsIdQuotationStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postQuotationsIdCancellationRouteHandler: RouteHandler<
  typeof postQuotationsIdCancellationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
