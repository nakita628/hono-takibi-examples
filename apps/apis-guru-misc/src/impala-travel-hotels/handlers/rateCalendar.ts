import { OpenAPIHono } from '@hono/zod-openapi'
import { getHotelsHotelIdRatePlansRatePlanIdRoute, getHotelsHotelIdRatePlansRoute } from '../routes'

const app = new OpenAPIHono()

export const rateCalendarHandler = app
  .openapi(getHotelsHotelIdRatePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHotelsHotelIdRatePlansRatePlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
