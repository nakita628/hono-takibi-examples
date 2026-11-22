import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1beta1TextSynthesizeRoute } from '../routes'

const app = new OpenAPIHono()

export const textHandler = app.openapi(postV1beta1TextSynthesizeRoute, (c) => {
  throw new Error('Not implemented')
})
