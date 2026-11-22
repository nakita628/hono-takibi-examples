import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAutomationActionsCallbacks202609CallbackIdCompleteRoute,
  postAutomationActionsCallbacks202609CompleteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const callbacksHandler = app
  .openapi(postAutomationActionsCallbacks202609CompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationActionsCallbacks202609CallbackIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
