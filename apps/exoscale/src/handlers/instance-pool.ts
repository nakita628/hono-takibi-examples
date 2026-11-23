import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteInstancePoolIdFieldRoute,
  deleteInstancePoolIdRoute,
  getInstancePoolIdRoute,
  getInstancePoolRoute,
  postInstancePoolRoute,
  putInstancePoolIdEvictRoute,
  putInstancePoolIdRoute,
  putInstancePoolIdScaleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instancePoolHandler = app
  .openapi(putInstancePoolIdScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancePoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInstancePoolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInstancePoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInstancePoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInstancePoolIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteInstancePoolIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putInstancePoolIdEvictRoute, (c) => {
    throw new Error('Not implemented')
  })
