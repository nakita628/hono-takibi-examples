import { OpenAPIHono } from '@hono/zod-openapi'
import { getBooksV1DictionaryListOfflineMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const dictionaryHandler = app.openapi(
  getBooksV1DictionaryListOfflineMetadataRoute,
  (c) => {},
)
