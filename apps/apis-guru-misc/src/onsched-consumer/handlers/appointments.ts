import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConsumerV1AppointmentsIdRoute,
  getConsumerV1AppointmentsBookingfieldsRoute,
  getConsumerV1AppointmentsCustomfieldsRoute,
  getConsumerV1AppointmentsIdRoute,
  getConsumerV1AppointmentsRoute,
  postConsumerV1AppointmentsRoute,
  putConsumerV1AppointmentsIdBookRoute,
  putConsumerV1AppointmentsIdCancelRoute,
  putConsumerV1AppointmentsIdConfirmRoute,
  putConsumerV1AppointmentsIdNoshowRoute,
  putConsumerV1AppointmentsIdRescheduleRoute,
  putConsumerV1AppointmentsIdReserveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appointmentsHandler = app
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
