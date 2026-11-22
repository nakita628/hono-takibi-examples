import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgreementsAgreementIdFilesAgreementFileLocalizationIdRoute,
  deleteAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
  getAgreementsAgreementIdFilesAgreementFileLocalizationIdRoute,
  getAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
  getAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsCountRoute,
  getAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsRoute,
  getAgreementsAgreementIdFilesCountRoute,
  getAgreementsAgreementIdFilesRoute,
  patchAgreementsAgreementIdFilesAgreementFileLocalizationIdRoute,
  patchAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
  postAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsRoute,
  postAgreementsAgreementIdFilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agreementsAgreementFileLocalizationHandler = app
  .openapi(getAgreementsAgreementIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgreementsAgreementIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgreementsAgreementIdFilesAgreementFileLocalizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgreementsAgreementIdFilesAgreementFileLocalizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgreementsAgreementIdFilesAgreementFileLocalizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAgreementsAgreementIdFilesAgreementFileLocalizationIdVersionsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgreementsAgreementIdFilesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
