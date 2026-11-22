import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CmsPageIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cmsPageIdHandler = app.openapi(putV1CmsPageIdRoute, (c) => {
  throw new Error('Not implemented')
})
