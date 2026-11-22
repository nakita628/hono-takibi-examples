import { OpenAPIHono } from '@hono/zod-openapi'
import { postEnablesharingwithawsorganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const enablesharingwithawsorganizationHandler = app.openapi(
  postEnablesharingwithawsorganizationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
