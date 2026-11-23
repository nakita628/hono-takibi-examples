import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMessageCommentsIdRoute,
  getMessageCommentsIdRoute,
  getMessageCommentsRoute,
  patchMessageCommentsIdRoute,
  postMessageCommentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messageCommentsHandler = app
  .openapi(getMessageCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMessageCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMessageCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessageCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMessageCommentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
