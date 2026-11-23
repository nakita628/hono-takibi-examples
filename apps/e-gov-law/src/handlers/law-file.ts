import { OpenAPIHono } from '@hono/zod-openapi'
import { getLawFileFileTypeLawIdOrNumOrRevisionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const lawFileHandler = app.openapi(getLawFileFileTypeLawIdOrNumOrRevisionIdRoute, (c) => {
  throw new Error('Not implemented')
})
