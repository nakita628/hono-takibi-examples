import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteActionTargetsActionTargetArnRoute,
  patchActionTargetsActionTargetArnRoute,
  postActionTargetsGetRoute,
  postActionTargetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionTargetsHandler = app
  .openapi(postActionTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteActionTargetsActionTargetArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchActionTargetsActionTargetArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTargetsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
