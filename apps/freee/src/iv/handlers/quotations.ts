import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getQuotationsIdRoute,
  getQuotationsRoute,
  getQuotationsTemplatesRoute,
  postQuotationsRoute,
  putQuotationsIdCancelRoute,
  putQuotationsIdRoute,
  putQuotationsIdUncancelRoute,
} from '../routes'

export const getQuotationsRouteHandler: RouteHandler<typeof getQuotationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQuotationsRouteHandler: RouteHandler<typeof postQuotationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuotationsTemplatesRouteHandler: RouteHandler<
  typeof getQuotationsTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getQuotationsIdRouteHandler: RouteHandler<typeof getQuotationsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putQuotationsIdRouteHandler: RouteHandler<typeof putQuotationsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putQuotationsIdCancelRouteHandler: RouteHandler<
  typeof putQuotationsIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putQuotationsIdUncancelRouteHandler: RouteHandler<
  typeof putQuotationsIdUncancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
