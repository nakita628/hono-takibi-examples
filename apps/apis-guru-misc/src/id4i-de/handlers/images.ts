import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1PublicImageImageIDRoute } from '../routes'

const app = new OpenAPIHono()

export const imagesHandler = app.openapi(getApiV1PublicImageImageIDRoute, (c) => {
  throw new Error('Not implemented')
})
