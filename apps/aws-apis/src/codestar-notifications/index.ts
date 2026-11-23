import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCreateNotificationRuleRoute,
  postDeleteNotificationRuleRoute,
  postDeleteTargetRoute,
  postDescribeNotificationRuleRoute,
  postListEventTypesRoute,
  postListNotificationRulesRoute,
  postListTagsForResourceRoute,
  postListTargetsRoute,
  postSubscribeRoute,
  postTagResourceRoute,
  postUnsubscribeRoute,
  postUntagResourceResourceArnTagKeysRoute,
  postUpdateNotificationRuleRoute,
} from './routes'
import {
  postCreateNotificationRuleRouteHandler,
  postDeleteNotificationRuleRouteHandler,
  postDeleteTargetRouteHandler,
  postDescribeNotificationRuleRouteHandler,
  postListEventTypesRouteHandler,
  postListNotificationRulesRouteHandler,
  postListTagsForResourceRouteHandler,
  postListTargetsRouteHandler,
  postSubscribeRouteHandler,
  postTagResourceRouteHandler,
  postUnsubscribeRouteHandler,
  postUntagResourceResourceArnTagKeysRouteHandler,
  postUpdateNotificationRuleRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCreateNotificationRuleRoute, postCreateNotificationRuleRouteHandler)
  .openapi(postDeleteNotificationRuleRoute, postDeleteNotificationRuleRouteHandler)
  .openapi(postDeleteTargetRoute, postDeleteTargetRouteHandler)
  .openapi(postDescribeNotificationRuleRoute, postDescribeNotificationRuleRouteHandler)
  .openapi(postListEventTypesRoute, postListEventTypesRouteHandler)
  .openapi(postListNotificationRulesRoute, postListNotificationRulesRouteHandler)
  .openapi(postListTagsForResourceRoute, postListTagsForResourceRouteHandler)
  .openapi(postListTargetsRoute, postListTargetsRouteHandler)
  .openapi(postSubscribeRoute, postSubscribeRouteHandler)
  .openapi(postTagResourceRoute, postTagResourceRouteHandler)
  .openapi(postUnsubscribeRoute, postUnsubscribeRouteHandler)
  .openapi(
    postUntagResourceResourceArnTagKeysRoute,
    postUntagResourceResourceArnTagKeysRouteHandler,
  )
  .openapi(postUpdateNotificationRuleRoute, postUpdateNotificationRuleRouteHandler)

export default app
