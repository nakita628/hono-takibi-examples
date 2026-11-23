import { OpenAPIHono } from '@hono/zod-openapi'
import {
  createNotificationRuleHandler,
  deleteNotificationRuleHandler,
  deleteTargetHandler,
  describeNotificationRuleHandler,
  listEventTypesHandler,
  listNotificationRulesHandler,
  listTagsForResourceHandler,
  listTargetsHandler,
  subscribeHandler,
  tagResourceHandler,
  unsubscribeHandler,
  untagResourceHandler,
  updateNotificationRuleHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', createNotificationRuleHandler)
  .route('/', deleteNotificationRuleHandler)
  .route('/', deleteTargetHandler)
  .route('/', describeNotificationRuleHandler)
  .route('/', listEventTypesHandler)
  .route('/', listNotificationRulesHandler)
  .route('/', listTagsForResourceHandler)
  .route('/', listTargetsHandler)
  .route('/', subscribeHandler)
  .route('/', tagResourceHandler)
  .route('/', unsubscribeHandler)
  .route('/', untagResourceHandler)
  .route('/', updateNotificationRuleHandler)

export default app
