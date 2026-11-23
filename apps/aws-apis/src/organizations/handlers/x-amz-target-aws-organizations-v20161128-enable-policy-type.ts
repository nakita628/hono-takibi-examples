import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSOrganizationsV20161128EnablePolicyTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsOrganizationsV20161128EnablePolicyTypeHandler = app.openapi(
  postXAmzTargetAWSOrganizationsV20161128EnablePolicyTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
