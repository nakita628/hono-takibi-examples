import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmAddDiskRoute } from '../routes'

const app = new OpenAPIHono()

export const vmAddDiskHandler = app.openapi(putVmAddDiskRoute, (c) => {
  throw new Error('Not implemented')
})
