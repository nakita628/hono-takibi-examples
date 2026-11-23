import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getShieldInformationBarrierReportsRoute,
  getShieldInformationBarrierReportsShieldInformationBarrierReportIdRoute,
  postShieldInformationBarrierReportsRoute,
} from '../routes'

export const getShieldInformationBarrierReportsRouteHandler: RouteHandler<
  typeof getShieldInformationBarrierReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postShieldInformationBarrierReportsRouteHandler: RouteHandler<
  typeof postShieldInformationBarrierReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShieldInformationBarrierReportsShieldInformationBarrierReportIdRouteHandler: RouteHandler<
  typeof getShieldInformationBarrierReportsShieldInformationBarrierReportIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
