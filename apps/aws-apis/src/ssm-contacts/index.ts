import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetSsmContactsAcceptPageHandler,
  xAmzTargetSsmContactsActivateContactChannelHandler,
  xAmzTargetSsmContactsCreateContactChannelHandler,
  xAmzTargetSsmContactsCreateContactHandler,
  xAmzTargetSsmContactsCreateRotationHandler,
  xAmzTargetSsmContactsCreateRotationOverrideHandler,
  xAmzTargetSsmContactsDeactivateContactChannelHandler,
  xAmzTargetSsmContactsDeleteContactChannelHandler,
  xAmzTargetSsmContactsDeleteContactHandler,
  xAmzTargetSsmContactsDeleteRotationHandler,
  xAmzTargetSsmContactsDeleteRotationOverrideHandler,
  xAmzTargetSsmContactsDescribeEngagementHandler,
  xAmzTargetSsmContactsDescribePageHandler,
  xAmzTargetSsmContactsGetContactChannelHandler,
  xAmzTargetSsmContactsGetContactHandler,
  xAmzTargetSsmContactsGetContactPolicyHandler,
  xAmzTargetSsmContactsGetRotationHandler,
  xAmzTargetSsmContactsGetRotationOverrideHandler,
  xAmzTargetSsmContactsListContactChannelsHandler,
  xAmzTargetSsmContactsListContactsHandler,
  xAmzTargetSsmContactsListEngagementsHandler,
  xAmzTargetSsmContactsListPageReceiptsHandler,
  xAmzTargetSsmContactsListPageResolutionsHandler,
  xAmzTargetSsmContactsListPagesByContactHandler,
  xAmzTargetSsmContactsListPagesByEngagementHandler,
  xAmzTargetSsmContactsListPreviewRotationShiftsHandler,
  xAmzTargetSsmContactsListRotationOverridesHandler,
  xAmzTargetSsmContactsListRotationsHandler,
  xAmzTargetSsmContactsListRotationShiftsHandler,
  xAmzTargetSsmContactsListTagsForResourceHandler,
  xAmzTargetSsmContactsPutContactPolicyHandler,
  xAmzTargetSsmContactsSendActivationCodeHandler,
  xAmzTargetSsmContactsStartEngagementHandler,
  xAmzTargetSsmContactsStopEngagementHandler,
  xAmzTargetSsmContactsTagResourceHandler,
  xAmzTargetSsmContactsUntagResourceHandler,
  xAmzTargetSsmContactsUpdateContactChannelHandler,
  xAmzTargetSsmContactsUpdateContactHandler,
  xAmzTargetSsmContactsUpdateRotationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetSsmContactsAcceptPageHandler)
  .route('/', xAmzTargetSsmContactsActivateContactChannelHandler)
  .route('/', xAmzTargetSsmContactsCreateContactHandler)
  .route('/', xAmzTargetSsmContactsCreateContactChannelHandler)
  .route('/', xAmzTargetSsmContactsCreateRotationHandler)
  .route('/', xAmzTargetSsmContactsCreateRotationOverrideHandler)
  .route('/', xAmzTargetSsmContactsDeactivateContactChannelHandler)
  .route('/', xAmzTargetSsmContactsDeleteContactHandler)
  .route('/', xAmzTargetSsmContactsDeleteContactChannelHandler)
  .route('/', xAmzTargetSsmContactsDeleteRotationHandler)
  .route('/', xAmzTargetSsmContactsDeleteRotationOverrideHandler)
  .route('/', xAmzTargetSsmContactsDescribeEngagementHandler)
  .route('/', xAmzTargetSsmContactsDescribePageHandler)
  .route('/', xAmzTargetSsmContactsGetContactHandler)
  .route('/', xAmzTargetSsmContactsGetContactChannelHandler)
  .route('/', xAmzTargetSsmContactsGetContactPolicyHandler)
  .route('/', xAmzTargetSsmContactsGetRotationHandler)
  .route('/', xAmzTargetSsmContactsGetRotationOverrideHandler)
  .route('/', xAmzTargetSsmContactsListContactChannelsHandler)
  .route('/', xAmzTargetSsmContactsListContactsHandler)
  .route('/', xAmzTargetSsmContactsListEngagementsHandler)
  .route('/', xAmzTargetSsmContactsListPageReceiptsHandler)
  .route('/', xAmzTargetSsmContactsListPageResolutionsHandler)
  .route('/', xAmzTargetSsmContactsListPagesByContactHandler)
  .route('/', xAmzTargetSsmContactsListPagesByEngagementHandler)
  .route('/', xAmzTargetSsmContactsListPreviewRotationShiftsHandler)
  .route('/', xAmzTargetSsmContactsListRotationOverridesHandler)
  .route('/', xAmzTargetSsmContactsListRotationShiftsHandler)
  .route('/', xAmzTargetSsmContactsListRotationsHandler)
  .route('/', xAmzTargetSsmContactsListTagsForResourceHandler)
  .route('/', xAmzTargetSsmContactsPutContactPolicyHandler)
  .route('/', xAmzTargetSsmContactsSendActivationCodeHandler)
  .route('/', xAmzTargetSsmContactsStartEngagementHandler)
  .route('/', xAmzTargetSsmContactsStopEngagementHandler)
  .route('/', xAmzTargetSsmContactsTagResourceHandler)
  .route('/', xAmzTargetSsmContactsUntagResourceHandler)
  .route('/', xAmzTargetSsmContactsUpdateContactHandler)
  .route('/', xAmzTargetSsmContactsUpdateContactChannelHandler)
  .route('/', xAmzTargetSsmContactsUpdateRotationHandler)

export default app
