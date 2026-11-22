import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RecipientAddressesSupportAddressIdRoute,
  getApiV2RecipientAddressesRoute,
  getApiV2RecipientAddressesSupportAddressIdRoute,
  postApiV2RecipientAddressesRoute,
  putApiV2RecipientAddressesSupportAddressIdRoute,
  putApiV2RecipientAddressesSupportAddressIdVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const supportAddressesHandler = app
  .openapi(getApiV2RecipientAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RecipientAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RecipientAddressesSupportAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RecipientAddressesSupportAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RecipientAddressesSupportAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RecipientAddressesSupportAddressIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
