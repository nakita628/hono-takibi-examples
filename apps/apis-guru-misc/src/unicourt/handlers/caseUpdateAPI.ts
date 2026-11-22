import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseUpdateCaseIdRoute, getCaseUpdatesRoute, putCaseUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const caseUpdateAPIHandler = app
  .openapi(putCaseUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseUpdateCaseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseUpdatesRoute, (c) => {
    throw new Error('Not implemented')
  })
