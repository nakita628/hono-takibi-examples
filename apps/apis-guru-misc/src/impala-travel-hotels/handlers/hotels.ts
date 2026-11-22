import { OpenAPIHono } from '@hono/zod-openapi'
import { getHotelsHotelIdRoute, getHotelsRoute } from '../routes'

const app = new OpenAPIHono()

export const hotelsHandler = app
  .openapi(getHotelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHotelsHotelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
