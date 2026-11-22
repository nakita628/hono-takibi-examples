import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCreateSessionRoute,
  getDeleteSessionRoute,
  getGetSessionInfoRoute,
  postCreateSessionRoute,
  postDeleteSessionRoute,
  postGetSessionInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionHandler = app
  .openapi(getCreateSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeleteSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeleteSessionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGetSessionInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGetSessionInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
