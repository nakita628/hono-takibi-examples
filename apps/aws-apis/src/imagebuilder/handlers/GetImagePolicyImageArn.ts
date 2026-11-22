import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetImagePolicyImageArnRoute } from '../routes'

const app = new OpenAPIHono()

export const GetImagePolicyImageArnHandler = app.openapi(getGetImagePolicyImageArnRoute, (c) => {
  throw new Error('Not implemented')
})
