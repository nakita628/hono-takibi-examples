import { OpenAPIHono } from '@hono/zod-openapi'
import { postUserAccountSessionEventSendRoute, postUserAccountSessionGetRoute } from '../routes'

const app = new OpenAPIHono()

export const userAccountHandler = app
  .openapi(postUserAccountSessionGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserAccountSessionEventSendRoute, (c) => {
    throw new Error('Not implemented')
  })
