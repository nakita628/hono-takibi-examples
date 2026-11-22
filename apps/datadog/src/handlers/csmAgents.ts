import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2CsmOnboardingAgentsRoute,
  getApiV2CsmOnboardingServerlessAgentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const csmAgentsHandler = app
  .openapi(getApiV2CsmOnboardingAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CsmOnboardingServerlessAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
