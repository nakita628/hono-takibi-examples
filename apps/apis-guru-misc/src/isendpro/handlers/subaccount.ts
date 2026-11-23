import type { RouteHandler } from '@hono/zod-openapi'
import type { postSubaccountRoute, putSubaccountRoute } from '../routes'

export const postSubaccountRouteHandler: RouteHandler<typeof postSubaccountRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putSubaccountRouteHandler: RouteHandler<typeof putSubaccountRoute> = async (c) => {
  throw new Error('Not implemented')
}
