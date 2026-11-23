import { OpenAPIHono } from '@hono/zod-openapi'
import { getJobJobArnRoute, postJobRoute, putJobJobArnCancelRoute } from '../routes'

const app = new OpenAPIHono()

export const jobHandler = app
  .openapi(putJobJobArnCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJobJobArnRoute, (c) => {
    throw new Error('Not implemented')
  })
