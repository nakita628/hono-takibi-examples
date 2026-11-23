import { OpenAPIHono } from '@hono/zod-openapi'
import { postSksClusterKubeconfigIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sksClusterKubeconfigHandler = app.openapi(postSksClusterKubeconfigIdRoute, (c) => {
  throw new Error('Not implemented')
})
