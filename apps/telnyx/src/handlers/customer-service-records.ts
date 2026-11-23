import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCustomerServiceRecordsCustomerServiceRecordIdRoute,
  getCustomerServiceRecordsRoute,
  postCustomerServiceRecordsPhoneNumberCoveragesRoute,
  postCustomerServiceRecordsRoute,
} from '../routes'

export const getCustomerServiceRecordsRouteHandler: RouteHandler<
  typeof getCustomerServiceRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomerServiceRecordsRouteHandler: RouteHandler<
  typeof postCustomerServiceRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCustomerServiceRecordsPhoneNumberCoveragesRouteHandler: RouteHandler<
  typeof postCustomerServiceRecordsPhoneNumberCoveragesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCustomerServiceRecordsCustomerServiceRecordIdRouteHandler: RouteHandler<
  typeof getCustomerServiceRecordsCustomerServiceRecordIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
