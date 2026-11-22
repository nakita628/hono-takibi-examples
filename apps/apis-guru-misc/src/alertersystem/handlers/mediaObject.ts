import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiMediaObjectIdRoute,
  getApiMediaObjectIdRoute,
  getApiMediaObjectRoute,
  postApiMediaObjectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mediaObjectHandler = app
  .openapi(getApiMediaObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiMediaObjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiMediaObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMediaObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
