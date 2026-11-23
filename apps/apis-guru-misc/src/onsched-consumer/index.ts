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
} from './routes'
import {
  deleteConsumerV1AppointmentsIdRouteHandler,
  deleteConsumerV1CustomersIdRouteHandler,
  getConsumerV1AppointmentsBookingfieldsRouteHandler,
  getConsumerV1AppointmentsCustomfieldsRouteHandler,
  getConsumerV1AppointmentsIdRouteHandler,
  getConsumerV1AppointmentsRouteHandler,
  getConsumerV1AvailabilityServiceIdStartDateEndDateDaysRouteHandler,
  getConsumerV1AvailabilityServiceIdStartDateEndDateRouteHandler,
  getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRouteHandler,
  getConsumerV1CustomersBookingfieldsRouteHandler,
  getConsumerV1CustomersCountriesRouteHandler,
  getConsumerV1CustomersCustomfieldsRouteHandler,
  getConsumerV1CustomersIdRouteHandler,
  getConsumerV1CustomersRouteHandler,
  getConsumerV1CustomersStatesRouteHandler,
  getConsumerV1LocationsIdRouteHandler,
  getConsumerV1LocationsRouteHandler,
  getConsumerV1ResourcegroupsIdRouteHandler,
  getConsumerV1ResourcegroupsRouteHandler,
  getConsumerV1ResourcesIdRouteHandler,
  getConsumerV1ResourcesIdServicesRouteHandler,
  getConsumerV1ResourcesRouteHandler,
  getConsumerV1ServicegroupsIdRouteHandler,
  getConsumerV1ServicegroupsRouteHandler,
  getConsumerV1ServicesAllocationsIdRouteHandler,
  getConsumerV1ServicesIdAllocationsRouteHandler,
  getConsumerV1ServicesIdResourcesRouteHandler,
  getConsumerV1ServicesIdRouteHandler,
  getConsumerV1ServicesRouteHandler,
  postConsumerV1AppointmentsRouteHandler,
  postConsumerV1CustomersRouteHandler,
  putConsumerV1AppointmentsIdBookRouteHandler,
  putConsumerV1AppointmentsIdCancelRouteHandler,
  putConsumerV1AppointmentsIdConfirmRouteHandler,
  putConsumerV1AppointmentsIdNoshowRouteHandler,
  putConsumerV1AppointmentsIdRescheduleRouteHandler,
  putConsumerV1AppointmentsIdReserveRouteHandler,
  putConsumerV1CustomersIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getConsumerV1AppointmentsRoute, getConsumerV1AppointmentsRouteHandler)
  .openapi(postConsumerV1AppointmentsRoute, postConsumerV1AppointmentsRouteHandler)
  .openapi(
    getConsumerV1AppointmentsBookingfieldsRoute,
    getConsumerV1AppointmentsBookingfieldsRouteHandler,
  )
  .openapi(
    getConsumerV1AppointmentsCustomfieldsRoute,
    getConsumerV1AppointmentsCustomfieldsRouteHandler,
  )
  .openapi(deleteConsumerV1AppointmentsIdRoute, deleteConsumerV1AppointmentsIdRouteHandler)
  .openapi(getConsumerV1AppointmentsIdRoute, getConsumerV1AppointmentsIdRouteHandler)
  .openapi(putConsumerV1AppointmentsIdBookRoute, putConsumerV1AppointmentsIdBookRouteHandler)
  .openapi(putConsumerV1AppointmentsIdCancelRoute, putConsumerV1AppointmentsIdCancelRouteHandler)
  .openapi(putConsumerV1AppointmentsIdConfirmRoute, putConsumerV1AppointmentsIdConfirmRouteHandler)
  .openapi(putConsumerV1AppointmentsIdNoshowRoute, putConsumerV1AppointmentsIdNoshowRouteHandler)
  .openapi(
    putConsumerV1AppointmentsIdRescheduleRoute,
    putConsumerV1AppointmentsIdRescheduleRouteHandler,
  )
  .openapi(putConsumerV1AppointmentsIdReserveRoute, putConsumerV1AppointmentsIdReserveRouteHandler)
  .openapi(
    getConsumerV1AvailabilityServiceIdStartDateEndDateRoute,
    getConsumerV1AvailabilityServiceIdStartDateEndDateRouteHandler,
  )
  .openapi(
    getConsumerV1AvailabilityServiceIdStartDateEndDateDaysRoute,
    getConsumerV1AvailabilityServiceIdStartDateEndDateDaysRouteHandler,
  )
  .openapi(
    getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRoute,
    getConsumerV1AvailabilityServiceIdStartDateEndDateUnavailableRouteHandler,
  )
  .openapi(getConsumerV1CustomersRoute, getConsumerV1CustomersRouteHandler)
  .openapi(postConsumerV1CustomersRoute, postConsumerV1CustomersRouteHandler)
  .openapi(
    getConsumerV1CustomersBookingfieldsRoute,
    getConsumerV1CustomersBookingfieldsRouteHandler,
  )
  .openapi(getConsumerV1CustomersCountriesRoute, getConsumerV1CustomersCountriesRouteHandler)
  .openapi(getConsumerV1CustomersCustomfieldsRoute, getConsumerV1CustomersCustomfieldsRouteHandler)
  .openapi(getConsumerV1CustomersStatesRoute, getConsumerV1CustomersStatesRouteHandler)
  .openapi(deleteConsumerV1CustomersIdRoute, deleteConsumerV1CustomersIdRouteHandler)
  .openapi(getConsumerV1CustomersIdRoute, getConsumerV1CustomersIdRouteHandler)
  .openapi(putConsumerV1CustomersIdRoute, putConsumerV1CustomersIdRouteHandler)
  .openapi(getConsumerV1LocationsRoute, getConsumerV1LocationsRouteHandler)
  .openapi(getConsumerV1LocationsIdRoute, getConsumerV1LocationsIdRouteHandler)
  .openapi(getConsumerV1ResourcegroupsRoute, getConsumerV1ResourcegroupsRouteHandler)
  .openapi(getConsumerV1ResourcegroupsIdRoute, getConsumerV1ResourcegroupsIdRouteHandler)
  .openapi(getConsumerV1ResourcesRoute, getConsumerV1ResourcesRouteHandler)
  .openapi(getConsumerV1ResourcesIdRoute, getConsumerV1ResourcesIdRouteHandler)
  .openapi(getConsumerV1ResourcesIdServicesRoute, getConsumerV1ResourcesIdServicesRouteHandler)
  .openapi(getConsumerV1ServicegroupsRoute, getConsumerV1ServicegroupsRouteHandler)
  .openapi(getConsumerV1ServicegroupsIdRoute, getConsumerV1ServicegroupsIdRouteHandler)
  .openapi(getConsumerV1ServicesRoute, getConsumerV1ServicesRouteHandler)
  .openapi(getConsumerV1ServicesAllocationsIdRoute, getConsumerV1ServicesAllocationsIdRouteHandler)
  .openapi(getConsumerV1ServicesIdRoute, getConsumerV1ServicesIdRouteHandler)
  .openapi(getConsumerV1ServicesIdAllocationsRoute, getConsumerV1ServicesIdAllocationsRouteHandler)
  .openapi(getConsumerV1ServicesIdResourcesRoute, getConsumerV1ServicesIdResourcesRouteHandler)

export default app
