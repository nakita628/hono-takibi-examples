import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCustomersCustomerIdMandatesRoute,
  getMandatesMandateIdRoute,
  postMandatesRevokeMandateIdRoute,
} from '../routes'

export const getMandatesMandateIdRouteHandler: RouteHandler<
  typeof getMandatesMandateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMandatesRevokeMandateIdRouteHandler: RouteHandler<
  typeof postMandatesRevokeMandateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomersCustomerIdMandatesRouteHandler: RouteHandler<
  typeof getCustomersCustomerIdMandatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
