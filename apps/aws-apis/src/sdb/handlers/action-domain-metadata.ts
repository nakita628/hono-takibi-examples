import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDomainMetadataRoute, postActionDomainMetadataRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDomainMetadataHandler = app
  .openapi(getActionDomainMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDomainMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
