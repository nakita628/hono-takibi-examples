import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetFlowLogsIntegrationTemplateRoute,
  postActionGetFlowLogsIntegrationTemplateRoute,
} from '../routes'

export const getActionGetFlowLogsIntegrationTemplateRouteHandler: RouteHandler<
  typeof getActionGetFlowLogsIntegrationTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetFlowLogsIntegrationTemplateRouteHandler: RouteHandler<
  typeof postActionGetFlowLogsIntegrationTemplateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
