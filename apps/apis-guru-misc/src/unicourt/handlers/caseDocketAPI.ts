import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAttorneyAttorneyIdAssociatedPartiesRoute,
  getAttorneyAttorneyIdRoute,
  getCaseCaseIdAttorneysRoute,
  getCaseCaseIdDocketEntriesPrimaryDocumentsRoute,
  getCaseCaseIdDocketEntriesRoute,
  getCaseCaseIdDocketEntriesSecondaryDocumentsRoute,
  getCaseCaseIdHearingsRoute,
  getCaseCaseIdJudgesRoute,
  getCaseCaseIdPartiesRoute,
  getCaseCaseIdRelatedCasesRoute,
  getCaseCaseIdRoute,
  getJudgeJudgeIdRoute,
  getPartyPartyIdAssociatedAttorneysRoute,
  getPartyPartyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const caseDocketAPIHandler = app
  .openapi(getAttorneyAttorneyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttorneyAttorneyIdAssociatedPartiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCaseIdAttorneysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCaseIdDocketEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCaseIdDocketEntriesPrimaryDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCaseIdDocketEntriesSecondaryDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCaseIdHearingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCaseIdJudgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCaseIdPartiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseCaseIdRelatedCasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJudgeJudgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPartyPartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPartyPartyIdAssociatedAttorneysRoute, (c) => {
    throw new Error('Not implemented')
  })
