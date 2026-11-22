import { OpenAPIHono } from '@hono/zod-openapi'
import { getSlidesSlideMastersIdRoute } from '../routes'

const app = new OpenAPIHono()

export const slidesSlideMastersHandler = app.openapi(getSlidesSlideMastersIdRoute, (c) => {
  throw new Error('Not implemented')
})
