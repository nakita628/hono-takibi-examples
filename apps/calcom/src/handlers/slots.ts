import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2SlotsReservationsUidRoute,
  getV2SlotsReservationsUidRoute,
  getV2SlotsRoute,
  patchV2SlotsReservationsUidRoute,
  postV2SlotsReservationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const slotsHandler = app
  .openapi(getV2SlotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SlotsReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SlotsReservationsUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SlotsReservationsUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SlotsReservationsUidRoute, (c) => {
    throw new Error('Not implemented')
  })
