import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postXAmzTargetMacieServiceAssociateMemberAccountRoute,
  postXAmzTargetMacieServiceAssociateS3ResourcesRoute,
  postXAmzTargetMacieServiceDisassociateMemberAccountRoute,
  postXAmzTargetMacieServiceDisassociateS3ResourcesRoute,
  postXAmzTargetMacieServiceListMemberAccountsRoute,
  postXAmzTargetMacieServiceListS3ResourcesRoute,
  postXAmzTargetMacieServiceUpdateS3ResourcesRoute,
} from './routes'
import {
  postXAmzTargetMacieServiceAssociateMemberAccountRouteHandler,
  postXAmzTargetMacieServiceAssociateS3ResourcesRouteHandler,
  postXAmzTargetMacieServiceDisassociateMemberAccountRouteHandler,
  postXAmzTargetMacieServiceDisassociateS3ResourcesRouteHandler,
  postXAmzTargetMacieServiceListMemberAccountsRouteHandler,
  postXAmzTargetMacieServiceListS3ResourcesRouteHandler,
  postXAmzTargetMacieServiceUpdateS3ResourcesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postXAmzTargetMacieServiceAssociateMemberAccountRoute,
    postXAmzTargetMacieServiceAssociateMemberAccountRouteHandler,
  )
  .openapi(
    postXAmzTargetMacieServiceAssociateS3ResourcesRoute,
    postXAmzTargetMacieServiceAssociateS3ResourcesRouteHandler,
  )
  .openapi(
    postXAmzTargetMacieServiceDisassociateMemberAccountRoute,
    postXAmzTargetMacieServiceDisassociateMemberAccountRouteHandler,
  )
  .openapi(
    postXAmzTargetMacieServiceDisassociateS3ResourcesRoute,
    postXAmzTargetMacieServiceDisassociateS3ResourcesRouteHandler,
  )
  .openapi(
    postXAmzTargetMacieServiceListMemberAccountsRoute,
    postXAmzTargetMacieServiceListMemberAccountsRouteHandler,
  )
  .openapi(
    postXAmzTargetMacieServiceListS3ResourcesRoute,
    postXAmzTargetMacieServiceListS3ResourcesRouteHandler,
  )
  .openapi(
    postXAmzTargetMacieServiceUpdateS3ResourcesRoute,
    postXAmzTargetMacieServiceUpdateS3ResourcesRouteHandler,
  )

export default app
