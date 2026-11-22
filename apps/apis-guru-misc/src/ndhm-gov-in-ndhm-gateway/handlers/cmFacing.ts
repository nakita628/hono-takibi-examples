import { OpenAPIHono } from '@hono/zod-openapi'
import { postV05PatientsSmsOnNotifyRoute } from '../routes'

const app = new OpenAPIHono()

export const cmFacingHandler = app.openapi(postV05PatientsSmsOnNotifyRoute, (c) => {
  throw new Error('Not implemented')
})
