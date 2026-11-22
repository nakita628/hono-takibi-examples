import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiTagsKeyRoute, getApiTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const tagsHandler = app
  .openapi(getApiTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
