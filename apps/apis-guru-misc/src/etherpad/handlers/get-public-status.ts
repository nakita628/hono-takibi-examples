import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetPublicStatusRoute, postGetPublicStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const getPublicStatusHandler = app
  .openapi(getGetPublicStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetPublicStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
