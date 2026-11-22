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
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV1AppExchangeAppAttestAssertionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppExchangeAppAttestAttestationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppExchangeCustomTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppExchangeDebugTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppExchangeDeviceCheckTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppExchangePlayIntegrityTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppExchangeRecaptchaEnterpriseTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppExchangeRecaptchaV3TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppExchangeSafetyNetTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppGenerateAppAttestChallengeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppGeneratePlayIntegrityChallengeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAppsDashAppAttestConfigBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAppsDashDeviceCheckConfigBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAppsDashPlayIntegrityConfigBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAppsDashRecaptchaEnterpriseConfigBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAppsDashRecaptchaV3ConfigBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAppsDashSafetyNetConfigBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDebugTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDebugTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentServicesBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
