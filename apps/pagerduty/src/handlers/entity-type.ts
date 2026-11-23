import { OpenAPIHono } from '@hono/zod-openapi'
import { getEntityTypeIdTagsRoute, postEntityTypeIdChangeTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const entityTypeHandler = app
  .openapi(postEntityTypeIdChangeTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntityTypeIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
