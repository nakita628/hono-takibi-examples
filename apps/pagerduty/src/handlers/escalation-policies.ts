import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getEscalationPoliciesRoute,
  postEscalationPoliciesRoute,
  getEscalationPoliciesIdRoute,
  deleteEscalationPoliciesIdRoute,
  putEscalationPoliciesIdRoute,
  getEscalationPoliciesIdAuditRecordsRoute,
} from '../routes'

export const getEscalationPoliciesRouteHandler: RouteHandler<
  typeof getEscalationPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postEscalationPoliciesRouteHandler: RouteHandler<
  typeof postEscalationPoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEscalationPoliciesIdRouteHandler: RouteHandler<
  typeof getEscalationPoliciesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteEscalationPoliciesIdRouteHandler: RouteHandler<
  typeof deleteEscalationPoliciesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putEscalationPoliciesIdRouteHandler: RouteHandler<
  typeof putEscalationPoliciesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getEscalationPoliciesIdAuditRecordsRouteHandler: RouteHandler<
  typeof getEscalationPoliciesIdAuditRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
