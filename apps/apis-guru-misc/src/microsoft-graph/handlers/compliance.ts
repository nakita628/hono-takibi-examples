import type { RouteHandler } from '@hono/zod-openapi'
import type { getComplianceRoute, patchComplianceRoute } from '../routes'

export const getComplianceRouteHandler: RouteHandler<typeof getComplianceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchComplianceRouteHandler: RouteHandler<typeof patchComplianceRoute> = async (c) => {
  throw new Error('Not implemented')
}
