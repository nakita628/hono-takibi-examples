import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteApiV1MspsMspIdLogoRoute, postApiV1MspsMspIdLogoRoute } from '../routes'

const app = new OpenAPIHono()

export const mspsLogoHandler = app
  .openapi(deleteApiV1MspsMspIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MspsMspIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
