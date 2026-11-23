import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmbeddedSignUrlSignatureIdRoute, postEmbeddedEditUrlTemplateIdRoute } from '../routes'

const app = new OpenAPIHono()

export const embeddedHandler = app
  .openapi(postEmbeddedEditUrlTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmbeddedSignUrlSignatureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
