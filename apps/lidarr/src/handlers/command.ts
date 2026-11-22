import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1CommandIdRoute,
  getApiV1CommandIdRoute,
  getApiV1CommandRoute,
  postApiV1CommandRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commandHandler = app
  .openapi(getApiV1CommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CommandRoute, (c) => {
    throw new Error('Not implemented')
  })
