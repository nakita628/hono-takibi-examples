import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmPauseRoute } from '../routes'

const app = new OpenAPIHono()

export const vmPauseHandler = app.openapi(putVmPauseRoute, (c) => {
  throw new Error('Not implemented')
})
