import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiRuleRoute,
  getApiRuleRuleData1LatestRoute,
  getApiRuleRuleData1Route,
} from '../routes'

const app = new OpenAPIHono()

export const pricingRulesHandler = app
  .openapi(getApiRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRuleRuleData1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiRuleRuleData1LatestRoute, (c) => {
    throw new Error('Not implemented')
  })
