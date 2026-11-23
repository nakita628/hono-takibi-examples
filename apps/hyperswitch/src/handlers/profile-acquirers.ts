import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postProfileAcquirersProfileIdProfileAcquirerIdRoute,
  postProfileAcquirersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const profileAcquirersHandler = app
  .openapi(postProfileAcquirersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProfileAcquirersProfileIdProfileAcquirerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
