import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2LanguagesLocaleIDRoute,
  getApiV2LanguagesLocaleIDRoute,
  getApiV2LanguagesRoute,
  postApiV2LanguagesRoute,
  putApiV2LanguagesLocaleIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const languagesHandler = app
  .openapi(getApiV2LanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2LanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2LanguagesLocaleIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2LanguagesLocaleIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2LanguagesLocaleIDRoute, (c) => {
    throw new Error('Not implemented')
  })
