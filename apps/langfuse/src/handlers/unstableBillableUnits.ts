import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPublicUnstableOrganizationsBillableUnitsRoute } from '../routes'

const app = new OpenAPIHono()

export const unstableBillableUnitsHandler = app.openapi(
  getApiPublicUnstableOrganizationsBillableUnitsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
