import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postApprovalsSessionSessionIdApprovalIdRoute,
  postApprovalsApprovalIdRoute,
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
