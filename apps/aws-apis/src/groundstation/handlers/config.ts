import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConfigConfigTypeConfigIdRoute,
  getConfigConfigTypeConfigIdRoute,
  getConfigRoute,
  postConfigRoute,
  putConfigConfigTypeConfigIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configHandler = app
  .openapi(postConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConfigConfigTypeConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigConfigTypeConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConfigConfigTypeConfigIdRoute, (c) => {
    throw new Error('Not implemented')
  })
