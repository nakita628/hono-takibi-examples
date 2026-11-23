import { OpenAPIHono } from '@hono/zod-openapi'
import { getTagGroupsIdJsonRoute, putTagGroupsIdJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const tagGroupsHandler = app
  .openapi(getTagGroupsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTagGroupsIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
