import { OpenAPIHono } from '@hono/zod-openapi'
import { postEkmanEmotionRoute } from '../routes'

const app = new OpenAPIHono()

export const ekmanEmotionHandler = app.openapi(postEkmanEmotionRoute, (c) => {
  throw new Error('Not implemented')
})
