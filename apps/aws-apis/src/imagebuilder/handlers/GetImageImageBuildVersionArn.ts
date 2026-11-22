import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetImageImageBuildVersionArnRoute } from '../routes'

const app = new OpenAPIHono()

export const GetImageImageBuildVersionArnHandler = app.openapi(
  getGetImageImageBuildVersionArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
