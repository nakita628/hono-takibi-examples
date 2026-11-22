import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDeleteComponentComponentBuildVersionArnRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteComponentComponentBuildVersionArnHandler = app.openapi(
  deleteDeleteComponentComponentBuildVersionArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
