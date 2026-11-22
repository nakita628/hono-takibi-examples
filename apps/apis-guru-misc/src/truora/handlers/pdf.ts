import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1ChecksCheckIdPdfRoute, postV1ChecksCheckIdPdfRoute } from '../routes'

const app = new OpenAPIHono()

export const pdfHandler = app
  .openapi(getV1ChecksCheckIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ChecksCheckIdPdfRoute, (c) => {
    throw new Error('Not implemented')
  })
