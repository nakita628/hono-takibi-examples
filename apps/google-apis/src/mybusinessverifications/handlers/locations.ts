import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NameVoiceOfMerchantStateRoute,
  getV1ParentVerificationsRoute,
  postV1LocationFetchVerificationOptionsRoute,
  postV1NameCompleteRoute,
  postV1NameVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const locationsHandler = app
  .openapi(postV1LocationFetchVerificationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameVoiceOfMerchantStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
