import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeDeploymentJobRoute } from '../routes'

const app = new OpenAPIHono()

export const describeDeploymentJobHandler = app.openapi(postDescribeDeploymentJobRoute, (c) => {
  throw new Error('Not implemented')
})
