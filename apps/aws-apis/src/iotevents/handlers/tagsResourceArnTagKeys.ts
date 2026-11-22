import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteTagsResourceArnTagKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsResourceArnTagKeysHandler = app.openapi(deleteTagsResourceArnTagKeysRoute, (c) => {
  throw new Error('Not implemented')
})
