import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AppEncryptionDeclarationsIdAppRoute,
  getV1AppEncryptionDeclarationsIdRoute,
  getV1AppEncryptionDeclarationsRoute,
  postV1AppEncryptionDeclarationsIdRelationshipsBuildsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appEncryptionDeclarationsHandler = app
  .openapi(getV1AppEncryptionDeclarationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppEncryptionDeclarationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppEncryptionDeclarationsIdAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AppEncryptionDeclarationsIdRelationshipsBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
