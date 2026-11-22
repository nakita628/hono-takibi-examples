import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3CommandIdRoute,
  getApiV3CommandIdRoute,
  getApiV3CommandRoute,
  postApiV3CommandRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commandHandler = app
  .openapi(postApiV3CommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3CommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3CommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3CommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
