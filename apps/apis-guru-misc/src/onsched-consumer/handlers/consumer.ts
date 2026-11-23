import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConsumerV1AppointmentsIdRoute,
  deleteConsumerV1CustomersIdRoute,
  getConsumerV1AppointmentsBookingfieldsRoute,
  getConsumerV1AppointmentsCustomfieldsRoute,
  getConsumerV1AppointmentsIdRoute,
  getConsumerV1AppointmentsRoute,
  getConsumerV1AvailabilityServiceIdStartDateEndDateDaysRoute,
  getConsumerV1AvailabilityServiceIdStartDateEndDateRoute,
  getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRoute,
  getConsumerV1CustomersBookingfieldsRoute,
  getConsumerV1CustomersCountriesRoute,
  getConsumerV1CustomersCustomfieldsRoute,
  getConsumerV1CustomersIdRoute,
  getConsumerV1CustomersRoute,
  getConsumerV1CustomersStatesRoute,
  getConsumerV1LocationsIdRoute,
  getConsumerV1LocationsRoute,
  getConsumerV1ResourcegroupsIdRoute,
  getConsumerV1ResourcegroupsRoute,
  getConsumerV1ResourcesIdRoute,
  getConsumerV1ResourcesIdServicesRoute,
  getConsumerV1ResourcesRoute,
  getConsumerV1ServicegroupsIdRoute,
  getConsumerV1ServicegroupsRoute,
  getConsumerV1ServicesAllocationsIdRoute,
  getConsumerV1ServicesIdAllocationsRoute,
  getConsumerV1ServicesIdResourcesRoute,
  getConsumerV1ServicesIdRoute,
  getConsumerV1ServicesRoute,
  postConsumerV1AppointmentsRoute,
  postConsumerV1CustomersRoute,
  putConsumerV1AppointmentsIdBookRoute,
  putConsumerV1AppointmentsIdCancelRoute,
  putConsumerV1AppointmentsIdConfirmRoute,
  putConsumerV1AppointmentsIdNoshowRoute,
  putConsumerV1AppointmentsIdRescheduleRoute,
  putConsumerV1AppointmentsIdReserveRoute,
  putConsumerV1CustomersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const consumerHandler = app
  .openapi(getConsumerV1AppointmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumerV1AppointmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1AppointmentsBookingfieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1AppointmentsCustomfieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConsumerV1AppointmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1AppointmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConsumerV1AppointmentsIdBookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConsumerV1AppointmentsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConsumerV1AppointmentsIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConsumerV1AppointmentsIdNoshowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConsumerV1AppointmentsIdRescheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConsumerV1AppointmentsIdReserveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1AvailabilityServiceIdStartDateEndDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1AvailabilityServiceIdStartDateEndDateDaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConsumerV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1CustomersBookingfieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1CustomersCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1CustomersCustomfieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1CustomersStatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConsumerV1CustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1CustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConsumerV1CustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1LocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1LocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ResourcegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ResourcegroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ResourcesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ResourcesIdServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ServicegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ServicegroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ServicesAllocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ServicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ServicesIdAllocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConsumerV1ServicesIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
