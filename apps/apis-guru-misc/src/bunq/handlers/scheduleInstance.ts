import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceRoute,
  putUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scheduleInstanceHandler = app
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putUserUserIDMonetaryAccountMonetaryAccountIDScheduleScheduleIDScheduleInstanceItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
