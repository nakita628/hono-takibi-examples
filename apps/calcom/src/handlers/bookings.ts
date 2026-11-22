import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2BookingsBookingUidCalendarLinksRoute,
  getV2BookingsBookingUidConferencingSessionsRoute,
  getV2BookingsBookingUidRecordingsRoute,
  getV2BookingsBookingUidReferencesRoute,
  getV2BookingsBookingUidRoute,
  getV2BookingsBookingUidTranscriptsRoute,
  getV2BookingsBySeatSeatUidRoute,
  getV2BookingsRoute,
  patchV2BookingsBookingUidLocationRoute,
  postV2BookingsBookingUidCancelRoute,
  postV2BookingsBookingUidConfirmRoute,
  postV2BookingsBookingUidDeclineRoute,
  postV2BookingsBookingUidMarkAbsentRoute,
  postV2BookingsBookingUidReassignRoute,
  postV2BookingsBookingUidReassignUserIdRoute,
  postV2BookingsBookingUidRescheduleRoute,
  postV2BookingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bookingsHandler = app
  .openapi(postV2BookingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBySeatSeatUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingUidRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingUidTranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidRescheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidMarkAbsentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidReassignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidReassignUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingUidDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingUidCalendarLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingUidReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingUidConferencingSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2BookingsBookingUidLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
