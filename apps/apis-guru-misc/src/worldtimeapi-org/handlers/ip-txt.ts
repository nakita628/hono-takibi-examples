import type { RouteHandler } from '@hono/zod-openapi'
import type { getIpTxtRoute } from '../routes'

export const getIpTxtRouteHandler: RouteHandler<typeof getIpTxtRoute> = async (c) => {
  throw new Error('Not implemented')
}
