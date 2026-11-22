import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CmsPageRoute } from '../routes'

const app = new OpenAPIHono()

export const cmsPageHandler = app.openapi(postV1CmsPageRoute, (c) => {
  throw new Error('Not implemented')
})
