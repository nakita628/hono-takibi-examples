import { OpenAPIHono } from '@hono/zod-openapi'
import { getCaseSearchCaseSearchIdRoute, getCaseSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const caseSearchHandler = app
  .openapi(getCaseSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCaseSearchCaseSearchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
