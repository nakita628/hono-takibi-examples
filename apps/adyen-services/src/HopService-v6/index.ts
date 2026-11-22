import { OpenAPIHono } from '@hono/zod-openapi'
import { hostedOnboardingPageHandler, pciComplianceQuestionnairePageHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', hostedOnboardingPageHandler)
  .route('/', pciComplianceQuestionnairePageHandler)

export default app
