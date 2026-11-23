import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserImageRoute,
  getUserImageRoute,
  headUserImageRoute,
  postUserImageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userImageHandler = app
  .openapi(postUserImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headUserImageRoute, (c) => {
    throw new Error('Not implemented')
  })
