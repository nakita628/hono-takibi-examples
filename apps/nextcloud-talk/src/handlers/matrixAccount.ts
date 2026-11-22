import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute,
  deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute,
  getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute,
  getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountBackupRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountCheckRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute,
  postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute,
  putOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute,
  putOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const matrixAccountHandler = app
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsSpreedApiApiVersionMatrixAccountVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionMatrixAccountBackupRoute, (c) => {
    throw new Error('Not implemented')
  })
