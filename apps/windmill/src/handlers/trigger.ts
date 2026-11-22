import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWWorkspaceTriggersHistoryListRoute,
  postWWorkspaceTriggerTriggerKindCancelSuspendedTriggerJobsTriggerPathRoute,
  postWWorkspaceTriggerTriggerKindResumeSuspendedTriggerJobsTriggerPathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const triggerHandler = app
  .openapi(postWWorkspaceTriggerTriggerKindResumeSuspendedTriggerJobsTriggerPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceTriggerTriggerKindCancelSuspendedTriggerJobsTriggerPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceTriggersHistoryListRoute, (c) => {
    throw new Error('Not implemented')
  })
