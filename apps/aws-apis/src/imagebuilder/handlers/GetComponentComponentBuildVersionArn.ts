import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetComponentComponentBuildVersionArnRoute } from '../routes'

const app = new OpenAPIHono()

export const GetComponentComponentBuildVersionArnHandler = app.openapi(
  getGetComponentComponentBuildVersionArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
