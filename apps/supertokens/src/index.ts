import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountLinkingRecipeHandler,
  coreHandler,
  dashboardRecipeHandler,
  emailPasswordRecipeHandler,
  emailVerificationRecipeHandler,
  jwtRecipeHandler,
  multitenancyRecipeHandler,
  oAuth2ProviderRecipeHandler,
  passwordlessRecipeHandler,
  sessionRecipeHandler,
  thirdPartyRecipeHandler,
  totpRecipeHandler,
  userIdMappingRecipeHandler,
  userMetadataRecipeHandler,
  userRolesRecipeHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountLinkingRecipeHandler)
  .route('/', totpRecipeHandler)
  .route('/', userIdMappingRecipeHandler)
  .route('/', passwordlessRecipeHandler)
  .route('/', emailPasswordRecipeHandler)
  .route('/', thirdPartyRecipeHandler)
  .route('/', emailVerificationRecipeHandler)
  .route('/', userMetadataRecipeHandler)
  .route('/', userRolesRecipeHandler)
  .route('/', sessionRecipeHandler)
  .route('/', jwtRecipeHandler)
  .route('/', coreHandler)
  .route('/', dashboardRecipeHandler)
  .route('/', multitenancyRecipeHandler)
  .route('/', oAuth2ProviderRecipeHandler)

export default app
