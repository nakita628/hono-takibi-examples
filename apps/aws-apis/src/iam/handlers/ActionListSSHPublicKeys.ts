import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListSSHPublicKeysRoute, postActionListSSHPublicKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListSSHPublicKeysHandler = app
  .openapi(getActionListSSHPublicKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListSSHPublicKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
