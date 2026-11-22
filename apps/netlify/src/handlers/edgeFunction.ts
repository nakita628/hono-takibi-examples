import { OpenAPIHono } from '@hono/zod-openapi'
import { putDeploysDeployIdEdgeFunctionsCodeShaRoute } from '../routes'

const app = new OpenAPIHono()

export const edgeFunctionHandler = app.openapi(putDeploysDeployIdEdgeFunctionsCodeShaRoute, (c) => {
  throw new Error('Not implemented')
})
