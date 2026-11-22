import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128ListDelegatedServicesForAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSOrganizationsV20161128ListDelegatedServicesForAccountHandler =
  app.openapi(postXAmzTargetAWSOrganizationsV20161128ListDelegatedServicesForAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
