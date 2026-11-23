import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociationHandler = app.openapi(
  postXAmzTargetRoute53ResolverGetResolverQueryLogConfigAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
