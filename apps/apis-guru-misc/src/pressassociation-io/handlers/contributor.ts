import { OpenAPIHono } from '@hono/zod-openapi'
import { getContributorContributorIdRoute, getContributorRoute } from '../routes'

const app = new OpenAPIHono()

export const contributorHandler = app
  .openapi(getContributorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContributorContributorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
