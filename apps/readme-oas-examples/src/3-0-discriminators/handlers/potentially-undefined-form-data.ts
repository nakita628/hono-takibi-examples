import { OpenAPIHono } from '@hono/zod-openapi'
import { postPotentiallyUndefinedFormDataRoute } from '../routes'

const app = new OpenAPIHono()

export const potentiallyUndefinedFormDataHandler = app.openapi(
  postPotentiallyUndefinedFormDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
