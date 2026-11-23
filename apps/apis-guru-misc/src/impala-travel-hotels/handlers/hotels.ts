import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHotelsHotelIdRatePlansRatePlanIdRoute,
  getHotelsHotelIdRatePlansRoute,
  getHotelsHotelIdRoute,
  getHotelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hotelsHandler = app
  .openapi(getHotelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHotelsHotelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHotelsHotelIdRatePlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHotelsHotelIdRatePlansRatePlanIdRoute, (c) => {
    throw new Error('Not implemented')
  })
