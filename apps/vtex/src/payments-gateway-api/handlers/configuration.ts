import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPvtRulesRuleIdRoute,
  getApiPvtAffiliationsAffiliationIdRoute,
  getApiPvtAffiliationsRoute,
  getApiPvtMerchantsPaymentSystemsRoute,
  getApiPvtRulesRoute,
  getApiPvtRulesRuleIdRoute,
  postApiPvtAffiliationsRoute,
  postApiPvtRulesRoute,
  putApiPvtAffiliationsAffiliationIdRoute,
  putApiPvtRulesRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configurationHandler = app
  .openapi(getApiPvtAffiliationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtAffiliationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvtAffiliationsAffiliationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPvtAffiliationsAffiliationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvtMerchantsPaymentSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvtRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPvtRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvtRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPvtRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
