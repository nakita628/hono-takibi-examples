import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChecksChkIdRoute,
  getChecksChkIdRoute,
  getChecksRoute,
  postChecksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const checksHandler = app
  .openapi(getChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChecksChkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChecksChkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
