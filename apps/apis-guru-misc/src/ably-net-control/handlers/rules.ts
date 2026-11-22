import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdRulesRuleIdRoute,
  getAppsAppIdRulesRoute,
  getAppsAppIdRulesRuleIdRoute,
  patchAppsAppIdRulesRuleIdRoute,
  postAppsAppIdRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rulesHandler = app
  .openapi(getAppsAppIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppsAppIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
