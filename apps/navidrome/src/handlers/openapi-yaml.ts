import type { RouteHandler } from '@hono/zod-openapi'
import type { getOpenapiYamlRoute } from '../routes'

export const getOpenapiYamlRouteHandler: RouteHandler<typeof getOpenapiYamlRoute> = async (c) => {
  throw new Error('Not implemented')
}
