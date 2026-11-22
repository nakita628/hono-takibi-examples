import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDateTimeDifferenceRoute,
  postDateTimeInfoRoute,
  postFormatDateTimeRoute,
  postWorldTimeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dateTimeHandler = app
  .openapi(postDateTimeDifferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDateTimeInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFormatDateTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorldTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
