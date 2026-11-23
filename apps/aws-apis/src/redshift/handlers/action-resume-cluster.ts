import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionResumeClusterRoute, postActionResumeClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionResumeClusterHandler = app
  .openapi(getActionResumeClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResumeClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
