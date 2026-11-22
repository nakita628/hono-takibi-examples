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
    (c) => {},
  )
  .openapi(
    postDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesRoute,
    (c) => {},
  )
  .openapi(
    deleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
    (c) => {},
  )
  .openapi(
    getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
    (c) => {},
  )
  .openapi(
    patchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
    (c) => {},
  )
  .openapi(
    putDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRulesResponsePolicyRuleRoute,
    (c) => {},
  )
