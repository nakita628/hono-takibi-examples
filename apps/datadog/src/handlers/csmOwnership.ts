import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2CsmOwnershipSettingsRoute,
  getApiV2CsmOwnershipSettingsUntaggedRoute,
  getApiV2SecurityOwnershipResourceIdHistoryRoute,
  getApiV2SecurityOwnershipResourceIdOwnerTypeEvidenceRoute,
  getApiV2SecurityOwnershipResourceIdOwnerTypeHistoryRoute,
  getApiV2SecurityOwnershipResourceIdOwnerTypeRoute,
  getApiV2SecurityOwnershipResourceIdRoute,
  postApiV2CsmOwnershipSettingsRoute,
  postApiV2SecurityOwnershipResourceIdOwnerTypeFeedbackRoute,
} from '../routes'

const app = new OpenAPIHono()

export const csmOwnershipHandler = app
  .openapi(getApiV2CsmOwnershipSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CsmOwnershipSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CsmOwnershipSettingsUntaggedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityOwnershipResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityOwnershipResourceIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityOwnershipResourceIdOwnerTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityOwnershipResourceIdOwnerTypeEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SecurityOwnershipResourceIdOwnerTypeFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SecurityOwnershipResourceIdOwnerTypeHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
