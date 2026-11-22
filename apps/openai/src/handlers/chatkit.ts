import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChatkitThreadsThreadIdRoute,
  getChatkitThreadsRoute,
  getChatkitThreadsThreadIdItemsRoute,
  getChatkitThreadsThreadIdRoute,
  postChatkitSessionsRoute,
  postChatkitSessionsSessionIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatkitHandler = app
  .openapi(postChatkitSessionsSessionIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatkitSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatkitThreadsThreadIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatkitThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChatkitThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChatkitThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
