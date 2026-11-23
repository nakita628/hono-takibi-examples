import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCaseCaseIdAttorneysRoute,
  getCaseCaseIdDocketEntriesPrimaryDocumentsRoute,
  getCaseCaseIdDocketEntriesRoute,
  getCaseCaseIdDocketEntriesSecondaryDocumentsRoute,
  getCaseCaseIdDocumentsRoute,
  getCaseCaseIdHearingsRoute,
  getCaseCaseIdJudgesRoute,
  getCaseCaseIdPartiesRoute,
  getCaseCaseIdRelatedCasesRoute,
  getCaseCaseIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const caseHandler = app
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
  .openapi(getCaseCaseIdDocumentsRoute, (c) => {
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
