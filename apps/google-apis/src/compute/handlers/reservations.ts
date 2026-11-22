import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectZonesZoneReservationsReservationRoute,
  getProjectsProjectAggregatedReservationsRoute,
  getProjectsProjectZonesZoneReservationsReservationRoute,
  getProjectsProjectZonesZoneReservationsResourceGetIamPolicyRoute,
  getProjectsProjectZonesZoneReservationsRoute,
  patchProjectsProjectZonesZoneReservationsReservationRoute,
  postProjectsProjectZonesZoneReservationsReservationResizeRoute,
  postProjectsProjectZonesZoneReservationsResourceSetIamPolicyRoute,
  postProjectsProjectZonesZoneReservationsResourceTestIamPermissionsRoute,
  postProjectsProjectZonesZoneReservationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reservationsHandler = app
  .openapi(getProjectsProjectAggregatedReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectZonesZoneReservationsReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneReservationsReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectZonesZoneReservationsReservationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneReservationsReservationResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectZonesZoneReservationsResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneReservationsResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectZonesZoneReservationsResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
