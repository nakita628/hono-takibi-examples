import { OpenAPIHono } from '@hono/zod-openapi'
import { postGenerateUploadRoute, postGenerateUrlRoute, postGenerateUserRoute } from '../routes'

const app = new OpenAPIHono()

export const generateHandler = app
  .openapi(postGenerateUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGenerateUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGenerateUserRoute, (c) => {
    throw new Error('Not implemented')
  })
