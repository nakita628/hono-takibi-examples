import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpTranslationLanguagesRoute,
  postOcsV2PhpTranslationTranslateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const translationApiHandler = app
  .openapi(getOcsV2PhpTranslationLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpTranslationTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
