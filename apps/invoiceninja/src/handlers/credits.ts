import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1CreditsIdRoute,
  getApiV1CreditsCreateRoute,
  getApiV1CreditsIdEditRoute,
  getApiV1CreditsIdRoute,
  getApiV1CreditsRoute,
  postApiV1CreditsBulkRoute,
  postApiV1CreditsIdUploadRoute,
  postApiV1CreditsRoute,
  putApiV1CreditsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const creditsHandler = app
  .openapi(getApiV1CreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CreditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1CreditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CreditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CreditsIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CreditsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CreditsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CreditsIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
