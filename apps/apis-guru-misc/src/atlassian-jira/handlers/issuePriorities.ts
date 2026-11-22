import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3PriorityIdRoute,
  getRestApi3PriorityIdRoute,
  getRestApi3PriorityRoute,
  getRestApi3PrioritySearchRoute,
  postRestApi3PriorityRoute,
  putRestApi3PriorityDefaultRoute,
  putRestApi3PriorityIdRoute,
  putRestApi3PriorityMoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issuePrioritiesHandler = app
  .openapi(getRestApi3PriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3PriorityDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3PriorityMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PrioritySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3PriorityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PriorityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3PriorityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
