import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteSSHPublicKeyRoute, postActionDeleteSSHPublicKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteSSHPublicKeyHandler = app
  .openapi(getActionDeleteSSHPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteSSHPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
