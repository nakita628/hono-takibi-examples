import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetClusterCredentialsRoute,
  postActionGetClusterCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetClusterCredentialsHandler = app
  .openapi(getActionGetClusterCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetClusterCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
