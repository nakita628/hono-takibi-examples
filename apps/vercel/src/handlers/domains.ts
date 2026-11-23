import type { RouteHandler } from '@hono/zod-openapi'
import type { getDomainsRecordsRecordIdRoute, putDomainsDomainRecordsRoute } from '../routes'

export const putDomainsDomainRecordsRouteHandler: RouteHandler<
  typeof putDomainsDomainRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsRecordsRecordIdRouteHandler: RouteHandler<
  typeof getDomainsRecordsRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
