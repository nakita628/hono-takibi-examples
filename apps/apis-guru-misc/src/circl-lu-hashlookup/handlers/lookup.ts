import { OpenAPIHono } from '@hono/zod-openapi'
import { getLookupMd5Md5Route, getLookupSha1Sha1Route, getLookupSha256Sha256Route } from '../routes'

const app = new OpenAPIHono()

export const lookupHandler = app
  .openapi(getLookupMd5Md5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupSha1Sha1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLookupSha256Sha256Route, (c) => {
    throw new Error('Not implemented')
  })
