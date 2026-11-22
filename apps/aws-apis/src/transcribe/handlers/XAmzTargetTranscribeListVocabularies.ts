import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetTranscribeListVocabulariesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetTranscribeListVocabulariesHandler = app.openapi(
  postXAmzTargetTranscribeListVocabulariesRoute,
  (c) => {},
)
