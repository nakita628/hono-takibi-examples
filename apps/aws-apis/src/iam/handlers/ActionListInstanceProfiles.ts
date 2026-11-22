import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListInstanceProfilesRoute, postActionListInstanceProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListInstanceProfilesHandler = app
  .openapi(getActionListInstanceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListInstanceProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
