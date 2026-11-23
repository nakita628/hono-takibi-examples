import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyAuthenticationProfileRoute,
  postActionModifyAuthenticationProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyAuthenticationProfileHandler = app
  .openapi(getActionModifyAuthenticationProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyAuthenticationProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
