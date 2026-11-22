import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2BookingsBookingIdRoute,
  getV2BookingsBusinessBookingProfileRoute,
  getV2BookingsTeamMemberBookingProfilesRoute,
  getV2BookingsTeamMemberBookingProfilesTeamMemberIdRoute,
  postV2BookingsAvailabilitySearchRoute,
  postV2BookingsBookingIdCancelRoute,
  postV2BookingsRoute,
  putV2BookingsBookingIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bookingsHandler = app
  .openapi(postV2BookingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsAvailabilitySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBusinessBookingProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsTeamMemberBookingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsTeamMemberBookingProfilesTeamMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BookingsBookingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2BookingsBookingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BookingsBookingIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
