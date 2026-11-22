import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2CsmOnboardingCoverageAnalysisCloudAccountsRoute,
  getApiV2CsmOnboardingCoverageAnalysisHostsAndContainersRoute,
  getApiV2CsmOnboardingCoverageAnalysisServerlessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const csmCoverageAnalysisHandler = app
  .openapi(getApiV2CsmOnboardingCoverageAnalysisCloudAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CsmOnboardingCoverageAnalysisHostsAndContainersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CsmOnboardingCoverageAnalysisServerlessRoute, (c) => {
    throw new Error('Not implemented')
  })
