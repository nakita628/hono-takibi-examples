import { OpenAPIHono } from '@hono/zod-openapi'
import { getDocgenTemplateJobsTemplateIdRoute } from '../routes'

const app = new OpenAPIHono()

export const docgenTemplateJobsHandler = app.openapi(getDocgenTemplateJobsTemplateIdRoute, (c) => {
  throw new Error('Not implemented')
})
