import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AutofillsJobIdRoute, postV1AutofillsRoute } from '../routes'

const app = new OpenAPIHono()

export const autofillHandler = app
  .openapi(postV1AutofillsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AutofillsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
