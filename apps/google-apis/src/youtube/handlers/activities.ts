import { OpenAPIHono } from '@hono/zod-openapi'
import { getYoutubeV3ActivitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const activitiesHandler = app.openapi(getYoutubeV3ActivitiesRoute, (c) => {
  throw new Error('Not implemented')
})
