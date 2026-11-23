import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetClusterCredentialsWithIAMRoute,
  postActionGetClusterCredentialsWithIAMRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetClusterCredentialsWithIamHandler = app
  .openapi(getActionGetClusterCredentialsWithIAMRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetClusterCredentialsWithIAMRoute, (c) => {
    throw new Error('Not implemented')
  })
