import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTykMcpsApiIDRoute,
  getTykMcpsApiIDRoute,
  getTykMcpsRoute,
  postTykMcpsRoute,
  putTykMcpsApiIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mcpProxiesHandler = app
  .openapi(getTykMcpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTykMcpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykMcpsApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTykMcpsApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTykMcpsApiIDRoute, (c) => {
    throw new Error('Not implemented')
  })
