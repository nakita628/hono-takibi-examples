import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUploadSSHPublicKeyRoute, postActionUploadSSHPublicKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionUploadSshPublicKeyHandler = app
  .openapi(getActionUploadSSHPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUploadSSHPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
