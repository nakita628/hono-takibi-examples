import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDeleteImageImageBuildVersionArnRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteImageImageBuildVersionArnHandler = app.openapi(
  deleteDeleteImageImageBuildVersionArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
