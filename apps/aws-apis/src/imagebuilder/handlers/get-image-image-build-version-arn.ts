import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetImageImageBuildVersionArnRoute } from '../routes'

const app = new OpenAPIHono()

export const getImageImageBuildVersionArnHandler = app.openapi(
  getGetImageImageBuildVersionArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
