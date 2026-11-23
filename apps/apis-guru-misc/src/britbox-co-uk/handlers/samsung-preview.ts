import { OpenAPIHono } from '@hono/zod-openapi'
import { getSamsungPreviewRoute } from '../routes'

const app = new OpenAPIHono()

export const samsungPreviewHandler = app.openapi(getSamsungPreviewRoute, (c) => {
  throw new Error('Not implemented')
})
