import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTailnetTailnetKeysKeyIdRoute,
  getTailnetTailnetKeysKeyIdRoute,
  getTailnetTailnetKeysRoute,
  postTailnetTailnetKeysRoute,
  putTailnetTailnetKeysKeyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keysHandler = app
  .openapi(getTailnetTailnetKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTailnetTailnetKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTailnetTailnetKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
