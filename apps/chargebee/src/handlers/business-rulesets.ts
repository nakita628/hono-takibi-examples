import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBusinessRulesetsBusinessRulesetIdRoute,
  getBusinessRulesetsBusinessRulesetIdRulesRoute,
  getBusinessRulesetsRoute,
  postBusinessRulesetsBusinessRulesetIdActivateRoute,
  postBusinessRulesetsBusinessRulesetIdAddRulesRoute,
  postBusinessRulesetsBusinessRulesetIdDeactivateRoute,
  postBusinessRulesetsBusinessRulesetIdDeleteRoute,
  postBusinessRulesetsBusinessRulesetIdRemoveRulesRoute,
  postBusinessRulesetsBusinessRulesetIdRoute,
  postBusinessRulesetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const businessRulesetsHandler = app
  .openapi(getBusinessRulesetsBusinessRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessRulesetsBusinessRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessRulesetsBusinessRulesetIdRemoveRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessRulesetsBusinessRulesetIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessRulesetsBusinessRulesetIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessRulesetsBusinessRulesetIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessRulesetsBusinessRulesetIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessRulesetsBusinessRulesetIdAddRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
