import type { RouteHandler } from '@hono/zod-openapi'
import type { getDialogOpenRoute } from '../routes'

export const getDialogOpenRouteHandler: RouteHandler<typeof getDialogOpenRoute> = async (c) => {
  throw new Error('Not implemented')
}
