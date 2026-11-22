import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionRotateEncryptionKeyRoute, postActionRotateEncryptionKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionRotateEncryptionKeyHandler = app
  .openapi(getActionRotateEncryptionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRotateEncryptionKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
