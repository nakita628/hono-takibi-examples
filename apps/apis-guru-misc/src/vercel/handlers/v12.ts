import { OpenAPIHono } from '@hono/zod-openapi'
import { patchV12DeploymentsIdCancelRoute } from '../routes'

const app = new OpenAPIHono()

export const v12Handler = app.openapi(patchV12DeploymentsIdCancelRoute, (c) => {
  throw new Error('Not implemented')
})
