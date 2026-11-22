import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1ReportsSettlementDetailsReportDateRoute,
  getV1ReportsSettlementNetworkTotalsRoute,
  getV1ReportsSettlementNetworkTotalsTokenRoute,
  getV1ReportsSettlementSummaryReportDateRoute,
} from '../routes'

export const getV1ReportsSettlementDetailsReportDateRouteHandler: RouteHandler<
  typeof getV1ReportsSettlementDetailsReportDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportsSettlementSummaryReportDateRouteHandler: RouteHandler<
  typeof getV1ReportsSettlementSummaryReportDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportsSettlementNetworkTotalsRouteHandler: RouteHandler<
  typeof getV1ReportsSettlementNetworkTotalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReportsSettlementNetworkTotalsTokenRouteHandler: RouteHandler<
  typeof getV1ReportsSettlementNetworkTotalsTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
