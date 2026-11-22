import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2SharingAgreementsSharingAgreementIdRoute,
  getApiV2SharingAgreementsRoute,
  getApiV2SharingAgreementsSharingAgreementIdRoute,
  postApiV2SharingAgreementsRoute,
  putApiV2SharingAgreementsSharingAgreementIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharingAgreementsHandler = app
  .openapi(getApiV2SharingAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2SharingAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2SharingAgreementsSharingAgreementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2SharingAgreementsSharingAgreementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2SharingAgreementsSharingAgreementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
