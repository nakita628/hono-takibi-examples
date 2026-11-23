import { OpenAPIHono } from '@hono/zod-openapi'
import { postInstitutionHrfeedUploadRoute } from '../routes'

const app = new OpenAPIHono()

export const institutionHandler = app.openapi(postInstitutionHrfeedUploadRoute, (c) => {
  throw new Error('Not implemented')
})
