import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteReturnPolicyReturnPolicyIdRoute,
  getReturnPolicyGetByPolicyNameRoute,
  getReturnPolicyReturnPolicyIdRoute,
  getReturnPolicyRoute,
  postReturnPolicyRoute,
  putReturnPolicyReturnPolicyIdRoute,
} from '../routes'

export const getReturnPolicyRouteHandler: RouteHandler<typeof getReturnPolicyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReturnPolicyRouteHandler: RouteHandler<typeof postReturnPolicyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getReturnPolicyGetByPolicyNameRouteHandler: RouteHandler<
  typeof getReturnPolicyGetByPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReturnPolicyReturnPolicyIdRouteHandler: RouteHandler<
  typeof deleteReturnPolicyReturnPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReturnPolicyReturnPolicyIdRouteHandler: RouteHandler<
  typeof getReturnPolicyReturnPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putReturnPolicyReturnPolicyIdRouteHandler: RouteHandler<
  typeof putReturnPolicyReturnPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
