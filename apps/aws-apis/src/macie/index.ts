import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetMacieServiceAssociateMemberAccountHandler,
  XAmzTargetMacieServiceAssociateS3ResourcesHandler,
  XAmzTargetMacieServiceDisassociateMemberAccountHandler,
  XAmzTargetMacieServiceDisassociateS3ResourcesHandler,
  XAmzTargetMacieServiceListMemberAccountsHandler,
  XAmzTargetMacieServiceListS3ResourcesHandler,
  XAmzTargetMacieServiceUpdateS3ResourcesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetMacieServiceAssociateMemberAccountHandler)
  .route('/', XAmzTargetMacieServiceAssociateS3ResourcesHandler)
  .route('/', XAmzTargetMacieServiceDisassociateMemberAccountHandler)
  .route('/', XAmzTargetMacieServiceDisassociateS3ResourcesHandler)
  .route('/', XAmzTargetMacieServiceListMemberAccountsHandler)
  .route('/', XAmzTargetMacieServiceListS3ResourcesHandler)
  .route('/', XAmzTargetMacieServiceUpdateS3ResourcesHandler)

export default app
