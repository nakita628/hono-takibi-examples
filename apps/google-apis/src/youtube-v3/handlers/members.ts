import { OpenAPIHono } from '@hono/zod-openapi'
import { getYoutubeV3MembersRoute } from '../routes'

const app = new OpenAPIHono()

export const membersHandler = app.openapi(getYoutubeV3MembersRoute, (c) => {
  throw new Error('Not implemented')
})
