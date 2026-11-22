import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDMonetaryAccountMonetaryAccountIDScheduleItemIdRoute,
  getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRoute,
  getUserUserIDScheduleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scheduleHandler = app
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDScheduleItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDMonetaryAccountMonetaryAccountIDScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
