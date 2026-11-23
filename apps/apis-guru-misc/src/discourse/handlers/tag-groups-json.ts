import { OpenAPIHono } from '@hono/zod-openapi'
import { getTagGroupsJsonRoute, postTagGroupsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const tagGroupsJsonHandler = app
  .openapi(getTagGroupsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTagGroupsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
