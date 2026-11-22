import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGwApiV1EnumerationsComplexAssetTransferRoute,
  getGwApiV1EnumerationsEnumerationTypeRoute,
  getGwApiV1FormsRequiredFormsRoute,
  getGwApiV1FormsRoute,
  getGwApiV1ParticipatingBanksRoute,
  getGwApiV1RequestsRequestIdStatusRoute,
  getGwApiV1RequestsRoute,
  getGwApiV1ValidationsUsernamesUsernameRoute,
  patchGwApiV1RequestsRequestIdStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountManagementUtilitiesHandler = app
  .openapi(patchGwApiV1RequestsRequestIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RequestsRequestIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1EnumerationsComplexAssetTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1EnumerationsEnumerationTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1FormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1FormsRequiredFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1ParticipatingBanksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1RequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGwApiV1ValidationsUsernamesUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
