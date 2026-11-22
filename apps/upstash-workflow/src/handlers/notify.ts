import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2WaitersEventIdRoute,
  postV2NotifyEventIdRoute,
  postV2NotifyWorkflowRunIdEventIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notifyHandler = app
  .openapi(postV2NotifyEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NotifyWorkflowRunIdEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WaitersEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
