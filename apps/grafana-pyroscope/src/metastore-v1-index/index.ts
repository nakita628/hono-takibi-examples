import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMetastoreV1IndexServiceAddBlockRoute,
  postMetastoreV1IndexServiceGetBlockMetadataRoute,
} from './routes'
import {
  postMetastoreV1IndexServiceAddBlockRouteHandler,
  postMetastoreV1IndexServiceGetBlockMetadataRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postMetastoreV1IndexServiceAddBlockRoute,
    postMetastoreV1IndexServiceAddBlockRouteHandler,
  )
  .openapi(
    postMetastoreV1IndexServiceGetBlockMetadataRoute,
    postMetastoreV1IndexServiceGetBlockMetadataRouteHandler,
  )

export default app
