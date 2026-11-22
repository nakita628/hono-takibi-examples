import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CmsBlockIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cmsBlockIdHandler = app.openapi(putV1CmsBlockIdRoute, (c) => {
  throw new Error('Not implemented')
})
