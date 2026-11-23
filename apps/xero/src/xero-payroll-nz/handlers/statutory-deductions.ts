import type { RouteHandler } from '@hono/zod-openapi'
import type { getStatutoryDeductionsIdRoute, getStatutoryDeductionsRoute } from '../routes'

export const getStatutoryDeductionsRouteHandler: RouteHandler<
  typeof getStatutoryDeductionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStatutoryDeductionsIdRouteHandler: RouteHandler<
  typeof getStatutoryDeductionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
