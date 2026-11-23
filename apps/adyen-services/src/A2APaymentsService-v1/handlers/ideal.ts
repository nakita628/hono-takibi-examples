import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIdealProfileAuthenticateRoute,
  postIdealProfileAuthLinkRoute,
  postIdealProfileRegisterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const idealHandler = app
  .openapi(postIdealProfileAuthLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdealProfileAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdealProfileRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
