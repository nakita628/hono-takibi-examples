import { OpenAPIHono } from '@hono/zod-openapi'
import { postV05PatientsSmsNotifyRoute } from '../routes'

const app = new OpenAPIHono()

export const hipFacingHandler = app.openapi(postV05PatientsSmsNotifyRoute, (c) => {
  throw new Error('Not implemented')
})
