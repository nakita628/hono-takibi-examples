import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101AssociateConfigurationItemsToApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSPoseidonServiceV20151101AssociateConfigurationItemsToApplicationHandler =
  app.openapi(
    postXAmzTargetAWSPoseidonServiceV20151101AssociateConfigurationItemsToApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
