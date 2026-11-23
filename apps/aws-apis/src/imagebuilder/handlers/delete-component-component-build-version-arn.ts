import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDeleteComponentComponentBuildVersionArnRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteComponentComponentBuildVersionArnHandler = app.openapi(
  deleteDeleteComponentComponentBuildVersionArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
