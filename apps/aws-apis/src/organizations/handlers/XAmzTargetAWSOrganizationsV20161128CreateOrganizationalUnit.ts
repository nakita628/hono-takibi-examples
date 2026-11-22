import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128CreateOrganizationalUnitRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128CreateOrganizationalUnitHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128CreateOrganizationalUnitRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
