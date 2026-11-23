import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUpdateUserRoute, postActionUpdateUserRoute } from '../routes'

const app = new OpenAPIHono()

export const actionUpdateUserHandler = app
  .openapi(getActionUpdateUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateUserRoute, (c) => {
    throw new Error('Not implemented')
  })
