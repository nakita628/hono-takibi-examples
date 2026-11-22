import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDirDirIdPhoneNumberBatchesBatchIdRoute,
  getDirDirIdPhoneNumberBatchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneNumberBatchesHandler = app
  .openapi(getDirDirIdPhoneNumberBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirDirIdPhoneNumberBatchesBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
