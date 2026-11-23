import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSignatureRequestFilesAsDataUriSignatureRequestIdRoute,
  getSignatureRequestFilesAsFileUrlSignatureRequestIdRoute,
  getSignatureRequestFilesSignatureRequestIdRoute,
  getSignatureRequestListRoute,
  getSignatureRequestSignatureRequestIdRoute,
  postSignatureRequestBulkCreateEmbeddedWithTemplateRoute,
  postSignatureRequestBulkSendWithTemplateRoute,
  postSignatureRequestCancelSignatureRequestIdRoute,
  postSignatureRequestCreateEmbeddedRoute,
  postSignatureRequestCreateEmbeddedWithTemplateRoute,
  postSignatureRequestReleaseHoldSignatureRequestIdRoute,
  postSignatureRequestRemindSignatureRequestIdRoute,
  postSignatureRequestRemoveSignatureRequestIdRoute,
  postSignatureRequestSendRoute,
  postSignatureRequestSendWithTemplateRoute,
  postSignatureRequestUpdateSignatureRequestIdRoute,
  putSignatureRequestEditEmbeddedSignatureRequestIdRoute,
  putSignatureRequestEditEmbeddedWithTemplateSignatureRequestIdRoute,
  putSignatureRequestEditSignatureRequestIdRoute,
  putSignatureRequestEditWithTemplateSignatureRequestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const signatureRequestHandler = app
  .openapi(postSignatureRequestBulkCreateEmbeddedWithTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignatureRequestBulkSendWithTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignatureRequestCancelSignatureRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignatureRequestCreateEmbeddedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignatureRequestCreateEmbeddedWithTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSignatureRequestEditSignatureRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSignatureRequestEditEmbeddedSignatureRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSignatureRequestEditEmbeddedWithTemplateSignatureRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSignatureRequestEditWithTemplateSignatureRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSignatureRequestFilesSignatureRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSignatureRequestFilesAsDataUriSignatureRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSignatureRequestFilesAsFileUrlSignatureRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSignatureRequestSignatureRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSignatureRequestListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignatureRequestReleaseHoldSignatureRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignatureRequestRemindSignatureRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignatureRequestRemoveSignatureRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignatureRequestSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignatureRequestSendWithTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSignatureRequestUpdateSignatureRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
