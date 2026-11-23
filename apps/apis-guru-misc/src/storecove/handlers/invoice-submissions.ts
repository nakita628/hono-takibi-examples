import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInvoiceSubmissionsGuidEvidenceRoute,
  postInvoiceSubmissionsPreflightRoute,
  postInvoiceSubmissionsRoute,
} from '../routes'

export const postInvoiceSubmissionsRouteHandler: RouteHandler<
  typeof postInvoiceSubmissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postInvoiceSubmissionsPreflightRouteHandler: RouteHandler<
  typeof postInvoiceSubmissionsPreflightRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInvoiceSubmissionsGuidEvidenceRouteHandler: RouteHandler<
  typeof getInvoiceSubmissionsGuidEvidenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
