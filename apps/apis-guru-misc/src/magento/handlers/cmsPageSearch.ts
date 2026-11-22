import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CmsPageSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const cmsPageSearchHandler = app.openapi(getV1CmsPageSearchRoute, (c) => {
  throw new Error('Not implemented')
})
