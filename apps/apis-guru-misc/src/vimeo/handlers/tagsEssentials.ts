import { OpenAPIHono } from '@hono/zod-openapi'
import { getTagsWordRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsEssentialsHandler = app.openapi(getTagsWordRoute, (c) => {
  throw new Error('Not implemented')
})
