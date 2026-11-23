import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101DisassociateConfigurationItemsFromApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsPoseidonServiceV20151101DisassociateConfigurationItemsFromApplicationHandler =
  app.openapi(
    postXAmzTargetAWSPoseidonServiceV20151101DisassociateConfigurationItemsFromApplicationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
