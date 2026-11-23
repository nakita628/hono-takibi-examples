import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2InstagramHashtagsCleanerRoute } from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app.openapi(getV2InstagramHashtagsCleanerRoute, (c) => {
  throw new Error('Not implemented')
})
