import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmAddVsockRoute } from '../routes'

const app = new OpenAPIHono()

export const vmAddVsockHandler = app.openapi(putVmAddVsockRoute, (c) => {
  throw new Error('Not implemented')
})
