import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postApprovalsApprovalIdRoute,
  postApprovalsSessionSessionIdApprovalIdRoute,
} from '../routes'

export const postApprovalsSessionSessionIdApprovalIdRouteHandler: RouteHandler<
  typeof postApprovalsSessionSessionIdApprovalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postApprovalsApprovalIdRouteHandler: RouteHandler<
  typeof postApprovalsApprovalIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
