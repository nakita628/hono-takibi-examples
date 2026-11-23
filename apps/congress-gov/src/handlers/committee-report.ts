import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCommitteeReportCongressReportTypeReportNumberRoute,
  getCommitteeReportCongressReportTypeReportNumberTextRoute,
  getCommitteeReportCongressReportTypeRoute,
  getCommitteeReportCongressRoute,
  getCommitteeReportRoute,
} from '../routes'

export const getCommitteeReportRouteHandler: RouteHandler<typeof getCommitteeReportRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getCommitteeReportCongressRouteHandler: RouteHandler<
  typeof getCommitteeReportCongressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommitteeReportCongressReportTypeRouteHandler: RouteHandler<
  typeof getCommitteeReportCongressReportTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommitteeReportCongressReportTypeReportNumberRouteHandler: RouteHandler<
  typeof getCommitteeReportCongressReportTypeReportNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCommitteeReportCongressReportTypeReportNumberTextRouteHandler: RouteHandler<
  typeof getCommitteeReportCongressReportTypeReportNumberTextRoute
> = async (c) => {
  throw new Error('Not implemented')
}
