import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteContinuousProjectsProjectIdStringsCachedRoute,
  getContinuousProjectsProjectIdDocumentsDocumentIdStringsRoute,
  getContinuousProjectsProjectIdStringsCachedRoute,
  getContinuousProjectsProjectIdStringsRoute,
  getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageRoute,
  getProjectsProjectIdDocumentsDocumentIdTranslationsRoute,
  getProjectsProjectIdStringsLanguageCodePackageStatusRoute,
  getProjectsProjectIdStringsLanguageRoute,
  getProjectsProjectIdStringsPackageStatusRoute,
  getProjectsProjectIdStringsRoute,
  getProjectsProjectIdTranslationsLanguageRoute,
  getProjectsProjectIdTranslationsRoute,
  getStringsLanguageCodePackageStatusRoute,
  getStringsRoute,
  postContinuousProjectsProjectIdDocumentsStringsRoute,
  postContinuousProjectsProjectIdStringsRecacheTmsRoute,
  postProjectsProjectIdStringsLanguageCodePackageRoute,
  postProjectsProjectIdStringsPackageRoute,
  postStringsLanguageCodePackageRoute,
  postStringsRoute,
  putStringsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stringsHandler = app
  .openapi(postContinuousProjectsProjectIdDocumentsStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContinuousProjectsProjectIdDocumentsDocumentIdStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContinuousProjectsProjectIdStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteContinuousProjectsProjectIdStringsCachedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContinuousProjectsProjectIdStringsCachedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContinuousProjectsProjectIdStringsRecacheTmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDocumentsDocumentIdTranslationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdDocumentsDocumentIdTranslationsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdStringsPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdStringsPackageStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdStringsLanguageCodePackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdStringsLanguageCodePackageStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdStringsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdTranslationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdTranslationsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putStringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStringsLanguageCodePackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStringsLanguageCodePackageStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
