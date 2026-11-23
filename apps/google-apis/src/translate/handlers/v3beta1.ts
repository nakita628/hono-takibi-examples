import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3beta1NameRoute,
  getV3beta1NameLocationsRoute,
  getV3beta1NameOperationsRoute,
  getV3beta1NameRoute,
  getV3beta1ParentGlossariesRoute,
  getV3beta1ParentSupportedLanguagesRoute,
  postV3beta1NameCancelRoute,
  postV3beta1NameWaitRoute,
  postV3beta1ParentBatchTranslateDocumentRoute,
  postV3beta1ParentBatchTranslateTextRoute,
  postV3beta1ParentDetectLanguageRoute,
  postV3beta1ParentGlossariesRoute,
  postV3beta1ParentTranslateDocumentRoute,
  postV3beta1ParentTranslateTextRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v3beta1Handler = app
  .openapi(deleteV3beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1NameWaitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentGlossariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentGlossariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3beta1ParentSupportedLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentBatchTranslateDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentBatchTranslateTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentDetectLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentTranslateDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3beta1ParentTranslateTextRoute, (c) => {
    throw new Error('Not implemented')
  })
