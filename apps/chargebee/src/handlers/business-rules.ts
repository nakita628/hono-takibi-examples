import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBusinessRulesBusinessRuleIdDraftRoute,
  getBusinessRulesBusinessRuleIdRoute,
  getBusinessRulesRoute,
  postBusinessRulesApplyRulesRoute,
  postBusinessRulesBusinessRuleIdActivateRoute,
  postBusinessRulesBusinessRuleIdDeactivateRoute,
  postBusinessRulesBusinessRuleIdDeleteDraftRoute,
  postBusinessRulesBusinessRuleIdDeleteRoute,
  postBusinessRulesBusinessRuleIdDraftRoute,
  postBusinessRulesBusinessRuleIdReleaseRoute,
  postBusinessRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const businessRulesHandler = app
  .openapi(postBusinessRulesApplyRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessRulesBusinessRuleIdDeleteDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessRulesBusinessRuleIdReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessRulesBusinessRuleIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessRulesBusinessRuleIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessRulesBusinessRuleIdDraftRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessRulesBusinessRuleIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessRulesBusinessRuleIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessRulesBusinessRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
