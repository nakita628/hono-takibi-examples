import { OpenAPIHono } from '@hono/zod-openapi'
import {
  businessLinesHandler,
  documentsHandler,
  hostedOnboardingHandler,
  legalEntitiesHandler,
  pciQuestionnairesHandler,
  taxEDeliveryConsentHandler,
  termsOfServiceHandler,
  transferInstrumentsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', businessLinesHandler)
  .route('/', documentsHandler)
  .route('/', legalEntitiesHandler)
  .route('/', termsOfServiceHandler)
  .route('/', taxEDeliveryConsentHandler)
  .route('/', hostedOnboardingHandler)
  .route('/', pciQuestionnairesHandler)
  .route('/', transferInstrumentsHandler)

export default app
