import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmObjects202609MeetingsGdprDeleteRoute,
  postCrmObjects202609MeetingsMergeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmObjects202609MeetingsGdprDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmObjects202609MeetingsMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
