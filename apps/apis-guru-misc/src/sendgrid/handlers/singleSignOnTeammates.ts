import { OpenAPIHono } from '@hono/zod-openapi'
import { patchSsoTeammatesUsernameRoute, postSsoTeammatesRoute } from '../routes'

const app = new OpenAPIHono()

export const singleSignOnTeammatesHandler = app
  .openapi(postSsoTeammatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSsoTeammatesUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
