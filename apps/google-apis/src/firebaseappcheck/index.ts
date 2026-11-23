import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentAppsDashAppAttestConfigBatchGetRoute,
  getV1ParentAppsDashDeviceCheckConfigBatchGetRoute,
  getV1ParentAppsDashPlayIntegrityConfigBatchGetRoute,
  getV1ParentAppsDashRecaptchaEnterpriseConfigBatchGetRoute,
  getV1ParentAppsDashRecaptchaV3ConfigBatchGetRoute,
  getV1ParentAppsDashSafetyNetConfigBatchGetRoute,
  getV1ParentDebugTokensRoute,
  getV1ParentServicesRoute,
  patchV1NameRoute,
  postV1AppExchangeAppAttestAssertionRoute,
  postV1AppExchangeAppAttestAttestationRoute,
  postV1AppExchangeCustomTokenRoute,
  postV1AppExchangeDebugTokenRoute,
  postV1AppExchangeDeviceCheckTokenRoute,
  postV1AppExchangePlayIntegrityTokenRoute,
  postV1AppExchangeRecaptchaEnterpriseTokenRoute,
  postV1AppExchangeRecaptchaV3TokenRoute,
  postV1AppExchangeSafetyNetTokenRoute,
  postV1AppGenerateAppAttestChallengeRoute,
  postV1AppGeneratePlayIntegrityChallengeRoute,
  postV1ParentDebugTokensRoute,
  postV1ParentServicesBatchUpdateRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameRouteHandler,
  getV1ParentAppsDashAppAttestConfigBatchGetRouteHandler,
  getV1ParentAppsDashDeviceCheckConfigBatchGetRouteHandler,
  getV1ParentAppsDashPlayIntegrityConfigBatchGetRouteHandler,
  getV1ParentAppsDashRecaptchaEnterpriseConfigBatchGetRouteHandler,
  getV1ParentAppsDashRecaptchaV3ConfigBatchGetRouteHandler,
  getV1ParentAppsDashSafetyNetConfigBatchGetRouteHandler,
  getV1ParentDebugTokensRouteHandler,
  getV1ParentServicesRouteHandler,
  patchV1NameRouteHandler,
  postV1AppExchangeAppAttestAssertionRouteHandler,
  postV1AppExchangeAppAttestAttestationRouteHandler,
  postV1AppExchangeCustomTokenRouteHandler,
  postV1AppExchangeDebugTokenRouteHandler,
  postV1AppExchangeDeviceCheckTokenRouteHandler,
  postV1AppExchangePlayIntegrityTokenRouteHandler,
  postV1AppExchangeRecaptchaEnterpriseTokenRouteHandler,
  postV1AppExchangeRecaptchaV3TokenRouteHandler,
  postV1AppExchangeSafetyNetTokenRouteHandler,
  postV1AppGenerateAppAttestChallengeRouteHandler,
  postV1AppGeneratePlayIntegrityChallengeRouteHandler,
  postV1ParentDebugTokensRouteHandler,
  postV1ParentServicesBatchUpdateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1AppExchangeAppAttestAssertionRoute,
    postV1AppExchangeAppAttestAssertionRouteHandler,
  )
  .openapi(
    postV1AppExchangeAppAttestAttestationRoute,
    postV1AppExchangeAppAttestAttestationRouteHandler,
  )
  .openapi(postV1AppExchangeCustomTokenRoute, postV1AppExchangeCustomTokenRouteHandler)
  .openapi(postV1AppExchangeDebugTokenRoute, postV1AppExchangeDebugTokenRouteHandler)
  .openapi(postV1AppExchangeDeviceCheckTokenRoute, postV1AppExchangeDeviceCheckTokenRouteHandler)
  .openapi(
    postV1AppExchangePlayIntegrityTokenRoute,
    postV1AppExchangePlayIntegrityTokenRouteHandler,
  )
  .openapi(
    postV1AppExchangeRecaptchaEnterpriseTokenRoute,
    postV1AppExchangeRecaptchaEnterpriseTokenRouteHandler,
  )
  .openapi(postV1AppExchangeRecaptchaV3TokenRoute, postV1AppExchangeRecaptchaV3TokenRouteHandler)
  .openapi(postV1AppExchangeSafetyNetTokenRoute, postV1AppExchangeSafetyNetTokenRouteHandler)
  .openapi(
    postV1AppGenerateAppAttestChallengeRoute,
    postV1AppGenerateAppAttestChallengeRouteHandler,
  )
  .openapi(
    postV1AppGeneratePlayIntegrityChallengeRoute,
    postV1AppGeneratePlayIntegrityChallengeRouteHandler,
  )
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(
    getV1ParentAppsDashAppAttestConfigBatchGetRoute,
    getV1ParentAppsDashAppAttestConfigBatchGetRouteHandler,
  )
  .openapi(
    getV1ParentAppsDashDeviceCheckConfigBatchGetRoute,
    getV1ParentAppsDashDeviceCheckConfigBatchGetRouteHandler,
  )
  .openapi(
    getV1ParentAppsDashPlayIntegrityConfigBatchGetRoute,
    getV1ParentAppsDashPlayIntegrityConfigBatchGetRouteHandler,
  )
  .openapi(
    getV1ParentAppsDashRecaptchaEnterpriseConfigBatchGetRoute,
    getV1ParentAppsDashRecaptchaEnterpriseConfigBatchGetRouteHandler,
  )
  .openapi(
    getV1ParentAppsDashRecaptchaV3ConfigBatchGetRoute,
    getV1ParentAppsDashRecaptchaV3ConfigBatchGetRouteHandler,
  )
  .openapi(
    getV1ParentAppsDashSafetyNetConfigBatchGetRoute,
    getV1ParentAppsDashSafetyNetConfigBatchGetRouteHandler,
  )
  .openapi(getV1ParentDebugTokensRoute, getV1ParentDebugTokensRouteHandler)
  .openapi(postV1ParentDebugTokensRoute, postV1ParentDebugTokensRouteHandler)
  .openapi(getV1ParentServicesRoute, getV1ParentServicesRouteHandler)
  .openapi(postV1ParentServicesBatchUpdateRoute, postV1ParentServicesBatchUpdateRouteHandler)

export default app
