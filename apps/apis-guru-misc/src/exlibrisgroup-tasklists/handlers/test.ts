import { OpenAPIHono } from '@hono/zod-openapi'
import { getAlmawsV1TaskListsTestRoute, postAlmawsV1TaskListsTestRoute } from '../routes'

const app = new OpenAPIHono()

export const testHandler = app
  .openapi(getAlmawsV1TaskListsTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAlmawsV1TaskListsTestRoute, (c) => {
    throw new Error('Not implemented')
  })
