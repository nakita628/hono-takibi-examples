import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV4ProjectsIdApprovalsRoute, postApiV4ProjectsIdApprovalsRoute } from '../routes'

const app = new OpenAPIHono()

export const projectApprovalsHandler = app
  .openapi(getApiV4ProjectsIdApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
