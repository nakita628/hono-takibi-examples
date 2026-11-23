import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSearchSourceLangRoute,
  getSearchSourceSearchLanguageTranslationsTargetSearchLanguageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchSourceLangRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchSourceSearchLanguageTranslationsTargetSearchLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
