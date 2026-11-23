import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsSimbaApiServiceV20180301CreateDataRepositoryAssociationHandler =
  app.openapi(
    postXAmzTargetAWSSimbaAPIServiceV20180301CreateDataRepositoryAssociationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
