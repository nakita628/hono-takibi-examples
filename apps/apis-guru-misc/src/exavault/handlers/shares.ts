import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSharesIdRoute,
  getSharesIdRoute,
  getSharesRoute,
  patchSharesIdRoute,
  postSharesCompleteSendIdRoute,
  postSharesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharesHandler = app
  .openapi(getSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSharesCompleteSendIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSharesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSharesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
