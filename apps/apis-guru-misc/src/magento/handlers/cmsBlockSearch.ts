import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CmsBlockSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const cmsBlockSearchHandler = app.openapi(getV1CmsBlockSearchRoute, (c) => {
  throw new Error('Not implemented')
})
