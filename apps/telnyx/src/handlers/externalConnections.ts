import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteExternalConnectionsIdRoute,
  deleteExternalConnectionsLogMessagesIdRoute,
  getExternalConnectionsIdCivicAddressesAddressIdRoute,
  getExternalConnectionsIdCivicAddressesRoute,
  getExternalConnectionsIdPhoneNumbersPhoneNumberIdRoute,
  getExternalConnectionsIdPhoneNumbersRoute,
  getExternalConnectionsIdReleasesReleaseIdRoute,
  getExternalConnectionsIdReleasesRoute,
  getExternalConnectionsIdRoute,
  getExternalConnectionsIdUploadsRoute,
  getExternalConnectionsIdUploadsStatusRoute,
  getExternalConnectionsIdUploadsTicketIdRoute,
  getExternalConnectionsLogMessagesIdRoute,
  getExternalConnectionsLogMessagesRoute,
  getExternalConnectionsRoute,
  patchExternalConnectionsIdLocationsLocationIdRoute,
  patchExternalConnectionsIdPhoneNumbersPhoneNumberIdRoute,
  patchExternalConnectionsIdRoute,
  postExternalConnectionsIdUploadsRefreshRoute,
  postExternalConnectionsIdUploadsRoute,
  postExternalConnectionsIdUploadsTicketIdRetryRoute,
  postExternalConnectionsRoute,
  postOperatorConnectActionsRefreshRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalConnectionsHandler = app
  .openapi(getExternalConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExternalConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsLogMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExternalConnectionsLogMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsLogMessagesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExternalConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExternalConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsIdCivicAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsIdCivicAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExternalConnectionsIdLocationsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsIdPhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsIdPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExternalConnectionsIdPhoneNumbersPhoneNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsIdReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsIdReleasesReleaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsIdUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExternalConnectionsIdUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExternalConnectionsIdUploadsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsIdUploadsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExternalConnectionsIdUploadsTicketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExternalConnectionsIdUploadsTicketIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOperatorConnectActionsRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
