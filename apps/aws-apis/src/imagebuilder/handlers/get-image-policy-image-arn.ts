import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetImagePolicyImageArnRoute } from '../routes'

const app = new OpenAPIHono()

export const getImagePolicyImageArnHandler = app.openapi(getGetImagePolicyImageArnRoute, (c) => {
  throw new Error('Not implemented')
})
