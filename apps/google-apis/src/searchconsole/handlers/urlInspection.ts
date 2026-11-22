import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1UrlInspectionIndexInspectRoute } from '../routes'

const app = new OpenAPIHono()

export const urlInspectionHandler = app.openapi(postV1UrlInspectionIndexInspectRoute, (c) => {
  throw new Error('Not implemented')
})
