import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3MediaFileIdRoute } from '../routes'

const app = new OpenAPIHono()

export const v3Handler = app.openapi(getV3MediaFileIdRoute, (c) => {
  throw new Error('Not implemented')
})
