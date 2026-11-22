import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AutotranslateGetProviderUiMetadataRoute,
  getApiV1AutotranslateGetSupportedLanguagesRoute,
  postApiV1AutotranslateSaveSettingsRoute,
  postApiV1AutotranslateTranslateMessageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const autoTranslateHandler = app
  .openapi(getApiV1AutotranslateGetProviderUiMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1AutotranslateGetSupportedLanguagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AutotranslateSaveSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AutotranslateTranslateMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
