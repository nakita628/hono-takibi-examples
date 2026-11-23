import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1EmailIdentitiesEmailIdentityDkimSigningRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app.openapi(putV1EmailIdentitiesEmailIdentityDkimSigningRoute, (c) => {
  throw new Error('Not implemented')
})
