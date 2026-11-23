import { OpenAPIHono } from '@hono/zod-openapi'
import { postSimCardOrderPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const simCardOrderPreviewHandler = app.openapi(postSimCardOrderPreviewRoute, (c) => {
  throw new Error('Not implemented')
})
