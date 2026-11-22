import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetSSHPublicKeyRoute, postActionGetSSHPublicKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetSSHPublicKeyHandler = app
  .openapi(getActionGetSSHPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetSSHPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
