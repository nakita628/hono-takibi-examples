import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInvoicesIdRoute,
  getInvoicesRoute,
  getInvoicesTemplatesRoute,
  postInvoicesRoute,
  putInvoicesIdCancelRoute,
  putInvoicesIdRoute,
  putInvoicesIdUncancelRoute,
} from '../routes'

export const getInvoicesRouteHandler: RouteHandler<typeof getInvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvoicesRouteHandler: RouteHandler<typeof postInvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInvoicesTemplatesRouteHandler: RouteHandler<
  typeof getInvoicesTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInvoicesIdRouteHandler: RouteHandler<typeof getInvoicesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putInvoicesIdRouteHandler: RouteHandler<typeof putInvoicesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putInvoicesIdCancelRouteHandler: RouteHandler<
  typeof putInvoicesIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putInvoicesIdUncancelRouteHandler: RouteHandler<
  typeof putInvoicesIdUncancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
