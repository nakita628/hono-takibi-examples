import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdRoute,
  deleteAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
  deleteAgreementsAgreementIdFileRoute,
  getAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdRoute,
  getAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
  getAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsRoute,
  getAgreementsAgreementIdFileLocalizationsRoute,
  getAgreementsAgreementIdFileRoute,
  patchAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdRoute,
  patchAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
  patchAgreementsAgreementIdFileRoute,
  postAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsRoute,
  postAgreementsAgreementIdFileLocalizationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agreementsAgreementFileHandler = app
  .openapi(deleteAgreementsAgreementIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgreementsAgreementIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgreementsAgreementIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgreementsAgreementIdFileLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAgreementsAgreementIdFileLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchAgreementsAgreementIdFileLocalizationsAgreementFileLocalizationIdVersionsAgreementFileVersionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
