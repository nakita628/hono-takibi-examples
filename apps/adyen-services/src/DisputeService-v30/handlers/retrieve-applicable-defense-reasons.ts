import { OpenAPIHono } from '@hono/zod-openapi'
import { postRetrieveApplicableDefenseReasonsRoute } from '../routes'

const app = new OpenAPIHono()

export const retrieveApplicableDefenseReasonsHandler = app.openapi(
  postRetrieveApplicableDefenseReasonsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
