import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyInstanceCapacityReservationAttributesRoute,
  postActionModifyInstanceCapacityReservationAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyInstanceCapacityReservationAttributesHandler = app
  .openapi(getActionModifyInstanceCapacityReservationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyInstanceCapacityReservationAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
