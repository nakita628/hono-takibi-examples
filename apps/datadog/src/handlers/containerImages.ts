import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2ContainerImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const containerImagesHandler = app.openapi(getApiV2ContainerImagesRoute, (c) => {
  throw new Error('Not implemented')
})
