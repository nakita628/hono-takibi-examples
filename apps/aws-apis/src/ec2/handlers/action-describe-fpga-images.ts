import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeFpgaImagesRoute, postActionDescribeFpgaImagesRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeFpgaImagesHandler = app
  .openapi(getActionDescribeFpgaImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeFpgaImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
