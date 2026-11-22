import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1HooksHookIdRoute,
  getV1HooksRoute,
  postV1HooksRoute,
  putV1HooksHookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hooksHandler = app
  .openapi(getV1HooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1HooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1HooksHookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
