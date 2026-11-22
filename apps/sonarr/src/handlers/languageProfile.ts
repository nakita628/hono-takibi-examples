import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3LanguageprofileIdRoute,
  getApiV3LanguageprofileIdRoute,
  getApiV3LanguageprofileRoute,
  postApiV3LanguageprofileRoute,
  putApiV3LanguageprofileIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const languageProfileHandler = app
  .openapi(postApiV3LanguageprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LanguageprofileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3LanguageprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3LanguageprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3LanguageprofileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
