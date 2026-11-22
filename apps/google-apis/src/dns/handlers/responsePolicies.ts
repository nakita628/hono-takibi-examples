import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute,
  getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute,
  getDnsV2ProjectsProjectLocationsLocationResponsePoliciesRoute,
  patchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute,
  postDnsV2ProjectsProjectLocationsLocationResponsePoliciesRoute,
  putDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const responsePoliciesHandler = app
  .openapi(getDnsV2ProjectsProjectLocationsLocationResponsePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsV2ProjectsProjectLocationsLocationResponsePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute,
    (c) => {},
  )
  .openapi(getDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDnsV2ProjectsProjectLocationsLocationResponsePoliciesResponsePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
