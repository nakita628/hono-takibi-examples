import { OpenAPIHono } from '@hono/zod-openapi'
import { postRpcerCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const rpcerHandler = app.openapi(postRpcerCertificateRoute, (c) => {
  throw new Error('Not implemented')
})
