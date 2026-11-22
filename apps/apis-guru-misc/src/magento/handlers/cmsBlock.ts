import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CmsBlockRoute } from '../routes'

const app = new OpenAPIHono()

export const cmsBlockHandler = app.openapi(postV1CmsBlockRoute, (c) => {
  throw new Error('Not implemented')
})
