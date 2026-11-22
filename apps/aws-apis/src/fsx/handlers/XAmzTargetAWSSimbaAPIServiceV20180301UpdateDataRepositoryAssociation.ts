import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociationHandler =
  app.openapi(
    postXAmzTargetAWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
