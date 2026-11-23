import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAccountAwsAccountIdRoute,
  getAccountAwsAccountIdRoute,
  postAccountAwsAccountIdRoute,
} from '../routes'

export const postAccountAwsAccountIdRouteHandler: RouteHandler<
  typeof postAccountAwsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAccountAwsAccountIdRouteHandler: RouteHandler<
  typeof deleteAccountAwsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAccountAwsAccountIdRouteHandler: RouteHandler<
  typeof getAccountAwsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
