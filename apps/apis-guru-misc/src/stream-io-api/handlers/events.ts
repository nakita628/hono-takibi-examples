import { OpenAPIHono } from '@hono/zod-openapi'
import { postChannelsTypeIdEventRoute, postUsersUserIdEventRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app
  .openapi(postChannelsTypeIdEventRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdEventRoute, (c) => {
    throw new Error('Not implemented')
  })
