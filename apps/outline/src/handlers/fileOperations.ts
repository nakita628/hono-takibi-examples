import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postFileOperationsDeleteRoute,
  postFileOperationsInfoRoute,
  postFileOperationsListRoute,
  postFileOperationsRedirectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fileOperationsHandler = app
  .openapi(postFileOperationsInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileOperationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileOperationsRedirectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFileOperationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
