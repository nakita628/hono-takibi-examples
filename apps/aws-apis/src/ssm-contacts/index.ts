import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetSSMContactsAcceptPageHandler,
  XAmzTargetSSMContactsActivateContactChannelHandler,
  XAmzTargetSSMContactsCreateContactChannelHandler,
  XAmzTargetSSMContactsCreateContactHandler,
  XAmzTargetSSMContactsCreateRotationHandler,
  XAmzTargetSSMContactsCreateRotationOverrideHandler,
  XAmzTargetSSMContactsDeactivateContactChannelHandler,
  XAmzTargetSSMContactsDeleteContactChannelHandler,
  XAmzTargetSSMContactsDeleteContactHandler,
  XAmzTargetSSMContactsDeleteRotationHandler,
  XAmzTargetSSMContactsDeleteRotationOverrideHandler,
  XAmzTargetSSMContactsDescribeEngagementHandler,
  XAmzTargetSSMContactsDescribePageHandler,
  XAmzTargetSSMContactsGetContactChannelHandler,
  XAmzTargetSSMContactsGetContactHandler,
  XAmzTargetSSMContactsGetContactPolicyHandler,
  XAmzTargetSSMContactsGetRotationHandler,
  XAmzTargetSSMContactsGetRotationOverrideHandler,
  XAmzTargetSSMContactsListContactChannelsHandler,
  XAmzTargetSSMContactsListContactsHandler,
  XAmzTargetSSMContactsListEngagementsHandler,
  XAmzTargetSSMContactsListPageReceiptsHandler,
  XAmzTargetSSMContactsListPageResolutionsHandler,
  XAmzTargetSSMContactsListPagesByContactHandler,
  XAmzTargetSSMContactsListPagesByEngagementHandler,
  XAmzTargetSSMContactsListPreviewRotationShiftsHandler,
  XAmzTargetSSMContactsListRotationOverridesHandler,
  XAmzTargetSSMContactsListRotationsHandler,
  XAmzTargetSSMContactsListRotationShiftsHandler,
  XAmzTargetSSMContactsListTagsForResourceHandler,
  XAmzTargetSSMContactsPutContactPolicyHandler,
  XAmzTargetSSMContactsSendActivationCodeHandler,
  XAmzTargetSSMContactsStartEngagementHandler,
  XAmzTargetSSMContactsStopEngagementHandler,
  XAmzTargetSSMContactsTagResourceHandler,
  XAmzTargetSSMContactsUntagResourceHandler,
  XAmzTargetSSMContactsUpdateContactChannelHandler,
  XAmzTargetSSMContactsUpdateContactHandler,
  XAmzTargetSSMContactsUpdateRotationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetSSMContactsAcceptPageHandler)
  .route('/', XAmzTargetSSMContactsActivateContactChannelHandler)
  .route('/', XAmzTargetSSMContactsCreateContactHandler)
  .route('/', XAmzTargetSSMContactsCreateContactChannelHandler)
  .route('/', XAmzTargetSSMContactsCreateRotationHandler)
  .route('/', XAmzTargetSSMContactsCreateRotationOverrideHandler)
  .route('/', XAmzTargetSSMContactsDeactivateContactChannelHandler)
  .route('/', XAmzTargetSSMContactsDeleteContactHandler)
  .route('/', XAmzTargetSSMContactsDeleteContactChannelHandler)
  .route('/', XAmzTargetSSMContactsDeleteRotationHandler)
  .route('/', XAmzTargetSSMContactsDeleteRotationOverrideHandler)
  .route('/', XAmzTargetSSMContactsDescribeEngagementHandler)
  .route('/', XAmzTargetSSMContactsDescribePageHandler)
  .route('/', XAmzTargetSSMContactsGetContactHandler)
  .route('/', XAmzTargetSSMContactsGetContactChannelHandler)
  .route('/', XAmzTargetSSMContactsGetContactPolicyHandler)
  .route('/', XAmzTargetSSMContactsGetRotationHandler)
  .route('/', XAmzTargetSSMContactsGetRotationOverrideHandler)
  .route('/', XAmzTargetSSMContactsListContactChannelsHandler)
  .route('/', XAmzTargetSSMContactsListContactsHandler)
  .route('/', XAmzTargetSSMContactsListEngagementsHandler)
  .route('/', XAmzTargetSSMContactsListPageReceiptsHandler)
  .route('/', XAmzTargetSSMContactsListPageResolutionsHandler)
  .route('/', XAmzTargetSSMContactsListPagesByContactHandler)
  .route('/', XAmzTargetSSMContactsListPagesByEngagementHandler)
  .route('/', XAmzTargetSSMContactsListPreviewRotationShiftsHandler)
  .route('/', XAmzTargetSSMContactsListRotationOverridesHandler)
  .route('/', XAmzTargetSSMContactsListRotationShiftsHandler)
  .route('/', XAmzTargetSSMContactsListRotationsHandler)
  .route('/', XAmzTargetSSMContactsListTagsForResourceHandler)
  .route('/', XAmzTargetSSMContactsPutContactPolicyHandler)
  .route('/', XAmzTargetSSMContactsSendActivationCodeHandler)
  .route('/', XAmzTargetSSMContactsStartEngagementHandler)
  .route('/', XAmzTargetSSMContactsStopEngagementHandler)
  .route('/', XAmzTargetSSMContactsTagResourceHandler)
  .route('/', XAmzTargetSSMContactsUntagResourceHandler)
  .route('/', XAmzTargetSSMContactsUpdateContactHandler)
  .route('/', XAmzTargetSSMContactsUpdateContactChannelHandler)
  .route('/', XAmzTargetSSMContactsUpdateRotationHandler)

export default app
