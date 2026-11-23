import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListSSHPublicKeysRoute, postActionListSSHPublicKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListSshPublicKeysHandler = app
  .openapi(getActionListSSHPublicKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListSSHPublicKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
