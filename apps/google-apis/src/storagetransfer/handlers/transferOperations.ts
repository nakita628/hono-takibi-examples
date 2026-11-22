import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NameRoute,
  postV1NameCancelRoute,
  postV1NamePauseRoute,
  postV1NameResumeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transferOperationsHandler = app
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NamePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
