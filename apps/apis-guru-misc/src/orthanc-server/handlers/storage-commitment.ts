import { OpenAPIHono } from '@hono/zod-openapi'
import { getStorageCommitmentIdRoute, postStorageCommitmentIdRemoveRoute } from '../routes'

const app = new OpenAPIHono()

export const storageCommitmentHandler = app
  .openapi(getStorageCommitmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStorageCommitmentIdRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
