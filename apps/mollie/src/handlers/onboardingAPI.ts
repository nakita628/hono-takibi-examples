import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2OnboardingMeRoute, postV2OnboardingMeRoute } from '../routes'

const app = new OpenAPIHono()

export const onboardingAPIHandler = app
  .openapi(getV2OnboardingMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2OnboardingMeRoute, (c) => {
    throw new Error('Not implemented')
  })
