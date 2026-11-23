import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getReportsAgedPayablesByContactRoute,
  getReportsAgedReceivablesByContactRoute,
  getReportsBalanceSheetRoute,
  getReportsBankSummaryRoute,
  getReportsBudgetSummaryRoute,
  getReportsExecutiveSummaryRoute,
  getReportsProfitAndLossRoute,
  getReportsReportIDRoute,
  getReportsRoute,
  getReportsTenNinetyNineRoute,
  getReportsTrialBalanceRoute,
} from '../routes'

export const getReportsTenNinetyNineRouteHandler: RouteHandler<
  typeof getReportsTenNinetyNineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsAgedPayablesByContactRouteHandler: RouteHandler<
  typeof getReportsAgedPayablesByContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsAgedReceivablesByContactRouteHandler: RouteHandler<
  typeof getReportsAgedReceivablesByContactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsBalanceSheetRouteHandler: RouteHandler<
  typeof getReportsBalanceSheetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsBankSummaryRouteHandler: RouteHandler<
  typeof getReportsBankSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsReportIDRouteHandler: RouteHandler<typeof getReportsReportIDRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getReportsBudgetSummaryRouteHandler: RouteHandler<
  typeof getReportsBudgetSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsExecutiveSummaryRouteHandler: RouteHandler<
  typeof getReportsExecutiveSummaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsRouteHandler: RouteHandler<typeof getReportsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsProfitAndLossRouteHandler: RouteHandler<
  typeof getReportsProfitAndLossRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getReportsTrialBalanceRouteHandler: RouteHandler<
  typeof getReportsTrialBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
