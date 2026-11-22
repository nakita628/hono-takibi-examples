import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute,
  getDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute,
  getDnsV2ProjectsProjectLocationsLocationPoliciesRoute,
  patchDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute,
  postDnsV2ProjectsProjectLocationsLocationPoliciesRoute,
  putDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesHandler = app
  .openapi(getDnsV2ProjectsProjectLocationsLocationPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDnsV2ProjectsProjectLocationsLocationPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDnsV2ProjectsProjectLocationsLocationPoliciesPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
