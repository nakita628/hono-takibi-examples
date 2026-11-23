import { OpenAPIHono } from '@hono/zod-openapi'
import { patchPatchRoute } from '../routes'

const app = new OpenAPIHono()

export const patchHandler = app.openapi(patchPatchRoute, (c) => {
  throw new Error('Not implemented')
})
