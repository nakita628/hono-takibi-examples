import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetClusterCredentialsWithIAMRoute,
  postActionGetClusterCredentialsWithIAMRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetClusterCredentialsWithIAMHandler = app
  .openapi(getActionGetClusterCredentialsWithIAMRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetClusterCredentialsWithIAMRoute, (c) => {
    throw new Error('Not implemented')
  })
