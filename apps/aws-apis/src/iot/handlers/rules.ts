import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRulesRuleNameRoute,
  getRulesRoute,
  getRulesRuleNameRoute,
  patchRulesRuleNameRoute,
  postRulesRuleNameDisableRoute,
  postRulesRuleNameEnableRoute,
  postRulesRuleNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rulesHandler = app
  .openapi(postRulesRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRulesRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRulesRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRulesRuleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRulesRuleNameDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRulesRuleNameEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
