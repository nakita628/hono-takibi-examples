import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NameVoiceOfMerchantStateRoute,
  getV1ParentVerificationsRoute,
  postV1LocationFetchVerificationOptionsRoute,
  postV1NameCompleteRoute,
  postV1NameVerifyRoute,
  postV1VerificationTokensGenerateRoute,
} from './routes'
import {
  getV1NameVoiceOfMerchantStateRouteHandler,
  getV1ParentVerificationsRouteHandler,
  postV1LocationFetchVerificationOptionsRouteHandler,
  postV1NameCompleteRouteHandler,
  postV1NameVerifyRouteHandler,
  postV1VerificationTokensGenerateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1VerificationTokensGenerateRoute, postV1VerificationTokensGenerateRouteHandler)
  .openapi(
    postV1LocationFetchVerificationOptionsRoute,
    postV1LocationFetchVerificationOptionsRouteHandler,
  )
  .openapi(getV1NameVoiceOfMerchantStateRoute, getV1NameVoiceOfMerchantStateRouteHandler)
  .openapi(postV1NameCompleteRoute, postV1NameCompleteRouteHandler)
  .openapi(postV1NameVerifyRoute, postV1NameVerifyRouteHandler)
  .openapi(getV1ParentVerificationsRoute, getV1ParentVerificationsRouteHandler)

export default app
