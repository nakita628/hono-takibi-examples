import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSmsIdIndexRoute,
  getSmsIdIndexRoute,
  getSmsIndexRoute,
  patchSmsIdIndexRoute,
  postSmsIdResendIndexRoute,
  postSmsIndexRoute,
  putSmsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const smsHandler = app
  .openapi(getSmsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSmsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSmsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSmsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSmsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsIdResendIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
