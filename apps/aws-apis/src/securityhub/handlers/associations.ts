import { OpenAPIHono } from '@hono/zod-openapi'
import { patchAssociationsRoute, postAssociationsBatchGetRoute } from '../routes'

const app = new OpenAPIHono()

export const associationsHandler = app
  .openapi(postAssociationsBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
