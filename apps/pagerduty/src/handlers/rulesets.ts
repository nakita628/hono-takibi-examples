import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRulesetsIdRoute,
  deleteRulesetsIdRulesRuleIdRoute,
  getRulesetsIdRoute,
  getRulesetsIdRulesRoute,
  getRulesetsIdRulesRuleIdRoute,
  getRulesetsRoute,
  postRulesetsIdRulesRoute,
  postRulesetsRoute,
  putRulesetsIdRoute,
  putRulesetsIdRulesRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rulesetsHandler = app
  .openapi(getRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRulesetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRulesetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRulesetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRulesetsIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRulesetsIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRulesetsIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRulesetsIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRulesetsIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
