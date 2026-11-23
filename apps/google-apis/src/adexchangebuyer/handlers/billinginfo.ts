import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBillinginfoAccountIdBillingIdRoute,
  getBillinginfoAccountIdRoute,
  getBillinginfoRoute,
  patchBillinginfoAccountIdBillingIdRoute,
  putBillinginfoAccountIdBillingIdRoute,
} from '../routes'

export const getBillinginfoRouteHandler: RouteHandler<typeof getBillinginfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBillinginfoAccountIdRouteHandler: RouteHandler<
  typeof getBillinginfoAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBillinginfoAccountIdBillingIdRouteHandler: RouteHandler<
  typeof getBillinginfoAccountIdBillingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchBillinginfoAccountIdBillingIdRouteHandler: RouteHandler<
  typeof patchBillinginfoAccountIdBillingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBillinginfoAccountIdBillingIdRouteHandler: RouteHandler<
  typeof putBillinginfoAccountIdBillingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
