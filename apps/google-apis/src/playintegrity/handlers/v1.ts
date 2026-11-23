import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1PackageNameDecodeIntegrityTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app.openapi(postV1PackageNameDecodeIntegrityTokenRoute, (c) => {
  throw new Error('Not implemented')
})
