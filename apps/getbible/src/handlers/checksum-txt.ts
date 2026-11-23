import type { RouteHandler } from '@hono/zod-openapi'
import type { getChecksumTxtRoute } from '../routes'

export const getChecksumTxtRouteHandler: RouteHandler<typeof getChecksumTxtRoute> = async (c) => {
  throw new Error('Not implemented')
}
