import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionSubscribeRoute, postActionSubscribeRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionSubscribeHandler = app
  .openapi(getActionSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
