import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseUpdateCaseIdRoute, putCaseUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const caseUpdateHandler = app
  .openapi(putCaseUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseUpdateCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
