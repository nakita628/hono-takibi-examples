import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployeesEmploymentsEmploymentIdLeavepoliciesRoute,
  getProvidersEmployersLeavepoliciesLeavePolicyIdEmploymentsRoute,
  patchProvidersEmployersEmployeesEmploymentsEmploymentIdLeavepoliciesRoute,
  patchProvidersEmployersLeavepoliciesLeavePolicyIdEmploymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leavePolicyAndEmploymentLinksHandler = app
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdLeavepoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersEmployeesEmploymentsEmploymentIdLeavepoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersLeavepoliciesLeavePolicyIdEmploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersLeavepoliciesLeavePolicyIdEmploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
