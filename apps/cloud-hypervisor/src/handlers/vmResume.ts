import { OpenAPIHono } from '@hono/zod-openapi'
import { putVmResumeRoute } from '../routes'

const app = new OpenAPIHono()

export const vmResumeHandler = app.openapi(putVmResumeRoute, (c) => {
  throw new Error('Not implemented')
})
