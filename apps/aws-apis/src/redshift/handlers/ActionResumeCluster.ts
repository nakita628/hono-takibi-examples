import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionResumeClusterRoute, postActionResumeClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionResumeClusterHandler = app
  .openapi(getActionResumeClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionResumeClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
