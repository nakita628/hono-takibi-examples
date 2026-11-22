import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRulesRoute,
  deleteAdminRulesRuleRoute,
  getAdminRulesRoute,
  getAdminRulesRuleRoute,
  postAdminRulesRoute,
  putAdminRulesRuleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const globalRulesHandler = app
  .openapi(deleteAdminRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRulesRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRulesRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRulesRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
