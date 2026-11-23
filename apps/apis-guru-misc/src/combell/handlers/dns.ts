import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDnsDomainNameRecordsRecordIdRoute,
  getDnsDomainNameRecordsRecordIdRoute,
  getDnsDomainNameRecordsRoute,
  postDnsDomainNameRecordsRoute,
  putDnsDomainNameRecordsRecordIdRoute,
} from '../routes'

export const getDnsDomainNameRecordsRouteHandler: RouteHandler<
  typeof getDnsDomainNameRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDnsDomainNameRecordsRouteHandler: RouteHandler<
  typeof postDnsDomainNameRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDnsDomainNameRecordsRecordIdRouteHandler: RouteHandler<
  typeof deleteDnsDomainNameRecordsRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDnsDomainNameRecordsRecordIdRouteHandler: RouteHandler<
  typeof getDnsDomainNameRecordsRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDnsDomainNameRecordsRecordIdRouteHandler: RouteHandler<
  typeof putDnsDomainNameRecordsRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
