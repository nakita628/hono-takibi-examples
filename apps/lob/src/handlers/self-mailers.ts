import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSelfMailersSfmIdRoute,
  getSelfMailersRoute,
  getSelfMailersSfmIdRoute,
  postSelfMailersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const selfMailersHandler = app
  .openapi(getSelfMailersSfmIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSelfMailersSfmIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSelfMailersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSelfMailersRoute, (c) => {
    throw new Error('Not implemented')
  })
