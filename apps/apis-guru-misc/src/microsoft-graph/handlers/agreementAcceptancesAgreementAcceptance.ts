import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgreementAcceptancesAgreementAcceptanceIdRoute,
  getAgreementAcceptancesAgreementAcceptanceIdRoute,
  getAgreementAcceptancesRoute,
  patchAgreementAcceptancesAgreementAcceptanceIdRoute,
  postAgreementAcceptancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agreementAcceptancesAgreementAcceptanceHandler = app
  .openapi(getAgreementAcceptancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgreementAcceptancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgreementAcceptancesAgreementAcceptanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgreementAcceptancesAgreementAcceptanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgreementAcceptancesAgreementAcceptanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
