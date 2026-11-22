import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getToolsRoute,
  postApprovalsApprovalIdRoute,
  postApprovalsSessionSessionIdApprovalIdRoute,
  postCodeExecuteRoute,
  postToolsInvokeRoute,
  postToolsSearchRoute,
} from '../routes'

export const getToolsRouteHandler: RouteHandler<typeof getToolsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postToolsSearchRouteHandler: RouteHandler<typeof postToolsSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postToolsInvokeRouteHandler: RouteHandler<typeof postToolsInvokeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCodeExecuteRouteHandler: RouteHandler<typeof postCodeExecuteRoute> = async (c) => {
  throw new Error('Not implemented')
}

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
