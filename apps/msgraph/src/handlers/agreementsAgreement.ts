import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgreementsAgreementIdRoute,
  getAgreementsAgreementIdRoute,
  getAgreementsRoute,
  patchAgreementsAgreementIdRoute,
  postAgreementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agreementsAgreementHandler = app
  .openapi(getAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgreementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgreementsAgreementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgreementsAgreementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgreementsAgreementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
