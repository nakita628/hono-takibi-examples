import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetMacieServiceAssociateMemberAccountHandler,
  xAmzTargetMacieServiceAssociateS3ResourcesHandler,
  xAmzTargetMacieServiceDisassociateMemberAccountHandler,
  xAmzTargetMacieServiceDisassociateS3ResourcesHandler,
  xAmzTargetMacieServiceListMemberAccountsHandler,
  xAmzTargetMacieServiceListS3ResourcesHandler,
  xAmzTargetMacieServiceUpdateS3ResourcesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetMacieServiceAssociateMemberAccountHandler)
  .route('/', xAmzTargetMacieServiceAssociateS3ResourcesHandler)
  .route('/', xAmzTargetMacieServiceDisassociateMemberAccountHandler)
  .route('/', xAmzTargetMacieServiceDisassociateS3ResourcesHandler)
  .route('/', xAmzTargetMacieServiceListMemberAccountsHandler)
  .route('/', xAmzTargetMacieServiceListS3ResourcesHandler)
  .route('/', xAmzTargetMacieServiceUpdateS3ResourcesHandler)

export default app
