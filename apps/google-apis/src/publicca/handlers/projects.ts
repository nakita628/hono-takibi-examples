import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1beta1ParentExternalAccountKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app.openapi(postV1beta1ParentExternalAccountKeysRoute, (c) => {
  throw new Error('Not implemented')
})
