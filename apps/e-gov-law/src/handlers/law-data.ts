import { OpenAPIHono } from '@hono/zod-openapi'
import { getLawDataLawIdOrNumOrRevisionIdRoute } from '../routes'

const app = new OpenAPIHono()

export const lawDataHandler = app.openapi(getLawDataLawIdOrNumOrRevisionIdRoute, (c) => {
  throw new Error('Not implemented')
})
