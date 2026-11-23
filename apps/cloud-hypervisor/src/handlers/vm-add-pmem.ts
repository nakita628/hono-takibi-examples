import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmAddPmemRoute } from '../routes'

const app = new OpenAPIHono()

export const vmAddPmemHandler = app.openapi(putVmAddPmemRoute, (c) => {
  throw new Error('Not implemented')
})
