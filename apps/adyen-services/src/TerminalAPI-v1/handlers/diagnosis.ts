import { OpenAPIHono } from '@hono/zod-openapi'
import { postDiagnosisRoute } from '../routes'

const app = new OpenAPIHono()

export const diagnosisHandler = app.openapi(postDiagnosisRoute, (c) => {
  throw new Error('Not implemented')
})
