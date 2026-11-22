import { OpenAPIHono } from '@hono/zod-openapi'
import { getV21AccountsAccountIdEnvelopesEnvelopeIdCommentsTranscriptRoute } from '../routes'

const app = new OpenAPIHono()

export const commentsHandler = app.openapi(
  getV21AccountsAccountIdEnvelopesEnvelopeIdCommentsTranscriptRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
