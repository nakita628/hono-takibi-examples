import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdvisoriesGhsaIdRoute, getAdvisoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const advisoriesHandler = app
  .openapi(getAdvisoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdvisoriesGhsaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
