import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authenticationHandler,
  forgotHealthIdNumberHandler,
  healthFacilityHandler,
  integratedProgramsHandler,
  profileHandler,
  registrationWithAadhaarHandler,
  registrationWithMobileNumberHandler,
  searchHandler,
  tagsHandler,
  utilityHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', profileHandler)
  .route('/', authenticationHandler)
  .route('/', forgotHealthIdNumberHandler)
  .route('/', utilityHandler)
  .route('/', tagsHandler)
  .route('/', healthFacilityHandler)
  .route('/', integratedProgramsHandler)
  .route('/', registrationWithAadhaarHandler)
  .route('/', registrationWithMobileNumberHandler)
  .route('/', searchHandler)

export default app
