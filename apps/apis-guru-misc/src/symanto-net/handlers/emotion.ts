import { OpenAPIHono } from '@hono/zod-openapi'
import { postEmotionRoute } from '../routes'

const app = new OpenAPIHono()

export const emotionHandler = app.openapi(postEmotionRoute, (c) => {
  throw new Error('Not implemented')
})
