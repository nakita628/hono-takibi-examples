import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateAuthenticationProfileRoute,
  postActionCreateAuthenticationProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateAuthenticationProfileHandler = app
  .openapi(getActionCreateAuthenticationProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateAuthenticationProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
