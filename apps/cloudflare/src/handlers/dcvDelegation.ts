import { OpenAPIHono } from '@hono/zod-openapi'
import { getZonesZoneIdDcvDelegationUuidRoute } from '../routes'

const app = new OpenAPIHono()

export const dcvDelegationHandler = app.openapi(getZonesZoneIdDcvDelegationUuidRoute, (c) => {
  throw new Error('Not implemented')
})
