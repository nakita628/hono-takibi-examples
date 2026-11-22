import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postKmsKeyIdDecryptRoute,
  postKmsKeyIdEncryptRoute,
  postKmsKeyIdGenerateDataKeyRoute,
  postKmsKeyIdReEncryptRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cryptoHandler = app
  .openapi(postKmsKeyIdDecryptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKmsKeyIdEncryptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKmsKeyIdReEncryptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKmsKeyIdGenerateDataKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
