import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
  getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
  getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesRoute,
  patchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
  postDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesRoute,
  putDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const responsePolicyRulesHandler = app
  .openapi(
    getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
