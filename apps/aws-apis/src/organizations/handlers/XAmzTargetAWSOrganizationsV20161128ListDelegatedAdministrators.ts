import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListDelegatedAdministratorsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128ListDelegatedAdministratorsHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128ListDelegatedAdministratorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
