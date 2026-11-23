import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCryptoCertificatekeypairsKpUuidIndexRoute,
  getCryptoCertificatekeypairsIndexRoute,
  getCryptoCertificatekeypairsKpUuidIndexRoute,
  getCryptoCertificatekeypairsKpUuidUsedByIndexRoute,
  getCryptoCertificatekeypairsKpUuidViewCertificateIndexRoute,
  getCryptoCertificatekeypairsKpUuidViewPrivateKeyIndexRoute,
  patchCryptoCertificatekeypairsKpUuidIndexRoute,
  postCryptoCertificatekeypairsGenerateIndexRoute,
  postCryptoCertificatekeypairsIndexRoute,
  putCryptoCertificatekeypairsKpUuidIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cryptoHandler = app
  .openapi(getCryptoCertificatekeypairsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCryptoCertificatekeypairsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCryptoCertificatekeypairsKpUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCryptoCertificatekeypairsKpUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCryptoCertificatekeypairsKpUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCryptoCertificatekeypairsKpUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCryptoCertificatekeypairsKpUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCryptoCertificatekeypairsKpUuidViewCertificateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCryptoCertificatekeypairsKpUuidViewPrivateKeyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCryptoCertificatekeypairsGenerateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
