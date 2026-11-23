import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePoliciesIdRoute,
  getPoliciesIdRoute,
  getPoliciesRoute,
  patchPoliciesIdRoute,
  postPoliciesRoute,
  putPoliciesIdRoute,
} from '../routes'

export const deletePoliciesIdRouteHandler: RouteHandler<typeof deletePoliciesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPoliciesIdRouteHandler: RouteHandler<typeof getPoliciesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPoliciesIdRouteHandler: RouteHandler<typeof patchPoliciesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putPoliciesIdRouteHandler: RouteHandler<typeof putPoliciesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPoliciesRouteHandler: RouteHandler<typeof getPoliciesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPoliciesRouteHandler: RouteHandler<typeof postPoliciesRoute> = async (c) => {
  throw new Error('Not implemented')
}
