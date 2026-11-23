import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetAccountAuthorizationDetailsRoute,
  postActionGetAccountAuthorizationDetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetAccountAuthorizationDetailsHandler = app
  .openapi(getActionGetAccountAuthorizationDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetAccountAuthorizationDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
