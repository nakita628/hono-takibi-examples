import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSendDiagnosticInterruptRoute,
  postActionSendDiagnosticInterruptRoute,
} from '../routes'

export const getActionSendDiagnosticInterruptRouteHandler: RouteHandler<
  typeof getActionSendDiagnosticInterruptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSendDiagnosticInterruptRouteHandler: RouteHandler<
  typeof postActionSendDiagnosticInterruptRoute
> = async (c) => {
  throw new Error('Not implemented')
}
