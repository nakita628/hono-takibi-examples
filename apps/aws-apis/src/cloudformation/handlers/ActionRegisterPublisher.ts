import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRegisterPublisherRoute, postActionRegisterPublisherRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionRegisterPublisherHandler = app
  .openapi(getActionRegisterPublisherRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRegisterPublisherRoute, (c) => {
    throw new Error('Not implemented')
  })
