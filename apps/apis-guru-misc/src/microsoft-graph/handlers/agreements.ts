import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAgreementsAgreementIdAcceptancesCountRoute,
  getAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsCountRoute,
  getAgreementsAgreementIdFileLocalizationsCountRoute,
  getAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsCountRoute,
  getAgreementsAgreementIdFilesCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agreementsHandler = app
  .openapi(getAgreementsAgreementIdAcceptancesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgreementsAgreementIdFileLocalizationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAgreementsAgreementIdFilesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
