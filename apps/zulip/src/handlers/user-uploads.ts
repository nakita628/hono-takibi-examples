import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserUploadsRealmIdStrFilenameRoute, postUserUploadsRoute } from '../routes'

const app = new OpenAPIHono()

export const userUploadsHandler = app
  .openapi(postUserUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUploadsRealmIdStrFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
