import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAdjustmentsAdjustmentIdCreditNoteRoute,
  getAdjustmentsRoute,
  postAdjustmentsRoute,
} from '../routes'

export const getAdjustmentsRouteHandler: RouteHandler<typeof getAdjustmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdjustmentsRouteHandler: RouteHandler<typeof postAdjustmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdjustmentsAdjustmentIdCreditNoteRouteHandler: RouteHandler<
  typeof getAdjustmentsAdjustmentIdCreditNoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
