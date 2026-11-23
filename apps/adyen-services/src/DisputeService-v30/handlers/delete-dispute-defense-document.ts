import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteDisputeDefenseDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteDisputeDefenseDocumentHandler = app.openapi(
  postDeleteDisputeDefenseDocumentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
