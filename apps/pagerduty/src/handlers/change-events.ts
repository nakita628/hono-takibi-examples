import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChangeEventsIdRoute,
  getChangeEventsRoute,
  postChangeEventsRoute,
  putChangeEventsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const changeEventsHandler = app
  .openapi(getChangeEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChangeEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChangeEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChangeEventsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
