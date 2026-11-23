import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePoolsPoolNameRoute,
  getPoolsPoolNameRoute,
  getPoolsRoute,
  patchPoolsPoolNameRoute,
  postPoolsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const poolsHandler = app
  .openapi(getPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPoolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPoolsPoolNameRoute, (c) => {
    throw new Error('Not implemented')
  })
