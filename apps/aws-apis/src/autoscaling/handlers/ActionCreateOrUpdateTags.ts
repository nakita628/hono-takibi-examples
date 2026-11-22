import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateOrUpdateTagsRoute, postActionCreateOrUpdateTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateOrUpdateTagsHandler = app
  .openapi(getActionCreateOrUpdateTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateOrUpdateTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
