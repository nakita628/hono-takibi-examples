import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePrepaymentsPrepaymentIDAllocationsAllocationIDRoute,
  getPrepaymentsPrepaymentIDHistoryRoute,
  getPrepaymentsPrepaymentIDRoute,
  getPrepaymentsRoute,
  putPrepaymentsPrepaymentIDAllocationsRoute,
  putPrepaymentsPrepaymentIDHistoryRoute,
} from '../routes'

export const getPrepaymentsRouteHandler: RouteHandler<typeof getPrepaymentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrepaymentsPrepaymentIDRouteHandler: RouteHandler<
  typeof getPrepaymentsPrepaymentIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPrepaymentsPrepaymentIDAllocationsRouteHandler: RouteHandler<
  typeof putPrepaymentsPrepaymentIDAllocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrepaymentsPrepaymentIDAllocationsAllocationIDRouteHandler: RouteHandler<
  typeof deletePrepaymentsPrepaymentIDAllocationsAllocationIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrepaymentsPrepaymentIDHistoryRouteHandler: RouteHandler<
  typeof getPrepaymentsPrepaymentIDHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPrepaymentsPrepaymentIDHistoryRouteHandler: RouteHandler<
  typeof putPrepaymentsPrepaymentIDHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
