import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiV1InviteVerifyTokenRoute,
  postApiV1RegisterRoute,
  postApiV1RegisterVerifyTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(postApiV1InviteVerifyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1RegisterVerifyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
