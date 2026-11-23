import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStreamsStatusRoute,
  postStreamsNameDisableRoute,
  postStreamsNameEnableRoute,
} from '../routes'

const app = new OpenAPIHono()

export const streamsHandler = app
  .openapi(postStreamsNameDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStreamsNameEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStreamsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
