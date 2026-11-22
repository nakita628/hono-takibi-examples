import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609CommunicationsGdprDeleteRoute,
  postCrmObjects202609CommunicationsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609CommunicationsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609CommunicationsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
