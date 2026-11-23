import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetresourcepoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const getresourcepoliciesHandler = app.openapi(postGetresourcepoliciesRoute, (c) => {
  throw new Error('Not implemented')
})
