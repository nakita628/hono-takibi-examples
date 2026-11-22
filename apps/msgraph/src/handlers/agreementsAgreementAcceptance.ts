import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgreementsAgreementIdAcceptancesAgreementAcceptanceIdRoute,
  getAgreementsAgreementIdAcceptancesAgreementAcceptanceIdRoute,
  getAgreementsAgreementIdAcceptancesCountRoute,
  getAgreementsAgreementIdAcceptancesRoute,
  patchAgreementsAgreementIdAcceptancesAgreementAcceptanceIdRoute,
  postAgreementsAgreementIdAcceptancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agreementsAgreementAcceptanceHandler = app
  .openapi(getAgreementsAgreementIdAcceptancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgreementsAgreementIdAcceptancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgreementsAgreementIdAcceptancesAgreementAcceptanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgreementsAgreementIdAcceptancesAgreementAcceptanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgreementsAgreementIdAcceptancesAgreementAcceptanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgreementsAgreementIdAcceptancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
