import { OpenAPIHono } from '@hono/zod-openapi'
import { getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageRoute } from '../routes'

const app = new OpenAPIHono()

export const translationHandler = app.openapi(
  getEntriesSourceTranslationLanguageWordIdTranslationsTargetTranslationLanguageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
