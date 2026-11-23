import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStreamsStreamIdRoute,
  getStreamsRoute,
  getStreamsStreamIdRoute,
  postStreamsStreamIdRoute,
  putStreamsStreamIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const streamsHandler = app
  .openapi(postStreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStreamsStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
