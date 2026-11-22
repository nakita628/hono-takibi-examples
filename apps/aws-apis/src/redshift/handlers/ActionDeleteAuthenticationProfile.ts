import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteAuthenticationProfileRoute,
  postActionDeleteAuthenticationProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteAuthenticationProfileHandler = app
  .openapi(getActionDeleteAuthenticationProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteAuthenticationProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
