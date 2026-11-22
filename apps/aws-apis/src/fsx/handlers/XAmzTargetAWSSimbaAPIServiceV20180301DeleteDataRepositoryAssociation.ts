import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociationHandler =
  app.openapi(
    postXAmzTargetAWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
