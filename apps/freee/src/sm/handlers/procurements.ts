import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getProcurementsIdRoute,
  getProcurementsRoute,
  patchProcurementsIdRoute,
  postProcurementsIdCancellationRoute,
  postProcurementsRoute,
  putProcurementsIdPaymentStatusRoute,
} from '../routes'

export const getProcurementsRouteHandler: RouteHandler<typeof getProcurementsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postProcurementsRouteHandler: RouteHandler<typeof postProcurementsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchProcurementsIdRouteHandler: RouteHandler<
  typeof patchProcurementsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getProcurementsIdRouteHandler: RouteHandler<typeof getProcurementsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postProcurementsIdCancellationRouteHandler: RouteHandler<
  typeof postProcurementsIdCancellationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putProcurementsIdPaymentStatusRouteHandler: RouteHandler<
  typeof putProcurementsIdPaymentStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
