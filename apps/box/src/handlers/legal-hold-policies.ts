import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLegalHoldPoliciesLegalHoldPolicyIdRoute,
  getLegalHoldPoliciesLegalHoldPolicyIdRoute,
  getLegalHoldPoliciesRoute,
  postLegalHoldPoliciesRoute,
  putLegalHoldPoliciesLegalHoldPolicyIdRoute,
} from '../routes'

export const getLegalHoldPoliciesRouteHandler: RouteHandler<
  typeof getLegalHoldPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postLegalHoldPoliciesRouteHandler: RouteHandler<
  typeof postLegalHoldPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getLegalHoldPoliciesLegalHoldPolicyIdRouteHandler: RouteHandler<
  typeof getLegalHoldPoliciesLegalHoldPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putLegalHoldPoliciesLegalHoldPolicyIdRouteHandler: RouteHandler<
  typeof putLegalHoldPoliciesLegalHoldPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLegalHoldPoliciesLegalHoldPolicyIdRouteHandler: RouteHandler<
  typeof deleteLegalHoldPoliciesLegalHoldPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
