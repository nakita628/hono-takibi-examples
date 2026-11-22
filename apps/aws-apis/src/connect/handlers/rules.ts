import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRulesInstanceIdRuleIdRoute,
  getRulesInstanceIdRoute,
  getRulesInstanceIdRuleIdRoute,
  postRulesInstanceIdRoute,
  putRulesInstanceIdRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rulesHandler = app
  .openapi(postRulesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRulesInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRulesInstanceIdRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRulesInstanceIdRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRulesInstanceIdRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
