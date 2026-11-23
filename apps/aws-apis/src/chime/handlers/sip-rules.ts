import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSipRulesSipRuleIdRoute,
  getSipRulesRoute,
  getSipRulesSipRuleIdRoute,
  postSipRulesRoute,
  putSipRulesSipRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sipRulesHandler = app
  .openapi(postSipRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSipRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSipRulesSipRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSipRulesSipRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSipRulesSipRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
