import type { RouteHandler } from '@hono/zod-openapi'
import type { getInvoiceRemindersSettingsRoute } from '../routes'

export const getInvoiceRemindersSettingsRouteHandler: RouteHandler<
  typeof getInvoiceRemindersSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
