import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiWorktypeAllRoute,
  getApiWorktypeDetailsRoute,
  getApiWorktypeSearchRoute,
  postApiWorktypeDeleteRoute,
  postApiWorktypeNewRoute,
  postApiWorktypeUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workTypeHandler = app
  .openapi(getApiWorktypeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWorktypeDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWorktypeDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWorktypeNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWorktypeSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiWorktypeUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
