import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMetastoreV1IndexServiceAddBlockRoute,
  postMetastoreV1IndexServiceGetBlockMetadataRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metastoreV1IndexServiceHandler = app
  .openapi(postMetastoreV1IndexServiceAddBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetastoreV1IndexServiceGetBlockMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
