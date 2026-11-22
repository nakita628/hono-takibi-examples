import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiUserRoute, postApiUserRegisterUserRoute, putApiUserUpdateuserRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getApiUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiUserRegisterUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiUserUpdateuserRoute, (c) => {
    throw new Error('Not implemented')
  })
