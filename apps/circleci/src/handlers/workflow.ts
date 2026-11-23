import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWorkflowIdJobRoute,
  getWorkflowIdRoute,
  postWorkflowIdApproveApprovalRequestIdRoute,
  postWorkflowIdCancelRoute,
  postWorkflowIdRerunRoute,
} from '../routes'

export const postWorkflowIdApproveApprovalRequestIdRouteHandler: RouteHandler<
  typeof postWorkflowIdApproveApprovalRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkflowIdCancelRouteHandler: RouteHandler<
  typeof postWorkflowIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkflowIdJobRouteHandler: RouteHandler<typeof getWorkflowIdJobRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postWorkflowIdRerunRouteHandler: RouteHandler<
  typeof postWorkflowIdRerunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkflowIdRouteHandler: RouteHandler<typeof getWorkflowIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
